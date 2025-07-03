
'use server';

/**
 * @fileOverview A database service for managing job applications using Firebase Firestore.
 */

import { db } from '@/firebase/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
  orderBy,
} from 'firebase/firestore';
import type { BackendStoredApplication, ApplicationApiInput } from '@/lib/schemas/application';

const applicationsCollection = collection(db, 'applications');

/**
 * Creates a new job application.
 * @param applicationData - The data for the new application.
 * @returns A promise that resolves to the newly created application document.
 */
export async function createApplication(applicationData: ApplicationApiInput): Promise<BackendStoredApplication> {
  const applicationDate = new Date().toISOString();
  const status = 'submitted' as const;

  const docData = {
    ...applicationData,
    applicationDate,
    status,
    // Firestore Timestamp for server-side date
    createdAt: Timestamp.now(),
  };

  const docRef = await addDoc(applicationsCollection, docData);

  const newApplication: BackendStoredApplication = {
    ...applicationData,
    id: docRef.id,
    applicationDate,
    status,
  };

  return newApplication;
}

/**
 * Checks if a user has already applied for a specific job.
 * @param applicantId - The UID of the applicant.
 * @param jobId - The ID of the job.
 * @returns A promise that resolves to true if an application exists, false otherwise.
 */
export async function hasUserApplied(applicantId: string, jobId: string): Promise<boolean> {
  const q = query(
    applicationsCollection,
    where('applicantId', '==', applicantId),
    where('jobId', '==', jobId)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

/**
 * Retrieves all applications for a given user.
 * @param applicantId - The UID of the applicant.
 * @returns A promise that resolves to an array of the user's applications.
 */
export async function getApplicationsByApplicantId(applicantId: string): Promise<BackendStoredApplication[]> {
    const q = query(applicationsCollection, where('applicantId', '==', applicantId), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            ...data,
            id: doc.id,
        } as BackendStoredApplication;
    });
}
