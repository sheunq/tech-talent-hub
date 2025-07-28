
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, CheckCircle2, XCircle, RotateCcw, Eye, DollarSign, Layers, BarChart2, CalendarClock, Briefcase, AlertTriangle } from "lucide-react";
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
import { db } from '@/firebase/firebase';
import { collection, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';

export default function AdminJobApprovalsPage() {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<BackendStoredJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJobDetails, setSelectedJobDetails] = useState<BackendStoredJob | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    const contextPrefix = "[AdminJobApprovals useEffect]";
    setError(null);

    const jobsQuery = query(collection(db, 'jobs'), orderBy('submittedDate', 'desc'));

    const unsubscribe = onSnapshot(jobsQuery, (querySnapshot) => {
      const jobsData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        // Convert Firestore Timestamps to ISO strings for consistency
        const submittedDate = data.submittedDate instanceof Timestamp ? data.submittedDate.toDate().toISOString() : data.submittedDate;
        const applicationDeadline = data.applicationDeadline instanceof Timestamp ? data.applicationDeadline.toDate().toISOString() : data.applicationDeadline;
        return { 
          ...data,
          id: doc.id,
          submittedDate,
          applicationDeadline
        } as BackendStoredJob;
      });
      setJobs(jobsData);
      setIsLoading(false);
    }, (err) => {
      const errorMessage = err instanceof Error ? err.message : "Could not load jobs from the server.";
      console.error(`${contextPrefix} Error listening to jobs collection:`, err);
      setError(errorMessage);
      toast({
        title: "Load Error",
        description: errorMessage,
        variant: "destructive",
        duration: 10000,
      });
      setJobs([]);
      setIsLoading(false);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [toast]);


  const triggerNotificationChecks = async (approvedJob: BackendStoredJob) => {
    const contextPrefix = "[AdminJobApprovals triggerNotificationChecks]";
    try {
      const alertsResponse = await fetch('/api/alerts'); 
      if (!alertsResponse.ok) {
        let errorMsg = `Failed to fetch alerts for notification check. Status: ${alertsResponse.status}`;
        try {
            const errorData = await alertsResponse.json();
            errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
            errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
      }

      const alertsResponseText = await alertsResponse.text();
      let backendAlerts: BackendStoredAlert[];
      try {
        if (!alertsResponseText) {
            throw new Error("API response for alerts was empty. This can be caused by browser extension interference (e.g., MetaMask). Please disable extensions and try again.");
        }
        backendAlerts = JSON.parse(alertsResponseText);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from alerts response. Response text (first 200 chars): ${alertsResponseText.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content for alerts. This can be caused by browser extensions. Try disabling them and reloading.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
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
      toast({
        title: "Notification Check Error",
        description: errorMessage,
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
        try {
            const errorData = await response.json();
            errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
           errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
      }
      
      const responseTextUpdateJob = await response.text();
      try {
        if (!responseTextUpdateJob) {
          throw new Error("API response for job update was empty. This may be caused by browser extension interference (e.g., MetaMask). Please disable extensions and try again.");
        }
        JSON.parse(responseTextUpdateJob);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from job update response. Response text (first 200 chars): ${responseTextUpdateJob.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after job update. Possible browser extension interference.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      
      // State is now managed by the real-time listener, no need for setJobs
      
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
      toast({
        title: "Update Error",
        description: errorMessage,
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
        try {
            const errorData = await response.json();
            errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
           errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
      }

      const responseTextResetJob = await response.text();
      try {
        if (!responseTextResetJob) {
            throw new Error("API response for job reset was empty. This may be caused by browser extension interference (e.g., MetaMask). Please disable extensions and try again.");
        }
        JSON.parse(responseTextResetJob);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from job reset response. Response text (first 200 chars): ${responseTextResetJob.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after job reset. Possible browser extension interference.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }

      // State is now managed by the real-time listener, no need for setJobs
      toast({
        title: "Job Status Reset",
        description: "The job post status has been reset to pending.",
        variant: "default" 
      });
    } catch (error) {
      console.error(`${contextPrefix} Error resetting job status:`, error);
      const errorMessage = error instanceof Error ? error.message : "Could not reset job status.";
      toast({
        title: "Reset Error",
        description: errorMessage,
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
        <CardDescription>Review, approve, or reject job postings. The list updates in real-time. Approving a job will check for matching user alerts.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
            <div className="text-center py-10">
                <RotateCcw className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
                <p className="text-lg text-muted-foreground">Loading real-time job list...</p>
            </div>
        ) : error ? (
            <div className="text-center py-10 bg-destructive/10 border border-destructive rounded-lg p-4">
              <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
              <p className="text-lg text-destructive font-semibold">Failed to Load Jobs</p>
              <p className="text-sm text-destructive/80 max-w-md mx-auto">{error}</p>
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
