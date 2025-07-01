
'use server';

/**
 * @fileOverview A database service for managing candidate profiles using Firebase Firestore.
 */

import { db } from '@/firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import type { CandidateProfile } from '@/lib/schemas/candidate';

const candidatesCollectionRef = 'candidates';

/**
 * Saves or updates a candidate's profile in Firestore.
 * The document ID will be the user's authentication UID.
 * @param uid - The user's authentication UID.
 * @param profileData - The full candidate profile data to save.
 * @returns A promise that resolves when the profile is saved.
 */
export async function saveCandidateProfile(uid: string, profileData: CandidateProfile): Promise<void> {
  const profileDocRef = doc(db, candidatesCollectionRef, uid);
  // Using setDoc will create the document or overwrite it with the new data.
  await setDoc(profileDocRef, profileData);
}

/**
 * Retrieves a candidate's profile from Firestore.
 * @param uid - The user's authentication UID.
 * @returns A promise that resolves to the candidate profile, or null if not found.
 */
export async function getCandidateProfile(uid: string): Promise<CandidateProfile | null> {
    const profileDocRef = doc(db, candidatesCollectionRef, uid);
    const docSnap = await getDoc(profileDocRef);
    if (docSnap.exists()) {
        return docSnap.data() as CandidateProfile;
    }
    return null;
}
