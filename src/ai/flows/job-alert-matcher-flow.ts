
'use server';
/**
 * @fileOverview A Genkit flow to match newly approved jobs against user job alerts using AI.
 *
 * - matchJobToAlerts - Matches a job against a list of user alerts.
 * - JobToMatchSchema - Input schema for the job to be matched.
 * - UserAlertSchema - Input schema for a user's job alert.
 * - MatcherFlowInputSchema - Combined input for the flow.
 * - MatchedNotificationSchema - Output schema for a successful match.
 * - MatcherFlowOutputSchema - Output schema for the flow, listing all matches.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Schema for the job being posted/approved
export const JobToMatchSchema = z.object({
  id: z.string().describe("The unique ID of the job."),
  jobTitle: z.string().describe("The title of the job."),
  description: z.string().describe("The full description of the job, including responsibilities and requirements."),
  location: z.string().describe("The location of the job (e.g., 'San Francisco, CA', 'Remote', 'London, UK')."),
  companyName: z.string().describe("The name of the company posting the job."),
});
export type JobToMatch = z.infer<typeof JobToMatchSchema>;

// Schema for a single user alert
export const UserAlertSchema = z.object({
  userId: z.string().optional().describe("The ID of the user who created the alert (if logged in)."),
  alertId: z.string().describe("The unique ID of the alert itself."),
  keywords: z.string().describe("Keywords for the job alert (e.g., 'React Developer', 'Remote Marketing', 'Project Manager AI')."),
  location: z.string().optional().describe("Desired job location for the alert (e.g., 'San Francisco', 'Remote', 'Berlin')."),
  emailNotif: z.boolean().describe("Preference for email notification."),
  dashboardNotif: z.boolean().describe("Preference for dashboard notification."),
  userEmail: z.string().email().optional().describe("Email address for notifications if the user is anonymous."),
});
export type UserAlert = z.infer<typeof UserAlertSchema>;

// Combined input for the main flow
export const MatcherFlowInputSchema = z.object({
  jobToMatch: JobToMatchSchema,
  userAlerts: z.array(UserAlertSchema),
});
export type MatcherFlowInput = z.infer<typeof MatcherFlowInputSchema>;

// Output for a single matched notification
export const MatchedNotificationSchema = z.object({
  userId: z.string().optional(),
  alertId: z.string(),
  alertKeywords: z.string(),
  jobId: z.string(),
  jobTitle: z.string(),
  companyName: z.string(),
  sendEmail: z.boolean(),
  createDashboardNotif: z.boolean(),
  anonymousUserEmail: z.string().email().optional(),
});
export type MatchedNotification = z.infer<typeof MatchedNotificationSchema>;

// Final output of the flow
export const MatcherFlowOutputSchema = z.object({
  matchedNotifications: z.array(MatchedNotificationSchema),
});
export type MatcherFlowOutput = z.infer<typeof MatcherFlowOutputSchema>;


// Input schema for the AI matching prompt
const JobAlertMatchPromptInputSchema = z.object({
  jobTitle: z.string(),
  jobDescription: z.string(),
  jobLocation: z.string(),
  companyName: z.string(),
  alertKeywords: z.string(),
  alertLocation: z.string().optional().describe("User's preferred location for the alert. Can be 'Any', 'Remote', or a specific place."),
});
type JobAlertMatchPromptInput = z.infer<typeof JobAlertMatchPromptInputSchema>;

// Output schema for the AI matching prompt
const JobAlertMatchPromptOutputSchema = z.object({
  isMatch: z.boolean().describe("True if the job is a relevant match for the alert criteria, false otherwise."),
  matchReasoning: z.string().optional().describe("A brief explanation if it's a match, or why it might be a close but not perfect match if still considered one. Focus on keyword and location relevance."),
});

// Define the AI prompt for matching a single job to a single alert
const jobAlertMatchPrompt = ai.definePrompt({
  name: 'jobAlertSingleMatchPrompt',
  input: { schema: JobAlertMatchPromptInputSchema },
  output: { schema: JobAlertMatchPromptOutputSchema },
  prompt: `You are an intelligent job alert matching assistant. Your task is to determine if the provided job posting is a relevant match for the user's saved job alert criteria.

Job Details to Evaluate:
- Title: {{{jobTitle}}}
- Company: {{{companyName}}}
- Location: {{{jobLocation}}}
- Description:
{{{jobDescription}}}

User's Job Alert Criteria:
- Keywords: {{{alertKeywords}}}
- Preferred Location: {{{alertLocation}}}

Instructions for Matching:
1.  Keyword Relevance:
    - Analyze if the job title and description semantically align with the user's alert keywords.
    - Consider synonyms and related terms (e.g., "Frontend Developer" alert could match "React Engineer" job).
    - If alert keywords are very specific (e.g., "Python with Django"), ensure the job reflects this.
2.  Location Relevance:
    - If user's preferred location is "Remote" or "Any", and the job is "Remote", it's a match.
    - If user specified a city/region, check if the job location matches or is within a reasonable commuting distance or if the job is remote (which often satisfies specific location desires too).
    - If the user did not specify a location ({{{alertLocation}}} is 'Any' or empty), then any job location is acceptable for this criterion.
3.  Holistic Decision:
    - Based on both keyword and location relevance, decide if this job is a sufficiently good match to notify the user. Prioritize strong matches.

Output:
- Set 'isMatch' to true if the job is a relevant match.
- Set 'isMatch' to false if it's not a good match.
- Optionally, provide 'matchReasoning' (1-2 sentences) if it's a match, explaining why it's a good fit, or if it's a borderline case you still consider a match.
`,
  config: {
    safetySettings: [ /* Default safety settings suitable for general text */
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  },
});


