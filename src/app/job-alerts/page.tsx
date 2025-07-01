'use client';

import { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BellRing, Mail, AlertCircle, Loader2, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import type { BackendStoredAlert, AlertApiInput } from '@/lib/schemas/alert';
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


export default function JobAlertsPage() {
  const { toast } = useToast();
  const { currentUser } = useAuth();
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailNotif, setEmailNotif] = useState(true);
  const [dashboardNotif, setDashboardNotif] = useState(true);
  const [alerts, setAlerts] = useState<BackendStoredAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);


  async function fetchAlerts() {
    const contextPrefix = "[JobAlertsPage fetchAlerts]";
    setIsLoading(true);
    try {
      const response = await fetch('/api/alerts');
      if (!response.ok) {
        let errorMsg = `Failed to fetch alerts. Status: ${response.status}`;
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
      
      let responseText;
      try {
        responseText = await response.text();
      } catch (textError) {
        console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read alerts response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }

      console.log(`${contextPrefix} Preparing to parse. responseText type: ${typeof responseText}. Value (first 100 chars): '${String(responseText).substring(0,100)}'`);
      if (responseText === undefined) {
        console.error(`${contextPrefix} CRITICAL: responseText is undefined before JSON.parse. Possible external interference.`);
        throw new Error("Received undefined alerts response body before JSON parsing. This is an unexpected state.");
      }
      if (typeof responseText !== 'string' || responseText.trim() === '') {
        console.error(`${contextPrefix} API response for alerts was OK, but the response body was not a non-empty string. Type: ${typeof responseText}, Trimmed length: ${responseText?.trim().length ?? 'N/A'}.`);
        throw new Error("API response for alerts was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }

      let data: BackendStoredAlert[];
      try {
        data = JSON.parse(responseText);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from alerts response text. Response text (first 200 chars): ${responseText.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to parse API response content for alerts. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      if (data === undefined || data === null) {
           console.error(`${contextPrefix} API response for alerts was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
           throw new Error("API response for alerts parsed to null or undefined, which is unexpected for a successful data fetch.");
      }
      setAlerts(data);

    } catch (error) {
      console.error(`${contextPrefix} Error loading job alerts from API:`, error);
      toast({
        title: "Load Error",
        description: error instanceof Error ? error.message : "Could not load saved job alerts from the server.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAlerts();
  }, []); 

  const handleCreateAlert = async (e: FormEvent) => {
    e.preventDefault();
    const contextPrefix = "[JobAlertsPage handleCreateAlert]";
    if (!keywords.trim()) {
      toast({ title: "Keywords required", description: "Please enter keywords for your alert.", variant: "destructive" });
      return;
    }
    if (!currentUser && emailNotif && !userEmail.trim()) {
      toast({ title: "Email required", description: "Please enter your email for notifications or disable email notifications.", variant: "destructive" });
      return;
    }
    if (!currentUser && emailNotif && userEmail.trim() && !/\S+@\S+\.\S+/.test(userEmail)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    const alertData: AlertApiInput = {
      keywords,
      location,
      emailNotif,
      dashboardNotif: currentUser ? dashboardNotif : false,
      userEmail: !currentUser && emailNotif ? userEmail : undefined,
      userId: currentUser ? currentUser.uid : undefined,
    };

    try {
      const response = await fetch('/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alertData),
      });

      if (!response.ok) {
        let errorMsg = `Failed to create alert. Status: ${response.status}`;
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
      
      let responseTextNewAlert;
      try {
        responseTextNewAlert = await response.text();
      } catch (textError) {
        console.error(`${contextPrefix} Error reading response body as text (even though response was OK):`, textError);
        throw new Error(`Failed to read create alert response body: ${textError instanceof Error ? textError.message : String(textError)}`);
      }
      
      console.log(`${contextPrefix} Preparing to parse. responseTextNewAlert type: ${typeof responseTextNewAlert}. Value (first 100 chars): '${String(responseTextNewAlert).substring(0,100)}'`);
      if (responseTextNewAlert === undefined) {
        console.error(`${contextPrefix} CRITICAL: responseTextNewAlert is undefined before JSON.parse. Possible external interference.`);
        throw new Error("Received undefined create alert response body before JSON parsing. This is an unexpected state.");
      }
      if (typeof responseTextNewAlert !== 'string' || responseTextNewAlert.trim() === '') {
        console.error(`${contextPrefix} API response for create alert was OK, but the response body was not a non-empty string. Type: ${typeof responseTextNewAlert}, Trimmed length: ${responseTextNewAlert?.trim().length ?? 'N/A'}.`);
        throw new Error("API response for create alert was OK, but the response body was empty, null, or not a string after attempting to read it.");
      }

      let newAlertFromServer;
      try {
        newAlertFromServer = JSON.parse(responseTextNewAlert);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from create alert response text. Response text (first 200 chars): ${responseTextNewAlert.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after creating alert. Potential malformed JSON.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      if (newAlertFromServer === undefined || newAlertFromServer === null) {
        console.error(`${contextPrefix} API response for create alert was OK, and JSON parsing succeeded, but the resulting data is null or undefined.`);
        throw new Error("API response for create alert parsed to null or undefined, which is unexpected for a successful data fetch.");
      }

      setAlerts(prevAlerts => [newAlertFromServer, ...prevAlerts]);

      toast({
        title: 'Job Alert Created!',
        description: `You'll be notified for jobs matching "${keywords}" ${location ? `in "${location}"` : ''}.`,
      });
      setKeywords('');
      setLocation('');
      setUserEmail('');
      setEmailNotif(true);
      setDashboardNotif(true);
    } catch (error) {
      console.error(`${contextPrefix} Error creating alert:`, error);
      toast({
        title: "Creation Error",
        description: error instanceof Error ? error.message : "Could not create alert.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteAlert = async (id: string) => {
    const contextPrefix = "[JobAlertsPage handleDeleteAlert]";
    try {
      const response = await fetch(`/api/alerts/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        let errorMsg = `Failed to delete alert. Status: ${response.status}`;
        let errorDetails = 'No additional error details could be retrieved from the response.';
        if (response.status !== 204) {
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
        }
        errorMsg += `. ${errorDetails}`;
        throw new Error(errorMsg);
      }
      
      if (response.status === 204) {
         console.log(`${contextPrefix} Alert deleted successfully (204 No Content).`);
      } else {
        let responseTextDelete;
        try {
            responseTextDelete = await response.text();
            console.log(`${contextPrefix} Preparing to parse from 200 OK. responseTextDelete type: ${typeof responseTextDelete}. Value (first 100 chars): '${String(responseTextDelete).substring(0,100)}'`);
            if (responseTextDelete === undefined) {
                 console.warn(`${contextPrefix} Delete alert response was OK (200), but responseTextDelete is undefined. This is unusual.`);
            } else if (typeof responseTextDelete !== 'string' || responseTextDelete.trim() === '') {
                 console.log(`${contextPrefix} Delete alert response was OK (200) but body was empty or not a string.`);
            } else {
                // Attempt to parse only if there's content, though not expected for this specific DELETE
                // const result = JSON.parse(responseTextDelete); 
                // console.log(`${contextPrefix} Parsed result from 200 OK:`, result);
            }
        } catch (e) {
            console.warn(`${contextPrefix} Error processing response body from successful (200 OK) delete alert. Body might not have been JSON.`, e);
        }
      }
      
      setAlerts(alerts.filter(alert => alert.id !== id));
      toast({
        title: 'Alert Deleted',
        description: 'The job alert has been removed.',
      });

    } catch (error) {
        console.error(`${contextPrefix} Error deleting alert:`, error);
        toast({
            title: "Deletion Error",
            description: error instanceof Error ? error.message : "Could not delete alert.",
            variant: "destructive",
        });
    }
  };


  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
          <BellRing className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">Job Alerts</h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
          Never miss an opportunity. Create custom job alerts and get notified about new roles that match your criteria.
        </p>
      </div>

      <Card className="w-full max-w-lg mx-auto mb-12 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create New Alert</CardTitle>
          <CardDescription>Enter your preferences to set up a new job alert.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateAlert} className="space-y-6">
            <div>
              <Label htmlFor="keywords" className="text-base">Keywords</Label>
              <Input
                id="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g., Senior React Developer, Project Manager"
                className="mt-1 text-base"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="location" className="text-base">Location (Optional)</Label>
              <Input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., San Francisco, CA or Remote"
                className="mt-1 text-base"
                disabled={isSubmitting}
              />
            </div>

            {!currentUser && (
              <div>
                <Label htmlFor="userEmail" className="text-base">Your Email (for notifications)</Label>
                <Input
                  id="userEmail"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 text-base"
                  disabled={!emailNotif || isSubmitting}
                />
                {emailNotif && <p className="text-xs text-muted-foreground mt-1">Required if email notifications are enabled and you are not logged in.</p>}
              </div>
            )}

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <Label htmlFor="emailNotif" className="text-base font-medium cursor-pointer">
                    Email Notifications
                  </Label>
                </div>
                <Switch
                  id="emailNotif"
                  checked={emailNotif}
                  onCheckedChange={setEmailNotif}
                  aria-label="Toggle email notifications"
                  disabled={isSubmitting}
                />
              </div>
              {currentUser && (
                <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                  <div className="flex items-center">
                    <BellRing className="h-5 w-5 mr-3 text-primary" />
                    <Label htmlFor="dashboardNotif" className="text-base font-medium cursor-pointer">
                      Dashboard Notifications
                    </Label>
                  </div>
                  <Switch
                    id="dashboardNotif"
                    checked={dashboardNotif}
                    onCheckedChange={setDashboardNotif}
                    aria-label="Toggle dashboard notifications"
                    disabled={isSubmitting}
                  />
                </div>
              )}
              {!currentUser && (
                <div className="flex items-start text-xs text-muted-foreground p-3 border rounded-md bg-amber-50 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700">
                  <AlertCircle className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
                  <span>Dashboard notifications are for registered users. <Link href="/job-seekers/auth?action=signup" className="underline hover:text-primary">Sign up</Link> or <Link href="/job-seekers/auth" className="underline hover:text-primary">login</Link> to enable.</span>
                </div>
              )}
            </div>
            <Button type="submit" className="w-full text-base py-3" size="lg" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Create Alert
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading ? (
          <div className="text-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
              <p className="text-lg text-muted-foreground">Loading your alerts...</p>
          </div>
      ) : alerts.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center font-headline mb-6">Your Active Alerts</h2>
          {alerts.map(alert => (
            <Card key={alert.id} className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3 pt-5 px-5">
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-headline text-xl break-all">{alert.keywords}</CardTitle>
                     <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete Alert</span>
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Delete Job Alert?</AlertDialogTitle>
                            <AlertDialogDescription>
                            Are you sure you want to delete the job alert for "{alert.keywords}"? This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteAlert(alert.id)} className="bg-destructive hover:bg-destructive/90">
                            Yes, Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                {alert.location && <CardDescription className="text-sm pt-1">Location: {alert.location}</CardDescription>}
                {alert.userEmail && <CardDescription className="text-xs pt-1 text-primary">Notifying (anonymous): {alert.userEmail}</CardDescription>}
                {alert.userId && <CardDescription className="text-xs pt-1 text-green-600">User ID: {alert.userId}</CardDescription>}
              </CardHeader>
              <CardContent className="px-5 pb-5 flex flex-wrap items-center gap-2 pt-2">
                <Badge variant={alert.emailNotif ? 'default' : 'secondary'} className="py-1 px-2.5 text-xs">
                  <Mail className="h-3.5 w-3.5 mr-1.5" /> Email: {alert.emailNotif ? 'On' : 'Off'}
                </Badge>
                {(currentUser || alert.dashboardNotif) &&
                  <Badge variant={alert.dashboardNotif ? 'default' : 'secondary'} className="py-1 px-2.5 text-xs">
                    <BellRing className="h-3.5 w-3.5 mr-1.5" /> Dashboard: {alert.dashboardNotif ? 'On' : 'Off'}
                  </Badge>
                }
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-card border rounded-xl shadow-sm">
          <Image
            src="https://placehold.co/180x135.png"
            alt="No alerts illustration"
            width={180}
            height={135}
            className="mx-auto mb-6 rounded-lg"
            data-ai-hint="empty bell list"
          />
          <h3 className="text-2xl font-semibold mb-2 font-headline">No Job Alerts Yet</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Create your first job alert using the form above to get notified about relevant opportunities.
          </p>
        </div>
      )}
    </div>
  );
}
    
