'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Rameshwaram Cruise Terminal, Port Road, Rameshwaram, Tamil Nadu 623526',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      subContent: 'Mon - Sat, 9 AM - 8 PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@rameshwaramcruise.com',
      subContent: 'We usually reply within 24 hours',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday to Saturday',
      subContent: '9:00 AM - 8:00 PM IST',
    },
  ];

  const faqs = [
    {
      question: 'How do I book a cruise on Mandakini?',
      answer: 'You can book directly through our website by visiting the Booking page. Simply select your preferred date, number of seats, and fill in your details. You will receive a booking confirmation via WhatsApp and email.',
    },
    {
      question: 'What is the duration of the cruise?',
      answer: 'The Mandakini cruise is a 3-hour journey through the beautiful Palk Strait, departing from Rameshwaram. The cruise includes onboard dining and entertainment.',
    },
    {
      question: 'Is the cruise suitable for children and elderly passengers?',
      answer: 'Absolutely! Mandakini is designed for passengers of all ages. We have dedicated crew members to assist elderly guests and child-friendly activities on board.',
    },
    {
      question: 'Can I cancel or reschedule my booking?',
      answer: 'Yes, you can cancel or reschedule your booking up to 48 hours before the cruise departure for a full refund. Cancelations within 48 hours may incur a charge.',
    },
    {
      question: 'What should I bring on the cruise?',
      answer: 'We recommend bringing comfortable clothing, sunscreen, sunglasses, and a camera. Light jackets are suggested for evening cruises as it can get breezy on the water.',
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 text-white py-24'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>Get in Touch</h1>
          <p className='text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto'>
            Have questions about the Mandakini cruise? We are here to help you plan your perfect journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {contactInfo.map((item, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow'>
                <div className='inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4'>
                  <item.icon className='w-7 h-7 text-purple-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm mb-1'>{item.content}</p>
                {item.subContent && <p className='text-gray-500 text-xs'>{item.subContent}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>Send Us a Message</h2>
              <p className='text-gray-600 mb-8'>Fill out the form below and we will get back to you as soon as possible.</p>

              {submitted ? (
                <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
                  <p className='text-green-700 font-semibold text-lg mb-2'>Message Sent Successfully!</p>
                  <p className='text-green-600'>Thank you for contacting us. We will respond to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className='mt-4 text-green-700 font-semibold hover:underline'
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name *</label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        placeholder='John Doe'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Email Address *</label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        placeholder='john@example.com'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        placeholder='+91 98765 43210'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Subject</label>
                      <select
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                      >
                        <option value=''>Select a subject</option>
                        <option value='booking'>Booking Inquiry</option>
                        <option value='cruise-info'>Cruise Information</option>
                        <option value='corporate'>Corporate Booking</option>
                        <option value='feedback'>Feedback</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Message *</label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
                      placeholder='How can we help you?'
                    />
                  </div>
                  <button
                    type='submit'
                    disabled={loading}
                    className='w-full flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold rounded-lg transition-colors'
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className='w-5 h-5' />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Quick Links */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>Find Us</h2>
              <p className='text-gray-600 mb-6'>Visit our terminal in Rameshwaram. We are located near the main port area.</p>
              
              {/* Embedded Map Placeholder */}
              <div className='bg-gray-200 rounded-xl h-64 mb-8 flex items-center justify-center'>
                <div className='text-center'>
                  <MapPin className='w-10 h-10 text-gray-400 mx-auto mb-2' />
                  <p className='text-gray-500'>Interactive Map</p>
                  <p className='text-gray-400 text-sm'>Rameshwaram, Tamil Nadu</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className='bg-purple-50 rounded-xl p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Quick Links</h3>
                <ul className='space-y-3'>
                  <li>
                    <Link href='/booking' className='text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2'>
                      Book Your Cruise <span className='text-purple-400'>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='/mandakini' className='text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2'>
                      Learn About Mandakini <span className='text-purple-400'>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about' className='text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2'>
                      Our Story <span className='text-purple-400'>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blogs' className='text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2'>
                      Read Our Blog <span className='text-purple-400'>→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Frequently Asked Questions</h2>
            <p className='text-gray-600'>Find answers to the most common questions about our cruise experience.</p>
          </div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='bg-white rounded-xl shadow-md overflow-hidden'>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
                >
                  <span className='font-semibold text-gray-900 pr-4'>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className='py-16 bg-purple-900'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Follow Us</h2>
          <p className='text-purple-200 mb-8 max-w-2xl mx-auto'>
            Stay connected with us on social media for the latest updates, behind-the-scenes content, and exclusive offers.
          </p>
          <div className='flex justify-center gap-6'>
            <a href='#' className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'>
              <Facebook className='w-6 h-6 text-white' />
            </a>
            <a href='#' className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'>
              <Instagram className='w-6 h-6 text-white' />
            </a>
            <a href='#' className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'>
              <Twitter className='w-6 h-6 text-white' />
            </a>
            <a href='#' className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'>
              <Youtube className='w-6 h-6 text-white' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
