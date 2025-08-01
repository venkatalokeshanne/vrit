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
  BarChart,
  Activity,
  Heart
} from 'lucide-react';

export const metadata = getPageMetadata('sas-clinical-training-in-hyderabad');

// FAQ Data for SAS Clinical Training
const sasClinicalFaqs = [
  {
    question: "What is SAS Clinical and its role in pharmaceutical industry?",
    answer: "SAS Clinical is a specialized application of SAS programming focused on clinical data analysis in pharmaceutical and biotechnology industries. It involves analyzing clinical trial data, creating regulatory submissions (CDISC standards), generating safety and efficacy reports, and supporting drug development processes from Phase I to Phase IV trials."
  },
  {
    question: "What prerequisites do I need to learn SAS Clinical?",
    answer: "Basic knowledge of statistics and clinical research is helpful. Prior experience with SAS Base programming is highly recommended. Understanding of pharmaceutical terminology, clinical trial processes, and regulatory guidelines will be beneficial. Basic knowledge of CDISC standards (SDTM, ADaM) and medical terminology is advantageous."
  },
  {
    question: "What career opportunities are available after SAS Clinical certification?",
    answer: "Career opportunities include Clinical SAS Programmer, Biostatistician, Clinical Data Analyst, Regulatory Affairs Analyst, Clinical Research Associate, and Statistical Programming Manager. Pharmaceutical companies, CROs, and regulatory agencies actively hire SAS Clinical professionals with salaries ranging from ₹6-20 lakhs annually."
  },
  {
    question: "How long does it take to complete SAS Clinical training?",
    answer: "Our comprehensive SAS Clinical training program spans 8-10 weeks with flexible scheduling options. This includes 80+ hours of instructor-led training, hands-on practice with real clinical datasets, regulatory submission projects, and certification preparation. Weekend and evening batches are available for working professionals."
  },
  {
    question: "What hands-on experience will I gain during the training?",
    answer: "You'll work with real clinical trial datasets, create SDTM and ADaM datasets, develop Tables/Listings/Figures (TLFs), work on regulatory submissions, practice adverse event analysis, efficacy endpoint analysis, safety reporting, and integration with clinical databases like Oracle Clinical and Medidata Rave."
  },
  {
    question: "Which SAS Clinical certifications should I pursue?",
    answer: "Key certifications include SAS Certified Clinical Trials Programmer, SAS Certified Statistical Business Analyst, and SAS Certified Advanced Programmer. Additionally, CDISC certifications and knowledge of FDA/EMA guidelines enhance career prospects in pharmaceutical industry."
  },
  {
    question: "Do you provide placement assistance after SAS Clinical training?",
    answer: "Yes, we offer comprehensive placement support including resume building, interview preparation, technical mock interviews focused on clinical scenarios, and direct connections with 150+ pharmaceutical companies and CROs. Our placement team has successfully placed 90% of students in companies like Quintiles, PPD, Parexel, and major pharma companies."
  },
  {
    question: "What is CDISC and its importance in SAS Clinical programming?",
    answer: "CDISC (Clinical Data Interchange Standards Consortium) provides global standards for clinical research data. SDTM (Study Data Tabulation Model) and ADaM (Analysis Data Model) are key standards. Understanding CDISC is crucial for regulatory submissions to FDA, EMA, and other global regulatory authorities."
  },
  {
    question: "How does SAS Clinical differ from regular SAS programming?",
    answer: "SAS Clinical focuses specifically on pharmaceutical data with specialized requirements including regulatory compliance, CDISC standards adherence, safety data analysis, efficacy endpoints evaluation, adverse event reporting, and integration with clinical trial management systems. It requires domain knowledge of clinical research and pharmaceutical regulations."
  },
  {
    question: "What ongoing support do you provide after course completion?",
    answer: "We provide lifetime access to course materials, monthly updates on regulatory changes, job support for initial 6 months, access to clinical datasets for practice, networking with pharmaceutical professionals, and ongoing mentorship. Our support includes help with real-world clinical programming challenges and career advancement guidance."
  }
];

