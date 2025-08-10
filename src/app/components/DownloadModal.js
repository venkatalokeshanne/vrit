'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, Phone, Mail, User, MapPin, FileText, CheckCircle } from 'lucide-react';
import Portal from './Portal';

const DownloadModal = ({ 
  isOpen, 
  onClose, 
  courseName = "Course",
  onSubmit,
  downloadUrl,
  title = "Download Course Content"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    purpose: 'personal',
    course: courseName
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [errors, setErrors] = useState({});

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        purpose: 'personal',
        course: courseName
      });
      setErrors({});
      setIsSubmitting(false);
      setDownloadReady(false);
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
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here we would normally send the data to an API
      // For now, we'll simulate the process
      if (onSubmit) {
        await onSubmit(formData);
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setDownloadReady(true);
    } catch (error) {
      console.error('Download request failed:', error);
      setErrors({ submit: 'Failed to process request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    // Trigger download or open in new tab
    if (downloadUrl) {
      try {
        // Try to force download first
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${courseName.replace(/\s+/g, '_')}_Course_Content.pdf`;
        link.target = '_blank'; // Fallback to open in new tab
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        // If download fails, open in new tab
        window.open(downloadUrl, '_blank', 'noopener,noreferrer');
      }
    }
    
    // Close modal after download
    onClose();
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
          {!downloadReady ? (
            <>
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm border-b border-gray-600/30 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <p className="text-gray-300 mt-1">Fill the form to download course materials</p>
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
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-semibold">Course Materials</span>
                  </div>
                  <p className="text-green-100 font-medium">{courseName}</p>
                </div>

                {/* Error Message */}
                {errors.submit && (
                  <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-4">
                    <p className="text-red-300 text-sm">{errors.submit}</p>
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.name ? 'border-red-400' : 'border-gray-600'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.email ? 'border-red-400' : 'border-gray-600'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.phone ? 'border-red-400' : 'border-gray-600'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Purpose of Download
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="personal">Personal Learning</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="career">Career Change</option>
                    <option value="skill">Skill Enhancement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Get Download Link
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
            </>
          ) : (
            /* Download Ready State */
            <div className="p-4 lg:p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Download Ready!</h3>
                <p className="text-gray-300">
                  Thank you for your interest in <strong>{courseName}</strong>. 
                  Click the button below to download the course materials.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
                
                <button
                  onClick={onClose}
                  className="border border-gray-500 hover:bg-gray-600/20 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <p>If the download doesn't start automatically, please check your downloads folder.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default DownloadModal;
