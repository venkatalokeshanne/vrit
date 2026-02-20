import CourseSidebar from '../components/CourseSidebar';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic  } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Target, 
  BookOpen, 
  Award, 
  Users,
  Cloud,
  Rocket,
  Clock,
  CheckCircle,
  Code,
  Star,
  Phone
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'azure-devops-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for Azure DevOps Training
const azureDevOpsFaqs = [
  {
    question: "What is Azure DevOps and why should I learn it?",
    answer: "Azure DevOps is a cloud-based DevOps dashboard provided by Microsoft that offers an end-to-end DevOps toolchain for developing and installing software. Learning Azure DevOps opens doors to high-paying careers in cloud development, DevOps engineering, and application deployment with excellent job prospects in the growing cloud market."
  },
  {
    question: "What are the prerequisites for Azure DevOps training?",
    answer: "Basic knowledge of software development lifecycle and cloud concepts is helpful but not mandatory. Understanding of programming concepts, version control systems, and basic networking knowledge is beneficial. Our course is designed for beginners and covers all foundational concepts needed to master Azure DevOps."
  },
  {
    question: "What is the duration and fee structure for Azure DevOps training?",
    answer: "Our Azure DevOps training is a comprehensive 75-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
  },
  {
    question: "Do you provide Azure DevOps certification preparation?",
    answer: "Yes, our training prepares you for Microsoft Azure DevOps certification exams. We provide practice tests, exam tips, and additional study materials to help you pass the official Microsoft Azure DevOps certifications."
  },
  {
    question: "What career opportunities are available after Azure DevOps training?",
    answer: "Azure DevOps professionals can work as DevOps Engineer, Cloud Solutions Architect, Azure Developer, Release Manager, Build and Deployment Engineer, and DevOps Consultant. Top companies actively hire Azure DevOps professionals for their cloud transformation initiatives."
  },
  {
    question: "Do you provide hands-on practice and live projects?",
    answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and live projects. Students get access to Azure DevOps environments for practice and work on actual business use cases throughout the course."
  },
  {
    question: "What is covered in the Azure DevOps curriculum?",
    answer: "The curriculum covers Azure Boards, Azure Pipelines, Azure Repos, Azure Artifacts, Azure Test Plans, CI/CD implementation, Infrastructure as Code, monitoring, and live project implementation covering end-to-end DevOps practices."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have tie-ups with 200+ companies looking for Azure DevOps professionals."
  }
];

