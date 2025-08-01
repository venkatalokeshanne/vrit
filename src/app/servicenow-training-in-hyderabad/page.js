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
  Briefcase
} from 'lucide-react';

export const metadata = {
  title: 'Best ServiceNow Training in Hyderabad | #1 ServiceNow Course Institute | 100% Placement | VR IT Solutions',
  description: 'Best ServiceNow Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best ServiceNow online training in hyderabad with affordable fee and advanced curriculum.',
  keywords: 'ServiceNow training in Hyderabad, Best ServiceNow training in Hyderabad, ServiceNow training in Ameerpet, ServiceNow online training in Ameerpet, ServiceNow admin training, ServiceNow developer training in hyderabad, ServiceNow training institutes in Hyderabad, ServiceNow training institute in Ameerpet, ITSM training Hyderabad, ITOM training, ServiceNow certification training, ServiceNow placement assistance, ServiceNow job support, ServiceNow training Kukatpally, ServiceNow training Madhapur, ServiceNow training SR Nagar, ServiceNow training Dilsukhnagar, top ServiceNow institute Hyderabad, ServiceNow corporate training, ServiceNow weekend batches, ServiceNow live project training',
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
    title: 'Best ServiceNow Training in Hyderabad | #1 ServiceNow Course Institute | 100% Placement | VR IT Solutions',
    description: 'Call@9032734343. Best ServiceNow Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad. Get our Best ServiceNow online training in hyderabad with affordable fee and advanced curriculum.',
    url: 'https://www.vritsol.com/servicenow-training-in-hyderabad',
    siteName: 'VR IT Solutions',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Best ServiceNow Training in Hyderabad - VR IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best ServiceNow Training in Hyderabad | #1 ServiceNow Course Institute | 100% Placement',
    description: 'Best ServiceNow Training in Hyderabad, Ameerpet. Live projects, Coaching Center, job Placements, training institute in Hyderabad.',
    images: ['/logo.png'],
    creator: '@vritsolutions',
    site: '@vritsolutions',
  },
  alternates: {
    canonical: 'https://www.vritsol.com/servicenow-training-in-hyderabad',
    languages: {
      'en-US': 'https://www.vritsol.com/servicenow-training-in-hyderabad',
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
    'DC.title': 'Best ServiceNow Training in Hyderabad',
    'DC.creator': 'VR IT Solutions',
    'DC.subject': 'ServiceNow Training, ITSM Training, Technology Education',
    'DC.description': 'Professional ServiceNow training institute in Hyderabad offering comprehensive courses',
    author: 'vr it solutions',
    publisher: 'vr it solutions',
    owner: 'vr it solutions',
  },
};

