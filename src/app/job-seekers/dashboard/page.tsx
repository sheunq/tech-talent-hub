
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Lock, LayoutDashboard, Briefcase, Bookmark, Bell, Brain, User, ArrowRight, Star, UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Mock data for dashboard
const mockApplications = [
    { id: '1', jobTitle: 'Senior Frontend Engineer', company: 'Innovate Solutions', status: 'Viewed' },
    { id: '2', jobTitle: 'UX Designer', company: 'Creative Minds Studio', status: 'Pending' },
    { id: '3', jobTitle: 'Backend Engineer (Node.js)', company: 'DevSolutions', status: 'Rejected' },
];

const mockSavedJobs = [
    { id: '8', jobTitle: 'Cloud DevOps Architect', company: 'SkyNet Systems' },
    { id: '5', jobTitle: 'Data Scientist (AI/ML)', company: 'Alpha Analytics' },
];

const mockAiRecs = [
    { jobTitle: 'React Native Developer', companyName: 'MobileFirst Corp', reasoning: 'Matches your React and JavaScript skills for mobile development.'},
    { jobTitle: 'Full-Stack TypeScript Engineer', companyName: 'TypeSafe Inc.', reasoning: 'Strong alignment with your TypeScript and full-stack experience.'},
]

export default function JobSeekerDashboardPage() {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        toast({
          title: 'Access Denied',
          description: 'Please log in to view the dashboard.',
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
        router.push('/');
        setAccessDenied(true);
      } else {
        setAccessDenied(false);
      }
    }
  }, [currentUser, userRole, authLoading, router, toast]);
  
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'viewed': return 'secondary';
      case 'rejected': return 'destructive';
      case 'pending':
      default: return 'outline';
    }
  };

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
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image 
                src={currentUser.photoURL || '/images/vision.jpg'}
                alt="Your avatar"
                width={80}
                height={80}
                className="rounded-full border-4 border-primary"
                data-ai-hint="avatar"
            />
            <div>
                <h1 className="text-3xl font-bold font-headline">Welcome, {currentUser.displayName || currentUser.email?.split('@')[0] || 'Job Seeker'}!</h1>
                <p className="text-muted-foreground">This is your command center for your job search. Let's get started.</p>
            </div>
        </div>
      </div>
      
       <Card className="shadow-md bg-primary/5 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <UploadCloud className="h-7 w-7 text-primary" />
            <CardTitle className="font-headline text-2xl">Build Your Profile Faster</CardTitle>
          </div>
          <CardDescription>Use our AI to parse your resume and build your professional profile in seconds.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Save time on data entry. Upload your resume and let our AI extract your skills, experience, and education to create a comprehensive profile that attracts employers.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/job-seekers/resume-upload">
              Upload Your Resume <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>


       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Applied</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">(Simulated data)</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Jobs</CardTitle>
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
             <p className="text-xs text-muted-foreground">(Simulated data)</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
             <p className="text-xs text-muted-foreground">In the last 7 days (simulated)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary"/>
                    <CardTitle className="font-headline text-xl">Recent Applications</CardTitle>
                </div>
                <CardDescription>Track the status of jobs you've applied for.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Job Title</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockApplications.map(app => (
                            <TableRow key={app.id}>
                                <TableCell>
                                    <div className="font-medium">{app.jobTitle}</div>
                                    <div className="text-xs text-muted-foreground">{app.company}</div>
                                </TableCell>
                                <TableCell><Badge variant={getStatusBadgeVariant(app.status)}>{app.status}</Badge></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                 <Button variant="link" className="p-0 h-auto">View all applications</Button>
            </CardFooter>
          </Card>

           <Card className="shadow-md">
            <CardHeader>
                 <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-primary"/>
                    <CardTitle className="font-headline text-xl">AI Recommendations</CardTitle>
                </div>
                <CardDescription>Jobs matched to your profile by our AI.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {mockAiRecs.map((rec, index) => (
                    <div key={index} className="p-3 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-foreground">{rec.jobTitle}</h4>
                        <p className="text-sm text-muted-foreground">{rec.companyName}</p>
                        <p className="text-xs text-foreground/80 mt-1 italic">"{rec.reasoning}"</p>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/ai-match">Find more matches <ArrowRight className="ml-1.5 h-4 w-4"/></Link>
                </Button>
            </CardFooter>
          </Card>
      </div>
      
       <Card className="shadow-md">
            <CardHeader>
                 <div className="flex items-center gap-3">
                    <Bookmark className="h-6 w-6 text-primary"/>
                    <CardTitle className="font-headline text-xl">Saved Jobs</CardTitle>
                </div>
                <CardDescription>Your bookmarked jobs for easy access.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                 {mockSavedJobs.map(job => (
                    <div key={job.id} className="flex justify-between items-center p-3 border rounded-md">
                        <div>
                            <p className="font-medium">{job.jobTitle}</p>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                            <Link href={`/jobs/${job.id}`}>View</Link>
                        </Button>
                    </div>
                ))}
            </CardContent>
             <CardFooter>
                 <Button variant="link" className="p-0 h-auto">View all saved jobs</Button>
            </CardFooter>
        </Card>

    </div>
  );
}
