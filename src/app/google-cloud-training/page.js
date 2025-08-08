import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getPageMetadata, getStructuredData } from '../../utils/metadata';
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
  Briefcase
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('google-cloud-training');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('google-cloud-training');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async  function GoogleCloudTrainingInHyderabad() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('google-cloud-training');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

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

  const googleCloudFaqs = [
    {
      question: "What is Google Cloud Platform and why should I learn it?",
      answer: "Google Cloud Platform (GCP) is Google's suite of cloud computing services offering infrastructure as a service, platform as a service, and serverless computing environments. As the third-largest cloud provider with fastest growth, learning GCP opens doors to lucrative careers in cloud computing with global end-user spending expected to reach $304.9 billion."
    },
    {
      question: "What are the prerequisites for Google Cloud training?",
      answer: "Basic understanding of cloud computing concepts and networking fundamentals is helpful. Knowledge of Linux/Unix systems and programming concepts is beneficial but not mandatory. Our course covers all foundational concepts needed to master GCP from scratch."
    },
    {
      question: "What is the duration and fee structure for Google Cloud training?",
      answer: "Our comprehensive Google Cloud training is a 65-day program with flexible scheduling options including online and classroom modes. The course includes live sessions, practical demos, and hands-on practice. Contact us at +91-9032734343 for current fee structure and available discounts."
    },
    {
      question: "Do you provide job placement assistance after Google Cloud training?",
      answer: "Yes, VR IT Solutions offers 100% placement support including resume preparation, career guidance, mock tests and interviews, and 24/7 support. We have partnerships with major MNCs like Infosys, Wipro, Accenture, and other companies for job placements."
    },
    {
      question: "What career opportunities are available after Google Cloud training?",
      answer: "Google Cloud professionals can work as Cloud Architect, Cloud Engineer, DevOps Engineer, Data Engineer, Cloud Security Specialist, and Solutions Architect. Specialization paths include Cloud infrastructure, application development, API management, Data engineering and Analytics, and Networking & Security."
    },
    {
      question: "What training modes do you offer for Google Cloud course?",
      answer: "We offer multiple training modes including Online Training, Classroom Training, and Job Support. All modes include real-time project explanation, backup classes, and comprehensive hands-on practice sessions to ensure thorough learning."
    },
    {
      question: "How does Google Cloud compare to AWS and Azure?",
      answer: "Google Cloud Platform is one of the fastest-growing cloud providers, currently holding third place in the commercial cloud space. It leverages Google's infrastructure and offers unique strengths in Big Data, AI services, and Kubernetes, making it highly competitive with AWS and Azure."
    },
    {
      question: "What practical experience will I gain during the course?",
      answer: "The course includes extensive hands-on practice sessions, live projects, case studies, lab exercises, and real-time scenarios covering GCP tools, virtual networks, storage services, Kubernetes Engine, and Big Data & AI services."
    },
    {
      question: "What Google Cloud certifications can I pursue after this training?",
      answer: "After training, you can pursue various Google Cloud certifications including Associate Cloud Engineer, Professional Cloud Architect, Professional Data Engineer, Professional Cloud Developer, and Professional Cloud Security Engineer certifications."
    },
    {
      question: "What support do you provide during and after the course?",
      answer: "We provide comprehensive support including backup classes, 24/7 support, career guidance, mock tests and interviews, free resume preparation, and continuous mentoring. Our trainers are available for guidance throughout your Google Cloud career journey."
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
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Google Cloud Platform Online Training in Hyderabad - VR IT Solutions"
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
                  courseName="Google Cloud Training"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
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

            {/* Why learn Google Cloud Platform - Green Theme */}
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
                    Some of the lucrative learning paths that students can choose to specialize in include Cloud infrastructure, application development, API management, Data engineering and Analytics, and Networking & Security. With thousands of jobs thrown open in this lucrative segment, we at <span className="text-emerald-400 font-semibold">VRIT Solutions</span> have designed the best online Google Cloud training in Hyderabad.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready. So, what are you waiting for?
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Make <span className="text-emerald-400 font-semibold">VRIT Solutions</span> your first choice for Google Cloud Platform training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects. VRIT solutions offer the best-in-class GCP training and GCP job support to offer the right platform to power your career to the next level.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    So, don't stay behind. Join now for a lucrative career.
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
                <p className="text-yellow-200 font-semibold mb-4">
                  <strong className="text-yellow-300">Note:</strong> The syllabus listed above is indicative and may include more topics for comprehensive learning.
                </p>
                <p className="text-yellow-200">
                  This course is supplemented by relevant lab exercises, lectures, group discussions as well as extensive hands-on practice sessions.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={googleCloudFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="Google Cloud" phoneNumber="+91-9032734343" />
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
