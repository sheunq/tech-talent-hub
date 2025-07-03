
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
      console.log('Firebase Admin SDK initialized successfully.');
    } catch (error: any) {
      // During a build (e.g., `npm run build`), if the local .env key is malformed,
      // this will catch the error and prevent the build from crashing.
      // It will log a warning instead. In a real deployment environment,
      // the environment variables should be set correctly.
      console.warn(
        'Firebase Admin SDK initialization failed. This is expected during local build if credentials are not set or are malformed. The build will continue with dummy services.'
      );
      if (error.message.includes('Invalid PEM formatted message')) {
        console.warn('Hint: The FIREBASE_PRIVATE_KEY in your .env file might be malformed. Ensure it is copied correctly, often by wrapping it in double quotes.');
      }
    }
  } else {
    // If running in a development or build environment without credentials, log a warning instead of crashing.
    console.warn('Firebase Admin SDK credentials not set. Skipping Admin SDK initialization. This is normal for local development.');
  }
}

// Conditionally export the admin services. If not initialized, this will
// export mocked objects to prevent build-time errors. Runtime errors will still
// occur if these are used without proper initialization, which is the correct behavior.
const isInitialized = admin.apps.length > 0;

const DUMMY_AUTH = {
    verifyIdToken: async () => Promise.reject(new Error("Admin SDK not initialized. This is a dummy service.")),
    setCustomUserClaims: async () => Promise.reject(new Error("Admin SDK not initialized. This is a dummy service.")),
    getUser: async () => Promise.reject(new Error("Admin SDK not initialized. This is a dummy service.")),
} as unknown as admin.auth.Auth;

// Firestore admin SDK is not used in this project, but providing a dummy for safety.
const DUMMY_DB = {} as admin.firestore.Firestore;

export const adminAuth = isInitialized ? admin.auth() : DUMMY_AUTH;
export const adminDb = isInitialized ? admin.firestore() : DUMMY_DB;
