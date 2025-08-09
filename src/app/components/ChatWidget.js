'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);

  useEffect(() => {
    let checkInterval;
    let isComponentMounted = true;

    // Function to check if Tawk.to is fully loaded
    const checkTawkLoaded = () => {
      if (typeof window !== 'undefined' && 
          window.Tawk_API && 
          typeof window.Tawk_API.showWidget === 'function' &&
          typeof window.Tawk_API.maximize === 'function') {
        
        if (isComponentMounted) {
          setIsTawkLoaded(true);
          console.log('Tawk.to widget loaded and verified successfully');
        }
        
        // Set up Tawk.to event handlers only once
        if (!window.Tawk_API._handlersSet) {
          window.Tawk_API.onLoad = function() {
            console.log('Tawk.to widget onLoad event triggered');
            // Hide the default widget initially
            if (typeof window.Tawk_API.hideWidget === 'function') {
              window.Tawk_API.hideWidget();
            }
          };

          window.Tawk_API.onChatStarted = function() {
            console.log('Tawk.to chat started');
            if (isComponentMounted) {
              setIsVisible(false);
            }
          };

          window.Tawk_API.onChatEnded = function() {
            console.log('Tawk.to chat ended');
          };

          window.Tawk_API.onError = function(error) {
            console.error('Tawk.to error:', error);
          };

          // Mark handlers as set
          window.Tawk_API._handlersSet = true;
        }

        return true;
      }
      return false;
    };

    // Try to check immediately
    if (checkTawkLoaded()) {
      return;
    }

    // Listen for the custom tawkLoaded event from layout.js
    const handleTawkLoaded = () => {
      console.log('Received tawkLoaded event');
      setTimeout(() => {
        if (isComponentMounted) {
          checkTawkLoaded();
        }
      }, 100);
    };

    // Set up event listener for when Tawk.to loads
    if (typeof window !== 'undefined') {
      window.addEventListener('tawkLoaded', handleTawkLoaded);
    }

    // If not loaded, set up interval to check periodically (fallback)
    checkInterval = setInterval(() => {
      if (checkTawkLoaded()) {
        clearInterval(checkInterval);
      }
    }, 500);

    // Cleanup
    return () => {
      isComponentMounted = false;
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('tawkLoaded', handleTawkLoaded);
      }
    };
  }, []);

  const openChat = () => {
    console.log('Chat button clicked, isTawkLoaded:', isTawkLoaded);
    
    if (isTawkLoaded && window.Tawk_API) {
      try {
        // Check if functions exist before calling them
        if (typeof window.Tawk_API.showWidget === 'function') {
          window.Tawk_API.showWidget();
          console.log('Tawk.to widget shown');
        } else {
          throw new Error('showWidget function not available');
        }
        
        // Small delay before maximizing to ensure widget is shown
        setTimeout(() => {
          try {
            if (typeof window.Tawk_API.maximize === 'function') {
              window.Tawk_API.maximize();
              console.log('Tawk.to chat maximized');
            } else if (typeof window.Tawk_API.toggle === 'function') {
              window.Tawk_API.toggle();
              console.log('Tawk.to chat toggled');
            }
          } catch (error) {
            console.error('Error maximizing Tawk.to chat:', error);
          }
        }, 200);
        
        console.log('Tawk.to chat opened successfully');
      } catch (error) {
        console.error('Error opening Tawk.to chat:', error);
        // Fallback to contact options
        setIsVisible(true);
      }
    } else {
      console.log('Tawk.to not loaded, showing fallback contact options');
      // Fallback: show contact options
      setIsVisible(true);
    }
  };

  const closeWidget = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Custom Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openChat}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Open chat support"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
          
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isTawkLoaded ? 'Chat with us for instant support!' : 'Contact us for support!'}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </div>
      </div>

      {/* Fallback Contact Widget */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 w-80 max-w-[calc(100vw-2rem)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">Contact Us</h3>
            <button
              onClick={closeWidget}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-slate-600 mb-4 text-sm">
            {!isTawkLoaded ? 
              "Chat is loading... Contact us directly:" : 
              "Get in touch with us:"}
          </p>
          
          <div className="space-y-3">
            <a
              href="tel:+919032734343"
              className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-slate-800">Call Us</p>
                <p className="text-sm text-slate-600">+91-9032734343</p>
              </div>
            </a>
            
            <a
              href="mailto:info@vritsol.com"
              className="flex items-center space-x-3 p-3 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5 text-teal-600" />
              <div>
                <p className="font-medium text-slate-800">Email Us</p>
                <p className="text-sm text-slate-600">info@vritsol.com</p>
              </div>
            </a>
            
            <a
              href="https://wa.me/919032734343?text=Hi%2C%20I%27m%20interested%20in%20your%20training%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
            >
              <div className="w-5 h-5 text-green-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-800">WhatsApp</p>
                <p className="text-sm text-slate-600">Quick message</p>
              </div>
            </a>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Available Mon-Sat, 9AM-7PM IST
            </p>
          </div>
        </div>
      )}
    </>
  );
}
