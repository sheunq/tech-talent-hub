
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, Loader2, Info, User, Mail, FileText, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { ApplicationApiInputSchema, type ApplicationApiInput } from '@/lib/schemas/application';
import { findJobById } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';

// Refine the schema for the form on the client-side
const formSchema = z.object({
  applicantEmail: z.string().email({ message: "A valid email is required to apply." }),
  coverLetter: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof formSchema>;

export default function ApplicationPage() {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;

  const [job, setJob] = useState<BackendStoredJob | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobDetails() {
      if (!jobId) return;
      try {
        const fetchedJob = await findJobById(jobId);
        if (!fetchedJob) {
          throw new Error("Job not found or is no longer available.");
        }
        setJob(fetchedJob);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobDetails();
  }, [jobId]);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantEmail: currentUser?.email || '',
      coverLetter: '',
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    if (!jobId) return;

    const applicationData: ApplicationApiInput = {
      jobId: jobId,
      applicantId: currentUser?.uid,
      applicantEmail: data.applicantEmail,
      coverLetter: data.coverLetter,
    };
    
    // Final validation with the API schema
    const validationResult = ApplicationApiInputSchema.safeParse(applicationData);
    if (!validationResult.success) {
      toast({ title: "Validation Error", description: "Application data is invalid.", variant: "destructive" });
      console.error(validationResult.error);
      return;
    }

    try {
      const idToken = currentUser ? await currentUser.getIdToken() : undefined;
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(idToken && { 'Authorization': `Bearer ${idToken}` }),
        },
        body: JSON.stringify(validationResult.data),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to submit application.';
        try {
          const errorData = await response.json();
          errorMsg = errorData.error || 'An unknown error occurred.';
        } catch (e) {
          // Response was not JSON, use default error.
        }
        throw new Error(errorMsg);
      }

      toast({
        title: "Application Submitted!",
        description: `Your application for ${job?.jobTitle} has been sent.`,
      });
      router.push(`/jobs/${jobId}`);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div className="container mx-auto py-12 text-center"><Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" /></div>;
  }

  if (error || !job) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <Info className="h-4 w-4" />
          <AlertTitle>Error Loading Job</AlertTitle>
          <AlertDescription>{error || "The job details could not be loaded."}</AlertDescription>
        </Alert>
        <Button onClick={() => router.back()} variant="outline" className="mt-6"><ArrowLeft className="mr-2 h-4 w-4" /> Go Back</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-2xl space-y-6">
      <Button variant="outline" asChild>
        <Link href={`/jobs/${jobId}`}><ArrowLeft className="mr-2 h-4 w-4" /> Back to Job Details</Link>
      </Button>

      <Card className="shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl sm:text-3xl">Apply for {job.jobTitle}</CardTitle>
          <CardDescription>at {job.companyName}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {currentUser ? (
                <Alert>
                  <User className="h-4 w-4" />
                  <AlertTitle>Logged In</AlertTitle>
                  <AlertDescription>You are applying as {currentUser.email}.</AlertDescription>
                </Alert>
              ) : (
                <FormField control={form.control} name="applicantEmail" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base flex items-center"><Mail className="mr-2 h-4 w-4 text-muted-foreground" /> Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              )}
              
               <FormField control={form.control} name="coverLetter" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base flex items-center"><FileText className="mr-2 h-4 w-4 text-muted-foreground" /> Cover Letter (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Why are you a great fit for this role?" {...field} rows={6} />
                    </FormControl>
                     <FormDescription>Briefly explain your interest and qualifications.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

              <div className="border rounded-lg p-4 bg-muted/20 text-center">
                <p className="text-sm text-muted-foreground">Your full profile will be submitted with your application. You can manage your profile from your dashboard.</p>
                <Button variant="link" asChild><Link href="/job-seekers/profile">View/Edit Profile</Link></Button>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Application <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

    