'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { getCourseBySlugStatic, getStructuredDataStatic  } from '../../utils/staticCourses';

// Define the course slug as a constant
const COURSE_SLUG = 'contactus';

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\+\-\s\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        course: formData.courseInterest || 'General Inquiry',
        training_mode: 'Not Specified',
        message: formData.message,
        to_email: 'info@vritsol.com',
        reply_to: formData.email,
        // Additional context
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        source: 'Contact Us Page',
        subject: `Contact Inquiry from ${formData.fullName}`
      };

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS configuration missing. Environment variables required:');
        console.warn('- NEXT_PUBLIC_EMAILJS_SERVICE_ID');
        console.warn('- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
        console.warn('- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
        
        // Fallback behavior - log the contact
        console.log('Contact form submitted (EmailJS not configured):', formData);
        setSubmitStatus('success');
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            courseInterest: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 3000);
        return;
      }

      // Send email via EmailJS
      console.log('Sending contact email via EmailJS...');
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Contact email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          courseInterest: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error sending contact email:', error);
      setSubmitStatus('error');
      
      // Log detailed error information
      if (error.status) {
        console.error('EmailJS Error Status:', error.status);
        console.error('EmailJS Error Text:', error.text);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

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
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                        errors.fullName ? 'border-red-400' : 'border-gray-600/50'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                        errors.email ? 'border-red-400' : 'border-gray-600/50'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                        errors.phone ? 'border-red-400' : 'border-gray-600/50'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Course Interest
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="courseInterest"
                      value={formData.courseInterest}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder="Enter course name (e.g., Python, AWS, Azure DevOps, etc.)"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                      errors.message ? 'border-red-400' : 'border-gray-600/50'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none`}
                    placeholder="Tell us about your training requirements..."
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 border border-green-400/30 text-green-300' 
                    : 'bg-red-500/20 border border-red-400/30 text-red-300'
                }`}>
                  {submitStatus === 'success' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Failed to send message.</div>
                        <div className="text-sm opacity-90">Please try again or call us at +91-9032734343</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 ${
                  isSubmitting || submitStatus === 'success' ? 'cursor-not-allowed opacity-70' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
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
                    <p>5th floor 506, Nilgiri block, ADITYA ENCLAVE, a/a, Satyam Theatre Rd, Kumar Basti, Ameerpet, Hyderabad, Telangana 500073, India</p>
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
      </div>
    </div>
  );
}
