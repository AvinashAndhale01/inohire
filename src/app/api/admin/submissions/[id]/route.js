import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function PUT(req, { params }) {
  try {
    const token = getTokenFromRequest(req);
    
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { status, note } = body;

    await connectDB();

    const updateData = { status };
    if (note !== undefined) {
      updateData.note = note;
    }

    const submission = await Submission.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Update submission error:', error);
    return NextResponse.json({ error: 'Failed to update submission' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const token = getTokenFromRequest(req);
    
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await connectDB();

    const submission = await Submission.findByIdAndDelete(id);

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Submission deleted' });
  } catch (error) {
    console.error('Delete submission error:', error);
    return NextResponse.json({ error: 'Failed to delete submission' }, { status: 500 });
  }
}
