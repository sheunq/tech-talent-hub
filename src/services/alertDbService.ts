
'use server';

/**
 * @fileOverview A database service for managing job alerts using Firebase Firestore.
 */

import { db } from '@/firebase/firebase';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  query,
  // orderBy, // Removing orderBy to prevent index errors
  Timestamp,
} from 'firebase/firestore';
import type { BackendStoredAlert, AlertApiInput } from '@/lib/schemas/alert';

const alertsCollection = collection(db, 'alerts');

/**
 * Retrieves all job alerts, sorted by creation date (newest first).
 * @returns A promise that resolves to an array of all job alerts.
 */
export async function getAllAlerts(): Promise<BackendStoredAlert[]> {
  try {
    const q = query(alertsCollection); // Query without ordering
    const querySnapshot = await getDocs(q);
    const alerts = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const createdAt = data.createdAt instanceof Timestamp
        ? data.createdAt.toDate().toISOString()
        : data.createdAt;
      return {
        ...data,
        id: doc.id,
        createdAt,
      } as BackendStoredAlert;
    });

    // Sort in memory to avoid index requirements
    alerts.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
    
    return alerts;

  } catch (error) {
     console.error("Error fetching alerts. This may be expected if the collection or index doesn't exist yet. Returning empty array.", error);
     return [];
  }
}

/**
 * Creates a new job alert.
 * @param alertData - The data for the new alert.
 * @returns A promise that resolves to the newly created job alert.
 */
export async function createAlert(alertData: AlertApiInput): Promise<BackendStoredAlert> {
  const docData = {
    ...alertData,
    createdAt: Timestamp.now(),
  };

  Object.keys(docData).forEach(key => (docData as any)[key] === undefined && delete (docData as any)[key]);

  const docRef = await addDoc(alertsCollection, docData);
  const newDocSnap = await getDoc(docRef);
  const newAlertData = newDocSnap.data();

  if (!newAlertData) {
    throw new Error('Failed to retrieve newly created alert.');
  }
  
  const createdAtTimestamp = newAlertData.createdAt as Timestamp | undefined;
  if (!createdAtTimestamp) {
      throw new Error('Newly created alert is missing createdAt timestamp.');
  }

  return {
    ...newAlertData,
    id: docRef.id,
    createdAt: createdAtTimestamp.toDate().toISOString(),
  } as BackendStoredAlert;
}

/**
 * Deletes a job alert by its ID.
 * @param id - The ID of the alert to delete.
 * @returns A promise that resolves to true if deletion was successful, false otherwise.
 */
export async function deleteAlertById(id: string): Promise<boolean> {
  const docRef = doc(db, 'alerts', id);
  await deleteDoc(docRef);
  return true; // Assume success if firebase does not throw an error
}
