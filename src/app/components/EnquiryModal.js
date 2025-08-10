'use client';

import { useState, useEffect } from 'react';
import { X, Phone, Mail, User, MessageSquare, Clock, Calendar } from 'lucide-react';
import Portal from './Portal';

const EnquiryModal = ({ 
  isOpen, 
  onClose, 
  courseName = "Course",
  onSubmit,
  title = "Course Enquiry"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: courseName,
    trainingMode: 'online'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        course: courseName,
        trainingMode: 'online'
      });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen, courseName]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original styles
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Apply styles to prevent layout shift
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      return () => {
        // Restore original styles
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      return () => document.removeEventListener('keydown', handleEscKey);
    }
  }, [isOpen, onClose]);

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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - you can customize this
        console.log('Enquiry form submitted:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Thank you for your enquiry! We will contact you soon.');
      }
      
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4" 
        onClick={handleBackdropClick}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        
        {/* Modal */}
        <div 
          className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 rounded-2xl shadow-2xl border border-gray-600/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={handleModalClick}
        >
          
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border-b border-gray-600/30 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-300 mt-1">Get in touch with our course experts</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-600/20 rounded-xl transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Course Name */}
            <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">Course</span>
              </div>
              <p className="text-blue-100 font-medium">{courseName}</p>
            </div>

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              
              {/* Name */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border ${
                    errors.name ? 'border-red-400' : 'border-gray-600'
                  } rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border ${
                    errors.email ? 'border-red-400' : 'border-gray-600'
                  } rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border ${
                    errors.phone ? 'border-red-400' : 'border-gray-600'
                  } rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Training Mode
                </label>
                <select
                  name="trainingMode"
                  value={formData.trainingMode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                >
                  <option value="online">Online Training</option>
                  <option value="classroom">Classroom Training</option>
                  <option value="both">Both Online & Classroom</option>
                </select>
              </div>
            </div>


            {/* Message */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                placeholder="Any specific questions or requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Enquiry
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none border border-gray-500 hover:bg-gray-600/20 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Portal>
  );
};

export default EnquiryModal;
