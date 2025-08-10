import React from 'react';
import Link from 'next/link';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';
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
  Server,
  Layers,
  Terminal,
  GitBranch,
  Zap,
  Cog,
  Network,
  Shield,
  Tool,
  Activity,
  BarChart3,
  PieChart,
  Cpu,
  HardDrive,
  Workflow,
  Binary,
  Boxes,
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'informatica-mdm-training';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default async  function InformaticaMDMTraining() {
  const structuredDataJson = getStructuredDataStatic(COURSE_SLUG);

  // Fetch metadata for dynamic hero image
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';


  const curriculumTopics = [
    "Informatica MDM Version 10.1 Overview and Architecture",
    "Basic overview of Data Models and Lookups",
    "Learn how to configure Stage Process",
    "Learn how to configure Load Process", 
    "Learn how to configure Match and Merge Process",
    "Acquire advanced knowledge in configuring Data Access",
    "Overview of Batch Processes",
    "Learn advanced concepts on Data Stewardship",
    "Learn about User Exits and Log Files",
    "Get an overview of Hierarchy Management",
    "Learn about Users, Resources, Privileges & Roles",
    "Get an overview of Services Integration Framework (SIF)",
    "Learn about Informatica Data Director",
    "Learn how to use Message Queues",
    "Advanced Topics",
    "Live Project"
  ];

  const targetAudience = [
    "Project managers",
    "Installers", 
    "Developers",
    "Administrators",
    "System integrators",
    "Database administrators",
    "Data stewards"
  ];

  const whyVRITSolutions = [
    "Free Demo sessions to get to know how the course is conducted",
    "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
    "Easy to follow, since most of the course is practical oriented with live industry cases.",
    "Classes driven by real time experts in SAP industry - experienced professionals across SAP domain, occupying various positions such as middle level managers, experienced faculty from reputed institutes.",
    "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles.",
    "Complete assistance to help you crack interviews – we provide FAQs, sample resumes and tips.",
    "Get trained in Informatica MDM in just 50 hours - select either weekend or weekday mode.",
    "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry"
  ];

  const informaticaMDMFaqs = [
    {
      question: "What is Informatica MDM and why is it crucial for enterprises?",
      answer: "Informatica MDM (Master Data Management) is a comprehensive solution for managing and maintaining accurate, consistent master data across enterprise systems. It's crucial because it ensures data quality, eliminates data silos, enables single version of truth, and supports better business decisions through reliable data."
    },
    {
      question: "What are the prerequisites for Informatica MDM training?",
      answer: "Basic understanding of databases, SQL queries, data warehousing concepts, and familiarity with ETL processes. Knowledge of Informatica PowerCenter is beneficial but not mandatory. Having experience with data management concepts and business processes is helpful."
    },
    {
      question: "What components of Informatica MDM will I learn?",
      answer: "You'll learn MDM Hub, Data Director, ActiveVOS for workflow management, Hierarchy Manager, Match and Merge processes, SIF (Service Integration Framework), data stewardship, data governance, cleansing rules, and integration with various source systems."
    },
    {
      question: "What is the duration of the Informatica MDM training course?",
      answer: "Our comprehensive Informatica MDM training is designed to be completed in 45-55 hours, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I work on real MDM implementation projects?",
      answer: "Yes! You'll work on hands-on projects including customer master data creation, product hierarchy management, supplier data consolidation, data matching and merging scenarios, workflow configuration, and end-to-end MDM implementation using real business cases."
    },
    {
      question: "What career opportunities are available after Informatica MDM training?",
      answer: "MDM professionals can work as MDM Developer, Data Steward, MDM Consultant, Data Architect, MDM Analyst, Data Governance Specialist, Solution Architect, or Senior MDM Developer with salaries ranging from ₹5-18 LPA depending on experience and expertise."
    },
    {
      question: "How does Informatica MDM integrate with other Informatica tools?",
      answer: "Informatica MDM integrates seamlessly with PowerCenter for ETL operations, Data Quality for cleansing, Data Privacy for compliance, Cloud Data Integration, and other Informatica Cloud services to provide a comprehensive data management ecosystem."
    },
    {
      question: "Do you cover both on-premise and cloud-based MDM implementations?",
      answer: "Yes, our training covers traditional on-premise MDM Hub implementations as well as Informatica Cloud MDM (Multidomain MDM), hybrid architectures, and migration strategies from on-premise to cloud environments."
    },
    {
      question: "Do you provide placement assistance and interview preparation?",
      answer: "Yes, we offer 100% placement assistance including resume building, MDM project portfolio creation, interview preparation with technical scenarios, mock interviews, and connecting you with our network of companies looking for MDM professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for MDM projects, access to updated course materials, latest MDM features, industry best practices, and alumni network for continuous professional development."
    }
  ];

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Informatica MDM Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Informatica MDM Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 45 days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="Informatica MDM Training"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Informatica MDM online training - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400 animate-pulse" />
                Informatica MDM online training
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    The Informatica® master data management product family helps organizations to enhance operations with business-user access to consolidated and reliable business-critical data, even when it&apos;s spread across the enterprise. This product enterprise offers true multi-domain master data management, empowering you with limitless opportunities to commence with any type of business-critical data and later add diverse domains as you wish. This product suite offers complete support for MDM such as requirements on a single platform, including data integration, profiling, quality and master data management.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> is one of the best Informatica MDM training in Hyderabad to offer well focused and career-oriented training program in Informatica MDM. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you do this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    The Informatica MDM is a unique trust framework that offers consolidated and reliable business critical data with extensive workflow management. VR IT&apos;s training program on Informatica MDM focuses on real time cases, live projects and interactive sessions.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    This course adds value to professionals working in this area, and is also suited for other professionals and fresh graduates, who wish to enter this lucrative area of expertise.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">VR IT Solutions</span> is one of the software training institute in hyderabad to offer the best and innovative training in informatica mdm training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                Course Structure
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {curriculumTopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20 hover:bg-yellow-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-yellow-100 font-medium">• {topic}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                  <p className="text-orange-100 leading-relaxed">
                    <span className="font-semibold">Note:</span> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                  </p>
                  <p className="text-orange-100 leading-relaxed mt-4">
                    With <span className="text-amber-400 font-semibold">VR IT Solutions</span> providing the best training in informatica mdm training, this course helps professionals to manage and process a variety of operations in various realms of business domains.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can do this course? - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-cyan-400" />
                Who can do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed mb-4">
                    • Professionals involved in managing, implementing, or using Informatica MDM Hub in an organization such as:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 ml-6">
                    {targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                        <span className="text-blue-300 font-medium">◦ {audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100 font-medium">• Engineering graduates looking a good career in this field</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100 font-medium">• Fresh graduates with aptitude to enter into this area.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pre-requisites - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-rose-400 animate-pulse" />
                Pre-requisites
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    <span className="text-pink-400 font-semibold">VR IT Solutions</span> hasn&apos;t prescribed any prerequisites for doing Informatica mdm online training in hyderabad general. However, having knowledge of SQL will be beneficial, but certainly not mandatory.
                  </p>
                </div>
              </div>
            </section>

            {/* Why VR IT Solutions - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-violet-400" />
                Why VR IT Solutions
              </h2>
              
              <div className="space-y-4">
                {whyVRITSolutions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-xl border border-violet-400/30 hover:bg-violet-500/20 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100 leading-relaxed">• {item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How will I execute the Practicals? - Blue Theme */}
            <section className="bg-gradient-to-br from-blue-600/15 via-indigo-600/20 to-purple-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-blue-400 animate-pulse" />
                How will I execute the Practicals?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, Linux and Unix.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* Training Features - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-emerald-400" />
                Are You Looking For -
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Training Modes */}
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    Training Modes
                  </h3>
                  <div className="space-y-3">
                    {[
                      "✓Online Training",
                      "✓ClassRoom Training", 
                      "✓Job Support"
                    ].map((mode, index) => (
                      <div key={index} className="flex items-center gap-3 text-emerald-100">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{mode}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                    Contact Us
                  </button>
                </div>

                {/* Why Choose VR IT Solutions */}
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-teal-400" />
                    Why to choose VR IT solutions?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "✓Real time project Explanation",
                      "✓Free Resume preparation",
                      "✓Backup Classes",
                      "✓Career guidance", 
                      "✓Mock Tests and Interviews",
                      "✓24/7 support"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-teal-100">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Informatica MDM Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master Informatica MDM and become proficient in master data management, data stewardship, and enterprise data integration. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="Informatica MDM Training"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={false}
                  showDownload={false}
                  showCallNow={true}
                  showJoinNow={true}
                  layout="horizontal"
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                />
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-pink-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <FAQ faqs={informaticaMDMFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="Informatica MDM" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
    </>
  );
}
