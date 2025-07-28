
'use server';

/**
 * @fileOverview A service for fetching data for the admin dashboard.
 * This service uses the Firebase Admin SDK and is intended for server-side use.
 */

import { adminAuth } from '@/firebase/firebase-admin';
import { getAllJobs } from '@/services/jobDbService';
import type { UserRole } from '@/contexts/AuthContext';

export interface SimpleUser {
  uid: string;
  email: string | undefined;
  role: UserRole;
  creationTime: string;
  emailVerified: boolean;
}

const isAuthInitialized = !!adminAuth.listUsers;

/**
 * Fetches statistics for the admin dashboard.
 * @returns A promise that resolves to an object with dashboard stats.
 */
export async function getDashboardStats() {
  if (!isAuthInitialized) {
    console.warn("adminDashboardService: Firebase Admin Auth not initialized. Returning zero for stats.");
    return { totalUsers: 0, totalCompanies: 0, pendingJobs: 0 };
  }

  try {
    const [listUsersResult, allJobs] = await Promise.all([
      adminAuth.listUsers(),
      getAllJobs()
    ]);
    
    const totalUsers = listUsersResult.users.length;
    const totalCompanies = listUsersResult.users.filter(u => u.customClaims?.role === 'employer').length;
    const pendingJobs = allJobs.filter(job => job.status === 'pending').length;

    return { totalUsers, totalCompanies, pendingJobs };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    // Return a default/error state
    return { totalUsers: 0, totalCompanies: 0, pendingJobs: 0 };
  }
}

/**
 * Retrieves a simplified list of all registered users.
 * @returns A promise that resolves to an array of SimpleUser objects.
 */
export async function getAllRegisteredUsers(): Promise<SimpleUser[]> {
  if (!isAuthInitialized) {
    console.warn("adminDashboardService: Firebase Admin Auth not initialized. Returning empty user list.");
    return [];
  }

  try {
    const listUsersResult = await adminAuth.listUsers();
    const users: SimpleUser[] = listUsersResult.users.map(userRecord => ({
      uid: userRecord.uid,
      email: userRecord.email,
      role: (userRecord.customClaims?.role as UserRole) || null,
      creationTime: userRecord.metadata.creationTime,
      emailVerified: userRecord.emailVerified,
    }));

     // Sort users by creation date, newest first
    users.sort((a, b) => new Date(b.creationTime).getTime() - new Date(a.creationTime).getTime());

    return users;
  } catch (error) {
    console.error("Error fetching all registered users:", error);
    throw new Error("Could not retrieve user list from Firebase.");
  }
}
