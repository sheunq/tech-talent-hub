
import type { Metadata } from 'next';
import { JobDetailPageContent } from '@/components/jobs/JobDetailPageContent';
import { findJobById } from '@/services/jobDbService';

// This function generates dynamic metadata for each job page
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const jobId = params.id;
  const job = await findJobById(jobId);

  if (!job) {
    return {
      title: 'Job Not Found | TekTunnel',
      description: 'The job you are looking for could not be found.',
    };
  }

  const description = `Apply for the ${job.jobTitle} position at ${job.companyName} in ${job.location}. ${job.mainDescription.substring(0, 120)}...`;

  return {
    title: `${job.jobTitle} at ${job.companyName} | TekTunnel`,
    description: description,
    openGraph: {
      title: `${job.jobTitle} at ${job.companyName}`,
      description: description,
    },
    alternates: {
        canonical: `/jobs/${job.id}`,
    },
  };
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <JobDetailPageContent
      jobId={params.id}
    />
  );
}
