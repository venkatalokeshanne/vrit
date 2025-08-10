import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Target, 
  BookOpen, 
  Award, 
  Users,
  Rocket,
  Clock,
  CheckCircle,
  Code,
  Star,
  Phone,
  Database,
  Brain
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'data-science-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for Data Science Training
const dataScienceFaqs = [
  {
    question: "What is Data Science and why should I learn it?",
    answer: "Data Science blends scientific methods, processes, algorithms and systems to generate meaningful knowledge or insights from data. With exponential data growth, Data Science professionals are in high demand for extracting meaningful insights and driving business decisions."
  },
  {
    question: "What are the prerequisites for Data Science training?",
    answer: "Basic knowledge in programming and statistical concepts is helpful. Strong foundation in mathematics and computer programming is beneficial. Our course covers all foundational concepts needed to master Data Science."
  },
  {
    question: "What is the duration and fee structure for Data Science training?",
    answer: "Our Data Science training is a comprehensive 100-day program (200 hours). The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure."
  },
  {
    question: "Do you provide Data Science certification preparation?",
    answer: "Yes, our training prepares you for industry-recognized Data Science certifications. We provide practice tests, exam tips, and additional study materials to help you pass certification exams."
  },
  {
    question: "What career opportunities are available after Data Science training?",
    answer: "Data Science professionals can work as Data Scientist, Data Analyst, Business Analyst, Machine Learning Engineer, AI Specialist, and Data Consultant. Top companies actively hire Data Science professionals across all industries."
  },
  {
    question: "Do you provide hands-on practice and live projects?",
    answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and live projects. Students work on actual business use cases and get practical exposure throughout the course."
  },
  {
    question: "What tools and technologies are covered in the curriculum?",
    answer: "The curriculum covers Python, R, Tableau, Hadoop, Spark, Azure, machine learning algorithms, statistical analysis, data mining, big data technologies, and comprehensive practical implementation."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have successfully placed students in major MNC companies."
  }
];

export default function DataScienceTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const courseModules = [
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
    "Live project to get practical exposure"
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
                    Data Science Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={mainImageUrl} alt="Data Science Training Course in US, UK, Canada & Australia - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630} />
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

                <CourseActionButtons 
                  courseName="Data Science"
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
            
            {/* Overview - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400 animate-pulse" />
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
                    VRIT Solutions is one of the best data science online training we offer data science online course with well focused and career-oriented training program in Datascience. So, get started by clicking here.
                  </p>
                </div>
              </div>
            </section>

            {/* Significance of Data Science in AI - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-emerald-400 animate-pulse" />
                Significance of Data Science in AI
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Data scientists can use a variety of AI tools to generate meaningful insights. Though Data Science is an interdisciplinary field encompassing various domains, the beauty of the course is that it does not require any formal degree to get into this area of knowledge. The skills in subjects like mathematics, statistics/operations research, business or many others can be leveraged with strong foundation in basic mathematics and computer programming. Accordingly, data scientists may apply quantitative techniques to get into deeper aspects of mining for generating insights, i.e. inferential models, segmentation analysis, time series forecasting, synthetic control experiments and more. Hence the data-driven insights are quite crucial in offering strategic direction, wherein data scientists act as consultants, offering the right direction to various business stakeholders on how to act on such inferences for effective decision making.
                  </p>
                </div>
                
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-400" />
                    About the course
                  </h3>
                  <p className="text-teal-100 leading-relaxed">
                    VRIT is one of the few institutes in US, UK, Australia, Canada that offers data science online course well focused, career-oriented training program in Data Science. Due to rapid data explosion, thousands of jobs are getting generated on a day to day basis, offering an attractive career proposition for future data science professionals. However, a career driven course, backed by quality infrastructure and support is what students require to make a head start in the Data Science course.
                  </p>
                </div>

                <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-green-400" />
                    What's so unique about our Institute?
                  </h3>
                  <p className="text-green-100 leading-relaxed">
                    Our Institute is one of the best Institutes in US, UK, Australia, Canada, offering excellent data science online course, along with live projects to make you a thorough bred professional. Our training is designed to make you confident to crack the toughest of the interviews to get placed in top data science companies.
                  </p>
                </div>
              </div>
            </section>

            {/* Curriculum Overview - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-amber-400" />
                Curriculum overview
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
                <p className="text-yellow-200 font-semibold">
                  <strong className="text-yellow-300">Note:</strong> This curriculum is just indicative and is not exhaustive. There might be more topics covered in this curriculum.
                </p>
              </div>
            </section>

            {/* Who Should Attend - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-400" />
                Who should do this course?
              </h2>
              <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20 mb-6">
                <p className="text-cyan-100 leading-relaxed mb-4">
                  VRIT solutions is one of the top-notch institutes in Data Science course, providing the best learning experience with adequate practical exposure to groom you into a all round Data Science professional. This course is designed in such a way that you can immediately get started in the career and take up projects to showcase your expertise.
                </p>
                <p className="text-cyan-100 leading-relaxed">
                  This course is suitable for the following set of professionals:
                </p>
              </div>
              <div className="space-y-3">
                {whoShouldAttend.map((person, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-xl border border-blue-400/20 hover:bg-blue-500/15 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-sm font-medium">{person}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Key Differentiators - Violet Theme */}
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
            </section>

            {/* Why learn Data Science? - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-rose-400 animate-pulse" />
                Why learn Data Science?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    VRIT solutions is one of the best Data Science Online Training institutes in US, UK, Australia, Canada that offers industry relevant curriculum and Data science Interview Questions, backed by state-of-the-art infrastructure to make you a thorough bred professional in this area of knowledge. To manage large amounts of data, data scientists are required, who can handle large volumes of data; draw inferences and generate spot trends upon the data.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    So, what are you waiting for? Join now to make Data Science as your career and get a highly paid job!
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={dataScienceFaqs} title="Data Science Training FAQs" theme="datascience" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
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
                
                <CourseActionButtons 
                  courseName="Data Science"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="Data Science" phoneNumber="+91-9032734343" />
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