export default function AzureDevOpsTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const courseModules = [
    "Azure Boards for project planning and tracking",
    "Azure Pipelines for CI/CD implementation",
    "Azure Repos for version control",
    "Azure Artifacts for package management",
    "Azure Test Plans for comprehensive testing",
    "Infrastructure as Code with ARM templates",
    "Monitoring and analytics implementation",
    "Security and compliance in DevOps",
    "Integration with third-party tools",
    "Live Project Implementation"
  ];

  const whoShouldAttend = [
    "Fresh graduates looking to enter DevOps field",
    "Professionals with around 2 years of experience wanting to shift to cloud",
    "Software developers interested in DevOps practices",
    "System administrators moving to cloud infrastructure",
    "IT professionals seeking cloud certifications",
    "Anyone interested in Microsoft Azure technologies"
  ];

  const keyDifferentiators = [
    {
      title: "Real time project Explanation",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice at their own pace and gain deeper insights into Azure DevOps concepts."
    },
    {
      title: "Live project experience",
      description: "Our curriculum is designed to have a live project to help you apply the skills learnt in these sessions successfully to real life scenarios in Azure DevOps environments."
    },
    {
      title: "Industry expert faculty",
      description: "Our faculty is drawn from experienced professionals across industry, occupying various positions such as middle level managers, seasoned experts and experienced Azure professionals."
    },
    {
      title: "Learn Azure DevOps in 75 days",
      description: "We assure you to provide the best training within the required time without compromising on quality at any cost. Our curriculum is designed to make you job-ready as early as possible."
    },
    {
      title: "Industry relevant curriculum",
      description: "You learn the latest from us! Our curriculum is constantly updated once in 6 months to keep pace with the emerging technologies in Azure and DevOps area."
    },
    {
      title: "100% placement support",
      description: "We provide comprehensive placement assistance with job guarantee for deserving students, including resume preparation and interview coaching."
    }
  ];

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Vibrant Orange/Blue */}
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Azure DevOps Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="Azure DevOps Training Course in US, UK, Canada & Australia - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
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
                      <span className="text-teal-300 font-semibold text-center sm:text-left">Duration: 75 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="text-orange-400 font-bold">VRIT Solutions</span> is recognized for providing Realtime Azure DevOps Training in US, UK, Australia, Canada and Azure DevOps Online Training throughout world.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  VR IT Solutions is one of the best software training institute in US, UK, Australia, Canada. Azure DevOps (previously known as Visual Studio Team Services (VSTS) or Visual Studio Online) is the cloud based DevOps dashboard and provided by Microsoft.
                </p>

                <CourseActionButtons 
                  courseName="Azure DevOps"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showJoinNow={false}
                  showCallNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>
            
            {/* About Azure DevOps Training - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                About Azure DevOps Training
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Azure DevOps captures over 15 years of investment and learnings in providing tools to support software development teams.
                  </p>
                </div>
              </div>
            </section>

            {/* Introduction - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-emerald-400 animate-pulse" />
                Introduction
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Azure DevOps is an agnostic DevOps toolchain – a language, platform, and cloud provider from Microsoft. It is a software as a service (SaaS) platform that offers an end-to-end DevOps toolchain for developing and installing software. It is highly flexible concerning application integration, which implies it can easily integrate with almost all the leading applications in the market, making it highly desirable from development and cost perspectives.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    Coming to its architecture, Azure DevOps is developed on a multi-tier and scalable architecture and using Windows Communications Foundations web services. With Azure DevOps, users can plan smarter, collaborate efficiently, and ship quickly with a set of state-of-the-art dev services. DevOps lets users unify resources, processes, and technology to develop innovative products to their clients quickly.
                  </p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    Azure DevOps comes with a unique set of services such as Azure Boards, Azure Pipelines, Azure Repos, Azure Artifacts, and Azure Test Plans. This means users' productivity and efficiency are enhanced manifold without being worried about the complex nitty-gritty of technical paradigms or purchasing costly third-party extension tools. And the best part of Azure DevOps is it is highly flexible and platform agnostic, which means it can work on any platform (such as Linux or MacOS), any language (such as C, C++, Java, Python, and more), and any Cloud platform. Moreover, it easily supports the most popular tools in the market.
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Some of the key benefits offered by DevOps include reliability, scalability, access to the latest features (every 3 weeks), and end to the upgrade process. Above all, it is backed by an SLA of 99.9% uptime with round-the-clock support to readily address any users' queries. Because of its huge flexibility of language, platform, and cloud vendors' support, it has become the best option for most organizations.
                  </p>
                </div>
              </div>
            </section>

            {/* Why learn Azure DevOps? - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-amber-400" />
                Why learn Azure DevOps?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    With ever-increasing opportunities in all facets of application development, it becomes imperative for professionals and students alike to do this course and reap huge benefits out of their investment. Certification in Microsoft Azure from VRIT solutions can help boost your earning potential manifold while providing high-level job security. As per a recent prediction, around 80% of all enterprise workloads will eventually migrate to the cloud by 2025, which implies generating a huge demand for DevOps professionals in the coming years. A typical DevOps professional is an expert in developing cloud applications and managing cloud infrastructures, and this training provides the right platform to get started in these areas.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    This course is best suited for fresh graduates, who intend to get into the booming Azure job market or professionals with around 2 years of experience who want to make a shift to cloud security for better job prospects.
                  </p>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                  <p className="text-orange-100 leading-relaxed">
                    VRIT Solutions offers the best DevOps training in Ameerpet, US, UK, Australia, Canada. Become an industry-ready professional with our highly intensive course, backed by strong hands-on live projects. This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready. So, what are you waiting for?
                  </p>
                </div>
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    Make VRIT Solutions your first choice for Azure DevOps training in US, UK, Australia, Canada due to its time-tested training methodology coupled with hands-on practical sessions and live projects. We offer the best-in-class Azure DevOps training and Azure DevOps job support to offer the right platform to power your career to the next level.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    So, don't stay behind. Join now for a lucrative career.
                  </p>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                  <p className="text-orange-100 leading-relaxed">
                    After successful completion of the Azure DevOps Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                  </p>
                </div>
              </div>
            </section>

            {/* What Do You Learn - Course Modules */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-indigo-400" />
                What do you learn in this course?
              </h2>
              <div className="grid gap-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20 hover:bg-indigo-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100 font-medium">{module}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 font-semibold">
                  <strong className="text-purple-300">Note:</strong> The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <p className="text-blue-100 leading-relaxed">
                  This course is supplemented by relevant lab exercises & azure devops interview questions, lecture and group discussions as well as extensive hands-on practice.
                </p>
              </div>
            </section>

            {/* Who Should Attend - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-400" />
                Who Should Attend
              </h2>
              <div className="space-y-3">
                {whoShouldAttend.map((person, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/20 hover:bg-cyan-500/15 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-100 text-sm font-medium">{person}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Differentiators - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
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

              <div className="mt-6 text-center p-4 bg-gradient-to-r from-indigo-500/15 to-violet-500/15 rounded-xl border border-indigo-400/30 animate-bounce">
                <p className="text-lg font-semibold text-indigo-300">
                  🎯 VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={azureDevOpsFaqs} title="Azure DevOps Training FAQs" theme="azuredevops" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Azure DevOps Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Azure DevOps as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="Azure DevOps"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={false}
                  showDownload={false}
                  showJoinNow={true}
                  showCallNow={true}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="Azure DevOps" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Structured Data */}
      {/* Structured Data for SEO */}

      
      
      </div>
    </>
  );
}
