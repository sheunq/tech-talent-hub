
import { NextResponse } from 'next/server';
import { deleteAlertById } from '@/services/alertDbService';

// Handler for DELETE /api/alerts/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(`====== /api/alerts/${params.id} DELETE handler invoked - Check server console ======`);
  const id = params.id;
  if (!id) {
    return NextResponse.json({ error: 'Alert ID is required' }, { status: 400 });
  }

  try {
    const deleted = await deleteAlertById(id);
    if (deleted) {
      // According to HTTP specs, 204 No Content is appropriate for successful DELETE with no body
      return new NextResponse(null, { status: 204 });
    } else {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(`Error deleting alert with ID ${id}:`, error);
    return NextResponse.json({ error: 'Internal Server Error deleting alert' }, { status: 500 });
  }
}
