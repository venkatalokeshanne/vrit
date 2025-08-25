import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'contactus';import { getCourseBySlugStatic } from '../../utils/staticCourses';

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function ContactUs() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

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
                    <select className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent appearance-none cursor-pointer">
                      <option value="" className="bg-gray-800 text-white">Select a course</option>
                      <option value="python" className="bg-gray-800 text-white">Python Training</option>
                      <option value="data-science" className="bg-gray-800 text-white">Data Science Training</option>
                      <option value="machine-learning" className="bg-gray-800 text-white">Machine Learning Training</option>
                      <option value="aws" className="bg-gray-800 text-white">AWS Training</option>
                      <option value="azure" className="bg-gray-800 text-white">Azure DevOps Training</option>
                      <option value="devops" className="bg-gray-800 text-white">DevOps Training</option>
                      <option value="salesforce" className="bg-gray-800 text-white">Salesforce Training</option>
                      <option value="servicenow" className="bg-gray-800 text-white">ServiceNow Training</option>
                      <option value="sap-basis" className="bg-gray-800 text-white">SAP BASIS Training</option>
                      <option value="sap-central-finance" className="bg-gray-800 text-white">SAP Central Finance</option>
                      <option value="sap-ewm" className="bg-gray-800 text-white">SAP EWM Training</option>
                      <option value="informatica-mdm" className="bg-gray-800 text-white">Informatica MDM Training</option>
                      <option value="edi-training" className="bg-gray-800 text-white">EDI Training</option>
                      <option value="pega-training" className="bg-gray-800 text-white">Pega Training</option>
                      <option value="mulesoft" className="bg-gray-800 text-white">MuleSoft Training</option>
                      <option value="google-cloud" className="bg-gray-800 text-white">Google Cloud Training</option>
                      <option value="hadoop" className="bg-gray-800 text-white">Hadoop Training</option>
                      <option value="full-stack" className="bg-gray-800 text-white">Full Stack Development</option>
                      <option value="other" className="bg-gray-800 text-white">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
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
                    <a 
                      href="https://www.google.com/maps/place/VR+IT+SOLUTIONS-Clinical+Sas+Training+%7C+Salesforce+training+%7C+Servicenow+Training+%7C+EDI+Training/@17.4392062,78.4343207,15z/data=!4m10!1m2!2m1!1s5th+floor+506,+Nilgiri+block,+ADITYA+ENCLAVE,+a%2Fa,+Satyam+Theatre+Rd,+Kumar+Basti,+Ameerpet,+Hyderabad,+Telangana+500073!3m6!1s0x3bcb916f8ec8811f:0x29a2152dbc636b6f!8m2!3d17.4362741!4d78.444687!15sCng1dGggZmxvb3IgNTA2LCBOaWxnaXJpIGJsb2NrLCBBRElUWUEgRU5DTEFWRSwgYS9hLCBTYXR5YW0gVGhlYXRyZSBSZCwgS3VtYXIgQmFzdGksIEFtZWVycGV0LCBIeWRlcmFiYWQsIFRlbGFuZ2FuYSA1MDAwNzNaciJwNXRoIGZsb29yIDUwNiBuaWxnaXJpIGJsb2NrIGFkaXR5YSBlbmNsYXZlIGEgYSBzYXR5YW0gdGhlYXRyZSByZCBrdW1hciBiYXN0aSBhbWVlcnBldCBoeWRlcmFiYWQgdGVsYW5nYW5hIDUwMDA3M5IBG3NvZnR3YXJlX3RyYWluaW5nX2luc3RpdHV0ZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRMmR6bEhjakJSUlJBQqoBzQEQASoyIi41dGggZmxvb3IgNTA2IG5pbGdpcmkgYmxvY2sgYWRpdHlhIGVuY2xhdmUgYSBhKAAyHxABIhvc3XWc8TnGNGOHbQavKfUn-IwhPDWzJxZJ0m0ydBACInA1dGggZmxvb3IgNTA2IG5pbGdpcmkgYmxvY2sgYWRpdHlhIGVuY2xhdmUgYSBhIHNhdHlhbSB0aGVhdHJlIHJkIGt1bWFyIGJhc3RpIGFtZWVycGV0IGh5ZGVyYWJhZCB0ZWxhbmdhbmEgNTAwMDcz4AEA-gEECAAQMw!16s%2Fg%2F11j00lfb5d?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      View on Google Maps
                    </a>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.591425324094!2d78.44186871489563!3d17.436274188018833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916f8ec8811f%3A0x29a2152dbc636b6f!2sVR%20IT%20SOLUTIONS-Clinical%20Sas%20Training%20%7C%20Salesforce%20training%20%7C%20Servicenow%20Training%20%7C%20EDI%20Training!5e0!3m2!1sen!2sin!4v1643723400000!5m2!1sen!2sin"
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
