import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';

export async function POST(req) {
  try {
    const data = await req.json();
    const { type, name, email, company, phone, subject, message } = data;

    if (!type || !name || !email || !company || !subject || !message) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    await connectDB();

    const submission = await Submission.create({
      type,
      name,
      email,
      company,
      phone,
      subject,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      data: submission,
    });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
