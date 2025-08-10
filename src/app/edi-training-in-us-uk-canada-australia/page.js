import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import { 
  Award,
  Rocket,
  Clock,
  CheckCircle,
  FileText,
  Settings,
  Code,
  Phone,
  Briefcase,
  Database,
  Server,
  Network,
  Zap,
  Building
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'edi-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for EDI Training
const ediFaqs = [
  {
    question: "What are the prerequisites for this course?",
    answer: "None. Learn Sterling B2B integrator implementing EDI training online modes by real time experts with practical scenarios and in depth explanation of each and every topic."
  },
  {
    question: "How can I practice?",
    answer: "In order to work on practical's, you need a Windows PC and SBI Map editor and notepad++ software which can be procured from IT Software vendor install it on your pc."
  },
  {
    question: "What is EDI and why is it important?",
    answer: "EDI stands for Electronic Data Interchange. It's the transfer of business documents like Purchase Orders, Invoices and Shipment notifications. EDI enables automation and control flow of documents, reducing processing time, data errors, and improving efficiency."
  },
  {
    question: "What are the benefits of learning EDI with Sterling B2B Integrator?",
    answer: "Sterling B2B Integrator provides all required components to successfully enable EDI for any organization which saves time, minimizes errors, improves efficiency, provides huge cost savings on labor, improves data security & tracking capability."
  },
  {
    question: "What EDI standards will I learn?",
    answer: "You'll learn various EDI Standards like ANSI X12, UNO EDIFACT, ROSETTANET, and more. These standards are essential for successful business document exchange between enterprises."
  },
  {
    question: "What is the duration and fee structure for EDI training?",
    answer: "Our EDI training is a comprehensive 45-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
  },
  {
    question: "What career opportunities are available after EDI training?",
    answer: "EDI professionals can work as EDI Analyst, B2B Integration Specialist, EDI Developer, Systems Integration Consultant, and EDI Implementation Manager in retail, manufacturing, insurance, banking, and other industries."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have successfully placed students in major companies."
  }
];

export default function EdiTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const keyBenefits = [
    "Cost Saving",
    "Minimize errors",
    "Saving charge back penalties", 
    "Increasing productivity without labor cost",
    "Receipt verification",
    "Significant advantage over competitors"
  ];

  const ediStandards = [
    "ANSI X12",
    "UNO EDIFACT", 
    "ROSETTANET"
  ];

  const businessDocuments = [
    "Purchase Orders",
    "Invoices",
    "Shipment notifications",
    "Transaction Sets",
    "Messages"
  ];

  const industryApplications = [
    "Retail",
    "Manufacturing", 
    "Insurance",
    "Banking",
    "Healthcare",
    "Logistics"
  ];

  const sterlingComponents = [
    "Document translator",
    "Data mapping",
    "Secure document transmission",
    "Workflow management (BP's)",
    "Enhanced XML processing",
    "Multi-protocol server support",
    "Enterprise security standards"
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO - Based on Your Successful Pattern */}
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
            
            {/* Hero Section - Vibrant Blue/Cyan */}
            <section className="bg-gradient-to-br from-blue-500/15 via-cyan-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    EDI Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="EDI Training Course in US, UK, Canada & Australia - VR IT Solutions"
                    className="w-full object-cover border-2 border-blue-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-teal-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400 animate-bounce" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-400 animate-spin" />
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 45 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="EDI"
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
            
            {/* EDI Training & Sterling B2B Integrator Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Network className="w-8 h-8 text-purple-400 animate-pulse" />
                EDI Training & Sterling B2B Integrator Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    VR IT Solutions announces EDI online training program in hyderabad. EDI stands for Electronic data interchange. Loosely define as transfer for any business documents like Purchase Orders, Invoices and Shipment notifications. EDI is actually standards and Protocols which needs to be utilized to successfully exchange business documents between enterprises.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Without EDI one cannot fully automate and control flow of documents which results in slow processing, data errors which directly impacts any business. Errors like overpayments, late / delayed payments that results in Revenue loss and bad customer service experience. Sterling B2B integrator provides all required components to successfully enable EDI for any organization which saves times, minimize errors and improve efficiency. Huge cost savings on labor, Improves data security & Tracking capability.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    VR IT Solutions - IBM sterling integrator we provide expert training on the concepts various enterprises started using EDI to improve their business and reduce cost. We have various EDI Standards like ANSI X12, UNO EDIFACT, ROSETTANET etc. Even today EDI is adopted only by 1/3rd of the businesses alone in US, still 2/3rd organization are yet to adopt EDI which has a huge scope as it can be adopted by any kind of business like retail, manufacturing, Insurance, Banking etc.
                  </p>
                </div>
              </div>
            </section>

            {/* Business Impact - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-emerald-400 animate-pulse" />
                Business Impact & Implementation
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    We have huge business documents exchanged between different types of enterprises doing varied business still exchanging information; these business documents can be called as Transaction Sets / Messages in EDI term. More than data format EDI is a system or method for exchanging business documents with external entities and integrating data directly to our internal systems. Without EDI an enterprise risk of Revenue Loss; Opportunity Loss; Reputation Loss.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    EDI will enable business documents to get auto populated into any enterprise ERP and checking for errors while sending or receiving documents.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    Adopting EDI will greatly benefit any organization like Cost Saving; Minimize errors; saving charge back penalties; increasing productivity without labor cost; receipt verification which helps any business to have a significant advantage on those who still lags in implementing EDI.
                  </p>
                </div>
              </div>
            </section>

            {/* Sterling B2B Integrator Advantage - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-amber-400" />
                Why Sterling B2B Integrator Stands Out
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    To successfully implement EDI there are many tools available out there in the market why still Sterling B2B Integrator stands out because it has all the required key components like document translator; data mapping; secure way of sending and receiving business documents.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    IBM Sterling B2B integrator training is bundled with Translator or mapping software, it has workflows known as BP's which is enhanced XML and a Server which keeps seamlessly manages enterprises with different network protocol requirement and provides required security as per the standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Business Documents - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-indigo-400" />
                Business Documents & EDI Standards
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-400" />
                    Business Documents
                  </h3>
                  <div className="grid gap-3">
                    {businessDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                        <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-indigo-100 font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    EDI Standards
                  </h3>
                  <div className="grid gap-3">
                    {ediStandards.map((standard, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-purple-100 font-medium">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Industry Applications - Rose/Pink Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-rose-400" />
                Industry Applications
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {industryApplications.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20 hover:bg-rose-500/15 transition-all duration-300">
                    <Building className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-rose-100 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-pink-500/15 to-red-500/15 border border-pink-400/30 rounded-xl">
                <p className="text-pink-200 font-semibold text-center">
                  🎯 EDI can be adopted by any kind of business across all industries
                </p>
              </div>
            </section>

            {/* Key Benefits - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-violet-400" />
                Key Benefits of EDI Implementation
              </h2>
              <div className="grid gap-4">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-violet-500/10 rounded-xl border border-violet-400/20 hover:bg-violet-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Sterling B2B Integrator Components - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Server className="w-8 h-8 text-cyan-400" />
                Sterling B2B Integrator Key Components
              </h2>
              <div className="grid gap-4">
                {sterlingComponents.map((component, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20 hover:bg-cyan-500/15 transition-all duration-300">
                    <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-100 font-medium">{component}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={ediFaqs} title="EDI Training FAQs" theme="edi" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Master EDI & Sterling B2B Integrator?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Join our comprehensive EDI training program and become an expert in Electronic Data Interchange with Sterling B2B Integrator!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="EDI"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={false}
                  showDownload={false}
                  showJoinNow={true}
                  showCallNow={true}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="EDI" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      

      
      
      </div>
    </>
  );
}
