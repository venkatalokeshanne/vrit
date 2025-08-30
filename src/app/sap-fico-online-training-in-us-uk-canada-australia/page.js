import CourseSidebar from '../components/CourseSidebar';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
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
  Rocket,
  Clock,
  CheckCircle,
  Settings,
  Code,
  Star,
  Phone,
  Database,
  Calculator,
  Building2
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-fico-online-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for SAP FICO Training
const sapFicoFaqs = [
  {
    question: "What is SAP FICO Course?",
    answer: "SAP Fico is a specific deployment option for gathering accounting data from SAP ERP systems into one central SAP S/4HANA system. This course provides an overview of the concept, the architecture, and the functionalities of SAP Fico for LOB Finance."
  },
  {
    question: "What is the difference between SAP Fico and simple finance?",
    answer: "SAP Fico is not a product but rather a deployment model for SAP Simple Finance, formerly known as the 'Central Journal' approach. The key notion behind the SAP Fico function is that it breaks out the Finance and Controlling (FI/CO) applications from the rest of SAP ERP via Application Link Enabling."
  },
  {
    question: "Who can do this course?",
    answer: "Fresh graduates with B.A or B.com background, Chartered accountants, Executives who are currently working as accountants, Software professionals who are interested to switch their careers, and SAP professionals working on other domains interested to make a career switch."
  },
  {
    question: "What are the pre-requisites for this course?",
    answer: "VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no financial and accounting experience."
  },
  {
    question: "How will I execute the Practicals?",
    answer: "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS."
  },
  {
    question: "What is the duration of SAP FICO training?",
    answer: "Our SAP FICO training is a comprehensive 120-day program that can be completed in just 80 hours by selecting either weekend or weekday mode. Contact us at +91-9032734343 for detailed schedule."
  },
  {
    question: "What are the career benefits of SAP FICO certification?",
    answer: "SAP FICO certification will build your skills, boost your career, help you gain respect from colleagues, provide excellent job opportunities in reputed companies, help you get a handsome salary, and build better relationships with clients."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including real-time project explanation, free resume preparation, backup classes, career guidance, mock tests and interviews, and 24/7 support until you get placed."
  }
];

