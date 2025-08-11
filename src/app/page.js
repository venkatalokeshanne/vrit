'use client';

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
import coursesData from '../data/courses-static.json';

export default function Home() {
  // Get dynamic courses from Sanity
  // Get the mainImage from the index slug data
  const indexData = coursesData.find(course => course.slug === 'index');
  const popupImage = indexData?.mainImage || '';
  const bannerUrl = indexData?.bannerUrl || '';

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
    { name: 'Infosys' },
    { name: 'Wipro' },
    { name: 'Accenture' },
    { name: 'Delloite' },
    { name: 'Cognizent' },
    { name: 'Cap Gemini' }
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
      
      {/* Popup Banner */}
      <PopupBanner imageUrl={popupImage} bannerUrl={bannerUrl} delay={5000} />
      
      {/* Clean Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style' }}>
        {/* No colored circles - clean background */}
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-6 px-4 sm:px-6 lg:px-8" style={{ contentVisibility: 'visible' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center" style={{ contain: 'layout' }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-medium">🏆 Best Software Training Institute in Hyderabad</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight" style={{ contain: 'layout', willChange: 'auto' }}>
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
                marginBottom: '1rem',
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
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 mt-6">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {[
                { number: '5000+', label: 'Students Trained', icon: GraduationCap },
                { number: '20+', label: 'Technology Courses', icon: Code },
                { number: '100%', label: 'Placement Rate', icon: TrendingUp },
                { number: '15+', label: 'Years Experience', icon: Award }
              ].map((stat, _index) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 font-medium text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
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
              VR IT Solutions is the best software training institute in Hyderabad. We are training professionals online & Class room tainings from Hyderabad. VR IT solutions is trained & placed thousands of people in majour MNC&apos;s like Infosys, Wipro, Accenture, Delloite, Cognizent, Cap Gemini and other companies as well.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company, _index) => (
              <div
                key={company.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-white/20 to-white/10 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-200">{company.name.substring(0, 3)}</span>
                  </div>
                  <p className="text-xs text-gray-300">{company.name}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, _index) => (
              <div
                key={course.name}
                className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Course Image Header */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
                    <Image
                      src={course.image}
                      alt={`${course.name} Training Course`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Duration pill overlay */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-white">{course.duration}</span>
                    </div>
                    
                    {/* Dynamic course indicator */}
                    {course.isDynamic && (
                      <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md border border-emerald-300/30 rounded-full px-3 py-1">
                        <span className="text-xs font-bold text-white">💎 DYNAMIC</span>
                      </div>
                    )}
                    
                    {/* Floating icon overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300`}>
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6">
                    {/* Course title with gradient on hover */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {course.name}
                    </h3>
                    
                    {/* Course Description */}
                    <p className="text-gray-200 text-sm mb-6 leading-relaxed group-hover:text-white transition-colors">
                      {course.description}
                    </p>
                    
                    {/* CTA Button with colorful gradient effect */}
                    {course.link ? (
                      <Link
                        href={course.link}
                        className={`group/btn relative w-full bg-gradient-to-r ${course.color} text-white py-3 px-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden shadow-lg hover:shadow-xl hover:scale-105`}
                      >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative text-sm font-semibold">Explore Course</span>
                        <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    ) : (
                      <button className={`group/btn relative w-full bg-gradient-to-r ${course.color} text-white py-3 px-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden shadow-lg hover:shadow-xl hover:scale-105`}>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative text-sm font-semibold">Explore Course</span>
                        <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Floating orbs for extra visual flair */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
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
            url: 'https://www.vritsol.com',
            logo: 'https://www.vritsol.com/images/vritlogo.png',
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
