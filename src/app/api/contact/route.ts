import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
