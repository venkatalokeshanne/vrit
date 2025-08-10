'use client';

import { useState } from 'react';
import { ArrowRight, Download, Play, Phone } from 'lucide-react';
import EnquiryModal from './EnquiryModal';
import DownloadModal from './DownloadModal';

// Individual Button Components
export const EnquireNowButton = ({ 
  className = "", 
  size = "lg",
  variant = "primary",
  onClick,
  courseName = "Course",
  children = "Enquire Now"
}) => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Show enquiry modal by default
      setShowEnquiryModal(true);
    }
  };

  const baseClasses = "font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
    secondary: "border border-purple-400/60 hover:bg-purple-400/10 text-purple-300 hover:text-white hover:border-purple-300"
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        <ArrowRight className="w-5 h-5" />
        {children}
      </button>
      
      <EnquiryModal
        isOpen={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
        courseName={courseName}
      />
    </>
  );
};

export const DownloadCourseButton = ({ 
  className = "", 
  size = "lg",
  variant = "secondary",
  onClick,
  courseName = "Course",
  downloadUrl,
  children = "Download Course Content"
}) => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Show download modal by default
      setShowDownloadModal(true);
    }
  };

  const baseClasses = "font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white",
    secondary: "border border-pink-400/60 hover:bg-pink-400/10 text-pink-300 hover:text-white hover:border-pink-300"
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        <Download className="w-5 h-5" />
        {children}
      </button>
      
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        courseName={courseName}
        downloadUrl={downloadUrl}
      />
    </>
  );
};

export const JoinNowButton = ({ 
  className = "", 
  size = "lg",
  variant = "primary",
  onClick,
  children = "Join Now"
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - redirect to contact/enrollment page
      window.location.href = '/contactus';
    }
  };

  const baseClasses = "font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white",
    secondary: "border border-orange-400/60 hover:bg-orange-400/10 text-orange-300 hover:text-white hover:border-orange-300"
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Play className="w-5 h-5" />
      {children}
    </button>
  );
};

export const CallNowButton = ({ 
  className = "", 
  size = "lg",
  variant = "primary",
  phoneNumber = "+91-9032734343",
  onClick,
  children = "Call Now"
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - open phone dialer
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const baseClasses = "font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white",
    secondary: "border border-green-400/60 hover:bg-green-400/10 text-green-300 hover:text-white hover:border-green-300"
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Phone className="w-5 h-5" />
      {children}
    </button>
  );
};

// Combined Button Group Component with Modal Support
export const CourseActionButtons = ({ 
  courseName = "Course",
  phoneNumber = "+91-9032734343",
  showEnquireNow = true,
  showDownload = true,
  showJoinNow = false,
  showCallNow = false,
  layout = "horizontal", // "horizontal" or "vertical"
  size = "lg",
  onEnquireNow,
  onDownload,
  onJoinNow,
  onCallNow,
  downloadUrl,
  className = ""
}) => {
  const containerClasses = layout === "horizontal" 
    ? "flex flex-col sm:flex-row gap-4 justify-center"
    : "flex flex-col gap-4";

  return (
    <div className={`${containerClasses} ${className}`}>
      {showEnquireNow && (
        <EnquireNowButton 
          size={size}
          courseName={courseName}
          onClick={onEnquireNow}
        />
      )}
      
      {showDownload && (
        <DownloadCourseButton 
          size={size}
          courseName={courseName}
          downloadUrl={downloadUrl}
          onClick={onDownload}
        />
      )}
      
      {showJoinNow && (
        <JoinNowButton 
          size={size}
          onClick={onJoinNow}
        />
      )}
      
      {showCallNow && (
        <CallNowButton 
          size={size}
          phoneNumber={phoneNumber}
          onClick={onCallNow}
        />
      )}
    </div>
  );
};

// Export all components as default for easy importing
const CourseActionButtonsWithModals = {
  EnquireNowButton,
  DownloadCourseButton,
  JoinNowButton,
  CallNowButton,
  CourseActionButtons
};

export default CourseActionButtonsWithModals;
