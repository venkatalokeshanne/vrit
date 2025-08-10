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
  Activity
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'pega-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for Pega Training
const pegaFaqs = [
  {
    question: "What is Pega and why should I learn it?",
    answer: "PEGA is an application development tool used in BPM and CRM Applications, developed by Pega Systems Inc. It doesn't use any programming/coding to develop web & enterprise applications with a Java backend engine. Organizations worldwide are developing applications in Pega on a greater scale, making it an excellent career choice."
  },
  {
    question: "What are the prerequisites for Pega training?",
    answer: "VR IT solutions haven't prescribed any specific prerequisites. However, knowledge of CRM and BPM would be an added advantage and helps the participants to better appreciate the course."
  },
  {
    question: "What is the duration and fee structure for Pega training?",
    answer: "Our Pega training is a comprehensive 70-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
  },
  {
    question: "Do you provide Pega certification preparation?",
    answer: "Yes, our training prepares you for Pega certifications. We provide practice tests, exam tips, and additional study materials to help you pass the official Pega certification exams."
  },
  {
    question: "What career opportunities are available after Pega training?",
    answer: "Pega professionals can work as Pega Developer, Pega Business Analyst, Pega System Architect, BPM Consultant, CRM Specialist, and Pega Implementation Specialist. Top companies actively hire Pega professionals for their business process automation needs."
  },
  {
    question: "Do you provide hands-on practice and live projects?",
    answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and a live project. Students get access to Pega environments for practice and work on actual business use cases throughout the course."
  },
  {
    question: "What is covered in the Pega curriculum?",
    answer: "The curriculum covers BPM overview, project implementation methodology, data modeling, process flow, user interface, declarative rules, case management, database concepts, activities, integration with external systems, rule management & security, performance, and live project implementation."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have successfully placed students in major MNC companies."
  }
];

export default function PegaTrainingInUSUKCanadaAustralia() {
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
    "Overview of BPM",
    "Project implementation methodology, class structures and hierarchy",
    "Data modelling",
    "Process flow",
    "User Interface",
    "Declarative rules",
    "Case Management",
    "Database Concepts of PRPC",
    "Activities",
    "Integration with external systems",
    "Rule Management & Security",
    "Performance, PRPC Guardrails & Topics revision",
    "And a live project"
  ];

  const whoShouldAttend = [
    "Beginners",
    "Business consultants",
    "Corporate managers, who intend to switch their careers",
    "Project managers, who want to understand the concepts for providing realistic effort estimates for projects",
    "Software engineers, who have penchant to get into business domain"
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
      title: "Learn Pega in just 40 hours (select either weekend or weekday mode)",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a Pega professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum and pega interview questions is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
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
                    Pega Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Pega Training Course in US, UK, Canada & Australia - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 70 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> is a prominent name in the US, UK, Australia, Canada's best PEGA training institutes. We are one stop solution for people looking for top and best PEGA Training in US, UK, Australia, Canada and PEGA Online Training.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our trainers are highly qualified and experienced in providing high quality training in US, UK, Australia, Canada. The Certified Expert Group has created our content and curriculum of PEGA based on current industry needs. This allows the students to be industry ready professional, where they can handle most realtime scenarios.
                </p>

                <CourseActionButtons 
                  courseName="Pega"
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
            
            {/* About this course - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-400 animate-pulse" />
                About this course
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    PEGA is an application development tool used in BPM and CRM Applications, developed by Pega Systems Inc., Cambridge, Massachusetts. The uniqueness of this software is it doesn't uses any programming/coding to develop web & enterprise applications and it s a Java backend engine. Pega comes with drag and drop UI and offers easily configurable settings, which in turn helps to develop the applications faster and with high quality, compared to Java. This platform offers the capability by streamlining, automating and documenting business processes in a way that enables easy consolidation of multi-stream processing into one system.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    VR IT Solutions is one of the Pega training in US, UK, Australia, Canada to offer well focused and career-oriented training program in Pega. So, get started by clicking here.
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
                    Organizations across the world are developing applications in Pega on a greater scale, compared to any other tools and hence it makes sense to get hands-on on this tool to make an excellent career in Pega. VR IT solutions offers Pega online training also the most comprehensive, practical and upto date Pega training. It should be appreciated that several frameworks are build on Pega Process Commander to support various aspects of business requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* What do you learn in this course? - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-amber-400" />
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
              <div className="mt-4 p-4 bg-orange-500/10 rounded-xl border border-orange-400/20">
                <p className="text-orange-100 leading-relaxed">
                  VR IT Solutions is one of the few institutes in US, UK, Australia, Canada to offer excellent Online Pega training in hyderabad and pega classroom training in US, UK, Australia, Canada.
                </p>
              </div>
            </section>

            {/* Prerequisites and Who Should Attend - Dual Theme */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-rose-400" />
                  Pre-requisites of the course
                </h2>
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    VR IT solutions haven't prescribed any specific prerequisites. However, knowledge of CRM and BPM would be an added advantage and helps the participants to better appreciate the course.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyan-400" />
                  Who can attend this course
                </h2>
                <div className="space-y-3">
                  {whoShouldAttend.map((person, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/20 hover:bg-cyan-500/15 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-cyan-100 text-sm font-medium">{person}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

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
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-xl border border-purple-400/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-400" />
                  How will I execute the Practicals?
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems like Windows.
                </p>
                <p className="text-purple-100 leading-relaxed mt-3">
                  Get Realtime PEGA online and classroom training in US, UK, Australia, Canada from basics to advanced level with 100% placement. Pega Training in US, UK, Australia, Canada by Realtime experts from top MNC's. Get complete practical way of exposure at Affordable fee. Enroll now for FREE DEMO..!
                </p>
                <p className="text-purple-100 leading-relaxed mt-3">
                  After successful completion of the PEGA Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                </p>
              </div>

              <div className="mt-6 text-center p-4 bg-gradient-to-r from-indigo-500/15 to-violet-500/15 rounded-xl border border-indigo-400/30 animate-bounce">
                <p className="text-lg font-semibold text-indigo-300">
                  🎯 VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={pegaFaqs} title="Pega Training FAQs" theme="pega" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Pega Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Pega as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="Pega"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="Pega" phoneNumber="+91-9032734343" />
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
