import React from 'react';
import Link from 'next/link';
import { getPageMetadata, getStructuredData, getReviewStructuredData } from '../../utils/metadata';
import { 
  Search,
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Code,
  Database,
  Cloud,
  Settings,
  Zap,
  Target,
  Network,
  Shield,
  Brain,
  Sparkles,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Trophy,
  Rocket,
  GraduationCap,
  Building2,
  Cpu
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "ServiceNow",
    slug: "servicenow-training-in-hyderabad",
    category: "ITSM & Enterprise",
    duration: "40 Days",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 2134,
    description: "Master ServiceNow platform for IT service management and digital workflows.",
    features: ["ServiceNow Certification", "ITSM Focus", "Workflow Design", "Enterprise Projects"],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    trending: true,
    new: false
  },
  {
    id: 2,
    title: "Salesforce",
    slug: "salesforce-training-in-hyderabad",
    category: "CRM & Business",
    duration: "70 Days",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 3456,
    description: "Complete Salesforce administration and development with real-world scenarios.",
    features: ["Salesforce Certification", "Live Projects", "Admin & Developer Track", "Job Support"],
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-500/10 to-teal-500/10",
    trending: true,
    new: false
  },
  {
    id: 3,
    title: "SAP FICO",
    slug: "sap-fico-online-training-in-hyderabad",
    category: "ERP & Finance",
    duration: "120 Days",
    level: "Beginner to Advanced",
    rating: 4.6,
    students: 1987,
    description: "Comprehensive SAP Financial Accounting and Controlling module training.",
    features: ["SAP Certification", "Real Business Scenarios", "Module Integration", "Career Support"],
    icon: <Database className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    trending: false,
    new: false
  },
  {
    id: 4,
    title: "Pega",
    slug: "pega-training-in-hyderabad",
    category: "BPM & Automation",
    duration: "70 Days",
    level: "Intermediate to Advanced",
    rating: 4.8,
    students: 1543,
    description: "Master Pega platform for business process management and case management solutions.",
    features: ["Pega Certification", "Case Management", "Decision Management", "Real-time Projects"],
    icon: <Zap className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/10 to-rose-500/10",
    trending: true,
    new: false
  },
  {
    id: 5,
    title: "Azure DevOps & AWS Cloud",
    slug: "azure-devops-training-in-hyderabad",
    category: "DevOps & Cloud",
    duration: "75 Days",
    level: "Intermediate to Advanced",
    rating: 4.9,
    students: 2456,
    description: "Master Azure DevOps with CI/CD pipelines, infrastructure as code, and cloud deployment strategies.",
    features: ["Live Projects", "Placement Support", "Industry Mentors", "Certification"],
    icon: <Cpu className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/10 to-purple-500/10",
    trending: true,
    new: false
  },
  {
    id: 6,
    title: "Mulesoft",
    slug: "mulesoft-training-in-hyderabad",
    category: "Integration & API",
    duration: "45 Days",
    level: "Intermediate",
    rating: 4.7,
    students: 1876,
    description: "Learn MuleSoft Anypoint Platform for API-led connectivity and integration solutions.",
    features: ["API Design", "Integration Patterns", "Anypoint Platform", "Real-world Projects"],
    icon: <Network className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    trending: true,
    new: false
  },
  {
    id: 7,
    title: "SAS Clinical",
    slug: "sas-clinical-online-training-in-hyderabad",
    category: "Clinical Data & Analytics",
    duration: "120 Days",
    level: "Advanced",
    rating: 4.6,
    students: 1234,
    description: "Comprehensive SAS Clinical training for pharmaceutical and healthcare data analysis.",
    features: ["Clinical Programming", "CDISC Standards", "Statistical Analysis", "Regulatory Compliance"],
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-500/10 to-indigo-500/10",
    trending: false,
    new: false
  },
  {
    id: 8,
    title: "SAP Basis",
    slug: "sap-basis-online-training",
    category: "SAP Administration",
    duration: "50 Days",
    level: "Intermediate to Advanced",
    rating: 4.5,
    students: 987,
    description: "Master SAP Basis administration for system management and technical operations.",
    features: ["System Administration", "Performance Tuning", "Transport Management", "Security"],
    icon: <Database className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    trending: false,
    new: false
  },
  {
    id: 9,
    title: "SAP EWM",
    slug: "sap-ewm-online-training",
    category: "SAP Logistics",
    duration: "70 Days",
    level: "Advanced",
    rating: 4.7,
    students: 1345,
    description: "Learn SAP Extended Warehouse Management for advanced logistics and warehouse operations.",
    features: ["Warehouse Processes", "Integration", "Configuration", "Real Scenarios"],
    icon: <Database className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    trending: false,
    new: false
  },
  {
    id: 10,
    title: "SAP HANA Admin",
    slug: "sap-hana-admin-training",
    category: "SAP Database",
    duration: "40 Days",
    level: "Advanced",
    rating: 4.8,
    students: 1567,
    description: "Master SAP HANA database administration and in-memory computing platform.",
    features: ["Database Administration", "Performance Optimization", "Security", "Backup & Recovery"],
    icon: <Database className="w-8 h-8" />,
    color: "from-purple-600 to-pink-600",
    bgColor: "from-purple-600/10 to-pink-600/10",
    trending: true,
    new: false
  },
  {
    id: 11,
    title: "S/4 HANA Finance",
    slug: "simple-finance-training-in-hyderabad",
    category: "SAP Finance",
    duration: "40 Days",
    level: "Advanced",
    rating: 4.9,
    students: 1789,
    description: "Learn SAP S/4HANA Finance for next-generation financial processes and reporting.",
    features: ["Financial Accounting", "Management Accounting", "Central Finance", "Fiori Apps"],
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-600",
    bgColor: "from-blue-600/10 to-cyan-600/10",
    trending: true,
    new: false
  },
  {
    id: 12,
    title: "SAP Leonardo",
    slug: "sap-leonardo-training-hyderabad",
    category: "SAP Innovation",
    duration: "50 Days",
    level: "Advanced",
    rating: 4.6,
    students: 945,
    description: "Explore SAP Leonardo for machine learning, IoT, and blockchain integration.",
    features: ["Machine Learning", "IoT Integration", "Blockchain", "Innovation Platform"],
    icon: <Brain className="w-8 h-8" />,
    color: "from-green-600 to-teal-600",
    bgColor: "from-green-600/10 to-teal-600/10",
    trending: false,
    new: true
  },
  {
    id: 13,
    title: "SAP Security & GRC",
    slug: "sap-security-training",
    category: "SAP Security",
    duration: "60 Days",
    level: "Advanced",
    rating: 4.7,
    students: 1123,
    description: "Master SAP Security and Governance, Risk & Compliance for enterprise security.",
    features: ["Access Control", "Risk Management", "Compliance", "Audit Management"],
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-500/10 to-pink-500/10",
    trending: false,
    new: false
  },
  {
    id: 14,
    title: "SAP Logistics",
    slug: "sap-s4Hana-simple-logistics-training",
    category: "SAP Logistics",
    duration: "40 Days",
    level: "Intermediate",
    rating: 4.5,
    students: 1432,
    description: "Learn SAP S/4HANA Simple Logistics for supply chain and materials management.",
    features: ["Materials Management", "Sales & Distribution", "Production Planning", "Inventory Management"],
    icon: <Database className="w-8 h-8" />,
    color: "from-indigo-600 to-purple-600",
    bgColor: "from-indigo-600/10 to-purple-600/10",
    trending: false,
    new: false
  },
  {
    id: 15,
    title: "Data Science",
    slug: "data-science-training-in-hyderabad",
    category: "Data Science & AI",
    duration: "100 Days",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 3241,
    description: "Comprehensive data science program covering Python, ML, AI, and statistical analysis.",
    features: ["Real-time Projects", "Job Assistance", "Industry Tools", "Portfolio Building"],
    icon: <Brain className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    trending: true,
    new: false
  },
  {
    id: 16,
    title: "Python",
    slug: "python-online-training",
    category: "Programming",
    duration: "45 Days",
    level: "Beginner to Intermediate",
    rating: 4.8,
    students: 5432,
    description: "Learn Python programming from basics to advanced with real-world applications.",
    features: ["Project-based Learning", "Industry Applications", "Web Development", "Data Analysis"],
    icon: <Code className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    trending: true,
    new: false
  },
  {
    id: 17,
    title: "Python With AWS",
    slug: "python-with-aws-training",
    category: "Cloud Programming",
    duration: "45 Days",
    level: "Intermediate",
    rating: 4.7,
    students: 2876,
    description: "Combine Python programming with AWS cloud services for scalable applications.",
    features: ["AWS Services", "Cloud Architecture", "Serverless Computing", "Real Projects"],
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-blue-500",
    bgColor: "from-green-500/10 to-blue-500/10",
    trending: true,
    new: false
  },
  {
    id: 18,
    title: "Workday",
    slug: "workday-training-in-hyderabad",
    category: "HR & Enterprise",
    duration: "50 Days",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 1654,
    description: "Master Workday HCM and Financial Management for enterprise solutions.",
    features: ["Workday Certification", "HCM & Finance", "Configuration", "Integration"],
    icon: <Users className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    trending: false,
    new: false
  },
  {
    id: 19,
    title: "Machine Learning With Python",
    slug: "machine-learning-with-python-training-in-hyderabad",
    category: "AI & Machine Learning",
    duration: "45 Days",
    level: "Intermediate to Advanced",
    rating: 4.8,
    students: 2890,
    description: "Deep dive into ML algorithms, neural networks, and AI implementation using Python.",
    features: ["Hands-on Labs", "Research Projects", "Industry Mentorship", "Certification"],
    icon: <Brain className="w-8 h-8" />,
    color: "from-blue-500 to-purple-500",
    bgColor: "from-blue-500/10 to-purple-500/10",
    trending: true,
    new: false
  },
  {
    id: 20,
    title: "AWS With DevOps",
    slug: "devops-training-in-hyderabad",
    category: "DevOps & Cloud",
    duration: "70 Days",
    level: "Intermediate to Advanced",
    rating: 4.9,
    students: 2765,
    description: "Complete DevOps ecosystem including Docker, Kubernetes, Jenkins, and cloud platforms.",
    features: ["Container Technologies", "CI/CD Pipelines", "Cloud Integration", "Monitoring Tools"],
    icon: <Cpu className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-500/10 to-cyan-500/10",
    trending: true,
    new: false
  },
  {
    id: 21,
    title: "Informatica MDM",
    slug: "informatica-mdm-training",
    category: "Data Management",
    duration: "45 Days",
    level: "Advanced",
    rating: 4.6,
    students: 1234,
    description: "Master Informatica Master Data Management for enterprise data governance.",
    features: ["Data Integration", "Data Quality", "Master Data Hub", "Data Governance"],
    icon: <Database className="w-8 h-8" />,
    color: "from-pink-500 to-red-500",
    bgColor: "from-pink-500/10 to-red-500/10",
    trending: false,
    new: false
  },
  {
    id: 22,
    title: "Full Stack Developer",
    slug: "full-stack-developer-training-in-hyderabad",
    category: "Web Development",
    duration: "75 Days",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 4567,
    description: "Complete full-stack development with React, Node.js, databases, and modern frameworks.",
    features: ["Live Coding", "Project Portfolio", "Interview Prep", "Job Guarantee"],
    icon: <Code className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-500/10 to-blue-500/10",
    trending: true,
    new: false
  },
  {
    id: 23,
    title: "EDI Training",
    slug: "edi-training",
    category: "Data Integration",
    duration: "45 Days",
    level: "Intermediate",
    rating: 4.5,
    students: 987,
    description: "Learn Electronic Data Interchange for B2B communication and Sterling B2B Integrator.",
    features: ["EDI Standards", "B2B Integration", "Sterling Integrator", "Real Scenarios"],
    icon: <Code className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10",
    trending: false,
    new: false
  },
  {
    id: 24,
    title: "Hadoop",
    slug: "hadoop-online-training",
    category: "Big Data",
    duration: "60 Days",
    level: "Intermediate to Advanced",
    rating: 4.7,
    students: 2143,
    description: "Master Hadoop ecosystem for big data processing and distributed computing.",
    features: ["HDFS", "MapReduce", "Spark", "Hive", "Real-time Analytics"],
    icon: <Database className="w-8 h-8" />,
    color: "from-orange-600 to-yellow-600",
    bgColor: "from-orange-600/10 to-yellow-600/10",
    trending: true,
    new: false
  },
  {
    id: 25,
    title: "Snowflake",
    slug: "snowflake-training-in-hyderabad",
    category: "Cloud Data Platform",
    duration: "45 Days",
    level: "Intermediate to Advanced",
    rating: 4.7,
    students: 1876,
    description: "Master Snowflake cloud data platform for data warehousing and analytics.",
    features: ["Data Warehousing", "Cloud Architecture", "Data Sharing", "Performance Optimization"],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-500/10 to-blue-500/10",
    trending: true,
    new: false
  },
  {
    id: 26,
    title: "Google Cloud",
    slug: "google-cloud-training",
    category: "Cloud Computing",
    duration: "65 Days",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 2234,
    description: "Comprehensive Google Cloud Platform training covering infrastructure, AI, and data services.",
    features: ["GCP Services", "Cloud Architecture", "BigQuery", "Kubernetes Engine"],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-blue-500 to-green-500",
    bgColor: "from-blue-500/10 to-green-500/10",
    trending: true,
    new: false
  }
];

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('courses');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('courses');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async function CoursesPage() {
  const structuredDataJson = await getPageStructuredData();
  
  // Sort courses by trending first, then by rating for static display
  const sortedCourses = courses.sort((a, b) => b.trending - a.trending || b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border border-blue-500/20 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              25+ Professional Courses Available
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <span className="text-white">Tech Career</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge courses designed by industry experts. From AI & Machine Learning to Cloud Computing, 
            transform your career with hands-on training and 100% placement assistance.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, technologies, or skills..."
                readOnly
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all cursor-default"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <GraduationCap className="w-8 h-8" />, number: "25,000+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
              { icon: <Trophy className="w-8 h-8" />, number: "95%", label: "Placement Rate", color: "from-green-500 to-teal-500" },
              { icon: <Award className="w-8 h-8" />, number: "50+", label: "Industry Partners", color: "from-purple-500 to-pink-500" },
              { icon: <Star className="w-8 h-8" />, number: "4.8/5", label: "Average Rating", color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-10 mb-4`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                All Courses
              </h2>
              <p className="text-gray-400">
                {sortedCourses.length} course{sortedCourses.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Course Card Header */}
                <div className={`relative p-6 bg-gradient-to-br ${course.bgColor} border-b border-white/10`}>
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    {course.trending && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                        🔥 TRENDING
                      </span>
                    )}
                    {course.new && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold rounded-full">
                        ✨ NEW
                      </span>
                    )}
                  </div>

                  {/* Course Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} text-white flex-shrink-0`}>
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {course.title}
                      </h3>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Rating & Students */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>

                {/* Course Card Body */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Target className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Level: {course.level}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center">
                    <Link 
                      href={`/${course.slug}`}
                      className={`w-full group/btn px-6 py-3 bg-gradient-to-r ${course.color} text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      View Course Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            </div>
            
            <div className="relative">
              <Rocket className="w-16 h-16 text-orange-400 mx-auto mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Tech Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of successful professionals who transformed their careers with our expert training programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919032734343"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +91-9032734343
                </a>
                <a
                  href="mailto:info@vritsol.com"
                  className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, Ameerpet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Flexible Timings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `
      }} />

      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
    </div>
  );
}
