import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
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
  Server,
  Network,
  Layers,
  DollarSign,
  Calculator
} from 'lucide-react';

// FAQ Data for S/4 HANA Finance Training
const s4HanaFinanceFaqs = [
  {
    question: "What are the key differences between traditional SAP FICO and S/4 HANA Finance?",
    answer: "S/4 HANA Finance introduces the Universal Journal concept, eliminating the need for separate reconciliation between FI and CO modules. It provides real-time financial reporting, simplified data model, enhanced user experience with Fiori apps, and advanced analytics capabilities. The new architecture offers faster processing, improved cash flow management, and integrated financial planning."
  },
  {
    question: "What prerequisites do I need to learn S/4 HANA Finance?",
    answer: "Basic understanding of accounting principles and financial processes is essential. Prior experience with SAP ERP or FICO modules is highly recommended. Familiarity with SAP GUI navigation, basic SAP configuration concepts, and understanding of business processes like accounts payable, receivable, and general ledger will be beneficial for faster learning."
  },
  {
    question: "What career opportunities are available after S/4 HANA Finance certification?",
    answer: "Career opportunities include S/4 HANA Finance Consultant, Financial Systems Analyst, SAP Finance Migration Specialist, S/4 HANA Project Manager, Business Process Consultant, and Enterprise Finance Architect. With growing S/4 HANA adoption, professionals can expect salary ranges from ₹8-25 lakhs annually depending on experience and expertise level."
  },
  {
    question: "How long does it take to complete S/4 HANA Finance training?",
    answer: "Our comprehensive S/4 HANA Finance training program spans 6-8 weeks with flexible scheduling options. This includes 60+ hours of instructor-led training, hands-on practice sessions, real-world project work, and assessment preparation. Weekend and evening batches are available to accommodate working professionals."
  },
  {
    question: "What hands-on experience will I gain during the training?",
    answer: "You'll work on live S/4 HANA system with real business scenarios including Universal Journal configuration, Asset Accounting in S/4 HANA, Advanced Financial Closing, Cash Management, Financial Planning and Analysis, Integration with other S/4 HANA modules, Migration from ECC to S/4 HANA Finance, and Fiori apps for finance."
  },
  {
    question: "Which S/4 HANA Finance certifications should I pursue?",
    answer: "Key certifications include SAP Certified Application Associate - SAP S/4HANA Finance (C_TS4FI_2021), SAP Certified Application Associate - Management Accounting with SAP S/4HANA (C_TS4CO_2021), and SAP S/4HANA Finance Advanced certifications. These validate your expertise in S/4 HANA Finance implementation and migration projects."
  },
  {
    question: "Do you provide placement assistance after S/4 HANA Finance training?",
    answer: "Yes, we offer comprehensive placement support including resume building, interview preparation, technical mock interviews, and direct connections with 200+ hiring partners. Our placement team has successfully placed 95% of students in leading companies like Accenture, TCS, Infosys, Deloitte, and various SAP consulting firms."
  },
  {
    question: "What is the Universal Journal concept in S/4 HANA Finance?",
    answer: "Universal Journal is the revolutionary concept in S/4 HANA Finance that combines Financial Accounting (FI) and Controlling (CO) into a single source of truth. It eliminates reconciliation between modules, provides real-time reporting, supports multiple accounting principles simultaneously, and enables enhanced analytical capabilities with simplified data structure."
  },
  {
    question: "How does S/4 HANA Finance integrate with other modules?",
    answer: "S/4 HANA Finance seamlessly integrates with Materials Management (MM), Sales & Distribution (SD), Production Planning (PP), and Human Capital Management (HCM). The integration provides real-time financial impact visibility, automated journal entries, enhanced reporting across modules, and streamlined business processes with reduced manual interventions."
  },
  {
    question: "What ongoing support do you provide after course completion?",
    answer: "We provide lifetime access to course materials, monthly refresher sessions, job support for initial 6 months, access to our alumni network, regular updates on S/4 HANA Finance new features, and ongoing mentorship. Our support team is available to help with real-world implementation challenges and career guidance."
  }
];

export const metadata = getPageMetadata('simple-finance-training-in-hyderabad');

