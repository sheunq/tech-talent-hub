'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Loader2, Lock, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CandidateProfilePage() {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        toast({
          title: 'Access Denied',
          description: 'Please log in to view your profile.',
          variant: 'destructive',
        });
        router.push('/job-seekers/auth');
        setAccessDenied(true);
      } else if (userRole !== 'jobSeeker') {
        toast({
          title: 'Access Restricted',
          description: 'This page is for job seekers only.',
          variant: 'destructive',
        });
        router.push('/'); // Redirect to home if not a job seeker
        setAccessDenied(true);
      } else {
        setAccessDenied(false);
      }
    }
  }, [currentUser, userRole, authLoading, router, toast]);

  if (authLoading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Loading profile...</p>
      </div>
    );
  }

  if (accessDenied) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Lock className="h-12 w-12 text-destructive mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Access Denied. Redirecting...</p>
      </div>
    );
  }
  
  if (!currentUser) { 
    return null; 
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
       <Button asChild variant="outline">
          <Link href="/job-seekers/dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

      <Card className="max-w-2xl mx-auto shadow-xl rounded-xl">
        <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                <User className="h-10 w-10 text-primary" />
            </div>
          <CardTitle className="font-headline text-3xl">Your Candidate Profile</CardTitle>
          <CardDescription>Manage your job seeker information and preferences here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="text-center">
                <Image 
                    src={currentUser.photoURL || 'https://placehold.co/128x128.png'} 
                    alt={currentUser.displayName || currentUser.email || "User Avatar"}
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4 border-4 border-primary"
                    data-ai-hint="avatar"
                />
                <h2 className="text-2xl font-semibold">{currentUser.displayName || 'Your Name'}</h2>
                <p className="text-muted-foreground">{currentUser.email}</p>
            </div>
          <p className="text-muted-foreground text-center">
            This is a placeholder for your profile details. In a full application, you would be able to edit your skills, experience, resume, and more here.
          </p>
          <div className="border rounded-lg p-6 bg-muted/20 text-center">
              <Image src="https://placehold.co/400x200.png" alt="Profile sections placeholder" width={400} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="placeholder"/>
              <p className="text-sm text-muted-foreground">Profile editing sections will be implemented here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
