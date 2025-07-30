
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { adminDb } from '@/firebase/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';

const isDbInitialized = !!adminDb.collection;

const subscribeSchema = z.object({
  email: z.string().email({ message: "A valid email address is required." }),
});

export async function POST(request: Request) {
  if (!isDbInitialized) {
    console.error("subscribe API: Firestore Admin SDK not initialized.");
    return NextResponse.json({ error: 'The server is not configured correctly.' }, { status: 500 });
  }

  try {
    const rawData = await request.json();
    const validatedData = subscribeSchema.parse(rawData);

    const subscribersCollection = adminDb.collection('newsletter_subscribers');
    
    // Check if email already exists
    const existingSubQuery = await subscribersCollection.where('email', '==', validatedData.email).limit(1).get();
    if (!existingSubQuery.empty) {
      return NextResponse.json({ message: 'This email is already subscribed.' }, { status: 200 });
    }

    // Add new subscriber
    await subscribersCollection.add({
      email: validatedData.email,
      subscribedAt: Timestamp.now(),
    });

    return NextResponse.json({ success: true, message: 'Successfully subscribed!' }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid email address provided.", details: error.errors }, { status: 400 });
    }
    console.error('Error creating subscription:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
