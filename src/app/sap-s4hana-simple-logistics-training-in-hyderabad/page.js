import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { getPageMetadata, getStructuredData, getReviewStructuredData } from '../../utils/metadata';
import { 
  Phone,
  Star, 
  Users, 
  BookOpen, 
  Award, 
  Zap, 
  Target, 
  Globe,
  ChevronRight,
  Play,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Cloud,
  Cpu,
  Brain,
  Rocket,
  Sparkles,
  Network,
  GraduationCap,
  Building,
  Shield,
  Lightbulb,
  ArrowRight,
  Mail,
  MapPin,
  Calendar,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export const metadata = getPageMetadata('sap-s4hana-simple-logistics-training-in-hyderabad');

export default function SAPSimpleLogisticsTraining() {
  const courseBenefits = [
    "Expert-led training with real-time project explanation",
    "Comprehensive curriculum covering all SAP Simple Logistics components",
    "Hands-on experience with Material Management and Supply Chain",
    "Free resume preparation and career guidance",
    "Mock tests and interview preparation",
    "24/7 support throughout the course"
  ];

  const trainingModes = [
    { mode: "Online Training", icon: Globe, desc: "Live interactive sessions from anywhere" },
    { mode: "Classroom Training", icon: Users, desc: "In-person training in Hyderabad" },
    { mode: "Job Support", icon: Target, desc: "Real-time project assistance" }
  ];

  const sapSimpleLogisticsFaqs = [
    {
      question: "What is SAP S/4HANA Simple Logistics and how does it differ from traditional logistics?",
      answer: "SAP S/4HANA Simple Logistics is a streamlined, integrated logistics solution within S/4HANA that combines Material Management, Production Planning, and Warehouse Management in a simplified approach. It differs from traditional logistics by offering real-time processing, embedded analytics, and unified user experience with modern Fiori apps."
    },
    {
      question: "What are the prerequisites for SAP Simple Logistics training?",
      answer: "Basic understanding of supply chain and logistics processes, familiarity with SAP system navigation, knowledge of business processes in procurement and production, and understanding of materials management concepts. Having experience with SAP MM or PP modules is beneficial but not mandatory."
    },
    {
      question: "What key modules and processes will I learn in Simple Logistics?",
      answer: "You'll learn Material Management (MM), Production Planning (PP), Inventory Management, Procurement processes, Production execution, Supply chain planning, Warehouse management basics, Integration between logistics modules, and S/4HANA-specific simplifications and enhancements."
    },
    {
      question: "What is the duration of the SAP Simple Logistics training course?",
      answer: "Our comprehensive SAP Simple Logistics training is designed to be completed in 40 days, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule with extensive hands-on practice on S/4HANA system."
    },
    {
      question: "Will I get hands-on experience with real S/4HANA logistics scenarios?",
      answer: "Yes! You'll work on actual S/4HANA systems with hands-on exercises including procurement cycles, production planning scenarios, inventory management, material master creation, vendor management, and end-to-end logistics processes using real business cases and S/4HANA Fiori apps."
    },
    {
      question: "What career opportunities are available after Simple Logistics training?",
      answer: "Simple Logistics professionals can work as SAP Logistics Consultant, Supply Chain Analyst, Materials Management Consultant, Production Planning Specialist, SAP Functional Consultant, or Logistics Coordinator with salaries ranging from ₹4-14 LPA depending on experience and domain expertise."
    },
    {
      question: "How does S/4HANA Simple Logistics improve business processes?",
      answer: "S/4HANA Simple Logistics provides real-time inventory visibility, streamlined procurement processes, integrated planning, embedded analytics for better decision-making, mobile-ready Fiori applications, simplified master data management, and enhanced user experience compared to traditional SAP ECC logistics."
    },
    {
      question: "Do you cover integration between different logistics modules?",
      answer: "Yes, our training comprehensively covers integration between MM, PP, WM modules, how data flows between procurement and production, inventory impact on financial modules, and how S/4HANA's unified data model enables seamless integration across logistics processes."
    },
    {
      question: "Do you provide SAP certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for SAP S/4HANA logistics certification exams and offer 100% placement assistance including resume building, logistics project portfolio creation, interview preparation with supply chain scenarios, and connecting with companies implementing S/4HANA logistics."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for logistics implementations, access to updated S/4HANA materials, latest logistics features, supply chain best practices, and alumni network for continuous professional development."
    }
  ];

  return (
    <>
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <Database className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium">Enterprise Logistics Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Simple Logistics
                </span>
                <br />
                <span className="text-white">Training In Hyderabad</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                Master SAP S/4HANA Simple Logistics with comprehensive training in Material Management, Supply Chain, and Production Planning
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+91-9032734343</span>
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20">
                  <Calendar className="w-5 h-5" />
                  <span>Duration: 40 Days</span>
                </button>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Globe, title: "Online & Classroom", desc: "Flexible training modes" },
                  { icon: Award, title: "Expert Trainers", desc: "Industry professionals" },
                  { icon: Target, title: "100% Placement", desc: "Job assistance guaranteed" }
                ].map((feature, index) => (
                  <div key={feature.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sap s4 Hana simple logistics training
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                SAP Simple Logistics, also referred to as SAP S/4 HANA Enterprise Management, consists of all the key modules under SAP ERP Business Suite. The list of modules include Material Management, Supply Chain, Demand Planning, Sourcing and Procurement, Contract Management, and Manufacturing.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Using S/4 HANA Enterprise Management, the following are the list of business processes that can be managed:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Procurement",
                  "Inventory Management",
                  "Order Management & Billing",
                  "Material Requirement Planning"
                ].map((process, index) => (
                  <div key={process} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <p className="text-white/90 font-medium">• {process}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed">
                In VR IT Solutions, we assure you get the best sap training support in sap s4 hana simple logistics training and rated as one of the few institutes in Hyderabad to offer well focussed and customized training.So,get started by clicking here.
              </p>
            </div>
          </div>
        </section>

        {/* Why should you do this course */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why should you do this course?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                SAP Simple Logistics is rated as the best sap s4 hana simple logistics training for innovative material management, supply chain management, production planning and also sales & distribution within medium or large enterprises. The above areas being core of business, getting trained in this course would help you reap excellent rewards in SAP. If you are a SAP solution architect, functional consultant or in any techno-functional role in logistics or supply chain industry, this course enables you to perform better and helps you make the next crucial move in your career.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                VR IT Solutions is one of the best software training institutes in Hyderabad to offer well focused and career-oriented training program in SAP Simple Logistics. So, get started by clicking here
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prerequisites
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Must have basic understanding of logistics processes.",
                "Should have some knowledge of any SAP module."
              ].map((prerequisite, index) => (
                <div key={prerequisite} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium leading-relaxed">• {prerequisite}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Course Structure
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {[
                "Introduction to SAP HANA Topics include SAP In-Memory Strategy, Architecture Overview and various views (analytic, attribute, calculation, etc)",
                "SAP S/4 HANA Topics include S/4 HANA Roadmap, Benefits, introduction to SAP Fiori and deployment options",
                "Introduction to SAP Activate Methodology Topics include System Conversion, Landscape transformation and New Implementation",
                "Overview of SAP HANA Cloud Solutions Topics include SAP strategy for Cloud and SAP HANA, overview of SAP Cloud Data Centers and SAP HANA Enterprise Cloud",
                "Key Innovations of SAP Simple Logistics Topics include inventory management, material requirement planning, material valuation and order management & billing Changes in SAP Simple Logistics Processes Topics include overview of SAP simple logistics processes, SAP Fiori apps related to logistics/supply chain and architectural changes pertaining to product master, supplier information, sourcing & procurement.",
                "Industry Specific Solutions for Logistics functions for Engineering & Construction, Aerospace & Defense, Mill Industry, Automotive",
                "Migration to SAP S/4 HANA Goals",
                "Scope and impact of the SAP S/4 HANA Materials Management & Operation Topics include pre-requisites, configuration and perform migration to the SAP S/4 HANA",
                "Live Project"
              ].map((topic, index) => (
                <div key={topic} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium leading-relaxed">• {topic}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <p className="text-white/80 text-sm font-medium">
                Note: The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
              </p>
            </div>
          </div>
        </section>

        {/* Who can do this course */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who can do this course?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "SAP solution architect",
                "Application consultant",
                "Support consultant",
                "Project manager",
                "Fresh graduates, looking for a career in this area of expertise."
              ].map((audience, index) => (
                <div key={audience} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <p className="text-white/90 font-medium">• {audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why VR IT solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why VR IT solutions?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {[
                "Free Demo sessions to get to know how the course is conducted",
                "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
                "Easy to follow, since most of the course is practical oriented with live industry cases.",
                "Classes driven by real time experts in SAP industry -experienced professionals across SAP domain,occupying various positions such as middle level managers,experienced faculty from reputed institutes.",
                "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles.",
                "Complete assistance to help you crack interviews – we provide FAQs, sample resumes and tips.",
                "Get trained in SAP Simple Logistics in just 45 hours -select either weekend or weekday mode",
                "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry"
              ].map((benefit, index) => (
                <div key={benefit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium leading-relaxed">• {benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How will I execute the Practicals */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How will I execute the Practicals?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux and Unix.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Training Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Training Modes */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Training Modes
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto lg:mx-0"></div>
                </div>

                <div className="space-y-6">
                  {trainingModes.map((mode, index) => (
                    <div key={mode.mode} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <mode.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">✓{mode.mode}</h3>
                          <p className="text-white/70 text-sm">{mode.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose VR IT Solutions */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why to choose VR IT solutions?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto lg:mx-0"></div>
                </div>

                <div className="space-y-4">
                  {[
                    "✓Real time project Explanation",
                    "✓Free Resume preparation", 
                    "✓Backup Classes",
                    "✓Career guidance",
                    "✓Mock Tests and Interviews",
                    "✓24/7 support"
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-white/90 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Call Us:</p>
                    <a href="tel:+919032734343" className="text-xl font-bold text-white hover:text-indigo-300 transition-colors">
                      +91-9032 734 343
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Mail Us:</p>
                    <a href="mailto:info@vritsol.com" className="text-xl font-bold text-white hover:text-indigo-300 transition-colors">
                      info@vritsol.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Master </span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  SAP Simple Logistics?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Join our comprehensive training program and become an expert in SAP S/4HANA logistics solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919032734343"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Enroll Now</span>
                </a>
                <Link
                  href="/"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>View All Courses</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar with Trending Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trending Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "SAP Central Finance Training", link: "https://www.vritsol.com/sap-central-finance-online-training.php" },
                { name: "SAP Basis Training", link: "/sap-basis-training-in-hyderabad" },
                { name: "SAP EWM Training", link: "/sap-ewm-training-in-hyderabad" },
                { name: "SAP SD Training", link: "https://www.vritsol.com/sap-sd-online-training-in-hyderabad" },
                { name: "SAP MM Training", link: "https://www.vritsol.com/sap-mm-online-training" },
                { name: "SAP Fico Online Training", link: "https://www.vritsol.com/sap-fico-online-training-in-hyderabad" },
                { name: "SAP Fico Training", link: "/sap-fico-training-in-hyderabad" },
                { name: "SAP Leonardo Training", link: "/sap-leonardo-training-in-hyderabad" },
                { name: "SAP Security GRC Training", link: "/sap-security-grc-training-in-hyderabad" },
                { name: "SAP HANA Admin Training", link: "/sap-hana-admin-training-in-hyderabad" },
                { name: "S/4 HANA Finance Training", link: "/s4-hana-finance-training-in-hyderabad" },
                { name: "Simple Logistics Training", link: null },
                { name: "SAS Clinical Training", link: "/sas-clinical-online-training-in-hyderabad" }
              ].map((tech, index) => (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  {tech.link ? (
                    tech.link.startsWith('http') ? (
                      <a 
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-indigo-300 transition-colors text-sm"
                      >
                        • {tech.name}
                      </a>
                    ) : (
                      <Link 
                        href={tech.link}
                        className="text-white/90 hover:text-indigo-300 transition-colors text-sm"
                      >
                        • {tech.name}
                      </Link>
                    )
                  ) : (
                    <span className="text-indigo-300 text-sm font-medium">• {tech.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-green-600/15 via-blue-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10 mx-4 mb-8">
          <FAQ faqs={sapSimpleLogisticsFaqs} theme="sap" />
        </section>

        {/* Sidebar */}
        <div className="fixed top-20 right-4 z-40">
          <CourseSidebar courseName="SAP Simple Logistics" phoneNumber="+91-9032734343" />
        </div>

      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sap-s4hana-simple-logistics-training-in-hyderabad'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('sap-s4hana-simple-logistics-training-in-hyderabad') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('sap-s4hana-simple-logistics-training-in-hyderabad'))
          }}
        />
      )}
    </>
  );
}
