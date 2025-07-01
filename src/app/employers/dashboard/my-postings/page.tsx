
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
      let responseText;
      try {
        responseText = await response.text();
      } catch (textError) {
        console.error(`${contextPrefix} Error reading response body as text:`, textError);
        throw new Error(`Failed to read jobs response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }
      if (responseText === undefined) {
          console.error(`${contextPrefix} CRITICAL: responseText is undefined before JSON.parse.`);
          throw new Error("Received undefined jobs response body.");
      }
      if (typeof responseText !== 'string' || responseText.trim() === '') {
           console.error(`${contextPrefix} API response was OK, but the response body was not a non-empty string.`);
           throw new Error("API response for jobs was OK, but the response body was empty or not a string.");
      }
      const data: BackendStoredJob[] = JSON.parse(responseText);
      // In a real app, you'd filter these jobs by the current employer's ID
      setJobs(data);
    } catch (err) {
      console.error(`${contextPrefix} Error loading jobs:`, err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      
      if (errorMessage.includes('"undefined" is not valid JSON')) {
        const specificError = "A browser extension may be interfering with data loading. Please try disabling browser extensions and refreshing the page.";
        setError(specificError);
        toast({
          title: 'Data Parsing Error',
          description: specificError,
          variant: 'destructive',
          duration: 10000,
        });
      } else {
        setError(errorMessage);
        toast({
          title: 'Error Loading Jobs',
          description: errorMessage,
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

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
              <p className="text-sm text-destructive/80">{error}</p>
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

    