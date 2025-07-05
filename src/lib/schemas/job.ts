
import { z } from 'zod';




//import * as z from "zod";

// Define the schema for job posting API input
export const jobPostingApiInputSchema = z.object({
  jobTitle: z.string(),
  companyName: z.string(),
  mainDescription: z.string(),
  requirements: z.string(),
  jobCategory: z.string(),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  jobType: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship', 'Hybrid', 'Remote']),
  location: z.string(),
  applicationDeadline: z.date().optional(),
  isFeatured: z.boolean().optional(),
});


const JobPostingApiInputBaseSchema = z.object({
  jobTitle: z.string().min(5, { message: 'Job title must be at least 5 characters.' }),
  companyName: z.string().min(1, { message: "Company name is required."}),
  companyLogo: z.string().url({ message: "Please provide a valid URL." }).optional().or(z.literal('')),
  mainDescription: z.string().min(50, { message: 'Main description must be at least 50 characters.' }),
  requirements: z.string().min(20, { message: 'Requirements must be at least 20 characters.' }),
  jobCategory: z.string().min(1, { message: "Please select a job category." }),
  salaryMin: z.preprocess(
    (val) => (String(val).trim() === "" || val === null || val === undefined ? undefined : parseFloat(String(val))),
    z.number({invalid_type_error: "Salary must be a number"}).positive().optional()
  ),
  salaryMax: z.preprocess(
    (val) => (String(val).trim() === "" || val === null || val === undefined ? undefined : parseFloat(String(val))),
    z.number({invalid_type_error: "Salary must be a number"}).positive().optional()
  ),
  jobType: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship', 'Hybrid', 'Remote']),
  location: z.string().min(2, { message: 'Location must be specified.' }),
  applicationDeadline: z.coerce.date().optional(),
  isFeatured: z.boolean().default(false),
  applyUrl: z.string().url().optional(),
});

export const JobPostingApiInputSchema = JobPostingApiInputBaseSchema.refine(data => {
    if (data.salaryMin !== undefined && data.salaryMax !== undefined) {
        return data.salaryMax >= data.salaryMin;
    }
    return true;
}, {
    message: "Maximum salary cannot be less than minimum salary if both are provided.",
    path: ["salaryMax"],
});
export type JobPostingApiInput = z.infer<typeof JobPostingApiInputSchema>;

export const BackendStoredJobSchema = JobPostingApiInputBaseSchema.extend({
  id: z.string(),
  submittedDate: z.string().optional(), // ISO date string
  status: z.enum(['pending', 'approved', 'rejected']),
}).refine(data => {
    if (data.salaryMin !== undefined && data.salaryMax !== undefined) {
        return data.salaryMax >= data.salaryMin;
    }
    return true;
}, {
    message: "Maximum salary cannot be less than minimum salary if both are provided.",
    path: ["salaryMax"],
});
export type BackendStoredJob = z.infer<typeof BackendStoredJobSchema>;
