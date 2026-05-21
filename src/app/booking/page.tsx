"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Anchor, Calendar, Users, CheckCircle } from "lucide-react";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  tourType: z.string().min(1, "Please select a tour"),
  cruiseDate: z.string().min(1, "Please select a date"),
  seats: z.string().min(1, "Please select number of seats"),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const tourOptions = [
  { value: "temple-tour", label: "Rameshwaram Temple Tour", price: 499 },
  { value: "mandakini-cruise", label: "Mandakini River Cruise", price: 299 },
  { value: "sunset-cruise", label: "Coastal Sunset Cruise", price: 699 },
  { value: "island-hopping", label: "Island Hopping Adventure", price: 999 },
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedTour = watch("tourType");
  const selectedSeats = watch("seats");

  // Update price based on selection
  useState(() => {
    if (selectedTour) {
      const tour = tourOptions.find(t => t.value === selectedTour);
      if (tour && selectedSeats) {
        setSelectedPrice(tour.price * parseInt(selectedSeats));
      }
    }
  });

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your booking. We will contact you shortly with further details.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            A confirmation email has been sent to your registered email address.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Book Another Tour
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Anchor className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium text-sm">Book Your Cruise</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your Spot
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill in the details below to book your cruise experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl"
            >
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Personal Information
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="+91 XXXXXXXXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Tour Details
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Tour *
                    </label>
                    <select
                      {...register("tourType")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">Choose a tour</option>
                      {tourOptions.map((tour) => (
                        <option key={tour.value} value={tour.value}>
                          {tour.label} - ₹{tour.price}/person
                        </option>
                      ))}
                    </select>
                    {errors.tourType && (
                      <p className="text-red-500 text-sm mt-1">{errors.tourType.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline w-4 h-4 mr-1" />
                        Cruise Date *
                      </label>
                      <input
                        type="date"
                        {...register("cruiseDate")}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                      {errors.cruiseDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.cruiseDate.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline w-4 h-4 mr-1" />
                        Number of Seats *
                      </label>
                      <select
                        {...register("seats")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                      >
                        <option value="">Select seats</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Person" : "People"}
                          </option>
                        ))}
                      </select>
                      {errors.seats && (
                        <p className="text-red-500 text-sm mt-1">{errors.seats.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      {...register("specialRequests")}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Any special requests or dietary requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {loading ? "Processing..." : "Confirm Booking"}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Selected Tour</span>
                  <span className="font-medium text-gray-900">
                    {selectedTour
                      ? tourOptions.find(t => t.value === selectedTour)?.label || "-"
                      : "-"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Seats</span>
                  <span className="font-medium text-gray-900">
                    {selectedSeats || "-"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Price per person</span>
                  <span className="font-medium text-gray-900">
                    ₹{selectedTour
                      ? tourOptions.find(t => t.value === selectedTour)?.price || 0
                      : 0}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 bg-blue-50 rounded-xl px-4 -mx-4">
                  <span className="text-gray-900 font-semibold">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{selectedPrice || 0}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                <p className="mb-2">
                  <strong className="text-gray-900">Includes:</strong>
                </p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Cruise ride for selected duration</li>
                  <li>Safety equipment & life jackets</li>
                  <li>Professional ship crew</li>
                  <li>Complimentary refreshments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
