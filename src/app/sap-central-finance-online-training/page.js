import Image from 'next/image';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic  } from '../../utils/staticCourses';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import { 
  Target, 
  BookOpen, 
  Award, 
  Users,
  Database,
  Rocket,
  Clock,
  CheckCircle,
  FileText,
  Settings,
  Star,
  Phone,
  TrendingUp,
  BarChart3
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-central-finance-online-training';

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}

export default function SAPCentralFinanceOnlineTraining() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const courseStructure = [
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

  const whoCanDo = [
    "Fresh graduates with B.A or B.com background",
    "Chartered accountants",
    "Executives, who are currently working as accountants",
    "Software professionals, who are interested to switch their careers",
    "SAP professionals, working on other domains, interested to make a career switch"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "VRIT Solutions is one of the best Sap Central Finance training Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
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
      title: "Learn SAP Central Finance in just 80 hours",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP Central Finance training professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum and Sap Central Finance interview questions is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  const learningBenefits = [
    "Learning SAP Central Finance can be exceptionally useful for both the person and the company",
    "This SAP Central Finance certificate will build your skills and boost your career",
    "It will help you gain respect from your office colleagues and employers",
    "After completing the SAP Central Finance training you will get many excellent job opportunities in reputed companies",
    "SAP Central Finance certificate helps you to get a handsome salary in reputed companies",
    "SAP Central Finance training helps firms and organizations in running their business and grow substantially",
    "This certification helps you to build better relationships with clients to get business",
    "It will help you to get more acknowledgment in your professional life"
  ];

  const sapCentralFinanceFaqs = [
    {
      question: "What is SAP Central Finance and why should I learn it?",
      answer: "SAP Central Finance is a robust solution that enables organizations to accomplish their business objectives by integrating financial data from diverse systems into a central platform. It optimizes financial operations, offers real-time insights, and enhances overall decision-making. Learning it opens doors to high-paying careers in SAP S/4 HANA finance with excellent growth prospects."
    },
    {
      question: "What are the prerequisites for SAP Central Finance training?",
      answer: "VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no financial and accounting experience. However, basic knowledge of finance and accounting concepts is helpful."
    },
    {
      question: "What is the duration and fee structure for SAP Central Finance training?",
      answer: "Our SAP Central Finance training is a comprehensive 50-day program designed to be completed in 80 hours. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
    },
    {
      question: "Do you provide SAP Central Finance certification preparation?",
      answer: "Yes, our training prepares you for SAP certification exams related to Central Finance and S/4 HANA Finance. We provide practice materials, mock tests, and additional study resources to help you pass the certification exams successfully."
    },
    {
      question: "What career opportunities are available after SAP Central Finance training?",
      answer: "SAP Central Finance professionals can work as SAP Finance Consultant, Central Finance Specialist, SAP S/4 HANA Finance Consultant, Financial Systems Analyst, and Implementation Specialist. Top companies actively hire SAP Central Finance professionals with attractive salary packages."
    },
    {
      question: "Do you provide hands-on practice and live projects?",
      answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and a live project with end-to-end implementation process. Students get practical experience working with SAP Central Finance system and real-time concepts throughout the course."
    },
    {
      question: "How will I execute the practicals?",
      answer: "In order to work on practicals, you need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS. We provide complete guidance for setup and practical execution."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have tie-ups with numerous companies looking for SAP Central Finance professionals."
    },
    {
      question: "Can working professionals attend SAP Central Finance training?",
      answer: "Yes, we offer flexible batch timings including weekend batches and evening classes specifically designed for working professionals. Online training options are also available with live instructor-led sessions."
    },
    {
      question: "What support do you provide after course completion?",
      answer: "We provide lifetime support including job assistance, interview preparation, access to updated materials, doubt clearing sessions, and alumni network access. Our trainers are available for guidance even after course completion."
    }
  ];

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />
      
      {/* SEO-friendly structured content */}
      <header>
        <h1 className="sr-only">SAP Central Finance Online Training in Hyderabad - Best SAP Training Institute</h1>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Blue/Green */}
            <section className="bg-gradient-to-br from-blue-500/15 via-green-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    SAP Central Finance
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">Online Training</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl}
                    alt="SAP Central Finance Online Training Course in Hyderabad - VR IT Solutions"
                    width={1200}
                    height={630}
                    className="w-full object-cover border-2 border-blue-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-teal-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400 animate-bounce" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-400 animate-spin" />
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 50 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP Central Finance"
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
            
            {/* SAP Central Finance Course Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400 animate-pulse" />
                SAP Central Finance Course
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed mb-4">
                    SAP Central Finance is a robust solution that enables organizations to accomplish their business objectives by integrating financial data from diverse systems into a central platform. This way, it optimizes financial operations, offers real-time insights, and above all, enhances overall decision-making. It is a component of SAP S/4 HANA, the next-generation enterprise planning (ERP) system from SAP.
                  </p>
                  <p className="text-purple-100 leading-relaxed">
                    Using SAP Central Finance, an organization can generate a central hub for financial data, thereby harmonizing data from multiple ERP or legacy systems. This way, an organization can generate a unified version of financial data, enabling real-time reporting, analysis, and decision-making.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed mb-4">
                    Some of the key features of SAP Central Finance include real-time data replication, data harmonization, centralized data governance, and matured analytics and reporting. Implementing SAP Finance involves a series of tasks like data mapping, system integration, and change management.
                  </p>
                  <p className="text-indigo-100 leading-relaxed">
                    With SAP Central Finance becoming the next-generation technology, amidst a booming job market, VRIT Solutions has started a training program covering the core modules of this solution. VRIT offers the best-in-class classroom and online training in SAP Central Finance with hands-on practical sessions and live projects.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Come, explore the SAP Central Finance course at VRIT Solutions and become a leading SAP Finance Consultant!
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-3">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> is one of the best software training institutes in Hyderabad to offer well focused and career-oriented training program in <a href="https://www.vritsol.com/sap-central-finance-online-training-in-hyderabad" className="text-blue-300 hover:text-blue-200 underline">SAP Central Finance online training</a>.
                  </p>
                </div>
              </div>
            </section>

            {/* Streamline Financial Operations - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <TrendingUp className="w-8 h-8 text-emerald-400 animate-pulse" />
                  Streamline Your Financial Operations
                </h2>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed text-lg font-semibold">
                    Now streamline your financial operations like never before!
                  </p>
                  <p className="text-emerald-100 leading-relaxed mt-3">
                    Yes, SAP now brings a revolutionary finance platform that boasts several advanced features that is several steps ahead of the SAP Central Finance module and that is none other than SAP Central Finance.
                  </p>
                </div>
              </div>
            </section>

            {/* Why to do this course - Amber Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-amber-400 animate-pulse" />
                Why to do this course?
              </h2>
              <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                <p className="text-amber-100 leading-relaxed">
                  This course offers the competence and power of meeting all the accounting and financial requirements of an organization. With more and more organizations embarking on financial automation, this course assumes significance within the ERP domain and hence doing this course offers great benefits for finance and accounting professionals and also other professionals, looking for lucrative opportunities in financial automation.
                </p>
              </div>
            </section>

            {/* Who can do and Prerequisites - Dual Theme */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-rose-400" />
                  Who can do this course?
                </h2>
                <div className="space-y-3">
                  {whoCanDo.map((person, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-rose-500/10 rounded-xl border border-rose-400/20 hover:bg-rose-500/15 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-rose-100 text-sm font-medium">{person}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  Pre-requisites
                </h2>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed mb-4">
                    VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no financial and accounting experience.
                  </p>
                  <p className="text-cyan-100 leading-relaxed">
                    VR IT Solutions is one of the best SAP Central Finance training in hyderabad to offer the best and balanced training in SAP Central Finance that is well suited to help you embark on the right path of success. So, get started by clicking here.
                  </p>
                </div>
              </section>
            </div>

            {/* How will I execute the Practicals */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-violet-400" />
                How will I execute the Practicals?
              </h2>
              <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                <p className="text-violet-100 leading-relaxed">
                  In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS.
                </p>
              </div>
            </section>

            {/* Course Structure - Blue Theme */}
            <section className="bg-gradient-to-br from-blue-600/15 via-indigo-600/20 to-purple-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-blue-400" />
                Course Structure
              </h2>
              <div className="grid gap-4">
                {courseStructure.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-xl border border-blue-400/20 hover:bg-blue-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-400/30 rounded-xl">
                <p className="text-indigo-200 font-semibold">
                  <strong className="text-indigo-300">Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
              <div className="mt-4 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                <p className="text-purple-100 leading-relaxed">
                  With VRIT Solutions providing the best Sap Central Finance online training this course helps professionals to manage and process an array of transactions in finance and accounting in an automated ERP SAP environment.
                </p>
              </div>
            </section>

            {/* Key Differentiators - Green Theme */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-green-400" />
                Our Key Differentiators
              </h2>
              <div className="grid gap-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-green-500/10 rounded-xl p-6 border border-green-400/20 hover:bg-green-500/15 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-green-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-green-100 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Benefits - Teal Theme */}
            <section className="bg-gradient-to-br from-teal-600/15 via-cyan-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-teal-400/30 shadow-xl shadow-teal-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-teal-400" />
                Top Learning Benefits of SAP Central Finance Training Course
              </h2>
              <div className="grid gap-4">
                {learningBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-teal-500/10 rounded-xl border border-teal-400/20 hover:bg-teal-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={sapCentralFinanceFaqs} title="SAP Central Finance Training FAQs" theme="sap-central-finance" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your SAP Central Finance Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Get trained in SAP Central Finance in just 80 hours – (select either weekend or weekday mode). Join now to make SAP Central Finance as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="SAP Central Finance"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="SAP Central Finance" phoneNumber="+91-9032734343" />
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

      
      
      </div>
    </>
  );
}