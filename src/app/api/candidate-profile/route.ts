
import { NextResponse } from 'next/server';
import { adminAuth } from '@/firebase/firebase-admin';
// Update the import path below if the file is not found at the alias location
// Update the path and extension below if the file is named differently or located elsewhere
// Update the path below to the correct location of candidateDbService if necessary
import { getCandidateProfile, saveCandidateProfile } from '@/services/candidateDbService';
import { CandidateProfileSchema, type CandidateProfile } from '@/lib/schemas/candidate';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    if (!idToken) {
      return NextResponse.json({ error: 'Authorization token not found.' }, { status: 401 });
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // The body is the raw output from the AI parser, plus the file name
    const requestBody = await request.json();
    const { fileName, ...parsedData } = requestBody;

    const now = new Date().toISOString();
    const existingProfile = await getCandidateProfile(uid);

    // Create the full profile object to be saved.
    // This will overwrite previous resume-derived data.
    const finalProfile: Omit<CandidateProfile, 'metadata'> & { metadata: Partial<CandidateProfile['metadata']> } = {
      ...parsedData, // Data from the AI
      candidate_id: uid, // Set the correct ID
      metadata: {
        profile_created_at: existingProfile?.metadata?.profile_created_at || now,
        last_updated_at: now,
        source: 'Resume Upload',
        parsed_resume_filename: fileName,
      },
    };

    // Validate the constructed object before saving
    const validatedData = CandidateProfileSchema.parse(finalProfile);

    await saveCandidateProfile(uid, validatedData);

    return NextResponse.json({ success: true, message: 'Profile saved successfully.', candidateId: uid });
  } catch (error: any) {
    console.error('Error saving candidate profile:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid profile data', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
