
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from "date-fns";
import { Calendar as CalendarIcon, Briefcase, Check, Layers, BarChart, Building } from "lucide-react";

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { JobPostingApiInputSchema, type JobPostingApiInput } from '@/lib/schemas/job';


const jobCategories = [
  "Software Engineering",
  "Data Science & Analytics",
  "Product Management",
  "UX/UI Design",
  "DevOps & Site Reliability",
  "Cybersecurity",
  "IT Support & Infrastructure",
  "AI & Machine Learning",
  "Cloud Computing",
  "Mobile Development",
  "Web Development",
  "QA & Testing",
  "Marketing",
  "Sales",
  "Operations",
  "Human Resources",
  "Finance & Accounting",
  "Other",
];

const experienceLevels = [
  "Entry-level",
  "Mid-level",
  "Senior-level",
  "Lead",
  "Manager",
  "Executive",
];


type JobPostingFormValues = z.infer<typeof JobPostingApiInputSchema>;

export function JobPostingForm() {
  const { toast } = useToast();
  const form = useForm<JobPostingFormValues>({
    resolver: zodResolver(JobPostingApiInputSchema),
    defaultValues: {
      jobTitle: '',
      companyName: '',
      mainDescription: '',
      requirements: '',
      jobCategory: undefined, 
      experienceLevel: 'Mid-level',
      jobType: 'Full-time',
      location: '',
      salaryMin: undefined,
      salaryMax: undefined,
      applicationDeadline: undefined,
      isFeatured: false,
    },
  });

  async function onSubmit(data: JobPostingFormValues) {
    const contextPrefix = "[JobPostingForm onSubmit]";
    console.log('Job Posting Form Data:', data);

    const apiData: JobPostingApiInput = {
      ...data,
      salaryMin: data.salaryMin === undefined ? undefined : Number(data.salaryMin),
      salaryMax: data.salaryMax === undefined ? undefined : Number(data.salaryMax),
    };

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        let errorMsg = `API request failed. Status: ${response.status}`;
        let errorDetails = 'No additional error details could be retrieved from the response.';
        try {
          const text = await response.text();
          if (text && typeof text === 'string') {
            try {
              const jsonError = JSON.parse(text);
              errorDetails = jsonError.error || JSON.stringify(jsonError);
            } catch (e) {
              errorDetails = `Server response: ${text.substring(0, 500)}`;
            }
          } else if (text) {
            errorDetails = `Received non-string response body: ${String(text).substring(0,500)}`;
          }
        } catch (e) {
          errorDetails = `Error reading response body: ${e instanceof Error ? e.message : String(e)}`;
        }
        errorMsg += ` Details: ${errorDetails}`;
        throw new Error(errorMsg);
      }

      let responseTextNewJob;
      try {
        responseTextNewJob = await response.text();
      } catch (textError) {
         console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read job creation response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }

      console.log(`${contextPrefix} Preparing to parse. responseTextNewJob type: ${typeof responseTextNewJob}. Value (first 100 chars): '${String(responseTextNewJob).substring(0,100)}'`);
      if(responseTextNewJob === undefined) {
          console.error(`${contextPrefix} CRITICAL: responseTextNewJob is undefined before JSON.parse. Possible external interference.`);
          throw new Error("Received undefined job creation response body before JSON parsing. This is an unexpected state.");
      }
      if(typeof responseTextNewJob !== 'string' || responseTextNewJob.trim() === '') {
          console.error(`${contextPrefix} API response for job creation was OK, but the response body was not a non-empty string. Type: ${typeof responseTextNewJob}, Trimmed length: ${responseTextNewJob?.trim().length ?? 'N/A'}.`);
          throw new Error("API response for job creation was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }
      
      let newJob;
      try {
        newJob = JSON.parse(responseTextNewJob);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from job creation response text. Response text (first 200 chars): ${responseTextNewJob.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after job creation. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      if (newJob === undefined || newJob === null) {
        console.error(`${contextPrefix} API response for job creation was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
        throw new Error("API response for job creation parsed to null or undefined, which is unexpected for a successful data fetch.");
      }
      
      let toastDescription = `${newJob.jobTitle} at ${newJob.companyName} has been submitted and is pending review.`;
      let toastTitle = 'Job Posted Successfully!';

      if (apiData.isFeatured) {
        toastTitle = 'Featured Job Submitted';
        toastDescription += " Payment processing is simulated for featured jobs.";
         toast({
            title: toastTitle,
            description: toastDescription,
            variant: 'default', 
            duration: 6000,
        });
      } else {
         toast({
            title: toastTitle,
            description: toastDescription,
        });
      }
      form.reset(); 

    } catch (error) {
        console.error(`${contextPrefix} Error submitting job posting:`, error);
        toast({
            title: 'Error Submitting Job',
            description: error instanceof Error ? error.message : 'Could not submit the job posting. Please try again.',
            variant: 'destructive',
        });
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-xl">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
            <Briefcase className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl">Post a New Job</CardTitle>
        <CardDescription>Fill in the details below to create a job listing and find your next great hire.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior Software Engineer" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base flex items-center"><Building className="mr-2 h-4 w-4 text-muted-foreground"/>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Acme Corporation" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mainDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Main Job Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the role, responsibilities, and company culture..." {...field} rows={6} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Requirements</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List key skills, experience, and qualifications..." {...field} rows={5} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                control={form.control}
                name="jobCategory"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-base flex items-center"><Layers className="mr-2 h-4 w-4 text-muted-foreground"/>Job Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger className="text-base">
                            <SelectValue placeholder="Select a job category" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {jobCategories.map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-base flex items-center"><BarChart className="mr-2 h-4 w-4 text-muted-foreground"/>Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger className="text-base">
                            <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {experienceLevels.map(level => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="salaryMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Minimum Salary (Annual, Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 80000" {...field} value={field.value ?? ""} onChange={e => field.onChange(e.target.value === "" ? undefined : e.target.valueAsNumber)} className="text-base" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salaryMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Maximum Salary (Annual, Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 120000" {...field} value={field.value ?? ""} onChange={e => field.onChange(e.target.value === "" ? undefined : e.target.valueAsNumber)} className="text-base" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Job Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-base">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., San Francisco, CA or Remote" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="applicationDeadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-base">Application Deadline (Optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal text-base",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0,0,0,0)) 
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription className="text-sm">
                    When should applications close for this job?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-secondary/20">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="isFeatured"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel htmlFor="isFeatured" className="text-base font-medium text-primary cursor-pointer">
                      Make this job featured?
                    </FormLabel>
                    <FormDescription className="text-sm">
                      Featured jobs get higher visibility. (Payment simulation)
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Check className="mr-2 h-4 w-4 animate-spin" /> }
                Post Job
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
    

    
