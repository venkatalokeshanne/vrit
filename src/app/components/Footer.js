'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

// Custom Social Media Icons
const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.46.204 4.902.388a5.988 5.988 0 0 0-2.164 1.389A5.988 5.988 0 0 0 .35 4.902C.166 5.46.044 6.094.01 7.041.013 7.989 0 8.396 0 12.017c0 3.624.013 4.09.048 5.014.034.947.156 1.581.34 2.139a5.988 5.988 0 0 0 1.389 2.164 5.988 5.988 0 0 0 2.164 1.389c.558.184 1.192.306 2.139.34.924.035 1.39.048 5.014.048 3.624 0 4.09-.013 5.014-.048.947-.034 1.581-.156 2.139-.34a5.988 5.988 0 0 0 2.164-1.389 5.988 5.988 0 0 0 1.389-2.164c.184-.558.306-1.192.34-2.139.035-.924.048-1.39.048-5.014 0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.581-.34-2.139a5.988 5.988 0 0 0-1.389-2.164A5.988 5.988 0 0 0 19.098.388C18.54.204 17.906.082 16.959.048 16.011.013 15.604 0 12.017 0zm0 2.162c3.557 0 3.983.01 5.388.048.827.037 1.277.175 1.577.291.396.154.679.338.976.635.297.297.481.58.635.976.116.3.254.75.291 1.577.038 1.405.048 1.831.048 5.388 0 3.557-.01 3.983-.048 5.388-.037.827-.175 1.277-.291 1.577-.154.396-.338.679-.635.976-.297.297-.58.481-.976.635-.3.116-.75.254-1.577.291-1.405.038-1.831.048-5.388.048-3.557 0-3.983-.01-5.388-.048-.827-.037-1.277-.175-1.577-.291a2.63 2.63 0 0 1-.976-.635 2.63 2.63 0 0 1-.635-.976c-.116-.3-.254-.75-.291-1.577-.038-1.405-.048-1.831-.048-5.388 0-3.557.01-3.983.048-5.388.037-.827.175-1.277.291-1.577.154-.396.338-.679.635-.976.297-.297.58-.481.976-.635.3-.116.75-.254 1.577-.291 1.405-.038 1.831-.048 5.388-.048z"/>
    <path d="M12.017 15.33a3.313 3.313 0 1 1 0-6.626 3.313 3.313 0 0 1 0 6.626zm0-8.468a5.155 5.155 0 1 0 0 10.31 5.155 5.155 0 0 0 0-10.31z"/>
    <circle cx="17.34" cy="6.66" r="1.204"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="VR IT Solutions" 
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-100 mb-6 leading-relaxed">
              VR IT Solutions is the best software training institute in Hyderabad. We are training professionals online & Class room trainings from Hyderabad.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/vritsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-white group-hover:text-white" />
              </Link>
              <Link
                href="https://twitter.com/vritsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 hover:bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Twitter"
              >
                <TwitterIcon className="w-5 h-5 text-white group-hover:text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCNbaPhgRjVUDcJSh70X-ZtA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 hover:bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                aria-label="Subscribe to our YouTube channel"
              >
                <YouTubeIcon className="w-5 h-5 text-white group-hover:text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/vritsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-white group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Policies & Terms</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/refund-and-course-rescheduling-policy" className="text-gray-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Refund and Course Rescheduling Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="text-gray-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-100">
                  <p>506/A, Aditya Enclave,</p>
                  <p>Nilagiri Block, 5th Floor,</p>
                  <p>Ameerpet, Hyderabad</p>
                  <p>Telangana - 500016</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <Link href="tel:+919032734343" className="text-gray-100 hover:text-white transition-colors">
                  +91-9032734343
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <Link href="mailto:info@vritsol.com" className="text-gray-100 hover:text-white transition-colors">
                  info@vritsol.com
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Office Location</h4>
            <div className="bg-slate-800 rounded-xl p-2 border border-slate-600 mb-4 relative overflow-hidden">
              {/* Try Google Maps Embed first */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.564879768166!2d78.44271051489569!3d17.439999787995647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0c6db3e95%3A0x5b1b4f5c5c5c5c5c!2s506%2FA%2C%20Aditya%20Enclave%2C%20Nilagiri%20Block%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500016%2C%20India!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="VR IT Solutions Office Location"
                onLoad={(e) => {
                  // Map loaded successfully
                  const fallback = e.target.nextElementSibling;
                  if (fallback && fallback.classList.contains('map-fallback')) {
                    fallback.style.display = 'none';
                  }
                }}
                onError={(e) => {
                  // Fallback: Show static map placeholder
                  console.log('Google Maps failed to load, showing fallback');
                  e.target.style.display = 'none';
                  const fallback = e.target.nextElementSibling;
                  if (fallback && fallback.classList.contains('map-fallback')) {
                    fallback.style.display = 'block';
                  }
                }}
              ></iframe>
              
              {/* Fallback: Static Map Placeholder */}
              <div 
                className="map-fallback w-full h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center flex-col space-y-2 border border-slate-600"
                style={{ display: 'none' }}
              >
                <MapPin className="w-8 h-8 text-blue-400" />
                <div className="text-center">
                  <p className="text-white font-medium">VR IT Solutions</p>
                  <p className="text-slate-300 text-sm">Ameerpet, Hyderabad</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Link
                href="https://maps.app.goo.gl/fARm19iVifZOTVzxo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-white hover:text-white text-sm border border-blue-500"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </Link>
            </div>
            <p className="text-sm text-gray-200 text-center">
              📍 Office Hours: Mon-Sat 9AM-7PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-200">
            © 2025, all rights reserved. VR IT Solutions
          </p>
          <p className="text-xs text-gray-400 mt-2">
            designed & developed by{' '}
            <a 
              href="https://www.linkedin.com/in/venkatalokesh" 
              className="text-gray-300 hover:text-orange-400 transition-colors duration-200 underline decoration-dotted underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devotree
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
