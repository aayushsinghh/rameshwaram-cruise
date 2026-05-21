'use client';

import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'cruise', label: 'Cruise' },
    { id: 'spirituality', label: 'Spirituality' },
    { id: 'travel', label: 'Travel' },
    { id: 'culture', label: 'Culture' },
  ];

  const blogs = [
    {
      id: 1,
      title: 'Why Rameshwaram is a Spiritual Must-Visit',
      excerpt: 'Discover the sacred allure of Rameshwaram, the legendary pilgrimage site that draws millions of devotees every year.',
      category: 'spirituality',
      date: 'Apr 3, 2026',
      author: 'Editorial Team',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'A Journey Through the Mandakini Cruise Experience',
      excerpt: 'Step aboard Mandakini and discover what makes our Palk Strait cruise one of the most unique experiences in South India.',
      category: 'cruise',
      date: 'Mar 28, 2026',
      author: 'Captain Rajesh',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544642086-c8e88918a8f3?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Temple Architecture of Rameshwaram: A Visual Story',
      excerpt: 'Explore the intricate carvings and grand corridors of the Ramanathaswamy Temple through our lens.',
      category: 'culture',
      date: 'Mar 20, 2026',
      author: 'Heritage Team',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558230552-88854e6a567e?w=800&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Best Time to Visit Rameshwaram: A Seasonal Guide',
      excerpt: 'Planning your Rameshwaram trip? Our seasonal guide helps you pick the perfect time to visit the island.',
      category: 'travel',
      date: 'Mar 15, 2026',
      author: 'Travel Desk',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1596395819057-d3722a976151?w=800&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Life on the Palk Strait: Stories from the Crew',
      excerpt: 'Go behind the scenes and hear from the crew who make every Mandakini cruise a memorable one.',
      category: 'cruise',
      date: 'Mar 8, 2026',
      author: 'On Board Team',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Adam's Bridge: Myth, Legend, and Scientific Discovery',
      excerpt: 'Unravel the mysteries of Ram Setu, the legendary bridge connecting India and Sri Lanka.',
      category: 'spirituality',
      date: 'Feb 28, 2026',
      author: 'Research Team',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
    },
    {
      id: 7,
      title: 'Photography Tips for your Rameshwaram Cruise',
      excerpt: 'Capture stunning photos on your cruise with our tips for golden hour shots, temple photography, and more.',
      category: 'travel',
      date: 'Feb 20, 2026',
      author: 'Photo Team',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop',
    },
    {
      id: 8,
      title: 'Local Cuisine of Rameshwaram You Must Try',
      excerpt: 'From Chettinad flavors to coastal delicacies, explore the rich culinary heritage of this sacred island.',
      category: 'culture',
      date: 'Feb 10, 2026',
      author: 'Food Editor',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=400&fit=crop',
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 text-white py-24'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>Blogs & Stories</h1>
          <p className='text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8'>
            Discover inspiring stories, travel guides, and cultural insights from the heart of Rameshwaram.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className='py-8 bg-white border-b sticky top-0 z-30'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search blogs...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
            {/* Categories */}
            <div className='flex flex-wrap gap-2'>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          {filteredBlogs.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-gray-500 text-lg'>No blogs found matching your criteria.</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full capitalize'>
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                      <span className='flex items-center gap-1'>
                        <Calendar className='w-4 h-4' /> {blog.date}
                      </span>
                      <span className='flex items-center gap-1'>
                        <User className='w-4 h-4' /> {blog.readTime}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors'>
                      {blog.title}
                    </h3>
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{blog.excerpt}</p>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-500'>By {blog.author}</span>
                      <span className='text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all'>
                        Read More <ArrowRight className='w-4 h-4' />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 bg-purple-900'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Stay Updated</h2>
          <p className='text-purple-200 mb-8 max-w-2xl mx-auto'>
            Subscribe to our newsletter for the latest cruise updates, travel tips, and special offers.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none'
            />
            <button className='px-8 py-3 bg-white text-purple-900 font-bold rounded-lg hover:bg-purple-100 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Ready for Your Journey?</h2>
          <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
            Book your Mandakini cruise today and create unforgettable memories on the Palk Strait.
          </p>
          <Link
            href='/booking'
            className='inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors'
          >
            Book Your Cruise <ArrowRight className='ml-2 w-5 h-5' />
          </Link>
        </div>
      </section>
    </div>
  );
}
