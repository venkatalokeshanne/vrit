'use client';

import { useState } from 'react';
import { ArrowRight, Download, Phone } from 'lucide-react';
import EnquiryModal from './EnquiryModal';
import DownloadModal from './DownloadModal';

// Individual Button Components
export const EnquireNowButton = ({ 
  className = "", 
  size = "lg",
  variant = "primary",
  displayVariant = "default", // "default" or "sidebar"
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

  // Sidebar specific styling
  if (displayVariant === "sidebar") {
    return (
      <>
        <button 
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-purple-500/80 to-violet-500/80 hover:from-purple-500 hover:to-violet-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-purple-500/25 transform hover:scale-[1.02] border border-purple-400/20 backdrop-blur-sm"
        >
          {children}
        </button>
        
        <EnquiryModal
          isOpen={showEnquiryModal}
          onClose={() => setShowEnquiryModal(false)}
          courseName={courseName}
        />
      </>
    );
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
    secondary: "border border-purple-400/60 hover:bg-purple-400/10 text-purple-300 hover:text-white hover:border-purple-300"
  };

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
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
  displayVariant = "default", // "default" or "sidebar"
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

  // Sidebar specific styling
  if (displayVariant === "sidebar") {
    return (
      <>
        <button 
          onClick={handleClick}
          className="w-full bg-violet-500/20 border border-violet-400/40 hover:bg-violet-400/25 hover:border-violet-400/60 text-violet-200 hover:text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] backdrop-blur-sm"
        >
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
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white",
    secondary: "border border-pink-400/60 hover:bg-pink-400/10 text-pink-300 hover:text-white hover:border-pink-300"
  };

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
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
  courseName = "Course",
  children = "Join Now"
}) => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Open enquiry modal instead of redirecting
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
    primary: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-orange-500/30 hover:scale-105",
    secondary: "border border-orange-400/60 hover:bg-orange-400/10 text-orange-300 hover:text-white hover:border-orange-300"
  };

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <button 
        onClick={handleClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        <ArrowRight className="w-5 h-5 animate-pulse" />
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

export const CallNowButton = ({ 
  className = "", 
  size = "lg",
  variant = "secondary",
  phoneNumber = "+91-9032734343",
  onClick,
  children = "Call +91-9032734343"
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
    secondary: "border border-pink-400/60 hover:bg-pink-400/10 text-pink-300 hover:text-white hover:border-pink-300 shadow-lg hover:shadow-pink-400/20"
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Phone className="w-5 h-5 animate-bounce" />
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
  variant = "default", // "default" or "sidebar"
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
          displayVariant={variant}
          courseName={courseName}
          onClick={onEnquireNow}
        />
      )}
      
      {showDownload && (
        <DownloadCourseButton 
          size={size}
          displayVariant={variant}
          courseName={courseName}
          downloadUrl={downloadUrl}
          onClick={onDownload}
        />
      )}
      
      {showJoinNow && (
        <JoinNowButton 
          size={size}
          courseName={courseName}
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

// Export CourseActionButtons as default and others as named exports
export default CourseActionButtons;
