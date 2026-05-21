'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Ship } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/booking', label: 'Book Now' },
  { href: '/about', label: 'About' },
  { href: '/mandakini', label: 'Mandakini' },
  { href: '/moments', label: 'Moments' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f0]/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Ship className="w-10 h-10 text-[#8b0000] group-hover:text-[#a52a2a] transition-colors" />
            <span className="text-2xl font-bold text-[#8b0000]">
              Rameshwaram <span className="text-[#a52a2a]">Cruise</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[#a52a2a] font-medium hover:bg-[#8b0000] hover:text-white rounded-md transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#8b0000] hover:bg-[#fff8f0] rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fff8f0] border-t border-[#8b0000]/20 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#a52a2a] font-medium hover:bg-[#8b0000] hover:text-white rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
