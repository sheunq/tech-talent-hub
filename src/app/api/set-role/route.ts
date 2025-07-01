
import { NextResponse } from 'next/server';
import { adminAuth } from '@/firebase/firebase-admin';

export async function POST(request: Request) {
  try {
    const { role } = await request.json();
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];

    if (!idToken) {
      return NextResponse.json({ error: 'Authorization token not found.' }, { status: 401 });
    }
    if (!role || (role !== 'jobSeeker' && role !== 'employer')) {
      return NextResponse.json({ error: 'Invalid role specified.' }, { status: 400 });
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    await adminAuth.setCustomUserClaims(uid, { role });

    return NextResponse.json({ success: true, message: `Role '${role}' set for user ${uid}` });

  } catch (error: any) {
    console.error('Error setting custom claim:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
