
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ListChecks, PlusCircle, Eye, Edit, Loader2, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { format } from 'date-fns';

export default function MyPostingsPage() {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<BackendStoredJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchJobs() {
    const contextPrefix = "[MyPostingsPage fetchJobs]";
    setIsLoading(true);
    setError(null);
    try {
      // In a real app, this would be a filtered API call, e.g., `/api/jobs?employerId=...`
      const response = await fetch('/api/jobs');
      if (!response.ok) {
        let errorMsg = `Failed to fetch jobs. Status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
          errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
      }
      
      const responseText = await response.text();
      let data: BackendStoredJob[];
      try {
           if (!responseText) {
               throw new Error("API response for jobs was empty. This can be caused by browser extension interference (e.g., MetaMask). Please disable extensions and try again.");
          }
        data = JSON.parse(responseText);
      } catch (err) {
        console.error(`${contextPrefix} Error parsing JSON:`, err, "Response text (first 200 chars):", responseText.substring(0,200));
        let descriptiveError = `Failed to process job data from the server. This can be caused by a browser extension (like MetaMask) interfering with the page. Please try disabling extensions and reloading.`;
        if(err instanceof Error) {
            descriptiveError += ` Details: ${err.message}`;
        }
        throw new Error(descriptiveError);
      }

      // In a real app, you'd filter these jobs by the current employer's ID on the backend
      // For now, we show all jobs for demonstration.
      setJobs(data);
    } catch (err) {
      console.error(`${contextPrefix} Error loading jobs:`, err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        title: 'Error Loading Jobs',
        description: errorMessage,
        variant: 'destructive',
        duration: 10000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [toast]); // Added toast to dependency array

  const getStatusBadgeVariant = (status: BackendStoredJob['status']) => {
    switch (status) {
      case 'approved': return 'default';
      case 'rejected': return 'destructive';
      case 'pending':
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/employers/dashboard">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
      </Button>

      <Card className="shadow-lg rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ListChecks className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">My Job Postings</CardTitle>
            </div>
            <CardDescription>View, manage, and track your job listings.</CardDescription>
          </div>
          <Button asChild>
            <Link href="/employers/post-job">
              <PlusCircle className="mr-2 h-5 w-5" /> Post New Job
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="text-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
              <p className="text-lg text-muted-foreground">Loading your job postings...</p>
            </div>
          )}
          {error && !isLoading && (
            <div className="text-center py-10 bg-destructive/10 border border-destructive rounded-lg p-4">
              <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
              <p className="text-lg text-destructive font-semibold">Failed to Load Job Postings</p>
              <p className="text-sm text-destructive/80 max-w-md mx-auto">{error}</p>
              <Button onClick={fetchJobs} variant="destructive" className="mt-4">Try Again</Button>
            </div>
          )}
          {!isLoading && !error && jobs.length === 0 && (
            <div className="text-center py-10 bg-muted/20 rounded-lg">
              <ListChecks className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-lg text-muted-foreground">You haven't posted any jobs yet.</p>
              <Button asChild className="mt-4">
                <Link href="/employers/post-job">Post Your First Job</Link>
              </Button>
            </div>
          )}
          {!isLoading && !error && jobs.length > 0 && (
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-semibold">Job Title</TableHead>
                    <TableHead className="font-semibold text-center">Status</TableHead>
                    <TableHead className="font-semibold">Submitted</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id} className="hover:bg-muted/20 transition-colors">
                      <TableCell className="font-medium">{job.jobTitle}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={getStatusBadgeVariant(job.status)} className="capitalize">
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{job.submittedDate ? format(new Date(job.submittedDate), "PPP") : 'N/A'}</TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button variant="outline" size="sm" asChild className="px-2.5">
                          <Link href={`/jobs/${job.id}`} title="View public job posting">
                            <Eye className="h-4 w-4" /> <span className="sr-only sm:not-sr-only sm:ml-1.5">View</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="px-2.5" onClick={() => toast({ title: "Edit Job", description: "Edit functionality coming soon!"})}>
                           <Edit className="h-4 w-4" /> <span className="sr-only sm:not-sr-only sm:ml-1.5">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
