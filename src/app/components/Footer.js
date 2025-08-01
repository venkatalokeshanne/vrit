'use client';

import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="VR IT Solutions" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              VR IT Solutions is the best software training institute in Hyderabad. We are training professionals online & Class room trainings from Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/vritsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 transition-all duration-300 text-xl"
              >
                📘
              </a>
              <a
                href="https://twitter.com/vritsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 transition-all duration-300 text-xl"
              >
                🐦
              </a>
              <a
                href="https://www.youtube.com/channel/UCNbaPhgRjVUDcJSh70X-ZtA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 transition-all duration-300 text-xl"
              >
                📺
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Policies & Terms</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Terms & Conditions</span>
                </a>
              </li>
              <li>
                <a href="/refund-and-course-rescheduling-policy" className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Refund and Course Rescheduling Policy</span>
                </a>
              </li>
              <li>
                <a href="/contactus" className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-white/70">
                  <p>506/A, Aditya Enclave,</p>
                  <p>Nilagiri Block, 5th Floor,</p>
                  <p>Ameerpet, Hyderabad</p>
                  <p>Telangana - 500016</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919032734343" className="text-white/70 hover:text-white transition-colors">
                  +91-9032734343
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <a href="mailto:info@vritsol.com" className="text-white/70 hover:text-white transition-colors">
                  info@vritsol.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Office Location</h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6947637434844!2d78.44446931489563!3d17.437399988019833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a1c7d3c5c5%3A0x6f8f9c5d5c5d5c5d!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1643723400000!5m2!1sen!2sin"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-sm text-white/60 text-center">
              📍 Office Hours: Mon-Sat 9AM-7PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/60">
            © 2019, all rights reserved. VR IT Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
