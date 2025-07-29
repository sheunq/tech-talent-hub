
'use client';

import { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BellRing, Mail, AlertCircle, Loader2, Trash2, AlertTriangle } from 'lucide-react';
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
  const [error, setError] = useState<string | null>(null);


  async function fetchAlerts() {
    const contextPrefix = "[JobAlertsPage fetchAlerts]";
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/alerts');
      if (!response.ok) {
        let errorMsg = `Failed to fetch alerts. Status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
          errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
      }
      
      const responseText = await response.text();
      let data: BackendStoredAlert[];
      try {
        if (!responseText) {
          throw new Error("API response for alerts was empty. This can be caused by browser extension interference (e.g., MetaMask). Please disable extensions and try again.");
        }
        data = JSON.parse(responseText);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from alerts response. Response text (first 200 chars): ${responseText.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to parse API response content for alerts. This can be caused by browser extensions interfering with page loading.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
      }
      setAlerts(data);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Could not load saved job alerts from the server.";
      console.error(`${contextPrefix} Error loading job alerts from API:`, err);
      setError(errorMessage);
      toast({
        title: "Load Error",
        description: errorMessage,
        variant: "destructive",
        duration: 10000,
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
        try {
            const errorData = await response.json();
            errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
          errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
      }
      
      const responseTextNewAlert = await response.text();
      let newAlertFromServer;
      try {
        if (!responseTextNewAlert) {
          throw new Error("API response for create alert was empty. This may be caused by browser extension interference (e.g., MetaMask). Please disable extensions and try again.");
        }
        newAlertFromServer = JSON.parse(responseTextNewAlert);
      } catch (jsonParseError) {
        console.error(`${contextPrefix} Error parsing JSON from create alert response. Response text (first 200 chars): ${responseTextNewAlert.substring(0,200)}`, jsonParseError);
        let descriptiveError = `Failed to process API response content after creating alert. Possible browser extension interference.`;
        if (jsonParseError instanceof Error) {
          descriptiveError += ` Details: ${jsonParseError.message}`;
        }
        throw new Error(descriptiveError);
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
        duration: 10000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteAlert = async (id: string) => {
    const contextPrefix = "[JobAlertsPage handleDeleteAlert]";
    try {
      const response = await fetch(`/api/alerts/${id}`, { method: 'DELETE' });
      if (!response.ok && response.status !== 204) {
        let errorMsg = `Failed to delete alert. Status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorMsg += ` - ${errorData.error || 'Unknown API error'}`;
        } catch (e) {
            errorMsg += ` - Could not parse error response.`;
        }
        throw new Error(errorMsg);
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
            duration: 10000,
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
      ) : error ? (
            <div className="text-center py-10 bg-destructive/10 border border-destructive rounded-lg p-4">
              <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
              <p className="text-lg text-destructive font-semibold">Failed to Load Alerts</p>
              <p className="text-sm text-destructive/80 max-w-md mx-auto">{error}</p>
              <Button onClick={fetchAlerts} variant="destructive" className="mt-4">Try Again</Button>
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
            src="images/vision.jpg"
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
