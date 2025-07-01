
import { config } from 'dotenv';
config();

import '@/ai/flows/ai-job-matching.ts';
import '@/ai/flows/job-alert-matcher-flow.ts'; // Added import for the new flow
import '@/ai/flows/resume-parser-flow.ts';
