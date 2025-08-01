'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '/contactus' },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="VR IT Solutions" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Simple Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Simple CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919032734343"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            
            <a
              href="mailto:info@vritsol.com"
              className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Simple Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Simple Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-white/10 space-y-2">
              <a
                href="tel:+919032734343"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:info@vritsol.com"
                className="flex items-center justify-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg font-medium border border-white/20"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
