'use client';

import React from 'react';
import { Phone, Mail, Download, Users, Monitor, Briefcase, CheckCircle, ArrowRight, Clock, Target, Award, TrendingUp, Code, Globe, Star, Rocket } from 'lucide-react';
import Link from 'next/link';
import CourseActionButtons, { EnquireNowButton, DownloadCourseButton, CallNowButton } from './CourseActionButtons';
import { getCourseBySlugStatic } from '@/utils/staticCourses';

export default function CourseSidebar({ slug, courseName = "Course", phoneNumber = "+91-9032734343" }) {
  const courseMetadata = getCourseBySlugStatic(slug);
  const trainingModes = [
    { icon: <Globe className="w-5 h-5" />, name: "Online Training" },
    { icon: <Users className="w-5 h-5" />, name: "ClassRoom Training" },
    { icon: <Briefcase className="w-5 h-5" />, name: "Job Support" }
  ];

  const whyChooseUs = [
    "Real time project Explanation",
    "Free Resume preparation", 
    "Backup Classes",
    "Career guidance",
    "Mock Tests and Interviews",
    "24/7 support"
  ];

  const trendingTechnologies = [
    { name: "Snowflake Training", href: "/snowflake-training-in-hyderabad" },
    { name: "Workday Training", href: "/workday-training-in-hyderabad" },
    { name: "Salesforce Training", href: "/salesforce-training-in-hyderabad" },
    { name: "Machine Learning With Python", href: "/machine-learning-with-python-training-in-hyderabad" },
    { name: "Hadoop Training", href: "/hadoop-online-training" },
    { name: "DevOps Online Training", href: "/devops-training-in-hyderabad" },
    { name: "DataScience Training", href: "/data-science-training-in-hyderabad" },
    { name: "Python Online Training", href: "/python-online-training" },
    { name: "Python with AWS Training", href: "/python-with-aws-training" },
    { name: "Python With Docker", href: "/python-with-docker" },
    { name: "Mulesoft online Training", href: "/mulesoft-training-in-hyderabad" },
    { name: "Informatica MDM Training", href: "/informatica-mdm-training" },
    { name: "ServiceNow Training", href: "/servicenow-training-in-hyderabad" },
    { name: "Pega Training", href: "/pega-training-in-hyderabad" },
    { name: "Azure DevOps Training", href: "/azure-devops-training-in-hyderabad" },
    { name: "Full Stack Training", href: "/full-stack-developer-training-in-hyderabad" },
    { name: "EDI Training", href: "/edi-training" },
    { name: "Google Cloud Training", href: "/google-cloud-training" }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Us - Enhanced Orange Theme */}
      <div className="bg-gradient-to-br from-orange-600/20 via-amber-600/15 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/40 shadow-xl shadow-orange-500/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/20 to-orange-500/20 rounded-full blur-lg"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-orange-400" />
            Contact Us
          </h3>
          <div className="space-y-3">
            <div className="bg-orange-500/15 rounded-xl p-4 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:bg-orange-500/20">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <a href={`tel:${phoneNumber}`} className="text-orange-200 hover:text-white transition-colors font-semibold">
                  {phoneNumber}
                </a>
              </div>
            </div>
            <div className="bg-amber-500/15 rounded-xl p-4 border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300 hover:bg-amber-500/20">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@vritsol.com" className="text-amber-200 hover:text-white transition-colors font-medium">
                  info@vritsol.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opt for Training - Enhanced Purple Theme */}
      <div className="bg-gradient-to-br from-purple-600/20 via-violet-600/15 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/40 shadow-xl shadow-purple-500/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500/20 to-violet-500/20 rounded-full blur-lg"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-purple-400" />
            Opt for Training
          </h3>
          <div className="space-y-3">
            <CourseActionButtons 
              courseName={courseName}
              showEnquireNow={true}
              showDownload={!!courseMetadata?.courseContentPdf}
              downloadUrl={courseMetadata?.courseContentPdf}
              showCallNow={false}
              showJoinNow={false}
              variant="sidebar"
            />
          </div>
        </div>
      </div>

      {/* Training Modes - Enhanced Teal Theme */}
      <div className="bg-gradient-to-br from-teal-600/20 via-emerald-600/15 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/40 shadow-xl shadow-teal-500/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-lg"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-teal-400" />
            Training Modes
          </h3>
          <div className="space-y-3">
            {trainingModes.map((mode, index) => (
              <div key={index} className="bg-teal-500/15 rounded-xl p-4 border border-teal-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:bg-teal-500/20 group">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-teal-400 group-hover:text-emerald-400 transition-colors" />
                  <div className="text-emerald-400 group-hover:text-teal-400 transition-colors">{mode.icon}</div>
                  <span className="text-teal-200 group-hover:text-white transition-colors font-medium">{mode.name}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contactus" className="w-full mt-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105 block text-center">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Why Choose VR IT Solutions - Enhanced Rose Theme */}
      <div className="bg-gradient-to-br from-rose-600/20 via-pink-600/15 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-rose-400/40 shadow-xl shadow-rose-500/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-500/15 to-rose-500/15 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4">
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5 text-rose-400" />
              Why choose VR IT solutions?
            </span>
          </h3>
          <div className="space-y-3">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-rose-500/15 rounded-xl p-4 border border-rose-400/30 hover:border-pink-400/50 transition-all duration-300 hover:bg-rose-500/20 group">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 group-hover:text-pink-400 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                  <span className="text-rose-100 text-sm group-hover:text-white transition-colors duration-300 leading-relaxed font-medium">{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Technologies - Enhanced Indigo Theme */}
      <div className="bg-gradient-to-br from-indigo-600/20 via-blue-600/15 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/40 shadow-xl shadow-indigo-500/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/15 to-indigo-500/15 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              Trending Technologies
            </span>
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
            {trendingTechnologies.map((tech, index) => (
              <Link
                key={index}
                href={tech.href}
                className="block p-3 bg-indigo-500/15 rounded-xl border border-indigo-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:bg-indigo-500/20 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300 font-bold">•</span>
                  <span className="text-indigo-200 group-hover:text-white font-medium transition-colors duration-300 text-sm">
                    {tech.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #3b82f6);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #2563eb);
        }
      `}</style>
    </div>
  );
}
