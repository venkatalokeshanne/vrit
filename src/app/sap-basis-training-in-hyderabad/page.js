import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
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
  Layers
} from 'lucide-react';

export const metadata = {
  title: 'Best SAP Basis Training in Hyderabad | #1 SAP Basis Course Institute | 100% Placement | VR IT Solutions',
  description: 'Best SAP Basis Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best SAP Basis online training in hyderabad with affordable fee and advanced curriculum.',
  keywords: 'SAP Basis training in Hyderabad, Best SAP Basis training in Hyderabad, SAP Basis training in Ameerpet, SAP Basis online training in Ameerpet, SAP Administration training, SAP System Administration training, SAP Basis training institutes in Hyderabad, SAP Basis training institute in Ameerpet, SAP Security training, SAP Basis certification training, SAP Basis placement assistance, SAP Basis job support, SAP Basis training Kukatpally, SAP Basis training Madhapur, SAP Basis training SR Nagar, SAP Basis training Dilsukhnagar, top SAP Basis institute Hyderabad, SAP Basis corporate training, SAP Basis weekend batches, SAP Basis live project training',
  authors: [{ name: 'VR IT Solutions' }],
  publisher: 'VR IT Solutions',
  category: 'Education',
  classification: 'Training',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Best SAP Basis Training in Hyderabad | #1 SAP Basis Course Institute | 100% Placement | VR IT Solutions',
    description: 'Call@9032734343. Best SAP Basis Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best SAP Basis online training in hyderabad with affordable fee and advanced curriculum.',
    url: 'https://vrit-ten.vercel.app/sap-basis-training-in-hyderabad',
    siteName: 'VR IT Solutions',
    images: [
      {
        url: 'https://vrit-ten.vercel.app/sap-basis.jpg',
        width: 1200,
        height: 630,
        alt: 'SAP Basis Training Course in Hyderabad - VR IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SAP Basis Training in Hyderabad | #1 SAP Basis Course Institute | 100% Placement',
    description: 'Best SAP Basis Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad.',
    images: ['https://vrit-ten.vercel.app/sap-basis.jpg'],
    creator: '@vritsolutions',
    site: '@vritsolutions',
  },
  alternates: {
    canonical: 'https://vrit-ten.vercel.app/sap-basis-training-in-hyderabad',
    languages: {
      'en-US': 'https://vrit-ten.vercel.app/sap-basis-training-in-hyderabad',
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.3850;78.4867',
    'ICBM': '17.3850, 78.4867',
    'DC.title': 'Best SAP Basis Training in Hyderabad',
    'DC.creator': 'VR IT Solutions',
    'DC.subject': 'SAP Basis Training, SAP Administration Training, Technology Education',
    'DC.description': 'Professional SAP Basis training institute in Hyderabad offering comprehensive courses',
    author: 'vr it solutions',
    publisher: 'vr it solutions',
    owner: 'vr it solutions',
  },
};

export default function SAPBasisTraining() {
  const courseStructure = [
    "Introduction to ERP",
    "Get an overview of SAP R/3",
    "Learn about various SAP Versions",
    "Learn how to use SAP Directory Structure",
    "Overview of Oracle Directory Structure",
    "Learn aboutUser Administration",
    "Get an overview of SAP Profile",
    "Learn about various operation modes",
    "Learn advanced concepts in client administration",
    "Learn advanced concepts in RFC and Transports",
    "Get an overview of SAP Upgrade (SPAM/SAINT)",
    "Learn about other upgrades such as Kernel",
    "Learn how to backup and restore",
    "Learn about various SADBA/BRTOOLS",
    "Learn how to System copy/Refresh Live Project"
  ];

  const whoCanDo = [
    "SAP functional consultants, who want to get into SAP administration",
    "System administrators",
    "Database administrators",
    "IT security professionals, interested to make a career in SAP Basis",
    "Software professionals, interested to switch their careers",
    "Fresh graduates, who want to make a career in SAP Basis"
  ];

  const prerequisites = [
    "Basic knowledge of ERP",
    "Basic knowledge of various SAP modules",
    "Basic knowledge of system and database administration",
    "Basic knowledge of web servers",
    "Knowledge of one programming language such as Java will be added advantage"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      desc: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project",
      desc: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Top notch faculty",
      desc: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, data scientists and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Get trained in SAP Basis in just 80 hours – (select either weekend or weekday mode)",
      desc: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a SAP Basis professional."
    },
    {
      title: "Industry relevant curriculum",
      desc: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    },
    {
      title: "How will I execute the Practicals?",
      desc: "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux and Unix."
    }
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
            "name": "Best SAP Basis Training in Hyderabad | SAP Basis Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/sap-basis-training-in-hyderabad",
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
            "name": "SAP Basis Training in Hyderabad",
            "description": "Comprehensive 50-day SAP Basis training covering system administration, installation, configuration, and performance optimization with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "SAP Basis Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P50D",
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
            
            {/* Hero Section - SAP Basis Training in Hyderabad */}
            <section className="bg-gradient-to-br from-orange-500/15 via-red-600/20 to-pink-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    SAP Basis Training in Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sap-basis.jpg"
                    alt="SAP Basis Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-orange-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-orange-500/25 to-red-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-orange-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span className="text-red-300 font-semibold">Duration: 50 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <ArrowRight className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="border border-red-400/60 hover:bg-red-400/10 text-red-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-red-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download Course Content
                  </button>
                </div>
              </div>
            </section>
            
            {/* About this course */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                About this course
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    SAP Basis covers the overall administration of the SAP system and includes various tasks such as installation, configuration, load balancing and performance of SAP applications running on Java stack and SAP ABAP. This also includes the maintenance of different services related to database, operating system, application and web servers in SAP system environment and also commencing and stopping the application.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    VR IT Solutions is one of the best SAP GRC TRAINING to offer well focused and career-oriented training program in sap GRC training & sap security training So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you do this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why should you do this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With SAP being a huge business application with lot of intertwined processes, administering an SAP system is a huge challenge and hence professionals trained in this area can find lucrative opportunities as Basis administrators, SAP security consultants and get into other similar roles. Currently, there is lot of demand for SAP Basis professionals and hence it is the right time to kick start this course.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the software training institutes in Hyderabad to offer sap grc access control training best and balanced training in SAP Basis that is well suited to help you embark on the right path of success. So, get started by clicking here
                  </p>
                </div>
              </div>
            </section>

            {/* Course curriculum */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Course curriculum
              </h2>
              <div className="grid gap-4 mb-6">
                {courseStructure.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <Server className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed font-semibold">
                    Note: The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    With VR IT Solutions providing the best sap basis online training, this course helps professionals to get lucrative jobs in SAP administration, SAP security and other related jobs.
                  </p>
                </div>
              </div>
            </section>

            {/* What are the pre-requisites for this course? */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What are the pre-requisites for this course?
              </h2>
              <div className="grid gap-4">
                {prerequisites.map((prerequisite, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-xl border border-rose-400/20">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-rose-100">{prerequisite}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who can do this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Who can do this course?
              </h2>
              <div className="grid gap-4 mb-6">
                {whoCanDo.map((candidate, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{candidate}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                <p className="text-yellow-100 leading-relaxed">
                  Learn SAP Basis by real-time experts from VR IT Solutions with practical scenarios and sap grc interview questions in-depth explanation of each and every topic.
                </p>
              </div>
            </section>

            {/* Our Key Differentiators */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Key Differentiators
              </h2>
              <div className="space-y-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-bold text-cyan-200 mb-3">{differentiator.title}</h3>
                    <p className="text-cyan-100 leading-relaxed">{differentiator.desc}</p>
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

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAP Basis" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
