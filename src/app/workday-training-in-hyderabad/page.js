import CourseSidebar from '../components/CourseSidebar';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';
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
  FileText,
  Settings,
  Star,
  Phone,
  Building
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'workday-training-in-hyderabad';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default async  function WorkdayTrainingInHyderabad() {
    const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Fetch metadata for dynamic hero image
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  const workdayFaqs = [
    {
      question: "What is Workday and why is it essential for HR and Finance professionals?",
      answer: "Workday is a leading cloud-based ERP system for Human Capital Management (HCM) and Financial Management. It's essential for modern HR and finance operations, with Workday professionals earning ₹8-25 LPA due to high demand and specialized skills."
    },
    {
      question: "What are the prerequisites for Workday training?",
      answer: "Basic understanding of HR processes, finance concepts, and business operations is helpful. Knowledge of ERP systems is beneficial but not mandatory. Our course covers all fundamentals needed to master Workday functionality."
    },
    {
      question: "What is the duration and structure of Workday training?",
      answer: "Our comprehensive Workday training is a 50-day program covering Workday HCM, Financial Management, Reporting, Integration, Security, and Business Process Framework with extensive hands-on practice and real-world scenarios."
    },
    {
      question: "What career opportunities are available after Workday training?",
      answer: "Workday training opens doors to roles like Workday Consultant, Workday Analyst, HRIS Specialist, Workday Developer, Business Process Consultant, and Implementation Specialist. Top consulting firms and enterprises actively hire Workday professionals."
    },
    {
      question: "Which Workday modules will I learn in the training?",
      answer: "The training covers Workday HCM (Human Capital Management), Financial Management, Reporting and Analytics, Integration, Security, Business Process Framework, and Workday Studio for advanced integration scenarios."
    },
    {
      question: "Do you provide access to Workday tenant for hands-on practice?",
      answer: "Yes, we provide access to Workday sandbox environment for hands-on practice. Students work on real business scenarios, configure business processes, create reports, and perform end-to-end implementations."
    },
    {
      question: "Is Workday training suitable for both HR and Finance professionals?",
      answer: "Absolutely! Workday covers both HR and Finance functions. Our training is designed for HR professionals, Finance professionals, and IT professionals looking to specialize in Workday implementation and support."
    },
    {
      question: "What Workday certifications can I pursue after training?",
      answer: "You can pursue Workday Pro certifications in HCM, Financial Management, Integration, or Reporting. Our training prepares you thoroughly for these certification exams with practice tests and exam strategies."
    },
    {
      question: "Do you provide placement assistance for Workday roles?",
      answer: "Yes, we provide 100% placement assistance including resume building, interview preparation, mock interviews, and job referrals. We have partnerships with Workday consulting firms and implementation partners."
    },
    {
      question: "What makes Workday different from other ERP systems?",
      answer: "Workday is built on cloud-first architecture with unified data model, real-time reporting, mobile-first design, and continuous updates. It offers superior user experience, powerful analytics, and seamless integration capabilities compared to traditional ERP systems."
    }
  ];

  const courseModules = [
    {
      title: "Introduction to Workday",
      description: "This module provides the basics of Workday and helps you get started with the interface, navigation, menus, hyperlinks, etc."
    },
    {
      title: "Organizations in WorkDay",
      description: "Covers varied organization types in Workday, its hierarchies, how to set up and manage the supervisory organization structure."
    },
    {
      title: "Workday Staffing modules",
      description: "This module provides you an overview of different types of Workday staffing models, hiring restrictions and how can you execute complex management functions in Workday."
    },
    {
      title: "Jobs and Profiles in Workday Suite",
      description: "This module covers concepts such as job profiles, job families, creation of job positions and much more."
    },
    {
      title: "Compensation in Workday",
      description: "This module provides an overview of the components of compensation, how compensation package is designed based on certain rules, grades and how to setup security and initiate the compensated event."
    },
    {
      title: "Workday Security Groups",
      description: "This module provides an overview of security group types, components of configurable security, its functional areas in workday and also the domain security policies."
    },
    {
      title: "Workday Business Process",
      description: "This module provides an overview of business process, its functionality, varied sub-processes and generating business process reports in Workday."
    },
    {
      title: "WorkDay reports",
      description: "Provides advanced concepts about what standard and custom reports are, different data sources, its objects, fields, order columns and the filter criteria in Workday."
    },
    {
      title: "Calculated Fields",
      description: "This module lets you learn how to create various kinds of calculated fields, text functions, extract single and multi-instances in workday."
    },
    {
      title: "iLoads",
      description: "This module provides an overview of iLoads and other topics such as data extractions and learn how to lay a foundation, master and implement suites on Workday."
    },
    {
      title: "Transactions",
      description: "This module lets you know how to assign user based security, what and why is staffing movement done, hiring supervisory organizations and finally workday accounts and viewing personal data."
    },
    {
      title: "Live Project",
      description: ""
    }
  ];

  const whoShouldAttend = [
    "MBA in Finance& HR",
    "Professionals having experience in accounts and finance domain",
    "Experienced HR Professionals",
    "Fresh graduates interested to make a career in Finance & accounting",
    "Fresh graduates interested to make a career in HR",
    "Software professionals, looking to switch their careers",
    "Project managers",
    "Business analysts"
  ];

  const prerequisites = [
    "Basic knowledge of accounts and financial flows",
    "Basic knowledge of HR functions",
    "Basic knowledge of data"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project", 
      description: "Our curriculum is designed workday interview questions to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Top notch faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, data scientists and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Learn Workday in just 50 hours (select either weekend or weekday mode)",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a Workday professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
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
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Workday Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="Workday Training Course in Hyderabad - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 50 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="Workday Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* What Is Workday Training - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-purple-400 animate-pulse" />
                What Is Workday Training?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> is one of the best workday training in hyderabad. Workday is an on-demand – cloud based financial management and human capital management software. It helps organizations in all industries to achieve stupendous success, be it mid-level or a top rung companies. Its cloud based system offers superior insights for any business and offers the agility to adapt to change. It integrates finance and HR in seamless system to offer superior performance.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Are you looking to start a new learning journey? If yes, one should surely take Workday Training in Hyderabad at VR IT solutions to get the best job in reputed companies. Workday is considered as the human capital management and financial management software solutions providing real-time visibility into data that supports smart decision-making.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Should You Join Workday Training Course - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why Should You Join Workday Training Course In Hyderabad?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">VR IT Solutions</span> is one of the best workday online training institute in hyderabad.. With Finance being one of the fastest growing sectors of the economy, it is no exaggeration that it offers one of the best job opportunities to make a strong career. Moreover with automation making inroads in almost all segments of business, learning Workday can make you a better professional and a quick decision maker, whether you are in the HR or Finance area. Hence, if you are already a HR or a finance professional, we highly recommend this course that helps in boosting your career. We also recommend this course to even youngsters, who are interested to make Finance or HR as their career.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">VR IT Solutions</span> is one of the best software training institutes in Hyderabad to offer workday online training with well focused and career-oriented training program in Workday training. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can take up this Workday training - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-cyan-400" />
                Who can take up this Workday training in Hyderabad?
              </h2>
              <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20 mb-6">
                <p className="text-cyan-100 leading-relaxed">
                  In the current IT industry, Workday technology is considered as the most valued and respected professional requirement for Finance and HR roles in the IT world. People who are interested into HRMS technology, Finance and HR Professionals, recently MBA graduates with Finance or HR professionals, evaluate up to IT career stream of Finance and HR organization will be added an advantage to take up Workday Course in Hyderabad at VR IT Solutions.
                </p>
              </div>
              <div className="space-y-3">
                {whoShouldAttend.map((person, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20 hover:bg-cyan-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-100 font-medium">{person}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                <p className="text-indigo-100 leading-relaxed">
                  If you are looking for Workday online training, VR IT Solutions is the right institute for you.
                </p>
              </div>
            </section>

            {/* What do you learn in this course - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                What do you learn in this course?
              </h2>
              <div className="grid gap-6">
                {courseModules.map((module, index) => (
                  <div key={index} className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-400" />
                      {module.title}
                    </h3>
                    {module.description && (
                      <p className="text-amber-100 leading-relaxed">{module.description}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border border-yellow-400/30 rounded-xl">
                <p className="text-yellow-200 font-semibold">
                  <strong className="text-yellow-300">Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
            </section>

            {/* How will I execute the Practicals - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-rose-400 animate-pulse" />
                How will I execute the Practicals?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux and Unix.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    <span className="text-rose-400 font-semibold">VR IT Solutions</span> is one of the best workday training to offer excellent online and class room training in WorkDay.
                  </p>
                </div>
              </div>
            </section>

            {/* What are pre-requisites - Blue Theme */}
            <section className="bg-gradient-to-br from-blue-600/15 via-indigo-600/20 to-purple-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-400" />
                What are pre-requisites of Workday course in Hyderabad?
              </h2>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20 mb-6">
                <p className="text-blue-100 leading-relaxed">
                  Though VRIT solutions hasn&apos;t prescribed any specific pre-requisites for doing this course, however, it is preferred to have knowledge in the following topics to better understand and appreciate the course.
                </p>
              </div>
              <div className="space-y-3">
                {prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20 hover:bg-indigo-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100 font-medium">{prereq}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Differentiators - Violet Theme */}
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

            {/* Global Demand and Career opportunities - Green Theme */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400 animate-pulse" />
                Global Demand and Career opportunities for Workday Expertise
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    There is a great demand for the Workday Expertise to get into top-notch companies with highest paid salary range and to boost the business growth. Most of the organizations are looking for the Workday Certified Expertise to solve the business solutions with ease and to enhance career graph in the best way.
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    To know the complete details, simply avail free Workday technology demo to ensure other training classes and decide to opt the VR IT Solutions - The Best Workday training in Hyderabad.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={workdayFaqs} title="Workday Training FAQs" theme="default" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Workday Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Workday as your career and get a highly paid job!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="Workday Training in Hyderabad"
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

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="Workday" phoneNumber="+91-9032734343" />
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
