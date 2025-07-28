
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from "date-fns";
import { Calendar as CalendarIcon, Briefcase, Check, Layers, Building, Link as LinkIcon, DollarSign, MapPin, Image as ImageIcon, KeyRound } from "lucide-react";

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

type JobPostingFormValues = z.infer<typeof JobPostingApiInputSchema>;

export function JobPostingForm() {
  const { toast } = useToast();
  const form = useForm<JobPostingFormValues>({
    resolver: zodResolver(JobPostingApiInputSchema),
    defaultValues: {
      id: '',
      jobTitle: '',
      companyName: '',
      companyLogo: '',
      mainDescription: '',
      requirements: '',
      jobCategory: undefined, 
      jobType: 'Full-time',
      location: '',
      salaryMin: undefined,
      salaryMax: undefined,
      applicationDeadline: undefined,
      isFeatured: false,
      applyUrl: '',
    },
  });

  async function onSubmit(data: JobPostingFormValues) {
    const contextPrefix = "[JobPostingForm onSubmit]";
    console.log('Job Posting Form Data:', data);

    const apiData: JobPostingApiInput = {
      ...data,
      salaryMin: data.salaryMin === undefined ? undefined : Number(data.salaryMin),
      salaryMax: data.salaryMax === undefined ? undefined : Number(data.salaryMax),
      applyUrl: data.applyUrl || undefined,
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
        let errorMsg = `API request failed with status: ${response.status}`;
        let errorDetails = 'An unknown error occurred.';
        try {
          const errorData = await response.json();
          errorDetails = errorData.error || JSON.stringify(errorData);
        } catch (e) {
          const responseText = await response.text();
          if (!responseText) {
              errorDetails = 'The server returned an empty response. This may be due to browser extension interference. Please try disabling extensions and reloading.';
          } else {
             errorDetails = `The server returned an unexpected response. Please try again.`;
          }
        }
        errorMsg += ` - ${errorDetails}`;
        throw new Error(errorMsg);
      }

      const newJob = await response.json();
      
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
        const description = error instanceof Error ? error.message : "An unexpected error occurred. Please try again.";
        toast({
            title: 'Error Submitting Job',
            description: description,
            variant: 'destructive',
            duration: 10000,
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
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base flex items-center"><KeyRound className="mr-2 h-4 w-4 text-muted-foreground"/>Job Post ID (Slug)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., senior-react-developer-new-york" {...field} value={field.value ?? ""} className="text-base" />
                  </FormControl>
                  <FormDescription>Optional. Provide a unique ID for this job post. If left blank, one will be generated. Use lowercase letters, numbers, and hyphens.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="companyLogo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base flex items-center"><ImageIcon className="mr-2 h-4 w-4 text-muted-foreground"/>Company Logo Path (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="/images/your-logo.png" {...field} value={field.value ?? ""} className="text-base" />
                  </FormControl>
                  <FormDescription>Provide the path to your logo from the `public/images` directory.</FormDescription>
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
                  <FormLabel className="text-base">Requirements (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List key skills, experience, and qualifications..." {...field} rows={5} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="salaryMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base flex items-center"><DollarSign className="mr-2 h-4 w-4 text-muted-foreground"/>Min Salary (Annual)</FormLabel>
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
                    <FormLabel className="text-base flex items-center"><DollarSign className="mr-2 h-4 w-4 text-muted-foreground"/>Max Salary (Annual)</FormLabel>
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
                  <FormLabel className="text-base flex items-center"><Briefcase className="mr-2 h-4 w-4 text-muted-foreground"/>Job Type</FormLabel>
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
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
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
                  <FormLabel className="text-base flex items-center"><MapPin className="mr-2 h-4 w-4 text-muted-foreground"/>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., San Francisco, CA or Remote" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="applyUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base flex items-center"><LinkIcon className="mr-2 h-4 w-4 text-muted-foreground"/>External Application URL (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourcompany.com/careers/apply/123" {...field} value={field.value ?? ""} className="text-base" />
                  </FormControl>
                  <FormDescription>If provided, candidates will be sent to this URL to apply instead of applying on TekTunnel.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="applicationDeadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-base flex items-center"><CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground"/>Application Deadline (Optional)</FormLabel>
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