export default function S4HANAFinanceTraining() {
  const topicsCovered = [
    "What is S/4 HANA and S/4 HANA System Landscape?",
    "Changes in Basic Settings Configuration in SAP Finance and Controlling?",
    "General Ledger:",
    "a) Merging of General Ledger Account and Cost Element.",
    "b) Why there is no reconciliation between Finance and Controlling?",
    "c) Integration between FI and CO in S/4 HANA Finace?",
    "Accounts payable and Accounts Receivable:",
    "a) Business Partner configuration- vendor /customer master.",
    "New House Bank Accounting in S/4 HANA by using Fiori Application.",
    "Asset accounting:",
    "a)Why Accounting principal is important in Asset Accounting Configuration.",
    "b) Parallel Ledger Concept in Asset Accounting.",
    "c) New functionalities in Asset Accounting balances uploading.",
    "d) New Functionalities in AFAB- Depreciation Run.",
    "Table structure in S/4 HANA and Universal general ledger Concept?"
  ];

  const costCenterAccounting = [
    "Why Cost Element accounting integrate with GL account?",
    "Product Costing:",
    "a) COGS split in Product Costing.",
    "b) Variance Split in Product Costing",
    "COPA new functionalities."
  ];

  const s4HANAFinanceMigration = [
    "Pre requisites for S/4 HANA Migration.",
    "Pre migration activities.",
    "During migration activities.",
    "Post migration activities."
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

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Best S/4 HANA Finance Training in Hyderabad | S/4 HANA Finance Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/s4-hana-finance-training-in-hyderabad",
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

      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "S/4 HANA Finance Training in Hyderabad",
            "description": "Comprehensive 40-day S/4 HANA Finance training covering Simple Finance, migration activities, general ledger, asset accounting, and cost center accounting with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "S/4 HANA Finance Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P40D",
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
            
            {/* Hero Section - S/4 HANA Finance Training in Hyderabad */}
            <section className="bg-gradient-to-br from-blue-500/15 via-cyan-600/20 to-blue-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    S/4 HANA Finance Training in Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/s4-hana-finance.jpg"
                    alt="S/4 HANA Finance Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-blue-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-cyan-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-300 font-semibold">Duration: 40 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <ArrowRight className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="border border-cyan-400/60 hover:bg-cyan-400/10 text-cyan-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download Course Content
                  </button>
                </div>
              </div>
            </section>
            
            {/* S/4 HANA Finance (Simple Finance) */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                S/4 HANA Finance (Simple Finance)
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    SAP S/4HANA Finance, which was previously called SAP Simple Finance, is the first business application developed for the S/4HANA finance platform. It is designed to remove traditional barriers between transactional, analytics, and planning systems to provide instant insights and on-the-fly analysis using all levels of financial data. A business decision maker, for example, can use SAP S/4HANA Finance to model data and create forecasts of potential decisions using real-time financial data from various systems.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    The main advantage SAP S/4HANA Finance has is processing speed combined with integrated features for the various financial functions, such as financial accounting and management accounting. Because of this, SAP S/4HANA Finance allows for a much faster reconciliation of financial processes such as the quarterly close, and provides a single source of financial truth for the organization as a whole, according to SAP.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    VR IT Solutions is one of the best simple finance training in Hyderabad we offer S/4 hana online training with well focused and career-oriented training program in s4 hana simple finance.
                  </p>
                </div>
              </div>
            </section>

            {/* Topics Covered Under S/4 HANA Finance Course */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Topics Covered Under S/4 HANA Finance Course:
              </h2>
              <div className="grid gap-4">
                {topicsCovered.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <DollarSign className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100">{topic}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost center Accounting */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Cost center Accounting:
              </h2>
              <div className="grid gap-4">
                {costCenterAccounting.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <Calculator className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* S4 HANA finance migration */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                S4 HANA finance migration:
              </h2>
              <div className="grid gap-4">
                {s4HANAFinanceMigration.map((migration, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                    <ArrowRight className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-rose-100">{migration}</p>
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
            <div className="mb-8">
              <div className="bg-gradient-to-br from-green-600/15 via-blue-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
                <FAQ faqs={s4HanaFinanceFaqs} theme="sap" />
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="S/4 HANA Finance" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('s4-hana-finance-training-in-hyderabad'))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData('s4-hana-finance-training-in-hyderabad'))
        }}
      />
    </>
  );
}
