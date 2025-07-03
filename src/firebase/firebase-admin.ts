
import admin from 'firebase-admin';

// This logic is designed to prevent the app from crashing during the build process
// if environment variables haven't been set up locally. It assumes that in a
// production environment, these variables will be provided.

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const projectId = process.env.FIREBASE_PROJECT_ID;

  // Only attempt to initialize if all credentials are provided
  if (privateKey && clientEmail && projectId) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: projectId,
          clientEmail: clientEmail,
          // Replace escaped newlines for environment variables
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
      console.log('Firebase Admin SDK initialized.');
    } catch (error: any) {
      console.error('Firebase Admin SDK initialization error:', error.message);
      if (error.message.includes('Invalid PEM formatted message')) {
        console.error('Hint: The FIREBASE_PRIVATE_KEY in your .env file might be malformed. Ensure it is copied correctly, often by wrapping it in double quotes.');
      }
    }
  } else {
    // If running in a development or build environment without credentials, log a warning instead of crashing.
    console.warn('Firebase Admin SDK environment variables are not set. Skipping Admin SDK initialization. This is normal for local development if you have not set up your .env file.');
  }
}

// Conditionally export the admin services. If not initialized, this will
// export mocked objects to prevent build-time errors. Runtime errors will still
// occur if these are used without proper initialization, which is the correct behavior.
const isInitialized = admin.apps.length > 0;

const stubAuthMethod = () =>
  async () => Promise.reject(new Error("Admin SDK not initialized for build, this is normal."));

const DUMMY_AUTH = {
    verifyIdToken: stubAuthMethod(),
    setCustomUserClaims: stubAuthMethod(),
    getUser: stubAuthMethod(),
} as unknown as admin.auth.Auth;

// Firestore admin SDK is not used in this project, but providing a dummy for safety.
const DUMMY_DB = {
  collection: () => {
    throw new Error("Admin Firestore SDK not initialized for build, this is normal.");
  },
  doc: () => {
    throw new Error("Admin Firestore SDK not initialized for build, this is normal.");
  },
  // Add more methods as needed for your usage
} as unknown as admin.firestore.Firestore;

export const adminAuth = isInitialized ? admin.auth() : DUMMY_AUTH;
export const adminDb = isInitialized ? admin.firestore() : DUMMY_DB;
