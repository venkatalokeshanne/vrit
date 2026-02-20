import Link from 'next/link';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Database,
  Server,
  Layers,
  Package,
  Truck,
  Brain,
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-security-training';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for SAP Security & GRC Training
const sapSecurityFaqs = [
  {
    question: "What is SAP Security and GRC and why is it important?",
    answer: "SAP Security involves managing user access rights, roles, and authorizations in SAP systems. GRC (Governance, Risk & Compliance) ensures SOX compliance and segregation of duties. It's critical for protecting sensitive business data and meeting audit requirements in enterprise environments."
  },
  {
    question: "What are the career opportunities in SAP Security and GRC?",
    answer: "SAP Security professionals can work as Security Consultants, GRC Specialists, Authorization Analysts, Risk Managers, and Compliance Officers. With increasing focus on data security and compliance, there's high demand with salaries ranging from ₹6-15 LPA depending on experience and expertise."
  },
  {
    question: "What topics are covered in SAP Security training?",
    answer: "The training covers User Administration, Role Administration, Authorization Objects, Composite Roles, Segregation of Duties (SoD), GRC Access Controls, Risk Management, Emergency Access Management, Single Sign-On (SSO), and compliance reporting with hands-on practice scenarios."
  },
  {
    question: "What are the prerequisites for SAP Security training?",
    answer: "Basic understanding of SAP system navigation, knowledge of business processes, familiarity with authorization concepts, and understanding of compliance requirements. Technical background in system administration is beneficial but not mandatory for functional roles."
  },
  {
    question: "How long is the SAP Security training program?",
    answer: "Our comprehensive SAP Security and GRC training program is 60 days covering both functional and technical aspects with extensive hands-on practice, real-world scenarios, and certification preparation with flexible weekend and weekday batches available."
  },
  {
    question: "Will I get hands-on experience with SAP Security configurations?",
    answer: "Yes! You'll work on live SAP systems with hands-on exercises including user creation, role design, authorization troubleshooting, SoD analysis, GRC configuration, access request workflows, and compliance reporting using real business scenarios and use cases."
  },
  {
    question: "What is the difference between SAP Security and GRC?",
    answer: "SAP Security focuses on technical aspects like user management and authorizations, while GRC (Governance, Risk & Compliance) covers process controls, risk assessment, compliance monitoring, and segregation of duties analysis for regulatory requirements and audit management."
  },
  {
    question: "Do you cover both functional and technical aspects of SAP Security?",
    answer: "Yes, our training covers both functional aspects (business processes, compliance requirements) and technical aspects (system configuration, authorization objects, custom developments) to provide comprehensive SAP Security and GRC expertise for various career paths."
  },
  {
    question: "What certification support do you provide for SAP Security?",
    answer: "We provide complete certification guidance including study materials, practice tests, exam preparation sessions, and tips for SAP Certified Technology Associate - System Security Architect certification with ongoing support until you clear the certification exam."
  },
  {
    question: "Do you provide job placement assistance for SAP Security roles?",
    answer: "Yes, we offer 100% placement assistance including resume optimization for security roles, interview preparation with security scenarios, job referrals to companies needing SAP Security consultants, and ongoing career guidance in the security domain."
  }
];

export default async  function SAPSecurityTrainingInHyderabad() {
    const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Fetch metadata for dynamic hero image
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

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

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - SAP GRC & Security Online Training In Hyderabad */}
            <section className="bg-gradient-to-br from-red-500/15 via-pink-600/20 to-rose-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-red-400/30 shadow-2xl shadow-red-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    SAP GRC & Security Online Training In Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="SAP Security & GRC Training Course in Hyderabad - VR IT Solutions" className="w-full object-cover border-2 border-red-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-red-500/25 to-pink-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-red-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-400" />
                      <span className="text-red-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-pink-400" />
                      <span className="text-pink-300 font-semibold">Duration: 60 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAP Security & GRC"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showJoinNow={false}
                  showCallNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>

            {/* Other SAP Courses */}
            <section className="bg-gradient-to-br from-gray-600/15 via-slate-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-gray-400/30 shadow-xl shadow-gray-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Other SAP Courses
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/sap-basis-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Database className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Basis</span>
                  </div>
                </Link>
                <Link href="/sap-leonardo-training-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Brain className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP Leonardo</span>
                  </div>
                </Link>
                <Link href="/sap-fico-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP FICO</span>
                  </div>
                </Link>
                <Link href="/sap-sd-online-training-in-hyderabad" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP SD</span>
                  </div>
                </Link>
                <Link href="/sap-mm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Package className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP MM</span>
                  </div>
                </Link>
                <Link href="/sap-hana-admin-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Server className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP HANA</span>
                  </div>
                </Link>
                <Link href="/sap-ewm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Layers className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP EWM</span>
                  </div>
                </Link>
                <Link href="/sap-s4Hana-simple-logistics-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Truck className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">S/4HANA Logistics</span>
                  </div>
                </Link>
              </div>
            </section>

            {/* About this course */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-6">
                About this course
              </h4>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    SAP Security is one of the important technical modules in SAP. SAP Security administrators are responsible for development and administration of user access rights in different SAP systems. It includes User Administration, Role Administration, Troubleshooting, Restricting access rights and Reporting.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    When we are implementing SAP Security, we should follow Good Governance Practice including SOX and SOD compliance to fulfil audit requirements.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    VR IT Solutions is one of the best sap grc training to offer well focused and career-oriented training program including with real time exposure in SAP Security training and SAP GRC training
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you do this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h5 className="text-xl md:text-2xl font-bold text-white mb-6">
                Why should you do this course?
              </h5>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With SAP being a huge business application with lot of intertwined processes, administering an SAP system is a huge challenge and hence professionals trained in this area can find lucrative opportunities as SAP Security and GRC consultants and get into other similar roles. Currently, there is lot of demand for SAP Security and GRC professionals and hence it is the right time to kick starts this course.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the software training institutes in Hyderabad to offer SAP Security and SAP GRC Access Controls training,sap security online training, sap grc online training also.
                  </p>
                </div>
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
                <h5 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Training Modes
                </h5>
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
                <h5 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Why to choose VR IT solutions?
                </h5>
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

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="SAP Security & GRC" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>

        {/* FAQ Section - Full Width */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
            <FAQ faqs={sapSecurityFaqs} theme="sap" />
          </div>
        </div>
      </div>
      
      {/* Structured Data */}
      {/* Structured Data for SEO */}

      

      </div>
    </>
  );
}
