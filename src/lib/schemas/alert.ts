
import { z } from 'zod';

export const AlertApiInputSchema = z.object({
  keywords: z.string().min(1, "Keywords are required."),
  location: z.string().optional().default(''), // Ensure location is always a string, even if empty
  emailNotif: z.boolean().default(true),
  dashboardNotif: z.boolean().default(true),
  userEmail: z.string().email("Invalid email address.").optional().or(z.literal('')), // Allow empty string or valid email
  userId: z.string().optional(),
});
export type AlertApiInput = z.infer<typeof AlertApiInputSchema>;

export const BackendStoredAlertSchema = AlertApiInputSchema.extend({
  id: z.string(),
  createdAt: z.string(), // ISO date string
});
export type BackendStoredAlert = z.infer<typeof BackendStoredAlertSchema>;
