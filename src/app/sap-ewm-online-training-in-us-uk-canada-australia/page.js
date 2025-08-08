import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
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
  BarChart,
  Brain,
  Activity,
  Server,
  Network,
  Shield,
  Zap,
  Building,
  Package,
  Truck,
  DollarSign,
  PieChart,
  Calculator,
  CreditCard,
  Building2,
  Warehouse,
  MapPin,
  Layers
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-ewm-online-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for SAP EWM Training
const sapEwmFaqs = [
  {
    question: "What is SAP Extended Warehouse Management (SAP EWM)?",
    answer: "Extended Warehouse Management (EWM) offers a flexible and automated support for processing various movements of goods and for managing stocks in a warehouse. The system supports planned and efficient processing of all logistics processes in a warehouse and offers an option to manage your entire warehouse complex in detail in the system – right up to the storage bin level."
  },
  {
    question: "Why should you join this course?",
    answer: "With logistics and supply chain management being complex business areas and moreover with more number of organization adopting the automation route, this course is particularly useful for those who want to make a career in the supply chain automation. EWM offers high level integration with inventory management and delivery processing."
  },
  {
    question: "Who can do this course?",
    answer: "SAP MM & SAP WM consultants can learn SAP EWM Functional, SAP Functional Consultants and SAP ABAP consultants can learn SAP EWM Technical, Software professionals who want to make a career in SAP, Fresh graduates looking for a career in SAP, Business Analysts, and Database consultants."
  },
  {
    question: "What are the pre-requisites for this course?",
    answer: "VR IT Solutions hasn't prescribed any specific pre-requisites to do this course, however the following will help: Knowledge about SAP products and its ecosystem, Basic overview of standard warehouse processes, and Technical (ABAP) knowledge."
  },
  {
    question: "What is the duration of SAP EWM training?",
    answer: "Our SAP EWM training is a comprehensive 65-day program that can be completed in just 60 hours by selecting either weekend or weekday mode. Contact us at +91-9032734343 for detailed schedule."
  },
  {
    question: "What business processes will I learn?",
    answer: "You'll learn Goods Receipt and Inbound Process, Goods Issue and Outbound process, Storage Control, Warehouse Order Creation, Posting Changes, Stock Transfers and Replenishment, Physical Inventory, slotting and rearrangement, and advanced concepts on Material Flow System, Labor Management and Yard Management."
  },
  {
    question: "What makes VR IT Solutions different for SAP EWM training?",
    answer: "We offer comprehensive practical sessions, live projects, top notch faculty from IIMs/IITs and industry, 60-hour completion time, industry-relevant curriculum updated every 6 months, real-time project explanation, free resume preparation, and 24/7 support."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including real-time project explanation, free resume preparation, backup classes, career guidance, mock tests and interviews, and 24/7 support until you get placed."
  }
];

export default function SapEwmOnlineTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const courseModules = [
    "Introduction to EWM (Extended Warehouse Management).",
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

  const targetAudience = [
    "SAP MM & SAP WM consultants can learn SAP EWM Functional.",
    "SAP Functional Consultants and SAP ABAP consultants can learn SAP EWM Technical.",
    "Software professionals, who want to make a career in SAP",
    "Fresh graduates, who are looking for a career in SAP",
    "Business Analysts",
    "Database consultants"
  ];

  const prerequisites = [
    "Knowledge about SAP products and its ecosystem.",
    "Basic overview of standard warehouse processes.",
    "Technical (ABAP) knowledge"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project",
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Top notch faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, data scientists and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Get trained in SAP EWM in just 60 hours - select either weekend or weekday mode",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP EWM professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO - Based on Your Successful Pattern */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      {/* Additional Review Schema */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      {/* Course Schema */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Teal */}
            <section className="bg-gradient-to-br from-orange-500/15 via-teal-600/20 to-cyan-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                    SAP EWM Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="SAP EWM Training Course in US, UK, Canada & Australia - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 65 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP EWM"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={true}
                  showJoinNow={false}
                  showCallNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>
            
            {/* About SAP Extended Warehouse Management (SAP EWM) - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Warehouse className="w-8 h-8 text-purple-400 animate-pulse" />
                About SAP Extended Warehouse Management (SAP EWM)
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Extended Warehouse Management (EWM) offers a flexible and automated support for processing various movements of goods and for managing stocks in a warehouse. The system supports planned and efficient processing of all logistics processes in a warehouse. The beauty of this application is that it offers an option to manage your entire warehouse complex in detail in the system – right up to the storage bin level. Not just getting an overview of the entire quantity of a material in the warehouse, you can also predict accurately, where a specific material is currently in your warehouse complex.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    VR IT Solutions is one of the best sap ewm training to offer well focused and career-oriented training program in SAP EWM. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you join this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you join this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With logistics and supply chain management being complex business areas and moreover with more number of organization adopting the automation route, this course is particularly useful for those who want to make a career in the supply chain automation. EWM offers high level integration with inventory management and delivery processing. Using EWM, you can organize, control and monitor the movement of goods.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the best software training institutes in US, UK, Australia, Canada to offer the best and balanced in Sap ewm Training that is well suited to help you embark on the right path of success. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can do this course? - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-amber-400" />
                Who can do this course?
              </h2>
              <div className="grid gap-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100 font-medium">{audience}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border border-yellow-400/30 rounded-xl">
                <p className="text-yellow-200 font-semibold">
                  Learn SAP EWM in both online and offline modes by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.
                </p>
              </div>
            </section>

            {/* What are the pre-requisites for this course? - Rose/Pink Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-rose-400" />
                What are the pre-requisites for this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed mb-4">
                    VR IT Solutions hasn't prescribed any specific pre-requisites to do this course, however the following list of pre-requisites will do help to make a good start.
                  </p>
                  <div className="space-y-3">
                    {prerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span className="text-rose-100 font-medium">{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Course Structure - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-indigo-400" />
                Course Structure
              </h2>
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20 hover:bg-indigo-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100 font-medium">{module}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 font-semibold">
                  <strong className="text-purple-300">Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
              <div className="mt-4 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                <p className="text-indigo-100 leading-relaxed">
                  With VR IT Solutions providing the best sap ewm online training, this course helps professionals to manage and process a variety of operations in supply chain management (SCM) domain in an automated SAP environment.
                </p>
              </div>
            </section>

            {/* Our Key Differentiators - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-violet-400" />
                Our Key Differentiators
              </h2>
              <div className="grid gap-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20 hover:bg-violet-500/15 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-violet-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-violet-100 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={sapEwmFaqs} title="SAP EWM Training FAQs" theme="sapewm" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Master SAP EWM Extended Warehouse Management?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Get trained in SAP EWM in just 60 hours and become an expert in supply chain automation!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="SAP EWM"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={false}
                  showDownload={false}
                  showJoinNow={true}
                  showCallNow={true}
                  layout="horizontal"
                  size="lg"
                />
              </div>
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
      
      {/* Structured Data */}
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