export default function SASClinicalTraining() {
  const courseStructure = [
    "Introduction to SAS and Clinical Trials",
    "DATA step processing",
    "Presenting and summarising data(Procedures used in Clinical SAS)",
    "Advanced SAS(Macros, Proc SQL)",
    "ICH-GCP",
    "Overview of CDISC (SDTM & ADAM)",
    "Protocol, Statistical Analysis Plan (SAP) and TLFs"
  ];

  const whoCanDo = [
    "Any Graduates/post graduates with science background(any MSC and BSC)",
    "B.Pharmacy, M.Pharmacy, B.Tech (Biotechnology)",
    "MCA, BCA, B.Tech in Computers",
    "BDS, BAMS, BUMS and BHMS"
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
            "name": "Best SAS Clinical Training in Hyderabad | SAS Clinical Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/sas-clinical-training-in-hyderabad",
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
            "name": "SAS Clinical Training in Hyderabad",
            "description": "Comprehensive 120-day SAS Clinical training covering clinical trial data analysis, CDISC standards, and statistical programming with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "SAS Clinical Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P120D",
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
            
            {/* Hero Section - SAS Clinical Training in Hyderabad */}
            <section className="bg-gradient-to-br from-blue-500/15 via-indigo-600/20 to-purple-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    SAS Clinical Training in Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sas-clinical.jpg"
                    alt="SAS Clinical Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-blue-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-indigo-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-300 font-semibold">Duration: 120 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <ArrowRight className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="border border-indigo-400/60 hover:bg-indigo-400/10 text-indigo-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-indigo-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download Course Content
                  </button>
                </div>
              </div>
            </section>
            
            {/* Brief about Clinical SAS */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Brief about Clinical SAS
              </h2>
              <div className="space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    SAS is widely used in clinical trial data analysis in pharmaceutical, biotech and clinical research companies. SAS programmers play an important role in clinical trial data analysis. In addition to doctors and clinicians who collect clinical trial data, the group conducting data analysis includes statisticians, clinical data managers (COMs) and SAS programmers. Statisticians provide the ideas and methods of the data analysis, clinical data managers manage the collected data and control the data quality.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    In between, SAS programmers implement the analysis methods on the collected data and provide the study summary tables, data listing and graphs to the statisticians and/or clinicians to write clinical study report. SAS programmers work closely with statisticians and data managers. They provide the link between raw data and the analysis.VR IT solutions offerd By SAS clinical online trainng in Hyderabad.
                  </p>
                </div>
              </div>
            </section>

            {/* Why to do this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why to do this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    In the drug development industry, SAS plays an important and essential role in the research and development of drugs, diagnostics, and medical devices. Familiarity with SAS clinical Training programming skills can lead to a challenging and rewarding career that also positively impacts and transforms patients' lives.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the software training institute in Hyderabad to offer sas clinical training well focused and career-oriented training program in Clinical SAS.
                  </p>
                </div>
              </div>
            </section>

            {/* Who can do this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
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
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What are the pre-requisites for this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no programming experience.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    VR IT Solutions is one of the best sas clinical training in hyderabad to offer the best and balanced training with expert instructors on practical implementation and real time case studies in Clinical SAS that is well suited to help you embark on the right path of success and Job readiness.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Course Structure:
              </h2>
              <div className="grid gap-4 mb-6">
                {courseStructure.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <BarChart className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                <p className="text-violet-100 leading-relaxed font-semibold">
                  Note: The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
            </section>

            {/* Industry relevant curriculum */}
            <section className="bg-gradient-to-br from-teal-600/15 via-cyan-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 shadow-xl shadow-teal-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Industry relevant curriculum
              </h2>
              <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                <p className="text-teal-100 leading-relaxed">
                  You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others.
                </p>
              </div>
            </section>

            {/* How will I execute the Practicals? */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                How will I execute the Practicals?
              </h2>
              <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                <p className="text-violet-100 leading-relaxed">
                  In every days class ample data and tasks will be given to sharpen your skills on SAS University edition.
                </p>
              </div>
            </section>

            {/* Annual Packages */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Annual Packages
              </h2>
              <div className="space-y-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    Average salaries for the 1 to 3.5 yrs exp. Clinical SAS Programmer is Rs 469,761 (source payscale.com).
                  </p>
                </div>
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/sas-clinical-salaries.jpg"
                    alt="SAS Clinical Average Salaries"
                    className="w-full object-cover border border-green-400/30"
                  />
                </div>
              </div>
            </section>

            {/* Companies Hiring */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-blue-600/20 to-cyan-600/15 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Companies Hiring
              </h2>
              <div className="space-y-6">
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/sas-clinical-companies.jpg"
                    alt="SAS Clinical Jobs in Companies"
                    className="w-full object-cover border border-indigo-400/30"
                  />
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Hundreds of Contract Research Organizations (CROs)hiring Clinical SAS Programmers.
                  </p>
                </div>
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

          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2 mb-8">
            <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={sasClinicalFaqs} theme="default" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAS Clinical" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sas-clinical-training-in-hyderabad'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('sas-clinical-training-in-hyderabad') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('sas-clinical-training-in-hyderabad'))
          }}
        />
      )}
      </div>
    </>
  );
}
