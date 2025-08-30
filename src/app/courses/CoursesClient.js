'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search,
  Star,
  Clock,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Code,
  Database,
  Cloud,
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
  Cpu
} from 'lucide-react';

// Static courses data - ordered by priority
const staticCourses = [
  {
    id: 1,
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
    id: 2,
    title: "AWS With DevOps",
    slug: "aws-devops-training-in-hyderabad", 
    category: "DevOps & Cloud",
    duration: "60 Days",
    level: "Intermediate to Advanced",
    rating: 4.8,
    students: 1876,
    description: "Learn AWS cloud services integrated with DevOps practices including CI/CD, containerization, and automation.",
    features: ["AWS Certification", "DevOps Integration", "Live Projects", "Industry Mentors"],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    trending: true,
    new: false
  },
  {
    id: 3,
    title: "Google Cloud",
    slug: "google-cloud-training-in-hyderabad",
    category: "Cloud Computing",
    duration: "45 Days", 
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 1234,
    description: "Master Google Cloud Platform with hands-on projects and real-world scenarios.",
    features: ["GCP Certification", "Live Projects", "Expert Mentors", "Career Support"],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-green-500 to-blue-500",
    bgColor: "from-green-500/10 to-blue-500/10",
    trending: true,
    new: false
  },
  {
    id: 4,
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
    id: 5,
    title: "Salesforce",
    slug: "salesforce-training-in-hyderabad",
    category: "CRM & Sales",
    duration: "50 Days",
    level: "Beginner to Advanced", 
    rating: 4.8,
    students: 1987,
    description: "Master Salesforce CRM with customization, automation, and development skills.",
    features: ["Salesforce Certification", "Admin & Development", "Real Projects", "Career Guidance"],
    icon: <Network className="w-8 h-8" />,
    color: "from-teal-500 to-green-500",
    bgColor: "from-teal-500/10 to-green-500/10",
    trending: true,
    new: false
  },
  {
    id: 6,
    title: "Pega",
    slug: "pega-training-in-hyderabad",
    category: "BPM & Automation",
    duration: "45 Days",
    level: "Intermediate to Advanced",
    rating: 4.7,
    students: 1543,
    description: "Learn Pega BPM platform for business process automation and case management.",
    features: ["Pega Certification", "BPM Focus", "Case Studies", "Industry Projects"],
    icon: <Zap className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    trending: false,
    new: false
  },
  {
    id: 7,
    title: "Snowflake",
    slug: "snowflake-training-in-hyderabad",
    category: "Data Warehouse", 
    duration: "35 Days",
    level: "Intermediate to Advanced",
    rating: 4.8,
    students: 1123,
    description: "Master Snowflake cloud data platform for modern data warehousing and analytics.",
    features: ["Snowflake Certification", "Cloud Data Platform", "Live Projects", "Expert Training"],
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-500/10 to-indigo-500/10",
    trending: true,
    new: true
  },
  {
    id: 8,
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
    id: 9,
    title: "Clinical SAS",
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
    id: 10,
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
    id: 11,
    title: "Machine Learning with Python",
    slug: "machine-learning-training-in-hyderabad",
    category: "AI & ML",
    duration: "60 Days",
    level: "Intermediate to Advanced",
    rating: 4.9,
    students: 2567,
    description: "Learn machine learning algorithms and implementation using Python and popular libraries.",
    features: ["ML Algorithms", "Python Libraries", "Real Projects", "AI Applications"],
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-500/10 to-indigo-500/10",
    trending: true,
    new: false
  },
  {
    id: 12,
    title: "Full Stack Developer",
    slug: "full-stack-developer-training-in-hyderabad",
    category: "Web Development",
    duration: "90 Days",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 4123,
    description: "Complete full-stack development with modern frameworks and technologies.",
    features: ["Frontend & Backend", "Modern Frameworks", "Database Integration", "Live Projects"],
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-500/10 to-teal-500/10",
    trending: true,
    new: false
  },
  {
    id: 13,
    title: "EDI Training",
    slug: "edi-training-in-hyderabad",
    category: "Data Integration",
    duration: "50 Days",
    level: "Intermediate to Advanced",
    rating: 4.6,
    students: 1345,
    description: "Master Electronic Data Interchange for business-to-business communication.",
    features: ["EDI Standards", "Message Formats", "Integration Patterns", "Industry Applications"],
    icon: <Network className="w-8 h-8" />,
    color: "from-blue-500 to-purple-500",
    bgColor: "from-blue-500/10 to-purple-500/10",
    trending: false,
    new: false
  },
  {
    id: 14,
    title: "Informatica MDM",
    slug: "informatica-mdm-training-in-hyderabad",
    category: "Data Management",
    duration: "60 Days",
    level: "Intermediate to Advanced",
    rating: 4.7,
    students: 1876,
    description: "Learn Informatica Master Data Management for enterprise data governance.",
    features: ["MDM Architecture", "Data Quality", "Governance", "Enterprise Integration"],
    icon: <Database className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-500/10 to-blue-500/10",
    trending: false,
    new: false
  },
  {
    id: 15,
    title: "Hadoop",
    slug: "hadoop-training-in-hyderabad",
    category: "Big Data",
    duration: "75 Days",
    level: "Intermediate to Advanced",
    rating: 4.6,
    students: 2134,
    description: "Master Hadoop ecosystem for big data processing and analytics.",
    features: ["HDFS", "MapReduce", "Hive & Pig", "Spark Integration"],
    icon: <Database className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    trending: false,
    new: false
  },
  {
    id: 16,
    title: "Python with AWS",
    slug: "python-with-aws-training-in-hyderabad",
    category: "Cloud Programming",
    duration: "55 Days",
    level: "Intermediate to Advanced",
    rating: 4.8,
    students: 1987,
    description: "Learn Python programming integrated with AWS cloud services and serverless computing.",
    features: ["Python Programming", "AWS Services", "Serverless Computing", "Cloud Integration"],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-green-500 to-blue-500",
    bgColor: "from-green-500/10 to-blue-500/10",
    trending: true,
    new: false
  },
  {
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
    title: "Python",
    slug: "python-online-training",
    category: "Programming",
    duration: "45 Days",
    level: "Beginner to Intermediate",
    rating: 4.8,
    students: 5432,
    description: "Learn Python programming from basics to advanced concepts with hands-on projects.",
    features: ["Programming Fundamentals", "Data Structures", "Web Development", "Automation"],
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-green-500",
    bgColor: "from-blue-500/10 to-green-500/10",
    trending: true,
    new: false
  },
  {
    id: 26,
    title: "Workday",
    slug: "workday-training-in-hyderabad",
    category: "HR Technology",
    duration: "50 Days",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 1678,
    description: "Master Workday HCM for human capital management and enterprise planning.",
    features: ["HCM Configuration", "Financial Management", "Analytics", "Integration"],
    icon: <Users className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-500/10 to-cyan-500/10",
    trending: false,
    new: false
  }
];

