
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Briefcase, DollarSign, CalendarDays, Tag, AlertTriangle, ExternalLink, Loader2 } from 'lucide-react';
import type { Job } from '@/components/jobs/JobCard';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { formatDistanceToNow } from 'date-fns';
import { ApplicationButton } from '@/components/jobs/ApplicationButton';

// Mock data to be used if the database is empty or a specific mock job is requested
const mockJobsData: BackendStoredJob[] = [
  {
    id: 'mock-fe-1',
    jobTitle: 'Senior Frontend Engineer',
    companyName: 'Innovate Solutions',
    mainDescription: 'Join our team to build next-generation web applications with cutting-edge technologies. You will work on our flagship product, contributing to a high-quality user experience.',
    requirements: '5+ years of experience in frontend development, expert in React and TypeScript. Strong understanding of modern web APIs and performance optimization. BSc in Computer Science or equivalent.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Senior-level',
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: 'Full-time',
    location: 'Remote (USA)',
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
  },
  {
    id: 'mock-do-1',
    jobTitle: 'Cloud DevOps Architect',
    companyName: 'SkyNet Systems',
    mainDescription: 'We are seeking a Cloud DevOps Architect to design, implement, and manage our cloud infrastructure. You will be key in ensuring scalability, reliability, and security of our services.',
    requirements: 'Extensive experience with AWS or GCP. Proficient with Kubernetes, Terraform, and CI/CD pipelines (Jenkins, GitLab CI). Strong scripting skills in Python or Go.',
    jobCategory: 'DevOps & Site Reliability',
    experienceLevel: 'Lead',
    salaryMin: 140000,
    salaryMax: 180000,
    jobType: 'Full-time',
    location: 'Austin, TX',
    applicationDeadline: new Date('2024-12-15'),
    submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
  },
  {
    id: 'mock-ux-1',
    jobTitle: 'Lead UX Designer',
    companyName: 'Pixel Perfect Co.',
    mainDescription: 'Lead our design team to create intuitive and beautiful user experiences across our mobile and web platforms. You will drive the design process from research to high-fidelity prototypes.',
    requirements: '8+ years in UX/UI design. A strong portfolio showcasing your work. Expertise in Figma, Sketch, and Adobe Creative Suite. Experience leading a team of designers.',
    jobCategory: 'UX/UI Design',
    experienceLevel: 'Lead',
    jobType: 'Contract',
    location: 'New York, NY',
    submittedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
  },
  {
    id: 'mock-ds-1',
    jobTitle: 'Data Scientist (AI/ML)',
    companyName: 'Alpha Analytics',
    mainDescription: 'Leverage data to drive business decisions. You will develop machine learning models, conduct statistical analysis, and present findings to stakeholders.',
    requirements: 'MSc or PhD in a quantitative field. 3+ years of experience. Proficiency in Python (Pandas, Scikit-learn, TensorFlow/PyTorch) and SQL.',
    jobCategory: 'Data Science & Analytics',
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'Boston, MA',
    submittedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
  },
  {
    id: 'mock-be-1',
    jobTitle: 'Junior Backend Developer',
    companyName: 'CodeCrafters Inc.',
    mainDescription: 'Eager to grow your backend development skills? Join our team to work on our core API services, learn from senior engineers, and contribute to a scalable microservices architecture.',
    requirements: '1-2 years of experience with Node.js or Python. Understanding of REST APIs. Basic knowledge of databases (SQL or NoSQL). A passion for learning and problem-solving.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Entry-level',
    salaryMin: 75000,
    salaryMax: 90000,
    jobType: 'Full-time',
    location: 'Remote',
    submittedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
  },

  {
    id: 'mock-pm-1',
    jobTitle: 'Product Manager - Mobile',
    companyName: 'Apptivate',
    mainDescription: 'Own the product roadmap for our flagship mobile application. You will work closely with engineering, design, and marketing to define features and drive growth.',
    requirements: '4+ years of product management experience, with at least 2 years in mobile apps. Strong analytical skills and experience with agile methodologies.',
    jobCategory: 'Product Management',
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'San Francisco, CA',
    applicationDeadline: new Date('2024-11-30'),
    submittedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
  },
    {
    id: 'mock-cy-1',
    jobTitle: 'Cybersecurity Analyst',
    companyName: 'SecureNet',
    mainDescription: 'Monitor our systems for security threats, analyze and respond to incidents, and help improve our overall security posture. This is a critical role in protecting our customer data.',
    requirements: '2+ years in a cybersecurity role. Familiarity with SIEM tools, vulnerability scanning, and incident response procedures. Certifications like Security+ or CEH are a plus.',
    jobCategory: 'Cybersecurity',
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'London, UK',
    submittedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
  },
  {
    id: 'mock-mo-1',
    jobTitle: 'Mobile Developer (React Native)',
    companyName: 'ConnectSphere',
    mainDescription: 'Develop and maintain our cross-platform mobile application using React Native. Collaborate with a passionate team to deliver a seamless user experience.',
    requirements: '3+ years of mobile development experience. Strong proficiency in React Native and JavaScript/TypeScript. Experience publishing apps to the App Store and Google Play.',
    jobCategory: 'Mobile Development',
    experienceLevel: 'Mid-level',
    jobType: 'Part-time',
    location: 'Remote (Europe)',
    submittedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
  },
    // Adding featured jobs from homepage to ensure they are clickable
  {
    id: '7',
    jobTitle: 'Senior Frontend Engineer',
    companyName: 'Innovate Solutions',
    mainDescription: 'Join our innovative team to build next-generation solutions. Strong experience in relevant technologies required. You will be a key part of our product development cycle.',
    requirements: '5+ years with React, TypeScript, and Next.js. Experience with state management libraries like Redux or Zustand.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'Remote (USA)',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
  },
  {
    id: '8',
    jobTitle: 'Cloud DevOps Architect',
    companyName: 'SkyNet Systems',
    mainDescription: 'Design and maintain our cloud infrastructure, ensuring scalability and reliability. Work with cutting-edge CI/CD tools.',
    requirements: 'Deep knowledge of AWS or Azure, Kubernetes, and Terraform. Proven experience in a DevOps leadership role.',
    jobCategory: 'DevOps & Site Reliability',
    experienceLevel: 'Lead',
    jobType: 'Full-time',
    location: 'Austin, TX',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
  },
  {
    id: '9',
    jobTitle: 'Lead UX Designer',
    companyName: 'Pixel Perfect Co.',
    mainDescription: 'Lead our design team in creating stunning and user-friendly interfaces. A strong portfolio is a must.',
    requirements: 'Expertise in Figma, user research methodologies, and a portfolio of successful projects.',
    jobCategory: 'UX/UI Design',
    experienceLevel: 'Lead',
    jobType: 'Contract',
    location: 'New York, NY',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
  },
];


