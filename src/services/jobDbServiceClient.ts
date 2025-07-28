
'use client';

/**
 * @fileOverview A client-side database service for interacting with job data in Firebase Firestore.
 * This service uses the Firebase client SDK and is intended for use in browser environments.
 */

import { db } from '@/firebase/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import type { BackendStoredJob } from '@/lib/schemas/job';

const jobsCollection = collection(db, 'jobs');

/**
 * Retrieves all approved job postings directly from Firestore using the client SDK.
 * @returns A promise that resolves to an array of approved job postings.
 */
export async function getJobs(): Promise<BackendStoredJob[]> {
  try {
    const q = query(
      jobsCollection,
      where('status', '==', 'approved'),
      orderBy('submittedDate', 'desc')
    );

    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
        console.log("No approved jobs found in Firestore.");
        return [];
    }

    const jobs = querySnapshot.docs.map(doc => {
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

    return jobs;
    
  } catch (error) {
    let errorMessage = "Could not retrieve jobs from the server. This can sometimes be caused by browser extensions (like MetaMask) interfering with network requests. Please try disabling them and reloading the page.";
    if (error instanceof Error) {
        // You might want to log the original error for debugging purposes
        console.error("Error fetching jobs from Firestore client:", error);
    }
    // We throw the user-friendly error message to be caught by the component
    throw new Error(errorMessage);
  }
}

    