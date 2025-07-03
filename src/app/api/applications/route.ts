
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { adminAuth } from '@/firebase/firebase-admin';
import { ApplicationApiInputSchema } from '@/lib/schemas/application';
import { createApplication, hasUserApplied } from '@/services/applicationDbService';
import { findJobById } from '@/services/jobDbService';

// POST /api/applications - Create a new job application
export async function POST(request: Request) {
  try {
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    if (!idToken) {
      return NextResponse.json({ error: 'Authorization token not found.' }, { status: 401 });
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const userRole = decodedToken.role;

    if (userRole !== 'jobSeeker') {
        return NextResponse.json({ error: 'Only job seekers can apply for jobs.' }, { status: 403 });
    }

    const rawData = await request.json();
    const validatedData = ApplicationApiInputSchema.parse({ ...rawData, applicantId: uid });
    
    // Check if job exists and is approved
    const job = await findJobById(validatedData.jobId);
    if (!job || job.status !== 'approved') {
        return NextResponse.json({ error: 'Job not found or is no longer available.' }, { status: 404 });
    }

    // Check if user has already applied
    const alreadyApplied = await hasUserApplied(uid, validatedData.jobId);
    if (alreadyApplied) {
        return NextResponse.json({ error: 'You have already applied for this job.' }, { status: 409 }); // 409 Conflict
    }

    const newApplication = await createApplication(validatedData);
    return NextResponse.json(newApplication, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid application data', details: error.errors }, { status: 400 });
    }
    console.error('Error creating application:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: 'Internal Server Error creating application', details: errorMessage }, { status: 500 });
  }
}
