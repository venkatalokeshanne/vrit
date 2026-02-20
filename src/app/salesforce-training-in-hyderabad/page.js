import CourseSidebar from '../components/CourseSidebar';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic  } from '../../utils/staticCourses';
import Image from 'next/image'
import {
  Clock,
  Phone
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'salesforce-training-in-hyderabad';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function SalesforceTraining() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  
  const salesforceFaqs = [
    {
      question: "What is Salesforce and why should I learn it?",
      answer: "Salesforce is the world's leading CRM platform that helps businesses manage customer relationships, sales processes, and business operations. Learning Salesforce opens doors to high-paying careers with average salaries ranging from ₹5-12 LPA for administrators and ₹8-18 LPA for developers."
    },
    {
      question: "What are the prerequisites for Salesforce training?",
      answer: "Basic computer knowledge, understanding of business processes, and familiarity with internet usage are sufficient. No prior technical experience is required. Our course starts from basics and covers all concepts needed to become a Salesforce professional."
    },
    {
      question: "What is the duration and fee structure for Salesforce training?",
      answer: "Our comprehensive Salesforce training is a 70-day program covering Sales Cloud, Service Cloud, and development concepts. The fee is competitive and includes study materials, practice org access, and lifetime support. Contact us at +91-9032734343 for current pricing."
    },
    {
      question: "Which Salesforce certifications can I pursue after training?",
      answer: "You can pursue Salesforce Administrator, Platform App Builder, Sales Cloud Consultant, Service Cloud Consultant, and Platform Developer I certifications. Our training prepares you for these exams with practice tests and certification guidance."
    },
    {
      question: "What career opportunities are available in Salesforce?",
      answer: "Salesforce offers diverse career paths including Salesforce Administrator, Developer, Consultant, Business Analyst, Architect, and Project Manager. Companies like Accenture, Deloitte, TCS, IBM actively hire Salesforce professionals with excellent growth prospects."
    },
    {
      question: "Do you provide hands-on practice and real projects?",
      answer: "Yes, our training includes extensive hands-on practice using Salesforce Developer Edition and Trailhead. Students work on real business scenarios, create custom apps, workflows, and complete live projects that simulate actual workplace requirements."
    },
    {
      question: "What topics are covered in the Salesforce curriculum?",
      answer: "The curriculum covers Salesforce basics, object relationships, security model, workflows, Process Builder, Lightning components, Apex programming, Visualforce, Sales Cloud, Service Cloud, reports, dashboards, and integration concepts."
    },
    {
      question: "Do you provide job placement assistance for Salesforce?",
      answer: "Yes, we provide 100% placement assistance including resume optimization, interview preparation, job referrals, and mock interviews. We have partnerships with 150+ companies looking for certified Salesforce professionals."
    },
    {
      question: "Is Salesforce training suitable for non-technical professionals?",
      answer: "Absolutely! Salesforce has both technical and non-technical career paths. Business users can become administrators and consultants without coding, while technical professionals can pursue development roles. Our training caters to both audiences."
    },
    {
      question: "What support do you provide during and after the course?",
      answer: "We provide 24/7 doubt clearing support, access to practice orgs, recorded sessions, interview preparation, job assistance, and lifetime access to course updates. Our alumni network and mentorship programs ensure continuous career support."
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
            
            {/* Hero Section - Salesforce Training in Hyderabad with 100% Placement Guarantee */}
            <section className="bg-gradient-to-br from-green-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-green-400/30 shadow-2xl shadow-green-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Salesforce Training in Hyderabad
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl">with 100% Placement Guarantee</span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="Salesforce Training Course in Hyderabad - VR IT Solutions" className="w-full object-cover border-2 border-green-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-green-500/25 to-teal-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-green-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="text-green-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-400" />
                      <span className="text-teal-300 font-semibold">Duration: 70 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="Salesforce Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Salesforce Training */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Salesforce Training
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    VRIT Solutions distinguished itself as the leading Salesforce Training institute in Hyderabad and Salesforce Online Trainings. Our Trainers are highly qualified and have high experience in providing quality classroom and online training on Salesforce
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    Salesforce is known for being one of the most versatile CRM platforms. It helps companies manage their customer relationships, sales channels, and tasks efficiently. This platform can be a massive boon for entrepreneurs looking to expand their businesses. However, learning how to use Salesforce effectively can be tricky.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    That's where the best Salesforce training comes in. At VRIT Solutions, we offer the best Salesforce training|coaching available in the city. Our trainers are experienced professionals who will teach you everything you need to know about this powerful CRM system.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    VR IT Solutions is one of the best Salesforce training in Hyderabad to offer well focused and career-oriented training program in Salesforce.
                  </p>
                </div>
              </div>
            </section>

            {/* The Best Highlights Of Salesforce : */}
            <section className="bg-gradient-to-br from-purple-600/15 via-pink-600/20 to-rose-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Best Highlights Of Salesforce :
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    VR IT Solutions provides complete knowledge of Salesforce and the opportunity to work with the best and most experienced trainers in your field.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                    <p className="text-purple-100">• We offer you an excellent platform for career growth.</p>
                  </div>
                  <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-400/20">
                    <p className="text-pink-100">• The complete Salesforce training is customized with real-time online sessions and project work.</p>
                  </div>
                  <div className="bg-rose-500/10 rounded-xl p-4 border border-rose-400/20">
                    <p className="text-rose-100">• Added to these highlights, We provide a 100% guarantee of your success.</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                    <p className="text-purple-100">• We have a record of working closely with trainers who are industry experts.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why should you do this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why should you do this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With rapid technological advancements, this course is slowly gaining importance in the market. The uniqueness of this course is it teaches you mule in step by step manner starting from basics to advanced without the requirement of any previous integration background.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the few institutes in Hyderabad to offer the best and innovative training in Salesforce online training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Salesforce prerequisites for taking up this online Salesforce course */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Salesforce prerequisites for taking up this online Salesforce course
              </h2>
              <div className="space-y-4">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    • If you are looking to take up an online Salesforce course, then the prerequisites you will need are a working computer with internet access, a valid email address, and a desire to learn. Additionally, you will need to understand the English language, as this is the language of the course.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    • This course is designed for people who want to learn how to use Salesforce for their business. Therefore, the prerequisites for this course include understanding how to use a computer, using Microsoft Word and Excel, and being familiar with internet usage.
                  </p>
                </div>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                  <p className="text-red-100 leading-relaxed">
                    • The course starts with an introduction to Salesforce and how it can be used in business. You will then move on to learn how to create and manage a Salesforce account. After that, you will learn to use Salesforce features such as leads, contacts, and deals. You will also learn how to use Salesforce for marketing purposes. The last part of the course focuses on learning how to use Salesforce for enterprise-scale deployments.
                  </p>
                </div>
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    The course is divided into different modules, and each module is roughly five weeks long. Each module covers a different topic: setting up Salesforce, creating and managing sales processes, creating and managing sales channels, and forecasting and managing sales results. Upon completing the course, you will be able to use Salesforce to manage your business and achieve your goals.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    So if you are ready to take your business to the next level learn more about Salesforce and its various features, this is the perfect online course for you!
                  </p>
                </div>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                  <p className="text-red-100 leading-relaxed font-semibold">
                    VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={salesforceFaqs} title="Salesforce Training FAQs" theme="salesforce" />
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
      </div>
      

      

    </>
  );
}