// The main exported function that clients will call
export async function matchJobToAlerts(input: MatcherFlowInput): Promise<MatcherFlowOutput> {
  return jobAlertMatcherFlow(input);
}

// The Genkit flow
const jobAlertMatcherFlow = ai.defineFlow(
  {
    name: 'jobAlertMatcherFlow',
    inputSchema: MatcherFlowInputSchema,
    outputSchema: MatcherFlowOutputSchema,
  },
  async (input) => {
    const { jobToMatch, userAlerts } = input;
    const matchedNotifications: MatchedNotification[] = [];

    console.log(`Job Alert Matcher (AI): Starting to process ${userAlerts.length} alerts for job "${jobToMatch.jobTitle}" (ID: ${jobToMatch.id})`);

    for (const alert of userAlerts) {
      const promptInput: JobAlertMatchPromptInput = {
        jobTitle: jobToMatch.jobTitle,
        jobDescription: jobToMatch.description,
        jobLocation: jobToMatch.location,
        companyName: jobToMatch.companyName,
        alertKeywords: alert.keywords,
        alertLocation: alert.location || "Any", // Default to "Any" if user alert has no specific location
      };

      try {
        const { output } = await jobAlertMatchPrompt(promptInput);

        if (output?.isMatch) {
          console.log(`Job Alert Matcher (AI): Match found! Job ID ${jobToMatch.id} matched Alert ID ${alert.alertId}. Reasoning: ${output.matchReasoning || 'N/A'}`);
          const createDashboardNotif = !!(alert.userId && alert.dashboardNotif);
          matchedNotifications.push({
            userId: alert.userId,
            alertId: alert.alertId,
            alertKeywords: alert.keywords, // User's original keywords for the notification
            jobId: jobToMatch.id,
            jobTitle: jobToMatch.jobTitle,
            companyName: jobToMatch.companyName,
            sendEmail: alert.emailNotif,
            createDashboardNotif: createDashboardNotif,
            anonymousUserEmail: alert.userEmail,
          });
        } else {
           // console.log(`Job Alert Matcher (AI): No match for Job ID ${jobToMatch.id} with Alert ID ${alert.alertId}.`);
        }
      } catch (error) {
        console.error(`Job Alert Matcher (AI): Error processing alert ID ${alert.alertId} for job ID ${jobToMatch.id}:`, error);
        // Optionally, decide if a single prompt error should stop the whole flow or just skip this alert
      }
    }
    console.log(`Job Alert Matcher (AI): Finished. Matched ${matchedNotifications.length} alerts for job "${jobToMatch.jobTitle}"`);
    return { matchedNotifications };
  }
);

