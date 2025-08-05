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

export const metadata = getPageMetadata('sap-leonardo-training-hyderabad');

export default function SAPLeonardoTraining() {
  const courseBenefits = [
    "Expert-led training with real-time project explanation",
    "Comprehensive curriculum covering all SAP Leonardo components",
    "Hands-on experience with Machine Learning and IoT integration",
    "Free resume preparation and career guidance",
    "Mock tests and interview preparation",
    "24/7 support throughout the course"
  ];

  const trainingModes = [
    { mode: "Online Training", icon: Globe, desc: "Live interactive sessions from anywhere" },
    { mode: "Classroom Training", icon: Users, desc: "In-person training in Hyderabad" },
    { mode: "Job Support", icon: Target, desc: "Real-time project assistance" }
  ];

  const sapLeonardoFaqs = [
    {
      question: "What is SAP Leonardo and why is it important for digital transformation?",
      answer: "SAP Leonardo is SAP's digital innovation platform that integrates Machine Learning, IoT, Analytics, Blockchain, and Big Data technologies. It's important because it enables organizations to leverage emerging technologies for intelligent automation, predictive insights, and innovative business models within their SAP landscape."
    },
    {
      question: "What are the prerequisites for SAP Leonardo training?",
      answer: "Basic understanding of SAP systems, fundamental knowledge of cloud computing concepts, familiarity with data analytics principles, and basic programming concepts. Having experience with SAP Cloud Platform or any SAP module is beneficial but not mandatory as we cover Leonardo-specific technologies."
    },
    {
      question: "What key technologies will I learn in SAP Leonardo training?",
      answer: "You'll learn Machine Learning services, IoT application enablement, Big Data processing, Blockchain implementation, Analytics & Business Intelligence, SAP Cloud Platform integration, conversational AI, and how to build intelligent applications using Leonardo's digital innovation portfolio."
    },
    {
      question: "What is the duration of the SAP Leonardo training course?",
      answer: "Our comprehensive SAP Leonardo training is designed to be completed in 50 days, which can be taken as weekend batches (10-12 weeks) or weekday batches (8-10 weeks) depending on your schedule with hands-on experience with Leonardo services."
    },
    {
      question: "Will I work on real SAP Leonardo projects during training?",
      answer: "Yes! You'll work on hands-on projects including IoT device integration, machine learning model development, blockchain proof-of-concepts, analytics dashboard creation, and building intelligent applications using SAP Cloud Platform and Leonardo services with real business scenarios."
    },
    {
      question: "What career opportunities are available after SAP Leonardo training?",
      answer: "SAP Leonardo professionals can work as Digital Innovation Consultant, SAP Cloud Developer, IoT Solutions Architect, Data Scientist (SAP), Machine Learning Engineer, Innovation Manager, or Digital Transformation Specialist with salaries ranging from ₹6-20 LPA depending on experience."
    },
    {
      question: "How does SAP Leonardo integrate with existing SAP systems?",
      answer: "SAP Leonardo seamlessly integrates with SAP ERP, S/4HANA, SuccessFactors, and other SAP solutions through SAP Cloud Platform. It extends existing business processes with intelligent capabilities while maintaining data consistency and leveraging existing SAP investments."
    },
    {
      question: "Do you cover both technical and business aspects of SAP Leonardo?",
      answer: "Yes, our training covers technical implementation including APIs, development tools, and integration methods, as well as business aspects like use case identification, ROI calculation, digital strategy, and change management for successful Leonardo adoption."
    },
    {
      question: "Do you provide SAP Leonardo certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for SAP Leonardo certification preparation and offer 100% placement assistance including portfolio development with innovative projects, resume building, interview preparation with emerging technology scenarios, and connecting with forward-thinking companies."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for innovation projects, access to latest Leonardo updates, emerging technology trends, innovation methodologies, and alumni network for continuous learning in digital transformation."
    }
  ];

  return (
    <>
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">Advanced SAP Technology</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  SAP Leonardo
                </span>
                <br />
                <span className="text-white">Training In Hyderabad</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                Master the future of modern technology with SAP Leonardo - covering Machine Learning, IoT, Big Data, and Blockchain integration
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+91-9032734343</span>
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20">
                  <Calendar className="w-5 h-5" />
                  <span>Duration: 50 Days</span>
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
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
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
                Course Overview
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                VR IT Solutions announces sap leonardo training program, which is booming in today is ecommerce business. VR IT Solutions sap leonardo online training we provide expert training on the concepts like Leonardo workflows, Cockpits, Leonardo Service overview, Leonardo Sales overview, product image handling, Leonardo programming with API, order management, validation in Leonardo, Leonardo workflows and many more.
              </p>
            </div>
          </div>
        </section>

        {/* About SAP Leonardo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About SAP Leonardo
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                SAP Leonardo is the model of SAP to link business processes with IoT devices. IoT enables the data from other devices which are used in the business enterprise for evaluation, vision, or execute some activities like devices like switch off and on of the street lights, check the status of the products , etc.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                SAP Leonardo is the SAP's Machine Learning model which offered Smart portfolio services. The services vary from well-structured product exhibitions like SAP HANA Predictive Analytics Library, SAP Predictive Analytics to all the services provided through SAP Leonardo machine learning base. We can implement services using APIs, quickly functional prepared prototypes that can efficiently be used as web services. There are even functional services like machine learning, Big Data,IoT, blockchain, Data Intelligence and advanced analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Why SAP Leonardo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why SAP Leonardo?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                SAP Leonardo – The future of modern technology
              </h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                SAP Leonardo is a revolution that helps customers access SAP's components and products across evolving technologies, such as Machine Learning, Big Data, Internet of Things (IoT) and Blockchain. It is often linked with SAP Cloud Platform services but it's not limited to this, as it covers anything that fits into modern technologies and includes e.g. predictive competencies in S/4HANA.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                One of the key benefits of SAP Leonardo is that it allows you to integrate multiple SAP products with emerging technologies. For example in the SAP Cloud Platform you can create Fiori apps that use IoT services. When integrated into your business processes as an end user you won't necessarily know there is Machine Learning behind the scenes and you won't see anything different but you will experience automatic decision-making or recommendations.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Products in SAP S/4HANA, such as cash reconciliation and invoicing, already integrate Machine Learning as part of SAP Leonardo and the number of these Machine Learning settings that will become part of S/4HANA.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Target Audience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Executive managers",
                "IT professionals", 
                "Solution consultants",
                "Application developers",
                "Anyone interested in intelligent technologies and innovation"
              ].map((audience, index) => (
                <div key={audience} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
                    <p className="text-white/90 font-medium">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Topics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Course Topics Covered
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Introduction to Predictive Maintenance and Service",
                "(PdMS) PdMS Application Overview",
                "Architecture",
                "Configuration of Equipment",
                "Master Data Master Data Integration with EAM System",
                "Indicators and Indicator Configuration",
                "Analysis Tools and Application Configuration",
                "CustomAnalysis Tools",
                "Machine Learning Engine Overview and Configuration",
                "R for Non Data Scientists",
                "Custom Data Science Algorithms"
              ].map((topic, index) => (
                <div key={topic} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium leading-relaxed">{topic}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto lg:mx-0"></div>
                </div>

                <div className="space-y-6">
                  {trainingModes.map((mode, index) => (
                    <div key={mode.mode} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
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
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto lg:mx-0"></div>
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
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Call Us:</p>
                    <a href="tel:+919032734343" className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
                      +91-9032 734 343
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Mail Us:</p>
                    <a href="mailto:info@vritsol.com" className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
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
            <div className="bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Master </span>
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  SAP Leonardo?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Join our comprehensive training program and become an expert in next-generation SAP technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919032734343"
                  className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
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
                { name: "SAP Leonardo Training", link: null },
                { name: "SAP Security GRC Training", link: "https://www.vritsol.com/sap-security-training" },
                { name: "SAP HANA Admin Training", link: "/sap-hana-admin-training-in-hyderabad" },
                { name: "S/4 HANA Finance Training", link: "/s4-hana-finance-training-in-hyderabad" },
                { name: "Simple Logistics Training", link: "https://www.vritsol.com/sap-s4Hana-simple-logistics-training" },
                { name: "SAS Clinical Training", link: "/sas-clinical-online-training-in-hyderabad" }
              ].map((tech, index) => (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  {tech.link ? (
                    tech.link.startsWith('http') ? (
                      <a 
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-purple-300 transition-colors text-sm"
                      >
                        • {tech.name}
                      </a>
                    ) : (
                      <Link 
                        href={tech.link}
                        className="text-white/90 hover:text-purple-300 transition-colors text-sm"
                      >
                        • {tech.name}
                      </Link>
                    )
                  ) : (
                    <span className="text-purple-300 text-sm font-medium">• {tech.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-pink-600/15 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10 mx-4 mb-8">
          <FAQ faqs={sapLeonardoFaqs} theme="sap" />
        </section>

        {/* Sidebar */}
        <div className="fixed top-20 right-4 z-40">
          <CourseSidebar courseName="SAP Leonardo" phoneNumber="+91-9032734343" />
        </div>

      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sap-leonardo-training-in-hyderabad'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('sap-leonardo-training-in-hyderabad') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('sap-leonardo-training-in-hyderabad'))
          }}
        />
      )}
    </>
  );
}