export default function SapFicoOnlineTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const courseModules = [
    "Introduction to FI/CO and overview of various modules",
    "Learn about various global parameters such as company, company code, fiscal year, chart of accounts, etc",
    "Concepts of G/L and other accounting parameters",
    "Concepts of accounts receivables, account payables and banking",
    "Advanced concepts in assets accounting",
    "Advanced concepts in integration and how it integrates with other modules",
    "Advanced concepts in controlling and cost element accounting",
    "Advanced concepts in cost center accounting",
    "Concepts of CO-PA",
    "Learn about various concepts of internal orders and how to process them",
    "Advanced concepts in profit center accounting",
    "Advanced concepts of product costing and material ledger",
    "Real time concepts including overview of SAP methodology, creation of financial statement version, transport request creation & release and SAP Query",
    "Live project - apply real-time training with end to end implementation Process"
  ];

  const fiComponents = [
    "Accounts Receivable",
    "Accounts Payable", 
    "Asset Accounting",
    "Account Consolidation",
    "General Ledgers"
  ];

  const targetAudience = [
    "Fresh graduates with B.A or B.com background",
    "Chartered accountants",
    "Executives, who are currently working as accountants", 
    "Software professionals, who are interested to switch their careers",
    "SAP professionals, working on other domains, interested to make a career switch"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "VRIT Solutions is one of the best Sap fico training Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
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
      title: "Get trained in SAP FICO in just 80 hours",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP Fico training professional. (select either weekend or weekday mode)"
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum and sap fico interview questions is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  const learningBenefits = [
    "Learning SAP FICO can be exceptionally useful for both the person and the company.",
    "This SAP FICO certificate will build your skills and boost your career.",
    "It will help you gain respect from your office colleagues and employers.",
    "After completing the SAP FICO training you will get many excellent job opportunities in reputed companies.",
    "SAP FICO certificate helps you to get a handsome salary in reputed companies.",
    "SAP FICO training helps firms and organizations in running their business and grow substantially.",
    "This certification helps you to build better relationships with clients to get business.",
    "It will help you to get more acknowledgment in your professional life."
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
            
            {/* Hero Section - Vibrant Blue/Purple */}
            <section className="bg-gradient-to-br from-blue-500/15 via-purple-600/20 to-indigo-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    SAP FICO Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="SAP FICO Training Course in US, UK, Canada & Australia - VR IT Solutions" className="w-full object-cover border-2 border-blue-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-purple-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400 animate-bounce" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-400 animate-spin" />
                      <span className="text-purple-300 font-semibold text-center sm:text-left">Duration: 120 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP FICO"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showJoinNow={false}
                  showCallNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>
            
            {/* SAP FICO Course Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-purple-400 animate-pulse" />
                SAP FICO Course
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    SAP Fico is a specific deployment option for gathering accounting data from SAP ERP systems into one central SAP S/4HANA system. This course provides an overview of the concept, the architecture, and the functionalities of SAP Fico for LOB Finance.
                  </p>
                </div>
              </div>
            </section>

            {/* What is the difference between SAP Fico and simple finance? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-emerald-400 animate-pulse" />
                What is the difference between SAP Fico and simple finance?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    VR IT SOLUTIONS is one of the best SAP Fico online Training. SAP Fico is not a product but rather a deployment model for SAP Simple Finance, formerly known as the "Central Journal" approach. The key notion behind the SAP Fico function is that it breaks out the Finance and Controlling (FI/CO) applications from the rest of SAP ERP via Application Link Enabling.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the best SAP Fico training in US, UK, Australia, Canada. With Finance being the crucial function in most of the enterprises, SAP Financial Accounting (SAP Fico) assumes significance and has emerged as one of the popular modules, which is implemented in the organizations. SAP financial accounting module comes with a package that offers greater value for organizations in handling financial and accounting activities. It lets anyone to review the financial status of an organization in real time market.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-400" />
                    Various components that comprise the FI module are as follows:
                  </h3>
                  <div className="grid gap-3">
                    {fiComponents.map((component, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-xl border border-green-400/20">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-green-100 font-medium">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    VR IT Solutions is one of the best software training institutes in US, UK, Australia, Canada to offer well focused and career-oriented training program in SAP Fico online training.
                  </p>
                </div>
              </div>
            </section>

            {/* Why to do this course? - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-amber-400" />
                Why to do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    This course offers the competence and power of meeting all the accounting and financial requirements of an organization. With more and more organizations embarking on financial automation, this course assumes significance within the ERP domain and hence doing this course offers great benefits for finance and accounting professionals and also other professionals, looking for lucrative opportunities in financial automation.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can do this course? - Rose/Pink Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-rose-400" />
                Who can do this course?
              </h2>
              <div className="grid gap-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20 hover:bg-rose-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-rose-100 font-medium">{audience}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What are the pre-requisites for this course? - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-indigo-400" />
                What are the pre-requisites for this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no financial and accounting experience.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    VR IT Solutions is one of the best SAP Fico training in hyderabad to offer the best and balanced training in SAP FICO that is well suited to help you embark on the right path of success. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* How will I execute the Practicals? - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-cyan-400" />
                How will I execute the Practicals?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-violet-400" />
                Course Structure
              </h2>
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-violet-500/10 rounded-xl border border-violet-400/20 hover:bg-violet-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100 font-medium">{module}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 font-semibold">
                  <strong className="text-purple-300">Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
              <div className="mt-4 p-4 bg-violet-500/10 rounded-xl border border-violet-400/20">
                <p className="text-violet-100 leading-relaxed">
                  With VRIT Solutions providing the best Sap fico online training this course helps professionals to manage and process an array of transactions in finance and accounting in an automated ERP SAP environment.
                </p>
              </div>
            </section>

            {/* Our Key Differentiators - Slate Theme */}
            <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-slate-400" />
                Our Key Differentiators
              </h2>
              <div className="grid gap-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-slate-500/10 rounded-xl p-6 border border-slate-400/20 hover:bg-slate-500/15 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-slate-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-slate-100 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Learning Benefits of SAP FICO Training Course - Emerald Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-green-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
                Top Learning Benefits of SAP FICO Training Course
              </h2>
              <div className="grid gap-4">
                {learningBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20 hover:bg-emerald-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={sapFicoFaqs} title="SAP FICO Training FAQs" theme="sapfico" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Master SAP FICO Finance & Controlling?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Get trained in SAP FICO in just 80 hours and boost your career in finance and accounting!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="SAP FICO"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="SAP FICO" phoneNumber="+91-9032734343" />
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
