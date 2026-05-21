import { Ship, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#8b0000] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Ship className="w-10 h-10 text-[#fff8f0]" />
              <span className="text-2xl font-bold">
                Rameshwaram <span className="text-[#ffcccb]">Cruise</span>
              </span>
            </Link>
            <p className="text-[#ffcccb] text-sm leading-relaxed">
              Experience the divine beauty of the Ganges on a luxury cruise in Varanasi. 
              Unforgettable moments on the sacred river.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffcccb]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#ffcccb] transition-colors">Home</Link></li>
              <li><Link href="/booking" className="hover:text-[#ffcccb] transition-colors">Book Now</Link></li>
              <li><Link href="/about" className="hover:text-[#ffcccb] transition-colors">About Us</Link></li>
              <li><Link href="/mandakini" className="hover:text-[#ffcccb] transition-colors">Mandakini Ship</Link></li>
              <li><Link href="/moments" className="hover:text-[#ffcccb] transition-colors">Moments</Link></li>
              <li><Link href="/blogs" className="hover:text-[#ffcccb] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffcccb]">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@rameshwaramcruise.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Assi Ghat, Varanasi, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffcccb]">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fff8f0] hover:text-[#8b0000] transition-all">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fff8f0] hover:text-[#8b0000] transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fff8f0] hover:text-[#8b0000] transition-all">
                yt
              </a>
            </div>
            <p className="text-xs text-[#ffcccb]">
              &copy; {new Date().getFullYear()} Rameshwaram Cruise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
