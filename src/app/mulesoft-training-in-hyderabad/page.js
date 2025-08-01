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
  Network,
  Layers,
  Link
} from 'lucide-react';

export const metadata = {
  title: 'Best MuleSoft Training in Hyderabad | #1 MuleSoft Course Institute | 100% Placement | VR IT Solutions',
  description: 'Best MuleSoft Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best MuleSoft online training in hyderabad with affordable fee and advanced curriculum.',
  keywords: 'MuleSoft training in Hyderabad, Best MuleSoft training in Hyderabad, MuleSoft training in Ameerpet, MuleSoft online training in Ameerpet, Mule ESB training, MuleSoft Anypoint Platform training, MuleSoft training institutes in Hyderabad, MuleSoft training institute in Ameerpet, Integration training Hyderabad, MuleSoft certification training, MuleSoft placement assistance, MuleSoft job support, MuleSoft training Kukatpally, MuleSoft training Madhapur, MuleSoft training SR Nagar, MuleSoft training Dilsukhnagar, top MuleSoft institute Hyderabad, MuleSoft corporate training, MuleSoft weekend batches, MuleSoft live project training',
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
    title: 'Best MuleSoft Training in Hyderabad | #1 MuleSoft Course Institute | 100% Placement | VR IT Solutions',
    description: 'Call@9032734343. Best MuleSoft Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best MuleSoft online training in hyderabad with affordable fee and advanced curriculum.',
    url: 'https://vrit-ten.vercel.app/mulesoft-training-in-hyderabad',
    siteName: 'VR IT Solutions',
    images: [
      {
        url: 'https://vrit-ten.vercel.app/mulesoft.jpg',
        width: 1200,
        height: 630,
        alt: 'MuleSoft Training Course in Hyderabad - VR IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best MuleSoft Training in Hyderabad | #1 MuleSoft Course Institute | 100% Placement',
    description: 'Best MuleSoft Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad.',
    images: ['https://vrit-ten.vercel.app/mulesoft.jpg'],
    creator: '@vritsolutions',
    site: '@vritsolutions',
  },
  alternates: {
    canonical: 'https://vrit-ten.vercel.app/mulesoft-training-in-hyderabad',
    languages: {
      'en-US': 'https://vrit-ten.vercel.app/mulesoft-training-in-hyderabad',
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
    'DC.title': 'Best MuleSoft Training in Hyderabad',
    'DC.creator': 'VR IT Solutions',
    'DC.subject': 'MuleSoft Training, Integration Training, Technology Education',
    'DC.description': 'Professional MuleSoft training institute in Hyderabad offering comprehensive courses',
    author: 'vr it solutions',
    publisher: 'vr it solutions',
    owner: 'vr it solutions',
  },
};

export default function MuleSoftTraining() {
  const courseStructure = [
    "Overview of Mule – Getting started",
    "Introduction to ESB",
    "Lab Documentation and WorkSpace Downloads",
    "Basics of Mule",
    "Standalone Deployments and MMC",
    "Consumption of REST and SOAP Webservices",
    "Leveraging Database Endpoint, Externalizing properties and Domains",
    "Leveraging File End point and JMS endpoint",
    "Implementing Splitter Aggregator Pattern and Tuning Performance",
    "Transformers",
    "Learn how to handle exceptions in Mule",
    "Live Project"
  ];

  const whoCanDo = [
    "Developers (various languages)",
    "Business Architects",
    "Program Managers",
    "System Integrators",
    "Solution Consultants",
    "Fresh graduates, who are looking for a career in MuleSoft"
  ];

  const whyVRIT = [
    "Free Demo sessions to get to know how the course is conducted",
    "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
    "Easy to follow, since most of the course is practical oriented with live industry cases",
    "Classes driven by real time experts - experienced professionals and faculty from reputed institutes",
    "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles",
    "Complete assistance to help you crack interviews – we provide mulesoft interview questions, sample resumes and tips",
    "Get trained in MuleSoft in just 45 hours - select either weekend or weekday mode",
    "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry"
  ];

  const trainingModes = [
    "Online Training",
    "ClassRoom Training", 
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
            "name": "Best MuleSoft Training in Hyderabad | MuleSoft Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/mulesoft-training-in-hyderabad",
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
            "name": "MuleSoft Training in Hyderabad",
            "description": "Comprehensive 45-day MuleSoft training covering Anypoint Platform, ESB, API integration, and certification preparation with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "MuleSoft Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P45D",
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
            
            {/* Hero Section - MuleSoft Training in Hyderabad with 100% Placement Guarantee */}
            <section className="bg-gradient-to-br from-orange-500/15 via-red-600/20 to-pink-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    MuleSoft Training in Hyderabad
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl">with 100% Placement Guarantee</span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/mulesoft.jpg"
                    alt="MuleSoft Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-red-300 font-semibold">Duration: 45 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <p className="text-orange-100 leading-relaxed">
                      VRIT Solutions distinguished itself as the leading MuleSoft Training institute in Hyderabad and MuleSoft Online Trainings. Our Trainers are highly qualified and have high experience in providing quality classroom and online training on MuleSoft.
                    </p>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                    <p className="text-red-100 leading-relaxed">
                      Mule the prominent section at MuleSoft. As it is an event based architecture, the actions in the Mule Network are generated through the actions taking place in Mule or through external systems. Payload is the data from each event. In order to connect applications, devices, and data from around the world, MuleSoft allows you to easily connect anything with the Anypoint platform.
                    </p>
                  </div>
                  <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                    <p className="text-pink-100 leading-relaxed">
                      MuleSoft's Anypoint Platform™ is the world's leading integration platform for SOA, SaaS and APIs. Mulesoft offers exceptional business agility to organizations by easily integrating applications, services and managing events in real time with universal connectivity in both the modes – on premise and in the cloud, which is executed with an API-led approach.
                    </p>
                  </div>
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <p className="text-orange-100 leading-relaxed">
                      Using this platform, organizations can re-architect their SOA infrastructure from legacy systems, proprietary platforms and customer integration code to generate business agility. Organizations can also migrate technology infrastructure to the public or private cloud and prioritize adoption of SaaS applications and other cloud based technologies.
                    </p>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                    <p className="text-red-100 leading-relaxed">
                      VR IT Solutions is one of the best Mulesoft training in Hyderabad to offer well focused and career-oriented training program in MuleSoft. So, get started by clicking here.
                    </p>
                  </div>
                  <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                    <p className="text-pink-100 leading-relaxed">
                      Students and professionals who intend to expand their careers with their interest in analysis can take this course with MuleSoft Classroom Training in Hyderabad or MuleSoft Online Training.
                    </p>
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
            
            {/* Why should you do this course? */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why should you do this course?
              </h2>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With rapid technological advancements, this course is slowly gaining importance in the market. The uniqueness of this course is it teaches you mule in step by step manner starting from basics to advanced without the requirement of any previous integration background.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    VR IT Solutions is one of the few institutes in Hyderabad to offer the best and innovative training in MuleSoft training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Structure */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Course Structure
              </h2>
              <div className="grid gap-4 mb-6">
                {courseStructure.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <Network className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-purple-100">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                <p className="text-violet-100 leading-relaxed font-semibold">
                  Note: This course is 70% practical and 30% theory.
                </p>
              </div>
              <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20 mt-4">
                <p className="text-indigo-100 leading-relaxed">
                  VR IT solutions is one of the best institutes for Mulesoft online training. So, click here to get started.
                </p>
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
                    There are no specific pre-requisites for doing this course. However, basic knowledge in SOAP, REST and Messaging would surely help.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    Learn MuleSoft training online and offline modes by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.
                  </p>
                </div>
              </div>
            </section>

            {/* Why VR IT Solutions */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why VR IT Solutions
              </h2>
              <div className="grid gap-4">
                {whyVRIT.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                    <Star className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-cyan-100">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How will I execute the Practicals? */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                How will I execute the Practicals?
              </h2>
              <div className="space-y-6">
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed">
                    In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.
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
                  Why choose VR IT Solutions?
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

            {/* Placement Guarantee */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                100% Placement Support
              </h2>
              <div className="space-y-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    After successful completion of the MuleSoft Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed font-semibold">
                    VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="MuleSoft" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
