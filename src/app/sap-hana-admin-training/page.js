import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getPageMetadata, getStructuredData } from '../../utils/metadata';
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
  CheckCircle,
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
  HardDrive,
  Activity,
  Package,
  Truck,
  Brain
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('sap-hana-admin-training');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('sap-hana-admin-training');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async function SAPHANAAdminTraining() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('sap-hana-admin-training');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

  
  const whoCanJoin = [
    "SAP Basis administrators",
    "System administrators",
    "Database administrators",
    "Everyone who is interested in HANA database administration"
  ];

  const prerequisites = [
    "Basic knowledge of SAP HANA &ERP",
    "knowledge of various SAP modules",
    "Knowledge on linux/Unix commands and database concepts",
    "Know ledge on SQL commands",
    "Basic knowledge of system and database administration",
    "Basic knowledge of web servers"
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

  const sapHanaAdminFaqs = [
    {
      question: "What is SAP HANA Administration and why is it in high demand?",
      answer: "SAP HANA Administration involves managing SAP's in-memory database platform including installation, configuration, monitoring, performance tuning, backup/recovery, and security management. It's in high demand because HANA is the foundation for S/4HANA and modern SAP applications, requiring specialized administrators."
    },
    {
      question: "What are the prerequisites for SAP HANA Admin training?",
      answer: "Basic understanding of databases (SQL, database concepts), operating systems (Linux/Windows), networking fundamentals, and basic SAP knowledge. Having experience with database administration or system administration is beneficial but not mandatory as we cover HANA-specific concepts."
    },
    {
      question: "What key areas will I learn in SAP HANA Administration?",
      answer: "You'll learn HANA architecture, installation and configuration, system monitoring, performance optimization, backup and recovery, user and authorization management, high availability setup, disaster recovery, system replication, and troubleshooting techniques."
    },
    {
      question: "What is the duration of the SAP HANA Admin training course?",
      answer: "Our comprehensive SAP HANA Admin training is designed to be completed in 50-60 hours, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule with extensive hands-on practice on HANA systems."
    },
    {
      question: "Will I get hands-on experience with real SAP HANA systems?",
      answer: "Yes! You'll work on actual SAP HANA systems with hands-on exercises including HANA installation, system monitoring using HANA Studio/Cockpit, performance analysis, backup operations, user administration, and system maintenance activities in real HANA environments."
    },
    {
      question: "What career opportunities are available after SAP HANA Admin training?",
      answer: "SAP HANA Admin professionals can work as HANA Database Administrator, SAP HANA Technical Consultant, HANA System Administrator, Database Architect, HANA Performance Specialist, or HANA Infrastructure Manager with salaries ranging from ₹5-18 LPA depending on experience."
    },
    {
      question: "How does SAP HANA Administration differ from traditional database administration?",
      answer: "HANA is an in-memory database with column-based storage, real-time analytics capabilities, and integrated application server. Unlike traditional databases, HANA administration involves managing memory optimization, data compression, real-time replication, and advanced analytics workloads."
    },
    {
      question: "Do you cover both on-premise and cloud HANA administration?",
      answer: "Yes, our training covers on-premise HANA administration as well as SAP HANA Cloud, HANA Enterprise Cloud, and hybrid scenarios. You'll learn administration techniques for different deployment models and cloud-specific management tools."
    },
    {
      question: "Do you provide SAP HANA certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for SAP HANA certification exams and offer 100% placement assistance including resume building, HANA admin project portfolio creation, interview preparation with technical scenarios, and connecting with companies hiring HANA administrators."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for HANA admin projects, access to updated HANA materials, latest HANA features and tools, performance tuning best practices, and alumni network for continuous professional development."
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
            "name": "Best SAP HANA Admin Training in Hyderabad | SAP HANA Admin Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/sap-hana-admin-training-in-hyderabad",
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
            "name": "SAP HANA Admin Training in Hyderabad",
            "description": "Comprehensive 40-day SAP HANA Admin training covering installation, configuration, monitoring, performance tuning, and database administration with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "SAP HANA Admin Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P40D",
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
            
            {/* Hero Section - SAP HANA Admin Training in Hyderabad */}
            <section className="bg-gradient-to-br from-purple-500/15 via-pink-600/20 to-purple-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-purple-400/30 shadow-2xl shadow-purple-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    SAP HANA Admin Training in Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="SAP HANA Admin Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-purple-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-purple-500/25 to-pink-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-purple-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-pink-400" />
                      <span className="text-pink-300 font-semibold">Duration: 40 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons
                  courseName="SAP HANA Admin Training"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={true}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>

            {/* Other SAP Courses */}
            <section className="bg-gradient-to-br from-gray-600/15 via-slate-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-gray-400/30 shadow-xl shadow-gray-500/10">
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
            
            {/* SAP HANA ADMIN TRAINING */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                SAP HANA ADMIN TRAINING
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    SAP HANA Admin training at VR IT is the best in the Hyderabad, our instructor has knowledge on multiple S4 HANA implementations and migrations experience. We provide classroom and online training, we provide access to the HANA servers on which student can install HANA database and perform pre and post installation activities using HANA Studio. Our instructors with vast experience will transform the students with real time experience skills on installations and configurations, monitoring, performance tuning etc.
                  </p>
                </div>
              </div>
            </section>

            {/* What is SAP HANA Admin? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What is SAP HANA Admin?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    sap hana training &installation and configurations of S4 HANA servers, admins monitor and maintain the servers to be up and running. SAP HANA databases need performance tuning and maintenance which are installed and configured both on premise and cloud admins periodically perform the health check of the HANA Database take necessary actions for tuning the performance. In this course our instructors teach how to install and configure SAP HANA system, also using SAP HANA cockpit, a web-based tool, we also teach the concepts like alerts checking and monitoring, configuration management, backup and recovery and security concepts. Our instructors also share their knowledge on how analyse memory usage, performing tasks using SQL statement and monitoring workloads.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can join this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Who can join this course?
              </h2>
              <div className="grid gap-4">
                {whoCanJoin.map((candidate, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{candidate}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lab Access */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Lab Access
              </h2>
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                <p className="text-purple-100 leading-relaxed">
                  VR IT Solutions sap hana admin online training we provide expert training on the concepts We provide access to you on the mock servers like Express HANA which are like prototype to S4 HANA servers.
                </p>
              </div>
            </section>

            {/* What are the pre-requisites for this course? */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What are the pre-requisites for this course?
              </h2>
              <div className="grid gap-4">
                {prerequisites.map((prerequisite, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-rose-100">{prerequisite}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
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

              <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
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
            <section className="bg-gradient-to-br from-orange-600/15 via-red-600/20 to-pink-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/30 shadow-xl shadow-orange-500/10">
              <FAQ faqs={sapHanaAdminFaqs} theme="sap" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP HANA Admin" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      </div>

      {/* Structured Data */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
    </>
  );
}
