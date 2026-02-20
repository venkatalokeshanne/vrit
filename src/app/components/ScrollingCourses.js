'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Clock, Award, TrendingUp } from 'lucide-react';

const ScrollingCourses = () => {
  const courses = [
    { title: "ServiceNow Training", slug: "servicenow-training-in-hyderabad", color: "from-blue-500 to-cyan-500", rating: 4.9, students: 2134, duration: "60 days", badge: "Popular" },
    { title: "Salesforce Training", slug: "salesforce-training-in-hyderabad", color: "from-green-500 to-teal-500", rating: 4.7, students: 3456, duration: "45 days", badge: "Hot" },
    { title: "SAP FICO Training", slug: "sap-fico-online-training-in-hyderabad", color: "from-purple-500 to-pink-500", rating: 4.6, students: 1987, duration: "120 days", badge: "Trending" },
    { title: "Azure DevOps Training", slug: "azure-devops-training-in-hyderabad", color: "from-indigo-500 to-purple-500", rating: 4.9, students: 2456, duration: "50 days", badge: "Popular" },
    { title: "Data Science", slug: "data-science-training-in-hyderabad", color: "from-orange-500 to-red-500", rating: 4.8, students: 3241, duration: "120 days", badge: "Hot" },
    { title: "Python Training", slug: "python-online-training", color: "from-yellow-500 to-orange-500", rating: 4.8, students: 5432, duration: "45 days", badge: "Popular" },
    { title: "Full Stack Developer", slug: "full-stack-developer-training-in-hyderabad", color: "from-indigo-500 to-blue-500", rating: 4.9, students: 4567, duration: "120 days", badge: "Hot" },
    { title: "DevOps Training", slug: "devops-training-in-hyderabad", color: "from-teal-500 to-cyan-500", rating: 4.9, students: 2765, duration: "75 days", badge: "Popular" },
    { title: "Google Cloud", slug: "google-cloud-training-in-hyderabad", color: "from-blue-500 to-green-500", rating: 4.6, students: 1432, duration: "70 days", badge: "Hot" },
    { title: "Machine Learning", slug: "machine-learning-with-python-training-in-hyderabad", color: "from-blue-500 to-purple-500", rating: 4.8, students: 2890, duration: "90 days", badge: "Hot" }
  ];

  // Duplicate the courses array for seamless scrolling
  const duplicatedCourses = [...courses, ...courses];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Popular': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'Hot': return 'bg-gradient-to-r from-red-500 to-orange-500 text-white';
      case 'Trending': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'New': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'Popular': return <TrendingUp className="w-3 h-3" />;
      case 'Hot': return <Star className="w-3 h-3" />;
      case 'Trending': return <ArrowRight className="w-3 h-3" />;
      case 'New': return <Award className="w-3 h-3" />;
      default: return <Star className="w-3 h-3" />;
    }
  };

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <div className="inline-block">
            <span className="px-2 py-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-400/30 rounded-full text-orange-600 text-xs font-medium mb-2 inline-block">
              🚀 Transform Your Career
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Popular Courses
            </span>
          </h2>
        </div>
        
        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Scrolling Animation */}
          <div className="flex animate-scroll-infinite hover:animate-scroll-paused whitespace-nowrap" style={{ width: 'max-content' }}>
            {duplicatedCourses.map((course, index) => (
              <div
                key={`${course.slug}-${index}`}
                className="flex-shrink-0 mx-2 w-64 inline-block"
              >
                <Link href={`/${course.slug}`}>
                  <div className="group relative bg-gradient-to-br from-white/80 via-white/90 to-white/80 backdrop-blur-xl rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden cursor-pointer h-full">
                    
                    {/* Badge */}
                    <div className="absolute top-2 right-2 z-10">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg ${getBadgeColor(course.badge)}`}>
                        {getBadgeIcon(course.badge)}
                        {course.badge}
                      </span>
                    </div>
                    
                    {/* Course Header */}
                    <div className={`p-4 bg-gradient-to-br ${course.color.replace('from-', 'from-').replace(' to-', '/20 to-')}/20 border-b border-gray-200 relative`}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color} opacity-60"></div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                        {course.title}
                      </h3>
                      
                      {/* Course Meta */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 rounded-full">
                          <Clock className="w-3 h-3 text-blue-600" />
                          <span className="text-xs text-gray-700 font-medium">{course.duration}</span>
                        </div>
                      </div>
                      
                      {/* Course Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200">
                          <Star className="w-3 h-3 text-yellow-600 fill-current" />
                          <span className="text-xs font-bold text-yellow-700">{course.rating}</span>
                          <span className="text-xs text-gray-600">rating</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg border border-blue-200">
                          <Users className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-bold text-blue-700">{course.students.toLocaleString()}</span>
                          <span className="text-xs text-gray-600">students</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Footer */}
                    <div className="p-4 relative">
                      <div className="flex items-center justify-between group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div>
                          <span className="text-sm font-semibold text-gray-900 mb-1 block">View Course Details</span>
                          <span className="text-xs text-gray-600">Start your journey today</span>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                          <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Decorative bottom line */}
                      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${courses.length}));
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 60s linear infinite;
          width: calc(250px * ${duplicatedCourses.length});
        }
        
        .animate-scroll-paused:hover {
          animation-play-state: paused;
        }
        
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
        
        /* Hover effects for course cards */
        .group:hover .course-card-bg {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(59, 130, 246, 0.1));
        }
        
        /* Smooth scrolling on mobile */
        @media (max-width: 768px) {
          .animate-scroll-infinite {
            animation: scroll-infinite 40s linear infinite;
          }
        }
        
        /* Performance optimizations */
        .animate-scroll-infinite {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
          contain: layout paint;
        }
      `}</style>
    </section>
  );
};

export default ScrollingCourses;