// Utility function to trim description
const trimDescription = (description, maxLength = 120) => {
  if (!description) return "Learn with our expert instructors";
  
  // If description is an array (for dynamic courses), take the first element
  if (Array.isArray(description)) {
    description = description[0] || "Learn with our expert instructors";
  }
  
  // Ensure description is a string
  const descStr = String(description);
  
  if (descStr.length <= maxLength) {
    return descStr;
  }
  
  // Find the last space within the limit
  const trimmed = descStr.substring(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  
  return lastSpace > 0 ? trimmed.substring(0, lastSpace) + '...' : trimmed + '...';
};

export default function CoursesClient({ dynamicCourses = [] }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Transform dynamic courses to match static course structure
  const transformedDynamicCourses = dynamicCourses.map((course, index) => {
    // Define color schemes for dynamic courses
    const dynamicColorSchemes = [
      {
        color: "from-emerald-500 to-teal-500",
        bgColor: "from-emerald-500/10 to-teal-500/10"
      },
      {
        color: "from-blue-500 to-indigo-500",
        bgColor: "from-blue-500/10 to-indigo-500/10"
      },
      {
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-500/10 to-pink-500/10"
      },
      {
        color: "from-orange-500 to-red-500",
        bgColor: "from-orange-500/10 to-red-500/10"
      },
      {
        color: "from-cyan-500 to-blue-500",
        bgColor: "from-cyan-500/10 to-blue-500/10"
      },
      {
        color: "from-violet-500 to-purple-500",
        bgColor: "from-violet-500/10 to-purple-500/10"
      },
      {
        color: "from-rose-500 to-pink-500",
        bgColor: "from-rose-500/10 to-pink-500/10"
      },
      {
        color: "from-amber-500 to-yellow-500",
        bgColor: "from-amber-500/10 to-yellow-500/10"
      },
      {
        color: "from-lime-500 to-green-500",
        bgColor: "from-lime-500/10 to-green-500/10"
      },
      {
        color: "from-fuchsia-500 to-purple-500",
        bgColor: "from-fuchsia-500/10 to-purple-500/10"
      }
    ];
    
    const colorScheme = dynamicColorSchemes[index % dynamicColorSchemes.length];
    
    return {
      id: `dynamic-${index}`,
      title: course.name || course.title || 'Course',
      slug: course.slug || `dynamic-course-${index}`,
      category: course.category || 'Professional Development',
      duration: course.duration || '30 Days',
      level: course.level || 'Beginner to Intermediate',
      rating: course.rating || 4.5,
      students: course.students || 1200,
      description: trimDescription(course.description || course.overview || 'Professional training course with expert instruction.'),
      features: course.features || course.highlights || ["Expert Training", "Hands-on Labs", "Career Support", "Certification"],
      icon: <BookOpen className="w-8 h-8" />,
      ...colorScheme,
      trending: course.trending || false,
      new: course.new || true,
      price: course.price,
      originalPrice: course.originalPrice,
      discount: course.discount
    };
  });

  // Combine all courses
  const allCourses = [...staticCourses, ...transformedDynamicCourses];

  // Filter courses based on search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return allCourses;
    
    const query = searchQuery.toLowerCase().trim();
    
    return allCourses.filter(course => {
      const searchableText = [
        course.title,
        course.category,
        course.description,
        course.level,
        ...(course.features || [])
      ].join(' ').toLowerCase();
      
      return searchableText.includes(query);
    });
  }, [allCourses, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional IT Training Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive training programs designed for career growth
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{allCourses.length}+</div>
            <div className="text-gray-600">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">50,000+</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-gray-600">Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden border border-gray-100">
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.bgColor} opacity-20`}></div>
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {course.icon}
                        {course.trending && (
                          <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                            Trending
                          </span>
                        )}
                        {course.new && (
                          <span className="px-2 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                      <p className="text-white/80 text-sm">{course.category}</p>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {trimDescription(course.description)}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    {course.price ? (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">₹{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{course.originalPrice}</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-lg font-semibold text-blue-600">Enroll Now</span>
                    )}
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
