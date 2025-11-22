import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Settings from '@/models/Settings';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function PUT(req) {
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

    const { calendlyUrl } = await req.json();

    if (!calendlyUrl) {
      return NextResponse.json(
        { error: 'Calendly URL is required' },
        { status: 400 }
      );
    }

    await connectDB();

    let settings = await Settings.findOne();
    
    if (!settings) {
      settings = await Settings.create({ calendlyUrl });
    } else {
      settings.calendlyUrl = calendlyUrl;
      settings.updatedAt = Date.now();
      await settings.save();
    }

    return NextResponse.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error('Update settings error:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
