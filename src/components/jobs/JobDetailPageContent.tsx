
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Briefcase, DollarSign, CalendarDays, Tag, AlertTriangle, ExternalLink, Loader2 } from 'lucide-react';
import type { Job } from '@/components/jobs/JobCard';
import { formatDistanceToNow } from 'date-fns';
import { ApplicationButton } from '@/components/jobs/ApplicationButton';

interface JobDetailPageContentProps {
  jobId: string;
  initialJob: Job | null;
  initialRelatedJobs: Job[];
  initialError: string | null;
}

export function JobDetailPageContent({ jobId, initialJob, initialRelatedJobs, initialError }: JobDetailPageContentProps) {
  const router = useRouter();
  
  const [job] = useState<Job | null>(initialJob);
  const [relatedJobs] = useState<Job[]>(initialRelatedJobs);
  const [error] = useState<string | null>(initialError);
  const [isLoading] = useState(!initialJob && !initialError);

  if (isLoading) {
    return (
        <div className="container mx-auto py-12 text-center">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground text-lg">Loading job details...</p>
        </div>
    );
  }

  if (error || !job) {
    return (
      <div className="container mx-auto py-12 text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold mb-4 font-headline">Job Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          {error || "Sorry, we couldn't find the job listing you're looking for. It might have been filled or removed."}
        </p>
        <Button onClick={() => router.push('/jobs/search')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Job Search
        </Button>
      </div>
    );
  }

  const fullDescription = job.descriptionExcerpt;
  const dateToFormat = job.postedDate ? new Date(job.postedDate) : new Date();
  const formattedPostedDate = formatDistanceToNow(dateToFormat, { addSuffix: true });

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="p-6 sm:p-8 bg-muted/30">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              src={job.companyLogo || 'https://placehold.co/100x100.png'}
              alt={`${job.companyName} logo`}
              width={100}
              height={100}
              className="rounded-lg border-2 border-border object-contain flex-shrink-0"
              data-ai-hint={job.imageHint || "company logo large generic"}
            />
            <div className="flex-grow">
              <h1 className="text-3xl sm:text-4xl font-bold font-headline mb-1">{job.title}</h1>
              <Link href="#" className="text-lg text-primary hover:underline">{job.companyName}</Link>
              <div className="flex items-center text-muted-foreground mt-1.5 text-sm">
                <MapPin className="h-4 w-4 mr-1.5" /> {job.location}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center p-3 bg-secondary/50 rounded-md">
              <Briefcase className="h-5 w-5 mr-2.5 text-primary" />
              <div>
                <span className="font-semibold">Job Type:</span>
                <p className="text-muted-foreground">{job.jobType}</p>
              </div>
            </div>
            {job.salaryRange && (
              <div className="flex items-center p-3 bg-secondary/50 rounded-md">
                <DollarSign className="h-5 w-5 mr-2.5 text-primary" />
                <div>
                  <span className="font-semibold">Salary:</span>
                  <p className="text-muted-foreground">{job.salaryRange}</p>
                </div>
              </div>
            )}
            {job.category && (
               <div className="flex items-center p-3 bg-secondary/50 rounded-md">
                <Tag className="h-5 w-5 mr-2.5 text-primary" />
                <div>
                    <span className="font-semibold">Category:</span>
                    <p className="text-muted-foreground">{job.category}</p>
                </div>
              </div>
            )}
            <div className="flex items-center p-3 bg-secondary/50 rounded-md col-span-2 md:col-span-1">
              <CalendarDays className="h-5 w-5 mr-2.5 text-primary" />
              <div>
                <span className="font-semibold">Posted:</span>
                <p className="text-muted-foreground">{formattedPostedDate}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold font-headline mb-3">Job Description</h2>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {fullDescription}
            </p>
          </div>

          {job.tags && job.tags.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold font-headline mb-2">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-sm px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 sm:p-8 bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
           <p className="text-xs text-muted-foreground text-center sm:text-left">
            TekTunnel advises job seekers to verify all job details before applying.
          </p>
          <ApplicationButton jobId={job.id} applyUrl={job.applyUrl} />
        </CardFooter>
      </Card>

      {relatedJobs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold font-headline mb-4">Related Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedJobs.map(relatedJob => (
              <Card key={relatedJob.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <CardTitle className="text-base font-semibold leading-tight line-clamp-2">{relatedJob.title}</CardTitle>
                  <CardDescription className="text-sm">{relatedJob.companyName}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground space-y-2">
                   <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 shrink-0" />
                    <span>{relatedJob.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 shrink-0" />
                    <span>{relatedJob.jobType}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="secondary" size="sm" className="w-full">
                    <Link href={`/jobs/${relatedJob.id}`}>View Job</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
