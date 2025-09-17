import Link from 'next/link';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';
import Image from 'next/image'
import {
  Clock,
  CheckCircle,
  Star,
  Phone,
  Globe,
  Server
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'azure-devops-online-training-in-pune';
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function AzureDevOpsTraining() {
    const structuredDataArray = getStructuredDataStatic(COURSE_SLUG);
  const structuredDataJson = structuredDataArray ? JSON.stringify(structuredDataArray) : null;
  // Fetch metadata for dynamic hero image

  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  const _mainImageUrl = courseMetadata?.mainImage || '/azure-devops.jpg';
  const azureDevOpsFaqs = [
    {
      question: "What is Azure DevOps and AWS, and why learn them together?",
      answer: "Azure DevOps is Microsoft's cloud-based DevOps platform, while AWS is Amazon's cloud computing platform. Learning both provides comprehensive skills in CI/CD, cloud infrastructure, and automation, making you versatile in multi-cloud environments with excellent career prospects."
    },
    {
      question: "What are the prerequisites for Azure DevOps and AWS training?",
      answer: "Basic understanding of software development lifecycle and cloud concepts is helpful. No extensive prior experience required as our course covers fundamentals of both platforms, making it suitable for beginners and professionals."
    },
    {
      question: "What is the duration and structure of this training?",
      answer: "Our comprehensive Azure DevOps and AWS training is a 75-day program covering CI/CD pipelines, containerization, infrastructure automation, cloud services, monitoring, and hands-on projects with real-world scenarios."
    },
    {
      question: "What career opportunities are available after this training?",
      answer: "This training opens doors to roles like DevOps Engineer, Cloud Architect, Site Reliability Engineer, Infrastructure Engineer, and Automation Specialist with salaries ranging from ₹8-20 LPA in top companies."
    },
    {
      question: "Which tools and technologies will I learn?",
      answer: "You'll learn Azure DevOps Services, AWS services (EC2, S3, Lambda, RDS), Docker, Kubernetes, Terraform, Ansible, Jenkins, Git, monitoring tools, and infrastructure as code practices."
    },
    {
      question: "Do you provide hands-on practice with real cloud environments?",
      answer: "Yes, students get access to Azure and AWS accounts for hands-on practice. We provide real-world scenarios, CI/CD pipeline setups, infrastructure provisioning, and deployment exercises using actual cloud resources."
    },
    {
      question: "Is this training suitable for developers and system administrators?",
      answer: "Absolutely! The training is designed for both developers wanting to understand deployment and operations, and system administrators looking to modernize their skills with cloud and automation technologies."
    },
    {
      question: "Do you cover containerization and orchestration?",
      answer: "Yes, the curriculum includes comprehensive coverage of Docker containerization, Kubernetes orchestration, microservices architecture, and container deployment strategies on both Azure and AWS platforms."
    },
    {
      question: "What support do you provide for job placement?",
      answer: "We provide 100% placement assistance including resume optimization for DevOps roles, interview preparation, hands-on project portfolio building, job referrals, and continuous career guidance in the DevOps domain."
    },
    {
      question: "How do you ensure practical learning in DevOps?",
      answer: "Our training emphasizes hands-on learning with real projects, setting up complete CI/CD pipelines, infrastructure automation, monitoring implementations, and troubleshooting scenarios that mirror actual workplace challenges."
    }
  ];

  const keyBenefits = [
    "Reliability - Backed by an SLA of 99.9% uptime",
    "Scalability - Multi-tier and scalable architecture", 
    "Access to the latest features every 3 weeks",
    "End to the upgrade process",
    "Round-the-clock support for any queries",
    "Platform agnostic - works on Linux, MacOS, and Windows",
    "Language agnostic - supports C, C++, Java, Python, and more",
    "Cloud provider flexibility"
  ];

  const azureDevOpsServices = [
    {
      name: "Azure Boards",
      description: "Plan smarter with agile planning tools"
    },
    {
      name: "Azure Pipelines",
      description: "Build and deploy with CI/CD pipelines"
    },
    {
      name: "Azure Repos",
      description: "Get unlimited cloud-hosted private Git repos"
    },
    {
      name: "Azure Artifacts",
      description: "Create, host, and share packages"
    },
    {
      name: "Azure Test Plans",
      description: "Test and ship with confidence"
    }
  ];

  const whyChooseUs = [
    "Real time project Explanation",
    "Free Resume preparation",
    "Backup Classes",
    "Career guidance",
    "Mock Tests and Interviews",
    "24/7 support"
  ];

  const trainingModes = [
    "Online Training",
    "ClassRoom Training",
    "Job Support"
  ];

  return (
    <>
      {/* Dynamic SEO Headers from Sanity CMS */}
      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />
      {/* JSON-LD Structured Data for SEO */}


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - Azure DevOps Training In Pune */}
            <section className="bg-gradient-to-br from-indigo-500/15 via-blue-600/20 to-purple-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-indigo-400/30 shadow-2xl shadow-indigo-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    Azure DevOps Training In Pune
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="Azure DevOps Training Course in Pune - VR IT Solutions" className="w-full object-cover border-2 border-indigo-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-indigo-500/25 to-blue-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-indigo-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">Duration: 75 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                {/* Our Locations */}
                <div className="bg-gradient-to-r from-indigo-500/15 to-blue-500/15 rounded-xl p-6 border border-indigo-400/30 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-indigo-400" />
                    Our Locations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/azure-devops-training-in-hyderabad" className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 hover:text-white px-4 py-2 rounded-lg border border-indigo-400/40 hover:border-indigo-300/60 transition-all duration-300 text-sm font-medium">
                      Hyderabad
                    </Link>
                    <Link href="/azure-devops-online-training-in-bangalore" className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 hover:text-white px-4 py-2 rounded-lg border border-indigo-400/40 hover:border-indigo-300/60 transition-all duration-300 text-sm font-medium">
                      Bangalore
                    </Link>
                    <Link href="/azure-devops-online-training-in-chennai" className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 hover:text-white px-4 py-2 rounded-lg border border-indigo-400/40 hover:border-indigo-300/60 transition-all duration-300 text-sm font-medium">
                      Chennai
                    </Link>
                    <Link href="/azure-devops-online-training-in-noida" className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 hover:text-white px-4 py-2 rounded-lg border border-indigo-400/40 hover:border-indigo-300/60 transition-all duration-300 text-sm font-medium">
                      Noida
                    </Link>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                    <p className="text-indigo-100 leading-relaxed">
                      VRIT Solutions is recognized for providing Realtime Azure DevOps Training in Pune and Azure DevOps Online Training throughout world.
                    </p>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                    <p className="text-blue-100 leading-relaxed">
                      VR IT Solutions is one of the best software training institute in Pune. Azure DevOps (previously known as Visual Studio Team Services (VSTS) or Visual Studio Online) is the cloud based DevOps dashboard and provided by Microsoft. Azure DevOps captures over 15 years of investment and learnings in providing tools to support software development teams.
                    </p>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="Azure DevOps Online Training in Pune"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Introduction */}
            <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Introduction
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Azure DevOps is an agnostic DevOps toolchain – a language, platform, and cloud provider from Microsoft. It is a software as a service (SaaS) platform that offers an end-to-end DevOps toolchain for developing and installing software. It is highly flexible concerning application integration, which implies it can easily integrate with almost all the leading applications in the market, making it highly desirable from development and cost perspectives.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    Coming to its architecture, Azure DevOps is developed on a multi-tier and scalable architecture and using Windows Communications Foundations web services. With Azure DevOps, users can plan smarter, collaborate efficiently, and ship quickly with a set of state-of-the-art dev services. DevOps lets users unify resources, processes, and technology to develop innovative products to their clients quickly.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Azure DevOps comes with a unique set of services such as Azure Boards, Azure Pipelines, Azure Repos, Azure Artifacts, and Azure Test Plans. This means users' productivity and efficiency are enhanced manifold without being worried about the complex nitty-gritty of technical paradigms or purchasing costly third-party extension tools.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    And the best part of Azure DevOps is it is highly flexible and platform agnostic, which means it can work on any platform (such as Linux or MacOS), any language (such as C, C++, Java, Python, and more), and any Cloud platform. Moreover, it easily supports the most popular tools in the market.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    Some of the key benefits offered by DevOps include reliability, scalability, access to the latest features (every 3 weeks), and end to the upgrade process. Above all, it is backed by an SLA of 99.9% uptime with round-the-clock support to readily address any users' queries. Because of its huge flexibility of language, platform, and cloud vendors' support, it has become the best option for most organizations.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Azure DevOps Services */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Azure DevOps Services
              </h2>
              <div className="grid gap-4">
                {azureDevOpsServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <Server className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-purple-200 font-semibold mb-1">{service.name}</h3>
                      <p className="text-purple-100 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Benefits */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Key Benefits of Azure DevOps
              </h2>
              <div className="grid gap-4">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-emerald-100">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why learn Azure DevOps? */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why learn Azure DevOps?
              </h2>
              <div className="space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    With ever-increasing opportunities in all facets of application development, it becomes imperative for professionals and students alike to do this course and reap huge benefits out of their investment. Certification in Microsoft Azure from VRIT solutions can help boost your earning potential manifold while providing high-level job security.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    As per a recent prediction, around 80% of all enterprise workloads will eventually migrate to the cloud by 2025, which implies generating a huge demand for DevOps professionals in the coming years. A typical DevOps professional is an expert in developing cloud applications and managing cloud infrastructures, and this training provides the right platform to get started in these areas.
                  </p>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                  <p className="text-orange-100 leading-relaxed">
                    This course is best suited for fresh graduates, who intend to get into the booming Azure job market or professionals with around 2 years of experience who want to make a shift to cloud security for better job prospects.
                  </p>
                </div>
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    VRIT Solutions offers the best DevOps training in Ameerpet, Pune. Become an industry-ready professional with our highly intensive course, backed by strong hands-on live projects. This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    Make VRIT Solutions your first choice for Azure DevOps training in Pune due to its time-tested training methodology coupled with hands-on practical sessions and live projects. We offer the best-in-class Azure DevOps training and Azure DevOps job support to offer the right platform to power your career to the next level.
                  </p>
                </div>
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Training Modes
                </h2>
                <div className="space-y-3">
                  {trainingModes.map((mode, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-violet-500/10 rounded-xl border border-violet-400/20">
                      <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100 text-sm font-medium">{mode}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Why choose VR IT Solutions?
                </h2>
                <div className="space-y-3">
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-rose-500/10 rounded-xl border border-rose-400/20">
                      <Star className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-rose-100 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Azure DevOps Certification Training */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Azure DevOps Certification Training in Pune
              </h2>
              <div className="space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    Looking for top-notch Azure DevOps Certification training in Pune? Look no further than VRIT Solutions in Ameerpet. Our comprehensive training program is designed to equip you with the skills needed to excel in Microsoft Certifications and beyond. With live experts guiding you through every step, you'll gain hands-on experience in Azure DevOps tools and techniques.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    At VRIT Solutions, we understand the importance of Microsoft Certifications in today's competitive job market. Our courses cover essential topics such as version control, continuous integration, agile planning, and collaboration using Azure DevOps. Whether you're new to the field or aiming to enhance your existing skills, our tailored curriculum ensures you're well-prepared for certification exams.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Join VRIT Solutions today and accelerate your career with our industry-leading Azure DevOps Certification training. Gain practical insights, master key concepts, and achieve your professional goals with us. Enroll now to experience learning that goes beyond the ordinary, backed by our commitment to your success.
                  </p>
                </div>
              </div>
            </section>

            {/* Placement Guarantee */}
            <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                100% Placement Support
              </h2>
              <div className="space-y-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <p className="text-green-100 leading-relaxed">
                    After successful completion of the Azure DevOps Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.
                  </p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed font-semibold">
                    VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    So, don't stay behind. Join now for a lucrative career.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={azureDevOpsFaqs} title="Azure DevOps & AWS Training FAQs" theme="aws" />
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

      {/* JSON-LD Structured Data for SEO */}
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
