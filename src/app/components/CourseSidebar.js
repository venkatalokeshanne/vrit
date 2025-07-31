'use client';

import React from 'react';
import { Phone, Mail, Download, Users, Monitor, Briefcase, CheckCircle, ArrowRight, Clock, Target, Award, TrendingUp, Code, Globe } from 'lucide-react';
import Link from 'next/link';

export default function CourseSidebar({ courseName = "Course", phoneNumber = "+91-9032734343" }) {
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
      {/* Contact Us */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-orange-400" />
          Contact Us
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-blue-400" />
            <a href={`tel:${phoneNumber}`} className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              {phoneNumber}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-teal-400" />
            <a href="mailto:info@vritsol.com" className="text-teal-400 hover:text-teal-300 transition-colors">
              info@vritsol.com
            </a>
          </div>
        </div>
      </div>

      {/* Opt for Training */}
      <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Opt for Training</h3>
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Enquire Now
          </button>
          <button className="w-full border border-blue-500/50 text-white px-4 py-3 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Course Content
          </button>
        </div>
      </div>

      {/* Training Modes */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Training Modes</h3>
        <div className="space-y-3">
          {trainingModes.map((mode, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <div className="text-orange-400">{mode.icon}</div>
              <span className="text-gray-300">{mode.name}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300">
          Contact Us
        </button>
      </div>

      {/* Why Choose VR IT Solutions */}
      <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Why to choose VR IT solutions?</h3>
        <div className="space-y-3">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Technologies */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Trending Technologies</h3>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {trendingTechnologies.map((tech, index) => (
            <Link
              key={index}
              href={tech.href}
              className="block p-2 text-gray-300 hover:text-orange-400 transition-colors text-sm hover:bg-white/5 rounded-lg border-l-2 border-transparent hover:border-orange-400"
            >
              • {tech.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
