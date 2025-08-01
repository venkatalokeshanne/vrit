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
  Shield
} from 'lucide-react';

export const metadata = {
  title: 'Best Pega Training in Hyderabad | #1 Pega Course Institute | 100% Placement | VR IT Solutions',
  description: 'Best Pega Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best Pega online training in hyderabad with affordable fee and advanced curriculum.',
  keywords: 'Pega training in Hyderabad, Best Pega training in Hyderabad, Pega training in Ameerpet, Pega online training in Ameerpet, Pega BPM training, Pega CRM training in hyderabad, Pega training institutes in Hyderabad, Pega training institute in Ameerpet, Pega certification training, Pega placement assistance, Pega job support, Pega training Kukatpally, Pega training Madhapur, Pega training SR Nagar, Pega training Dilsukhnagar, top Pega institute Hyderabad, Pega corporate training, Pega weekend batches, Pega live project training',
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
    title: 'Best Pega Training in Hyderabad | #1 Pega Course Institute | 100% Placement | VR IT Solutions',
    description: 'Call@9032734343. Best Pega Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best Pega online training in hyderabad with affordable fee and advanced curriculum.',
    url: 'https://vrit-ten.vercel.app/pega-training-in-hyderabad',
    siteName: 'VR IT Solutions',
    images: [
      {
        url: 'https://vrit-ten.vercel.app/pega.jpg',
        width: 1200,
        height: 630,
        alt: 'Pega Training Course in Hyderabad - VR IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pega Training in Hyderabad | #1 Pega Course Institute | 100% Placement',
    description: 'Best Pega Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad.',
    images: ['https://vrit-ten.vercel.app/pega.jpg'],
    creator: '@vritsolutions',
    site: '@vritsolutions',
  },
  alternates: {
    canonical: 'https://vrit-ten.vercel.app/pega-training-in-hyderabad',
    languages: {
      'en-US': 'https://vrit-ten.vercel.app/pega-training-in-hyderabad',
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
    'DC.title': 'Best Pega Training in Hyderabad',
    'DC.creator': 'VR IT Solutions',
    'DC.subject': 'Pega Training, BPM Training, Technology Education',
    'DC.description': 'Professional Pega training institute in Hyderabad offering comprehensive courses',
    author: 'vr it solutions',
    publisher: 'vr it solutions',
    owner: 'vr it solutions',
  },
};

export default function PegaTraining() {
  const courseTopics = [
    "Overview of BPM",
    "Project implementation methodology, class structures and hierarchy",
    "Data modelling",
    "Process flow",
    "User Interface",
    "Declarative rules",
    "Case Management",
    "Database Concepts of PRPC",
    "Activities",
    "Integration with external systems",
    "Rule Management & Security",
    "Performance, PRPC Guardrails & Topics revision And a live project"
  ];

  const whoCanAttend = [
    "Beginners",
    "Business consultants",
    "Corporate managers, who intend to switch their careers",
    "Project managers, who want to understand the concepts for providing realistic effort estimates for projects",
    "Software engineers, who have penchant to get into business domain"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project",
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Learn Pega in just 40 hours (select either weekend or weekday mode)",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a Pega professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum and pega interview questions is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    },
    {
      title: "How will I execute the Practicals?",
      description: "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems like Windows."
    }
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
            "name": "Best Pega Training in Hyderabad | Pega Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/pega-training-in-hyderabad",
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
            "name": "Pega Training in Hyderabad",
            "description": "Comprehensive 70-day Pega training covering BPM, CRM Applications, and Process Commander with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "Pega Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P70D",
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
            
            {/* Hero Section - Pega Training In Hyderabad */}
            <section className="bg-gradient-to-br from-pink-500/15 via-rose-600/20 to-red-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-400/30 shadow-2xl shadow-pink-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Pega Training In Hyderabad
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/pega.jpg"
                    alt="Pega Training Course in Hyderabad - VR IT Solutions"
                    className="w-full object-cover border-2 border-pink-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-pink-500/25 to-rose-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-pink-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-pink-400" />
                      <span className="text-pink-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-rose-400" />
                      <span className="text-rose-300 font-semibold">Duration: 70 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                    <p className="text-pink-100 leading-relaxed">
                      VRIT Solutions is a prominent name in the Hyderabad's best PEGA training institutes. We are one stop solution for people looking for top and best PEGA Training in Hyderabad and PEGA Online Training.
                    </p>
                  </div>
                  <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                    <p className="text-rose-100 leading-relaxed">
                      Our trainers are highly qualified and experienced in providing high quality training in Hyderabad. The Certified Expert Group has created our content and curriculum of PEGA based on current industry needs. This allows the students to be industry ready professional, where they can handle most realtime scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <ArrowRight className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="border border-rose-400/60 hover:bg-rose-400/10 text-rose-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-rose-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
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
                    PEGA is an application development tool used in BPM and CRM Applications, developed by Pega Systems Inc., Cambridge, Massachusetts. The uniqueness of this software is it doesn't uses any programming/coding to develop web & enterprise applications and it s a Java backend engine. Pega comes with drag and drop UI and offers easily configurable settings, which in turn helps to develop the applications faster and with high quality, compared to Java. This platform offers the capability by streamlining, automating and documenting business processes in a way that enables easy consolidation of multi-stream processing into one system.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    VR IT Solutions is one of the Pega training in Hyderabad to offer well focused and career-oriented training program in Pega. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Why should you join this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why should you join this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Organizations across the world are developing applications in Pega on a greater scale, compared to any other tools and hence it makes sense to get hands-on on this tool to make an excellent career in Pega. VR IT solutions offers Pega online training also the most comprehensive, practical and upto date Pega training. It should be appreciated that several frameworks are build on Pega Process Commander to support various aspects of business requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* What do you learn in this course? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What do you learn in this course?
              </h2>
              <div className="grid gap-4 mb-6">
                {courseTopics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                <p className="text-yellow-100 leading-relaxed mb-4">
                  <strong>Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
                <p className="text-yellow-100 leading-relaxed">
                  VR IT Solutions is one of the few institutes in Hyderabad to offer excellent Online Pega training in hyderabad and pega classroom training in Hyderabad.
                </p>
              </div>
            </section>

            {/* Pre-requisites and Who can attend */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Pre-requisites of the course
                </h2>
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed">
                    VR IT solutions haven't prescribed any specific prerequisites. However, knowledge of CRM and BPM would be an added advantage and helps the participants to better appreciate the course.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Who can attend this course
                </h2>
                <div className="space-y-3">
                  {whoCanAttend.map((person, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-cyan-100 text-sm font-medium">{person}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Our Key Differentiators */}
            <section className="bg-gradient-to-br from-purple-600/15 via-pink-600/20 to-rose-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Our Key Differentiators
              </h2>
              <div className="space-y-8">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-purple-100 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    Get Realtime PEGA online and classroom training in Hyderabad from basics to advanced level with 100% placement. Pega Training in Hyderabad by Realtime experts from top MNC's. Get complete practical way of exposure at Affordable fee. Enroll now for FREE DEMO..!
                  </p>
                </div>
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    After successful completion of the PEGA Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed font-semibold">
                    VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="Pega" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
