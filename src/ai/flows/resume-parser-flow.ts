
'use server';
/**
 * @fileOverview An AI flow to parse resumes and extract structured candidate data.
 *
 * - parseResume - A function that handles the resume parsing process.
 * - ResumeParserInput - The input type for the parseResume function.
 * - ResumeParserOutput - The return type for the parseResume function (matches CandidateProfileSchema).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { CandidateProfileSchema, type CandidateProfile } from '@/lib/schemas/candidate';


export const ResumeParserInputSchema = z.object({
    resumeDataUri: z.string().describe(
        "A resume file, as a data URI that must include a MIME type (e.g., application/pdf) and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ResumeParserInput = z.infer<typeof ResumeParserInputSchema>;

export type ResumeParserOutput = CandidateProfile;

export async function parseResume(input: ResumeParserInput): Promise<ResumeParserOutput> {
  return resumeParserFlow(input);
}

const resumeParserPrompt = ai.definePrompt({
  name: 'resumeParserPrompt',
  input: {schema: ResumeParserInputSchema},
  output: {schema: CandidateProfileSchema},
  prompt: `You are an expert HR professional and data-entry specialist. Your task is to meticulously parse the provided resume and extract the information into a structured JSON format.

Pay close attention to the schema and fill in all the details as accurately as possible. Infer data where appropriate (e.g., 'Present' for end dates of current jobs). If a piece of information is not available in the resume, omit the field from the output.

Resume to parse:
{{media url=resumeDataUri}}

Instructions:
- Extract all personal information, contact details, work experience, education, skills, and any other relevant data.
- For dates, use the format specified in the schema (YYYY-MM-DD or YYYY-MM).
- For skills, categorize them into technical, soft, languages, and tools if possible.
- Ensure the output strictly adheres to the provided JSON schema.
- Do not invent a candidate_id or any metadata fields; they will be handled separately.
`,
   config: {
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  },
});

const resumeParserFlow = ai.defineFlow(
  {
    name: 'resumeParserFlow',
    inputSchema: ResumeParserInputSchema,
    outputSchema: CandidateProfileSchema,
  },
  async input => {
    const { output } = await resumeParserPrompt(input);
    return output!;
  }
);
