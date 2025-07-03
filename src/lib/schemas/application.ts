
import { z } from 'zod';

// Schema for creating a new application via the API
export const ApplicationApiInputSchema = z.object({
  jobId: z.string(),
  applicantId: z.string(), // This will be the UID of the logged-in user
  // Optional fields for future expansion
  coverLetter: z.string().optional(),
  resumeUrl: z.string().url().optional(),
});
export type ApplicationApiInput = z.infer<typeof ApplicationApiInputSchema>;

// Schema for the data stored in the backend (Firestore)
export const BackendStoredApplicationSchema = ApplicationApiInputSchema.extend({
  id: z.string(),
  applicationDate: z.string(), // ISO date string
  status: z.enum(['submitted', 'viewed', 'interviewing', 'offered', 'rejected']),
});
export type BackendStoredApplication = z.infer<typeof BackendStoredApplicationSchema>;
