import Image from 'next/image';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic  } from '../../utils/staticCourses';
import {
  Clock,
  CheckCircle,
  Star,
  Phone,
  BookOpen,
  Database,
  BarChart3,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'simple-finance-training-in-hyderabad';// FAQ Data for S/4 HANA Finance Training
const s4HanaFinanceFaqs = [
  {
    question: "What is S/4 HANA Finance and why should I learn it?",
    answer: "S/4 HANA Finance (previously called SAP Simple Finance) is the first business application developed for the S/4HANA platform. It removes traditional barriers between transactional, analytics, and planning systems to provide instant insights and real-time analysis. Learning it opens doors to high-paying careers in next-generation SAP finance with excellent growth prospects."
  },
  {
    question: "What are the key differences between traditional SAP FICO and S/4 HANA Finance?",
    answer: "S/4 HANA Finance introduces the Universal Journal concept, eliminating the need for separate reconciliation between FI and CO modules. It provides real-time financial reporting, simplified data model, enhanced user experience with Fiori apps, faster processing speed, and integrated features for various financial functions."
  },
  {
    question: "What prerequisites do I need to learn S/4 HANA Finance?",
    answer: "Basic understanding of accounting principles and financial processes is essential. Prior experience with SAP ERP or FICO modules is highly recommended. Familiarity with SAP GUI navigation and basic SAP configuration concepts will be beneficial for faster learning."
  },
  {
    question: "What is the duration and fee structure for S/4 HANA Finance training?",
    answer: "Our S/4 HANA Finance training is a comprehensive 40-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
  },
  {
    question: "What career opportunities are available after S/4 HANA Finance certification?",
    answer: "Career opportunities include S/4 HANA Finance Consultant, Financial Systems Analyst, SAP Finance Migration Specialist, S/4 HANA Project Manager, Business Process Consultant, and Enterprise Finance Architect. With growing S/4 HANA adoption, professionals can expect attractive salary packages."
  },
  {
    question: "Do you provide hands-on practice and live projects?",
    answer: "Yes, our training includes extensive hands-on labs with live S/4 HANA system, real business scenarios including Universal Journal configuration, Asset Accounting, Advanced Financial Closing, Migration from ECC to S/4 HANA Finance, and Fiori apps for finance."
  },
  {
    question: "What is covered in the S/4 HANA Finance migration training?",
    answer: "The migration training covers pre-requisites for S/4 HANA migration, pre-migration activities, during migration activities, and post-migration activities. Students learn the complete migration process from ECC to S/4 HANA Finance with practical implementation."
  },
  {
    question: "Do you provide placement assistance after S/4 HANA Finance training?",
    answer: "Yes, we provide 100% placement assistance including resume building, interview preparation, technical mock interviews, and direct connections with hiring partners. Our placement team has successfully placed students in leading companies and SAP consulting firms."
  },
  {
    question: "What is the Universal Journal concept in S/4 HANA Finance?",
    answer: "Universal Journal is the revolutionary concept that combines Financial Accounting (FI) and Controlling (CO) into a single source of truth. It eliminates reconciliation between modules, provides real-time reporting, supports multiple accounting principles, and enables enhanced analytical capabilities."
  },
  {
    question: "What support do you provide after course completion?",
    answer: "We provide lifetime access to course materials, job assistance, interview preparation, access to updated materials, doubt clearing sessions, and alumni network access. Our trainers are available for guidance even after course completion."
  }
];

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function SimpleFinanceTrainingInHyderabad() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);


  const topicsCovered = [
    "What is S/4 HANA and S/4 HANA System Landscape?",
    "Changes in Basic Settings Configuration in SAP Finance and Controlling?", 
    "General Ledger:",
    "a) Merging of General Ledger Account and Cost Element.",
    "b) Why there is no reconciliation between Finance and Controlling?",
    "c) Integration between FI and CO in S/4 HANA Finace?",
    "Accounts payable and Accounts Receivable:",
    "a) Business Partner configuration- vendor /customer master.",
    "New House Bank Accounting in S/4 HANA by using Fiori Application.",
    "Asset accounting:",
    "a)Why Accounting principal is important in Asset Accounting Configuration.",
    "b) Parallel Ledger Concept in Asset Accounting.",
    "c) New functionalities in Asset Accounting balances uploading.", 
    "d) New Functionalities in AFAB- Depreciation Run.",
    "Table structure in S/4 HANA and Universal general ledger Concept?"
  ];

  const costCenterAccounting = [
    "Why Cost Element accounting integrate with GL account?",
    "Product Costing:",
    "a) COGS split in Product Costing.",
    "b) Variance Split in Product Costing",
    "COPA new functionalities."
  ];

  const s4HANAFinanceMigration = [
    "Pre requisites for S/4 HANA Migration.",
    "Pre migration activities.",
    "During migration activities.",
    "Post migration activities."
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

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - S/4 HANA Finance Training in Hyderabad */}
            <section className="bg-gradient-to-br from-blue-500/15 via-cyan-600/20 to-blue-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    S/4 HANA Finance Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl}
                    alt="S/4 HANA Finance Training Course in Hyderabad - VR IT Solutions"
                    width={1200}
                    height={630}
                    className="w-full object-cover border-2 border-blue-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-cyan-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400 animate-bounce" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-400 animate-spin" />
                      <span className="text-cyan-300 font-semibold text-center sm:text-left">Duration: 40 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="S/4 HANA Finance"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>
            
            {/* S/4 HANA Finance (Simple Finance) */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-emerald-400 animate-pulse" />
                S/4 HANA Finance (Simple Finance)
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    SAP S/4HANA Finance, which was previously called SAP Simple Finance, is the first business application developed for the S/4HANA finance platform. It is designed to remove traditional barriers between transactional, analytics, and planning systems to provide instant insights and on-the-fly analysis using all levels of financial data. A business decision maker, for example, can use SAP S/4HANA Finance to model data and create forecasts of potential decisions using real-time financial data from various systems.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    The main advantage SAP S/4HANA Finance has is processing speed combined with integrated features for the various financial functions, such as financial accounting and management accounting. Because of this, SAP S/4HANA Finance allows for a much faster reconciliation of financial processes such as the quarterly close, and provides a single source of financial truth for the organization as a whole, according to SAP.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    VR IT Solutions is one of the best simple finance training in Hyderabad we offer S/4 hana online training with well focused and career-oriented training program in s4 hana simple finance.
                  </p>
                </div>
              </div>
            </section>

            {/* Topics Covered Under S/4 HANA Finance Course */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-400" />
                Topics Covered Under S/4 HANA Finance Course:
              </h2>
              <div className="grid gap-4">
                {topicsCovered.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20 hover:bg-purple-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100 font-medium">{topic}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost center Accounting */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-amber-400" />
                Cost center Accounting:
              </h2>
              <div className="grid gap-4">
                {costCenterAccounting.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* S4 HANA finance migration */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-rose-400" />
                S4 HANA finance migration:
              </h2>
              <div className="grid gap-4">
                {s4HANAFinanceMigration.map((migration, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20 hover:bg-rose-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-rose-100 font-medium">{migration}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-slate-400" />
                  Training Modes
                </h2>
                <div className="space-y-3">
                  {trainingModes.map((mode, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-500/10 rounded-xl border border-slate-400/20 hover:bg-slate-500/15 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-100 text-sm font-medium">{mode}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-emerald-400" />
                  Why to choose VR IT solutions?
                </h2>
                <div className="space-y-3">
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/20 hover:bg-emerald-500/15 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-emerald-100 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={s4HanaFinanceFaqs} title="S/4 HANA Finance Training FAQs" theme="sap-s4hana-finance" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your S/4 HANA Finance Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Join now to master S/4 HANA Finance and transform your career in the next-generation SAP platform!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="S/4 HANA Finance"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="S/4 HANA Finance" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      {/* Structured Data for SEO */}


    </>
  );
}
