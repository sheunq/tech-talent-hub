
import { NextResponse } from 'next/server';
import { getAllJobs, createJob, updateJobStatus, findJobById } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { JobPostingApiInputSchema } from '@/lib/schemas/job';
import { z } from 'zod';

export async function GET(request: Request) {
  console.log("====== /api/jobs GET handler invoked - Check server console ======");
  try {
    const { searchParams } = new URL(request.url);
    const allJobs = await getAllJobs();
    
    // Start with only approved jobs
    let filteredJobs = allJobs.filter(job => job.status === 'approved');

    const keywords = searchParams.get('keywords')?.toLowerCase();
    const location = searchParams.get('location')?.toLowerCase();
    const jobType = searchParams.get('jobType');
    const category = searchParams.get('category');
    const salaryMinStr = searchParams.get('salaryMin');
    const salaryMin = salaryMinStr ? parseInt(salaryMinStr, 10) : 0;

    if (keywords) {
      filteredJobs = filteredJobs.filter(job =>
        job.jobTitle.toLowerCase().includes(keywords) ||
        job.mainDescription.toLowerCase().includes(keywords) ||
        job.companyName.toLowerCase().includes(keywords)
      );
    }
    if (location) {
      filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location));
    }
    if (jobType) {
      filteredJobs = filteredJobs.filter(job => job.jobType === jobType);
    }
    if (category) {
      filteredJobs = filteredJobs.filter(job => job.jobCategory === category);
    }
    if (salaryMin > 0) {
      filteredJobs = filteredJobs.filter(job => {
        // We only check against the minimum salary of the job posting.
        return job.salaryMin !== undefined && job.salaryMin >= salaryMin;
      });
    }

    return NextResponse.json(filteredJobs);
  } catch (error) {
     console.error('Error fetching jobs:', error);
     let errorMessage = 'Internal Server Error fetching jobs';
     if (error instanceof Error) {
         errorMessage = error.message;
     }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}


export async function POST(request: Request) {
  console.log("====== /api/jobs POST handler invoked - Check server console ======");
  try {
    const rawData = await request.json();
    const validatedData = JobPostingApiInputSchema.parse(rawData);

    const newJob = await createJob(validatedData);
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid job data", details: error.errors }, { status: 400 });
    }
    console.error('Error creating job:', error);
    let errorMessage = 'Internal Server Error creating job';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  console.log("====== /api/jobs PUT handler invoked - Check server console ======");
  try {
    const { id, status } = await request.json();

    if (!id || typeof id !== 'string') {
        return NextResponse.json({ error: 'Job ID is required and must be a string.' }, { status: 400 });
    }
    if (!status || !['pending', 'approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status. Must be one of: pending, approved, rejected.' }, { status: 400 });
    }

    const existingJob = await findJobById(id);
    if (!existingJob) {
      return NextResponse.json({ error: `Job with ID ${id} not found.` }, { status: 404 });
    }

    const updatedJob = await updateJobStatus(id, status);
    if (!updatedJob) {
      return NextResponse.json({ error: `Failed to update job with ID ${id}.` }, { status: 500 });
    }
    
    return NextResponse.json(updatedJob);

  } catch (error) {
    console.error('Error updating job status:', error);
    let errorMessage = 'Internal Server Error updating job status';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
