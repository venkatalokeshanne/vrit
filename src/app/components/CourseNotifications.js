'use client';

import { useState, useEffect } from 'react';
import { X, MapPin, GraduationCap, Trophy } from 'lucide-react';
import { fetchCourseNotifications } from '../lib/sanity';

const CourseNotifications = ({ courseName }) => {
  const [notifications, setNotifications] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCourseNotifications()
      .then((data) => {
        console.log('Fetched notifications from Sanity:', data);
        console.log('Number of notifications:', data?.length || 0);
        setNotifications(data || []);
      })
      .catch((error) => {
        console.error('Failed to fetch notifications from Sanity:', error);
        setNotifications([]); // No fallback - empty array
      });
  }, []);

  useEffect(() => {
    if (!notifications.length) return;
    console.log('Notifications cycle - total:', notifications.length, 'current index:', visibleIndex, 'show:', show);
    let showTimeout, hideTimeout;

    // Always show the notification after 2 seconds if not already showing
    if (!show) {
      showTimeout = setTimeout(() => {
        console.log('Setting show to true for notification:', visibleIndex);
        setShow(true);
      }, 2000);
    }

    // Hide after 8 seconds if currently showing
    if (show) {
      hideTimeout = setTimeout(() => {
        console.log('Hiding notification and moving to next');
        setShow(false);
        setTimeout(() => {
          setVisibleIndex((prev) => (prev + 1) % notifications.length);
        }, 2000);
      }, 8000);
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [show, visibleIndex, notifications.length]);

  const removeNotification = () => {
    setShow(false);
    setTimeout(() => {
      setVisibleIndex((prev) => (prev + 1) % notifications.length);
    }, 500);
  };

  if (!notifications.length) return (
    <div className="fixed bottom-4 left-4 z-50 bg-red-100 text-red-800 p-2 rounded">
      No notifications loaded
    </div>
  );

  const notification = notifications[visibleIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3">
      {/* Debug info - always visible */}
      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">
        Total: {notifications.length} | Current: {visibleIndex + 1} | Show: {show ? 'YES' : 'NO'}
      </div>
      
      {show && (
        <div
          key={notification._id}
          className={
            notification.type === 'placed'
              ? 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-200 text-black p-4 rounded-xl shadow-2xl border border-yellow-300/60 backdrop-blur-sm animate-in slide-in-from-left duration-700 max-w-sm transform hover:scale-105 transition-all'
              : 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white p-4 rounded-xl shadow-2xl border border-green-400/40 backdrop-blur-sm animate-in slide-in-from-left duration-700 max-w-sm transform hover:scale-105 transition-all'
          }
          style={{
            boxShadow: notification.type === 'placed'
              ? '0 10px 25px rgba(251, 191, 36, 0.3)'
              : '0 10px 25px rgba(16, 185, 129, 0.3)'
          }}
        >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className={notification.type === 'placed' ? 'bg-yellow-100 rounded-full p-2.5 flex-shrink-0 animate-pulse' : 'bg-white/25 rounded-full p-2.5 flex-shrink-0 animate-pulse'}>
              {notification.type === 'placed' ? (
                <Trophy className="w-5 h-5 text-black" />
              ) : (
                <GraduationCap className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 mb-1">
                <span className={notification.type === 'placed' ? 'font-bold text-sm text-black' : 'font-bold text-sm text-white'}>{notification.name}</span>
                {notification.type === 'placed' ? (
                  <span className="text-black text-xs font-medium"> placed!</span>
                ) : (
                  <span className="text-green-100 text-xs font-medium"> enrolled!</span>
                )}
              </div>
              {notification.type === 'placed' ? (
                <div className="font-semibold text-sm text-black mb-2 leading-tight">
                  {notification.message || "Congratulations on your new job offer!"}
                </div>
              ) : (
                <div className="font-semibold text-sm text-green-50 mb-2 line-clamp-2 leading-tight">
                  {(() => {
                    let title = notification.course?.title || notification.course?.courseName || courseName
                    const courseSlug = notification.course?.slug?.current
                    
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
                          target="_blank"
                          rel="noopener noreferrer"
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
              <div className={notification.type === 'placed' ? 'flex items-center space-x-1 text-xs text-black' : 'flex items-center space-x-1 text-xs text-green-200'}>
                <MapPin className={notification.type === 'placed' ? 'w-3 h-3 text-black' : 'w-3 h-3'} />
                <span className="font-medium">{notification.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={removeNotification}
            className={notification.type === 'placed' ? 'text-black hover:text-orange-600 transition-colors flex-shrink-0 ml-2 opacity-70 hover:opacity-100' : 'text-green-200 hover:text-white transition-colors flex-shrink-0 ml-2 opacity-70 hover:opacity-100'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Progress bar for auto-dismiss */}
        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/60 rounded-full animate-shrink"
            style={{
              animation: 'shrink 8s linear forwards'
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
          animation: shrink 8s linear forwards;
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