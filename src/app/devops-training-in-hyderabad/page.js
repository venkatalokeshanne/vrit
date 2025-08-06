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
  HardDrive
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('devops-training-in-hyderabad');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('devops-training-in-hyderabad');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async function DevOpsTraining() {
  const structuredDataJson = await getPageStructuredData();
  
  const curriculumTopics = [
    "Introduction to DevOps",
    "Concepts in Linux and Automation", 
    "Basic concepts in Revision Controls System",
    "Overview of Configuration Management",
    "Understanding Environments",
    "Working on Build Automation",
    "Basic overview of Tomcat Web Sever",
    "Overview of Nexus Artifacts/Proxy Tool",
    "Advanced concepts in Jenkins Framework",
    "Setting up of LAMP",
    "Advanced concepts of Apache/HTTPD Web Service",
    "Overview of MySQL Database",
    "Installation of WordPress with LAMP",
    "Working with Docker",
    "Overview of System Monitoring",
    "Live project"
  ];

  const targetAudience = [
    "Software architects",
    "Project managers", 
    "Business analysts",
    "System analysts",
    "IT managers",
    "Software developers",
    "Fresh graduates with a passion to get into this domain."
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
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, seasoned experts and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Learn DevOps in just 100 hours (select either weekend or weekday mode)",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a DevOps professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum and devops interview questions is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    },
    {
      title: "How will I execute the Practicals?",
      description: "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux and Unix."
    }
  ];

  const devOpsFaqs = [
    {
      question: "What is DevOps and why is it important in modern software development?",
      answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten development lifecycle and provide continuous delivery. It's important because it enables faster deployment, improved collaboration, reduced errors, and better reliability in software delivery."
    },
    {
      question: "What are the prerequisites for DevOps training?",
      answer: "Basic understanding of Linux operating systems, fundamental knowledge of networking concepts, familiarity with software development lifecycle, and basic scripting knowledge. Having experience with command-line operations and version control is beneficial but not mandatory."
    },
    {
      question: "What tools and technologies will I learn in DevOps training?",
      answer: "You'll learn Git for version control, Jenkins for CI/CD, Docker for containerization, Kubernetes for orchestration, Ansible for configuration management, AWS/Azure cloud services, monitoring tools like Nagios/Grafana, and scripting languages like Shell/Python."
    },
    {
      question: "What is the duration of the DevOps training course?",
      answer: "Our comprehensive DevOps training is designed to be completed in 100 hours, which can be taken as weekend batches (12-15 weeks) or weekday batches (10-12 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I work on real DevOps projects during training?",
      answer: "Yes! You'll work on hands-on projects including setting up CI/CD pipelines, containerizing applications, automating deployment processes, infrastructure as code implementation, monitoring setup, and end-to-end DevOps implementation for web applications."
    },
    {
      question: "What career opportunities are available after DevOps training?",
      answer: "DevOps professionals can work as DevOps Engineer, Site Reliability Engineer (SRE), Cloud Engineer, Build Engineer, Release Manager, Infrastructure Engineer, Automation Engineer, or DevOps Consultant with salaries ranging from ₹4-15 LPA depending on experience."
    },
    {
      question: "How does DevOps integrate with cloud platforms like AWS and Azure?",
      answer: "DevOps practices are essential for cloud operations, enabling infrastructure as code, auto-scaling, cloud-native CI/CD pipelines, container orchestration, serverless deployments, and cloud monitoring. We cover AWS/Azure DevOps services extensively."
    },
    {
      question: "Do you cover both traditional and cloud-native DevOps practices?",
      answer: "Yes, our training covers traditional on-premise DevOps implementations as well as cloud-native practices including microservices architecture, serverless computing, container orchestration, and cloud-specific DevOps tools and services."
    },
    {
      question: "Do you provide placement assistance and interview preparation?",
      answer: "Yes, we offer 100% placement assistance including resume building, DevOps project portfolio creation, interview preparation with technical scenarios, hands-on DevOps challenges, and connecting you with our network of companies hiring DevOps professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for DevOps implementations, access to updated course materials, latest DevOps trends and tools, and alumni network for continuous professional development."
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
            "name": "Best AWS with DevOps Training in Hyderabad | DevOps Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/devops-training-in-hyderabad",
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
            "name": "AWS with DevOps Training in Hyderabad - VR IT Solutions",
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
            "name": "AWS with DevOps Training in Hyderabad",
            "description": "Comprehensive 70-day AWS with DevOps training covering Jenkins, Docker, configuration management with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "AWS with DevOps Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P70D",
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
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    AWS With DevOps Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/logo.png"
                    alt="AWS With DevOps Training Course in Hyderabad - VR IT Solutions"
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

                <CourseActionButtons 
                  courseName="DevOps Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* About this course - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cog className="w-8 h-8 text-purple-400 animate-pulse" />
                About this course
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    DevOps is considered as the practice that accentuates the collaboration and communication of both software developers as well as IT Professionals. It computerizes the process of infrastructure and software delivery changes.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    DevOps combines cultural philosophies, practices and tools that enhances a company&apos;s ability to offer applications and services at a greater agility and at the same time, lets in evolving and enhancing products at a brisker pace, compared to traditional software engineering practices. More precisely, in the DevOps model, both development and operations team work in tandem, where the engineers work across the entire lifecycle, right from development, testing, deployment to operations; and develop skill sets, which are not limited to a specific function.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> is one of the best devops training in hyderabad we offer devops online training with well focused and career-oriented training program in DevOps. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why to do this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why to do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With speed, rapid delivery and reliability being the key benefits of DevOps practice, this course is assuming significance in every spectrum of software development across a wide range of organizations – large, medium or small. Hence, it makes sense for professionals to learn this course to contribute immensely in this new age software development that drives greater value and offers immense benefits for the organizations. This course is offered by real-time professionals to help you understand the actual scenarios and problems. This training helps you master various concepts including principles of continuous development and deployment, software development operations, continuous integration, automation and configuration management. In addition to these concepts, you will also gain hands-on experience on various tools like Git, Docker, Jenkins, etc.
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
                  <p className="text-orange-100 leading-relaxed mt-4">
                    <span className="text-amber-400 font-semibold">VR IT Solutions</span> is one of the few institute in Hyderabad to offer excellent devops online training and devops classroom training
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
                    <span className="text-blue-400 font-semibold">VR IT solutions</span> haven&apos;t prescribed any specific pre-requisites for this course, though basic knowledge of object-oriented programming is good enough to start and appreciate this course.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    If you are looking for <span className="text-cyan-400 font-semibold">DevOps online training</span>, VR IT Solutions is the right institute for you.
                  </p>
                </div>
              </div>
            </section>

            {/* Who should do the course? - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-rose-400 animate-pulse" />
                Who should do the course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-400/20 hover:bg-pink-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-pink-100 font-medium">• {audience}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 text-center">
                  <p className="text-red-100 leading-relaxed mb-4">
                    So, what are you waiting for? <span className="text-rose-400 font-semibold underline cursor-pointer hover:text-rose-300">Join now</span> to make DevOps as your career and get a highly paid job!
                  </p>
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
                  Ready to Start Your DevOps Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master AWS with DevOps and become proficient in continuous integration, deployment automation, and infrastructure management. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="DevOps Training in Hyderabad"
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
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={devOpsFaqs} theme="aws" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="AWS With DevOps" phoneNumber="+91-9032734343" />
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
