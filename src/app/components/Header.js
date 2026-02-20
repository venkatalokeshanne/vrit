'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Courses', href: '/courses' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contactus' },
  ];

  return (
  <header className="bg-yellow-300 backdrop-blur-sm border-b border-yellow-400 sticky top-[48px] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="VR IT Solutions" 
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority={true}
              sizes="120px"
            />
          </Link>

          {/* Simple Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-yellow-800 transition-colors duration-200 font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Simple CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919032734343"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 border border-orange-600"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Now</span>
            </a>
            
            <a
              href="mailto:info@vritsol.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold border border-orange-600 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Simple Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-yellow-200 hover:bg-yellow-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Simple Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-yellow-300 border-t border-yellow-400">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-black hover:text-yellow-800 hover:bg-yellow-200 rounded-lg transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-orange-600 space-y-2">
              <a
                href="tel:+919032734343"
                className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold border border-orange-600"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:info@vritsol.com"
                className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold border border-orange-600"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
