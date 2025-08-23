'use client';

import React from 'react';
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
  ArrowRight,
  Mail
} from 'lucide-react';

// Define the course slug as a constant
import Image from 'next/image';
import Link from 'next/link';
import FAQ from './components/FAQ';
import PopupBanner from './components/PopupBanner';
import EnquiryModal from './components/EnquiryModal';
import coursesData from '../data/courses-static.json';

export default function Home() {
  // Get dynamic courses from Sanity
  // Get the mainImage from the index slug data
  const indexData = coursesData.find(course => course.slug === 'index');
  const popupImage = indexData?.mainImage || '';
  const bannerUrl = indexData?.bannerUrl || '';

  // State for EnquiryModal
  const [showEnquiry, setShowEnquiry] = React.useState(false);
  React.useEffect(() => {
    if (!popupImage) {
      const timer = setTimeout(() => setShowEnquiry(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [popupImage]);

  const staticCourses = [
    { name: 'ServiceNow', duration: '40 Days', icon: Cloud, color: 'from-blue-500 to-cyan-500', image: '/logo.png', description: 'Master IT Service Management, workflow automation, and enterprise cloud solutions with hands-on ServiceNow platform experience.', link: '/servicenow-training-in-hyderabad' },
    { name: 'Salesforce', duration: '70 Days', icon: Zap, color: 'from-green-500 to-teal-500', image: '/logo.png', description: 'Learn CRM fundamentals, Lightning Platform development, and Salesforce administration for career advancement.', link: '/salesforce-training-in-hyderabad' },
    { name: 'SAP FICO', duration: '120 Days', icon: Database, color: 'from-purple-500 to-pink-500', image: '/logo.png', description: 'Comprehensive SAP Financial Accounting and Controlling modules with real-world business scenarios and implementations.', link: '/sap-fico-online-training-in-hyderabad' },
    { name: 'SAP SD Online', duration: '90 Days', icon: Database, color: 'from-blue-500 to-purple-500', image: '/logo.png', description: 'Master SAP Sales and Distribution processes, order-to-cash cycle, pricing procedures, and customer management with online training.', link: '/sap-sd-online-training-in-hyderabad' },
    { name: 'SAP MM Online', duration: '120 Days', icon: Database, color: 'from-green-500 to-blue-500', image: '/logo.png', description: 'Master SAP Materials Management, purchasing processes, inventory control, and procurement workflows with comprehensive online training.', link: '/sap-mm-online-training' },
    { name: 'Pega', duration: '70 Days', icon: Zap, color: 'from-pink-500 to-rose-500', image: '/logo.png', description: 'Build enterprise applications with Pega BPM, case management, and low-code development methodologies.', link: '/pega-training-in-hyderabad' },
    { name: 'Azure DevOps & AWS Cloud', duration: '75 Days', icon: Cpu, color: 'from-indigo-500 to-purple-500', image: '/logo.png', description: 'Master cloud computing, CI/CD pipelines, containerization, and infrastructure automation across Azure and AWS platforms.', link: '/azure-devops-training-in-hyderabad' },
    { name: 'Mulesoft', duration: '45 Days', icon: Network, color: 'from-orange-500 to-red-500', image: '/logo.png', description: 'Learn API-led connectivity, integration patterns, and enterprise service architecture with MuleSoft Anypoint Platform.', link: '/mulesoft-training-in-hyderabad' },
    { name: 'SAS Clinical', duration: '120 Days', icon: Database, color: 'from-blue-500 to-indigo-500', image: '/logo.png', description: 'Specialized training in clinical data analysis, regulatory reporting, and pharmaceutical industry standards using SAS.', link: '/sas-clinical-online-training-in-hyderabad' },
    { name: 'SAP Basis', duration: '50 Days', icon: Database, color: 'from-orange-500 to-red-500', image: '/logo.png', description: 'SAP system administration, performance tuning, database management, and technical infrastructure maintenance.', link: '/sap-basis-online-training' },
    { name: 'SAP EWM', duration: '70 Days', icon: Database, color: 'from-yellow-500 to-orange-500', image: '/logo.png', description: 'Extended Warehouse Management solution covering inventory optimization, warehouse processes, and logistics automation.', link: '/sap-ewm-online-training' },
    { name: 'SAP HANA Admin', duration: '40 Days', icon: Database, color: 'from-purple-600 to-pink-600', image: '/logo.png', description: 'In-memory database administration, performance optimization, and advanced analytics with SAP HANA platform.', link: '/sap-hana-admin-training' },
    { name: 'S/4 HANA Finance', duration: '40 Days', icon: Database, color: 'from-blue-600 to-cyan-600', image: '/logo.png', description: 'Next-generation ERP finance modules, real-time analytics, and digital transformation with S/4HANA Finance.', link: '/simple-finance-training-in-hyderabad' },
    { name: 'SAP Leonardo', duration: '50 Days', icon: Brain, color: 'from-green-600 to-teal-600', image: '/logo.png', description: 'Explore AI, machine learning, IoT, and digital innovation platform capabilities within the SAP ecosystem.', link: '/sap-leonardo-training-hyderabad' },
    { name: 'SAP Security & GRC', duration: '60 Days', icon: Shield, color: 'from-red-500 to-pink-500', image: '/logo.png', description: 'Enterprise security management, governance, risk, compliance, and access control in SAP environments.', link: '/sap-security-training' },
    { name: 'SAP Logistics', duration: '40 Days', icon: Database, color: 'from-indigo-600 to-purple-600', image: '/logo.png', description: 'Supply chain management, procurement, inventory control, and logistics optimization using SAP S/4HANA.', link: '/sap-s4Hana-simple-logistics-training' },
    { name: 'Data Science', duration: '100 Days', icon: Brain, color: 'from-orange-500 to-red-500', image: '/logo.png', description: 'Statistical analysis, machine learning algorithms, data visualization, and predictive modeling with Python and R.', link: '/data-science-training-in-hyderabad' },
    { name: 'Python', duration: '45 Days', icon: Code, color: 'from-yellow-500 to-orange-500', image: '/logo.png', description: 'Programming fundamentals, web development with Django/Flask, automation scripting, and data manipulation libraries.', link: '/python-online-training' },
    { name: 'Python With AWS', duration: '45 Days', icon: Code, color: 'from-green-500 to-blue-500', image: '/logo.png', description: 'Cloud-native Python development, serverless computing, AWS services integration, and scalable application deployment.', link: '/python-with-aws-training' },
    { name: 'Workday', duration: '50 Days', icon: Users, color: 'from-purple-500 to-pink-500', image: '/logo.png', description: 'Human Capital Management, financial management, and enterprise planning with Workday cloud applications.', link: '/workday-training-in-hyderabad' },
    { name: 'Machine Learning With Python', duration: '45 Days', icon: Brain, color: 'from-blue-500 to-purple-500', image: '/logo.png', description: 'Advanced ML algorithms, neural networks, deep learning frameworks, and AI model deployment using Python.', link: '/machine-learning-with-python-training-in-hyderabad' },
    { name: 'AWS With DevOps', duration: '70 Days', icon: Cpu, color: 'from-teal-500 to-cyan-500', image: '/logo.png', description: 'Cloud infrastructure automation, continuous deployment, microservices architecture, and monitoring on AWS platform.', link: '/devops-training-in-hyderabad' },
    { name: 'Informatica MDM', duration: '45 Days', icon: Database, color: 'from-pink-500 to-red-500', image: '/logo.png', description: 'Master Data Management, data quality, data governance, and enterprise data integration using Informatica platform.', link: '/informatica-mdm-training' },
    { name: 'Full Stack Developer', duration: '75 Days', icon: Code, color: 'from-indigo-500 to-blue-500', image: '/logo.png', description: 'End-to-end web development with React, Node.js, databases, and modern JavaScript frameworks for complete applications.', link: '/full-stack-developer-training-in-hyderabad' },
    { name: 'EDI Training', duration: '45 Days', icon: Code, color: 'from-emerald-500 to-teal-500', image: '/logo.png', description: 'Electronic Data Interchange standards, B2B communication protocols, and automated business document exchange.', link: '/edi-training' },
    { name: 'Hadoop', duration: '60 Days', icon: Database, color: 'from-orange-600 to-yellow-600', image: '/logo.png', description: 'Big Data processing, distributed computing, HDFS, MapReduce, and ecosystem tools for large-scale data analytics.', link: '/hadoop-online-training' },
    { name: 'Snowflake', duration: '45 Days', icon: Cloud, color: 'from-cyan-500 to-blue-500', image: '/logo.png', description: 'Cloud-based data warehousing platform with seamless collaboration, performance, flexibility and near-infinite scalability for complete database ecosystem.', link: '/snowflake-training-in-hyderabad' },
    { name: 'Google Cloud', duration: '65 Days', icon: Cloud, color: 'from-blue-500 to-green-500', image: '/logo.png', description: 'Google Cloud Platform suite of cloud computing services with infrastructure, platform, and serverless computing environments for comprehensive cloud solutions.', link: '/google-cloud-training' }
  ];

  // Transform dynamic courses to match static course structure

  // Combine static and dynamic courses, with dynamic courses first
  const courses = staticCourses;

  const features = [
    { icon: Users, title: 'Flexible Modes of Training', desc: 'Select any mode of training. You can have online training, classroom training and we deliver trainings for your corporate needs too. Here you get Classroom Training and Online Training also.' },
    { icon: BookOpen, title: '20+ Technology and Non Tech Courses', desc: 'Train your professional team from VR IT Solution\'s 20+ technology and Non Tech Courses. From Artificial Intelligence, Python to Data Science or from Soft skill to Digital Marketing Training.' },
    { icon: Target, title: 'Hands-On Learning', desc: 'Learning can only be effective if there is a Hand-on learning knowledge available. We provide live projects and real time case studies by which it is easy to understand each and every concept practically.' },
    { icon: Award, title: 'Get trained by Industry Experts', desc: 'Our professional trainers have real time industry experience in particular domain. We have the expert trainers with ample amount of training experience.' },
    { icon: Globe, title: 'Unique Method of Training', desc: 'We follow some unique approach in each and every training by which we can achieve our outcome in less time. Also we focus on improving knowledge of students and professionals by easiest techniques.' },
    { icon: Rocket, title: 'True Partnership', desc: 'Our goal is to build an honest relationship with our valuable students, corporate team and provide them best training and business solutions with lifetime support and placements.' }
  ];

  const companies = [
    { name: 'Infosys', image: '/image1.png' },
    { name: 'Wipro', image: '/image2.png' },
    { name: 'Accenture', image: '/image3.jpg' },
    { name: 'Delloite', image: '/image4.png' },
    { name: 'Cognizent', image: '/image5.webp' },
    { name: 'Capgemini', image: '/image6.webp' }
  ];

  const homepageFaqs = [
    {
      question: "What makes VR IT Solutions the best software training institute in Hyderabad?",
      answer: "VR IT Solutions stands out with 15+ years of experience, 100% placement assistance, expert trainers with real industry experience, flexible training modes (online/classroom), live projects, and affordable fees. We've successfully trained 5000+ students and offer 20+ technology courses with hands-on learning approach."
    },
    {
      question: "What training modes do you offer?",
      answer: "We offer flexible training modes to suit your needs: Online Training (live interactive sessions), Classroom Training (face-to-face learning), Corporate Training (customized for organizations), and Weekend Batches. All modes include live projects and real-time case studies."
    },
    {
      question: "Do you provide placement assistance and job support?",
      answer: "Yes, we provide 100% placement assistance to deserving candidates. Our services include resume preparation, interview coaching, job referrals to partner companies like Infosys, Wipro, Accenture, and lifetime job support even after course completion."
    },
    {
      question: "Which are the most popular courses at VR IT Solutions?",
      answer: "Our most popular courses include ServiceNow (40 days), Salesforce (70 days), Python (45 days), Data Science (100 days), AWS with DevOps (70 days), SAP FICO (120 days), Full Stack Development (75 days), and Machine Learning with Python (45 days)."
    },
    {
      question: "What is the fee structure and payment options?",
      answer: "We offer competitive and affordable fee structures for all courses. Payment options include one-time payment, installments, and corporate billing. Contact us at +91-9032734343 for detailed fee information and current discounts."
    },
    {
      question: "Do you provide certification after course completion?",
      answer: "Yes, we provide industry-recognized course completion certificates. Additionally, our instructors help students prepare for official certifications like Salesforce Admin, ServiceNow CSA, AWS Solutions Architect, and other vendor certifications with extra practice materials."
    },
    {
      question: "What is the duration of courses and batch timings?",
      answer: "Course durations vary from 40 days to 120 days depending on the technology. We offer flexible batch timings including weekday morning, evening, and weekend batches to accommodate working professionals and students."
    },
    {
      question: "Do you provide real-time projects and hands-on experience?",
      answer: "Absolutely! All our courses include live projects and real-time case studies. Students work on actual industry scenarios, which helps in practical understanding and makes them job-ready. We also provide access to necessary software and tools."
    },
    {
      question: "What support do you provide after course completion?",
      answer: "We provide lifetime support including job assistance, interview preparation, resume building, access to updated course materials, doubt clarification sessions, and continuous guidance for career growth. Our support team is available 24/7."
    },
    {
      question: "How experienced are your trainers?",
      answer: "Our trainers are industry experts with 8-15 years of real-time experience in their respective domains. They are working professionals from top MNCs who bring practical insights and current industry trends to the classroom, ensuring students learn the latest technologies and best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      
      {/* Popup Banner or Enquiry Modal */}
      {popupImage ? (
        <PopupBanner imageUrl={popupImage} bannerUrl={bannerUrl} delay={5000} />
      ) : (
        <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
      )}
      
      {/* Clean Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style' }}>
        {/* No colored circles - clean background */}
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ contentVisibility: 'visible' }}>
        {/* Innovative Learning Journey with Particle Effects */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            {/* Floating code symbols */}
            <div className="absolute top-20 left-20 text-blue-400/20 text-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>{'</>'}</div>
            <div className="absolute top-32 right-24 text-purple-400/20 text-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>🚀</div>
            <div className="absolute bottom-20 left-32 text-green-400/20 text-lg animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}>⚡</div>
            <div className="absolute bottom-32 right-20 text-orange-400/20 text-xl animate-bounce" style={{animationDelay: '3s', animationDuration: '4s'}}>🎯</div>
            
            {/* Floating tech icons */}
            <div className="absolute top-1/3 left-12 w-8 h-8 bg-blue-500/10 rounded-lg rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-2/3 right-12 w-6 h-6 bg-purple-500/10 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 left-8 w-10 h-10 bg-green-500/10 rounded-xl rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Dynamic Curved Path with Flowing Animation */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowingPath" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6">
                  <animate attributeName="stop-color" values="#3B82F6;#8B5CF6;#10B981;#F59E0B;#EF4444;#6366F1;#3B82F6" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8">
                  <animate attributeName="stop-color" values="#8B5CF6;#10B981;#F59E0B;#EF4444;#6366F1;#3B82F6;#8B5CF6" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.6">
                  <animate attributeName="stop-color" values="#10B981;#F59E0B;#EF4444;#6366F1;#3B82F6;#8B5CF6;#10B981" dur="8s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              {/* Moving dot pattern */}
              <pattern id="movingDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#FFFFFF" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            
            {/* Main flowing path */}
            <path
              id="learningJourneyPath"
              d="M 80 120 Q 200 60 400 100 Q 600 140 800 80 Q 1000 40 1120 120 Q 1140 200 1100 300 Q 1060 400 1120 480 Q 1100 560 1000 520 Q 800 480 600 520 Q 400 560 200 500 Q 80 440 60 300 Q 40 200 80 120"
              stroke="url(#flowingPath)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="30,15"
              className="animate-pulse"
            >
              <animate attributeName="stroke-dashoffset" values="0;45;0" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Animated Human Figure Walking Along Path */}
            <g>
              {/* Stage Messages that appear when student stops */}
              <g id="stageMessages">
                {/* Stage 1 Message */}
                <g id="stage1Message" opacity="0">
                  <rect x="70" y="105" width="120" height="30" rx="8" fill="#3B82F6" fillOpacity="0.9" stroke="#60A5FA" strokeWidth="1"/>
                  <text x="130" y="118" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">🎯 Welcome!</text>
                  <text x="130" y="128" fontSize="8" fill="#DBEAFE" textAnchor="middle">Choose your course & begin</text>
                  <animate attributeName="opacity" values="0;1;0;0;0;0;0;1;0;0;0;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.4;0.5;0.6;0.6;0.7;0.8;0.9;1;1" />
                </g>

                {/* Stage 2 Message - moved to top-right position */}
                <g id="stage2Message" opacity="0">
                  <rect x="1030" y="105" width="140" height="30" rx="8" fill="#8B5CF6" fillOpacity="0.9" stroke="#A78BFA" strokeWidth="1"/>
                  <text x="1100" y="118" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">🧠 Learning Phase</text>
                  <text x="1100" y="128" fontSize="8" fill="#DDD6FE" textAnchor="middle">Master fundamentals & theory</text>
                  <animate attributeName="opacity" values="0;0;1;0;0;0;0;0;1;0;0;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.083;0.083;0.3;0.4;0.5;0.583;0.583;0.8;0.9;1;1" />
                </g>

                {/* Stage 3 Message - moved to left side of right-center position */}
                <g id="stage3Message" opacity="0">
                  <rect x="950" y="260" width="140" height="30" rx="8" fill="#10B981" fillOpacity="0.9" stroke="#34D399" strokeWidth="1"/>
                  <text x="1020" y="273" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">⚡ Practice Time!</text>
                  <text x="1020" y="283" fontSize="8" fill="#D1FAE5" textAnchor="middle">Hands-on labs & exercises</text>
                  <animate attributeName="opacity" values="0;0;0;1;0;0;0;0;0;1;0;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.15;0.167;0.167;0.4;0.5;0.65;0.667;0.667;0.9;1;1" />
                </g>

                {/* Stage 4 Message - moved to bottom-right position */}
                <g id="stage4Message" opacity="0">
                  <rect x="920" y="505" width="130" height="30" rx="8" fill="#F59E0B" fillOpacity="0.9" stroke="#FBBF24" strokeWidth="1"/>
                  <text x="985" y="518" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">🛠️ Build Projects</text>
                  <text x="985" y="528" fontSize="8" fill="#FEF3C7" textAnchor="middle">Real-world applications</text>
                  <animate attributeName="opacity" values="0;0;1;0;0;0;0;0;1;0;0;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.217;0.217;0.3;0.5;0.717;0.717;0.8;0.8;0.9;1;1" />
                </g>

                {/* Stage 5 Message - moved to bottom-left position */}
                <g id="stage5Message" opacity="0">
                  <rect x="70" y="485" width="140" height="30" rx="8" fill="#EF4444" fillOpacity="0.9" stroke="#F87171" strokeWidth="1"/>
                  <text x="140" y="498" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">🏆 Get Certified!</text>
                  <text x="140" y="508" fontSize="8" fill="#FEE2E2" textAnchor="middle">Earn industry recognition</text>
                  <animate attributeName="opacity" values="0;0;1;0;0;0;0;0;1;0;0;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.333;0.333;0.417;0.5;0.833;0.833;0.917;0.92;1;1;1" />
                </g>

                {/* Stage 6 Message - New Networking Stage */}
                <g id="stage6Message" opacity="0">
                  <rect x="50" y="250" width="130" height="30" rx="8" fill="#06B6D4" fillOpacity="0.9" stroke="#67E8F9" strokeWidth="1"/>
                  <text x="115" y="263" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">🌐 Network</text>
                  <text x="115" y="273" fontSize="8" fill="#E0F7FA" textAnchor="middle">Build connections</text>
                  <animate attributeName="opacity" values="0;0;1;0;0;0;0;0;1;0;0;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.45;0.45;0.48;0.5;0.95;0.95;0.98;1;1;1;1" />
                </g>
              </g>

              {/* Human figure with stop-and-go animation - More Realistic */}
              <g id="walkingStudent">
                {/* Body - Torso */}
                <ellipse cx="0" cy="-8" rx="2.5" ry="4" fill="#3B82F6" opacity="0.9">
                  <animate attributeName="fill" values="#3B82F6;#3B82F6;#8B5CF6;#8B5CF6;#10B981;#10B981;#F59E0B;#F59E0B;#EF4444;#EF4444;#6366F1;#6366F1" dur="60s" repeatCount="indefinite" keyTimes="0;0.167;0.25;0.417;0.5;0.667;0.75;0.833;0.917;1;1;1" />
                </ellipse>
                
                {/* Head - More detailed */}
                <circle cx="0" cy="-15" r="3" fill="#FDE68A" opacity="0.9" stroke="#F59E0B" strokeWidth="0.3"/>
                
                {/* Face features */}
                <g id="face">
                  {/* Eyes */}
                  <circle cx="-1" cy="-15.5" r="0.4" fill="#1F2937"/>
                  <circle cx="1" cy="-15.5" r="0.4" fill="#1F2937"/>
                  <circle cx="-0.8" cy="-15.7" r="0.2" fill="white"/>
                  <circle cx="1.2" cy="-15.7" r="0.2" fill="white"/>
                  
                  {/* Nose */}
                  <ellipse cx="0" cy="-14.8" rx="0.3" ry="0.5" fill="#F59E0B" opacity="0.6"/>
                  
                  {/* Mouth - animated expression during stops */}
                  <path d="M -0.8,-14 Q 0,-13.5 0.8,-14" stroke="#1F2937" strokeWidth="0.3" fill="none">
                    <animate attributeName="d" values="M -0.8,-14 Q 0,-13.5 0.8,-14;M -0.8,-14 Q 0,-13.2 0.8,-14;M -0.8,-14 Q 0,-13.5 0.8,-14" dur="3s" repeatCount="indefinite" />
                  </path>
                </g>
                
                {/* Hair */}
                <ellipse cx="0" cy="-17" rx="3.2" ry="1.5" fill="#8B4513" opacity="0.8"/>
                
                {/* Walking legs animation - more realistic */}
                <g id="legs">
                  {/* Left leg - thigh */}
                  <line x1="0" y1="-4" x2="-1.5" y2="1" stroke="#2563EB" strokeWidth="2" opacity="0.9">
                    <animate attributeName="x2" values="-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="y2" values="1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </line>
                  
                  {/* Left leg - shin */}
                  <line x1="-1.5" y1="1" x2="-2" y2="4" stroke="#2563EB" strokeWidth="1.8" opacity="0.9">
                    <animate attributeName="x1" values="-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5;-1.5;1.5;-1.5;-1.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="y1" values="1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="x2" values="-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </line>
                  
                  {/* Right leg - thigh */}
                  <line x1="0" y1="-4" x2="1.5" y2="1" stroke="#2563EB" strokeWidth="2" opacity="0.9">
                    <animate attributeName="x2" values="1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="y2" values="1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </line>
                  
                  {/* Right leg - shin */}
                  <line x1="1.5" y1="1" x2="2" y2="4" stroke="#2563EB" strokeWidth="1.8" opacity="0.9">
                    <animate attributeName="x1" values="1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5;1.5;-1.5;1.5;1.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="y1" values="1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1;1;1.5;1;1" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="x2" values="2;-2;2;2;2;-2;2;2;2;-2;2;2;2;-2;2;2;2;-2;2;2;2;-2;2;2" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </line>
                  
                  {/* Feet */}
                  <ellipse cx="-2" cy="4.5" rx="1" ry="0.5" fill="#1F2937">
                    <animate attributeName="cx" values="-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2;-2;2;-2;-2" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </ellipse>
                  <ellipse cx="2" cy="4.5" rx="1" ry="0.5" fill="#1F2937">
                    <animate attributeName="cx" values="2;-2;2;2;2;-2;2;2;2;-2;2;2;2;-2;2;2;2;-2;2;2;2;-2;2;2" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </ellipse>
                </g>
                
                {/* Arms swinging - more realistic with shoulders */}
                <g id="arms">
                  {/* Left arm */}
                  <line x1="-2" y1="-10" x2="-2.5" y2="-6" stroke="#3B82F6" strokeWidth="1.5" opacity="0.9">
                    <animate attributeName="x2" values="-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="y2" values="-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </line>
                  
                  {/* Right arm */}
                  <line x1="2" y1="-10" x2="2.5" y2="-6" stroke="#3B82F6" strokeWidth="1.5" opacity="0.9">
                    <animate attributeName="x2" values="2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="y2" values="-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </line>
                  
                  {/* Hands */}
                  <circle cx="-2.5" cy="-6" r="0.8" fill="#FDE68A">
                    <animate attributeName="cx" values="-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5;-2.5;1.5;-2.5;-2.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="cy" values="-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </circle>
                  <circle cx="2.5" cy="-6" r="0.8" fill="#FDE68A">
                    <animate attributeName="cx" values="2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5;2.5;-1.5;2.5;2.5" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                    <animate attributeName="cy" values="-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6;-6;-5.5;-6;-6" dur="60s" repeatCount="indefinite" keyTimes="0;0.04;0.083;0.167;0.21;0.25;0.333;0.377;0.417;0.5;0.544;0.583;0.667;0.71;0.75;0.833;0.877;0.917;0.96;1;1;1;1;1" />
                  </circle>
                </g>
                
                {/* Modern backpack with details */}
                <g id="backpack">
                  <rect x="-1.2" y="-12.5" width="2.4" height="4" rx="0.8" fill="#10B981" opacity="0.8"/>
                  <rect x="-0.8" y="-12.2" width="1.6" height="1" rx="0.3" fill="#059669" opacity="0.9"/>
                  <circle cx="0" cy="-10.5" r="0.3" fill="#047857"/>
                  <rect x="-0.3" y="-9" width="0.6" height="0.8" rx="0.2" fill="#065F46" opacity="0.7"/>
                </g>
                
                {/* Thinking bubble during stops */}
                <g id="thinkingBubble" opacity="0">
                  <circle cx="5" cy="-20" r="4" fill="white" fillOpacity="0.9" stroke="#94A3B8"/>
                  <text x="5" y="-17" fontSize="6" textAnchor="middle">💭</text>
                  <animate attributeName="opacity" values="0;1;0;1;0;1;0;1;0;1;0" dur="60s" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1" />
                </g>

                {/* Stop-and-go motion animation */}
                <animateMotion dur="60s" repeatCount="indefinite" rotate="auto" keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1" keyPoints="0;0.2;0.4;0.6;0.8;1;0;0.2;0.4;0.6;0.8" calcMode="linear">
                  <mpath href="#learningJourneyPath" />
                </animateMotion>
              </g>

              {/* Achievement particles that appear during stops */}
              <g id="achievementParticles">
                <circle cx="0" cy="0" r="1" fill="#F59E0B" opacity="0">
                  <animate attributeName="cy" values="0;-8;0" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0;0;0.6;0;0;0;0.6;0;0;0;0.6;0;0;0;0.6;0;0;0;0.6;0;0;0;0.6;0" dur="65s" repeatCount="indefinite" />
                </circle>
                <circle cx="3" cy="0" r="0.8" fill="#10B981" opacity="0">
                  <animate attributeName="cy" values="0;-6;0" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0;0;0.5;0;0;0;0.5;0;0;0;0.5;0;0;0;0.5;0;0;0;0.5;0;0;0;0.5;0" dur="65s" repeatCount="indefinite" />
                </circle>

                <animateMotion dur="65s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#learningJourneyPath" />
                </animateMotion>
              </g>

              {/* Progress celebration during stops */}
              <g id="progressCelebration">
                <text x="0" y="-25" fontSize="12" textAnchor="middle" opacity="0">🎉</text>
                <animate attributeName="opacity" values="0;0;0;1;0;0;0;1;0;0;0;1;0;0;0;1;0;0;0;1;0;0;0;1;0" dur="65s" repeatCount="indefinite" />
                
                <animateMotion dur="65s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#learningJourneyPath" />
                </animateMotion>
              </g>
            </g>
          </svg>
          
          {/* Interactive Learning Milestones with Innovation */}
          {/* Step 1 - Enrollment Portal */}
          <div className="absolute left-16 top-16 pointer-events-auto">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                {/* Orbital rings */}
                <div className="absolute inset-0 w-20 h-20 border border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                <div className="absolute inset-2 w-16 h-16 border border-blue-300/20 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                
                {/* Main milestone */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl shadow-xl group-hover:shadow-blue-500/50 flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-all duration-500">
                  <span className="text-white font-bold text-lg transform -rotate-45 group-hover:rotate-0 transition-all duration-500">1</span>
                  {/* Success particles */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm text-blue-300 font-bold group-hover:text-blue-200 transition-colors">📚 Enroll</div>
                <div className="text-xs text-blue-400/80 opacity-0 group-hover:opacity-100 transition-opacity">Start Your Journey</div>
              </div>
            </div>
          </div>

          {/* Step 2 - Learning Hub (original Stage 2 content, now at Stage 3 position) */}
          <div className="absolute right-16 top-16 pointer-events-auto">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500 flex items-center space-x-3">
              <div className="relative">
                {/* Pulsing aura */}
                <div className="absolute inset-0 w-20 h-20 bg-purple-500/20 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-full shadow-xl group-hover:shadow-purple-500/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                  {/* Knowledge sparks */}
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-purple-300 font-bold group-hover:text-purple-200 transition-colors">🧠 Learn</div>
                <div className="text-xs text-purple-400/80 opacity-0 group-hover:opacity-100 transition-opacity">Gain Knowledge</div>
              </div>
            </div>
          </div>

          {/* Step 3 - Practice Lab (moved to Stage 4 position) */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-auto">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                {/* Electric field */}
                <div className="absolute inset-0 w-20 h-20">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 left-0 w-1 h-1 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-500 rounded-lg shadow-xl group-hover:shadow-green-500/50 flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-lg">3</span>
                  {/* Progress indicator */}
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-green-300/30 rounded-full">
                    <div className="h-full bg-green-400 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm text-green-300 font-bold group-hover:text-green-200 transition-colors">⚡ Practice</div>
                <div className="text-xs text-green-400/80 opacity-0 group-hover:opacity-100 transition-opacity">Hands-on Labs</div>
              </div>
            </div>
          </div>

          {/* Step 4 - Project Workshop (moved to Stage 5 position) */}
          <div className="absolute right-16 bottom-16 pointer-events-auto">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                {/* Achievement glow */}
                <div className="absolute inset-0 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 w-18 h-18 bg-red-400/10 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                
                <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 via-pink-600 to-rose-500 rounded-full shadow-xl group-hover:shadow-red-500/50 flex items-center justify-center border-2 border-yellow-400/50">
                  <span className="text-white font-bold text-lg">4</span>
                  {/* Achievement crown */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xs">�</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm text-red-300 font-bold group-hover:text-red-200 transition-colors">🏆 Certify</div>
                <div className="text-xs text-red-400/80 opacity-0 group-hover:opacity-100 transition-opacity">Get Certified</div>
              </div>
            </div>
          </div>

          {/* Step 5 - Career Launch (moved to Stage 6 position) */}
          <div className="absolute left-16 bottom-16 pointer-events-auto">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                {/* Rocket trail */}
                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-t from-indigo-500/50 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-bounce transform -translate-x-1/2"></div>
                
                <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 rounded-2xl shadow-xl group-hover:shadow-indigo-500/50 flex items-center justify-center transform group-hover:-rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-lg">5</span>
                  {/* Success sparkles */}
                  <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">✨</div>
                  <div className="absolute -bottom-1 -left-1 text-yellow-300 text-xs animate-pulse" style={{animationDelay: '0.5s'}}>⭐</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm text-indigo-300 font-bold group-hover:text-indigo-200 transition-colors">🚀 Career</div>
                <div className="text-xs text-indigo-400/80 opacity-0 group-hover:opacity-100 transition-opacity">Launch Success</div>
              </div>
            </div>
          </div>

          {/* Step 6 - Professional Network (moved to left-center position) */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-auto">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                {/* Networking connections */}
                <div className="absolute inset-0 w-20 h-20">
                  <div className="absolute top-1 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 right-1 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-cyan-500 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                </div>
                
                <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 via-teal-600 to-blue-500 rounded-full shadow-xl group-hover:shadow-cyan-500/50 flex items-center justify-center transform group-hover:rotate-45 transition-all duration-500">
                  <span className="text-white font-bold text-lg">6</span>
                  {/* Network icon */}
                  <div className="absolute -top-1 -right-1 text-white text-xs">🌐</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm text-cyan-300 font-bold group-hover:text-cyan-200 transition-colors">🌐 Network</div>
                <div className="text-xs text-cyan-400/80 opacity-0 group-hover:opacity-100 transition-opacity">Build Connections</div>
              </div>
            </div>
          </div>

          {/* Dynamic Success Metrics */}
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-blue-400/30 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping"></div>
                <div className="relative w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">98%</span>
                </div>
              </div>
              <div>
                <div className="text-blue-300 text-sm font-bold">Success Rate</div>
                <div className="text-blue-400/80 text-xs">Students Placed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center" style={{ contain: 'layout' }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-medium">🏆 Best Software Training Institute in Hyderabad</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ contain: 'layout', willChange: 'auto' }}>
              <span 
                className="bg-gradient-to-r from-orange-400 via-teal-400 to-blue-400 bg-clip-text text-transparent"
                style={{ 
                  contain: 'layout',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                Transform Your
              </span>
              <br />
              <span className="text-white">Career Journey</span>
            </h1>
            
            <p 
              className="hero-lcp-text"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: '1.625',
                color: 'rgb(229 231 235)',
                marginBottom: '2rem',
                maxWidth: '48rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                textRendering: 'optimizeSpeed',
                contain: 'layout style',
                willChange: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              Get knowledge in practical way, Everyone satisfied with our innovation way of knowledge transfer. Best Software Training Institute in Hyderabad for best brains!
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 mt-8">
              {[
                { 
                  label: 'Online Training', 
                  icon: Globe, 
                  gradient: 'from-blue-500 to-blue-600',
                  description: 'Learn from anywhere with live interactive sessions',
                  action: 'redirect'
                },
                { 
                  label: 'Classroom Training', 
                  icon: Users, 
                  gradient: 'from-teal-500 to-teal-600',
                  description: 'Face-to-face learning with hands-on practice',
                  action: 'redirect'
                },
                { 
                  label: 'Job Support', 
                  icon: Target, 
                  gradient: 'from-orange-500 to-orange-600',
                  description: '24/7 support for your career success',
                  action: 'redirect'
                },
                { 
                  label: 'Call Now', 
                  icon: Phone, 
                  gradient: 'from-orange-600 to-red-500',
                  description: 'Get instant consultation and course details',
                  action: 'call'
                }
              ].map((btn, _index) => (
                <div key={btn.label} className="text-center flex flex-col items-center">
                  <button
                    onClick={() => {
                      if (btn.action === 'redirect') {
                        window.location.href = '/services';
                      } else if (btn.action === 'call') {
                        window.location.href = 'tel:+919032734343';
                      }
                    }}
                    className={`group relative bg-gradient-to-r ${btn.gradient} text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-sm cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="relative flex items-center space-x-2">
                      <btn.icon className="w-4 h-4" />
                      <span>{btn.label}</span>
                    </div>
                  </button>
                  <p className="text-xs text-gray-300 mt-2 max-w-[140px] leading-tight text-center">
                    {btn.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mt-12">
              {[
                { number: '5000+', label: 'Students Trained', icon: GraduationCap, color: 'from-blue-500 to-cyan-500', message: '🎉 Join our success story' },
                { number: '20+', label: 'Technology Courses', icon: Code, color: 'from-purple-500 to-pink-500', message: '📚 Master trending tech' },
                { number: '100%', label: 'Placement Rate', icon: TrendingUp, color: 'from-green-500 to-teal-500', message: '💼 Guaranteed career growth' },
                { number: '15+', label: 'Years Experience', icon: Award, color: 'from-orange-500 to-red-500', message: '🏆 Learn from experts' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/10 hover:bg-orange-500/10 hover:scale-105 hover:-translate-y-2 hover:border-orange-400 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon with rotation effect */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-200 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300 mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Success message - always present but hidden/shown with opacity */}
                  <div className="text-xs font-bold text-orange-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 h-6 flex items-center justify-center">
                    {stat.message}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Teaser Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-sm">Discover amazing courses below</span>
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
                
                {/* Interactive scroll button */}
                <button
                  onClick={() => {
                    document.querySelector('#courses')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-bounce hover:animate-none"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-2">
                    <span>Explore Our Courses</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                {/* Floating testimonial teaser */}
                <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 max-w-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-300">"Best decision of my career!"</span>
                  </div>
                  <p className="text-xs text-gray-400">- Rahul S, ServiceNow Developer @ Infosys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-3 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="text-white">VR IT Solutions?</span>
            </h2>
            <p className="text-base text-gray-200 max-w-3xl mx-auto">
              We leverage cutting-edge technology and industry expertise to deliver world-class training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, _index) => (
              <div
                key={feature.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-orange-500/50 hover:-translate-y-1 hover:scale-102 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's unique about VR IT Training Center Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-3 border border-white/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">What Makes Us Special</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                What&apos;s unique about
              </span>
              <br />
              <span className="text-white">VR IT Training Center?</span>
            </h2>
            <p className="text-base text-gray-200 max-w-3xl mx-auto">
              Discover the distinctive features that set us apart from other training institutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Expert-Designed Curriculum",
                desc: "A comprehensive curriculum for various courses, designed by Industry experts and academicians from IITs and NITs.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Unique Learning Pedagogy",
                desc: "A unique learning pedagogy, where training is mostly imparted through vigorous theory sessions, supplemented by state-of-the art practical sessions",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: Globe,
                title: "Flexible Training Modes",
                desc: "Choose either of the modes: classroom or online training – as per your convenience",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Unlimited Learning",
                desc: "No defined frontiers – learn from anywhere, anytime.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Award,
                title: "Affordable Excellence",
                desc: "Affordable fees – worth it considering the huge value you would derive once you put your theory into practice",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Code,
                title: "Real-World Projects",
                desc: "Live projects to help you understand the latest industry trends, project execution methodology and more to make you a seasoned IT professional",
                gradient: "from-teal-500 to-blue-500"
              },
              {
                icon: Users,
                title: "Placement Assistance",
                desc: "Placement assistance to deserving candidates in reputed companies",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Rocket,
                title: "And Much More",
                desc: "And much more….",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, _index) => (
              <div
                key={feature.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR IT Training Institute Proficiencies Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-3 border border-white/20">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                VR IT Training Institute
              </span>
              <br />
              <span className="text-white">Proficiencies</span>
            </h2>
            <p className="text-base text-gray-200 max-w-3xl mx-auto">
              Discover our comprehensive approach to software training and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Rocket,
                title: "Career Transformation Focus",
                desc: "VR IT the software trainings we provide will give no trouble for your IT career which transforms every one of those ladders, giving instructors and trainers more control and suppleness to get their trainings across.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: BookOpen,
                title: "Carefully Crafted Curriculum",
                desc: "We define our Curriculum at VR IT with the special care so that students and trainers establish their views into a more effective way students can, inculcation on the subject by the trainers structure, but it's more important how the students are getting benefited by the very construction of the curriculum can guide students on a conventional line over the books.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: Target,
                title: "Summary-Oriented Learning",
                desc: "VR IT is summary oriented where the lectures are going to be very useful for shaping your knowledge and skills, but we will build the presentation resources for the class which gives the students better understanding.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                title: "Continuous Course Updates",
                desc: "VR IT is will update and work on the latest courses and the update the presentations and curriculum accordingly keeping the students' success as primary motive.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Sparkles,
                title: "Dedicated Digital Media Team",
                desc: "VR IT had a dedicated digital media team who work continuous improvements of photos, audio recordings, PowerPoint presentations, movie clips.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Mail,
                title: "Extended Learning Support",
                desc: "Our instructors provide additional information that is not included in the curriculum, through emails and the other sources linked with the course.",
                gradient: "from-teal-500 to-blue-500"
              },
              {
                icon: Users,
                title: "Interactive Learning Methods",
                desc: "VR IT follows different methods in educating the students keeping them engaged in the real time activities through mock interviews and quizzes and also each student is rewarded for his/her outstanding performance.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Award,
                title: "Certification & Practice Support",
                desc: "Instructors at VR IT will help the students in providing the right information about the certification programs and providing the extra practice material.",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((proficiency, _index) => (
              <div
                key={proficiency.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proficiency.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-r ${proficiency.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <proficiency.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                    {proficiency.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {proficiency.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Placement Assistance Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Placement Guarantee</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                100% Get Placement Assistance
              </span>
              <br />
              <span className="text-white">& Job Support</span>
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-6">
              From the joining of your course till the day you got job, you will surely get placement assistance from VR IT Solutions. As we provide 100% placement to our students.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
                <Building className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">About Our Institute</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Welcome To
                </span>
                <br />
                <span className="text-white">VR IT Solutions</span>
              </h2>
              
              <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                That&apos;s what we would precisely define ourselves. In this competitive world, nothing succeeds like knowledge and knowledge is true wealth, which manifests and grows in leaps and bounds. We earnestly believe that every student or a professional, who acquires software training with us should be equipped with the necessary weapons to face the fierce competitive world and emerge victorious. For this, we leverage the best platforms and impart the latest courses in software – be it Hadoop Training, Python Training, Data Science Training, Informatica Training, Servicenow Training, SAP HANA Training, SAP MDM Training, Google Cloud Training, Azure Training or Pega Training etc., to transform you into a full fledged professional, where your success is only measured by your knowledge. So, it&apos;s time to tighten your belts to jump start your career to dizzying heights – get the best out of your investment.
              </p>

              <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
                  Special Note
                </h3>
                <p className="text-white/80 text-sm">
                  Any aspirants who is looking for help on the real time scenarios, on job support, help on the certifications, we have team of experienced and talented working consultants who can assist you on the key points to concentrate and get succeed in their tasks.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                
                {/* Placeholder for company image */}
                <div className="w-full h-48 bg-gradient-to-br from-orange-500/30 to-blue-500/30 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-blue-600/20"></div>
                  <div className="text-center z-10">
                    <Building className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-200 font-semibold">VR IT Solutions Office</p>
                    <p className="text-sm text-gray-400">[Image Placeholder]</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TrendingUp, title: '100% Placement', desc: 'Guaranteed job assistance' },
                    { icon: Users, title: 'Expert Faculty', desc: 'Industry professionals' },
                    { icon: Shield, title: 'Certified Courses', desc: 'Industry recognized' },
                    { icon: Globe, title: 'Global Reach', desc: 'Worldwide accessibility' }
                  ].map((item, _index) => (
                    <div
                      key={item.title}
                      className="text-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Our Students Work At
            </h3>
            <p className="text-sm text-gray-200">
              VR IT Solutions is the best software training institute in Hyderabad. We are training professionals online & Class room tainings from Hyderabad. VR IT solutions is trained & placed thousands of people in majour MNC&apos;s like Infosys, Wipro, Accenture, Delloite, Cognizent, Capgemini and other companies as well.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {companies.map((company, _index) => (
              <div
                key={company.name}
                className="group flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <div className="relative w-32 h-20">
                  <Image
                    src={company.image}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    sizes="(max-width: 768px) 128px, 128px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-3 border border-white/20">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Our Training Programs</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Trending Software
              </span>
              <br />
              <span className="text-white">Training Courses</span>
            </h2>
            <p className="text-base text-gray-200 max-w-3xl mx-auto">
              Are you looking to start a new learning journey? Take Best Software Training Courses in Hyderabad at VR IT Solutions to get the best job support & placement in reputed companies.
            </p>
          </div>

          {/* Innovative Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, _index) => (
              <div
                key={course.name}
                className="group relative overflow-hidden bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-transparent backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                {/* Innovative Visual Header - Clean Design */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  {/* Clean gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`}></div>
                  
                  {/* Technology-specific visual patterns - Subtle and Clean */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      {/* SAP - Clean Grid Pattern */}
                      {course.name.includes('SAP') && (
                        <g>
                          {[...Array(4)].map((_, i) => (
                            <g key={i}>
                              <rect x={40 + i * 30} y={40 + i * 25} width="25" height="25" fill="none" stroke="white" strokeWidth="1" rx="3" opacity={0.6}/>
                              <circle cx={52.5 + i * 30} cy={52.5 + i * 25} r="2" fill="white" opacity={0.8}/>
                            </g>
                          ))}
                        </g>
                      )}
                      
                      {/* Pega - Clean Workflow Pattern */}
                      {course.name.includes('Pega') && (
                        <g>
                          {[...Array(4)].map((_, i) => (
                            <g key={i}>
                              <circle cx={50 + i * 35} cy={70} r="8" fill="none" stroke="white" strokeWidth="1" opacity={0.5}/>
                              {i < 3 && <line x1={58 + i * 35} y1={70} x2={77 + i * 35} y2={70} stroke="white" strokeWidth="1" opacity={0.4}/>}
                              <circle cx={50 + i * 35} cy={70} r="3" fill="white" opacity={0.6}/>
                            </g>
                          ))}
                        </g>
                      )}
                      
                      {/* Mulesoft - API Connection Pattern */}
                      {course.name.includes('Mulesoft') && (
                        <g>
                          {[...Array(3)].map((_, i) => (
                            <g key={i}>
                              <rect x={50 + i * 40} y={60} width="20" height="8" fill="white" opacity={0.4} rx="4"/>
                              <circle cx={60 + i * 40} cy={64} r="2" fill="white" opacity={0.7}/>
                              {i < 2 && <line x1={70 + i * 40} y1={64} x2={90 + i * 40} y2={64} stroke="white" strokeWidth="2" opacity={0.5}/>}
                            </g>
                          ))}
                        </g>
                      )}
                      
                      {/* EDI - Data Exchange Pattern */}
                      {course.name.includes('EDI') && (
                        <g>
                          <rect x="40" y="60" width="30" height="15" fill="none" stroke="white" strokeWidth="1" opacity={0.5} rx="2"/>
                          <line x1="70" y1="67" x2="90" y2="67" stroke="white" strokeWidth="2" opacity={0.6}/>
                          <polygon points="88,64 94,67 88,70" fill="white" opacity={0.5}/>
                          <rect x="100" y="60" width="30" height="15" fill="none" stroke="white" strokeWidth="1" opacity={0.5} rx="2"/>
                          <text x="55" y="72" fill="white" fontSize="6" opacity={0.4}>EDI</text>
                        </g>
                      )}
                      
                      {/* Workday - HR/Finance Pattern */}
                      {course.name.includes('Workday') && (
                        <g>
                          {[...Array(6)].map((_, i) => (
                            <g key={i}>
                              <rect x={45 + (i % 3) * 30} y={50 + Math.floor(i / 3) * 25} width="20" height="3" fill="white" opacity={0.4} rx="1"/>
                            </g>
                          ))}
                          <circle cx="80" cy="80" r="15" fill="none" stroke="white" strokeWidth="1" opacity={0.3}/>
                        </g>
                      )}
                      
                      {/* Informatica - Data Integration Pattern */}
                      {course.name.includes('Informatica') && (
                        <g>
                          <circle cx="60" cy="70" r="8" fill="none" stroke="white" strokeWidth="1" opacity={0.5}/>
                          <circle cx="120" cy="70" r="8" fill="none" stroke="white" strokeWidth="1" opacity={0.5}/>
                          <line x1="68" y1="70" x2="112" y2="70" stroke="white" strokeWidth="2" opacity={0.6}/>
                          <circle cx="90" cy="70" r="4" fill="white" opacity={0.7}/>
                          {[...Array(3)].map((_, i) => (
                            <line key={i} x1="87" y1={65 + i * 3} x2="93" y2={65 + i * 3} stroke="white" strokeWidth="1" opacity={0.4}/>
                          ))}
                        </g>
                      )}
                      
                      {/* Snowflake - Data Warehouse Pattern */}
                      {course.name.includes('Snowflake') && (
                        <g>
                          <polygon points="90,50 100,65 90,80 80,65" fill="none" stroke="white" strokeWidth="1" opacity={0.5}/>
                          {[...Array(6)].map((_, i) => (
                            <line key={i} 
                              x1="90" y1="65" 
                              x2={90 + 15 * Math.cos(i * Math.PI / 3)} 
                              y2={65 + 15 * Math.sin(i * Math.PI / 3)} 
                              stroke="white" strokeWidth="1" opacity={0.4}/>
                          ))}
                          <circle cx="90" cy="65" r="3" fill="white" opacity={0.6}/>
                        </g>
                      )}
                      
                      {/* AWS/Cloud - Clean Cloud Shapes */}
                      {(course.name.includes('AWS') || course.name.includes('Cloud')) && (
                        <g>
                          {[...Array(3)].map((_, i) => (
                            <ellipse key={i} cx={60 + i * 40} cy={80 + i * 20} rx="20" ry="12" fill="white" opacity={0.3}/>
                          ))}
                        </g>
                      )}
                      
                      {/* Python/Development - Clean Code Blocks */}
                      {(course.name.includes('Python') || course.name.includes('Full Stack')) && (
                        <g>
                          {[...Array(6)].map((_, i) => (
                            <rect key={i} x={30 + (i % 3) * 40} y={50 + Math.floor(i / 3) * 30} width="25" height="4" fill="white" opacity={0.4} rx="2"/>
                          ))}
                        </g>
                      )}
                      
                      {/* Data Science - Clean Data Points */}
                      {course.name.includes('Data') && (
                        <g>
                          {[...Array(8)].map((_, i) => (
                            <circle key={i} cx={50 + (i % 4) * 25} cy={60 + Math.floor(i / 4) * 25} r="3" fill="white" opacity={0.5}/>
                          ))}
                        </g>
                      )}
                      
                      {/* Default - Clean Geometric Pattern */}
                      {!course.name.includes('SAP') && !course.name.includes('AWS') && !course.name.includes('Cloud') && 
                       !course.name.includes('Python') && !course.name.includes('Full Stack') && !course.name.includes('Data') && (
                        <g>
                          {[...Array(4)].map((_, i) => (
                            <polygon key={i} points={`${80 + i * 15},${60} ${95 + i * 15},${75} ${80 + i * 15},${90} ${65 + i * 15},${75}`} fill="white" opacity={0.3}/>
                          ))}
                        </g>
                      )}
                    </svg>
                  </div>
                  
                  {/* Clean Course Acronym Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`font-black bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-2 select-none drop-shadow-lg ${
                        course.name.includes('PYTHON') || course.name.includes('HADOOP') || course.name.includes('DEVOPS') || 
                        course.name.includes('BASIS') || course.name.includes('PY+AWS') ? 'text-4xl' : 
                        course.name.includes('FICO') || course.name.includes('HANA') || course.name.includes('PEGA') || 
                        course.name.includes('MULE') || course.name.includes('SNOW') || course.name.includes('FULL') || course.name.includes('INFA') ? 'text-5xl' : 'text-6xl'
                      }`}>
                        {course.name.includes('ServiceNow') ? 'SN' :
                         course.name.includes('Salesforce') ? 'SF' :
                         course.name.includes('SAP FICO') ? 'FICO' :
                         course.name.includes('SAP SD') ? 'SD' :
                         course.name.includes('SAP MM') ? 'MM' :
                         course.name.includes('SAP Basis') ? 'BASIS' :
                         course.name.includes('SAP EWM') ? 'EWM' :
                         course.name.includes('SAP HANA') ? 'HANA' :
                         course.name.includes('S/4 HANA') ? 'S/4H' :
                         course.name.includes('SAP Leonardo') ? 'LEO' :
                         course.name.includes('SAP Security') ? 'SEC' :
                         course.name.includes('SAP Logistics') ? 'LOG' :
                         course.name.includes('SAP') ? 'SAP' :
                         course.name.includes('Pega') ? 'PEGA' :
                         course.name.includes('Azure DevOps') || course.name.includes('AWS Cloud') ? 'CLOUD' :
                         course.name.includes('AWS') ? 'AWS' :
                         course.name.includes('Mulesoft') ? 'MULE' :
                         course.name.includes('SAS Clinical') ? 'SAS' :
                         course.name.includes('Data Science') ? 'DS' :
                         course.name.includes('Python With AWS') ? 'PY+AWS' :
                         course.name.includes('Python') ? 'PYTHON' :
                         course.name.includes('Workday') ? 'WD' :
                         course.name.includes('Machine Learning') ? 'ML' :
                         course.name.includes('AWS With DevOps') ? 'DEVOPS' :
                         course.name.includes('DevOps') ? 'DEVOPS' :
                         course.name.includes('Informatica MDM') ? 'INFA' :
                         course.name.includes('Full Stack') ? 'FULL' :
                         course.name.includes('EDI Training') ? 'EDI' :
                         course.name.includes('Hadoop') ? 'HADOOP' :
                         course.name.includes('Snowflake') ? 'SNOW' :
                         course.name.includes('Google Cloud') ? 'GCP' :
                         course.name.split(' ').map(word => word[0]).join('').substring(0, 3)}
                      </div>
                      <div className="text-xs text-white/80 font-medium tracking-wide uppercase bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                        {course.name.length > 18 ? course.name.substring(0, 18) + '...' : course.name}
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean floating icon */}
                  <div className="absolute bottom-4 left-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <course.icon className="w-7 h-7 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  
                  {/* Clean duration badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs font-semibold text-white">{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-lg px-3 py-1.5">
                      <span className="text-xs font-semibold text-white">
                        {course.name.includes('SAP') ? '🔷 SAP' :
                         course.name.includes('AWS') || course.name.includes('Cloud') ? '☁️ CLOUD' :
                         course.name.includes('Python') || course.name.includes('Full Stack') ? '💻 DEV' :
                         course.name.includes('Data') || course.name.includes('Machine Learning') ? '🧠 DATA' :
                         course.name.includes('ServiceNow') || course.name.includes('Salesforce') ? '⚡ PLATFORM' :
                         course.name.includes('DevOps') ? '🔄 DEVOPS' :
                         '🎯 TECH'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Subtle overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Enhanced Card Body */}
                <div className="relative p-5 z-10">
                  {/* Skill level and trending indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400 font-medium">Level:</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${
                            course.name.includes('Advanced') || course.name.includes('SAP') || course.name.includes('Machine Learning') 
                              ? 'bg-red-400' : 
                            course.name.includes('Python') || course.name.includes('Data Science') 
                              ? (i < 2 ? 'bg-yellow-400' : 'bg-gray-500') :
                              (i < 1 ? 'bg-green-400' : 'bg-gray-500')
                          } transition-colors duration-300`}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Trending badge for popular courses */}
                    {(['ServiceNow', 'Salesforce', 'Data Science', 'Python', 'AWS'].some(tech => course.name.includes(tech))) && (
                      <div className="flex items-center space-x-1 bg-orange-500/20 border border-orange-500/30 rounded-md px-2 py-0.5">
                        <TrendingUp className="w-3 h-3 text-orange-400" />
                        <span className="text-xs text-orange-300 font-semibold">HOT</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Course title - Clean and readable */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                    {course.name}
                  </h3>
                  
                  {/* Course description - Better typography */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {course.description}
                  </p>
                  
                  {/* Course highlights - Clean icons */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-3 h-3" />
                      <span>Certificate</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>Job Support</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Play className="w-3 h-3" />
                      <span>Live Projects</span>
                    </div>
                  </div>
                  
                  {/* Clean CTA Button */}
                  {course.link ? (
                    <Link
                      href={course.link}
                      className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-[1.02] group/btn`}
                    >
                      <span className="text-sm">Explore Course</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <button className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-[1.02] group/btn`}>
                      <span className="text-sm">Explore Course</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  )}
                </div>
                
                {/* Clean top accent line */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${course.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/courses"
              className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2 mx-auto w-fit text-sm"
            >
              <span>View All Courses</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <FAQ faqs={homepageFaqs} theme="default" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Transform Your Career?
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-6">
              Join thousands of successful professionals who started their journey with us
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-base hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Start Free Demo</span>
              </button>
              <a
                href="tel:+919032734343"
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'EducationalOrganization'],
            name: 'VR IT SOL',
            description: 'Leading IT Training Institute in Ameerpet, Hyderabad offering professional courses',
            url: 'https://vrit-rho.vercel.app',
            logo: 'https://vrit-rho.vercel.app/images/vritlogo.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad Telangana.',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500016',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '17.4374',
              longitude: '78.4482'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9032734343',
              email: 'info@vritsol.com',
              contactType: 'customer service'
            },
            openingHours: ['Mo-Sa 08:00-21:30', 'Su 09:00-13:00'],
            areaServed: { '@type': 'Place', name: 'Hyderabad, Telangana' },
            sameAs: [
              'https://www.facebook.com/vritsolutions/',
              'https://twitter.com/vritsolutions',
              'https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA'
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'IT Training Courses',
              itemListElement: [
                { '@type': 'Course', name: 'ServiceNow Training' },
                { '@type': 'Course', name: 'Salesforce Training' },
                { '@type': 'Course', name: 'SAP Training' },
                { '@type': 'Course', name: 'Pega Training' },
                { '@type': 'Course', name: 'Azure DevOps Training' },
                { '@type': 'Course', name: 'AWS Cloud Training' }
              ]
            }
          })
        }}
      />
    </div>
  );
}
