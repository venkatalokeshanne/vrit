import CourseSidebar from '../components/CourseSidebar';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic  } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Target, 
  Award, 
  TrendingUp,
  Cloud,
  Rocket,
  Clock,
  CheckCircle,
  Code,
  Star,
  Phone
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'google-cloud-training-in-us-uk-canada-australia';

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}

// FAQ Data for Google Cloud Training
const googleCloudFaqs = [
  {
    question: "What is Google Cloud Platform and why should I learn it?",
    answer: "Google Cloud Platform (GCP) is Google's proprietary cloud computing suite that leverages the same infrastructure Google uses for its internal products. It's one of the fastest-growing cloud providers and currently holds third place in the commercial cloud space, making it an excellent career choice."
  },
  {
    question: "What are the prerequisites for Google Cloud training?",
    answer: "Basic understanding of cloud computing concepts and networking fundamentals would be helpful. Knowledge of Linux/Unix systems and programming concepts is beneficial. Our course covers all foundational concepts needed to master Google Cloud Platform."
  },
  {
    question: "What is the duration and fee structure for Google Cloud training?",
    answer: "Our Google Cloud training is a comprehensive 65-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
  },
  {
    question: "Do you provide Google Cloud certification preparation?",
    answer: "Yes, our training prepares you for Google Cloud certification exams including Associate Cloud Engineer, Professional Cloud Architect, and other GCP certifications. We provide practice tests, exam tips, and additional study materials."
  },
  {
    question: "What career opportunities are available after Google Cloud training?",
    answer: "Google Cloud professionals can work as Cloud Engineer, Cloud Architect, DevOps Engineer, Data Engineer, Cloud Consultant, and Solutions Architect. Top companies actively hire GCP professionals for their cloud transformation initiatives."
  },
  {
    question: "Do you provide hands-on practice and live projects?",
    answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and live projects. Students get access to Google Cloud environments for practice and work on actual business use cases throughout the course."
  },
  {
    question: "What is covered in the Google Cloud curriculum?",
    answer: "The curriculum covers GCP basics, virtual networks, security, data storage services, Kubernetes Engine, DevOps, Big Data and AI services, case studies, and live project implementation covering end-to-end cloud solutions."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have successfully placed students in major companies."
  }
];

export default function GoogleCloudTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Get image directly from courseMetadata (multiple fallbacks)
  const _mainImageUrl = courseMetadata?.mainImage

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const courseModules = [
    "Getting Started with Google Cloud Platform (GCP)",
    "Manage GCP using various tools",
    "Google Cloud Platform - Virtual Networks",
    "Basics of security and identity concepts",
    "Introduction to Data Storage Services",
    "Certain advanced concepts and hands-on sessions on Data Storage Services",
    "Understanding and working with Google Kubernetes Engine architecture",
    "Basics of DevOps",
    "Understanding Big Data and AI Services",
    "Case studies",
    "Live Project"
  ];

  const learningPaths = [
    "Cloud infrastructure",
    "Application development",
    "API management",
    "Data engineering and Analytics",
    "Networking & Security"
  ];

  const keyDifferentiators = [
    {
      title: "Time-tested training methodology",
      description: "VRIT Solutions offers time-tested training methodology coupled with hands-on practical sessions and live projects to make you a thoroughbred professional."
    },
    {
      title: "Best-in-class GCP training",
      description: "We offer the best-in-class GCP training and GCP job support to offer the right platform to power your career to the next level."
    },
    {
      title: "Comprehensive practical sessions",
      description: "This course is supplemented by relevant lab exercises, lectures, group discussions as well as extensive hands-on practice sessions."
    },
    {
      title: "Live project experience",
      description: "Our curriculum includes live projects and case studies to help you apply Google Cloud skills successfully to real life scenarios."
    }
  ];

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />
      {/* JSON-LD Structured Data for SEO - Based on Your Successful Pattern */}
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
                    Google Cloud Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="Google Cloud Training Course in US, UK, Canada & Australia - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
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
                  courseName="Google Cloud"
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
            
            {/* Introduction to Google Cloud Platform - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                Introduction to Google Cloud Platform
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Google Cloud Platform or GCP is the proprietary platform of Google and is offered as a suite of cloud computing services. It leverages the same infrastructure that Google utilizes for its internal requirements for its end-user products. Google Cloud is one of the popular platforms available in the commercial cloud space and is available in various variants - infrastructure as a service, platform as a service, and serverless computing environments. According to Canalys estimates, Google Cloud is one of the fastest-growing cloud providers in the industry and is currently enjoying third place in the commercial cloud space.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Also, as per Gartner Inc., the global end-user spending on public cloud services is expected to rise 18.4% in 2021 to a staggering $304.9 billion - a steep increase from $257.5 billion in 2020.
                  </p>
                </div>
              </div>
            </section>

            {/* Why learn Google Cloud Platform? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why learn Google Cloud Platform?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With booming opportunities in Cloud computing, students and professionals alike must get started in this exciting area of knowledge and become certified professionals.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    Some of the lucrative learning paths that students can choose to specialize in include Cloud infrastructure, application development, API management, Data engineering and Analytics, and Networking & Security. With thousands of jobs thrown open in this lucrative segment, we at VRIT Solutions have designed the best online Google Cloud training in US, UK, Australia, Canada.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready. So, what are you waiting for?
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Make VRIT Solutions your first choice for Google Cloud Platform training in US, UK, Australia, Canada due to its time-tested training methodology coupled with hands-on practical sessions and live projects. VRIT solutions offer the best-in-class GCP training and GCP job support to offer the right platform to power your career to the next level.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    So, don't stay behind. Join now for a lucrative career.
                  </p>
                </div>
              </div>
            </section>

            {/* Learning Paths - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-amber-400" />
                Lucrative Learning Paths
              </h2>
              <div className="grid gap-4">
                {learningPaths.map((path, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100 font-medium">{path}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What do you learn in this course? - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-indigo-400" />
                What do you learn in this course?
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
                  <strong className="text-purple-300">Note:</strong> The syllabus listed above is indicative and may include more topics for comprehensive learning.
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <p className="text-blue-100 leading-relaxed">
                  This course is supplemented by relevant lab exercises, lectures, group discussions as well as extensive hands-on practice sessions.
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

              <div className="mt-6 text-center p-4 bg-gradient-to-r from-indigo-500/15 to-violet-500/15 rounded-xl border border-indigo-400/30 animate-bounce">
                <p className="text-lg font-semibold text-indigo-300">
                  🎯 VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={googleCloudFaqs} title="Google Cloud Training FAQs" theme="googlecloud" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Google Cloud Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Google Cloud as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="Google Cloud"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="Google Cloud" phoneNumber="+91-9032734343" />
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
