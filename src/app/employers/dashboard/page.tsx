
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, UsersRound, Briefcase, Building, BarChartHorizontalBig, Loader2, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EmployerDashboardPage() {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        toast({
          title: 'Access Denied',
          description: 'Please log in as an employer to view the dashboard.',
          variant: 'destructive',
        });
        router.push('/employers/auth');
        setAccessDenied(true);
      } else if (userRole !== 'employer') {
        toast({
          title: 'Access Restricted',
          description: 'This page is for employers only.',
          variant: 'destructive',
        });
        router.push('/'); // Redirect to home if not an employer
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
        <p className="mt-4 text-muted-foreground text-lg">Loading dashboard...</p>
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
    <div className="space-y-8">
      <div className="bg-card p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
            <LayoutDashboard className="h-10 w-10 text-primary" />
            <div>
                <h1 className="text-3xl font-bold font-headline">Employer Dashboard</h1>
                <p className="text-muted-foreground">Welcome, {currentUser.displayName || currentUser.email || 'Employer'}! Manage your hiring activities.</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-1">
                <UsersRound className="h-7 w-7 text-accent" />
                <CardTitle className="font-headline text-2xl">Find Talent</CardTitle>
            </div>
            <CardDescription>Search and discover skilled professionals for your team.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-4">
                Access our pool of talented job seekers. Filter by skills, experience, and location to find the perfect match.
            </p>
             <Image src="https://placehold.co/300x150.png" alt="Find talent placeholder" width={300} height={150} className="rounded-md mx-auto" data-ai-hint="candidate profiles list"/>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
                <Link href="/employers/find-talent">Go to Talent Search <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-1">
                <Briefcase className="h-7 w-7 text-accent" />
                <CardTitle className="font-headline text-2xl">Post a Job</CardTitle>
            </div>
            <CardDescription>Create and publish new job listings to attract candidates.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-muted-foreground text-sm mb-4">
                Easily create job postings with detailed descriptions, requirements, and attract top talent to your openings.
            </p>
             <Image src="https://placehold.co/300x150.png" alt="Post job placeholder" width={300} height={150} className="rounded-md mx-auto" data-ai-hint="job form interface"/>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
                <Link href="/employers/post-job">Create New Job Post <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-1">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
                <CardTitle className="text-lg">My Job Postings</CardTitle>
            </div>
            <CardDescription className="text-xs">View and manage your active and past job listings.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image src="https://placehold.co/200x100.png" alt="My job postings placeholder" width={200} height={100} className="mt-3 rounded-md mx-auto" data-ai-hint="job list icons"/>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
                <Link href="/employers/dashboard/my-postings">Manage Postings <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <CardHeader>
             <div className="flex items-center gap-2 mb-1">
                <Building className="h-6 w-6 text-muted-foreground" />
                <CardTitle className="text-lg">Company Profile</CardTitle>
            </div>
            <CardDescription className="text-xs">Update your company details and branding.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image src="https://placehold.co/200x100.png" alt="Company profile placeholder" width={200} height={100} className="mt-3 rounded-md mx-auto" data-ai-hint="company settings form"/>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
                <Link href="/employers/dashboard/company-profile">Edit Profile <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <CardHeader>
             <div className="flex items-center gap-2 mb-1">
                <BarChartHorizontalBig className="h-6 w-6 text-muted-foreground" />
                <CardTitle className="text-lg">Analytics</CardTitle>
            </div>
            <CardDescription className="text-xs">Track views, applications, and hiring metrics.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image src="https://placehold.co/200x100.png" alt="Analytics placeholder" width={200} height={100} className="mt-3 rounded-md mx-auto" data-ai-hint="dashboard charts graphs"/>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
                <Link href="/employers/dashboard/analytics">View Analytics <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

    
