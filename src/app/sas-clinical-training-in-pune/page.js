import React from 'react';
import Link from 'next/link';
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
  BarChart,
  Activity,
  Heart,
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('sas-clinical-training-in-pune');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('sas-clinical-training-in-pune');
  return structuredData ? JSON.stringify(structuredData) : null;
}

// FAQ Data for SAS Clinical Online Training
const sasClinicalOnlineFaqs = [
  {
    question: "What are the advantages of taking SAS Clinical training online?",
    answer: "Online SAS Clinical training offers flexibility to learn at your own pace, access to recorded sessions for revision, interactive virtual labs with real clinical datasets, live instructor support, and the ability to balance learning with work commitments. You get the same comprehensive curriculum and hands-on experience as in-person training."
  },
  {
    question: "What technical requirements do I need for online SAS Clinical training?",
    answer: "You need a stable internet connection, computer with minimum 8GB RAM, updated web browser, and access to SAS software (provided through our virtual lab environment). We provide cloud-based SAS access, so you don't need to install software locally. Headset with microphone is recommended for interactive sessions."
  },
  {
    question: "How do online practical sessions work for SAS Clinical programming?",
    answer: "Online practical sessions use cloud-based SAS environments with real clinical datasets. You'll have screen sharing capabilities, virtual breakout rooms for group projects, real-time code review with instructors, and collaborative workspace for CDISC standard implementations. All hands-on exercises mirror real pharmaceutical industry scenarios."
  },
  {
    question: "What is the duration and schedule flexibility for online SAS Clinical training?",
    answer: "Our online SAS Clinical program spans 8-10 weeks with multiple scheduling options including weekday evenings (7-9 PM), weekend batches (10 AM-5 PM), and accelerated weekend programs. All sessions are recorded and available for 1 year for unlimited revision and practice."
  },
  {
    question: "How do you ensure quality interaction and doubt resolution in online mode?",
    answer: "We maintain small batch sizes (max 15 students), dedicated Q&A sessions, one-on-one mentoring calls, active discussion forums, 24/7 support chat, and regular assessment with personalized feedback. Instructors are available for individual consultations via video calls throughout the program."
  },
  {
    question: "What online resources and materials will I receive?",
    answer: "You'll receive comprehensive study materials including clinical datasets, CDISC implementation guides, regulatory submission templates, video recordings of all sessions, practice exercises with solutions, sample TLFs (Tables/Listings/Figures), and access to our learning management system with progress tracking."
  },
  {
    question: "How does online placement assistance work for SAS Clinical roles?",
    answer: "Our online placement support includes virtual resume workshops, mock interview sessions via video calls, direct referrals to pharmaceutical companies and CROs, access to our job portal with exclusive openings, LinkedIn profile optimization, and networking opportunities with industry professionals through virtual meetups."
  },
  {
    question: "Can I interact with instructors and peers effectively in online mode?",
    answer: "Yes, through live interactive sessions, virtual study groups, collaborative project work, peer code review sessions, industry expert guest lectures, and alumni networking events. We use advanced online platforms that facilitate seamless interaction and create a community learning environment."
  },
  {
    question: "What happens if I miss a live online session?",
    answer: "All sessions are recorded and available within 24 hours. You can schedule one-on-one catch-up sessions with instructors, access detailed session notes and code samples, join makeup classes for hands-on exercises, and receive personalized assignments to cover missed content. No learning is compromised due to missed sessions."
  },
  {
    question: "How do you provide hands-on experience with clinical data online?",
    answer: "Through cloud-based SAS environment with real de-identified clinical datasets, virtual clinical trial simulations, online access to clinical databases like Oracle Clinical, remote access to regulatory submission tools, and collaborative projects that simulate real pharmaceutical company workflows and CDISC standard implementations."
  }
];

export default async function SASClinicalTrainingInPune() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('sas-clinical-training-in-pune');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

  
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
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      {/* Course Schema */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - SAS Clinical Training in Pune */}
            <section className="bg-gradient-to-br from-blue-500/15 via-indigo-600/20 to-purple-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    SAS Clinical Training in Pune
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="SAS Clinical Training Course in Pune - VR IT Solutions"
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

                <CourseActionButtons 
                  courseName="SAS Clinical"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={true}
                  showJoinNow={false}
                  showCallNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>
            
            {/* Brief about Clinical SAS */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
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
                    In between, SAS programmers implement the analysis methods on the collected data and provide the study summary tables, data listing and graphs to the statisticians and/or clinicians to write clinical study report. SAS programmers work closely with statisticians and data managers. They provide the link between raw data and the analysis.VR IT solutions offerd By SAS clinical online trainng in Pune.
                  </p>
                </div>
              </div>
            </section>

            {/* Why to do this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
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
                    VR IT Solutions is one of the software training institute in Pune to offer sas clinical training well focused and career-oriented training program in Clinical SAS.
                  </p>
                </div>
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
                    VR IT solutions haven't prescribed any specific pre-requisites and this course can be taken up by anyone with little or no programming experience.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    VR IT Solutions is one of the best sas clinical training in pune to offer the best and balanced training with expert instructors on practical implementation and real time case studies in Clinical SAS that is well suited to help you embark on the right path of success and Job readiness.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
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
            <section className="bg-gradient-to-br from-teal-600/15 via-cyan-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-teal-400/30 shadow-xl shadow-teal-500/10">
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
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
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
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
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
            <section className="bg-gradient-to-br from-indigo-600/15 via-blue-600/20 to-cyan-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAS Clinical" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>

        {/* FAQ Section - Full Width */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
            <FAQ faqs={sasClinicalOnlineFaqs} theme="default" />
          </div>
        </div>

        {/* Our Locations Section - Full Width */}
        <div className="mt-12">
          <section className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-blue-900/30 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Our SAS Clinical Training Locations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Link href="/sas-clinical-online-training-in-hyderabad" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold">Hyderabad</div>
              </Link>
              <Link href="/sas-clinical-training-in-bangalore" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold">Bangalore</div>
              </Link>
              <Link href="/sas-clinical-training-in-chennai" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold">Chennai</div>
              </Link>
              <div className="bg-gradient-to-br from-cyan-600/40 to-blue-600/40 rounded-xl p-4 border-2 border-cyan-400/50 text-center">
                <div className="text-cyan-200 font-bold">Pune</div>
                <div className="text-xs text-cyan-300 mt-1">Current Location</div>
              </div>
              <Link href="/sas-clinical-online-training-in-us-uk-canada-australia" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold text-sm">US/UK/Canada/Australia</div>
              </Link>
            </div>
            <div className="text-center mt-6">
              <p className="text-indigo-200">Choose your preferred location for SAS Clinical training</p>
            </div>
          </section>
        </div>
      </div>
      
      {/* Structured Data */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
      

      </div>
    </>
  );
}
