
'use server';

/**
 * @fileOverview Provides AI-powered job recommendations for job seekers based on their profile and search history.
 *
 * - JobSeekerRecommendationsInput: Input type for the job seeker recommendations flow.
 * - RecommendedJob: Schema for a single structured job recommendation.
 * - JobSeekerRecommendationsOutput: Output type for the job seeker recommendations flow.
 * - getJobSeekerRecommendations: A function that retrieves job recommendations for a job seeker.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobSeekerRecommendationsInputSchema = z.object({
  jobSeekerProfile: z
    .string()
    .describe('The job seeker profile, including skills, experience, education, and career goals.'),
  searchHistory: z.string().describe('The job seeker search history, including keywords, locations, and preferred job types or industries.'),
});
export type JobSeekerRecommendationsInput = z.infer<typeof JobSeekerRecommendationsInputSchema>;

const RecommendedJobSchema = z.object({
  jobTitle: z.string().describe("The specific, suggested job title."),
  companyName: z.string().optional().describe("An example company name that might offer such a role. Can be a well-known company or a type of company (e.g., 'Tech Startup', 'Financial Institution')."),
  location: z.string().optional().describe("A typical location for this type of role (e.g., 'San Francisco, CA', 'Remote', 'Global')."),
  reasoning: z.string().describe("A brief (1-2 sentences) explanation of why this job is a good match for the user's profile and preferences, highlighting relevant skills or experiences."),
  matchConfidence: z.number().min(0).max(100).optional().describe("A confidence score from 0 to 100 indicating how strong the match is, based on the provided information."),
});
export type RecommendedJob = z.infer<typeof RecommendedJobSchema>;

const JobSeekerRecommendationsOutputSchema = z.object({
  jobRecommendations: z
    .array(RecommendedJobSchema)
    .describe('A list of 3 to 5 structured job recommendations based on the job seeker profile and search history. If input is sparse, provide more general career path suggestions that align with any information given.'),
});
export type JobSeekerRecommendationsOutput = z.infer<typeof JobSeekerRecommendationsOutputSchema>;

export async function getJobSeekerRecommendations(
  input: JobSeekerRecommendationsInput
): Promise<JobSeekerRecommendationsOutput> {
  return jobSeekerRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobSeekerRecommendationsPrompt',
  input: {schema: JobSeekerRecommendationsInputSchema},
  output: {schema: JobSeekerRecommendationsOutputSchema},
  prompt: `You are an expert AI career advisor and job matching specialist.
Your goal is to provide insightful and relevant job recommendations to users based on their profile information and search preferences.

Analyze the provided job seeker profile:
{{{jobSeekerProfile}}}

And their search history/preferences:
{{{searchHistory}}}

Based on this information, generate 3 to 5 job recommendations.
For each recommendation, please provide:
- A specific job title.
- An example company name that typically hires for such a role (e.g., 'Tech Startup', 'Global Enterprise', 'Fictional Company Inc.').
- A typical location or "Remote" (if applicable).
- A brief reasoning (1-2 sentences) explaining why this job is a good match for the user, highlighting relevant skills or experiences from their profile.
- Optionally, a match confidence score (0-100).

Present the recommendations in the structured format defined by the output schema.
Focus on quality and relevance. If the input is sparse, provide more general career path suggestions that align with any information given.
Prioritize actionable and realistic suggestions.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ],
  },
});

const jobSeekerRecommendationsFlow = ai.defineFlow(
  {
    name: 'jobSeekerRecommendationsFlow',
    inputSchema: JobSeekerRecommendationsInputSchema,
    outputSchema: JobSeekerRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

