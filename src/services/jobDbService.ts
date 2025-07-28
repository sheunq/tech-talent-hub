
'use server';

/**
 * @fileOverview A database service for managing job postings using Firebase Firestore.
 * This service uses the Firebase Admin SDK and is intended for server-side use.
 */

import { adminDb } from '@/firebase/firebase-admin';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import type { BackendStoredJob, JobPostingApiInput } from '@/lib/schemas/job';

// The adminDb object from firebase-admin.ts has a fallback if not initialized.
// We can check one of its properties to see if it's the real one or the dummy.
const isDbInitialized = !!adminDb.collection;
const jobsCollection = isDbInitialized ? adminDb.collection('jobs') : null;

/**
 * Retrieves all job postings. This function is designed to be resilient and not crash
 * during builds if the database or collection is not available.
 * @returns A promise that resolves to an array of all job postings.
 */
export async function getAllJobs(): Promise<BackendStoredJob[]> {
  // If the admin SDK wasn't initialized, return an empty array.
  if (!jobsCollection) {
    console.warn("jobDbService: Firestore Admin SDK not initialized. Returning empty array for getAllJobs.");
    return [];
  }

  try {
    // Fetch all documents from the collection without any specific ordering.
    // This is a simple read operation that is less likely to fail due to missing indexes.
    const querySnapshot = await jobsCollection.get();

    // If the collection is empty, querySnapshot.docs will be an empty array.
    const jobs = querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      const applicationDeadline = data.applicationDeadline instanceof Timestamp
        ? data.applicationDeadline.toDate()
        : undefined;

      const submittedDate = data.submittedDate instanceof Timestamp
        ? data.submittedDate.toDate().toISOString()
        : data.submittedDate ? String(data.submittedDate) : undefined;

      return {
        ...data,
        id: doc.id,
        submittedDate,
        applicationDeadline,
      } as BackendStoredJob;
    });

    // Sort the jobs in memory after fetching to avoid database index requirements during build.
    jobs.sort((a, b) => new Date(b.submittedDate || 0).getTime() - new Date(a.submittedDate || 0).getTime());

    return jobs;
    
  } catch (error) {
    // This block catches errors, including the '5 NOT_FOUND' error if the 'jobs'
    // collection does not exist. Using console.warn instead of console.error
    // prevents the build process from interpreting this as a fatal error.
    console.warn("Caught an error in getAllJobs. This is often expected if the collection doesn't exist yet. Returning an empty array to prevent a build crash.");
    return [];
  }
}

/**
 * Creates a new job posting.
 * @param jobData - The data for the new job, excluding id, submittedDate, and status.
 * @returns A promise that resolves to the newly created job posting.
 */
export async function createJob(jobData: JobPostingApiInput): Promise<BackendStoredJob> {
  if (!jobsCollection) {
    throw new Error("jobDbService: Firestore Admin SDK not initialized, cannot create job.");
  }
  const status = 'pending' as const;
  
  const { id: customId, ...jobDataWithoutId } = jobData;

  // Use a server-side timestamp for submittedDate
  const docDataForFirestore: any = {
    ...jobDataWithoutId,
    submittedDate: Timestamp.now(), // Store as Timestamp
    status,
  };
  
  if (jobData.applicationDeadline) {
    docDataForFirestore.applicationDeadline = Timestamp.fromDate(jobData.applicationDeadline);
  }

  // The admin SDK does not automatically ignore undefined fields, so we clean them up.
  Object.keys(docDataForFirestore).forEach(key => docDataForFirestore[key] === undefined && delete docDataForFirestore[key]);
  
  let docRef;
  if (customId) {
    docRef = jobsCollection.doc(customId);
    await docRef.set(docDataForFirestore);
  } else {
    docRef = await jobsCollection.add(docDataForFirestore);
  }
  
  // To return the full object, we need to fetch the newly created doc to get the timestamp
  const newDocSnap = await docRef.get();
  const newJobData = newDocSnap.data();

  if (!newJobData || !(newJobData.submittedDate instanceof Timestamp)) {
      throw new Error("Failed to create job with a valid submission date.");
  }

  const newJob: BackendStoredJob = {
    ...(jobData as Omit<JobPostingApiInput, 'applicationDeadline'> & { applicationDeadline?: Date }),
    id: docRef.id,
    submittedDate: newJobData.submittedDate.toDate().toISOString(),
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
  if (!jobsCollection) {
    console.warn(`jobDbService: Firestore Admin SDK not initialized, cannot find job by ID: ${id}.`);
    return null;
  }
  try {
    const docRef = jobsCollection.doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return null;
    }
    const data = docSnap.data()!;
    
    const applicationDeadline = data.applicationDeadline instanceof Timestamp
      ? data.applicationDeadline.toDate()
      : undefined;

    const submittedDate = data.submittedDate instanceof Timestamp
      ? data.submittedDate.toDate().toISOString()
      : data.submittedDate ? String(data.submittedDate) : undefined;

    return {
      ...data,
      id: docSnap.id,
      submittedDate,
      applicationDeadline,
    } as BackendStoredJob;
  } catch (error) {
    console.error(`Error finding job by ID ${id} in Firestore:`, error);
    return null;
  }
}

/**
 * Updates the status of an existing job posting.
 * @param id - The ID of the job to update.
 * @param status - The new status for the job.
 * @returns A promise that resolves to the updated job posting if found and updated, otherwise null.
 */
export async function updateJobStatus(id: string, status: 'pending' | 'approved' | 'rejected'): Promise<BackendStoredJob | null> {
  if (!jobsCollection) {
     throw new Error(`jobDbService: Firestore Admin SDK not initialized, cannot update job status for ID: ${id}.`);
  }
  const docRef = jobsCollection.doc(id);
  await docRef.update({ status });
  const updatedJob = await findJobById(id);
  return updatedJob;
}
