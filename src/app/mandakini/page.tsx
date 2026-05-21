import Link from "next/link";
import { ArrowRight, Wind, Waves, MapPin, Clock, Users, Heart } from "lucide-react";

export default function MandakiniPage() {
  const highlights = [
    {
      icon: MapPin,
      title: "Sacred River",
      description: "Navigate the holy Mandakini River, steeped in mythology and spiritual significance.",
    },
    {
      icon: Clock,
      title: "2 Hour Journey",
      description: "A perfectly timed experience that gives you enough time to soak in the serenity.",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Safe and comfortable for all ages. Perfect for families and groups.",
    },
    {
      icon: Heart,
      title: "Romantic Setting",
      description: "The peaceful river atmosphere makes it ideal for couples seeking a special moment.",
    },
  ];

  const itinerary = [
    { time: "00:00", activity: "Boarding & Welcome", description: "Check-in and safety briefing" },
    { time: "00:15", activity: "Departure", description: "Set sail along the Mandakini River" },
    { time: "00:45", activity: "Temple Views", description: "Cruise past ancient riverside temples" },
    { time: "01:15", activity: "Photo Stop", description: "Capture stunning views of the river" },
    { time: "01:45", activity: "Return Journey", description: "Head back with beautiful sunset views" },
    { time: "02:00", activity: "Disembarkation", description: "Arrive back at the starting point" },
  ];

  const inclusions = [
    "Professional guide and commentary",
    "Complimentary refreshments",
    "Safety equipment and life jackets",
    "Photo opportunities at scenic spots",
    "Cultural and historical narration",
    "Comfortable seating arrangements",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Wind className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-100 font-medium">Signature Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Mandakini <span className="text-emerald-300">River Cruise</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            Sail through the sacred waters of the Mandakini River and experience
            tranquility like never before
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now - ₹299 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#itinerary"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              View Itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Sacred Journey</h2>
              <p className="text-gray-600 text-lg mb-4">
                The Mandakini River holds deep spiritual significance in Hindu mythology.
                According to legend, the river descended from heaven to purify the souls
                of those who bathe in its waters. Our cruise takes you through this
                legendary waterway, surrounded by lush greenery and ancient temples.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                As you glide along the calm waters, you'll witness the harmonious blend
                of nature and spirituality. The gentle sounds of the river, the chirping
                of birds, and the distant temple bells create an atmosphere of profound peace.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">2 Hrs</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">₹299</div>
                  <div className="text-sm text-gray-600">Per Person</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">Daily</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl h-96 flex items-center justify-center">
              <Waves className="w-32 h-32 text-emerald-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Highlights</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes the Mandakini River Cruise a truly special experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                  <highlight.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cruise Itinerary</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here's a detailed breakdown of what to expect during your 2-hour journey
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {itinerary.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20">
                  <div className="bg-emerald-100 rounded-xl px-4 py-3 text-center">
                    <span className="text-emerald-700 font-bold">{item.time}</span>
                  </div>
                  {index !== itinerary.length - 1 && (
                    <div className="w-0.5 h-full bg-emerald-200 mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.activity}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">What's Included</h2>
              <div className="space-y-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-2">₹299</div>
              <div className="text-emerald-200 text-lg mb-6">per person</div>
              <Link
                href="/booking"
                className="inline-block w-full py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
              >
                Book Your Spot
              </Link>
              <p className="text-sm text-white/60 mt-4">Free cancellation up to 24 hours before</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Experience the Mandakini?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to sail through one of India's most sacred rivers.
            Limited slots available daily - book in advance to secure your spot.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reserve Now - ₹299 <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
