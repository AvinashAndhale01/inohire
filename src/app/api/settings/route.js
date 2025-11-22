import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Settings from '@/models/Settings';

export async function GET() {
  try {
    await connectDB();
    
    let settings = await Settings.findOne();
    
    if (!settings) {
      settings = await Settings.create({
        calendlyUrl: 'https://calendly.com/inohire78/30min',
      });
    }

    return NextResponse.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error('Fetch settings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}
