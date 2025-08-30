'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import { getAllCourses } from '../../lib/courses';
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
  Cpu,
  X
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'courses';

// Utility function to trim description
const trimDescription = (description, maxLength = 120) => {
  if (!description) return "Learn with our expert instructors";
  
  // If description is an array (for dynamic courses), take the first element
  if (Array.isArray(description)) {
    description = description[0] || "Learn with our expert instructors";
  }
  
  if (description.length <= maxLength) return description;
  
  // Find the last space before the max length to avoid cutting words
  const trimmed = description.substring(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  
  return lastSpace > 0 ? trimmed.substring(0, lastSpace) + '...' : trimmed + '...';
};

// Static courses data - Business Priority Order: DevOps/Cloud (1-16), SAP (17-24), Others (25-26)
const staticCourses = [
  // Desired order courses first
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
    id: 3,
    title: "Google Cloud",
    slug: "google-cloud-training-in-hyderabad",
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
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 4,
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
    id: 12,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 13,
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
    id: 10,
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
    id: 25,
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
    id: 8,
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
    id: 11,
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

  // Remaining courses that were not in desired order
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
    id: 26,
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
  }
];

// Component that uses useSearchParams - needs to be wrapped in Suspense
function CoursesContent() {
  const searchParams = useSearchParams();
  const urlSearchTerm = searchParams.get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(urlSearchTerm);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Update search term when URL changes
  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        
        // Get dynamic courses from Sanity
        const dynamicCourses = await getAllCourses();
        
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
          
          // Cycle through color schemes
          const colorScheme = dynamicColorSchemes[index % dynamicColorSchemes.length];
          
          return {
            id: `dynamic-${course._id}`,
            title: course.title,
            slug: course.slug.current,
            category: "Dynamic Course",
            duration: course.duration || "Varies",
            level: "All Levels",
            rating: 4.8,
            students: 1000,
            description: trimDescription(course.description),
            features: ["Live Projects", "Expert Training", "Industry Relevant", "Placement Support"],
            icon: <BookOpen className="w-8 h-8" />,
            color: colorScheme.color,
            bgColor: colorScheme.bgColor,
            trending: true,
            new: true,
            isDynamic: true
          };
        });

        // Combine courses - STATIC COURSES FIRST to preserve business priority order
        const combinedCourses = [...staticCourses, ...transformedDynamicCourses];
        
        // Remove duplicates by slug - priority to static courses (business priority)
        const uniqueCourses = combinedCourses.reduce((acc, current) => {
          const existingCourse = acc.find(course => course.slug === current.slug);
          if (!existingCourse) {
            acc.push(current);
          }
          // Note: We keep the FIRST occurrence (static course) if there's a duplicate
          // This preserves your business priority ordering from staticCourses array
          return acc;
        }, []);
        
        // Use the exact order from staticCourses array - NO SORTING to preserve business priority
        // Dynamic courses will be added at the beginning, but static courses maintain their priority order
        const finalCourses = uniqueCourses;

        setAllCourses(finalCourses);
        setFilteredCourses(finalCourses);
        
        console.log('🔍 Dynamic Courses Found:', dynamicCourses.length);
        console.log('📚 Static Courses Defined:', staticCourses.length);
        console.log('🎯 Total Unique Courses:', finalCourses.length);
        console.log('✅ Courses Order: Preserved business priority from staticCourses array');
        
        // Debug: Log any duplicates found
        const dynamicSlugs = transformedDynamicCourses.map(c => c.slug);
        const staticSlugs = staticCourses.map(c => c.slug);
        const duplicates = dynamicSlugs.filter(slug => staticSlugs.includes(slug));
        if (duplicates.length > 0) {
          console.log('⚠️ Duplicate slugs found (dynamic will override static):', duplicates);
        }

      } catch (error) {
        console.error('Error loading courses:', error);
        setAllCourses(staticCourses);
        setFilteredCourses(staticCourses);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  // Filter courses based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCourses(allCourses);
      return;
    }

    const filtered = allCourses.filter(course => {
      const searchLower = searchTerm.toLowerCase();
      return (
        course.title.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        course.features.some(feature => feature.toLowerCase().includes(searchLower))
      );
    });

    setFilteredCourses(filtered);
  }, [searchTerm, allCourses]);

  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchTerm && (
              <div className="mt-4 text-sm text-gray-400">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found for "{searchTerm}"
              </div>
            )}
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
                {searchTerm ? 'Search Results' : 'All Courses'}
              </h2>
              <p className="text-gray-400">
                {loading ? 'Loading courses...' : (
                  `${filteredCourses.length} course${filteredCourses.length !== 1 ? 's' : ''} ${searchTerm ? `found for "${searchTerm}"` : 'available'}`
                )}
              </p>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 animate-pulse">
                  <div className="h-4 bg-white/10 rounded mb-4"></div>
                  <div className="h-6 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded"></div>
                    <div className="h-3 bg-white/10 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && searchTerm && filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
              <p className="text-gray-400 mb-6">
                No courses match your search for "{searchTerm}". Try different keywords or browse all courses.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Show All Courses
              </button>
            </div>
          )}

          {/* Courses Grid */}
          {!loading && filteredCourses.length > 0 && (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/${course.slug}`}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-400"
                  tabIndex={0}
                  aria-label={`View details for ${course.title}`}
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

                    {/* CTA (visible, for clarity) */}
                    <div className="flex items-center justify-center mt-4">
                      <span className={`w-full group/btn px-6 py-3 bg-gradient-to-r ${course.color} text-white rounded-xl font-semibold flex items-center justify-center gap-2 pointer-events-none select-none`}>
                        View Course Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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

// Loading component for Suspense fallback
function CoursesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-16 bg-white/10 rounded-lg w-96 mx-auto mb-6"></div>
            <div className="h-6 bg-white/10 rounded-lg w-80 mx-auto mb-8"></div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 animate-pulse">
                <div className="h-4 bg-white/10 rounded mb-4"></div>
                <div className="h-6 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded"></div>
                  <div className="h-3 bg-white/10 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Main page component with Suspense boundary
export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesLoading />}>
      <CoursesContent />
    </Suspense>
  );
}
