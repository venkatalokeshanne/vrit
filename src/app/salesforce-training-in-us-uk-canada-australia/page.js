import React from 'react';
import Link from 'next/link';
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
  Zap,
  Database,
  Shield,
  BarChart,
  Activity,
  Heart,
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'salesforce-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for Salesforce Training
const salesforceFaqs = [
  {
    question: "What are the career opportunities after Salesforce training?",
    answer: "After completing Salesforce training, you can pursue roles as Salesforce Administrator, Salesforce Developer, Salesforce Consultant, Business Analyst, CRM Manager, and Sales Operations Specialist. The demand for Salesforce professionals is high across various industries including healthcare, finance, retail, and technology."
  },
  {
    question: "Do I need any prior experience to start Salesforce training?",
    answer: "No prior experience is required for Salesforce training. Our course is designed for beginners and covers everything from basics to advanced concepts. However, basic computer knowledge and familiarity with CRM concepts would be helpful."
  },
  {
    question: "What is the duration of the Salesforce training program?",
    answer: "Our Salesforce training program is 70 days long, covering both online and classroom training options. The duration includes comprehensive modules on Salesforce administration, development, and real-time project work."
  },
  {
    question: "What certifications can I pursue after Salesforce training?",
    answer: "After completing our training, you can pursue various Salesforce certifications including Salesforce Certified Administrator, Salesforce Certified Platform Developer I & II, Salesforce Certified Sales Cloud Consultant, and Salesforce Certified Service Cloud Consultant."
  },
  {
    question: "Is there placement assistance provided after the training?",
    answer: "Yes, we provide 100% placement assistance with job guarantee for deserving candidates. Our placement support includes resume preparation, mock interviews, and direct referrals to top companies in US, UK, Canada, and Australia."
  },
  {
    question: "What makes VR IT Solutions different from other Salesforce training institutes?",
    answer: "VR IT Solutions offers real-time project experience, experienced industry trainers, 100% placement guarantee, 24/7 support, backup classes, and comprehensive training covering both theoretical and practical aspects of Salesforce."
  },
  {
    question: "Can I attend Salesforce training while working?",
    answer: "Yes, we offer flexible training schedules including online training and weekend batches to accommodate working professionals. Our online training allows you to learn at your own pace without affecting your current job."
  },
  {
    question: "What is covered in the Salesforce training curriculum?",
    answer: "Our curriculum covers Salesforce basics, configuration, customization, Apex programming, Visualforce, Lightning framework, data management, security, integrations, and real-time project implementation following industry best practices."
  }
];

export default function SalesforceTrainingInUSUKCanadaAustralia() {
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
    "Introduction to Salesforce Platform",
    "Salesforce Configuration and Customization",
    "Data Management and Security",
    "Apex Programming Language",
    "Visualforce Development",
    "Lightning Framework",
    "Integration and APIs",
    "Real-time Project Implementation"
  ];

  const whoShouldAttend = [
    "Fresh graduates from any discipline",
    "Working professionals looking to switch careers",
    "Sales and marketing professionals",
    "Business analysts and consultants",
    "IT professionals and developers",
    "Anyone interested in CRM technologies"
  ];

  const keyDifferentiators = [
    {
      title: "Real time project Explanation",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Free Resume preparation",
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Backup Classes",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, seasoned experts and experienced faculty."
    },
    {
      title: "Career guidance",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost."
    },
    {
      title: "Mock Tests and Interviews",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    },
    {
      title: "24/7 support",
      description: "We provide round the clock support to help you with any queries or doubts you may have during your learning journey."
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
                    Salesforce Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Salesforce Training Course in US, UK, Canada & Australia - VR IT Solutions"
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
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> distinguished itself as the leading Salesforce Training institute in US, UK, Canada & Australia and Salesforce Online Trainings.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our Trainers are highly qualified and have high experience in providing quality classroom and online training on Salesforce. VR IT Solutions is one of the best Salesforce training in US, UK, Canada & Australia to offer well focused and career-oriented training program in Salesforce.
                </p>

                <CourseActionButtons 
                  courseName="Salesforce"
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
            
            {/* The Best Highlights Of Salesforce - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-purple-400 animate-pulse" />
                The Best Highlights Of Salesforce :
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    VR IT Solutions provides complete knowledge of Salesforce and the opportunity to work with the best and most experienced trainers in your field.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100">We offer you an excellent platform for career growth.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">The complete Salesforce training is customized with real-time online sessions and project work.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">Added to these highlights, We provide a 100% guarantee of your success.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100">We have a record of working closely with trainers who are industry experts.</span>
                  </div>
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
                    With rapid technological advancements, this course is slowly gaining importance in the market. The uniqueness of this course is it teaches you mule in step by step manner starting from basics to advanced without the requirement of any previous integration background.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the few institutes in US, UK, Canada & Australia to offer the best and innovative training in Salesforce online training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.
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
              <div className="mt-4 p-4 bg-orange-500/10 rounded-xl border border-orange-400/20">
                <p className="text-orange-100 leading-relaxed">
                  This course is supplemented by relevant lab exercises & salesforce interview questions, lecture and group discussions as well as extensive hands-on practice.
                </p>
              </div>
            </section>

            {/* Prerequisites and Who Should Attend - Dual Theme */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-rose-400" />
                  Salesforce Prerequisites
                </h2>
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    If you are looking to take up an online Salesforce course, then the prerequisites you will need are a working computer with internet access, a valid email address, and a desire to learn. Additionally, you will need to understand the English language, as this is the language of the course.
                  </p>
                </div>
                <div className="mt-4 bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    This course is designed for people who want to learn how to use Salesforce for their business. Therefore, the prerequisites for this course include understanding how to use a computer, using Microsoft Word and Excel, and being familiar with internet usage.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyan-400" />
                  Who Should Attend
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
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-xl border border-purple-400/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-400" />
                  Course Details
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  The course starts with an introduction to Salesforce and how it can be used in business. You will then move on to learn how to create and manage a Salesforce account. After that, you will learn to use Salesforce features such as leads, contacts, and deals. You will also learn how to use Salesforce for marketing purposes. The last part of the course focuses on learning how to use Salesforce for enterprise-scale deployments.
                </p>
                <p className="text-purple-100 leading-relaxed mt-3">
                  The course is divided into different modules, and each module is roughly five weeks long. Each module covers a different topic: setting up Salesforce, creating and managing sales processes, creating and managing sales channels, and forecasting and managing sales results. Upon completing the course, you will be able to use Salesforce to manage your business and achieve your goals.
                </p>
                <p className="text-purple-100 leading-relaxed mt-3">
                  So if you are ready to take your business to the next level learn more about Salesforce and its various features, this is the perfect online course for you!
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
              <FAQ faqs={salesforceFaqs} title="Salesforce Training FAQs" theme="salesforce" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Salesforce Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Salesforce as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="Salesforce"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="Salesforce" phoneNumber="+91-9032734343" />
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
