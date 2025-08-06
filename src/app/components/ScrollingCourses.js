'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users } from 'lucide-react';

const ScrollingCourses = () => {
  const courses = [
    { title: "ServiceNow Training", slug: "servicenow-training-in-hyderabad", color: "from-blue-500 to-cyan-500", rating: 4.9, students: 2134 },
    { title: "Salesforce Training", slug: "salesforce-training-in-hyderabad", color: "from-green-500 to-teal-500", rating: 4.7, students: 3456 },
    { title: "SAP FICO Training", slug: "sap-fico-online-training-in-hyderabad", color: "from-purple-500 to-pink-500", rating: 4.6, students: 1987 },
    { title: "Pega Training", slug: "pega-training-in-hyderabad", color: "from-pink-500 to-rose-500", rating: 4.8, students: 1543 },
    { title: "Azure DevOps Training", slug: "azure-devops-training-in-hyderabad", color: "from-indigo-500 to-purple-500", rating: 4.9, students: 2456 },
    { title: "MuleSoft Training", slug: "mulesoft-training-in-hyderabad", color: "from-orange-500 to-red-500", rating: 4.7, students: 1876 },
    { title: "SAS Clinical Training", slug: "sas-clinical-online-training-in-hyderabad", color: "from-blue-500 to-indigo-500", rating: 4.6, students: 1234 },
    { title: "SAP Basis Training", slug: "sap-basis-online-training", color: "from-orange-500 to-red-500", rating: 4.5, students: 987 },
    { title: "SAP EWM Training", slug: "sap-ewm-online-training", color: "from-yellow-500 to-orange-500", rating: 4.7, students: 1345 },
    { title: "SAP HANA Admin", slug: "sap-hana-admin-training", color: "from-purple-600 to-pink-600", rating: 4.8, students: 1567 },
    { title: "S/4 HANA Finance", slug: "simple-finance-training-in-hyderabad", color: "from-blue-600 to-cyan-600", rating: 4.9, students: 1789 },
    { title: "SAP Leonardo", slug: "sap-leonardo-training-hyderabad", color: "from-green-600 to-teal-600", rating: 4.6, students: 945 },
    { title: "SAP Security", slug: "sap-security-training", color: "from-red-600 to-pink-600", rating: 4.7, students: 1123 },
    { title: "Data Science", slug: "data-science-training-in-hyderabad", color: "from-orange-500 to-red-500", rating: 4.8, students: 3241 },
    { title: "Python Training", slug: "python-online-training", color: "from-yellow-500 to-orange-500", rating: 4.8, students: 5432 },
    { title: "Python With AWS", slug: "python-with-aws-training", color: "from-green-500 to-blue-500", rating: 4.7, students: 2876 },
    { title: "Workday Training", slug: "workday-training-in-hyderabad", color: "from-purple-500 to-pink-500", rating: 4.7, students: 1654 },
    { title: "Machine Learning", slug: "machine-learning-with-python-training-in-hyderabad", color: "from-blue-500 to-purple-500", rating: 4.8, students: 2890 },
    { title: "DevOps Training", slug: "devops-training-in-hyderabad", color: "from-teal-500 to-cyan-500", rating: 4.9, students: 2765 },
    { title: "Informatica MDM", slug: "informatica-mdm-training", color: "from-pink-500 to-red-500", rating: 4.6, students: 1234 },
    { title: "Full Stack Developer", slug: "full-stack-developer-training-in-hyderabad", color: "from-indigo-500 to-blue-500", rating: 4.9, students: 4567 },
    { title: "EDI Training", slug: "edi-training", color: "from-emerald-500 to-teal-500", rating: 4.5, students: 987 },
    { title: "Hadoop Training", slug: "hadoop-online-training", color: "from-orange-600 to-yellow-600", rating: 4.7, students: 2143 },
    { title: "Snowflake Training", slug: "snowflake-training-in-hyderabad", color: "from-cyan-500 to-blue-500", rating: 4.7, students: 1876 },
    { title: "Google Cloud", slug: "google-cloud-training", color: "from-blue-500 to-green-500", rating: 4.6, students: 1432 }
  ];

  // Duplicate the courses array for seamless scrolling
  const duplicatedCourses = [...courses, ...courses];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-slate-900/50 to-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Popular Courses</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of professionals who transformed their careers with our industry-leading training programs
          </p>
        </div>
        
        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Animation */}
          <div className="flex animate-scroll-infinite">
            {duplicatedCourses.map((course, index) => (
              <div
                key={`${course.slug}-${index}`}
                className="flex-shrink-0 mx-3 w-80"
              >
                <Link href={`/${course.slug}`}>
                  <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer">
                    {/* Course Header */}
                    <div className={`p-6 bg-gradient-to-br ${course.color.replace('from-', 'from-').replace(' to-', '/10 to-')}/10 border-b border-white/10`}>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {course.title}
                      </h3>
                      
                      {/* Course Stats */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-300">{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Footer */}
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">View Course</span>
                        <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 60s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ScrollingCourses;
