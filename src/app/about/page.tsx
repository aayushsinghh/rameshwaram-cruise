import Link from "next/link";
import { Anchor, Waves, Users, Shield, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our cruises follow strict safety protocols with certified crew and modern equipment.",
    },
    {
      icon: Award,
      title: "Quality Experience",
      description: "We are committed to providing the highest quality cruise experience in Rameshwaram.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We go the extra mile for every guest.",
    },
    {
      icon: Anchor,
      title: "Sustainable Tourism",
      description: "We are dedicated to protecting the marine ecosystem while sharing its beauty.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "20+ years of maritime experience, passionate about showcasing Rameshwaram's beauty.",
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      bio: "Ensures every cruise runs smoothly with attention to every detail.",
    },
    {
      name: "Arun Venkatesh",
      role: "Head Captain",
      bio: "Certified captain with extensive knowledge of local waters and routes.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Travelers" },
    { number: "1000+", label: "Cruises Completed" },
    { number: "4.9", label: "Average Rating" },
    { number: "100%", label: "Safety Record" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the story behind Rameshwaram's most trusted cruise experience
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded in 2020, Rameshwaram Cruise was born from a passion for the sea and a
                deep love for the spiritual heritage of Rameshwaram. What started as a small
                family boat operation has grown into a premier cruise experience trusted by
                thousands of travelers.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our mission is to offer an unforgettable journey that combines the serene beauty
                of the ocean with the rich cultural tapestry of this sacred island. Whether you're
                seeking spiritual solace at the famous temples or simply want to witness a
                breathtaking sunset over the Bay of Bengal, we have the perfect cruise for you.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Every vessel in our fleet is meticulously maintained, and our crew is trained to
                the highest standards of hospitality and safety. We believe that a great cruise
                is not just about the destination, but about the entire experience.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Book Your Cruise <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl h-96 flex items-center justify-center">
              <Waves className="w-32 h-32 text-blue-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The dedicated people behind every successful cruise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Set Sail?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers and experience the magic of a Rameshwaram cruise.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
