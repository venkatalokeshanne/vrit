import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import { 
  Target, 
  Award,
  Monitor,
  Rocket,
  Clock,
  CheckCircle,
  Settings,
  Star,
  Phone,
  RefreshCw
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'edi-training';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function EDITrainingPage() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);
  
  const ediFaqs = [
    {
      question: "What is EDI (Electronic Data Interchange) and why is it important for businesses?",
      answer: "EDI is the electronic exchange of structured business documents between organizations using standardized formats. It's important because it eliminates manual data entry, reduces errors, speeds up transactions, improves data accuracy, and enables automated processing of business documents like purchase orders, invoices, and shipment notifications."
    },
    {
      question: "What are the prerequisites for EDI training?",
      answer: "No specific prerequisites are required for EDI training. Basic computer knowledge and understanding of business processes are helpful. Having familiarity with XML, data formats, and business document workflows is beneficial but not mandatory as we cover fundamentals from the beginning."
    },
    {
      question: "What is Sterling B2B Integrator and how does it relate to EDI?",
      answer: "Sterling B2B Integrator is IBM's comprehensive B2B integration platform that provides all components needed for EDI implementation including document translation, data mapping, secure communication protocols, workflow management, and partner connectivity. It's a complete solution for EDI automation."
    },
    {
      question: "What is the duration of the EDI training course?",
      answer: "Our comprehensive EDI training is designed to be completed in 45 days, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule and learning pace with hands-on practice sessions."
    },
    {
      question: "What EDI standards and document types will I learn?",
      answer: "You'll learn major EDI standards including ANSI X12, UN/EDIFACT, and TRADACOMS. We cover common document types like Purchase Orders (850), Invoices (810), Advance Ship Notices (856), Functional Acknowledgments (997), and industry-specific transaction sets."
    },
    {
      question: "What career opportunities are available after EDI training?",
      answer: "EDI professionals can work as EDI Developer, B2B Integration Specialist, EDI Analyst, Sterling Integrator Developer, Business Integration Consultant, Supply Chain Analyst, or EDI Support Engineer with salaries ranging from ₹4-12 LPA depending on experience and expertise."
    },
    {
      question: "Will I work on real EDI implementation projects during training?",
      answer: "Yes! You'll work on hands-on projects including EDI document mapping, partner onboarding, business process workflows, error handling scenarios, Sterling B2B Integrator configuration, and end-to-end EDI transaction processing using real business scenarios."
    },
    {
      question: "How does EDI benefit organizations compared to traditional document exchange?",
      answer: "EDI provides significant benefits including 80% reduction in processing time, elimination of manual errors, cost savings on paper and postage, faster payment cycles, improved inventory management, better supplier relationships, and enhanced data security and tracking capabilities."
    },
    {
      question: "Do you provide placement assistance and certification guidance?",
      answer: "Yes, we offer 100% placement assistance including resume building, EDI project portfolio creation, interview preparation with technical scenarios, mock interviews, and connecting you with our network of companies looking for EDI and Sterling B2B Integrator professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for EDI implementations, access to updated Sterling B2B Integrator materials, latest EDI standards updates, industry best practices, and alumni network for continuous professional development."
    }
  ];

  return (
    <>


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    EDI Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={mainImageUrl}
                    alt="EDI Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-orange-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 45 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="EDI Training"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* EDI Training & Sterling B2B Integrator Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <RefreshCw className="w-8 h-8 text-purple-400 animate-pulse" />
                EDI Training & Sterling B2B Integrator Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions</span> announces EDI online training program in hyderabad. EDI stands for Electronic data interchange. Loosely define as transfer for any business documents like Purchase Orders, Invoices and Shipment notifications. EDI is actually standards and Protocols which needs to be utilized to successfully exchange business documents between enterprises.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Without EDI one cannot fully automate and control flow of documents which results in slow processing, data errors which directly impacts any business. Errors like overpayments, late / delayed payments that results in Revenue loss and bad customer service experience. Sterling B2B integrator provides all required components to successfully enable EDI for any organization which saves times, minimize errors and improve efficiency. Huge cost savings on labor, Improves data security & Tracking capability.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VR IT Solutions - IBM sterling integrator</span> we provide expert training on the concepts various enterprises started using EDI to improve their business and reduce cost. We have various EDI Standards like ANSI X12, UNO EDIFACT, ROSETTANET etc. Even today EDI is adopted only by 1/3rd of the businesses alone in US, still 2/3rd organization are yet to adopt EDI which has a huge scope as it can be adopted by any kind of business like retail, manufacturing, Insurance, Banking etc.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    We have huge business documents exchanged between different types of enterprises doing varied business still exchanging information; these business documents can be called as Transaction Sets / Messages in EDI term. More than data format EDI is a system or method for exchanging business documents with external entities and integrating data directly to our internal systems. Without EDI an enterprise risk of Revenue Loss; Opportunity Loss; Reputation Loss.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    EDI will enable business documents to get auto populated into any enterprise ERP and checking for errors while sending or receiving documents.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Adopting EDI will greatly benefit any organization like Cost Saving; Minimize errors; saving charge back penalties; increasing productivity without labor cost; receipt verification which helps any business to have a significant advantage on those who still lags in implementing EDI.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    To successfully implement EDI there are many tools available out there in the market why still Sterling B2B Integrator stands out because it has all the required key components like document translator; data mapping; secure way of sending and receiving business documents.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">IBM Sterling B2B integrator training</span> is bundled with Translator or mapping software, it has workflows known as BP&apos;s which is enhanced XML and a Server which keeps seamlessly manages enterprises with different network protocol requirement and provides required security as per the standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Q) What are the prerequisites for this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-emerald-400 animate-pulse" />
                Q) What are the prerequisites for this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    <span className="font-semibold">A)</span> None.Learn Sterling B2B integrator implementing EDI training online modes by real time experts with practical scenarios and in depth explanation of each and every topic.
                  </p>
                </div>
              </div>
            </section>

            {/* Q) How can I practice? - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-amber-400" />
                Q) How can I practice?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    <span className="font-semibold">A)</span>In order to work on practical&apos;s, you need a Windows PC and SBI Map editor and notepad++ software which can be procured from IT Software vendor install it on your pc.
                  </p>
                </div>
              </div>
            </section>

            {/* Training Features - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-emerald-400" />
                Are You Looking For -
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Training Modes */}
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    Training Modes
                  </h3>
                  <div className="space-y-3">
                    {[
                      "✓Online Training",
                      "✓ClassRoom Training", 
                      "✓Job Support"
                    ].map((mode, index) => (
                      <div key={index} className="flex items-center gap-3 text-emerald-100">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{mode}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                    Contact Us
                  </button>
                </div>

                {/* Why Choose VR IT Solutions */}
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-teal-400" />
                    Why to choose VR IT solutions?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "✓Real time project Explanation",
                      "✓Free Resume preparation",
                      "✓Backup Classes",
                      "✓Career guidance", 
                      "✓Mock Tests and Interviews",
                      "✓24/7 support"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-teal-100">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your EDI Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master EDI and Sterling B2B Integrator to become proficient in electronic data interchange and business document automation. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="EDI Training"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={false}
                  showDownload={false}
                  showCallNow={true}
                  showJoinNow={true}
                  layout="horizontal"
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                />
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <FAQ faqs={ediFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="EDI Training" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
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
