import mongoose, { Document, Schema, model } from 'mongoose';

interface IBooking extends Document {
  fullName: string;
  email: string;
  phone: string;
  tourType: string;
  cruiseDate: Date;
  seats: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  whatsappSent?: boolean;
}

const bookingSchema = new Schema<IBooking>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    tourType: { type: String, required: true },
    cruiseDate: { type: Date, required: true },
    seats: { type: Number, required: true, min: 1 },
    specialRequests: { type: String, trim: true, default: '' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    whatsappSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;
