import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getPageMetadata, getStructuredData, getReviewStructuredData } from '../../utils/metadata';
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

export const metadata = getPageMetadata('servicenow-training-in-hyderabad');

export default function ServiceNowTraining() {
  const courseModules = [
    "Explore lists and forms",
    "Identify the significance of branding and learn how to apply it to the platform", 
    "Learn how to add users, groups, and roles",
    "Identify best practices pertaining to task management",
    "Learn how to configure notifications",
    "Get hands-on on how to manage data with tables, the configuration management database (CMDB), and import sets",
    "Learn how to run basic reports, as well as appreciate the benefits of performance analytics",
    "Know how to protect ServiceNow data",
    "Learn how to work with two key ServiceNow process applications: Knowledge Base and Service Catalog",
    "Understand how to create workflow activities and approvals", 
    "Get an overview of how to implement Service Level Agreements",
    "Identify various available script types",
    "Upgrade and clone instances, as well as create baseline performance metrics",
    "Capture and move configurations between instances",
    "Live Project"
  ];

  const whoShouldAttend = [
    "Graduates interested to enter into this field",
    "Professionals working on ITIL and using ServiceNow tool to further enhance their knowledge",
    "Software professionals, looking for lucrative careers in ServiceNow", 
    "Middle level managers, interested to switch their careers",
    "Business Analysts",
    "Technical managers"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace and give the service now interview questions are provide. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project", 
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Top notch faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, seasoned experts and even experienced faculty."
    },
    {
      title: "Learn ServiceNow in just 40 hours",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a ServiceNow professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  const serviceNowFaqs = [
    {
      question: "What is ServiceNow and why should I learn it?",
      answer: "ServiceNow is a leading cloud-based platform for IT Service Management (ITSM), IT Operations Management (ITOM), and business process automation. Learning ServiceNow opens doors to high-paying careers in IT service management, workflow automation, and enterprise cloud solutions with average salaries ranging from ₹6-15 LPA."
    },
    {
      question: "What are the prerequisites for ServiceNow training?",
      answer: "Basic knowledge of ITIL processes is helpful but not mandatory. Understanding of web technologies, databases, and basic programming concepts is beneficial. Our course is designed for beginners and covers all foundational concepts needed to master ServiceNow."
    },
    {
      question: "What is the duration and fee structure for ServiceNow training?",
      answer: "Our ServiceNow training is a comprehensive 40-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
    },
    {
      question: "Do you provide ServiceNow certification preparation?",
      answer: "Yes, our training prepares you for ServiceNow Certified System Administrator (CSA) and other official ServiceNow certifications. We provide practice tests, exam tips, and additional study materials to help you pass the certification exams."
    },
    {
      question: "What career opportunities are available after ServiceNow training?",
      answer: "ServiceNow professionals can work as ServiceNow Administrator, ServiceNow Developer, ITSM Consultant, Workflow Analyst, ServiceNow Architect, and Implementation Specialist. Top companies like Accenture, Deloitte, IBM, and Wipro actively hire ServiceNow professionals."
    },
    {
      question: "Do you provide hands-on practice and live projects?",
      answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and a live project. Students get access to ServiceNow Personal Developer Instance (PDI) for practice and work on actual business use cases throughout the course."
    },
    {
      question: "What is covered in the ServiceNow curriculum?",
      answer: "The curriculum covers ServiceNow platform basics, lists and forms, user management, CMDB, workflow creation, notifications, reporting, Service Catalog, Knowledge Base, SLAs, scripting, instance management, and live project implementation."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have tie-ups with 200+ companies looking for ServiceNow professionals."
    },
    {
      question: "Can working professionals attend ServiceNow training?",
      answer: "Yes, we offer flexible batch timings including weekend batches and evening classes specifically designed for working professionals. Online training options are also available with live instructor-led sessions."
    },
    {
      question: "What support do you provide after course completion?",
      answer: "We provide lifetime support including job assistance, interview preparation, access to updated materials, doubt clearing sessions, and alumni network access. Our trainers are available for guidance even after course completion."
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO - Based on Your Successful Pattern */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Best ServiceNow Training in Hyderabad | ServiceNow Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/servicenow-training-in-hyderabad",
            "logo": "https://vrit-ten.vercel.app/logo.png",
            "sameAs": [
              "https://www.facebook.com/vritsolutions/",
              "https://twitter.com/vritsolutions",
              "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
            ],
            "address": [
              {
                "type": "PostalAddress",
                "addressCountry": "INDIA",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad Telangana."
              }
            ],
            "openingHours": [
              "Mo-Sa 8:00-21:30",
              "Su 9:00-13:00"
            ],
            "contactPoint": [
              {
                "type": "ContactPoint",
                "telephone": "9032734343",
                "contactType": "Enquiry",
                "email": "info@vritsol.com"
              }
            ]
          })
        }}
      />

      {/* Additional Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "review",
            "name": "ServiceNow Training in Hyderabad - VR IT Solutions",
            "aggregateRating": {
              "type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "9656"
            }
          })
        }}
      />

      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "ServiceNow Training in Hyderabad",
            "description": "Comprehensive 60-day ServiceNow training covering ITSM, ITOM, and practical implementation with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "ServiceNow Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P60D",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "9656",
              "bestRating": "5"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    ServiceNow Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/servicenow.jpg"
                    alt="ServiceNow Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 60 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> is a prominent name in the Hyderabad&apos;s best ServiceNow training. We are one stop solution for people looking for top and best ServiceNow Training.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our trainers are highly qualified and experienced in providing high quality training in Hyderabad. The Certified Expert Group has created our content and curriculum of ServiceNow based on current industry needs. This allows the students to be industry ready professional, where they can handle most realtime scenarios.
                </p>

                <CourseActionButtons 
                  courseName="ServiceNow"
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
            
            {/* What is ServiceNow - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                What is ServiceNow?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    ServiceNow is a cloud company and is evolving a lot and offers its products to companies of all sizes – large, medium and small. It is a major player in Information Technology Service Management (ITSM) arena. ServiceNow has a robust cloud platform on top of which, any application can be built quickly.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Learning ServiceNow would help users of various organizational roles working within the ServiceNow platform. This platform is slowly evolving and has a great future in the long term.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> is one of the best service now training to offer well focused and career-oriented training program in ServiceNow.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Should You Join This Course - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you join this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With ServiceNow having great future in both India and abroad, it offers excellent value for professionals working in this platform and also for existing technocrats, who are interested to migrate to this new platform. ServiceNow is being used by most of the world&apos;s top multinationals, wherein professionals in this area are earning very high salaries when compared to other technologies.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    Make <span className="text-emerald-400 font-semibold">VR IT solutions</span> as your first choice for Servicenow training in Hyderabad due to its systematic training methodology and state-of-the-art practical sessions! So, don&apos;t stay behind. Join now for a lucrative career.
                  </p>
                </div>
              </div>
            </section>

            {/* What Do You Learn - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
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
                  This course is supplemented by relevant lab exercises & servicenow interview questions, lecture and group discussions as well as extensive hands-on practice.
                </p>
              </div>
            </section>

            {/* Prerequisites and Who Should Attend - Dual Theme */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-rose-400" />
                  Pre-requisites
                </h2>
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    VR IT solutions haven&apos;t specified any key pre-requisites for doing this course. However, participants, who have prior knowledge on any similar platforms, may better appreciate this course.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
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
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
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
                  In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed.
                </p>
                <p className="text-purple-100 leading-relaxed mt-3">
                  This ServiceNow training in Hyderabad and ServiceNow Online Training course is designed to train the students with experience of the ServiceNow Tool from the end user, support team member, administrator and developer&apos;s perspective.
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
              <FAQ faqs={serviceNowFaqs} title="ServiceNow Training FAQs" theme="servicenow" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your ServiceNow Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make ServiceNow as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="ServiceNow"
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
              <CourseSidebar courseName="ServiceNow" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('servicenow-training-in-hyderabad'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('servicenow-training-in-hyderabad') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('servicenow-training-in-hyderabad'))
          }}
        />
      )}
      </div>
    </>
  );
}
