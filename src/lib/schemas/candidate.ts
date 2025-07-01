
import { z } from 'zod';

export const LocationSchema = z.object({
  city: z.string(),
  state_province: z.string().optional(),
  country: z.string(),
  postal_code: z.string().optional(),
  timezone: z.string().describe('e.g., "Africa/Lagos", "Europe/London"').optional(),
});
export type Location = z.infer<typeof LocationSchema>;

export const PersonalInfoSchema = z.object({
  full_name: z.string(),
  email: z.string().email(),
  phone: z.object({
    country_code: z.string().describe('e.g., "+234"').optional(),
    number: z.string(),
  }).optional(),
  linkedin_url: z.string().url().optional(),
  github_url: z.string().url().optional(),
  portfolio_url: z.string().url().optional(),
  location: LocationSchema.optional(),
  profile_picture_url: z.string().url().optional(),
  date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD format expected").optional().describe("YYYY-MM-DD"),
  nationality: z.string().optional(),
  pronouns: z.string().optional().describe('e.g., "he/him", "she/her", "they/them"'),
});
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const ExperienceSchema = z.object({
  job_title: z.string(),
  company_name: z.string(),
  location: z.string().describe("City, Country").optional(),
  start_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").describe("YYYY-MM or YYYY-MM-DD"),
  end_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").describe("YYYY-MM, YYYY-MM-DD, or 'Present'").or(z.literal("Present")),
  responsibilities: z.array(z.string()).or(z.string().describe("Single text block also acceptable")),
  achievements: z.array(z.string()).or(z.string().describe("Single text block also acceptable")).optional(),
  skills_used: z.array(z.string()).optional(),
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const EducationSchema = z.object({
  institution_name: z.string(),
  degree: z.string().describe("e.g., BSc Computer Science, MBA"),
  field_of_study: z.string(),
  start_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").optional().describe("YYYY-MM"),
  end_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").or(z.literal("Present")).or(z.string().regex(/^Expected \d{4}-\d{2}$/)).optional().describe("YYYY-MM, 'Present', or 'Expected YYYY-MM'"),
  gpa: z.union([z.number(), z.string()]).optional().describe("e.g., 3.8, 'First Class Honours'"),
  relevant_courses: z.array(z.string()).optional(),
  activities_societies: z.array(z.string()).optional(),
});
export type Education = z.infer<typeof EducationSchema>;

export const TechnicalSkillSchema = z.object({
  skill_name: z.string(),
  proficiency_level: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"]).optional(),
  years_experience: z.number().min(0).optional(),
});
export type TechnicalSkill = z.infer<typeof TechnicalSkillSchema>;

export const LanguageSpokenSchema = z.object({
  language: z.string(),
  proficiency: z.enum(["Native", "Fluent", "Conversational", "Basic"]),
});
export type LanguageSpoken = z.infer<typeof LanguageSpokenSchema>;

export const ToolSoftwareSchema = z.object({
  tool_name: z.string(),
  proficiency_level: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"]).optional(),
});
export type ToolSoftware = z.infer<typeof ToolSoftwareSchema>;

export const SkillsSchema = z.object({
  technical: z.array(TechnicalSkillSchema).optional(),
  soft: z.array(z.string()).optional().describe('e.g., "Communication", "Teamwork"'),
  languages_spoken: z.array(LanguageSpokenSchema).optional(),
  tools_software: z.array(ToolSoftwareSchema).optional(),
});
export type Skills = z.infer<typeof SkillsSchema>;

export const CertificationLicenseSchema = z.object({
  name: z.string(),
  issuing_organization: z.string(),
  issue_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").describe("YYYY-MM"),
  expiration_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").optional().describe("YYYY-MM"),
  credential_id: z.string().optional(),
  credential_url: z.string().url().optional(),
});
export type CertificationLicense = z.infer<typeof CertificationLicenseSchema>;

export const ProjectSchema = z.object({
  project_name: z.string(),
  description: z.string(),
  technologies_used: z.array(z.string()),
  project_url: z.string().url().optional(),
  repository_url: z.string().url().optional(),
  start_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").optional().describe("YYYY-MM"),
  end_date: z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM format expected").optional().describe("YYYY-MM"),
});
export type Project = z.infer<typeof ProjectSchema>;

export const PreferredLocationSchema = z.object({
  city: z.string(),
  state_province: z.string().optional(),
  country: z.string(),
});
export type PreferredLocation = z.infer<typeof PreferredLocationSchema>;

export const SalaryExpectationSchema = z.object({
  amount: z.number(),
  currency: z.string().length(3).describe("e.g., USD, EUR, NGN"),
  frequency: z.enum(["Annual", "Monthly", "Hourly"]),
});
export type SalaryExpectation = z.infer<typeof SalaryExpectationSchema>;

export const JobPreferencesSchema = z.object({
  preferred_job_titles: z.array(z.string()).optional(),
  preferred_industries: z.array(z.string()).optional(),
  preferred_company_sizes: z.array(z.enum(["Startup", "Small", "Medium", "Large", "Enterprise"])).optional(),
  preferred_work_type: z.array(z.enum(["Remote", "On-site", "Hybrid"])).optional(),
  preferred_locations: z.array(PreferredLocationSchema).optional(),
  salary_expectation: SalaryExpectationSchema.optional(),
  willing_to_relocate: z.boolean().optional(),
  willing_to_travel_percentage: z.number().min(0).max(100).optional(),
});
export type JobPreferences = z.infer<typeof JobPreferencesSchema>;

export const AvailabilitySchema = z.object({
  status: z.enum(["Actively Looking", "Passively Looking", "Not Looking", "Available Immediately"]).optional(),
  notice_period_weeks: z.number().min(0).optional(),
  available_from_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD format expected").optional().describe("YYYY-MM-DD"),
});
export type Availability = z.infer<typeof AvailabilitySchema>;

export const AssessmentResultSchema = z.object({
  assessment_name: z.string(),
  score: z.union([z.number(), z.string()]),
  date_taken: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD format expected").describe("YYYY-MM-DD"),
  assessment_provider: z.string().optional(),
});
export type AssessmentResult = z.infer<typeof AssessmentResultSchema>;

export const PrivacySettingsSchema = z.object({
  profile_visibility: z.enum(["Public", "Employers Only", "Connections Only"]),
  contact_info_visibility: z.enum(["Public", "Employers Only", "Connections Only"]),
});
export type PrivacySettings = z.infer<typeof PrivacySettingsSchema>;

export const MetadataSchema = z.object({
  profile_created_at: z.string().datetime(),
  last_updated_at: z.string().datetime(),
  profile_completeness_percentage: z.number().min(0).max(100).optional(),
  parsed_resume_filename: z.string().optional(),
  source: z.string().optional().describe('e.g., "User Registration", "Resume Upload", "LinkedIn Import"'),
});
export type Metadata = z.infer<typeof MetadataSchema>;

export const CandidateProfileSchema = z.object({
  candidate_id: z.string().describe("Should match the user's auth UID."),
  personal_info: PersonalInfoSchema,
  professional_summary: z.string().optional(),
  experience: z.array(ExperienceSchema).optional(),
  education: z.array(EducationSchema).optional(),
  skills: SkillsSchema.optional(),
  certifications_licenses: z.array(CertificationLicenseSchema).optional(),
  projects: z.array(ProjectSchema).optional(),
  job_preferences: JobPreferencesSchema.optional(),
  availability: AvailabilitySchema.optional(),
  assessment_results: z.array(AssessmentResultSchema).optional(),
  custom_fields: z.record(z.any()).optional().describe("For anything else specific to your platform"),
  privacy_settings: PrivacySettingsSchema.optional(),
  metadata: MetadataSchema.optional(),
});
export type CandidateProfile = z.infer<typeof CandidateProfileSchema>;
