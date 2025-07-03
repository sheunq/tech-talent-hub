
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, ExternalLink, ShieldAlert, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';


//import { Button } from '@/components/ui/button';




interface ApplicationButtonProps {
  jobId: string;
  applyUrl?: string; // For external applications
}

// Mock function to check application status - in a real app, this would be an API call
async function checkApplicationStatus(jobId: string, applicantId: string | undefined): Promise<boolean> {
  if (!applicantId) return false;
  // This is a mock. A real implementation would be:
  // const response = await fetch(`/api/applications/status?jobId=${jobId}`);
  // const data = await response.json();
  // return data.hasApplied;
  // For now, we'll track applications client-side after a successful application.
  return sessionStorage.getItem(`applied_${jobId}`) === 'true';
}


export function ApplicationButton({ jobId, applyUrl }: ApplicationButtonProps) {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);

  useEffect(() => {
    async function checkStatus() {
        if (currentUser && userRole === 'jobSeeker') {
            const status = await checkApplicationStatus(jobId, currentUser.uid);
            setHasApplied(status);
        }
        setIsCheckingStatus(false);
    }
    if (!authLoading) {
      checkStatus();
    }
  }, [jobId, currentUser, userRole, authLoading]);

  const handleApply = async () => {
    setIsSubmitting(true);
    try {
      if (!currentUser) throw new Error("User not authenticated.");
      
      const token = await currentUser.getIdToken();
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ jobId }),
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || `Request failed with status ${response.status}`);
      }
      
      toast({
        title: 'Application Sent!',
        description: 'Your application has been successfully submitted.',
      });
      setHasApplied(true);
      sessionStorage.setItem(`applied_${jobId}`, 'true'); // Mock persistence

    } catch (error) {
      console.error("Application error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({
        title: 'Application Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginRedirect = () => {
      router.push('/job-seekers/auth');
  }

  if (authLoading || isCheckingStatus) {
    return <Button size="lg" className="w-full sm:w-auto text-base py-3" disabled><Loader2 className="mr-2 h-5 w-5 animate-spin" />Checking Status...</Button>;
  }

  if (applyUrl) {
    return (
      <Button asChild size="lg" className="w-full sm:w-auto text-base py-3">
        <a href={applyUrl} target="_blank" rel="noopener noreferrer">
          Apply on Company Site <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    );
  }

  if (!currentUser) {
    return <Button size="lg" className="w-full sm:w-auto text-base py-3" onClick={handleLoginRedirect}><LogIn className="mr-2 h-4 w-4" />Login to Apply</Button>;
  }
  
  if (userRole !== 'jobSeeker') {
      return <Button size="lg" className="w-full sm:w-auto text-base py-3" disabled><ShieldAlert className="mr-2 h-4 w-4" />Employers Cannot Apply</Button>;
  }

  if (hasApplied) {
    return <Button size="lg" className="w-full sm:w-auto text-base py-3" disabled><CheckCircle className="mr-2 h-4 w-4" />Already Applied</Button>;
  }

  return (
    <Button size="lg" className="w-full sm:w-auto text-base py-3" onClick={handleApply} disabled={isSubmitting}>
      {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
      {isSubmitting ? 'Submitting...' : 'Apply Now'}
    </Button>
  );
}
