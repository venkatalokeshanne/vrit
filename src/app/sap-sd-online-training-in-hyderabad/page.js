import React from 'react';
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
  Shield,
  Server,
  Network,
  Layers,
  Package,
  Truck,
  Brain
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-sd-online-training-in-hyderabad';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default async  function SAPSDOnlineTrainingInHyderabad() {
  const structuredDataJson = getStructuredDataStatic('sap-sd-online-training-in-hyderabad');

  // Fetch metadata for dynamic hero image
  const courseData = getCourseBySlugStatic('sap-sd-online-training-in-hyderabad');
  const metadata = courseData?.metadata;
  const mainImageUrl = metadata?.mainImage || '/logo.png';

  const courseModules = [
    "Introduction to SAP and SAP SD Module",
    "Organizational Structure in Sales and Distribution",
    "Master Data Management (Customer Master, Material Master)",
    "Sales Document Processing (Inquiry, Quotation, Sales Order)",
    "Delivery Processing and Shipping",
    "Billing and Invoice Processing",
    "Pricing Procedures and Condition Techniques",
    "Credit Management and Risk Assessment",
    "Returns and Complaints Processing",
    "Integration with MM and FI Modules",
    "Output Determination and Communication",
    "Variant Configuration and Product Proposals",
    "Reports and Analytics in SD",
    "Real-time Business Scenarios and Case Studies",
    "Live Project Implementation"
  ];

  const whoShouldAttend = [
    "Business professionals working in Sales and Distribution",
    "SAP consultants looking to specialize in SD module",
    "Fresh graduates interested in SAP functional roles",
    "Professionals from supply chain and logistics background",
    "Business analysts and process consultants",
    "ERP implementation professionals"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with real SAP system access. Students get hands-on experience with actual business scenarios, helping you understand SAP SD concepts better and prepare for real-world implementation challenges."
    },
    {
      title: "Live project", 
      description: "Our curriculum includes a complete end-to-end SAP SD implementation project covering order-to-cash cycle, helping you apply the skills learned in real business scenarios and build a strong portfolio for your career."
    },
    {
      title: "Industry expert trainers",
      description: "Our trainers are certified SAP professionals with 8+ years of industry experience in SAP SD implementations across various industries including manufacturing, retail, and distribution companies."
    },
    {
      title: "Complete SAP SD mastery in 90 days",
      description: "Our intensive training program is designed to make you job-ready SAP SD consultant in just 90 days. The curriculum covers all essential topics with practical scenarios to ensure you're industry-ready upon completion."
    },
    {
      title: "Industry relevant curriculum",
      description: "Our curriculum is constantly updated to include latest SAP SD features and industry best practices. You learn the most current version of SAP SD with real-world business scenarios used by top companies."
    }
  ];

  const sapSdFaqs = [
    {
      question: "What is SAP SD and why should I learn it?",
      answer: "SAP SD (Sales and Distribution) is one of the core functional modules in SAP ERP that handles sales, shipping, billing, and customer management processes. Learning SAP SD opens doors to high-paying careers in SAP consulting, business analysis, and ERP implementation with average salaries ranging from ₹6-18 LPA."
    },
    {
      question: "What are the prerequisites for SAP SD online training?",
      answer: "Basic understanding of business processes, especially sales and distribution workflows, is helpful. Knowledge of ERP concepts is beneficial but not mandatory. Our online course covers all foundational concepts needed to master SAP SD from scratch."
    },
    {
      question: "What is the duration and fee structure for SAP SD online training?",
      answer: "Our SAP SD online training is a comprehensive 90-day program with flexible scheduling options. The course includes live online sessions, recorded content, and hands-on practice. Contact us at +91-9032734343 for current fee structure and available discounts."
    },
    {
      question: "Do you provide SAP SD certification preparation?",
      answer: "Yes, our training thoroughly prepares you for SAP Certified Application Associate - Sales and Distribution with SAP ERP certification. We provide practice tests, certification guidance, and additional study materials to help you pass the exam."
    },
    {
      question: "What career opportunities are available after SAP SD training?",
      answer: "SAP SD professionals can work as SAP SD Consultant, Functional Analyst, Business Process Expert, SAP SD Support Specialist, Implementation Consultant, and Team Lead. Top companies like Accenture, IBM, Wipro, TCS, and Infosys actively hire SAP SD professionals."
    },
    {
      question: "How do online practical sessions work for SAP SD?",
      answer: "Our online training includes access to live SAP systems through cloud-based environments. Students get hands-on experience with real SAP SD scenarios, configuration exercises, and end-to-end process implementation through screen sharing and virtual labs."
    },
    {
      question: "What is covered in the SAP SD online curriculum?",
      answer: "The curriculum covers organizational structure, master data management, sales order processing, delivery and shipping, billing, pricing procedures, credit management, returns processing, integration with other modules, and live project implementation."
    },
    {
      question: "Do you provide job placement assistance for online students?",
      answer: "Yes, we provide 100% placement assistance for online students including resume preparation, interview coaching, job referrals, and continuous support. We have partnerships with 200+ companies looking for SAP SD professionals across India."
    },
    {
      question: "Can working professionals attend SAP SD online training?",
      answer: "Absolutely! Our online training is specifically designed for working professionals with flexible batch timings including weekend batches and evening classes. All sessions are recorded for later reference and practice."
    },
    {
      question: "What support do you provide during and after the online course?",
      answer: "We provide lifetime support including doubt clearing sessions, access to updated materials, job assistance, interview preparation, alumni network access, and continuous mentoring. Our trainers are available for guidance throughout your SAP SD career journey."
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
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
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    SAP SD Online Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Banglore</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="SAP SD Online Training Course in Banglore - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 90 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> is a prominent name in Banglore&apos;s best SAP SD online training. We are one stop solution for people looking for top and best SAP SD Online Training.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our trainers are highly qualified and experienced SAP SD consultants providing high quality online training in Banglore. The Certified Expert Group has created our content and curriculum of SAP SD based on current industry needs. This allows the students to be industry ready SAP professionals, where they can handle most realtime SAP SD scenarios.
                </p>

                <CourseActionButtons 
                  courseName="SAP SD Online Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
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
            
            {/* What is SAP SD - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                What is SAP SD?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    SAP SD (Sales and Distribution) is one of the core functional modules in SAP ERP that handles the complete order-to-cash process. It manages sales transactions, customer relationships, pricing, delivery processing, billing, and integration with other SAP modules to provide comprehensive business solutions.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Learning SAP SD opens doors to lucrative career opportunities in SAP consulting, business analysis, and ERP implementation. With businesses increasingly adopting SAP solutions, skilled SAP SD professionals are in high demand across industries.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> is one of the best SAP SD online training institutes to offer well focused and career-oriented training program in SAP Sales and Distribution.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Should You Join This Course - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you join this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With SAP being the leading ERP solution globally, SAP SD professionals are in high demand across industries. Our online training offers excellent value for professionals looking to advance their careers in SAP consulting, with opportunities for high salaries and global career prospects in multinational companies.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    Make <span className="text-emerald-400 font-semibold">VR IT solutions</span> as your first choice for SAP SD online training in Banglore due to our systematic training methodology, expert trainers, and comprehensive online learning environment! Join now for a lucrative SAP career.
                  </p>
                </div>
              </div>
            </section>

            {/* What Do You Learn - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                What do you learn in this course?
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

            {/* Who Should Attend - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-rose-400" />
                Who should attend?
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

            {/* Key Differentiators */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-400" />
                Key Differentiators
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

            {/* FAQ Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
                <FAQ faqs={sapSdFaqs} theme="default" />
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP SD Online" phoneNumber="+91-9032734343" />
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
      
      {/* Review Structured Data */}

  
      </div>
    </>
  );
}
