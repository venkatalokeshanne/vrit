import Link from 'next/link';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';
import { 
  Target, 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp,
  Cloud,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Globe,
  Briefcase,
  Database,
  Layers,
  Package,
  Flag
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'sap-sd-training-in-us-uk-canada-australia';

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}

export default async function SAPSDTrainingInUSUKCanadaAustralia() {
  const structuredDataJson = getStructuredDataStatic(COURSE_SLUG);

  // Fetch metadata for dynamic hero image
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  const courseModules = [
    "Introduction to SAP and SAP SD Module",
    "Organizational Structure in Sales and Distribution",
    "Master Data Management (Customer Master, Material Master)",
    "Sales Document Processing (Inquiry, Quotation, Sales Order)",
    "Delivery Processing and Shipping",
    "Billing and Invoice Processing",
    "Pricing Procedures and Condition Techniques",
    "Credit Management and Risk Assessment",
    "Returns and Complaints Processing",
    "Integration with MM and FI Modules",
    "Output Determination and Communication",
    "Variant Configuration and Product Proposals",
    "Reports and Analytics in SD",
    "Real-time Business Scenarios and Case Studies",
    "Live Project Implementation"
  ];

  const whoShouldAttend = [
    "Business professionals working in Sales and Distribution",
    "SAP consultants looking to specialize in SD module",
    "Fresh graduates interested in SAP functional roles",
    "Professionals from supply chain and logistics background",
    "Business analysts and process consultants",
    "ERP implementation professionals"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with real SAP system access. Students get hands-on experience with actual business scenarios, helping you understand SAP SD concepts better and prepare for real-world implementation challenges."
    },
    {
      title: "Live project", 
      description: "Our curriculum includes a complete end-to-end SAP SD implementation project covering order-to-cash cycle, helping you apply the skills learned in real business scenarios and build a strong portfolio for your career."
    },
    {
      title: "Industry expert trainers",
      description: "Our trainers are certified SAP professionals with 8+ years of industry experience in SAP SD implementations across various industries including manufacturing, retail, and distribution companies."
    },
    {
      title: "Complete SAP SD mastery in 90 days",
      description: "Our intensive training program is designed to make you job-ready SAP SD consultant in just 90 days. The curriculum covers all essential topics with practical scenarios to ensure you're industry-ready upon completion."
    },
    {
      title: "Industry relevant curriculum",
      description: "Our curriculum is constantly updated to include latest SAP SD features and industry best practices. You learn the most current version of SAP SD with real-world business scenarios used by top companies."
    }
  ];

  const internationalBenefits = [
    "Flexible training schedules to accommodate multiple time zones",
    "24/7 support and doubt clearing sessions for global students",
    "International certification preparation and guidance",
    "Global career opportunities with MNC companies",
    "Cross-cultural business scenario training",
    "Time zone friendly batch timings"
  ];

  const timeZones = [
    {
      region: "US & Canada",
      zones: ["EST", "CST", "MST", "PST"],
      timing: "Flexible evening and weekend batches available"
    },
    {
      region: "UK & Europe", 
      zones: ["GMT", "CET"],
      timing: "Weekday evening and weekend sessions"
    },
    {
      region: "Australia & New Zealand",
      zones: ["AEST", "NZST"],
      timing: "Early morning and weekend batch options"
    }
  ];

  const careerOpportunities = [
    "SAP SD Consultant - USA: $80,000 - $120,000 annually",
    "Functional Analyst - UK: £45,000 - £75,000 annually", 
    "SAP SD Lead - Canada: CAD $70,000 - $110,000 annually",
    "Implementation Specialist - Australia: AUD $80,000 - $130,000 annually",
    "Business Process Expert in multinational corporations",
    "Remote SAP consulting opportunities with global clients"
  ];

  const sapSdFaqs = [
    {
      question: "What is SAP SD and why should I learn it internationally?",
      answer: "SAP SD (Sales and Distribution) is one of the core functional modules in SAP ERP that handles sales, shipping, billing, and customer management processes. Learning SAP SD opens doors to high-paying international careers in SAP consulting, business analysis, and ERP implementation with competitive salaries in US ($80K-120K), UK (£45K-75K), Canada (CAD $70K-110K), and Australia (AUD $80K-130K)."
    },
    {
      question: "How are the training sessions conducted for international students?",
      answer: "Our SAP SD training is conducted through live online sessions using advanced video conferencing platforms. International students get access to recorded sessions, live practice environments, and dedicated support to ensure effective learning across different time zones including US/Canada (EST/PST), UK (GMT), and Australia/New Zealand (AEST/NZST)."
    },
    {
      question: "What are the available batch timings for US, UK, Canada, and Australia?",
      answer: "We offer flexible batch timings to accommodate international time zones: US/Canada - Evening and weekend batches (EST/PST friendly), UK - Evening sessions (GMT friendly), Australia/New Zealand - Early morning and weekend options (AEST/NZST compatible). Custom timings can be arranged for groups."
    },
    {
      question: "Do you provide international SAP SD certification guidance?",
      answer: "Yes, we provide comprehensive preparation for internationally recognized SAP Certified Application Associate - Sales and Distribution certification. Our training includes global best practices, international business scenarios, and exam strategies applicable worldwide."
    },
    {
      question: "What career opportunities are available internationally after SAP SD training?",
      answer: "SAP SD professionals have excellent global career prospects including SAP Consultant positions in US ($80K-$120K), UK (£45K-£75K), Canada (CAD $70K-$110K), and Australia (AUD $80K-$130K). Opportunities exist with major consulting firms like Accenture, IBM, Capgemini, and MNCs across various industries."
    },
    {
      question: "How do you handle practical sessions for international students?",
      answer: "International students get access to cloud-based SAP environments that work seamlessly across different countries and time zones. We provide hands-on practice through virtual labs, screen sharing sessions, and dedicated practice time slots suitable for your local time zone."
    },
    {
      question: "Do you provide job placement assistance for international locations?",
      answer: "Yes, we have partnerships with global recruitment agencies and MNCs operating in US, UK, Canada, and Australia. We provide international resume formatting, interview preparation for different markets, and job referrals through our global network."
    },
    {
      question: "What is the duration and fee structure for international students?",
      answer: "The SAP SD training is a comprehensive 90-day program designed for working professionals globally. We offer competitive international pricing with flexible payment options. Contact us at +91-9032734343 for current international rates and available discounts."
    },
    {
      question: "How do you ensure quality training across different time zones?",
      answer: "Our trainers are available across multiple time zones to provide live interaction. All sessions are recorded for later reference, we provide 24/7 doubt clearing support, and maintain consistent curriculum quality regardless of your location or batch timing."
    },
    {
      question: "What ongoing support do you provide for international students?",
      answer: "International students receive lifetime support including global alumni network access, continued mentoring, international job market updates, resume updates for different countries, and ongoing career guidance throughout your SAP SD journey worldwide."
    }
  ];

  return (
    <>
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
            
            {/* Hero Section - International Theme */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Global Training Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg flex items-center gap-2">
                🌍 Global Training!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    SAP SD Training
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl flex items-center justify-center gap-2 mt-2">
                    <Flag className="w-8 h-8 text-orange-400" />
                    US | UK | Canada | Australia
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="SAP SD Training in US, UK, Canada, Australia - VR IT Solutions"
                    className="w-full object-cover border-2 border-orange-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* International Time Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {timeZones.map((zone, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-500/25 to-blue-500/25 backdrop-blur-sm rounded-xl p-4 border border-orange-400/40">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-5 h-5 text-orange-400" />
                        <span className="text-orange-300 font-semibold">{zone.region}</span>
                      </div>
                      <div className="text-sm text-gray-300 mb-2">
                        {zone.zones.join(', ')}
                      </div>
                      <div className="text-xs text-orange-200">
                        {zone.timing}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="inline-block bg-gradient-to-r from-orange-500/25 to-teal-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-orange-400/40 animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-orange-400 animate-bounce" />
                      <span className="text-orange-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-400 animate-spin" />
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 90 Days (Online)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VR IT Solutions</span> brings world-class SAP SD training to international students across US, UK, Canada, and Australia. Join our global community of SAP professionals with flexible timing and comprehensive support.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our internationally experienced SAP SD consultants provide high-quality online training designed for global professionals. The curriculum is created by Certified Expert Group based on international industry standards, making students ready for global SAP careers.
                </p>

                <CourseActionButtons 
                  courseName="SAP SD Training in US, UK, Canada, Australia"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>

            {/* International Benefits Section */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-green-400" />
                International Training Benefits
              </h2>
              <div className="grid gap-4">
                {internationalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-500/10 rounded-xl border border-green-400/20 hover:bg-green-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Global Career Opportunities */}
            <section className="bg-gradient-to-br from-amber-600/15 via-orange-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-amber-400" />
                Global Career Opportunities
              </h2>
              <div className="grid gap-4">
                {careerOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <TrendingUp className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100 font-medium">{opportunity}</span>
                  </div>
                ))}
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
                <Link href="/sap-fico-training-in-us-uk-canada-australia" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP FICO</span>
                  </div>
                </Link>
                <Link href="/sap-mm-online-training" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Package className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP MM</span>
                  </div>
                </Link>
                <Link href="/sap-ewm-training-in-us-uk-canada-australia" className="bg-gray-500/10 hover:bg-gray-400/20 rounded-xl p-4 border border-gray-400/20 hover:border-gray-300/40 transition-all duration-300 text-center group">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <Layers className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-200" />
                    <span className="text-sm font-medium">SAP EWM</span>
                  </div>
                </Link>
              </div>
            </section>
            
            {/* What is SAP SD - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                What is SAP SD?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    SAP SD (Sales and Distribution) is one of the core functional modules in SAP ERP that handles the complete order-to-cash process. It manages sales transactions, customer relationships, pricing, delivery processing, billing, and integration with other SAP modules to provide comprehensive business solutions.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    For international professionals in US, UK, Canada, and Australia, SAP SD expertise opens doors to lucrative career opportunities with competitive salaries and global mobility in the enterprise software consulting domain.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> provides globally recognized SAP SD training designed specifically for international students, with flexible timings and comprehensive support across multiple time zones.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Should You Join This Course - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why should you join this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With SAP being the leading ERP solution globally, SAP SD professionals are in high demand across industries worldwide. Our international training offers excellent value for professionals looking to advance their careers in SAP consulting, with opportunities for high salaries and global career prospects in multinational companies across US, UK, Canada, and Australia.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    Make <span className="text-emerald-400 font-semibold">VR IT Solutions</span> as your first choice for SAP SD international training due to our systematic training methodology, expert trainers, and comprehensive global learning environment! Join now for a lucrative international SAP career.
                  </p>
                </div>
              </div>
            </section>

            {/* What Do You Learn - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                What do you learn in this course?
              </h2>
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100 font-medium">{module}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border border-yellow-400/30 rounded-xl">
                <p className="text-yellow-200 font-semibold">
                  <strong className="text-yellow-300">Note:</strong> The curriculum includes international business scenarios and is designed to meet global SAP implementation standards.
                </p>
              </div>
            </section>

            {/* Who Should Attend - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-rose-400" />
                Who should attend?
              </h2>
              <div className="grid gap-4">
                {whoShouldAttend.map((attendee, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                    <Star className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-rose-100 font-medium">{attendee}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Differentiators */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-400" />
                Key Differentiators
              </h2>
              <div className="space-y-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-cyan-100 leading-relaxed">
                      {differentiator.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
                <FAQ faqs={sapSdFaqs} theme="default" />
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="SAP SD International" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data */}
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