
'use server';

/**
 * @fileOverview Service for creating notification documents in Firestore.
 * This is a production-ready pattern where a backend service (like a Firebase Extension)
 * can listen to these collections to send actual emails or push notifications.
 */

import { db } from '@/firebase/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { adminAuth } from '@/firebase/firebase-admin';

interface JobDetails {
  id: string;
  jobTitle: string;
  companyName: string;
}

/**
 * Creates an email document in the 'outbound_emails' collection in Firestore.
 * This is a scalable way to handle sending emails. A separate service (like the "Trigger Email"
 * Firebase Extension) would listen to this collection and send the actual emails.
 *
 * @param recipientIdentifier - The user's ID (for registered users) or their email address (for anonymous users).
 * @param job - The job details that matched the alert.
 * @param alertKeywords - The keywords from the user's alert.
 * @param isAnonymous - Flag to indicate if the recipient is an anonymous user (email directly provided).
 */
export async function sendJobAlertEmail(
  recipientIdentifier: string,
  job: JobDetails,
  alertKeywords: string,
  isAnonymous: boolean = false
): Promise<void> {
  let targetEmail = recipientIdentifier;
  let logMessagePrefix = `Queueing email for anonymous user ${recipientIdentifier}`;

  if (!isAnonymous && recipientIdentifier) {
    try {
      // For registered users, we need to look up their email from their UID using the Admin SDK.
      const userRecord = await adminAuth.getUser(recipientIdentifier);
      if (userRecord.email) {
        targetEmail = userRecord.email;
        logMessagePrefix = `Queueing email for registered user ${recipientIdentifier} (email: ${targetEmail})`;
      } else {
        console.error(`Could not queue email: User ${recipientIdentifier} does not have an email address.`);
        return;
      }
    } catch (error) {
      console.error(`Error fetching user email for UID ${recipientIdentifier}:`, error);
      return; // Stop execution if we can't find the user's email
    }
  } else if (!isAnonymous && !recipientIdentifier) {
      console.error('sendJobAlertEmail called for a non-anonymous user without a recipientIdentifier.');
      return;
  }

  const emailHtmlBody = `
    <p>Hello,</p>
    <p>A new job matching your alert "<b>${alertKeywords}</b>" has been posted:</p>
    <ul>
      <li><b>Job Title:</b> ${job.jobTitle}</li>
      <li><b>Company:</b> ${job.companyName}</li>
    </ul>
    <p>You can view the full job details here: <a href="https://tektunnel-app.web.app/jobs/${job.id}">View Job</a></p>
    <br/>
    <p>Thanks,</p>
    <p>The TekTunnel Team</p>
  `;

  try {
    // This collection can be monitored by the "Trigger Email" Firebase Extension
    const emailsCollection = collection(db, 'outbound_emails');
    await addDoc(emailsCollection, {
      to: [targetEmail],
      message: {
        subject: `TekTunnel Job Alert: ${job.jobTitle} at ${job.companyName}`,
        html: emailHtmlBody,
      },
      createdAt: Timestamp.now(),
    });
    console.log(`${logMessagePrefix} - Success.`);
  } catch (error) {
    console.error(`Failed to write email to Firestore queue for ${targetEmail}:`, error);
  }
}

/**
 * Creates a dashboard notification document in the database for a specific user.
 * The client application can then listen for changes to display real-time notifications.
 *
 * @param userId - The ID of the user to notify.
 * @param job - The job details that matched the alert.
 * @param alertKeywords - The keywords from the user's alert.
 */
export async function createDashboardNotification(
  userId: string,
  job: JobDetails,
  alertKeywords: string
): Promise<void> {
  if (!userId) {
    console.log("Skipping dashboard notification: No userId provided (likely an anonymous user).");
    return;
  }

  const notificationData = {
    userId,
    message: `New job match for "${alertKeywords}": ${job.jobTitle} at ${job.companyName}.`,
    link: `/jobs/${job.id}`,
    createdAt: Timestamp.now(),
    isRead: false,
  };

  try {
    // Writing to a single collection, to be queried by the client for the logged-in user.
    const notificationsCollection = collection(db, 'dashboard_notifications');
    await addDoc(notificationsCollection, notificationData);
    console.log(`Successfully created dashboard notification in DB for user ${userId}.`);
  } catch (error) {
    console.error(`Failed to create dashboard notification for user ${userId}:`, error);
  }
}
