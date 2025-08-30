import CourseSidebar from '../components/CourseSidebar';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Target, 
  Award,
  Cloud,
  Rocket,
  Clock,
  CheckCircle,
  Star,
  Phone
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'python-with-aws-training';
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function PythonWithAWSTraining() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);
  const pythonAWSFaqs = [
    {
      question: "What is Python with AWS and why is this combination powerful?",
      answer: "Python with AWS combines Python programming with Amazon Web Services cloud platform. This combination is powerful because Python's boto3 SDK provides seamless integration with AWS services, enabling automation, infrastructure as code, serverless computing, and scalable cloud applications with minimal code."
    },
    {
      question: "What are the prerequisites for Python with AWS training?",
      answer: "Basic knowledge of Python programming, understanding of fundamental programming concepts, familiarity with command-line operations, and basic understanding of cloud computing concepts. Having some experience with web development and databases is beneficial but not mandatory."
    },
    {
      question: "What AWS services and Python libraries will I learn?",
      answer: "You'll learn boto3 (AWS SDK for Python), EC2, S3, Lambda, RDS, DynamoDB, CloudFormation, IAM, API Gateway, CloudWatch, SQS, SNS, and other core AWS services. We also cover Python frameworks like Flask/Django for web applications and automation scripts."
    },
    {
      question: "What is the duration of the Python with AWS training course?",
      answer: "Our comprehensive Python with AWS training is designed to be completed in 45 days, which can be taken as weekend batches (8-10 weeks) or weekday batches (6-8 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I work on real cloud automation projects during training?",
      answer: "Yes! You'll work on hands-on projects including AWS resource automation using boto3, serverless applications with Lambda, web applications deployment, infrastructure as code, monitoring solutions, and end-to-end cloud automation projects using real-world scenarios."
    },
    {
      question: "What career opportunities are available after Python AWS training?",
      answer: "Python AWS professionals can work as Cloud Developer, DevOps Engineer, Solutions Architect, Python Developer, AWS Developer, Automation Engineer, Site Reliability Engineer, or Cloud Consultant with salaries ranging from ₹4-16 LPA depending on experience and skills."
    },
    {
      question: "How does Python boto3 help in AWS automation?",
      answer: "Boto3 is the official AWS SDK for Python that allows you to create, configure, and manage AWS services programmatically. It enables infrastructure automation, resource provisioning, monitoring, cost optimization, and building scalable cloud applications without manual AWS console operations."
    },
    {
      question: "Do you cover both serverless and traditional cloud architectures?",
      answer: "Yes, our training covers traditional cloud architectures using EC2, RDS, and VPC, as well as modern serverless architectures using Lambda, API Gateway, DynamoDB, and other managed services. You'll learn when to use each approach effectively."
    },
    {
      question: "Do you provide AWS certification guidance and placement assistance?",
      answer: "Yes, we provide guidance for AWS certifications like AWS Developer Associate and Solutions Architect Associate. We also offer 100% placement assistance including portfolio development, resume building, interview preparation, and connecting with companies hiring Python AWS professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for AWS projects, access to updated course materials, latest AWS service updates, Python library updates, and alumni network for continuous learning and professional growth."
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
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Python With AWS Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={_mainImageUrl} alt="Python With AWS Training Course in Hyderabad - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630}  priority fetchPriority="high" />
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

                <CourseActionButtons 
                  courseName="Python with AWS Training"
                  showEnquireNow={true}
                  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* Python with AWS Introduction - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-purple-400 animate-pulse" />
                Python with AWS Introduction
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Aws is a cloud platform with many resources available for almost all use cases related to IT industry. Sadly we don&apos;t scale up those resources with the click of buttons. We need to use something like Terraform/ CloudFormation/ Serverless / other third party SDKs in real time. In General most of us use Python SDK (boto3 python&aws python examples)to communicate between the resources for very common needs. In this course we are going to cover all types of production ready techniques without leaving basics about the resources.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    <span className="text-purple-400 font-semibold">VRIT Solutions</span> is one of the best python boto3 Training we offer boto3 python&aws python examples with well focused and career-oriented training program in Python with AWS.
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
                  Ready to Start Your Python with AWS Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master Python with AWS and become proficient in cloud automation and infrastructure management. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="Python with AWS Training"
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
            <section className="bg-gradient-to-br from-blue-600/15 via-indigo-600/20 to-purple-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={pythonAWSFaqs} theme="aws" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar slug={COURSE_SLUG} courseName="Python With AWS" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
    </>
  );
}
