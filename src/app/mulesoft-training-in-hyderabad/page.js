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
  Zap,
  Database,
  Shield,
  Network,
  Layers,
  Link
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('mulesoft-training-in-hyderabad');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('mulesoft-training-in-hyderabad');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async  function MuleSoftTrainingInHyderabad() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('mulesoft-training-in-hyderabad');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

  const courseStructure = [
    "Overview of Mule – Getting started",
    "Introduction to ESB",
    "Lab Documentation and WorkSpace Downloads",
    "Basics of Mule",
    "Standalone Deployments and MMC",
    "Consumption of REST and SOAP Webservices",
    "Leveraging Database Endpoint, Externalizing properties and Domains",
    "Leveraging File End point and JMS endpoint",
    "Implementing Splitter Aggregator Pattern and Tuning Performance",
    "Transformers",
    "Learn how to handle exceptions in Mule",
    "Live Project"
  ];

  const whoCanDo = [
    "Developers (various languages)",
    "Business Architects",
    "Program Managers",
    "System Integrators",
    "Solution Consultants",
    "Fresh graduates, who are looking for a career in MuleSoft"
  ];

  const whyVRIT = [
    "Free Demo sessions to get to know how the course is conducted",
    "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
    "Easy to follow, since most of the course is practical oriented with live industry cases",
    "Classes driven by real time experts - experienced professionals and faculty from reputed institutes",
    "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles",
    "Complete assistance to help you crack interviews – we provide mulesoft interview questions, sample resumes and tips",
    "Get trained in MuleSoft in just 45 hours - select either weekend or weekday mode",
    "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry"
  ];

  const trainingModes = [
    "Online Training",
    "ClassRoom Training", 
    "Job Support"
  ];

  const whyChooseUs = [
    "Real time project Explanation",
    "Free Resume preparation",
    "Backup Classes",
    "Career guidance",
    "Mock Tests and Interviews",
    "24/7 support"
  ];

  const muleSoftFaqs = [
    {
      question: "What is MuleSoft and why is it important for integration?",
      answer: "MuleSoft is a leading integration platform that provides Anypoint Platform for connecting applications, data, and devices. It's important because it enables organizations to build application networks, streamline API management, and create seamless digital experiences across cloud and on-premises systems."
    },
    {
      question: "What are the prerequisites for MuleSoft training?",
      answer: "Basic knowledge of Java programming, understanding of web services (REST/SOAP), XML/JSON concepts, and familiarity with databases. Having experience with Eclipse IDE and basic understanding of enterprise integration patterns is beneficial but not mandatory."
    },
    {
      question: "What is the duration of the MuleSoft training course?",
      answer: "Our comprehensive MuleSoft training is designed to be completed in 45 hours, which can be taken as weekend batches (6-8 weeks) or weekday batches (4-6 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I get hands-on practice with MuleSoft Anypoint Platform?",
      answer: "Yes, absolutely! Our training includes extensive hands-on practice with MuleSoft Anypoint Studio, Anypoint Exchange, API Manager, Runtime Manager, and other Anypoint Platform components. You'll work on real-world integration scenarios and live projects."
    },
    {
      question: "What career opportunities are available after MuleSoft training?",
      answer: "MuleSoft professionals can pursue roles as Integration Developer, MuleSoft Developer, API Developer, Solution Architect, Integration Architect, Technical Consultant, and ESB Developer with salaries ranging from ₹4-15 LPA depending on experience."
    },
    {
      question: "Do you provide MuleSoft certification preparation?",
      answer: "Yes, our training covers all topics required for MuleSoft Certified Developer - Level 1 (Mule 4) certification. We provide certification guidance, practice tests, and exam preparation materials to help you achieve MuleSoft certification."
    },
    {
      question: "What makes MuleSoft different from other integration platforms?",
      answer: "MuleSoft's Anypoint Platform provides unified connectivity, API-led connectivity approach, comprehensive API lifecycle management, built-in security features, cloud-native architecture, and extensive pre-built connectors for various systems and applications."
    },
    {
      question: "Do you provide placement assistance after MuleSoft training?",
      answer: "Yes, we offer 100% placement assistance including resume building, interview preparation, mock interviews, and connecting you with our network of MuleSoft partner companies and clients looking for skilled MuleSoft professionals."
    },
    {
      question: "What is the scope of MuleSoft in the current market?",
      answer: "MuleSoft has excellent market scope with high demand for integration solutions. Organizations are rapidly adopting API-led connectivity and digital transformation initiatives, creating abundant opportunities for MuleSoft professionals in various industries."
    },
    {
      question: "Do you provide support after course completion?",
      answer: "Yes, we provide lifetime support including doubt resolution, interview preparation assistance, resume guidance, job support when you start working on MuleSoft projects, and access to updated course materials and community forums."
    }
  ];

  return (
    <>
      

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - MuleSoft Training in Hyderabad with 100% Placement Guarantee */}
            <section className="bg-gradient-to-br from-orange-500/15 via-red-600/20 to-pink-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    MuleSoft Training in Hyderabad
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl">with 100% Placement Guarantee</span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="MuleSoft Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-orange-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-orange-500/25 to-red-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-orange-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span className="text-red-300 font-semibold">Duration: 45 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <p className="text-orange-100 leading-relaxed">
                      VRIT Solutions distinguished itself as the leading MuleSoft Training institute in Hyderabad and MuleSoft Online Trainings. Our Trainers are highly qualified and have high experience in providing quality classroom and online training on MuleSoft.
                    </p>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                    <p className="text-red-100 leading-relaxed">
                      Mule the prominent section at MuleSoft. As it is an event based architecture, the actions in the Mule Network are generated through the actions taking place in Mule or through external systems. Payload is the data from each event. In order to connect applications, devices, and data from around the world, MuleSoft allows you to easily connect anything with the Anypoint platform.
                    </p>
                  </div>
                  <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                    <p className="text-pink-100 leading-relaxed">
                      MuleSoft's Anypoint Platform™ is the world's leading integration platform for SOA, SaaS and APIs. Mulesoft offers exceptional business agility to organizations by easily integrating applications, services and managing events in real time with universal connectivity in both the modes – on premise and in the cloud, which is executed with an API-led approach.
                    </p>
                  </div>
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <p className="text-orange-100 leading-relaxed">
                      Using this platform, organizations can re-architect their SOA infrastructure from legacy systems, proprietary platforms and customer integration code to generate business agility. Organizations can also migrate technology infrastructure to the public or private cloud and prioritize adoption of SaaS applications and other cloud based technologies.
                    </p>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                    <p className="text-red-100 leading-relaxed">
                      VR IT Solutions is one of the best Mulesoft training in Hyderabad to offer well focused and career-oriented training program in MuleSoft. So, get started by clicking here.
                    </p>
                  </div>
                  <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                    <p className="text-pink-100 leading-relaxed">
                      Students and professionals who intend to expand their careers with their interest in analysis can take this course with MuleSoft Classroom Training in Hyderabad or MuleSoft Online Training.
                    </p>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="MuleSoft Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
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
                    VR IT Solutions is one of the few institutes in Hyderabad to offer the best and innovative training in MuleSoft training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Course Structure
              </h2>
              <div className="grid gap-4 mb-6">
                {courseStructure.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <Network className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                <p className="text-violet-100 leading-relaxed font-semibold">
                  Note: This course is 70% practical and 30% theory.
                </p>
              </div>
              <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20 mt-4">
                <p className="text-indigo-100 leading-relaxed">
                  VR IT solutions is one of the best institutes for Mulesoft online training. So, click here to get started.
                </p>
              </div>
            </section>

            {/* Who can do this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Who can do this course?
              </h2>
              <div className="grid gap-4">
                {whoCanDo.map((candidate, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{candidate}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What are the pre-requisites for this course? */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What are the pre-requisites for this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    There are no specific pre-requisites for doing this course. However, basic knowledge in SOAP, REST and Messaging would surely help.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    Learn MuleSoft training online and offline modes by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.
                  </p>
                </div>
              </div>
            </section>

            {/* Why VR IT Solutions */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why VR IT Solutions
              </h2>
              <div className="grid gap-4">
                {whyVRIT.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                    <Star className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-cyan-100">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How will I execute the Practicals? */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                How will I execute the Practicals?
              </h2>
              <div className="space-y-6">
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed">
                    In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Training Modes
                </h2>
                <div className="space-y-3">
                  {trainingModes.map((mode, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-500/10 rounded-xl border border-slate-400/20">
                      <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-100 text-sm font-medium">{mode}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Why choose VR IT Solutions?
                </h2>
                <div className="space-y-3">
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                      <Star className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-emerald-100 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Placement Guarantee */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                100% Placement Support
              </h2>
              <div className="space-y-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    After successful completion of the MuleSoft Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed font-semibold">
                    VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-orange-600/15 via-red-600/20 to-pink-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/30 shadow-xl shadow-orange-500/10">
              <FAQ faqs={muleSoftFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="MuleSoft" phoneNumber="+91-9032734343" />
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
      {/* Structured Data for SEO */}

    </>
  );
}
