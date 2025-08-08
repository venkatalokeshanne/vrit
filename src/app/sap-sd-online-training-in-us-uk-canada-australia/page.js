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
  PieChart
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-sd-online-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for SAP SD Training
const sapSdFaqs = [
  {
    question: "What is SAP SD and why is it important?",
    answer: "SAP SD (Sales & Distribution) is one of the core modules of SAP ERP. It is used to store the customer and product data of an organization. The main goal of SAP SD is it helps in managing the shipping, billing, selling and transportation of products and services of a company."
  },
  {
    question: "Who can do this course?",
    answer: "This course is suitable for Logistics professionals, Finance professionals, Consultants who would be mainly responsible for implementing sales, billing and transportation of products, Fresh graduates with an aim to understand the basics of SAP SD, and Engineering graduates looking for a career in SAP Sales & Distribution module."
  },
  {
    question: "What are the prerequisites for SAP SD training?",
    answer: "Basic knowledge of how an organization deals with their customers and products. Prior knowledge of inventory and how to deal with billing and shipping is preferable, but not mandatory."
  },
  {
    question: "What is the duration of SAP SD training?",
    answer: "Our SAP SD training is a comprehensive 120-day program that can be completed in just 60 hours by selecting either weekend or weekday mode. Contact us at +91-9032734343 for detailed schedule."
  },
  {
    question: "What makes VR IT Solutions different from other institutes?",
    answer: "We offer comprehensive practical sessions, live projects, industry-relevant curriculum updated every 6 months, real-time project explanation, free resume preparation, backup classes, career guidance, mock tests and interviews, and 24/7 support."
  },
  {
    question: "Will I work on live projects during the training?",
    answer: "Yes, our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios. Every theory session is adequately supported by practical sessions."
  },
  {
    question: "What career opportunities are available after SAP SD training?",
    answer: "SAP SD professionals can work as SAP SD Consultant, Sales & Distribution Analyst, ERP Implementation Specialist, Business Process Consultant, and SAP Functional Consultant in various industries including manufacturing, retail, and logistics."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have successfully placed thousands of students in major MNCs."
  }
];

export default function SapSdOnlineTrainingInUSUKCanadaAustralia() {
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
    "Introduction to SAP Environment",
    "Basic Pre-requisites",
    "Enterprise Structure",
    "Master data (customer, material, conditions and customer material info record)",
    "Basic Functions (includes account groups, number ranges, partner determination procedure and general settings)",
    "Sales Documents (includes overview, header level, item level and schedule line level)",
    "Pricing",
    "Shipping and Picking",
    "Billing",
    "Detailed configuration of sales processes",
    "Certain advanced topics such as revenue account determination, free goods determination, bill of materials, material determination, cross selling and more",
    "Live Project"
  ];

  const targetAudience = [
    "Logistics professionals",
    "Finance professionals", 
    "Consultants, who would be mainly responsible for implementing sales, billing and transportation of products",
    "Fresh graduates, with an aim to understand the basics of SAP SD and implement it in practice",
    "Engineering graduates, looking for a career in SAP Sales & Distribution module"
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
      title: "Get trained in SAP SD in just 60 hours",
      description: "With the right faculty and easy to understand learning sessions, we assure you that you would get the required speed to complete this course within 60 hours and get started on a fruitful career in SAP SD. (select either weekend or weekday mode)"
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  return (
    <>


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Green/Blue */}
            <section className="bg-gradient-to-br from-green-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-green-400/30 shadow-2xl shadow-green-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    SAP SD Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="SAP SD Training Course in US, UK, Canada & Australia - VR IT Solutions"
                    className="w-full object-cover border-2 border-green-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-green-500/25 to-teal-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-green-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-green-400 animate-bounce" />
                      <span className="text-green-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-400 animate-spin" />
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 120 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP SD"
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
            
            {/* SAP SD Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Package className="w-8 h-8 text-purple-400 animate-pulse" />
                SAP SD Training Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    SAP SD (Sales & Distribution) is one of the core modules of SAP ERP. It is used to store the customer and product data of an organization. The main goal of SAP SD is it helps in managing the shipping, billing, selling and transportation of products and services of a company. The SAP Logistics module manages customer relationships, right from raising a quotation to sales order and billing of the product or service. This module is interrelated with other modules such as SAP MM and PP.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    VRIT Solutions is one of the few institutes in US, UK, Australia, Canada to offer well focused and career-oriented training program in sap sd online training.
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
                    With inventory and materials management being a core area of business, this area of SAP implementation is gaining importance and is making rapid strides in innovation and implementation. This course will be particularly useful for purchase managers, logistics managers and other professionals, who want to foray into this area and also for existing professionals, who are handling a plethora of functions within the sales and distribution domain.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VRIT Solutions is one of the few institutes in US, UK, Australia, Canada to offer the best and balanced training in SAP SD that is well suited to help you embark on the right path of success.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    With inventory and materials management being a core area of business, this area of SAP implementation finds significance in almost all types of manufacturing and other industries. This course is particularly useful for purchase managers and other executives working in the logistics area of the business, apart from other professionals, who want to foray into this area. With automation seeping across all segments of business, this course is highly valuable and is rated as one of the top SAP courses, offering lucrative jobs in the logistics domain.
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    VR IT Solutions is one of the few institutes in US, UK, Australia, Canada to offer the best and innovative sap sd online training in US, UK, Australia, Canada that is well suited to help you embark on the right path of success.
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
            </section>

            {/* Prerequisites - Rose/Pink Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-rose-400" />
                Prerequisites
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-rose-100 font-medium">Basic knowledge of how an organization deals with their customers and products</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-rose-100 font-medium">Prior knowledge of inventory and how to deal with billing and shipping (preferable, but not mandatory)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Course Curriculum - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-indigo-400" />
                Course Curriculum
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
                  Learn sap sd online training and mode by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.
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
              <FAQ faqs={sapSdFaqs} title="SAP SD Training FAQs" theme="sapsd" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Master SAP SD Sales & Distribution?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Get trained in SAP SD in just 60 hours and embark on a fruitful career in SAP Sales & Distribution!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="SAP SD"
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
              <CourseSidebar courseName="SAP SD" phoneNumber="+91-9032734343" />
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
