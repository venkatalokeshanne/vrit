import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from 'lucide-react';
import { getPageMetadata, getStructuredData } from '../../utils/metadata';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('contactus');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('contactus');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async function ContactUs() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('contactus');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with VR IT Solutions for all your training needs. We're here to help you transform your career with our comprehensive technology courses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-gray-700/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-blue-400" />
              Send A Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Course Interest
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent">
                      <option value="">Select a course</option>
                      <option value="python">Python Training</option>
                      <option value="data-science">Data Science</option>
                      <option value="aws">AWS Training</option>
                      <option value="devops">DevOps Training</option>
                      <option value="salesforce">Salesforce Training</option>
                      <option value="servicenow">ServiceNow Training</option>
                      <option value="sap">SAP Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                    placeholder="Tell us about your training requirements..."
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
            
            {/* Quick Actions */}
            <div className="mt-12 bg-gradient-to-br from-green-500/10 via-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid gap-4">
                <a
                  href="tel:+919032734343"
                  className="flex items-center gap-3 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-400/30 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Call Now for Free Demo</span>
                </a>
                <a
                  href="mailto:info@vritsol.com"
                  className="flex items-center gap-3 p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-400/30 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Email Your Queries</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* VR IT Solutions Info */}
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/20 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">VR IT Solutions</h2>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p className="text-white font-semibold mb-1">Office Address</p>
                    <p>506/A, Aditya Enclave,</p>
                    <p>Nilagiri Block, 5th Floor,</p>
                    <p>Ameerpet, Hyderabad</p>
                    <p>Telangana - 500016</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p className="text-white font-semibold mb-1">Call Us</p>
                    <a href="tel:+919032734343" className="text-green-400 hover:text-green-300 transition-colors">
                      +91-9032734343
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p className="text-white font-semibold mb-1">Email Us</p>
                    <a href="mailto:info@vritsol.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      info@vritsol.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p className="text-white font-semibold mb-1">Office Hours</p>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Office Location Map */}
            <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-gray-700/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                Office Location
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6947637434844!2d78.44446931489563!3d17.437399988019833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a1c7d3c5c5%3A0x6f8f9c5d5c5d5c5d!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1643723400000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* Structured Data for SEO */}
        {structuredDataJson && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: structuredDataJson }}
          />
        )}
      </div>
    </div>
  );
}
