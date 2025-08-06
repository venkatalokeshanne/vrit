import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getPageMetadata, getStructuredData } from '../../utils/metadata-enhanced';
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
  Server,
  Network,
  Layers,
  Bot,
  Brain,
  Cpu,
  Activity,
  Package,
  Truck
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('sap-leonardo-training-hyderabad');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('sap-leonardo-training-hyderabad');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async function SAPLeonardoTrainingHyderabad() {
  const structuredDataJson = await getPageStructuredData();
  
  const targetAudience = [
    "Executive managers",
    "IT professionals",
    "Solution consultants",
    "Application developers",
    "Anyone interested in intelligent technologies and innovation"
  ];

  const courseTopics = [
    "Introduction to Predictive Maintenance and Service",
    "(PdMS) PdMS Application Overview",
    "Architecture",
    "Configuration of Equipment",
    "Master Data Master Data Integration with EAM System",
    "Indicators and Indicator Configuration",
    "Analysis Tools and Application Configuration",
    "Custom Analysis Tools",
    "Machine Learning Engine Overview and Configuration",
    "R for Non Data Scientists",
    "Custom Data Science Algorithms"
  ];

  const trainingModes = [
    "Online Training",
    "Classroom Training", 
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

  const sapLeonardoFaqs = [
    {
      question: "What is SAP Leonardo and why is it important?",
      answer: "SAP Leonardo is SAP's digital innovation system that helps customers access SAP's components and products across evolving technologies like Machine Learning, Big Data, Internet of Things (IoT), and Blockchain. It's important because it enables integration of multiple SAP products with emerging technologies and brings intelligent automation to business processes."
    },
    {
      question: "What are the prerequisites for SAP Leonardo training?",
      answer: "Basic understanding of SAP systems, familiarity with cloud platforms, knowledge of data analytics concepts, and understanding of IoT and machine learning basics. Having experience with SAP HANA or S/4HANA is beneficial but not mandatory for this course."
    },
    {
      question: "What key technologies will I learn in SAP Leonardo?",
      answer: "You'll learn Machine Learning, IoT (Internet of Things), Big Data processing, Blockchain technology, Predictive Analytics, Data Intelligence, advanced analytics, and integration with SAP Cloud Platform services for building intelligent applications."
    },
    {
      question: "What is the duration of the SAP Leonardo training course?",
      answer: "Our comprehensive SAP Leonardo training is designed to be completed in 50 days, which can be taken as weekend batches or weekday batches depending on your schedule with extensive hands-on practice on Leonardo platform."
    },
    {
      question: "Will I get hands-on experience with real SAP Leonardo scenarios?",
      answer: "Yes! You'll work on actual SAP Leonardo platform with hands-on exercises including IoT device integration, machine learning model creation, predictive analytics implementation, and end-to-end intelligent application development using real business scenarios."
    },
    {
      question: "What career opportunities are available after SAP Leonardo training?",
      answer: "SAP Leonardo professionals can work as Digital Innovation Consultant, IoT Solutions Architect, Machine Learning Specialist, SAP Leonardo Developer, Predictive Analytics Consultant, or Digital Transformation Specialist with competitive salaries in the emerging technology space."
    },
    {
      question: "How does SAP Leonardo integrate with other SAP products?",
      answer: "SAP Leonardo integrates seamlessly with SAP S/4HANA, SAP Cloud Platform, SAP Analytics Cloud, and other SAP products. It provides intelligent services that can be embedded into existing business processes without changing the user experience significantly."
    },
    {
      question: "Do you cover Predictive Maintenance and Service (PdMS) in the training?",
      answer: "Yes, our training covers comprehensive PdMS including application overview, architecture, equipment configuration, master data integration with EAM systems, indicators configuration, analysis tools, and custom data science algorithms for predictive maintenance."
    },
    {
      question: "Do you provide SAP Leonardo certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for SAP Leonardo certification preparation and offer 100% placement assistance including resume building, Leonardo project portfolio creation, interview preparation with intelligent technology scenarios, and connecting with companies adopting digital innovation."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for Leonardo implementations, access to updated Leonardo materials, latest digital innovation trends, emerging technology updates, and alumni network for continuous professional development."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - SAP Leonardo Training In Hyderabad */}
            <section className="bg-gradient-to-br from-purple-500/15 via-indigo-600/20 to-blue-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-400/30 shadow-2xl shadow-purple-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    SAP Leonardo Training In Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sap-leonardo.jpg"
                    alt="SAP Leonardo Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-purple-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-purple-500/25 to-blue-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-purple-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">Duration: 50 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP Leonardo Training Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>

            {/* Other SAP Courses */}
            <section className="bg-gradient-to-br from-gray-600/15 via-slate-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30 shadow-xl shadow-gray-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Other SAP Courses
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <a href="/sap-basis-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Database className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Basis</span>
                  </div>
                </a>
                <a href="/sap-fico-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP FICO</span>
                  </div>
                </a>
                <a href="/sap-sd-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP SD</span>
                  </div>
                </a>
                <a href="/sap-mm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Package className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP MM</span>
                  </div>
                </a>
                <a href="/sap-hana-admin-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Server className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP HANA</span>
                  </div>
                </a>
                <a href="/sap-ewm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Layers className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP EWM</span>
                  </div>
                </a>
                <a href="/sap-security-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Security</span>
                  </div>
                </a>
                <a href="/sap-s4Hana-simple-logistics-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Truck className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">S/4HANA Logistics</span>
                  </div>
                </a>
              </div>
            </section>

            {/* Introduction */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-violet-600/15 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                <p className="text-indigo-100 leading-relaxed">
                  VR IT Solutions announces sap leonardo training program, which is booming in today is ecommerce business. VR IT Solutions sap leonardo online training we provide expert training on the concepts like Leonardo workflows, Cockpits, Leonardo Service overview, Leonardo Sales overview, product image handling, Leonardo programming with API, order management, validation in Leonardo, Leonardo workflows and many more.
                </p>
              </div>
            </section>
            
            {/* About SAP Leonardo */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                About SAP Leonardo
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    SAP Leonardo is the model of SAP to link business processes with IoT devices. IoT enables the data from other devices which are used in the business enterprise for evaluation, vision, or execute some activities like devices like switch off and on of the street lights, check the status of the products , etc.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    SAP Leonardo is the SAP's Machine Learning model which offered Smart portfolio services. The services vary from well-structured product exhibitions like SAP HANA Predictive Analytics Library, SAP Predictive Analytics to all the services provided through SAP Leonardo machine learning base. We can implement services using APIs, quickly functional prepared prototypes that can efficiently be used as web services. There are even functional services like machine learning, Big Data,IoT, blockchain, Data Intelligence and advanced analytics.
                  </p>
                </div>
              </div>
            </section>

            {/* Why SAP Leonardo? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why SAP Leonardo?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-xl font-bold text-emerald-200 mb-3">SAP Leonardo – The future of modern technology</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    SAP Leonardo is a revolution that helps customers access SAP's components and products across evolving technologies, such as Machine Learning, Big Data, Internet of Things (IoT) and Blockchain. It is often linked with SAP Cloud Platform services but it's not limited to this, as it covers anything that fits into modern technologies and includes e.g. predictive competencies in S/4HANA.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    One of the key benefits of SAP Leonardo is that it allows you to integrate multiple SAP products with emerging technologies. For example in the SAP Cloud Platform you can create Fiori apps that use IoT services. When integrated into your business processes as an end user you won't necessarily know there is Machine Learning behind the scenes and you won't see anything different but you will experience automatic decision-making or recommendations.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    Products in SAP S/4HANA, such as cash reconciliation and invoicing, already integrate Machine Learning as part of SAP Leonardo and the number of these Machine Learning settings that will become part of S/4HANA.
                  </p>
                </div>
              </div>
            </section>

            {/* Target Audience */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Target Audience
              </h2>
              <div className="grid gap-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{audience}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Topics */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Course Topics
              </h2>
              <div className="grid gap-4">
                {courseTopics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-violet-500/10 rounded-xl border border-violet-400/20">
                    <Brain className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-violet-100">{topic}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
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

              <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Why to choose VR IT solutions?
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

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <FAQ faqs={sapLeonardoFaqs} theme="sap" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP Leonardo" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>
      
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
