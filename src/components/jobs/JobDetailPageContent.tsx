
'use client';

import { useState, useEffect } from 'react';
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
import type { BackendStoredJob } from '@/lib/schemas/job';

interface JobDetailPageContentProps {
  jobId: string;
}

const extractTagsFromText = (text: string): string[] => {
    const keywords = ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'UI/UX Design', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Jest', 'Webpack', 'Python', 'Django', 'Flask', 'Docker', 'AWS', 'GCP', 'Azure', 'PostgreSQL', 'REST APIs', 'Celery', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Linux', 'Ansible', 'Docker Swarm', 'Prometheus', 'Grafana', 'Figma', 'Sketch', 'Adobe XD', 'SQL', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Spark', 'Go', 'Security+', 'CEH', 'SIEM', 'React Native', 'Java', 'Kafka'];
    const foundTags = new Set<string>();
    
    keywords.forEach(keyword => {
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
        if (regex.test(text)) {
            foundTags.add(keyword);
        }
    });
    
    return Array.from(foundTags).slice(0, 5);
};


const mapBackendJobToJobCard = (backendJob: BackendStoredJob): Job => {
  let salaryRange: string | undefined = undefined;
  if (backendJob.salaryMin && backendJob.salaryMax) {
    salaryRange = `$${Math.round(backendJob.salaryMin / 1000)}k - $${Math.round(backendJob.salaryMax / 1000)}k`;
  } else if (backendJob.salaryMin) {
    salaryRange = `From $${Math.round(backendJob.salaryMin / 1000)}k`;
  }
  
  const combinedTextForTags = `${backendJob.jobTitle} ${backendJob.mainDescription} ${backendJob.requirements}`;

  return {
    id: backendJob.id,
    title: backendJob.jobTitle,
    companyName: backendJob.companyName,
    location: backendJob.location,
    jobType: backendJob.jobType,
    category: backendJob.jobCategory,
    descriptionExcerpt: backendJob.mainDescription,
    postedDate: backendJob.submittedDate,
    salaryRange,
    companyLogo: backendJob.companyLogo || 'https://placehold.co/100x100.png',
    imageHint: 'company logo large generic',
    tags: extractTagsFromText(combinedTextForTags),
    applyUrl: backendJob.applyUrl,
    requirements: backendJob.requirements,
  };
};

export function JobDetailPageContent({ jobId }: JobDetailPageContentProps) {
  const router = useRouter();
  
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      if (!jobId) return;
      setIsLoading(true);
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
           let errorMsg = 'Job not found or is no longer available.';
            try {
                const errData = await response.json();
                errorMsg = errData.error || errorMsg;
            } catch(e) {
                // Ignore if response is not JSON
            }
          throw new Error(errorMsg);
        }
        const jobData: BackendStoredJob = await response.json();
        setJob(mapBackendJobToJobCard(jobData));
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchJob();
  }, [jobId]);

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

  const formattedPostedDate = job.postedDate ? formatDistanceToNow(new Date(job.postedDate), { addSuffix: true }) : null;

  return (
    <div className="container mx-auto py-8">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 space-y-8">
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
                  <Link href={`/reviews/${job.companyName}`} className="text-lg text-primary hover:underline">{job.companyName}</Link>
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
                {formattedPostedDate && (
                  <div className="flex items-center p-3 bg-secondary/50 rounded-md col-span-2 md:col-span-1">
                    <CalendarDays className="h-5 w-5 mr-2.5 text-primary" />
                    <div>
                      <span className="font-semibold">Posted:</span>
                      <p className="text-muted-foreground">{formattedPostedDate}</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-headline mb-3">Job Description</h2>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                  {job.descriptionExcerpt}
                </p>
              </div>

              {job.requirements && (
                <div>
                  <h2 className="text-2xl font-semibold font-headline mb-3">Requirements</h2>
                  <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                    {job.requirements}
                  </p>
                </div>
              )}

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
        </div>
      </div>
    </div>
  );
}
