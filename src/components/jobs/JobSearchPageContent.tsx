
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { JobSearchFilters, type SearchFilters } from '@/components/jobs/JobSearchFilters';
import { JobCard, type Job } from '@/components/jobs/JobCard';
import { Button } from '@/components/ui/button';
import { Loader2, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { getJobs } from '@/services/jobDbServiceClient'; 

const JOBS_PER_PAGE = 6;

const mapBackendJobToJobCard = (backendJob: BackendStoredJob): Job => {
  let salaryRange: string | undefined = undefined;
  if (backendJob.salaryMin && backendJob.salaryMax) {
    salaryRange = `$${Math.round(backendJob.salaryMin / 1000)}k - $${Math.round(backendJob.salaryMax / 1000)}k`;
  } else if (backendJob.salaryMin) {
    salaryRange = `From $${Math.round(backendJob.salaryMin / 1000)}k`;
  }
  
  const descriptionExcerpt = backendJob.mainDescription 
    ? backendJob.mainDescription.substring(0, 150) + '...'
    : 'No description available.';

  return {
    id: backendJob.id,
    title: backendJob.jobTitle,
    companyName: backendJob.companyName,
    location: backendJob.location,
    jobType: backendJob.jobType,
    category: backendJob.jobCategory,
    descriptionExcerpt: descriptionExcerpt,
    postedDate: backendJob.submittedDate,
    salaryRange,
    companyLogo: backendJob.companyLogo || '/images/vision.jpg',
    imageHint: 'company logo generic',
    tags: [],
    applyUrl: backendJob.applyUrl,
  };
};

export function JobSearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  
  const activeFilters = useMemo(() => {
    const keywords = searchParams.get('keywords') || '';
    const location = searchParams.get('location') || '';
    const jobType = searchParams.get('jobType') || '';
    const category = searchParams.get('category') || '';
    const salaryMin = parseInt(searchParams.get('salaryMin') || '0', 10);
    return { keywords, location, jobType, category, salaryMin };
  }, [searchParams]);

  // Fetch all jobs on initial component mount using the client SDK
  useEffect(() => {
    async function fetchAllJobs() {
      setIsLoading(true);
      setError(null);
      try {
        const backendJobs = await getJobs();
        setAllJobs(backendJobs.map(mapBackendJobToJobCard));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while fetching jobs.';
        setError(errorMessage);
        console.error("Failed to fetch jobs:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    const { keywords, location, jobType, category, salaryMin } = activeFilters;
    return allJobs.filter(job => {
      const keywordMatch = keywords ? 
        job.title.toLowerCase().includes(keywords.toLowerCase()) || 
        job.companyName.toLowerCase().includes(keywords.toLowerCase())
        : true;
      const locationMatch = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
      const jobTypeMatch = jobType ? job.jobType === jobType : true;
      const categoryMatch = category ? job.category === category : true;
      
      let salaryMatch = true;
      if (salaryMin > 0 && job.salaryRange) {
        // This is a simplified logic. A more robust solution would handle various salary formats.
        const salaryNumbers = job.salaryRange.match(/\d+/g);
        if (salaryNumbers && salaryNumbers.length > 0) {
            const minJobSalary = parseInt(salaryNumbers[0], 10) * 1000;
            salaryMatch = minJobSalary >= salaryMin;
        } else {
            salaryMatch = false; // Can't determine salary, so exclude
        }
      }

      return keywordMatch && locationMatch && jobTypeMatch && categoryMatch && salaryMatch;
    });
  }, [allJobs, activeFilters]);

  useEffect(() => {
    setDisplayedJobs(filteredJobs.slice(0, JOBS_PER_PAGE));
  }, [filteredJobs]);

  const allJobsShown = displayedJobs.length >= filteredJobs.length;

  const handleSearch = (filters: SearchFilters) => {
    const query = new URLSearchParams();
    if (filters.keywords) query.set('keywords', filters.keywords);
    if (filters.location) query.set('location', filters.location);
    if (filters.jobType) query.set('jobType', filters.jobType);
    if (filters.category) query.set('category', filters.category);
    if (filters.salaryMin > 0) query.set('salaryMin', filters.salaryMin.toString());
    
    router.push(`/jobs/search?${query.toString()}`, { scroll: false });
  };

  const loadMoreJobs = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => { 
        const currentLength = displayedJobs.length;
        const moreJobs = filteredJobs.slice(currentLength, currentLength + JOBS_PER_PAGE);
        setDisplayedJobs(prev => [...prev, ...moreJobs]);
        setIsLoadMoreLoading(false);
    }, 500);
  };
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center font-headline">Find Your Next Tech Role</h1>
      <JobSearchFilters 
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

      {error && !isLoading && (
        <div className="text-center py-12 bg-destructive/10 border border-destructive rounded-lg p-4">
          <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
          <p className="text-lg text-destructive font-semibold">Failed to Load Jobs</p>
          <p className="text-sm text-destructive/80 max-w-md mx-auto">{error}</p>
        </div>
      )}

      {!isLoading && !error && displayedJobs.length === 0 && (
         <div className="text-center py-12 bg-card border rounded-xl shadow-sm">
            <Image src="/images/vision.jpg" alt="No results illustration" width={200} height={150} className="mx-auto mb-6 rounded-lg" data-ai-hint="illustration empty search"/>
            <h3 className="text-2xl font-semibold mb-2 font-headline">No Jobs Found Matching Your Criteria</h3>
            <p className="text-muted-foreground max-w-md mx-auto">Try adjusting your search filters, broadening your keywords, or check back later as new jobs are added daily.</p>
            <Button variant="link" onClick={() => handleSearch({keywords: '', location: '', jobType: '', category: '', salaryMin: 0, salaryMax: Infinity })} className="mt-4">
                Reset all filters
            </Button>
        </div>
      )}

      {!isLoading && !error && displayedJobs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {!isLoading && !allJobsShown && displayedJobs.length > 0 && (
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

    