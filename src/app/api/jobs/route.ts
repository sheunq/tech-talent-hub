
console.log("Attempting to load /api/jobs/route.ts module - Check server console");

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { JobPostingApiInputSchema } from '@/lib/schemas/job';
import { getAllJobs, createJob, updateJobStatus, findJobById } from '@/services/jobDbService';

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

export async function GET() {
  console.log("====== /api/jobs GET handler invoked - Check server console ======");
  try {
    const jobs = await getAllJobs();
    return NextResponse.json(jobs);
  } catch (error) {
     console.error('Error fetching jobs:', error);
     let errorMessage = 'Internal Server Error fetching jobs';
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
