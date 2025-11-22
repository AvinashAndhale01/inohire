import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function GET(req) {
  try {
    const token = getTokenFromRequest(req);
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    await connectDB();

    const submissions = await Submission.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: submissions,
    });
  } catch (error) {
    console.error('Fetch submissions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
