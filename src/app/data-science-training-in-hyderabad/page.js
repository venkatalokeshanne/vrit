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
  Brain,
  Database,
  BarChart3,
  LineChart,
  PieChart,
  Activity
} from 'lucide-react';

export const metadata = getPageMetadata('data-science-training-in-hyderabad');

export default function DataScienceTraining() {
  const dataScienceFaqs = [
    {
      question: "What is Data Science and why is it a high-demand career?",
      answer: "Data Science combines statistics, programming, and domain expertise to extract insights from data. It's one of the fastest-growing fields with excellent career prospects, offering salaries ranging from ₹6-25 LPA for data scientists and analysts."
    },
    {
      question: "What are the prerequisites for Data Science training?",
      answer: "Basic knowledge of mathematics, statistics, and logical thinking is helpful. No prior programming experience is required as our course covers Python programming from basics. Background in any analytical field is advantageous but not mandatory."
    },
    {
      question: "What is the duration and structure of Data Science training?",
      answer: "Our comprehensive Data Science training is a 100-day program covering statistics, Python programming, machine learning, data visualization, big data technologies like Hadoop and Spark, and real-world projects with hands-on practice."
    },
    {
      question: "Which tools and technologies will I learn in Data Science training?",
      answer: "You'll learn Python, R, SQL, Tableau, Power BI, Hadoop, Spark, Azure, machine learning libraries (scikit-learn, pandas, numpy), statistical analysis, and data visualization tools with practical implementation."
    },
    {
      question: "What career opportunities are available after Data Science training?",
      answer: "Data Science opens doors to roles like Data Scientist, Data Analyst, Machine Learning Engineer, Business Intelligence Analyst, Data Engineer, Research Scientist, and Consultant. Companies across all industries actively hire data professionals."
    },
    {
      question: "Do you provide hands-on projects and real-world experience?",
      answer: "Yes, our training includes multiple hands-on projects using real datasets, case studies from various industries, and a capstone project. Students build a comprehensive portfolio demonstrating practical data science skills."
    },
    {
      question: "Is Data Science suitable for non-technical professionals?",
      answer: "Yes, Data Science welcomes professionals from various backgrounds including business, finance, marketing, and healthcare. Our course is designed to teach technical skills progressively, making it accessible to non-technical professionals."
    },
    {
      question: "Do you cover machine learning and artificial intelligence concepts?",
      answer: "Absolutely! The curriculum includes comprehensive machine learning concepts, algorithms, deep learning basics, artificial intelligence applications, and practical implementation using Python libraries and frameworks."
    },
    {
      question: "What support do you provide for job placement in Data Science?",
      answer: "We provide 100% placement assistance including portfolio development, interview preparation, mock interviews, job referrals to top companies, and guidance on building a strong professional profile in the data science community."
    },
    {
      question: "How do you keep the curriculum updated with latest industry trends?",
      answer: "Our curriculum is updated every 6 months to include latest tools, technologies, and industry best practices. We incorporate feedback from industry experts and alumni to ensure relevance to current market demands."
    }
  ];

  const curriculumItems = [
    "Get an overview of business intelligence and business analysis",
    "Get hands-on on descriptive statistics of data analysis",
    "Learn how to work on Tableau, along with few practical examples",
    "Understand R and data exploration to R",
    "Learn how to create decision trees with examples",
    "Gain expertise in data collection and data mining",
    "Get an overview of Big Data Technologies and their significance in industry",
    "Learn how to work on Loop functions and debugging tools",
    "Learn how to run parametric tests",
    "Learn how to mine text data",
    "Learn deeper aspects of Python programming and machine learning in Python",
    "Learn how to use Hadoop for Data Science",
    "Learn how to use Spark for Data Science",
    "Know how to deploy methods on Azure",
    "And a live project to get practical exposure!"
  ];

  const whoShouldAttend = [
    "Managers",
    "Data analysts",
    "Business analysts",
    "Fresh graduates with basic knowledge in programming & statistical concepts",
    "Software professionals looking to switch their careers",
    "Middle level managers, looking to take up lucrative careers in Data Science"
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
      title: "Top notch faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle managers, data scientists and even experienced faculty from IIMs, IITs and other reputed institutes."
    },
    {
      title: "Learn data science in just 200 hours (select either weekend or weekday mode)",
      description: "Considering the pace, you have set to redefine your career, we also share the same responsibility to make you industry ready professional within the shortest possible time, without compromising on quality. Our curriculum is designed in such a way that we ensure that you get up to the speed as early as possible to start a career as a data scientist."
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
            "name": "Best Data Science Training in Hyderabad | Data Science Online Training | VR IT Solutions",
            "url": "https://vrit-ten.vercel.app/data-science-training-in-hyderabad",
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

      {/* Additional Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "review",
            "name": "Data Science Training in Hyderabad - VR IT Solutions",
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
            "name": "Data Science Training in Hyderabad",
            "description": "Comprehensive 100-day Data Science training covering Python, R, Machine Learning, Big Data Technologies with 100% placement assistance",
            "provider": {
              "@type": "Organization",
              "name": "VR IT Solutions",
              "sameAs": "https://vrit-ten.vercel.app"
            },
            "educationalCredentialAwarded": "Data Science Certification",
            "courseMode": ["Online", "Classroom"],
            "duration": "P100D",
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
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Data Science Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/logo.png"
                    alt="Data Science Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 100 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg hover:scale-110 shadow-lg hover:shadow-xl">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                    Enquire Now
                  </button>
                  <button className="border border-teal-400/60 hover:bg-teal-400/10 text-teal-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-teal-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-teal-400/20 hover:scale-105">
                    <Download className="w-5 h-5 animate-bounce" />
                    Download Course Content
                  </button>
                </div>
              </div>
            </section>
            
            {/* Overview Section - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
                Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Data science blends scientific methods, processes, algorithms and systems to generate meaningful knowledge or insights from data in various modes: structured or unstructured. This process of extracting meaningful insights becomes all more significant and challenging, when data grows exponentially, generated from various sources. In other words, data science is all about using this data in creative ways to generate value for business for effective decision making.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VRIT Solutions</span> is one of the best data science online training we offer data science online course with well focused and career-oriented training program in Datascience. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Significance of Data Science in AI - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-emerald-400 animate-pulse" />
                Significance of Data Science in AI
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Data scientists can use a variety of AI tools to generate meaningful insights. Though Data Science is an interdisciplinary field encompassing various domains, the beauty of the course is that it does not require any formal degree to get into this area of knowledge. The skills in subjects like mathematics, statistics/operations research, business or many others can be leveraged with strong foundation in basic mathematics and computer programming. Accordingly, data scientists may apply quantitative techniques to get into deeper aspects of mining for generating insights, i.e. inferential models, segmentation analysis, time series forecasting, synthetic control experiments and more. Hence the data-driven insights are quite crucial in offering strategic direction, wherein data scientists act as consultants, offering the right direction to various business stakeholders on how to act on such inferences for effective decision making.
                  </p>
                </div>
                
                {/* About the course subsection */}
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-400" />
                    About the course
                  </h3>
                  <p className="text-teal-100 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">VRIT</span> is one of the few institutes in Hyderabad that offers data science online course well focused, career-oriented training program in Data Science. Due to rapid data explosion, thousands of jobs are getting generated on a day to day basis, offering an attractive career proposition for future data science professionals. However, a career driven course, backed by quality infrastructure and support is what students require to make a head start in the Data Science course.
                  </p>
                </div>
              </div>
            </section>

            {/* Curriculum Overview - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-400" />
                Curriculum overview
              </h2>
              <div className="grid gap-4">
                {curriculumItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-400/20 hover:bg-amber-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border border-yellow-400/30 rounded-xl">
                <p className="text-yellow-200 font-semibold">
                  <strong className="text-yellow-300">Note:</strong> This curriculum is just indicative and is not exhaustive. There might be more topics covered in this curriculum.
                </p>
              </div>
            </section>

            {/* What's so unique about our Institute - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-rose-400 animate-pulse" />
                What&apos;s so unique about our Institute?
              </h2>
              <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                <p className="text-rose-100 leading-relaxed">
                  Our Institute is one of the best Institutes in Hyderabad, offering excellent data science online course, along with live projects to make you a thorough bred professional. Our training is designed to make you confident to crack the toughest of the interviews to get placed in top data science companies.
                </p>
              </div>
            </section>

            {/* Key Differentiators - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-violet-400" />
                Our Key Differentiators
              </h2>
              <div className="grid gap-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20 hover:bg-violet-500/15 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-violet-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-violet-100 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who should do this course - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-cyan-400" />
                Who should do this course?
              </h2>
              <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20 mb-6">
                <p className="text-cyan-100 leading-relaxed mb-4">
                  <span className="text-cyan-400 font-semibold">VRIT solutions</span> is one of the top-notch institutes in Data Science course, providing the best learning experience with adequate practical exposure to groom you into a all round Data Science professional. This course is designed in such a way that you can immediately get started in the career and take up projects to showcase your expertise.
                </p>
                <p className="text-cyan-100 leading-relaxed mb-4">
                  This course is suitable for the following set of professionals:
                </p>
              </div>
              <div className="space-y-3">
                {whoShouldAttend.map((person, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20 hover:bg-cyan-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-100 font-medium">{person}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why learn Data Science - Green Theme */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400 animate-pulse" />
                Why learn Data Science?
              </h2>
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                <p className="text-green-100 leading-relaxed">
                  <span className="text-green-400 font-semibold">VRIT solutions</span> is one of the best Data Science Online Training institutes in Hyderabad that offers industry relevant curriculum and Data science Interview Questions, backed by state-of-the-art infrastructure to make you a thorough bred professional in this area of knowledge. To manage large amounts of data, data scientists are required, who can handle large volumes of data; draw inferences and generate spot trends upon the data.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={dataScienceFaqs} title="Data Science Training FAQs" theme="dataScience" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Data Science Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Data Science as your career and get a highly paid job!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-xl hover:shadow-orange-500/30 hover:scale-105">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                    Join Now
                  </button>
                  <button className="border border-pink-400/60 hover:bg-pink-400/10 text-pink-300 hover:text-white px-8 py-4 rounded-xl font-semibold hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-pink-400/20">
                    <Phone className="w-5 h-5 animate-bounce" />
                    Call +91-9032734343
                  </button>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="Data Science" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData('data-science-training-in-hyderabad'))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData('data-science-training-in-hyderabad'))
        }}
      />
      </div>
    </>
  );
}