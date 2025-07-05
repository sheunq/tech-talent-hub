
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, CheckCircle2, XCircle, RotateCcw, Eye, DollarSign, Layers, BarChart2, CalendarClock, Briefcase } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription as DialogDetailDescription,
  DialogHeader,
  DialogTitle as DialogDetailTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { format } from 'date-fns';
import { matchJobToAlerts, type JobToMatch, type UserAlert } from '@/ai/flows/job-alert-matcher-flow';
import { sendJobAlertEmail, createDashboardNotification } from '@/services/notificationService';
import type { BackendStoredJob } from '@/lib/schemas/job';
import type { BackendStoredAlert } from '@/lib/schemas/alert';

export default function AdminJobApprovalsPage() {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<BackendStoredJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJobDetails, setSelectedJobDetails] = useState<BackendStoredJob | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  async function fetchJobsAndAlertsData() {
    const contextPrefix = "[AdminJobApprovals fetchJobsAndAlertsData - Jobs]";
    setIsLoading(true);
    try {
      const jobsResponse = await fetch('/api/jobs');
      if (!jobsResponse.ok) {
        let errorMsg = `Failed to fetch jobs. Status: ${jobsResponse.status}`;
        let errorDetails = 'No additional error details could be retrieved from the response.';
        try {
          const text = await jobsResponse.text();
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
        errorMsg += `. ${errorDetails}`;
        throw new Error(errorMsg);
      }
      
      let jobsResponseText;
      try {
        jobsResponseText = await jobsResponse.text();
      } catch (textError) {
        console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read jobs response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }
      
      console.log(`${contextPrefix} Preparing to parse. jobsResponseText type: ${typeof jobsResponseText}. Value (first 100 chars): '${String(jobsResponseText).substring(0,100)}'`);
      if (jobsResponseText === undefined) {
          console.error(`${contextPrefix} CRITICAL: jobsResponseText is undefined before JSON.parse. Possible external interference (e.g., browser extension).`);
          throw new Error("Received undefined jobs response body before JSON parsing. This is an unexpected state.");
      }
      if (typeof jobsResponseText !== 'string' || jobsResponseText.trim() === '') {
           console.error(`${contextPrefix} API response for jobs was OK, but the response body was not a non-empty string. Type: ${typeof jobsResponseText}, Trimmed length: ${jobsResponseText?.trim().length ?? 'N/A'}.`);
           throw new Error("API response for jobs was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }
      
      let jobsData: BackendStoredJob[];
      try {
        jobsData = JSON.parse(jobsResponseText);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from jobs response text. Response text (first 200 chars): ${jobsResponseText.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content for jobs. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }

      if (jobsData === undefined || jobsData === null) {
        console.error(`${contextPrefix} API response for jobs was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
        throw new Error("API response for jobs parsed to null or undefined, which is unexpected for a successful data fetch.");
      }
      setJobs(jobsData);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Could not load jobs from the server.";
      let toastDescription = errorMessage;
      if (errorMessage.includes('"undefined" is not valid JSON')) {
          toastDescription = "A browser extension may be interfering with data loading. Please try disabling browser extensions and refreshing the page.";
      }
      console.error(`${contextPrefix} Error loading jobs from API:`, error);
      toast({
        title: "Load Error",
        description: toastDescription,
        variant: "destructive",
        duration: 10000,
      });
      setJobs([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchJobsAndAlertsData();
  }, []);


  const triggerNotificationChecks = async (approvedJob: BackendStoredJob) => {
    const contextPrefix = "[AdminJobApprovals triggerNotificationChecks - Alerts]";
    try {
      const alertsResponse = await fetch('/api/alerts'); 
      if (!alertsResponse.ok) {
          let errorMsg = `Failed to fetch alerts for notification check. Status: ${alertsResponse.status}`;
          let errorDetails = 'No additional error details could be retrieved from the response.';
            try {
              const text = await alertsResponse.text();
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
            errorMsg += `. ${errorDetails}`;
          throw new Error(errorMsg);
      }

      let alertsResponseText;
      try {
        alertsResponseText = await alertsResponse.text();
      } catch (textError) {
        console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read alerts response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }

      console.log(`${contextPrefix} Preparing to parse. alertsResponseText type: ${typeof alertsResponseText}. Value (first 100 chars): '${String(alertsResponseText).substring(0,100)}'`);
      if (alertsResponseText === undefined) {
          console.error(`${contextPrefix} CRITICAL: alertsResponseText is undefined before JSON.parse. Possible external interference.`);
          throw new Error("Received undefined alerts response body before JSON parsing. This is an unexpected state.");
      }
      if (typeof alertsResponseText !== 'string' || alertsResponseText.trim() === '') {
          console.error(`${contextPrefix} API response for alerts was OK, but the response body was not a non-empty string. Type: ${typeof alertsResponseText}, Trimmed length: ${alertsResponseText?.trim().length ?? 'N/A'}.`);
          throw new Error("API response for alerts was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }
      
      let backendAlerts: BackendStoredAlert[];
      try {
        backendAlerts = JSON.parse(alertsResponseText);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from alerts response text. Response text (first 200 chars): ${alertsResponseText.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content for alerts. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
       if (backendAlerts === undefined || backendAlerts === null) {
          console.error(`${contextPrefix} API response for alerts was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
          throw new Error("API response for alerts parsed to null or undefined, which is unexpected for a successful data fetch.");
       }


      if (backendAlerts.length === 0) {
        console.log("No active job alerts (from API) to check against.");
        toast({
          title: "No Alerts Found",
          description: "No job alerts are currently configured in the system to match against.",
          variant: "default"
        });
        return;
      }

      const userAlertsForFlow: UserAlert[] = backendAlerts.map(alert => ({
        alertId: alert.id,
        keywords: alert.keywords,
        location: alert.location || "", 
        emailNotif: alert.emailNotif,
        dashboardNotif: alert.dashboardNotif,
        userEmail: alert.userEmail, 
        userId: alert.userId, 
      }));
      
      const jobDescriptionForMatcher = `${approvedJob.mainDescription}\n\nRequirements:\n${approvedJob.requirements}`;

      const jobToMatch: JobToMatch = {
        id: approvedJob.id,
        jobTitle: approvedJob.jobTitle,
        description: jobDescriptionForMatcher,
        location: approvedJob.location,
        companyName: approvedJob.companyName,
      };
      
      const result = await matchJobToAlerts({ jobToMatch, userAlerts: userAlertsForFlow });

      if (result.matchedNotifications && result.matchedNotifications.length > 0) {
        toast({
          title: "Notifications Pending",
          description: `${result.matchedNotifications.length} alert(s) matched this job. Simulating notifications.`,
        });
        for (const match of result.matchedNotifications) {
          const jobDetails = { id: match.jobId, jobTitle: match.jobTitle, companyName: match.companyName };
          if (match.sendEmail) {
            const recipient = match.anonymousUserEmail || match.userId || 'unknownUser';
            await sendJobAlertEmail(recipient, jobDetails, match.alertKeywords, !!match.anonymousUserEmail);
          }
          if (match.createDashboardNotif && match.userId) {
            await createDashboardNotification(match.userId, jobDetails, match.alertKeywords);
          }
        }
      } else {
        toast({
          title: "No Alerts Matched",
          description: "This job did not match any active user alerts from the system.",
          variant: "default"
        });
      }

    } catch (err) {
      console.error("Error during notification check:", err);
      const errorMessage = err instanceof Error ? err.message : "Could not process job alerts for this job.";
      let toastDescription = errorMessage;
      if (errorMessage.includes('"undefined" is not valid JSON')) {
          toastDescription = "A browser extension may be interfering with data loading. Please try disabling browser extensions and refreshing the page.";
      }
      toast({
        title: "Notification Check Error",
        description: toastDescription,
        variant: "destructive",
        duration: 10000,
      });
    }
  };


  const handleJobStatusChange = async (id: string, newStatus: 'approved' | 'rejected') => {
    const contextPrefix = "[AdminJobApprovals handleJobStatusChange]";
    try {
      const response = await fetch('/api/jobs', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) {
        let errorMsg = `Failed to update job status. Status: ${response.status}`;
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
        errorMsg += `. ${errorDetails}`;
        throw new Error(errorMsg);
      }
      
      let responseTextUpdateJob;
      try {
        responseTextUpdateJob = await response.text();
      } catch (textError) {
        console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read job update response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }

      console.log(`${contextPrefix} Preparing to parse. responseTextUpdateJob type: ${typeof responseTextUpdateJob}. Value (first 100 chars): '${String(responseTextUpdateJob).substring(0,100)}'`);
      if (responseTextUpdateJob === undefined) {
          console.error(`${contextPrefix} CRITICAL: responseTextUpdateJob is undefined before JSON.parse. Possible external interference.`);
          throw new Error("Received undefined job update response body before JSON parsing. This is an unexpected state.");
      }
      if (typeof responseTextUpdateJob !== 'string' || responseTextUpdateJob.trim() === '') {
          console.error(`${contextPrefix} API response for job update was OK, but the response body was not a non-empty string. Type: ${typeof responseTextUpdateJob}, Trimmed length: ${responseTextUpdateJob?.trim().length ?? 'N/A'}.`);
          throw new Error("API response for job update was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }
      
      let updatedJob;
      try {
        updatedJob = JSON.parse(responseTextUpdateJob);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from job update response text. Response text (first 200 chars): ${responseTextUpdateJob.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after job update. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      if (updatedJob === undefined || updatedJob === null) {
          console.error(`${contextPrefix} API response for job update was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
          throw new Error("API response for job update parsed to null or undefined, which is unexpected for a successful data fetch.");
      }
      
      setJobs(prevJobs => prevJobs.map(job => job.id === id ? { ...job, status: newStatus } : job));
      
      toast({
        title: `Job ${newStatus === 'approved' ? 'Approved' : 'Rejected'}`,
        description: `The job post has been ${newStatus === 'approved' ? 'approved' : 'rejected'}.`,
      });

      if (newStatus === 'approved') {
        const fullApprovedJob = jobs.find(j => j.id === id); 
        if (fullApprovedJob) {
          await triggerNotificationChecks({...fullApprovedJob, status: 'approved'});
        }
      }
    } catch (error) {
      console.error(`${contextPrefix} Error updating job status:`, error);
      const errorMessage = error instanceof Error ? error.message : "Could not update job status.";
      let toastDescription = errorMessage;
      if (errorMessage.includes('"undefined" is not valid JSON')) {
          toastDescription = "A browser extension may be interfering with data loading. Please try disabling browser extensions and refreshing the page.";
      }
      toast({
        title: "Update Error",
        description: toastDescription,
        variant: "destructive",
        duration: 10000,
      });
    }
  };
  
  const resetJobStatus = async (id: string) => {
    const contextPrefix = "[AdminJobApprovals resetJobStatus]";
     try {
      const response = await fetch('/api/jobs', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'pending' }),
      });
      if (!response.ok) {
        let errorMsg = `Failed to reset job status. Status: ${response.status}`;
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
        errorMsg += `. ${errorDetails}`;
        throw new Error(errorMsg);
      }

      let responseTextResetJob;
      try {
        responseTextResetJob = await response.text();
      } catch (textError) {
         console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read job reset response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }

      console.log(`${contextPrefix} Preparing to parse. responseTextResetJob type: ${typeof responseTextResetJob}. Value (first 100 chars): '${String(responseTextResetJob).substring(0,100)}'`);
      if(responseTextResetJob === undefined) {
          console.error(`${contextPrefix} CRITICAL: responseTextResetJob is undefined before JSON.parse. Possible external interference.`);
          throw new Error("Received undefined job reset response body before JSON parsing. This is an unexpected state.");
      }
      if(typeof responseTextResetJob !== 'string' || responseTextResetJob.trim() === '') {
          console.error(`${contextPrefix} API response for job reset was OK, but the response body was not a non-empty string. Type: ${typeof responseTextResetJob}, Trimmed length: ${responseTextResetJob?.trim().length ?? 'N/A'}.`);
          throw new Error("API response for job reset was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }
      
      let resetJob;
      try {
        resetJob = JSON.parse(responseTextResetJob);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from job reset response text. Response text (first 200 chars): ${responseTextResetJob.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after job reset. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      if (resetJob === undefined || resetJob === null) {
        console.error(`${contextPrefix} API response for job reset was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
        throw new Error("API response for job reset parsed to null or undefined, which is unexpected for a successful data fetch.");
      }

      setJobs(prevJobs => prevJobs.map(job => job.id === id ? { ...job, status: 'pending' } : job));
      toast({
        title: "Job Status Reset",
        description: "The job post status has been reset to pending.",
        variant: "default" 
      });
    } catch (error) {
      console.error(`${contextPrefix} Error resetting job status:`, error);
      const errorMessage = error instanceof Error ? error.message : "Could not reset job status.";
      let toastDescription = errorMessage;
      if (errorMessage.includes('"undefined" is not valid JSON')) {
          toastDescription = "A browser extension may be interfering with data loading. Please try disabling browser extensions and refreshing the page.";
      }
      toast({
        title: "Reset Error",
        description: toastDescription,
        variant: "destructive",
        duration: 10000,
      });
    }
  };

  const openDetailModal = (job: BackendStoredJob) => {
    setSelectedJobDetails(job);
    setIsDetailModalOpen(true);
  };

  const getStatusBadgeVariant = (status: BackendStoredJob['status']) => {
    switch (status) {
      case 'approved':
        return 'default'; 
      case 'rejected':
        return 'destructive';
      case 'pending':
      default:
        return 'secondary';
    }
  };

  return (
    <>
    <Card className="shadow-xl rounded-xl">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <ClipboardCheck className="h-8 w-8 text-primary" />
          <CardTitle className="font-headline text-2xl">Job Post Management</CardTitle>
        </div>
        <CardDescription>Review, approve, or reject job postings. Approving a job will check for matching user alerts from the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={fetchJobsAndAlertsData} disabled={isLoading} className="mb-4">
          {isLoading ? <RotateCcw className="mr-2 h-4 w-4 animate-spin" /> : <RotateCcw className="mr-2 h-4 w-4" />}
          Refresh Job List
        </Button>
        {isLoading ? (
            <div className="text-center py-10">
                <RotateCcw className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
                <p className="text-lg text-muted-foreground">Loading jobs...</p>
            </div>
        ) : jobs.length === 0 ? (
            <div className="text-center py-10 bg-muted/20 rounded-lg">
                <p className="text-lg text-muted-foreground">No job postings to display.</p>
                <p className="text-sm text-muted-foreground">Try posting a job from the employer section.</p>
            </div>
        ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[250px] font-semibold">Job Title</TableHead>
                <TableHead className="font-semibold">Company</TableHead>
                <TableHead className="font-semibold">Submitted</TableHead>
                <TableHead className="font-semibold text-center">Status</TableHead>
                <TableHead className="text-right font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-medium">{job.jobTitle}</TableCell>
                  <TableCell>{job.companyName}</TableCell>
                  <TableCell>{job.submittedDate ? format(new Date(job.submittedDate), "PPP") : 'N/A'}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={getStatusBadgeVariant(job.status)} className="capitalize">
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button variant="outline" size="sm" onClick={() => openDetailModal(job)} className="px-2.5">
                        <Eye className="h-4 w-4" /> <span className="sr-only sm:not-sr-only sm:ml-1.5">View</span>
                    </Button>
                    {job.status === 'pending' ? (
                      <>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 px-2.5">
                              <CheckCircle2 className="h-4 w-4" /> <span className="sr-only sm:not-sr-only sm:ml-1.5">Approve</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Approve Job Post?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to approve the job post "{job.jobTitle}" by {job.companyName}? This will also check for matching user alerts.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleJobStatusChange(job.id, 'approved')} className="bg-green-600 hover:bg-green-700">
                                Yes, Approve
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 px-2.5">
                               <XCircle className="h-4 w-4" /> <span className="sr-only sm:not-sr-only sm:ml-1.5">Reject</span>
                             </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Reject Job Post?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to reject the job post "{job.jobTitle}" by {job.companyName}? This action can be reset.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleJobStatusChange(job.id, 'rejected')} className="bg-destructive hover:bg-destructive/90">
                                Yes, Reject
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </>
                    ) : (
                       <Button variant="ghost" size="sm" onClick={() => resetJobStatus(job.id)} title="Reset status to pending" className="px-2.5">
                          <RotateCcw className="h-4 w-4 text-muted-foreground"/> <span className="sr-only sm:not-sr-only sm:ml-1.5">Reset</span>
                        </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        )}
      </CardContent>
    </Card>

    {selectedJobDetails && (
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="sm:max-w-xl md:max-w-2xl">
          <DialogHeader>
            <DialogDetailTitle className="font-headline text-xl sm:text-2xl">{selectedJobDetails.jobTitle}</DialogDetailTitle>
            <DialogDetailDescription>
              <span className="font-medium">{selectedJobDetails.companyName}</span> <span className="text-muted-foreground">&bull;</span> Submitted: {selectedJobDetails.submittedDate ? format(new Date(selectedJobDetails.submittedDate), "PPP") : 'N/A'}
            </DialogDetailDescription>
          </DialogHeader>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 max-h-[60vh] overflow-y-auto pr-3 text-sm">
            <div>
                <h4 className="font-semibold mb-1 text-base">Status</h4>
                <Badge variant={getStatusBadgeVariant(selectedJobDetails.status)} className="capitalize text-sm px-2 py-0.5">
                  {selectedJobDetails.status}
                </Badge>
            </div>
             <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground"/>
                <div>
                    <h4 className="font-semibold text-base">Job Type</h4>
                    <p className="text-muted-foreground">{selectedJobDetails.jobType}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-muted-foreground"/>
                <div>
                    <h4 className="font-semibold text-base">Category</h4>
                    <p className="text-muted-foreground">{selectedJobDetails.jobCategory}</p>
                </div>
            </div>
            {(selectedJobDetails.salaryMin || selectedJobDetails.salaryMax) && (
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground"/>
                 <div>
                    <h4 className="font-semibold text-base">Salary Range</h4>
                    <p className="text-muted-foreground">
                        {selectedJobDetails.salaryMin ? `$${selectedJobDetails.salaryMin.toLocaleString()}` : 'N/A'} - 
                        {selectedJobDetails.salaryMax ? `$${selectedJobDetails.salaryMax.toLocaleString()}` : 'N/A'}
                    </p>
                </div>
              </div>
            )}
            {selectedJobDetails.applicationDeadline && (
               <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-muted-foreground"/>
                <div>
                    <h4 className="font-semibold text-base">Apply By</h4>
                    <p className="text-muted-foreground">{format(new Date(selectedJobDetails.applicationDeadline), "PPP")}</p>
                </div>
              </div>
            )}
             <div className="md:col-span-2">
                <h4 className="font-semibold mb-1 text-base">Location</h4>
                <p className="text-muted-foreground">{selectedJobDetails.location}</p>
            </div>

            <div className="md:col-span-2">
                <h4 className="font-semibold mb-1 text-base">Main Description</h4>
                <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{selectedJobDetails.mainDescription}</p>
            </div>
             <div className="md:col-span-2">
                <h4 className="font-semibold mb-1 text-base">Requirements</h4>
                <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{selectedJobDetails.requirements}</p>
            </div>
            {selectedJobDetails.isFeatured && (
                <div className="md:col-span-2">
                    <Badge variant="default" className="bg-yellow-500 text-white">Featured Post</Badge>
                </div>
            )}
          </div>
          <DialogFooter className="sm:justify-end">
              <Button variant="outline" onClick={() => setIsDetailModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
}
    

    
