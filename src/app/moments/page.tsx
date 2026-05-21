"use client";

import { useState } from "react";
import { Image, Camera, Heart, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MomentsPage() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "cruises", label: "Cruises" },
    { id: "temples", label: "Temples" },
    { id: "sunset", label: "Sunset" },
    { id: "wildlife", label: "Wildlife" },
  ];

  const gallery = [
    { id: 1, category: "cruises", title: "Mandakini River Cruise", caption: "A serene cruise journey" },
    { id: 2, category: "sunset", title: "Golden Sunset", caption: "Breathtaking sunset views" },
    { id: 3, category: "temples", title: "Rameshwaram Temple", caption: "Sacred architecture" },
    { id: 4, category: "wildlife", title: "Dolphins Spotted", caption: "Nature at its best" },
    { id: 5, category: "cruises", title: "Evening Cruise", caption: "Twilight on the waters" },
    { id: 6, category: "sunset", title: "Sea of Gold", caption: "Painted sky at dusk" },
    { id: 7, category: "temples", title: "Temple at Dawn", caption: "Early morning prayers" },
    { id: 8, category: "wildlife", title: "Coastal Birds", caption: "Rare seabird sightings" },
    { id: 9, category: "cruises", title: "Island Adventure", caption: "Exploring nearby islands" },
    { id: 10, category: "sunset", title: "Horizon Glow", caption: "The perfect ending" },
    { id: 11, category: "wildlife", title: "Sea Turtles", caption: "Protected marine life" },
    { id: 12, category: "temples", title: "Temple Gopuram", caption: "Dravidian architecture" },
  ];

  const filteredGallery = filter === "all" ? gallery : gallery.filter(item => item.category === filter);

  const testimonials = [
    {
      name: "Anjali Desai",
      location: "Mumbai",
      text: "The most peaceful experience of my life. The Mandakini cruise was magical and the team was incredibly professional.",
      rating: 5,
    },
    {
      name: "Rahul Iyer",
      location: "Chennai",
      text: "Stunning views, especially during sunset. The crew's knowledge of the area added so much to the experience.",
      rating: 5,
    },
    {
      name: "Pooja Menon",
      location: "Bangalore",
      text: "Took my parents for the temple tour cruise. They loved every moment. Will definitely recommend to everyone.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Captured Moments</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Beautiful memories from our guests' unforgettable cruise experiences
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Image className="w-16 h-16 text-white/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.caption}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors">
              Load More <Image className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Image className="w-32 h-32 text-white/50" />
            </div>
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-2">{gallery.find(g => g.id === selectedImage)?.title}</h2>
              <p className="text-white/70">{gallery.find(g => g.id === selectedImage)?.caption}</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Share Your Moments Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Share Your Moments</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Tag us in your photos with #RameshwaramCruise and be featured in our gallery.
            We love seeing our guests' beautiful memories!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from real travelers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 text-pink-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Create Your Own Moments</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Book your cruise today and start making memories that will last a lifetime.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Cruise <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
