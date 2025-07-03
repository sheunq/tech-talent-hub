
'use server';

/**
 * @fileOverview A database service for managing job postings using Firebase Firestore.
 */

import { db } from '@/firebase/firebase';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import type { BackendStoredJob, JobPostingApiInput } from '@/lib/schemas/job';

const jobsCollection = collection(db, 'jobs');

/**
 * Retrieves all job postings, sorted by submission date (newest first).
 * @returns A promise that resolves to an array of all job postings.
 */
export async function getAllJobs(): Promise<BackendStoredJob[]> {
  const q = query(jobsCollection, orderBy('submittedDate', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    
    const applicationDeadline = data.applicationDeadline instanceof Timestamp
      ? data.applicationDeadline.toDate()
      : undefined;

    const submittedDate = data.submittedDate instanceof Timestamp
      ? data.submittedDate.toDate().toISOString()
      : data.submittedDate;

    return {
      ...data,
      id: doc.id,
      submittedDate,
      applicationDeadline,
    } as BackendStoredJob;
  });
}

/**
 * Creates a new job posting.
 * @param jobData - The data for the new job, excluding id, submittedDate, and status.
 * @returns A promise that resolves to the newly created job posting.
 */
export async function createJob(jobData: JobPostingApiInput): Promise<BackendStoredJob> {
  const submittedDate = new Date().toISOString();
  const status = 'pending' as const;

  const docDataForFirestore = {
    ...jobData,
    submittedDate,
    status,
    // Convert Date object from form to Firestore Timestamp for storage.
    // Firestore's `addDoc` will ignore any fields that are `undefined`.
    applicationDeadline: jobData.applicationDeadline ? Timestamp.fromDate(jobData.applicationDeadline) : undefined,
  };

  const docRef = await addDoc(jobsCollection, docDataForFirestore);

  // Construct the return object directly to avoid a second database read.
  const newJob: BackendStoredJob = {
    ...jobData,
    id: docRef.id,
    submittedDate,
    status,
  };

  return newJob;
}

/**
 * Finds a job posting by its ID.
 * @param id - The ID of the job to find.
 * @returns A promise that resolves to the job posting if found, otherwise null.
 */
export async function findJobById(id: string): Promise<BackendStoredJob | null> {
  const docRef = doc(db, 'jobs', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }
  const data = docSnap.data();
  
  const applicationDeadline = data.applicationDeadline instanceof Timestamp
    ? data.applicationDeadline.toDate()
    : undefined;

  const submittedDate = data.submittedDate instanceof Timestamp
    ? data.submittedDate.toDate().toISOString()
    : data.submittedDate;

  return {
    ...data,
    id: docSnap.id,
    submittedDate,
    applicationDeadline,
  } as BackendStoredJob;
}

/**
 * Updates the status of an existing job posting.
 * @param id - The ID of the job to update.
 * @param status - The new status for the job.
 * @returns A promise that resolves to the updated job posting if found and updated, otherwise null.
 */
export async function updateJobStatus(id: string, status: 'pending' | 'approved' | 'rejected'): Promise<BackendStoredJob | null> {
  const docRef = doc(db, 'jobs', id);
  await updateDoc(docRef, { status });
  // Re-fetch the document to return the full, updated object
  const updatedJob = await findJobById(id);
  return updatedJob;
}
