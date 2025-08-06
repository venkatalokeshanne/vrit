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
  Briefcase,
  Database,
  Server,
  Layers,
  Terminal,
  GitBranch,
  Zap,
  Cog,
  Network,
  Shield,
  Tool,
  Activity,
  BarChart3,
  PieChart,
  Cpu,
  HardDrive,
  Workflow,
  Binary,
  Boxes,
  Link,
  Layout,
  Palette
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('full-stack-developer-training-in-hyderabad');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('full-stack-developer-training-in-hyderabad');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async  function FullStackDeveloperTrainingInHyderabad() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('full-stack-developer-training-in-hyderabad');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

  const curriculumTopics = [
    "Introduction to programming",
    "Overview of object oriented programming",
    "Overview of core Java concepts", 
    "Overview of Inheritance, Threads and Collections",
    "Learn how to deploy JDBC for connecting various applications",
    "Overview of Method Overriding and Overloading",
    "Learn how to use Array and HashMap for storing dynamic data",
    "Learn advanced concepts about how to create Threads in Java by Implementing Runnable Interface",
    "Live Project"
  ];

  const targetAudience = [
    "Software developers, Architects and Web Designers",
    "Fresh Graduates, who are interested to make a career in Java."
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
      title: "Top notch faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, data scientists, Java consultants and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Learn Java in just 60 hours (select either weekend or weekday mode)",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a Java professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    },
    {
      title: "How will I execute the Practicals?",
      description: "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS."
    }
  ];

  const fullStackFaqs = [
    {
      question: "What is Full Stack Development and why is it in high demand?",
      answer: "Full Stack Development involves working on both front-end (client-side) and back-end (server-side) of web applications. It's in high demand because companies prefer developers who can handle complete web development lifecycle, making them versatile and cost-effective for businesses."
    },
    {
      question: "What are the prerequisites for Full Stack Developer training?",
      answer: "Basic understanding of HTML, CSS, and JavaScript is helpful but not mandatory. Having logical thinking, problem-solving skills, and basic computer knowledge is sufficient to start. We cover all concepts from fundamentals to advanced levels."
    },
    {
      question: "What technologies will I learn in this Full Stack course?",
      answer: "You'll learn front-end technologies (HTML5, CSS3, JavaScript, React.js, Angular), back-end technologies (Node.js, Java, Python), databases (MongoDB, MySQL), version control (Git), deployment tools, and cloud services like AWS."
    },
    {
      question: "What is the duration of the Full Stack Developer training?",
      answer: "Our comprehensive Full Stack Developer training is designed to be completed in 60 hours, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I work on real projects during the training?",
      answer: "Yes! Our training includes multiple hands-on projects including building responsive websites, REST APIs, full-stack web applications, and a final capstone project that you can showcase in your portfolio to potential employers."
    },
    {
      question: "What career opportunities are available after Full Stack training?",
      answer: "Full Stack Developers can work as Web Developer, Software Engineer, Frontend Developer, Backend Developer, JavaScript Developer, React Developer, Node.js Developer, Technical Lead, or freelance consultant with salaries ranging from ₹3-12 LPA."
    },
    {
      question: "Do you provide both online and classroom training options?",
      answer: "Yes, we offer flexible training modes including live online classes, classroom training at our Hyderabad center, and hybrid options. All modes include the same comprehensive curriculum, hands-on projects, and placement assistance."
    },
    {
      question: "How does Full Stack Development compare to specializing in frontend or backend?",
      answer: "Full Stack Development offers broader career opportunities and higher salary potential as you can handle complete projects independently. While specialization offers deep expertise, Full Stack skills make you more versatile and valuable in the job market."
    },
    {
      question: "Do you provide placement assistance and job support?",
      answer: "Yes, we offer 100% placement assistance including portfolio creation, resume building, interview preparation, mock interviews, and connecting you with our network of hiring partners looking for skilled Full Stack Developers."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support when you start working on projects, access to updated course materials, alumni network access, and assistance with advanced technology adoption."
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
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Full Stack Developer Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}"
                    alt="Full Stack Developer Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 75 days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="Full Stack Developer Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Full Stack Training In Hyderabad - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Layout className="w-8 h-8 text-purple-400 animate-pulse" />
                Full Stack Training In Hyderabad
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Java is an object oriented and powerful general language, widely used for developing several applications on web or mobile platform. Compared to other languages, this language is quite popular among students and professionals alike, as it is easy to learn, implement, compile and debug. Some of the biggest software companies around the world are developing applications in Java, which only reinforces the power and importance of this programming language.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    This training course is designed to develop you into full-fledged full stack professional, ready to take up any real time projects and assignments. In addition to that, this course also lets you work on the Angular11 framework or mobile development with Java, which is one of the biggest advantages of being a full stack Developer online training in hyderabad
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VRIT Solutions</span> is one of the few institutes in Hyderabad and Bangalore to offer well focused and career-oriented training program in full stack developer training.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you join this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you join this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With more and more companies adopting Java as a primary programming language for implementing cutting edge applications, this course is designed to make you a complete professional. This is a full fledged comprehensive course that helps to grow in your software coding career.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">VRIT Solutions</span> offers the best full stack developer online training program to help you learn object-oriented programming concepts, Angular 11, HTML, CSS, Spring, Spring Boot, Spring Boot starters, Spring Boot JPA Postgres, SQL, JOIN, NO SQL, Mongo DB Sample web application to manage a resource & classes, and much more. Not just theoretical training, this course is adequately supplemented by practical sessions to let you work on some core assignments including mini projects and a final live project.
                  </p>
                </div>
              </div>
            </section>

            {/* What do you learn in this course? - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                What do you learn in this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {curriculumTopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20 hover:bg-yellow-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-yellow-100 font-medium">• {topic}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                  <p className="text-orange-100 leading-relaxed">
                    <span className="font-semibold">Note:</span> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                  </p>
                </div>
              </div>
            </section>

            {/* Pre-requisites - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-cyan-400" />
                Pre-requisites
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    <span className="text-blue-400 font-semibold">VRIT Solutions</span> hasn&apos;t prescribed any specific pre-requisites for doing this course. However, strong knowledge in any object oriented programming like C++ is highly desirable, but not essential.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    If you are looking for <span className="text-cyan-400 font-semibold">full stack developer online training</span>, VRIT Solutions is the right institute for you.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can take up this course? - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-rose-400 animate-pulse" />
                Who can take up this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="grid md:grid-cols-1 gap-4">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-400/20 hover:bg-pink-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-pink-100 font-medium">• {audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Key Differentiators - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-violet-400" />
                Our Key Differentiators
              </h2>
              
              <div className="space-y-6">
                {keyDifferentiators.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-xl p-6 border border-violet-400/30">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-violet-400" />
                      {item.title}
                    </h3>
                    <p className="text-violet-100 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-xl p-6 border border-purple-400/30 text-center">
                <p className="text-purple-100 leading-relaxed">
                  So, what are you waiting for?
                </p>
              </div>
            </section>

            {/* Training Features - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-emerald-400" />
                Are You Looking For -
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Training Modes */}
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    Training Modes
                  </h3>
                  <div className="space-y-3">
                    {[
                      "✓Online Training",
                      "✓ClassRoom Training", 
                      "✓Job Support"
                    ].map((mode, index) => (
                      <div key={index} className="flex items-center gap-3 text-emerald-100">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{mode}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                    Contact Us
                  </button>
                </div>

                {/* Why Choose VR IT Solutions */}
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-teal-400" />
                    Why to choose VR IT solutions?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "✓Real time project Explanation",
                      "✓Free Resume preparation",
                      "✓Backup Classes",
                      "✓Career guidance", 
                      "✓Mock Tests and Interviews",
                      "✓24/7 support"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-teal-100">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Full Stack Developer Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master Full Stack Development and become proficient in Java, Angular 11, Spring Boot, and modern web technologies. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="Full Stack Developer Training in Hyderabad"
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

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-purple-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <FAQ faqs={fullStackFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="Full Stack Developer" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

    </>
  );
}
