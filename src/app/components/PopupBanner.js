'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

const PopupBanner = ({ imageUrl, bannerUrl, delay = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show popup every time component mounts (every page visit)
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleBannerClick = () => {
    if (bannerUrl) {
      window.open(bannerUrl, '_blank');
      closePopup();
    }
  };

  if (!isVisible || !imageUrl) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-lg w-full max-h-[80vh] overflow-hidden pointer-events-auto transform transition-all duration-500 ease-out scale-95 hover:scale-100">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-600 rounded-full p-1.5 shadow-lg transition-all duration-200 border border-red-400"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Image container */}
        <div 
          className={`relative w-full h-64 md:h-80 overflow-hidden ${bannerUrl ? 'cursor-pointer' : ''}`}
          onClick={bannerUrl ? handleBannerClick : undefined}
        >
          <Image
            src={imageUrl}
            alt="VR IT Solutions Banner"
            fill
            className="object-cover rounded-t-2xl transform transition-transform duration-3000 hover:scale-105 animate-pulse"
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>

        {/* Content section */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Transform Your Career with VR IT Solutions</h3>
          <p className="text-sm text-gray-600 leading-relaxed">Join thousands of professionals who have advanced their careers with our industry-leading training programs.</p>
          
          {/* Action button */}
          <Link href={bannerUrl || "/courses"} onClick={closePopup}>
            <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm">
              {bannerUrl ? "Learn More" : "Explore Courses"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