export default function ServiceNowTraining() {
  const courseModules = [
    "Explore lists and forms",
    "Identify the significance of branding and learn how to apply it to the platform", 
    "Learn how to add users, groups, and roles",
    "Identify best practices pertaining to task management",
    "Learn how to configure notifications",
    "Get hands-on on how to manage data with tables, the configuration management database (CMDB), and import sets",
    "Learn how to run basic reports, as well as appreciate the benefits of performance analytics",
    "Know how to protect ServiceNow data",
    "Learn how to work with two key ServiceNow process applications: Knowledge Base and Service Catalog",
    "Understand how to create workflow activities and approvals", 
    "Get an overview of how to implement Service Level Agreements",
    "Identify various available script types",
    "Upgrade and clone instances, as well as create baseline performance metrics",
    "Capture and move configurations between instances",
    "Live Project"
  ];

  const whoShouldAttend = [
    "Graduates interested to enter into this field",
    "Professionals working on ITIL and using ServiceNow tool to further enhance their knowledge",
    "Software professionals, looking for lucrative careers in ServiceNow", 
    "Middle level managers, interested to switch their careers",
    "Business Analysts",
    "Technical managers"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive practical sessions",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace and give the service now interview questions are provide. This way, you tend to gain deeper insights and help you understand the concepts better."
    },
    {
      title: "Live project", 
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios."
    },
    {
      title: "Top notch faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, seasoned experts and even experienced faculty."
    },
    {
      title: "Learn ServiceNow in just 40 hours",
      description: "This is not exaggeration and you can surely achieve this. We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a ServiceNow professional."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in this area, so you are always ahead of others."
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO - Based on Your Successful Pattern */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Best ServiceNow Training in Hyderabad | ServiceNow Online Training | VR IT Solutions",
            "url": "https://www.vritsol.com/servicenow-training-in-hyderabad",
            "logo": "https://www.vritsol.com/logo.png",
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

      {/* Additional Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "review",
            "name": "ServiceNow Training in Hyderabad - VR IT Solutions",
            "aggregateRating": {
              "type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "9656"
            }
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
            "name": "ServiceNow Training in Hyderabad",
            "description": "Comprehensive 60-day ServiceNow training covering ITSM, ITOM, and practical implementation with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://www.vritsol.com"
            },
            "educationalCredentialAwarded": "ServiceNow Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P60D",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    ServiceNow Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                <div className="inline-block bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl px-6 py-3 mb-6 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-400" />
                    <span className="text-teal-400 font-semibold">+91-9032734343</span>
                    <span className="text-gray-300">|</span>
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold">Duration: 60 Days (Online & Classroom)</span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> is a prominent name in the Hyderabad&apos;s best ServiceNow training. We are one stop solution for people looking for top and best ServiceNow Training.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our trainers are highly qualified and experienced in providing high quality training in Hyderabad. The Certified Expert Group has created our content and curriculum of ServiceNow based on current industry needs. This allows the students to be industry ready professional, where they can handle most realtime scenarios.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <ArrowRight className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download Course Content
                  </button>
                </div>
              </div>
            </section>
            {/* What is ServiceNow */}
            <section className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What is ServiceNow?</h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  ServiceNow is a cloud company and is evolving a lot and offers its products to companies of all sizes – large, medium and small. It is a major player in Information Technology Service Management (ITSM) arena. ServiceNow has a robust cloud platform on top of which, any application can be built quickly.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Learning ServiceNow would help users of various organizational roles working within the ServiceNow platform. This platform is slowly evolving and has a great future in the long term.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-orange-400 font-semibold">VR IT Solutions</span> is one of the best service now training to offer well focused and career-oriented training program in ServiceNow.
                </p>
              </div>
            </section>

            {/* Why Should You Join This Course */}
            <section className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why should you join this course?</h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  With ServiceNow having great future in both India and abroad, it offers excellent value for professionals working in this platform and also for existing technocrats, who are interested to migrate to this new platform. ServiceNow is being used by most of the world&apos;s top multinationals, wherein professionals in this area are earning very high salaries when compared to other technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Make <span className="text-teal-400 font-semibold">VR IT solutions</span> as your first choice for Servicenow training in Hyderabad due to its systematic training methodology and state-of-the-art practical sessions! So, don&apos;t stay behind. Join now for a lucrative career.
                </p>
              </div>
            </section>

            {/* What Do You Learn */}
            <section className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What do you learn in this course?</h2>
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{module}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-300 text-sm">
                  <strong>Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
              <p className="text-gray-300 mt-4">
                This course is supplemented by relevant lab exercises & servicenow interview questions, lecture and group discussions as well as extensive hands-on practice.
              </p>
            </section>

            {/* Prerequisites and Who Should Attend */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Pre-requisites</h2>
                <p className="text-gray-300 leading-relaxed">
                  VR IT solutions haven&apos;t specified any key pre-requisites for doing this course. However, participants, who have prior knowledge on any similar platforms, may better appreciate this course.
                </p>
              </section>

              <section className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Who Should Attend</h2>
                <div className="space-y-3">
                  {whoShouldAttend.map((person, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{person}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Key Differentiators */}
            <section className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Key Differentiators</h2>
              <div className="grid gap-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/5">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-orange-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl border border-teal-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">How will I execute the Practicals?</h3>
                <p className="text-gray-300 leading-relaxed">
                  In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  This ServiceNow training in Hyderabad and ServiceNow Online Training course is designed to train the students with experience of the ServiceNow Tool from the end user, support team member, administrator and developer&apos;s perspective.
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-orange-400">
                  VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Your ServiceNow Journey?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                So, what are you waiting for? Join now to make ServiceNow as your career and get a highly paid job!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                  <ArrowRight className="w-5 h-5" />
                  Join Now
                </button>
                <button className="border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                  <Phone className="w-5 h-5" />
                  Call +91-9032734343
                </button>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="ServiceNow" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
