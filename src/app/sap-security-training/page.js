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

export const metadata = getPageMetadata('sap-security-grc-training-in-hyderabad');

export default function SAPSecurityGRCTraining() {
  const courseBenefits = [
    "Expert-led training with real-time project explanation",
    "Comprehensive curriculum covering SAP Security and GRC",
    "Hands-on experience with User and Role Administration",
    "Free resume preparation and career guidance",
    "Mock tests and interview preparation",
    "24/7 support throughout the course"
  ];

  const trainingModes = [
    { mode: "Online Training", icon: Globe, desc: "Live interactive sessions from anywhere" },
    { mode: "Classroom Training", icon: Users, desc: "In-person training in Hyderabad" },
    { mode: "Job Support", icon: Target, desc: "Real-time project assistance" }
  ];

  const sapSecurityGRCFaqs = [
    {
      question: "What is SAP Security & GRC and why is it essential for enterprises?",
      answer: "SAP Security & GRC (Governance, Risk & Compliance) ensures secure access to SAP systems while maintaining compliance with regulatory requirements. It's essential because it protects sensitive business data, prevents unauthorized access, ensures audit compliance, and maintains segregation of duties in critical business processes."
    },
    {
      question: "What are the prerequisites for SAP Security & GRC training?",
      answer: "Basic understanding of SAP system navigation, fundamental knowledge of business processes, and familiarity with user management concepts. Having experience with SAP functional modules (FICO, MM, SD) is beneficial but not mandatory as we cover security concepts comprehensively."
    },
    {
      question: "What key components will I learn in SAP Security & GRC?",
      answer: "You'll learn User Administration, Role Administration, Profile Administration, Authorization Objects, GRC Access Control, Risk Analysis & Remediation, SOX compliance, User Access Reviews, Emergency Access Management, and Security Audit & Monitoring techniques."
    },
    {
      question: "What is the duration of the SAP Security & GRC training course?",
      answer: "Our comprehensive SAP Security & GRC training is designed to be completed in 60 days, which can be taken as weekend batches (10-12 weeks) or weekday batches (8-10 weeks) depending on your schedule with extensive hands-on practice."
    },
    {
      question: "Will I get hands-on experience with real SAP Security scenarios?",
      answer: "Yes! You'll work on actual SAP systems with hands-on exercises including role design, authorization testing, GRC rule configuration, access risk analysis, SOX compliance scenarios, and security audit activities using real business cases and compliance requirements."
    },
    {
      question: "What career opportunities are available after SAP Security & GRC training?",
      answer: "SAP Security & GRC professionals can work as SAP Security Consultant, GRC Analyst, SAP Authorization Specialist, Compliance Manager, Security Auditor, or GRC Solution Architect with salaries ranging from ₹5-20 LPA depending on experience and expertise."
    },
    {
      question: "How does SAP GRC help with regulatory compliance like SOX?",
      answer: "SAP GRC provides automated controls for segregation of duties, access risk analysis, continuous monitoring, emergency access management, and comprehensive audit trails. It ensures compliance with SOX, SOD requirements, and other regulatory frameworks through preventive and detective controls."
    },
    {
      question: "Do you cover both traditional security and modern S/4HANA security?",
      answer: "Yes, our training covers traditional SAP ECC security administration and modern S/4HANA security including Fiori authorization, embedded analytics security, simplified role concepts, and cloud security considerations for hybrid landscapes."
    },
    {
      question: "Do you provide SAP Security certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for SAP Security & GRC certification exams and offer 100% placement assistance including resume building, security project portfolio creation, interview preparation with compliance scenarios, and connecting with companies hiring security professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for security implementations, access to updated GRC materials, latest security features, compliance updates, and alumni network for continuous professional development."
    }
  ];

  return (
    <>
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white">
        
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">Enterprise Security & Governance</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  SAP GRC & Security
                </span>
                <br />
                <span className="text-white">Online Training In Hyderabad</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                Master SAP Security and GRC with comprehensive training in User Administration, Role Administration, and compliance requirements
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+91-9032734343</span>
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20">
                  <Calendar className="w-5 h-5" />
                  <span>Duration: 60 Days</span>
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
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
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

        {/* About this course */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About this course
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                SAP Security is one of the important technical modules in SAP. SAP Security administrators are responsible for development and administration of user access rights in different SAP systems. It includes User Administration, Role Administration, Troubleshooting, Restricting access rights and Reporting.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                When we are implementing SAP Security, we should follow Good Governance Practice including SOX and SOD compliance to fulfil audit requirements.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                VR IT Solutions is one of the best sap grc training to offer well focused and career-oriented training program including with real time exposure in SAP Security training and SAP GRC training
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
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                With SAP being a huge business application with lot of intertwined processes, administering an SAP system is a huge challenge and hence professionals trained in this area can find lucrative opportunities as SAP Security and GRC consultants and get into other similar roles. Currently, there is lot of demand for SAP Security and GRC professionals and hence it is the right time to kick starts this course.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                VR IT Solutions is one of the software training institutes in Hyderabad to offer SAP Security and SAP GRC Access Controls training,sap security online training, sap grc online training also.
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
                  <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto lg:mx-0"></div>
                </div>

                <div className="space-y-6">
                  {trainingModes.map((mode, index) => (
                    <div key={mode.mode} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
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
                  <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto lg:mx-0"></div>
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
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Call Us:</p>
                    <a href="tel:+919032734343" className="text-xl font-bold text-white hover:text-red-300 transition-colors">
                      +91-9032 734 343
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Mail Us:</p>
                    <a href="mailto:info@vritsol.com" className="text-xl font-bold text-white hover:text-red-300 transition-colors">
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
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Master </span>
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  SAP Security & GRC?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Join our comprehensive training program and become an expert in SAP Security and Governance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919032734343"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
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
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
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
                { name: "SAP Security GRC Training", link: null },
                { name: "SAP HANA Admin Training", link: "/sap-hana-admin-training-in-hyderabad" },
                { name: "S/4 HANA Finance Training", link: "/s4-hana-finance-training-in-hyderabad" },
                { name: "Simple Logistics Training", link: "https://www.vritsol.com/sap-s4Hana-simple-logistics-training" },
                { name: "SAS Clinical Training", link: "/sas-clinical-online-training-in-hyderabad" }
              ].map((tech, index) => (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-red-500/50 transition-all duration-300">
                  {tech.link ? (
                    tech.link.startsWith('http') ? (
                      <a 
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-red-300 transition-colors text-sm"
                      >
                        • {tech.name}
                      </a>
                    ) : (
                      <Link 
                        href={tech.link}
                        className="text-white/90 hover:text-red-300 transition-colors text-sm"
                      >
                        • {tech.name}
                      </Link>
                    )
                  ) : (
                    <span className="text-red-300 text-sm font-medium">• {tech.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-blue-600/15 via-indigo-600/20 to-purple-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10 mx-4 mb-8">
          <FAQ faqs={sapSecurityGRCFaqs} theme="sap" />
        </section>

        {/* Sidebar */}
        <div className="fixed top-20 right-4 z-40">
          <CourseSidebar courseName="SAP Security & GRC" phoneNumber="+91-9032734343" />
        </div>

      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sap-security-grc-training-in-hyderabad'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('sap-security-grc-training-in-hyderabad') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('sap-security-grc-training-in-hyderabad'))
          }}
        />
      )}
    </>
  );
}
