'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Clock, Award, TrendingUp } from 'lucide-react';

const ScrollingCourses = () => {
  const courses = [
    { title: "ServiceNow Training", slug: "servicenow-training-in-hyderabad", color: "from-blue-500 to-cyan-500", rating: 4.9, students: 2134, duration: "60 days", badge: "Popular" },
    { title: "Salesforce Training", slug: "salesforce-training-in-hyderabad", color: "from-green-500 to-teal-500", rating: 4.7, students: 3456, duration: "45 days", badge: "Hot" },
    { title: "SAP FICO Training", slug: "sap-fico-online-training-in-hyderabad", color: "from-purple-500 to-pink-500", rating: 4.6, students: 1987, duration: "120 days", badge: "Trending" },
    { title: "Pega Training", slug: "pega-training-in-hyderabad", color: "from-pink-500 to-rose-500", rating: 4.8, students: 1543, duration: "75 days", badge: "New" },
    { title: "Azure DevOps Training", slug: "azure-devops-training-in-hyderabad", color: "from-indigo-500 to-purple-500", rating: 4.9, students: 2456, duration: "50 days", badge: "Popular" },
    { title: "MuleSoft Training", slug: "mulesoft-training-in-hyderabad", color: "from-orange-500 to-red-500", rating: 4.7, students: 1876, duration: "40 days", badge: "Hot" },
    { title: "SAS Clinical Training", slug: "sas-clinical-online-training-in-hyderabad", color: "from-blue-500 to-indigo-500", rating: 4.6, students: 1234, duration: "90 days", badge: "Trending" },
    { title: "SAP Basis Training", slug: "sap-basis-online-training", color: "from-orange-500 to-red-500", rating: 4.5, students: 987, duration: "70 days", badge: "New" },
    { title: "SAP EWM Training", slug: "sap-ewm-online-training", color: "from-yellow-500 to-orange-500", rating: 4.7, students: 1345, duration: "80 days", badge: "Popular" },
    { title: "SAP HANA Admin", slug: "sap-hana-admin-training", color: "from-purple-600 to-pink-600", rating: 4.8, students: 1567, duration: "65 days", badge: "Hot" },
    { title: "S/4 HANA Finance", slug: "simple-finance-training-in-hyderabad", color: "from-blue-600 to-cyan-600", rating: 4.9, students: 1789, duration: "85 days", badge: "Trending" },
    { title: "SAP Leonardo", slug: "sap-leonardo-training-hyderabad", color: "from-green-600 to-teal-600", rating: 4.6, students: 945, duration: "55 days", badge: "New" },
    { title: "SAP Security", slug: "sap-security-training", color: "from-red-600 to-pink-600", rating: 4.7, students: 1123, duration: "60 days", badge: "Popular" },
    { title: "Data Science", slug: "data-science-training-in-hyderabad", color: "from-orange-500 to-red-500", rating: 4.8, students: 3241, duration: "120 days", badge: "Hot" },
    { title: "Python Training", slug: "python-online-training", color: "from-yellow-500 to-orange-500", rating: 4.8, students: 5432, duration: "45 days", badge: "Popular" },
    { title: "Python With AWS", slug: "python-with-aws-training", color: "from-green-500 to-blue-500", rating: 4.7, students: 2876, duration: "60 days", badge: "Trending" },
    { title: "Workday Training", slug: "workday-training-in-hyderabad", color: "from-purple-500 to-pink-500", rating: 4.7, students: 1654, duration: "50 days", badge: "New" },
    { title: "Machine Learning", slug: "machine-learning-with-python-training-in-hyderabad", color: "from-blue-500 to-purple-500", rating: 4.8, students: 2890, duration: "90 days", badge: "Hot" },
    { title: "DevOps Training", slug: "devops-training-in-hyderabad", color: "from-teal-500 to-cyan-500", rating: 4.9, students: 2765, duration: "75 days", badge: "Popular" },
    { title: "Informatica MDM", slug: "informatica-mdm-training", color: "from-pink-500 to-red-500", rating: 4.6, students: 1234, duration: "65 days", badge: "Trending" },
    { title: "Full Stack Developer", slug: "full-stack-developer-training-in-hyderabad", color: "from-indigo-500 to-blue-500", rating: 4.9, students: 4567, duration: "120 days", badge: "Hot" },
    { title: "EDI Training", slug: "edi-training", color: "from-emerald-500 to-teal-500", rating: 4.5, students: 987, duration: "40 days", badge: "New" },
    { title: "Hadoop Training", slug: "hadoop-online-training", color: "from-orange-600 to-yellow-600", rating: 4.7, students: 2143, duration: "80 days", badge: "Popular" },
    { title: "Snowflake Training", slug: "snowflake-training-in-hyderabad", color: "from-cyan-500 to-blue-500", rating: 4.7, students: 1876, duration: "55 days", badge: "Trending" },
    { title: "Google Cloud", slug: "google-cloud-training", color: "from-blue-500 to-green-500", rating: 4.6, students: 1432, duration: "70 days", badge: "Hot" }
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-4 inline-block">
              🚀 Transform Your Career
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Popular Courses
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who transformed their careers with our industry-leading training programs
          </p>
          <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Online Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>100% Placement Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span>Industry Expert Trainers</span>
            </div>
          </div>
        </div>
        
        {/* Scrolling Container */}
        <div className="relative">
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Scrolling Animation */}
          <div className="flex animate-scroll-infinite hover:animate-scroll-paused">
            {duplicatedCourses.map((course, index) => (
              <div
                key={`${course.slug}-${index}`}
                className="flex-shrink-0 mx-4 w-96"
              >
                <Link href={`/${course.slug}`}>
                  <div className="group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden cursor-pointer h-full">
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-blue-500/0 group-hover:from-orange-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-3xl"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg ${getBadgeColor(course.badge)}`}>
                        {getBadgeIcon(course.badge)}
                        {course.badge}
                      </span>
                    </div>
                    
                    {/* Course Header */}
                    <div className={`p-8 bg-gradient-to-br ${course.color.replace('from-', 'from-').replace(' to-', '/20 to-')}/20 border-b border-white/10 relative`}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color} opacity-60"></div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                        {course.title}
                      </h3>
                      
                      {/* Course Meta */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-300 font-medium">{course.duration}</span>
                        </div>
                      </div>
                      
                      {/* Course Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/20">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-bold text-yellow-300">{course.rating}</span>
                          <span className="text-xs text-gray-400">rating</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/20">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-bold text-blue-300">{course.students.toLocaleString()}</span>
                          <span className="text-xs text-gray-400">students</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Footer */}
                    <div className="p-8 relative">
                      <div className="flex items-center justify-between group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div>
                          <span className="text-lg font-semibold text-white mb-1 block">View Course Details</span>
                          <span className="text-sm text-gray-400">Start your journey today</span>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Decorative bottom line */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            Ready to advance your career? Choose from {courses.length}+ professional courses
          </p>
          <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      {/* Enhanced CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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
          animation: scroll-infinite 80s linear infinite;
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
            animation: scroll-infinite 60s linear infinite;
          }
        }
        
        /* Performance optimizations */
        .animate-scroll-infinite {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ScrollingCourses;
