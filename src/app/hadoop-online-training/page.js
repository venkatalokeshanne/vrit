import React from 'react';
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
  Server,
  Layers,
  Terminal,
  GitBranch,
  Zap,
  Cog,
  Network,
  Shield,
  Tool,
  Activity,
  BarChart3,
  PieChart,
  Cpu,
  HardDrive,
  Workflow,
  Binary,
  Boxes,
  Layout,
  Palette,
  Exchange,
  Building2,
  Shuffle,
  Brain,
  ChartLine,
  Gauge,
  Lightbulb,
  Compass,
  Map,
  Folder,
  FileCode,
  Package
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'hadoop-online-training';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default async  function HadoopOnlineTraining() {
  const structuredDataJson = getStructuredDataStatic(COURSE_SLUG);

  // Fetch metadata for dynamic hero image
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  const hadoopFaqs = [
    {
      question: "What is Hadoop and why is it important for Big Data processing?",
      answer: "Hadoop is an open-source framework for distributed storage and processing of large datasets across clusters. It's important because it enables cost-effective processing of massive amounts of structured and unstructured data that traditional databases cannot handle efficiently."
    },
    {
      question: "What are the prerequisites for Hadoop training?",
      answer: "Basic knowledge of Java programming, understanding of Linux/Unix commands, familiarity with SQL databases, and basic networking concepts. Having analytical thinking and problem-solving skills is beneficial. We provide foundational support for beginners."
    },
    {
      question: "What components of Hadoop ecosystem will I learn?",
      answer: "You'll learn HDFS (Hadoop Distributed File System), MapReduce, YARN, Hive, Pig, HBase, Sqoop, Flume, Oozie, Spark, Kafka, and other ecosystem tools. We cover both Hadoop 2.x and 3.x versions with hands-on practice."
    },
    {
      question: "What is the duration of the Hadoop training course?",
      answer: "Our comprehensive Hadoop training is designed to be completed in 50-60 hours, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I work on real Big Data projects during training?",
      answer: "Yes! You'll work on multiple hands-on projects including data ingestion using Sqoop/Flume, data processing with MapReduce/Spark, data warehousing with Hive, and real-time processing projects using industry datasets from various domains."
    },
    {
      question: "What career opportunities are available after Hadoop training?",
      answer: "Hadoop professionals can work as Big Data Developer, Hadoop Developer, Data Engineer, Big Data Analyst, Hadoop Administrator, Data Architect, ETL Developer, or Big Data Consultant with salaries ranging from ₹4-15 LPA depending on experience."
    },
    {
      question: "How does Hadoop compare to traditional databases and cloud solutions?",
      answer: "Hadoop excels in processing large volumes of unstructured data cost-effectively, offers horizontal scalability, and handles batch processing efficiently. While cloud solutions offer managed services, Hadoop provides flexibility and control over big data infrastructure."
    },
    {
      question: "Do you cover both on-premise and cloud-based Hadoop deployments?",
      answer: "Yes, our training covers on-premise Hadoop clusters, cloud distributions like Amazon EMR, Google Cloud Dataproc, Azure HDInsight, and hybrid deployments. You'll learn deployment strategies for different environments."
    },
    {
      question: "Do you provide placement assistance and job support?",
      answer: "Yes, we offer 100% placement assistance including portfolio development, resume building, interview preparation with big data case studies, mock interviews, and connecting you with our network of companies hiring Hadoop professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for big data projects, access to updated course materials, latest Hadoop updates, industry trends, and alumni network for continuous learning."
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
                    Hadoop Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Hadoop Training Course in Hyderabad - VR IT Solutions"
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 60 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="Hadoop Online Training"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Basic Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400 animate-pulse" />
                Basic Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    With Hadoop, you can run applications with thousands of commodity hardware nodes and to manage thousands of terabytes of data. It is an open source software framework that is used for distributed storage and processing of datasets of big data. This is done using the MapReduce programming model. It offers a distributed file system that helps in swift data transfer rates among nodes and lets the system to continue operating, even if there is a node failure. This approach minimizes the risk of catastrophic system failure and data loss, though a sizeable number of nodes remain inoperative. It can be firmly stated that Hadoop can be called as the primary foundation for processing big data tasks – sales planning & business, scientific analytics and processing huge volumes of sensor data.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Hadoop? - Teal Theme */}
            <section className="bg-gradient-to-br from-teal-600/15 via-cyan-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-teal-400/30 shadow-xl shadow-teal-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-teal-400 animate-pulse" />
                Why Hadoop?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-4">
                <div className="grid gap-4">
                  <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20 flex items-start gap-4">
                    <Gauge className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-teal-300 font-semibold mb-2">Capability to store and process enormous volumes of data, swiftly:</h3>
                      <p className="text-teal-100 leading-relaxed">
                        With data increasing manifold day in and day out from various sources such as social media, sensors (IoT), it serves the huge purpose
                      </p>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20 flex items-start gap-4">
                    <Cpu className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-cyan-300 font-semibold mb-2">The power of computing:</h3>
                      <p className="text-cyan-100 leading-relaxed">
                        As Hadoop uses a distributed computing model,it processes the data quickly,wherein as you increase the computing nodes,the processing power also increases exponentially.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-300 font-semibold mb-2">Zero disruption of work:</h3>
                      <p className="text-blue-100 leading-relaxed">
                        Data and application processing is protected against failure of any hardware. This means that if a node fails, jobs are automatically redirected to other nodes to ensure that the distributed computing does not fail. This also ensures storage of multiple copies of data.
                      </p>
                    </div>
                  </div>
                  <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20 flex items-start gap-4">
                    <Workflow className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-teal-300 font-semibold mb-2">Flexibility:</h3>
                      <p className="text-teal-100 leading-relaxed">
                        In traditional databases, you need to preprocess the data before storing it. However, in Hadoop, this functionality is done away, which means there is no limitation to the data storage and helps you decide how to use it later. This even includes unstructured data like text, images and videos.
                      </p>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20 flex items-start gap-4">
                    <Activity className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-cyan-300 font-semibold mb-2">Less cost:</h3>
                      <p className="text-cyan-100 leading-relaxed">
                        The open-source framework is available free of cost and uses commodity software to store huge volumes of data.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20 flex items-start gap-4">
                    <ChartLine className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-300 font-semibold mb-2">Highly scalable:</h3>
                      <p className="text-blue-100 leading-relaxed">
                        You can easily scale your system to manage higher volumes of data by just adding notes, which requires minimal administration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why should you join this course? - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-indigo-400 animate-pulse" />
                Why should you join this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed mb-4">
                    As there are lot of challenges associated with data administration and management due to rapid data explosion, this course digs into the deeper aspects of the Hadoop and tremendously helps programmers, data analytics and other professionals to seek a rewarding career in this area
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed mb-4">
                    This course lets you brush up the basic concepts in data analytics, for example, basic database knowledge and then slowly apply such concepts to the more advanced level of data science, thereby helping you to get the complete grip of concepts and get started with Hadoop.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    <span className="text-indigo-400 font-semibold">VR IT</span> is one among the few institutes that offer excellent hadoop online training.
                  </p>
                </div>
              </div>
            </section>

            {/* What do you learn in this course? - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-emerald-400 animate-pulse" />
                What do you learn in this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="grid gap-4">
                  {[
                    "HDFS and MapReduce Framework",
                    "Architecture of Hadoop 2.x", 
                    "Write Complex MapReduce Programs and Set Up Hadoop Cluster",
                    "Work on Data Analytics by using Pig, Hive and Yarn",
                    "Learn Sqoop and Flume for data loading techniques",
                    "Implement integration by HBase and MapReduce",
                    "Implement Indexing and Advanced Usage",
                    "Schedule jobs with the use of Oozie application",
                    "Implement best practices for Hadoop Development Program",
                    "Work on real Life Projects, based on Big Data Analytics"
                  ].map((item, index) => (
                    <div key={index} className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Who should do this course? - Orange Theme */}
            <section className="bg-gradient-to-br from-orange-600/15 via-amber-600/20 to-yellow-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/30 shadow-xl shadow-orange-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-400 animate-pulse" />
                Who should do this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                  <p className="text-orange-100 leading-relaxed mb-4">
                    <span className="text-orange-400 font-semibold">VR IT solutions</span> is the one hadoop online training that offers good course support for the candidates throughout the course.With the increased demand for big data analytics with the future needs of the information technology, there is scope for every IT enthusiast to look into this newly growing field.More than programming, this field is all filled with the purpose of saving and troubleshooting the data.
                  </p>
                </div>
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed mb-4">
                    <span className="text-orange-400 font-semibold">VR IT solutions</span> is one such kind of Data Science & hadoop online course Institute in Hyderabad that offers online courses:
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed mb-4">
                    A typical Hadoop batch is composed of the following set of professionals:
                  </p>
                  <div className="grid gap-3">
                    {[
                      "Data analysts",
                      "Managers",
                      "Business analysts", 
                      "Project managers of IT firms",
                      "Software testing professionals",
                      "System Adminstrators",
                      "Software developers",
                      "Fresh graduates",
                      "Mainframe professionals"
                    ].map((professional, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Briefcase className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-yellow-100">{professional}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* What are the pre-requisites for this course? - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-cyan-400 animate-pulse" />
                What are the pre-requisites for this course?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="grid gap-4">
                  <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-400/20 flex items-start gap-3">
                    <Brain className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-cyan-100">Good analytical thinking</span>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20 flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Basic knowledge of quantitative techniques (a basic course in statistics would be great)</span>
                  </div>
                  <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-400/20 flex items-start gap-3">
                    <Code className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                    <span className="text-indigo-100">Sound knowledge in core Java concepts, which is a must to understand the foundations of Hadoop. However, essential concepts of Java will also be covered to understand the foundations of Hadoop.</span>
                  </div>
                  <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-400/20 flex items-start gap-3">
                    <FileCode className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-cyan-100">Some knowledge of Pig programming to enable you to execute Hadoop programs easier.</span>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20 flex items-start gap-3">
                    <Database className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Knowledge of Hive can be useful in understanding the concepts of Data warehousing.</span>
                  </div>
                  <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-400/20 flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                    <span className="text-indigo-100">Basic knowledge of Linux commands for day-to-day execution of the software</span>
                  </div>
                </div>
              </div>
            </section>

            {/* How do I acquire practical training? - Pink Theme */}
            <section className="bg-gradient-to-br from-pink-600/15 via-rose-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-pink-400/30 shadow-xl shadow-pink-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-pink-400 animate-pulse" />
                How do I acquire practical training?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    <span className="text-pink-400 font-semibold">VR IT solutions</span> is one of the best institute in providing adequate practical training to complement your theory knowledge, which is worth your investment and comparatively better than other similar institutes in Hyderabad. We help you in successfully accomplishing practical training using state-of-the-art Hadoop virtual software installed in your system (Desktop or Laptop). A good internet connection is required to get any help from the software support team. You have the option to execute practical sessions and hadoop interview questions either from your system or leveraging our remote training sessions to get an enriched learning experience.
                  </p>
                </div>
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    Join now to make Hadoop as your career and get a highly paid job!
                  </p>
                </div>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                  <h3 className="text-red-300 font-semibold mb-3">Some of the key words:</h3>
                  <p className="text-red-100 leading-relaxed">
                    Best training institute, excellent Hadoop training institute, state-of-the-art training institute, best online training, focused learning methodologies.
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
                  Ready to Start Your Hadoop Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master Hadoop and become proficient in big data analytics, HDFS, MapReduce, and distributed computing. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="Hadoop Online Training"
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
            <section className="bg-gradient-to-br from-yellow-600/15 via-orange-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-yellow-400/30 shadow-xl shadow-yellow-500/10">
              <FAQ faqs={hadoopFaqs} theme="default" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="Hadoop Training" phoneNumber="+91-9032734343" />
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
