
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { adminAuth } from '@/firebase/firebase-admin';
import { ApplicationApiInputSchema } from '@/lib/schemas/application';
import { createApplication, hasUserApplied } from '@/services/applicationDbService';
import { findJobById } from '@/services/jobDbService';

// POST /api/applications - Create a new job application
export async function POST(request: Request) {
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
  const rawData = await request.json();

  // LOGGED-IN USER FLOW
  if (idToken) {
    try {
      const decodedToken = await adminAuth.verifyIdToken(idToken);
      const uid = decodedToken.uid;
      const userRole = decodedToken.role;

      if (userRole !== 'jobSeeker') {
        return NextResponse.json({ error: 'Only job seekers can apply for jobs.' }, { status: 403 });
      }

      const validatedData = ApplicationApiInputSchema.parse({ ...rawData, applicantId: uid });

      const job = await findJobById(validatedData.jobId);
      if (!job || job.status !== 'approved') {
        return NextResponse.json({ error: 'Job not found or is no longer available.' }, { status: 404 });
      }

      const alreadyApplied = await hasUserApplied(uid, validatedData.jobId);
      if (alreadyApplied) {
        return NextResponse.json({ error: 'You have already applied for this job.' }, { status: 409 });
      }

      const newApplication = await createApplication(validatedData);
      return NextResponse.json(newApplication, { status: 201 });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json({ error: 'Invalid application data', details: error.errors }, { status: 400 });
      }
      console.error('Error creating logged-in application:', error);
      const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
      return NextResponse.json({ error: 'Internal Server Error creating application', details: errorMessage }, { status: 500 });
    }
  } 
  // ANONYMOUS USER FLOW
  else {
    try {
      const validatedData = ApplicationApiInputSchema.parse(rawData);
      if (!validatedData.applicantEmail) {
        return NextResponse.json({ error: 'Email is required for anonymous applications.' }, { status: 400 });
      }

      const job = await findJobById(validatedData.jobId);
      if (!job || job.status !== 'approved') {
        return NextResponse.json({ error: 'Job not found or is no longer available.' }, { status: 404 });
      }

      const newApplication = await createApplication(validatedData);
      return NextResponse.json(newApplication, { status: 201 });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json({ error: 'Invalid application data for anonymous user.', details: error.errors }, { status: 400 });
      }
      console.error('Error creating anonymous application:', error);
      const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
      return NextResponse.json({ error: 'Internal Server Error creating anonymous application', details: errorMessage }, { status: 500 });
    }
  }
}
