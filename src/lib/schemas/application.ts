
import { z } from 'zod';

// Base schema for application data, without refinement
const ApplicationApiInputBaseSchema = z.object({
  jobId: z.string(),
  applicantId: z.string().optional(),
  applicantEmail: z.string().email().optional(),
  // Optional fields for future expansion
  coverLetter: z.string().optional(),
  resumeUrl: z.string().url().optional(),
});

// Schema for creating a new application via the API, with refinement
export const ApplicationApiInputSchema = ApplicationApiInputBaseSchema.refine(data => data.applicantId || data.applicantEmail, {
    message: "Either applicantId or applicantEmail is required",
    path: ["applicantEmail"],
});
export type ApplicationApiInput = z.infer<typeof ApplicationApiInputSchema>;

// Schema for the data stored in the backend (Firestore)
// We extend from the base schema, which is a ZodObject
export const BackendStoredApplicationSchema = ApplicationApiInputBaseSchema.extend({
  id: z.string(),
  applicationDate: z.string(), // ISO date string
  status: z.enum(['submitted', 'viewed', 'interviewing', 'offered', 'rejected']),
});
export type BackendStoredApplication = z.infer<typeof BackendStoredApplicationSchema>;
