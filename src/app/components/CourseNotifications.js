'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, MapPin, GraduationCap } from 'lucide-react';

// Sample names and locations for fake notifications (outside component to avoid re-renders)
const sampleNames = [
  'Rahul S.', 'Priya M.', 'Arjun K.', 'Sneha P.', 'Vikram R.',
  'Anita D.', 'Kiran T.', 'Meera L.', 'Rajesh B.', 'Divya G.',
  'Suresh Y.', 'Kavya N.', 'Arun C.', 'Pooja V.', 'Manoj H.',
  'Ritu S.', 'Deepak A.', 'Lakshmi K.', 'Rohit M.', 'Nisha R.',
  'Amit P.', 'Swathi B.', 'Naveen K.', 'Aparna S.', 'Sanjay M.',
  'Priyanka J.', 'Vinay T.', 'Haritha L.', 'Chetan R.', 'Vani G.',
  'Mohan D.', 'Shweta A.', 'Karthik P.', 'Revathi S.', 'Nikhil B.',
  'Madhuri K.', 'Akash M.', 'Smitha J.', 'Ravi N.', 'Gayatri L.',
  'Sai K.', 'Bhavani R.', 'Ramesh T.', 'Sindhu G.', 'Prasad V.',
  'Keerthi M.', 'Vivek S.', 'Archana B.', 'Naresh C.', 'Yamini P.',
  'Satish R.', 'Padma K.', 'Kishore M.', 'Shilpa D.', 'Raj A.',
  'Sowmya T.', 'Ganesh L.', 'Jyothi S.', 'Varun R.', 'Swetha N.'
];

const sampleLocations = [
  'Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi',
  'Pune', 'Kolkata', 'Ahmedabad', 'Noida', 'Gurgaon',
  'Vijayawada', 'Visakhapatnam', 'Coimbatore', 'Kochi', 'Indore',
  'Nagpur', 'Surat', 'Jaipur', 'Lucknow', 'Bhopal'
];

const CourseNotifications = ({ courseName }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationId, setNotificationId] = useState(0);
  const [usedNames, setUsedNames] = useState(new Set());

  // Function to generate a random notification
  const generateNotification = useCallback(() => {
    // Get available names (not recently used)
    const availableNames = sampleNames.filter(name => !usedNames.has(name));
    
    // If all names are used, reset the used names set
    if (availableNames.length === 0) {
      setUsedNames(new Set());
      availableNames.push(...sampleNames);
    }
    
    const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
    const randomLocation = sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
    const timeAgo = Math.floor(Math.random() * 15) + 1; // 1-15 minutes ago
    
    // Add name to used names
    setUsedNames(prev => new Set([...prev, randomName]));
    
    return {
      id: notificationId,
      name: randomName,
      location: randomLocation,
      timeAgo: timeAgo,
      courseName: courseName,
      createdAt: Date.now() // Add timestamp for auto-removal
    };
  }, [courseName, notificationId, usedNames]);

  // Function to add a new notification
  const addNotification = useCallback(() => {
    // Only add a new notification if there are no current notifications
    setNotifications(prev => {
      if (prev.length > 0) return prev; // Don't add if notifications already exist
      
      const newNotification = generateNotification();
      return [newNotification];
    });
    setNotificationId(prev => prev + 1);
  }, [generateNotification]);

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Auto-remove expired notifications every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setNotifications(prev => 
        prev.filter(notification => now - notification.createdAt < 8000) // Remove after 8 seconds
      );
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  // Generate notifications every 18 seconds (8s display + 10s gap)
  useEffect(() => {
    // Generate first notification after 10 seconds
    const initialTimer = setTimeout(() => {
      addNotification();
    }, 10000); // First notification after 10 seconds

    // Then generate notifications every 18 seconds
    const intervalTimer = setInterval(() => {
      addNotification();
    }, 18000); // 18 seconds (8s display + 10s gap)

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
    }, [courseName, addNotification]);  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white p-4 rounded-xl shadow-2xl border border-green-400/40 backdrop-blur-sm animate-in slide-in-from-left duration-700 max-w-sm transform hover:scale-105 transition-all"
          style={{
            animationDelay: `${index * 100}ms`,
            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 flex-1">
              <div className="bg-white/25 rounded-full p-2.5 flex-shrink-0 animate-pulse">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="font-bold text-sm text-white">{notification.name}</span>
                  <span className="text-green-100 text-xs font-medium">just enrolled!</span>
                </div>
                <div className="font-semibold text-sm text-green-50 mb-2 line-clamp-2 leading-tight">
                  {notification.courseName}
                </div>
                <div className="flex items-center space-x-1 text-xs text-green-200">
                  <MapPin className="w-3 h-3" />
                  <span className="font-medium">{notification.location}</span>
                  <span>•</span>
                  <span>{notification.timeAgo}m ago</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-green-200 hover:text-white transition-colors flex-shrink-0 ml-2 opacity-70 hover:opacity-100"
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
      ))}
      
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
