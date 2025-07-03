
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { JobSearchFilters, type SearchFilters } from '@/components/jobs/JobSearchFilters';
import { JobCard, type Job } from '@/components/jobs/JobCard';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import type { BackendStoredJob } from '@/lib/schemas/job';

const JOBS_PER_PAGE = 6;

// Mock data to be used if the database is empty
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
    descriptionExcerpt: backendJob.mainDescription,
    postedDate: backendJob.submittedDate,
    salaryRange,
    // Placeholders for fields not yet in the DB schema
    companyLogo: 'https://placehold.co/56x56.png',
    imageHint: 'company logo generic',
    tags: [], // The job posting form doesn't collect tags yet
    applyUrl: undefined, // The job posting form doesn't have this yet
  };
};

function JobSearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [allApprovedJobs, setAllApprovedJobs] = useState<BackendStoredJob[]>([]);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const [allJobsShown, setAllJobsShown] = useState(false);
  
  const [activeFilters, setActiveFilters] = useState<SearchFilters>(() => {
    // Initialize filters from URL search params on initial render
    const keywords = searchParams.get('keywords') || '';
    const location = searchParams.get('location') || '';
    const jobType = searchParams.get('jobType') || '';
    const category = searchParams.get('category') || '';
    const salaryMin = parseInt(searchParams.get('salaryMin') || '0') || 0;
    const salaryMaxParam = searchParams.get('salaryMax');
    const salaryMax = salaryMaxParam && !isNaN(parseInt(salaryMaxParam)) ? parseInt(salaryMaxParam) : Infinity;
    
    return { keywords, location, jobType, category, salaryMin, salaryMax };
  });

  // Fetch all jobs once on component mount
  useEffect(() => {
    const fetchJobs = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/jobs');
            if (!res.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const jobsFromApi: BackendStoredJob[] = await res.json().catch(() => []);
            let approvedJobs = jobsFromApi.filter(job => job.status === 'approved');

            // If no jobs from API, use mock data
            if (approvedJobs.length === 0) {
                console.log("No approved jobs found in the database. Using mock data for demonstration.");
                approvedJobs = mockJobsData;
            }

            setAllApprovedJobs(approvedJobs);
        } catch (error) {
            console.error(error);
            // If fetch fails, use mock data as a fallback
            console.log("Failed to fetch jobs from API. Using mock data for demonstration.");
            setAllApprovedJobs(mockJobsData);
        } finally {
            setIsLoading(false);
        }
    };
    fetchJobs();
  }, []);

  const filterAndMapJobs = (jobs: BackendStoredJob[], filters: SearchFilters): Job[] => {
    const filtered = jobs.filter(job => {
      const keywordMatch = filters.keywords ?
        job.jobTitle.toLowerCase().includes(filters.keywords.toLowerCase()) ||
        job.mainDescription.toLowerCase().includes(filters.keywords.toLowerCase())
        : true;
      const locationMatch = filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const jobTypeMatch = filters.jobType ? job.jobType === filters.jobType : true;
      const categoryMatch = filters.category ? job.jobCategory === filters.category : true;

      // This is a placeholder for actual salary range filtering logic
      let salaryMatch = true;
      if (job.salaryMin && (filters.salaryMin > 0)) {
         if (job.salaryMax) {
            salaryMatch = filters.salaryMin >= job.salaryMin && filters.salaryMin <= job.salaryMax;
         } else {
            salaryMatch = filters.salaryMin >= job.salaryMin;
         }
      }
      return keywordMatch && locationMatch && jobTypeMatch && categoryMatch && salaryMatch;
    });
    return filtered.map(mapBackendJobToJobCard);
  };


  useEffect(() => {
    if (isLoading) return; // Don't filter until initial load is done

    const keywords = searchParams.get('keywords') || '';
    const location = searchParams.get('location') || '';
    const jobType = searchParams.get('jobType') || '';
    const category = searchParams.get('category') || '';
    const salaryMin = parseInt(searchParams.get('salaryMin') || '0') || 0;
    const salaryMaxParam = searchParams.get('salaryMax');
    const salaryMax = salaryMaxParam && !isNaN(parseInt(salaryMaxParam)) ? parseInt(salaryMaxParam) : Infinity;

    const filtersFromUrl: SearchFilters = { keywords, location, jobType, category, salaryMin, salaryMax };
    
    setActiveFilters(filtersFromUrl);

    const filtered = filterAndMapJobs(allApprovedJobs, filtersFromUrl);
    setDisplayedJobs(filtered.slice(0, JOBS_PER_PAGE));
    setAllJobsShown(filtered.length <= JOBS_PER_PAGE);

  }, [searchParams, allApprovedJobs, isLoading]);


  const handleSearch = (filters: SearchFilters) => {
    const query = new URLSearchParams();
    if (filters.keywords) query.set('keywords', filters.keywords);
    if (filters.location) query.set('location', filters.location);
    if (filters.jobType) query.set('jobType', filters.jobType);
    if (filters.category) query.set('category', filters.category);
    if (filters.salaryMin > 0) query.set('salaryMin', filters.salaryMin.toString());
    if (filters.salaryMax < Infinity && filters.salaryMax > 0) query.set('salaryMax', filters.salaryMax.toString());
    
    router.push(`/jobs/search?${query.toString()}`, { scroll: false });
  };

  const loadMoreJobs = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => {
        const currentLength = displayedJobs.length;
        const filteredTotal = filterAndMapJobs(allApprovedJobs, activeFilters); 
        const moreJobs = filteredTotal.slice(currentLength, currentLength + JOBS_PER_PAGE);
        setDisplayedJobs(prev => [...prev, ...moreJobs]);
        if (displayedJobs.length + moreJobs.length >= filteredTotal.length) {
            setAllJobsShown(true);
        }
        setIsLoadMoreLoading(false);
    }, 500);
  };
  
  const filterKey = JSON.stringify(activeFilters);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center font-headline">Find Your Next Tech Role</h1>
      <JobSearchFilters 
        key={filterKey}
        onSearch={handleSearch} 
        initialFilters={activeFilters} 
        isLoading={isLoading || isLoadMoreLoading} 
      />

      {isLoading && (
        <div className="text-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="mt-4 text-muted-foreground text-lg">Finding best tech jobs for you...</p>
        </div>
      )}

      {!isLoading && displayedJobs.length === 0 && (
         <div className="text-center py-12 bg-card border rounded-xl shadow-sm">
            <Image src="https://placehold.co/200x150.png" alt="No results illustration" width={200} height={150} className="mx-auto mb-6 rounded-lg" data-ai-hint="illustration empty search"/>
            <h3 className="text-2xl font-semibold mb-2 font-headline">No Jobs Found Matching Your Criteria</h3>
            <p className="text-muted-foreground max-w-md mx-auto">Try adjusting your search filters, broadening your keywords, or check back later as new jobs are added daily.</p>
            <Button variant="link" onClick={() => handleSearch({keywords: '', location: '', jobType: '', category: '', salaryMin: 0, salaryMax: Infinity } as SearchFilters)} className="mt-4">
                Reset all filters
            </Button>
        </div>
      )}

      {!isLoading && displayedJobs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {!isLoading && displayedJobs.length > 0 && !allJobsShown && (
        <div className="mt-12 text-center">
          <Button onClick={loadMoreJobs} disabled={isLoadMoreLoading} size="lg" className="text-base py-3 px-6">
            {isLoadMoreLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
            Load More Jobs
          </Button>
        </div>
      )}
       {!isLoading && allJobsShown && displayedJobs.length > 0 && (
        <p className="mt-12 text-center text-muted-foreground">You've reached the end of the job listings for this search.</p>
      )}
    </div>
  );
}


export default function JobSearchPage() {
  return (
    <Suspense fallback={<JobSearchPageLoadingSkeleton />}>
      <JobSearchPageContent />
    </Suspense>
  );
}

function JobSearchPageLoadingSkeleton() {
  return (
     <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center font-headline">Find Your Next Tech Role</h1>
      {/* Simplified filter skeleton */}
      <div className="mb-8 p-6 border rounded-xl shadow-lg bg-card">
        <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-muted rounded"></div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
          <div className="h-10 bg-muted rounded"></div>
        </div>
      </div>
      <div className="text-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Loading jobs...</p>
      </div>
    </div>
  )
}
    
