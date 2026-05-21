import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Booking from '@/lib/models/Booking';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { fullName, email, phone, tourType, cruiseDate, seats, specialRequests } = body;

    if (!fullName || !email || !phone || !tourType || !cruiseDate || !seats) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      fullName,
      email,
      phone,
      tourType,
      cruiseDate: new Date(cruiseDate),
      seats,
      specialRequests: specialRequests || '',
    });

    // TODO: Send WhatsApp notification via AiSensy
    // await sendWhatsAppNotification(booking);

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully', booking },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { success: false, message: `Server error: ${message}` },
      { status: 500 }
    );
  }
}
