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
  Zap,
  Database,
  Shield,
  Server,
  Network,
  Layers,
  Warehouse,
  Package,
  Truck,
  Brain
} from 'lucide-react';

export const metadata = getPageMetadata('sap-ewm-online-training');

export default function SAPEWMTraining() {
  const courseStructure = [
    "Introduction to EWM (Extended Warehouse Management)",
    "Get an overview of the EWM Structure",
    "Learn about Master Data and its uses",
    "Get an overview of the integration process",
    "Learn some advanced concepts on structural elements and master data",
    "Learn about various warehouse process types",
    "Learn about Warehouse Monitor",
    "Get an overview of RF Frame work",
    "Learn how to handle business processes such as:",
    "• Goods Receipt and Inbound Process",
    "• Goods Issue and Outbound process",
    "• Storage Control",
    "• Warehouse Order Creation",
    "• Posting Changes, Stock Transfers and Replenishment",
    "• Physical Inventory",
    "Learn about slotting and rearrangement",
    "Get an overview of Post Processing Framework (PPF)",
    "Learn advanced concepts on Material Flow System, Labor Management and Yard Management Live Project"
  ];

  const whoCanDo = [
    "SAP MM & SAP WM consultants can learn SAP EWM Functional",
    "SAP Functional Consultants and SAP ABAP consultants can learn SAP EWM Technical",
    "Software professionals, who want to make a career in SAP",
    "Fresh graduates, who are looking for a career in SAP",
    "Business Analysts",
    "Database consultants"
  ];

  const prerequisites = [
    "Knowledge about SAP products and its ecosystem",
    "Basic overview of standard warehouse processes",
    "Technical (ABAP) knowledge"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      desc: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project",
      desc: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Top notch faculty",
      desc: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, data scientists and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Get trained in SAP EWM in just 60 hours - select either weekend or weekday mode",
      desc: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP EWM professional."
    },
    {
      title: "Industry relevant curriculum",
      desc: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
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

  const sapEWMFaqs = [
    {
      question: "What is SAP EWM (Extended Warehouse Management) and why is it important?",
      answer: "SAP EWM is an advanced warehouse management solution that provides comprehensive functionality for managing complex warehouse operations. It's important because it optimizes warehouse processes, improves inventory accuracy, enhances labor productivity, and provides real-time visibility into warehouse operations for better decision-making."
    },
    {
      question: "What are the prerequisites for SAP EWM training?",
      answer: "Basic understanding of SAP system navigation, knowledge of warehouse and logistics processes, familiarity with SAP MM (Materials Management) module, and understanding of basic supply chain concepts. Having experience with warehouse operations or SAP WM is beneficial but not mandatory."
    },
    {
      question: "What key functionalities will I learn in SAP EWM?",
      answer: "You'll learn warehouse structure and master data, inbound and outbound processing, internal warehouse processes, inventory management, wave management, labor management, warehouse monitoring, integration with SAP ERP, handheld device configuration, and advanced warehouse optimization techniques."
    },
    {
      question: "What is the duration of the SAP EWM training course?",
      answer: "Our comprehensive SAP EWM training is designed to be completed in 45-60 hours, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule with extensive hands-on practice on EWM system."
    },
    {
      question: "Will I get hands-on experience with real SAP EWM scenarios?",
      answer: "Yes! You'll work on actual SAP EWM systems with hands-on exercises including warehouse setup, master data configuration, process flow design, RF device simulation, inventory management, wave processing, and end-to-end warehouse process scenarios using real business cases."
    },
    {
      question: "What career opportunities are available after SAP EWM training?",
      answer: "SAP EWM professionals can work as EWM Consultant, Warehouse Management Specialist, SAP Logistics Consultant, Supply Chain Analyst, EWM Functional Consultant, or Warehouse Solutions Architect with salaries ranging from ₹5-16 LPA depending on experience and expertise."
    },
    {
      question: "How does SAP EWM differ from SAP WM (Warehouse Management)?",
      answer: "SAP EWM is a more advanced solution with enhanced functionality including better labor management, advanced analytics, flexible warehouse structure, improved mobile device support, better integration capabilities, and more sophisticated optimization algorithms compared to traditional SAP WM."
    },
    {
      question: "Do you cover integration of EWM with other SAP modules?",
      answer: "Yes, our training covers EWM integration with SAP ERP (MM, SD, PP modules), SAP TM (Transportation Management), SAP ECC, S/4HANA integration, and third-party systems. You'll learn how EWM fits into the overall SAP landscape and supply chain processes."
    },
    {
      question: "Do you provide SAP EWM certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for SAP EWM certification preparation and offer 100% placement assistance including resume building, EWM project portfolio creation, interview preparation with warehouse scenarios, and connecting with companies hiring EWM professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for EWM implementations, access to updated EWM materials, latest warehouse management trends, optimization techniques, and alumni network for continuous professional development."
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
            "name": "Best SAP EWM Training in Hyderabad | SAP EWM Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/sap-ewm-training-in-hyderabad",
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

      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "SAP EWM Training in Hyderabad",
            "description": "Comprehensive 65-day SAP EWM training covering Extended Warehouse Management, master data, integration processes, and warehouse operations with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "SAP EWM Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P65D",
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
            
            {/* Hero Section - SAP EWM Training in Hyderabad */}
            <section className="bg-gradient-to-br from-yellow-500/15 via-orange-600/20 to-amber-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-yellow-400/30 shadow-2xl shadow-yellow-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    SAP EWM Training in Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sap-ewm.jpg"
                    alt="SAP EWM Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-yellow-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-yellow-500/25 to-orange-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-yellow-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-300 font-semibold">Duration: 65 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP EWM Online Training"
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
                <a href="/sap-mm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Package className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP MM</span>
                  </div>
                </a>
                <a href="/sap-hana-admin-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Server className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP HANA</span>
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
            
            {/* About SAP Extended Warehouse Management (SAP EWM) */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                About SAP Extended Warehouse Management (SAP EWM)
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Extended Warehouse Management (EWM) offers a flexible and automated support for processing various movements of goods and for managing stocks in a warehouse. The system supports planned and efficient processing of all logistics processes in a warehouse. The beauty of this application is that it offers an option to manage your entire warehouse complex in detail in the system – right up to the storage bin level. Not just getting an overview of the entire quantity of a material in the warehouse, you can also predict accurately, where a specific material is currently in your warehouse complex.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    VR IT Solutions is one of the best sap ewm training to offer well focused and career-oriented training program in SAP EWM. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you join this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why should you join this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With logistics and supply chain management being complex business areas and moreover with more number of organization adopting the automation route, this course is particularly useful for those who want to make a career in the supply chain automation. EWM offers high level integration with inventory management and delivery processing. Using EWM, you can organize, control and monitor the movement of goods.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the best software training institutes in Hyderabad to offer the best and balanced in Sap ewm Training that is well suited to help you embark on the right path of success. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Course Structure
              </h2>
              <div className="grid gap-4 mb-6">
                {courseStructure.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <Warehouse className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed font-semibold">
                    Note: The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    With VR IT Solutions providing the best sap ewm online training, this course helps professionals to manage and process a variety of operations in supply chain management (SCM) domain in an automated SAP environment.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can do this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Who can do this course?
              </h2>
              <div className="grid gap-4 mb-6">
                {whoCanDo.map((candidate, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{candidate}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                <p className="text-yellow-100 leading-relaxed">
                  Learn SAP EWM in both online and offline modes by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.
                </p>
              </div>
            </section>

            {/* What are the pre-requisites for this course? */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What are the pre-requisites for this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed mb-4">
                    VR IT Solutions hasn't prescribed any specific pre-requisites to do this course, however the following list of pre-requisites will do help to make a good start.
                  </p>
                </div>
                <div className="grid gap-4">
                  {prerequisites.map((prerequisite, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                      <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <p className="text-rose-100">{prerequisite}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Key Differentiators */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Key Differentiators
              </h2>
              <div className="space-y-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-bold text-cyan-200 mb-3">{differentiator.title}</h3>
                    <p className="text-cyan-100 leading-relaxed">{differentiator.desc}</p>
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
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <FAQ faqs={sapEWMFaqs} theme="sap" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP EWM" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sap-ewm-training-in-hyderabad'))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData('sap-ewm-training-in-hyderabad'))
        }}
      />
    </>
  );
}
