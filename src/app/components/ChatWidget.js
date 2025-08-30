'use client';

import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget() {
  const tawkMessengerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Tawk.to callback functions
  const onLoad = () => {
    console.log('Tawk.to widget loaded successfully!');
  };

  const onBeforeLoad = () => {
    console.log('Tawk.to widget preparing to load...');
  };

  const onStatusChange = (status) => {
    console.log('Tawk.to status changed:', status);
  };

  const onChatStarted = () => {
    console.log('Chat started!');
    setIsVisible(false); // Hide our contact widget when chat starts
  };

  const onChatEnded = () => {
    console.log('Chat ended!');
  };

  const onChatMessageSystem = (message) => {
    console.log('System message received:', message);
  };

  const onChatMessageVisitor = (message) => {
    console.log('Visitor message received:', message);
  };

  const onUnreadCountChanged = (count) => {
    console.log('Unread count changed:', count);
  };

  const onChatMaximized = () => {
    console.log('Chat maximized!');
  };

  const onChatMinimized = () => {
    console.log('Chat minimized!');
  };

  // Function to maximize the chat widget using the React component ref
  const handleMaximizeChat = () => {
    console.log('=== DEBUG: handleMaximizeChat called ===');
    console.log('tawkMessengerRef.current:', tawkMessengerRef.current);
    
    try {
      if (tawkMessengerRef.current) {
        console.log('DEBUG: About to call tawkMessengerRef.current.maximize()');
        tawkMessengerRef.current.maximize();
        console.log('DEBUG: Chat maximized using React ref successfully');
      } else {
        console.log('DEBUG: Tawk messenger ref not available, showing contact options');
        setIsVisible(true);
      }
    } catch (error) {
      console.error('DEBUG: Error maximizing chat:', error);
      console.error('DEBUG: Error stack:', error.stack);
      setIsVisible(true);
    }
  };

  // Function to show contact options
  const _openContactOptions = () => {
    setIsVisible(true);
  };

  const closeWidget = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Official Tawk.to React Component */}
      <TawkMessengerReact
        propertyId="5cef5effb534676f32ac84a7"
        widgetId="default"
        ref={tawkMessengerRef}
        onLoad={onLoad}
        onBeforeLoad={onBeforeLoad}
        onStatusChange={onStatusChange}
        onChatStarted={onChatStarted}
        onChatEnded={onChatEnded}
        onChatMaximized={onChatMaximized}
        onChatMinimized={onChatMinimized}
        onChatMessageSystem={onChatMessageSystem}
        onChatMessageVisitor={onChatMessageVisitor}
        onUnreadCountChanged={onUnreadCountChanged}
      />

      {/* Contact Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-2">
        {/* Phone Button (Top) */}
        <div className="relative group">
          <a
            href="tel:+919032734343"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Call us directly"
            style={{width: '60px', height: '60px'}}
          >
            <Phone className="w-6 h-6" />
          </a>

          {/* Tooltip for phone button */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Click to call: +91-9032734343
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>

        {/* Chat Button (Bottom) */}
        <div className="relative group">
          <button
            onClick={handleMaximizeChat}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
            aria-label="Open chat support"
            style={{width: '55px', height: '55px'}}
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
            
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
          </button>

          {/* Tooltip for chat button */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat with us for instant support!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>

      {/* Fallback Contact Widget */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6" style={{width: '280px', height: '330px'}}>
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
            Ready to advance your IT career? Contact our training experts:
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
