
import { NextResponse } from 'next/server';
import { findJobById } from '@/services/jobDbService';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
  }

  try {
    const job = await findJobById(id);
    if (!job || job.status !== 'approved') {
      return NextResponse.json({ error: 'Job not found or is no longer available.' }, { status: 404 });
    }
    return NextResponse.json(job);
  } catch (error) {
    console.error(`Error fetching job with ID ${id}:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
