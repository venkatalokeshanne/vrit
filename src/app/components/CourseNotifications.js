'use client';

import { useState, useEffect } from 'react';
import { X, MapPin, GraduationCap, Trophy } from 'lucide-react';
import { fetchCourseNotifications } from '../lib/sanity';

const CourseNotifications = ({ courseName }) => {
  const [notifications, setNotifications] = useState([]);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchCourseNotifications()
      .then((data) => {
        console.log('Raw Sanity data:', data);
        
        if (data && data.length > 0) {
          setNotifications(data);
          console.log('✅ Fetched notifications:', data.length);
          console.log('📊 Notification types:', data.map(n => ({ type: n.type, name: n.name })));
        } else {
          console.log('⚠️ No notifications found in Sanity, using test data');
          // Fallback test data for development
          const testNotifications = [
            {
              _id: 'test1',
              name: 'John Doe',
              location: 'Hyderabad',
              type: 'placed',
              message: 'Got placed at TCS with 8 LPA package!'
            },
            {
              _id: 'test2',
              name: 'Jane Smith', 
              location: 'Bangalore',
              type: 'enrolled',
              course: { title: 'React Development', slug: { current: 'react-course' } }
            }
          ];
          setNotifications(testNotifications);
        }
      })
      .catch((error) => {
        console.error('❌ Failed to fetch notifications from Sanity:', error);
        console.log('🔄 Using fallback test data');
        // Fallback test data in case of error
        const fallbackNotifications = [
          {
            _id: 'fallback1',
            name: 'Alex Johnson',
            location: 'Chennai',
            type: 'placed',
            message: 'Successfully placed at Infosys!'
          },
          {
            _id: 'fallback2',
            name: 'Sarah Wilson',
            location: 'Mumbai', 
            type: 'enrolled',
            course: { title: 'Python Full Stack', slug: { current: 'python-course' } }
          }
        ];
        setNotifications(fallbackNotifications);
      });
  }, []);

  useEffect(() => {
    if (!notifications.length) {
      console.log('⏸️ No notifications to show');
      return;
    }

    console.log('🚀 Starting notification system with', notifications.length, 'notifications');
    
    let showTimeout;
    let hideTimeout;
    let nextTimeout;

    const startNotificationCycle = () => {
      // Show current notification
      console.log('👁️ Showing notification:', currentNotificationIndex + 1, '/', notifications.length);
      setIsVisible(true);
      
      // Hide after 5 seconds
      hideTimeout = setTimeout(() => {
        console.log('👋 Hiding notification');
        setIsVisible(false);
        
        // Move to next notification after 30 seconds
        nextTimeout = setTimeout(() => {
          console.log('➡️ Moving to next notification');
          setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length);
        }, 30000);
      }, 5000);
    };

    // Start first notification after 5 seconds
    console.log('⏰ Waiting 5 seconds before first notification');
    showTimeout = setTimeout(startNotificationCycle, 5000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);  
      clearTimeout(nextTimeout);
    };
  }, [notifications, currentNotificationIndex]);

  const handleClose = () => {
    setIsVisible(false);
    // Move to next notification immediately when manually closed
    setTimeout(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length);
    }, 500);
  };

  // Don't render if no notifications
  if (!notifications.length) {
    return null;
  }

  const currentNotification = notifications[currentNotificationIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3">
      
      {isVisible && currentNotification && (
        <div
          key={`notification-${currentNotificationIndex}`}
          className={
            currentNotification.type === 'placed'
              ? 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-200 text-black p-4 rounded-xl shadow-2xl border border-yellow-300/60 backdrop-blur-sm animate-in slide-in-from-left duration-700 max-w-sm transform hover:scale-105 transition-all'
              : 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white p-4 rounded-xl shadow-2xl border border-green-400/40 backdrop-blur-sm animate-in slide-in-from-left duration-700 max-w-sm transform hover:scale-105 transition-all'
          }
          style={{
            boxShadow: currentNotification.type === 'placed'
              ? '0 10px 25px rgba(251, 191, 36, 0.3)'
              : '0 10px 25px rgba(16, 185, 129, 0.3)'
          }}
        >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className={currentNotification.type === 'placed' ? 'bg-yellow-100 rounded-full p-2.5 flex-shrink-0 animate-pulse' : 'bg-white/25 rounded-full p-2.5 flex-shrink-0 animate-pulse'}>
              {currentNotification.type === 'placed' ? (
                <Trophy className="w-5 h-5 text-black" />
              ) : (
                <GraduationCap className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 mb-1">
                <span className={currentNotification.type === 'placed' ? 'font-bold text-sm text-black' : 'font-bold text-sm text-white'}>{currentNotification.name}</span>
                {currentNotification.type === 'placed' ? (
                  <span className="text-black text-xs font-medium"> placed!</span>
                ) : (
                  <span className="text-green-100 text-xs font-medium"> enrolled!</span>
                )}
              </div>
              {currentNotification.type === 'placed' ? (
                <div className="font-semibold text-sm text-black mb-2 leading-tight">
                  {currentNotification.message || "Congratulations on your new job offer!"}
                </div>
              ) : (
                <div className="font-semibold text-sm text-green-50 mb-2 line-clamp-2 leading-tight">
                  {(() => {
                    let title = currentNotification.course?.title || currentNotification.course?.courseName || courseName
                    const courseSlug = currentNotification.course?.slug?.current
                    
                    // Apply same cleaning logic as in add-testimonial page
                    title = title?.split('|')[0]?.trim()
                    
                    // Remove "Training" and "Online" and everything after them
                    const trainingIndex = title?.toLowerCase().indexOf('training')
                    const onlineIndex = title?.toLowerCase().indexOf('online')
                    
                    let cutIndex = -1
                    if (trainingIndex !== -1 && onlineIndex !== -1) {
                      cutIndex = Math.min(trainingIndex, onlineIndex)
                    } else if (trainingIndex !== -1) {
                      cutIndex = trainingIndex
                    } else if (onlineIndex !== -1) {
                      cutIndex = onlineIndex
                    }
                    
                    if (cutIndex !== -1) {
                      title = title.substring(0, cutIndex).trim()
                    }
                    
                    const cleanTitle = title?.toUpperCase()
                    
                    return courseSlug ? (
                      <span>
                        Started learning{' '}
                        <a 
                          href={`/${courseSlug}`}
                          className="underline hover:text-white transition-colors cursor-pointer text-yellow-200 font-bold"
                        >
                          {cleanTitle} →
                        </a>
                        {' '}and loving it!
                      </span>
                    ) : (
                      `Started learning ${cleanTitle} and loving it!`
                    )
                  })()}
                </div>
              )}
              <div className={currentNotification.type === 'placed' ? 'flex items-center space-x-1 text-xs text-black' : 'flex items-center space-x-1 text-xs text-green-200'}>
                <MapPin className={currentNotification.type === 'placed' ? 'w-3 h-3 text-black' : 'w-3 h-3'} />
                <span className="font-medium">{currentNotification.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className={currentNotification.type === 'placed' ? 'text-black hover:text-orange-600 transition-colors flex-shrink-0 ml-2 opacity-70 hover:opacity-100' : 'text-green-200 hover:text-white transition-colors flex-shrink-0 ml-2 opacity-70 hover:opacity-100'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Progress bar for auto-dismiss */}
        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/60 rounded-full animate-shrink"
            style={{
              animation: 'shrink 5s linear forwards'
            }}
          />
        </div>
      </div>
      )}
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-shrink {
          animation: shrink 5s linear forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CourseNotifications;