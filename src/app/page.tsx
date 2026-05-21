import Link from "next/link";
import { ArrowRight, Anchor, Waves, Sun, Star } from "lucide-react";

export default function Home() {
  const tours = [
    {
      name: "Rameshwaram Temple Tour",
      duration: "4 Hours",
      price: "₹499",
      image: "/images/rameshwaram.jpg",
      description: "Experience the spiritual journey through Rameshwaram's sacred temples and holy waters.",
    },
    {
      name: "Mandakini River Cruise",
      duration: "2 Hours",
      price: "₹299",
      image: "/images/mandakini.jpg",
      description: "Sail through the serene Mandakini River with breathtaking views and peaceful moments.",
    },
    {
      name: "Coastal Sunset Cruise",
      duration: "3 Hours",
      price: "₹699",
      image: "/images/sunset.jpg",
      description: "Watch the golden sunset over the ocean from the comfort of our luxury cruise.",
    },
    {
      name: "Island Hopping Adventure",
      duration: "6 Hours",
      price: "₹999",
      image: "/images/islands.jpg",
      description: "Explore multiple islands around Rameshwaram with snorkeling and beach time.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rameshwaram <span className="text-cyan-300">Cruise</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Embark on an unforgettable journey through the sacred waters of Rameshwaram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#tours"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              View Tours
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Waves className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer the best cruise experience in Rameshwaram with world-class amenities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Cruises</h3>
              <p className="text-gray-600">Experience comfort and elegance with our well-equipped cruise boats.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scenic Views</h3>
              <p className="text-gray-600">Witness the most beautiful sunrises and sunsets from the sea.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Our experienced crew ensures a safe and memorable journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Tours</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our carefully curated cruise experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <Waves className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-600 font-medium">{tour.duration}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm ml-1 text-gray-600">4.8</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{tour.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                    <Link
                      href="/booking"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for an Adventure?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book your cruise experience today and create memories that last a lifetime.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Cruise Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Rameshwaram Cruise</h2>
              <p className="text-gray-600 text-lg mb-6">
                Welcome to Rameshwaram Cruise, your premier destination for unforgettable water experiences.
                We combine spiritual heritage with modern luxury to create journeys that touch your soul.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Our fleet of well-maintained cruise boats, experienced crew, and carefully planned itineraries
                ensure every voyage is safe, comfortable, and magical.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl h-80 flex items-center justify-center">
              <Anchor className="w-24 h-24 text-blue-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get the latest updates on new tour packages, special offers, and travel tips.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
