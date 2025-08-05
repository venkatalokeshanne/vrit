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
  Database,
  Shield
} from 'lucide-react';

export const metadata = getPageMetadata('sap-fico-online-training-in-hyderabad');

export default function SapFicoTraining() {
  const sapFicoFaqs = [
    {
      question: "What is SAP FICO and why is it important for careers?",
      answer: "SAP FICO (Financial Accounting and Controlling) is one of the most important modules in SAP ERP, handling financial transactions, reporting, and controlling activities. SAP FICO professionals are in high demand with excellent career prospects and salaries ranging from ₹8-25 LPA."
    },
    {
      question: "What are the prerequisites for SAP FICO training?",
      answer: "Basic knowledge of accounting principles and business processes is helpful but not mandatory. Our comprehensive training covers all fundamentals including accounting concepts, making it suitable for both beginners and experienced professionals."
    },
    {
      question: "What is the duration and structure of SAP FICO training?",
      answer: "Our SAP FICO training is an extensive 120-day program covering Financial Accounting (FI) and Controlling (CO) modules with hands-on practice on live SAP systems, real-world scenarios, and industry case studies."
    },
    {
      question: "What career opportunities are available after SAP FICO training?",
      answer: "SAP FICO opens doors to roles like SAP FICO Consultant, Functional Analyst, Finance Manager, SAP Project Manager, Business Analyst, and Implementation Specialist. Major companies like Accenture, IBM, Capgemini, TCS actively hire SAP FICO professionals."
    },
    {
      question: "Do you provide SAP FICO certification preparation?",
      answer: "Yes, our training prepares you for SAP FICO certification exams. We provide practice tests, certification guidance, exam tips, and study materials to help you achieve official SAP certification and enhance your career prospects."
    },
    {
      question: "What topics are covered in SAP FICO curriculum?",
      answer: "The curriculum covers General Ledger, Accounts Payable/Receivable, Asset Accounting, Bank Accounting, Cost Center Accounting, Profit Center Accounting, Product Costing, Profitability Analysis, and integration with other SAP modules."
    },
    {
      question: "Do you provide hands-on practice on live SAP systems?",
      answer: "Absolutely! Students get access to live SAP FICO systems for hands-on practice. We provide real-world business scenarios, configuration exercises, and end-to-end process implementations to ensure practical expertise."
    },
    {
      question: "Is SAP FICO suitable for non-technical professionals?",
      answer: "Yes, SAP FICO is ideal for non-technical professionals, especially those with finance and accounting backgrounds. The module focuses on business processes rather than technical programming, making it accessible to finance professionals."
    },
    {
      question: "What support do you provide for job placement?",
      answer: "We provide comprehensive placement assistance including resume building, interview preparation, mock interviews, job referrals, and continuous support until placement. Our strong industry connections help students secure positions in top companies."
    },
    {
      question: "Can working professionals attend SAP FICO training?",
      answer: "Yes, we offer flexible scheduling with weekend batches, evening classes, and online training options. Our course structure is designed to accommodate working professionals without disrupting their current commitments."
    }
  ];

  const topLearningBenefits = [
    "Learning SAP FICO can be exceptionally useful for both the person and the company.",
    "This SAP FICO certificate will build your skills and boost your career.",
    "It will help you gain respect from your office colleagues and employers.",
    "After completing the SAP FICO training you will get many excellent job opportunities in reputed companies.",
    "SAP FICO certificate helps you to get a handsome salary in reputed companies.",
    "SAP FICO training helps firms and organizations in running their business and grow substantially.",
    "This certification helps you to build better relationships with clients to get business.",
    "It will help you to get more acknowledgment in your professional life."
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
            "name": "Best SAP FICO Training in Hyderabad | SAP FICO Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/sap-fico-training-in-hyderabad",
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
            "name": "SAP FICO Training in Hyderabad",
            "description": "Comprehensive 120-day SAP FICO training covering Financial Accounting, Controlling, and S/4 HANA with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "SAP FICO Certification",
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
            
            {/* Hero Section - SAP FICO Training In Hyderabad With 100% Placement Guarantee */}
            <section className="bg-gradient-to-br from-purple-500/15 via-pink-600/20 to-purple-600/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-400/30 shadow-2xl shadow-purple-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    SAP FICO Training In Hyderabad
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl">With 100% Placement Guarantee</span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sap-fico.jpg"
                    alt="SAP FICO Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-blue-300 font-semibold">Duration: 120 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <ArrowRight className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="border border-pink-400/60 hover:bg-pink-400/10 text-pink-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download Course Content
                  </button>
                </div>
              </div>
            </section>
            
            {/* SAP FICO Training Section */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                SAP FICO Training
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    VRIT Solutions distinguished itself as the leading SAP FICO Training institute in Hyderabad and SAP FICO Online Trainings. Our Trainers are highly qualified and have high experience in providing quality classroom and online training on SAP FICO
                  </p>
                </div>
              </div>
            </section>

            {/* The Best Highlights Of SAP FICO */}
            <section className="bg-gradient-to-br from-purple-600/15 via-pink-600/20 to-rose-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Best Highlights Of SAP FICO :
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    VR IT Solutions provides complete knowledge of SAP FICO and the opportunity to work with the best and most experienced trainers in your field.
                  </p>
                </div>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20">
                    <p className="text-purple-100">• We offer you an excellent platform for career growth.</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl p-4 border border-pink-400/20">
                    <p className="text-pink-100">• The complete SAP FICO training is customized with real-time online sessions and project work.</p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-xl p-4 border border-rose-400/20">
                    <p className="text-rose-100">• Added to these highlights, We provide a 100% guarantee of your success.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20">
                    <p className="text-purple-100">• We have a record of working closely with trainers who are industry experts.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SAP FICO S/4 HANA Training Course */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                SAP FICO S/4 HANA Training Course
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    The SAP FI (Financial Accounting) and SAP CO (Controlling) course provides students with specific information on financial accounting and controlling and helps them master the art of using SAP FICO software on the S/4 HANA Server. VR IT Solutions is well-equipped with highly advanced lab tools and updated course material as per the latest industry standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you do this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why should you do this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    With rapid technological advancements, this course is slowly gaining importance in the market. The uniqueness of this course is it teaches you mule in step by step manner starting from basics to advanced without the requirement of any previous integration background.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    VR IT Solutions is one of the few institutes in Hyderabad to offer the best and innovative training in SAP FICO training that is well suited to help you get started and embark on a fruitful journey.
                  </p>
                </div>
              </div>
            </section>

            {/* Top Learning Benefits of SAP FICO Training Course */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Top Learning Benefits of SAP FICO Training Course
              </h2>
              <div className="grid gap-4">
                {topLearningBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-cyan-100">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Live project, Top notch faculty, Industry relevant curriculum */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <div className="space-y-8">
                {/* Live project */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-violet-400" />
                    Live project
                  </h3>
                  <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                    <p className="text-violet-100 leading-relaxed">
                      Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios.
                    </p>
                  </div>
                </div>

                {/* Top notch faculty */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-400" />
                    Top notch faculty
                  </h3>
                  <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                    <p className="text-purple-100 leading-relaxed mb-4">
                      Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, data scientists and even experienced faculty from IIMs, IITs and other reputed institutes.
                    </p>
                    <p className="text-purple-100 leading-relaxed mb-4">
                      Get trained in SAP FICO in just 80 hours - (select either weekend or weekday mode)
                    </p>
                    <p className="text-purple-100 leading-relaxed">
                      This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP Fico training professional.
                    </p>
                  </div>
                </div>

                {/* Industry relevant curriculum */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-indigo-400" />
                    Industry relevant curriculum
                  </h3>
                  <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                    <p className="text-indigo-100 leading-relaxed mb-4">
                      You learn the latest from us! Our curriculum and sap fico interview questions is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others.
                    </p>
                    <p className="text-indigo-100 leading-relaxed mb-4">
                      That's where the best SAP FICO training comes in. At VR IT Solutions, we offer the best SAP FICO training|coaching available in the city. Our trainers are experienced professionals who will teach you everything you need to know about this powerful SAP FICO Module.
                    </p>
                    <p className="text-indigo-100 leading-relaxed">
                      So if you are ready to take your business to the next level learn more about SAP FICO and its various features, this is the perfect online course for you!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={sapFicoFaqs} title="SAP FICO Training FAQs" theme="sap" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP FICO" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('sap-fico-training-in-hyderabad'))
        }}
      />
      
      {/* Review Structured Data */}
      {getReviewStructuredData('sap-fico-training-in-hyderabad') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData('sap-fico-training-in-hyderabad'))
          }}
        />
      )}
      </div>
    </>
  );
}
