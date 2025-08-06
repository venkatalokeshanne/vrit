import React from 'react';
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
  Briefcase
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('snowflake-training-in-hyderabad');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('snowflake-training-in-hyderabad');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async function SnowflakeTrainingInHyderabad() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('snowflake-training-in-hyderabad');
  const mainImageUrl = metadata?.mainImage || '/logo.png';



  const courseModules = [
    "An overview of Snowflake Platform and its applications in the business",
    "Getting started",
    "Some basic terminology",
    "Snowflake Eco-system and related concepts",
    "Service Billing model and its practical applications",
    "An overview of Snowflake Editions",
    "Snowflake architecture",
    "Virtual Warehouse",
    "Database objects",
    "Few Demo sessions including installation and using SnowSQL",
    "Data import and export with practical demos",
    "Querying feature in Snowflake",
    "Monitoring Snowflake with a few live examples",
    "Course Summary and evaluation"
  ];

  const snowflakeFaqs = [
    {
      question: "What is Snowflake and why should I learn it?",
      answer: "Snowflake is a cloud-based data warehousing platform that offers seamless collaboration, performance, flexibility and near-infinite scalability. With 4000+ active customers and 450+ million jobs listed daily, learning Snowflake opens doors to lucrative careers in data analytics and warehousing with excellent growth prospects."
    },
    {
      question: "What are the prerequisites for Snowflake training?",
      answer: "Basic understanding of databases, SQL concepts, and data warehousing principles is helpful. Knowledge of cloud computing concepts is beneficial but not mandatory. Our course covers all foundational concepts needed to master Snowflake from scratch."
    },
    {
      question: "What is the duration and fee structure for Snowflake training?",
      answer: "Our comprehensive Snowflake training is a 45-day program with flexible scheduling options including online and classroom modes. The course includes live sessions, practical demos, and hands-on practice. Contact us at +91-9032734343 for current fee structure and available discounts."
    },
    {
      question: "Do you provide job placement assistance after Snowflake training?",
      answer: "Yes, VR IT Solutions offers 100% placement support including resume preparation, career guidance, mock tests and interviews, and 24/7 support. We have successfully placed students in major MNC companies and offer guaranteed placement program for deserving students."
    },
    {
      question: "What career opportunities are available after Snowflake training?",
      answer: "Snowflake professionals can work as Data Engineer, Data Analyst, Cloud Data Architect, Snowflake Developer, Business Intelligence Developer, and Data Warehouse Specialist. With booming opportunities in data analytics and warehousing, this field offers excellent career growth and hefty pay packages."
    },
    {
      question: "What training modes do you offer for Snowflake course?",
      answer: "We offer multiple training modes including Online Training, Classroom Training, and Job Support. All modes include real-time project explanation, backup classes, and comprehensive hands-on practice sessions to ensure thorough learning."
    },
    {
      question: "How does Snowflake differ from traditional data warehousing solutions?",
      answer: "Snowflake is a fully managed cloud service that offers unique architecture separating compute and storage, automatic scaling, multi-cloud support (AWS, Azure, GCP), and pay-per-use pricing model. It provides better performance, flexibility, and cost-effectiveness compared to traditional on-premise solutions."
    },
    {
      question: "What practical experience will I gain during the course?",
      answer: "The course includes extensive hands-on practice sessions, live projects, demo sessions with installation and SnowSQL usage, data import/export practical demos, and real-time project explanations to make you job-ready upon completion."
    },
    {
      question: "Which cloud platforms does Snowflake support?",
      answer: "Snowflake can run on multiple cloud platforms including Amazon S3, Microsoft Azure, and Google Cloud Platform. This multi-cloud capability provides flexibility and allows organizations to choose their preferred cloud infrastructure."
    },
    {
      question: "What support do you provide during and after the course?",
      answer: "We provide comprehensive support including backup classes, 24/7 support, career guidance, mock tests and interviews, free resume preparation, and continuous mentoring. Our trainers are available for guidance throughout your Snowflake career journey."
    }
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

      {/* Additional Review Schema */}
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
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Snowflake Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Snowflake Training Course in Hyderabad - VR IT Solutions"
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

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> is recognized for providing Realtime Snowflake Training in Hyderabad / Datalake Online Training throughout world.
                </p>

                <CourseActionButtons 
                  courseName="Snowflake Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Snowflake Training Introduction - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                Snowflake Training Introduction
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Cloud computing and cloud storage has revolutionized the way mundane data sources are managed and maintained. In this context, a cloud-based storage and analytics service – Snowflake is rapidly creating inroads and is transforming the way data is managed across organizations. Snowflake is the proprietary platform of Snowflake Inc., a cloud computing-based data warehousing company, based in Bozeman, Montana.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Snowflake offers a single, global platform of your complete database ecosystem, offering seamless collaboration across multiple business entities. This platform offers the right mix of performance, flexibility and near-infinite scalability to easily upload, combine, analyze and authentically share your data anywhere, anytime. It is a fully managed service that is easy to work while letting you power a myriad number of concurrent workloads. And the best part is it can run on multiple cloud platforms like Amazon S3, Microsoft Azure, and Google Cloud Platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Why to learn Snowflake - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400 animate-pulse" />
                Why to learn Snowflake?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    With booming opportunities in data analytics and warehousing, now is the right opportunity for professionals and students to get trained in this rapidly innovative platform to reap huge benefits in terms of career growth, newer job roles, and of course hefty pay packages. Several companies are currently running snowflake on their platforms, having more than 4000 active accounts. Above all, with 4000+ active customers and 450+ million jobs in Snowflake getting listed daily, the future looks extremely bright in this technology segment.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    We at <span className="text-emerald-400 font-semibold">VRIT Solutions</span> have designed a comprehensive Snowflake online training program for professionals and students alike to jump-start their careers in this area of specialization. This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready. So, what are you waiting for?
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    Make <span className="text-emerald-400 font-semibold">VRIT Solutions</span> your first choice for Snowflake training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects. We offer the best-in-class Snowflake training and Snowflake job support to offer the right platform to power your career to the next level. So, don't stay behind. Join now for a lucrative career.
                  </p>
                </div>
              </div>
            </section>

            {/* What Do You Learn - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
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
                <p className="text-yellow-200 font-semibold mb-4">
                  <strong className="text-yellow-300">Note:</strong> The syllabus listed above is indicative and may include more topics for comprehensive learning.
                </p>
                <p className="text-yellow-200 mb-4">
                  This course is supplemented by relevant lab exercises, lectures, group discussions as well as extensive hands-on practice sessions.
                </p>
                <p className="text-yellow-200 mb-4">
                  After successful completion of the Snowflake Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                </p>
                <p className="text-yellow-300 font-bold">
                  VRIT Solutions offers 100% snowflake training placement Guaranteed program for deserving students.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={snowflakeFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="Snowflake" phoneNumber="+91-9032734343" />
            </div>
          </div>

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
