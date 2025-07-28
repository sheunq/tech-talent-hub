
console.log("Attempting to load /api/alerts/route.ts module - Check server console");

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { AlertApiInputSchema } from '@/lib/schemas/alert';
import { getAllAlerts, createAlert } from '@/services/alertDbService';

export async function POST(request: Request) {
  console.log("====== /api/alerts POST handler invoked - Check server console ======");
  try {
    const rawData = await request.json();
    const validatedData = AlertApiInputSchema.parse(rawData);
    const newAlert = await createAlert(validatedData);
    return NextResponse.json(newAlert, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid alert data", details: error.errors }, { status: 400 });
    }
    console.error('Error creating alert:', error);
    return NextResponse.json({ error: 'Internal Server Error creating alert' }, { status: 500 });
  }
}

export async function GET() {
  console.log("====== /api/alerts GET handler invoked - Check server console ======");
  try {
    const alerts = await getAllAlerts();
    return NextResponse.json(alerts);
  } catch (error) {
    console.error('Error fetching alerts in API route:', error);
    return NextResponse.json({ error: 'Internal Server Error fetching alerts from API route' }, { status: 500 });
  }
}

