import Link from 'next/link';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Target, 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  Code,
  Star,
  Phone,
  Database,
  Shield,
  Server,
  Layers,
  Package,
  Brain,
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-s4Hana-simple-logistics-training';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function SAPS4HANASimpleLogisticsTraining() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  
  const courseModules = [
    "Introduction to SAP HANA Topics include SAP In-Memory Strategy, Architecture Overview and various views (analytic, attribute, calculation, etc)",
    "SAP S/4 HANA Topics include S/4 HANA Roadmap, Benefits, introduction to SAP Fiori and deployment options",
    "Introduction to SAP Activate Methodology Topics include System Conversion, Landscape transformation and New Implementation",
    "Overview of SAP HANA Cloud Solutions Topics include SAP strategy for Cloud and SAP HANA, overview of SAP Cloud Data Centers and SAP HANA Enterprise Cloud",
    "Key Innovations of SAP Simple Logistics Topics include inventory management, material requirement planning, material valuation and order management & billing",
    "Changes in SAP Simple Logistics Processes Topics include overview of SAP simple logistics processes, SAP Fiori apps related to logistics/supply chain and architectural changes pertaining to product master, supplier information, sourcing & procurement",
    "Industry Specific Solutions for Logistics functions for Engineering & Construction",
    "Industry Specific Solutions for Logistics functions for Aerospace & Defense",
    "Industry Specific Solutions for Logistics functions for Mill Industry",
    "Industry Specific Solutions for Logistics functions for Automotive",
    "Migration to SAP S/4 HANA",
    "Goals",
    "Scope and impact of the SAP S/4 HANA Materials",
    "Management & Operation Topics include pre-requisites, configuration and perform migration to the SAP S/4 HANA",
    "Live Project"
  ];

  const whoShouldAttend = [
    "SAP solution architect",
    "Application consultant", 
    "Support consultant",
    "Project manager",
    "Fresh graduates, looking for a career in this area of expertise"
  ];

  const keyDifferentiators = [
    {
      title: "Free Demo sessions to get to know how the course is conducted",
      description: "Experience our teaching methodology and course quality before enrollment with complimentary demo sessions that showcase our practical approach to SAP S/4 HANA Simple Logistics training."
    },
    {
      title: "Flexible and customized timings – we plan our schedule as per your convenience", 
      description: "We understand working professionals' constraints and offer flexible batch timings including weekday and weekend options, ensuring you don't need to disturb your regular work schedule."
    },
    {
      title: "Easy to follow, since most of the course is practical oriented with live industry cases",
      description: "Our curriculum emphasizes hands-on learning with real-world business scenarios and live industry case studies, making complex concepts easy to understand and apply."
    },
    {
      title: "Classes driven by real time experts in SAP industry",
      description: "Learn from experienced professionals across SAP domain, occupying various positions such as middle level managers, experienced faculty from reputed institutes with deep industry knowledge."
    },
    {
      title: "Provides notes and recorded videos, so you can follow the course anywhere, anytime",
      description: "Access comprehensive study materials and recorded sessions for flexible learning without any location hassles, enabling you to learn at your own pace and convenience."
    },
    {
      title: "Complete assistance to help you crack interviews",
      description: "We provide FAQs, sample resumes and tips to help you succeed in interviews and secure your dream job in SAP Simple Logistics consulting."
    },
    {
      title: "Get trained in SAP Simple Logistics in just 45 hours",
      description: "Select either weekend or weekday mode for our intensive 45-hour training program designed to make you job-ready in SAP S/4 HANA Simple Logistics."
    },
    {
      title: "Industry relevant curriculum",
      description: "Our curriculum is constantly updated to meet the growing needs of the industry, ensuring you learn the latest features and best practices in SAP S/4 HANA Simple Logistics."
    }
  ];

  const simpleLogisticsFaqs = [
    {
      question: "What is SAP S/4 HANA Simple Logistics?",
      answer: "SAP Simple Logistics, also referred to as SAP S/4 HANA Enterprise Management, consists of all the key modules under SAP ERP Business Suite. The list of modules include Material Management, Supply Chain, Demand Planning, Sourcing and Procurement, Contract Management, and Manufacturing. It manages business processes like Procurement, Inventory Management, Order Management & Billing, and Material Requirement Planning."
    },
    {
      question: "What are the prerequisites for this course?",
      answer: "Must have basic understanding of logistics processes and should have some knowledge of any SAP module. These foundational requirements help in better understanding of the advanced concepts covered in the training."
    },
    {
      question: "Why should I do this SAP Simple Logistics course?",
      answer: "SAP Simple Logistics is rated as the best sap s4 hana simple logistics training for innovative material management, supply chain management, production planning and also sales & distribution within medium or large enterprises. Getting trained in this course would help you reap excellent rewards in SAP and make the next crucial move in your career."
    },
    {
      question: "How will I execute the practicals?",
      answer: "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux and Unix."
    },
    {
      question: "What is the duration of the course?",
      answer: "Get trained in SAP Simple Logistics in just 45 hours. You can select either weekend or weekday mode as per your convenience and schedule."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide complete assistance to help you crack interviews including FAQs, sample resumes and tips. VR IT Solutions has trained & placed thousands of people in major MNCs like Infosys, Wipro, Accenture, Deloitte, Cognizant, Cap Gemini and other companies."
    },
    {
      question: "What support do you provide during the course?",
      answer: "We provide notes and recorded videos so you can follow the course anywhere, anytime without any location hassles. We also offer flexible and customized timings planned as per your convenience."
    },
    {
      question: "Who are the trainers?",
      answer: "Classes are driven by real time experts in SAP industry - experienced professionals across SAP domain, occupying various positions such as middle level managers, experienced faculty from reputed institutes."
    },
    {
      question: "Is the curriculum updated regularly?",
      answer: "Yes, our industry relevant curriculum is constantly updated to meet the growing needs of the industry, ensuring you learn the latest SAP S/4 HANA Simple Logistics concepts and best practices."
    },
    {
      question: "Do you offer demo sessions?",
      answer: "Yes, we provide free demo sessions to get to know how the course is conducted. This helps you understand our teaching methodology and course quality before making a decision to enroll."
    }
  ];

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    SAP S/4 HANA Simple Logistics Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="SAP S/4 HANA Simple Logistics Training Course in Hyderabad - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 40 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  SAP Simple Logistics, also referred to as SAP S/4 HANA Enterprise Management, consists of all the key modules under SAP ERP Business Suite. The list of modules include Material Management, Supply Chain, Demand Planning, Sourcing and Procurement, Contract Management, and Manufacturing.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Using S/4 HANA Enterprise Management, the following are the list of business processes that can be managed: Procurement, Inventory Management, Order Management & Billing, Material Requirement Planning.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  In <span className="text-orange-400 font-bold">VR IT Solutions</span>, we assure you get the best sap training support in sap s4 hana simple logistics training and rated as one of the few institutes in Hyderabad to offer well focussed and customized training.
                </p>

                <CourseActionButtons 
                  courseName="SAP S/4 HANA Simple Logistics Training"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>

            {/* Other SAP Courses */}
            <section className="bg-gradient-to-br from-gray-600/15 via-slate-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-gray-400/30 shadow-xl shadow-gray-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Other SAP Courses
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/sap-basis-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Database className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Basis</span>
                  </div>
                </Link>
                <Link href="/sap-leonardo-training-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Brain className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Leonardo</span>
                  </div>
                </Link>
                <Link href="/sap-fico-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP FICO</span>
                  </div>
                </Link>
                <Link href="/sap-sd-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP SD</span>
                  </div>
                </Link>
                <Link href="/sap-mm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Package className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP MM</span>
                  </div>
                </Link>
                <Link href="/sap-hana-admin-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Server className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP HANA</span>
                  </div>
                </Link>
                <Link href="/sap-ewm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Layers className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP EWM</span>
                  </div>
                </Link>
                <Link href="/sap-security-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Security</span>
                  </div>
                </Link>
              </div>
            </section>
            
            {/* Why Should You Do This Course - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    SAP Simple Logistics is rated as the best sap s4 hana simple logistics training for innovative material management, supply chain management, production planning and also sales & distribution within medium or large enterprises. The above areas being core of business, getting trained in this course would help you reap excellent rewards in SAP. If you are a SAP solution architect, functional consultant or in any techno-functional role in logistics or supply chain industry, this course enables you to perform better and helps you make the next crucial move in your career.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">VR IT Solutions</span> is one of the best software training institutes in Hyderabad to offer well focused and career-oriented training program in SAP Simple Logistics. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Prerequisites - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-purple-400 animate-pulse" />
                Prerequisites
              </h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100 font-medium">Must have basic understanding of logistics processes.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100 font-medium">Should have some knowledge of any SAP module.</span>
                </div>
              </div>
            </section>

            {/* Course Structure - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                Course Structure
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
            </section>

            {/* Who Can Do This Course - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-rose-400" />
                Who can do this course?
              </h2>
              <div className="grid gap-4">
                {whoShouldAttend.map((attendee, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                    <Star className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-rose-100 font-medium">{attendee}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why VR IT Solutions */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-400" />
                Why VR IT solutions?
              </h2>
              <div className="space-y-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-cyan-100 leading-relaxed">
                      {differentiator.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* How Will I Execute Practicals - Green Theme */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-green-400 animate-pulse" />
                How will I execute the Practicals?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux and Unix.
                  </p>
                </div>
                <div className="mt-6 bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
                <FAQ faqs={simpleLogisticsFaqs} theme="default" />
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="SAP S/4 HANA Simple Logistics" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
      </div>
    </>
  );
}