const mapBackendJobToJobCard = (backendJob: BackendStoredJob): Job => {
  let salaryRange: string | undefined = undefined;
  if (backendJob.salaryMin && backendJob.salaryMax) {
    salaryRange = `$${Math.round(backendJob.salaryMin / 1000)}k - $${Math.round(backendJob.salaryMax / 1000)}k`;
  } else if (backendJob.salaryMin) {
    salaryRange = `From $${Math.round(backendJob.salaryMin / 1000)}k`;
  }

  return {
    id: backendJob.id,
    title: backendJob.jobTitle,
    companyName: backendJob.companyName,
    location: backendJob.location,
    jobType: backendJob.jobType,
    category: backendJob.jobCategory,
    descriptionExcerpt: `${backendJob.mainDescription}\n\n**Requirements:**\n${backendJob.requirements}`,
    postedDate: backendJob.submittedDate,
    salaryRange,
    companyLogo: 'https://placehold.co/100x100.png',
    imageHint: 'company logo generic',
    tags: [],
    applyUrl: undefined,
  };
};

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  
  const [job, setJob] = useState<Job | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Step 1: Try to fetch from API
        const response = await fetch('/api/jobs');
        if (response.ok) {
          const allApiJobs: BackendStoredJob[] = await response.json().catch(() => []);
          const targetJobData = allApiJobs.find(j => j.id === jobId);
          if (targetJobData && targetJobData.status === 'approved') {
            setJob(mapBackendJobToJobCard(targetJobData));
            const relatedApiJobs = allApiJobs
              .filter(j => j.jobCategory === targetJobData.jobCategory && j.id !== targetJobData.id && j.status === 'approved')
              .slice(0, 3);
            setRelatedJobs(relatedApiJobs.map(mapBackendJobToJobCard));
            setIsLoading(false);
            return; // Job found, exit
          }
        }
        
        // Step 2: If API fetch fails or job not found, fallback to mock data
        console.log("Job not found in API, checking mock data...");
        const mockJobData = mockJobsData.find(j => j.id === jobId);
        if (mockJobData) {
          setJob(mapBackendJobToJobCard(mockJobData));
          const relatedMockJobs = mockJobsData
            .filter(j => j.jobCategory === mockJobData.jobCategory && j.id !== mockJobData.id)
            .slice(0, 3);
          setRelatedJobs(relatedMockJobs.map(mapBackendJobToJobCard));
        } else {
          // Step 3: If not in API or mock data, then it's truly not found
          throw new Error('Job not found or is no longer available.');
        }
      } catch (err) {
        // This catch block will now handle both API errors and the "truly not found" error
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    if (jobId) {
      fetchJobData();
    }
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
          { <ApplicationButton jobId={job.id} applyUrl={job.applyUrl}/> }
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

