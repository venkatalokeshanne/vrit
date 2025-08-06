import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getPageMetadata, getStructuredData, getReviewStructuredData } from '../../utils/metadata';
import { 
  Target, 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp,
  Cloud,
  Monitor,
  Rocket,
  Clock,
  Calendar,
  Download,
  CheckCircle,
  ArrowRight,
  FileText,
  Settings,
  Code,
  Star,
  Play,
  Phone,
  Globe,
  Mail,
  Briefcase,
  Database,
  Shield,
  Server,
  Network,
  Layers,
  Package,
  Truck,
  Brain,
} from 'lucide-react';

export const metadata = getPageMetadata('sap-mm-online-training');

export default function SAPMMOnlineTraining() {
  const courseModules = [
    "Overview of MM functions in a business setup",
    "Introduction to Master Data",
    "Overview of purchasing function including learning how to create and update a purchase record; learn how to work on quotations, create a purchase order and more.",
    "Overview of pricing function; learn how to work on conditions, define calculation schema and define schema groups",
    "Overview of inventory function",
    "Overview of Inventory Management including various functions such as create or cancel a goods receipt, reservation of inventory, issue goods, transfer posting of goods, physical inventory and more.",
    "Live Project"
  ];

  const whoCanDo = [
    "SAP Functional Consultants, SAP ABAP consultants and SAP professionals from other domains",
    "Software professionals, who want to make a career in SAP",
    "Fresh graduates, who are looking for a career in SAP",
    "Logistics managers",
    "Purchase managers or executives, who work on a variety of purchasing operations",
    "Business Analysts",
    "Database consultants"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session and sap mm interview questions with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project", 
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Get trained in SAP MM in just 70 hours –(select either weekend or weekday mode)",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP MM professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  const trainingModes = [
    "Online Training",
    "Classroom Training", 
    "Job Support"
  ];

  const whyChooseUs = [
    "Real time project Explanation",
    "Free Resume preparation",
    "Backup Classes",
    "Career guidance",
    "Mock Tests and Interviews",
    "24/7 support"
  ];

  const sapMmFaqs = [
    {
      question: "What is SAP MM and why should I learn it?",
      answer: "SAP MM (Materials Management) is a fundamental module of SAP ERP system that handles Master Data, Purchasing and Inventory components. It's directly related to the logistics function and is implemented in core SAP installations. Learning SAP MM opens doors to high-paying careers in logistics, procurement, and supply chain management."
    },
    {
      question: "What are the prerequisites for SAP MM online training?",
      answer: "VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no MM experience. Basic understanding of business processes is helpful but not mandatory."
    },
    {
      question: "What is the duration and fee structure for SAP MM online training?",
      answer: "Our SAP MM online training is a comprehensive 120-day program that can be completed in just 70 hours with flexible weekend or weekday modes. Contact us at +91-9032734343 for current fee structure and available discounts."
    },
    {
      question: "Who can take this SAP MM course?",
      answer: "This course is suitable for SAP Functional Consultants, Software professionals wanting SAP careers, Fresh graduates, Logistics managers, Purchase managers, Business Analysts, and Database consultants. It's particularly useful for professionals working in logistics and procurement areas."
    },
    {
      question: "What career opportunities are available after SAP MM training?",
      answer: "SAP MM professionals can work as SAP MM Consultant, Materials Management Specialist, Procurement Analyst, Logistics Coordinator, Inventory Manager, and Purchase Manager. The course offers lucrative jobs in the logistics domain with high demand across manufacturing and other industries."
    },
    {
      question: "How do online practical sessions work for SAP MM?",
      answer: "Our online training includes comprehensive practical sessions with real SAP system access. Students get hands-on experience with purchasing functions, inventory management, master data creation, and live project implementation through virtual labs and screen sharing."
    },
    {
      question: "What is covered in the SAP MM online curriculum?",
      answer: "The curriculum covers MM functions overview, Master Data introduction, purchasing functions, pricing procedures, inventory management, goods receipt/issue processes, physical inventory, and live project implementation. All topics include practical scenarios and interview questions."
    },
    {
      question: "Do you provide job placement assistance for online students?",
      answer: "Yes, we provide comprehensive placement assistance including resume preparation, interview coaching, job referrals, and continuous support. We have partnerships with major companies and have successfully placed thousands in MNCs like Infosys, Wipro, Accenture, and others."
    },
    {
      question: "Can working professionals attend SAP MM online training?",
      answer: "Absolutely! Our online training offers flexible scheduling with both weekend and weekday modes. All sessions are designed to accommodate working professionals with practical sessions and ample time for practice at your own pace."
    },
    {
      question: "What support do you provide during and after the online course?",
      answer: "We provide 24/7 support, backup classes, career guidance, mock tests and interviews, and lifetime support. Our industry-relevant curriculum is updated every 6 months to keep you ahead of the latest technologies and market demands."
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Best SAP MM Online Training in Hyderabad | SAP Materials Management Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/sap-mm-online-training",
            "logo": "https://vrit-ten.vercel.app/logo.png",
            "sameAs": [
              "https://www.facebook.com/vritsolutions/",
              "https://twitter.com/vritsolutions",
              "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
            ],
            "address": [
              {
                "type": "PostalAddress",
                "addressCountry": "INDIA",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad Telangana."
              }
            ],
            "openingHours": [
              "Mo-Sa 8:00-21:30",
              "Su 9:00-13:00"
            ],
            "contactPoint": [
              {
                "type": "ContactPoint",
                "telephone": "9032734343",
                "contactType": "Enquiry",
                "email": "info@vritsol.com"
              }
            ]
          })
        }}
      />

      {/* Additional Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "review",
            "name": "SAP MM Online Training in Hyderabad - VR IT Solutions",
            "aggregateRating": {
              "type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "9656"
            }
          })
        }}
      />

      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "SAP MM Online Training in Hyderabad",
            "description": "Comprehensive 120-day SAP MM online training covering materials management, purchasing, and inventory with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "SAP MM Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P120D",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "9656",
              "bestRating": "5"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    SAP MM Online Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sap-mm.jpg"
                    alt="SAP MM Online Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-orange-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-orange-500/25 to-teal-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-orange-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-orange-400 animate-bounce" />
                      <span className="text-orange-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-400 animate-spin" />
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 120 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP MM Online Training"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>

            {/* Other SAP Courses */}
            <section className="bg-gradient-to-br from-gray-600/15 via-slate-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30 shadow-xl shadow-gray-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Other SAP Courses
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <a href="/sap-basis-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Database className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Basis</span>
                  </div>
                </a>
                <a href="/sap-leonardo-training-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Brain className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Leonardo</span>
                  </div>
                </a>
                <a href="/sap-fico-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP FICO</span>
                  </div>
                </a>
                <a href="/sap-sd-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP SD</span>
                  </div>
                </a>
                <a href="/sap-hana-admin-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Server className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP HANA</span>
                  </div>
                </a>
                <a href="/sap-ewm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Layers className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP EWM</span>
                  </div>
                </a>
                <a href="/sap-security-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Security</span>
                  </div>
                </a>
                <a href="/sap-s4Hana-simple-logistics-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Truck className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">S/4HANA Logistics</span>
                  </div>
                </a>
              </div>
            </section>
            
            {/* About this course - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                About this course
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    VR IT Solutions is one of the best Sap MM online training. Materials Management module in SAP (SAP MM) consists of various components and sub-components that includes Master Data, Purchasing and Inventory. This is one of the fundamental modules of SAP ERP system that is implemented in core installations of SAP. This module is directly related to the logistics function of the SAP solution.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    VR IT Solutions is one of the best software training institutes in Hyderabad to offer well focused and career-oriented sap MM training program. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you do this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    VR IT Solutions is one of the best Sap MM online training. With inventory and materials management being a core area of business, this area of SAP implementation finds significance in almost all types of manufacturing and other industries. This course is particularly useful for purchase managers and other executives working in the logistics area of the business, apart from other professionals, who want to foray into this area. With automation seeping across all segments of business, this course is highly valuable and is rated as one of the top SAP courses, offering lucrative jobs in the logistics domain.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the best Sap mm training In Hyderabad to offer the best and balanced training in SAP MM that is well suited to help you embark on the right path of success.
                  </p>
                </div>
              </div>
            </section>

            {/* What are the pre-requisites for this course? - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-rose-400" />
                What are the pre-requisites for this course?
              </h2>
              <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                <p className="text-rose-100 leading-relaxed">
                  VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no MM experience.
                </p>
              </div>
            </section>

            {/* Course curriculum - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                Course curriculum
              </h2>
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100 font-medium">{module}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border border-yellow-400/30 rounded-xl">
                <p className="text-yellow-200 font-semibold">
                  <strong className="text-yellow-300">Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-amber-500/15 to-yellow-500/15 border border-amber-400/30 rounded-xl">
                <p className="text-amber-100 leading-relaxed">
                  With VRIT Solutions providing the best Sap mm training, this course helps professionals to manage and process a variety of operations in purchasing function in an automated SAP environment.
                </p>
              </div>
            </section>

            {/* Who can do this course? - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-cyan-400" />
                Who can do this course?
              </h2>
              <div className="grid gap-4">
                {whoCanDo.map((candidate, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                    <Star className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-100 font-medium">{candidate}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/30 rounded-xl">
                <p className="text-cyan-100 leading-relaxed">
                  Learn SAP MM in both online and offline modes by real-time experts from VRIT Solutions with practical scenarios sap mm interview questions and in-depth explanation of each and every topic.
                </p>
              </div>
            </section>

            {/* Our Key Differentiators */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-violet-400" />
                Our Key Differentiators
              </h2>
              <div className="space-y-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                    <h3 className="text-xl font-bold text-violet-300 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-violet-100 leading-relaxed">
                      {differentiator.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Training Modes
                </h2>
                <div className="space-y-3">
                  {trainingModes.map((mode, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-500/10 rounded-xl border border-slate-400/20">
                      <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-100 text-sm font-medium">{mode}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Why to choose VR IT solutions?
                </h2>
                <div className="space-y-3">
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                      <Star className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-emerald-100 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={sapMmFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP MM Online" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sap-mm-online-training'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('sap-mm-online-training') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('sap-mm-online-training'))
          }}
        />
      )}
      </div>
    </>
  );
}
