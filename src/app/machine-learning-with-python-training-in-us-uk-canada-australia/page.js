import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import Image from 'next/image'
import { 
  Award, 
  TrendingUp,
  Rocket,
  Clock,
  CheckCircle,
  Code,
  Star,
  Phone,
  Database,
  BarChart,
  Brain,
  Activity,
  Cpu
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'machine-learning-with-python-training-in-us-uk-canada-australia';// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



// FAQ Data for Machine Learning with Python Training
const machineLearningFaqs = [
  {
    question: "What is Machine Learning and why should I learn it with Python?",
    answer: "Machine Learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Python is one of the most popular programming languages for this task due to its vast collection of libraries like NumPy, SciPy, Scikit-learn, TensorFlow, and Keras."
  },
  {
    question: "What are the prerequisites for Machine Learning with Python training?",
    answer: "Basic knowledge of Python programming and mathematics/statistics would be helpful. Understanding of programming concepts and basic mathematical operations is beneficial. Our course covers foundational concepts needed to master Machine Learning with Python."
  },
  {
    question: "What is the duration and fee structure for Machine Learning with Python training?",
    answer: "Our Machine Learning with Python training is a comprehensive 45-day program. The course fee is competitive and includes all study materials, lab access, and lifetime support. Contact us at +91-9032734343 for current fee structure and available discounts."
  },
  {
    question: "Do you provide Machine Learning certification preparation?",
    answer: "Yes, our training prepares you for industry-recognized Machine Learning certifications. We provide practice tests, hands-on projects, and additional study materials to help you pass certification exams."
  },
  {
    question: "What career opportunities are available after Machine Learning training?",
    answer: "Machine Learning professionals can work as Machine Learning Engineer, Data Scientist, AI Specialist, Python Developer, Research Scientist, and AI Consultant. Top companies actively hire ML professionals across various industries."
  },
  {
    question: "Do you provide hands-on practice and live projects?",
    answer: "Absolutely! Our training includes extensive hands-on labs, real-world scenarios, and live projects. Students work on actual machine learning use cases using Python libraries and frameworks throughout the course."
  },
  {
    question: "What Python libraries are covered in the curriculum?",
    answer: "The curriculum covers essential Python libraries including NumPy, SciPy, Scikit-learn, Theano, TensorFlow, Keras, PyTorch, Pandas, and Matplotlib for comprehensive machine learning implementation."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% placement assistance including resume preparation, interview coaching, job referrals, and continuous support until you get placed. We have successfully placed students in major companies."
  }
];

export default function MachineLearningWithPythonTrainingInUSUKCanadaAustralia() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  const pythonLibraries = [
    "Numpy",
    "Scipy", 
    "Scikit-learn",
    "Theano",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Pandas",
    "Matplotlib"
  ];

  const dataScienceComponents = [
    "Communication",
    "Data visualization", 
    "Domain knowledge",
    "Experiment design",
    "Statistical inference"
  ];

  const keyDifferentiators = [
    {
      title: "Comprehensive Python Libraries Coverage",
      description: "Master all essential Python libraries used in Machine Learning including NumPy, SciPy, Scikit-learn, TensorFlow, Keras, PyTorch, Pandas, and Matplotlib for complete ML implementation."
    },
    {
      title: "Real-time project Explanation",
      description: "Every theory session is adequately supported by a practical session with ample time given to students to practice machine learning algorithms at their own pace."
    },
    {
      title: "Live project experience",
      description: "Our curriculum is designed to have live projects to help you apply machine learning skills successfully to real life scenarios using Python."
    },
    {
      title: "Industry relevant curriculum",
      description: "Learn the latest machine learning techniques and Python frameworks that are constantly updated to keep pace with emerging AI technologies."
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
                    Machine Learning with Python Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in US, UK, Canada & Australia</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={mainImageUrl} alt="Machine Learning with Python Training Course in US, UK, Canada & Australia - VR IT Solutions" className="w-full object-cover border-2 border-orange-400/30" style={{ aspectRatio: '1200/630' }} width={1200} height={630} />
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
                  courseName="Machine Learning with Python"
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
            
            {/* ML | What Is Machine Learning ? - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
                ML | What Is Machine Learning ?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Arthur Samuel, a pioneer in the field of artificial intelligence and computer gaming, coined the term "Machine Learning". He defined machine learning as – "Field of study that gives computers the capability to learn without being explicitly programmed".
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    In a very layman manner, Machine Learning(ML) can be explained as automating and improving the learning process of computers based on their experiences without being actually programmed i.e. without any human assistance. The process starts with feeding good quality data and then training our machines(computers) by building machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data do we have and what kind of task we are trying to automate.
                  </p>
                </div>
              </div>
            </section>

            {/* Introduction To Machine Learning - Green Theme */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-emerald-400 animate-pulse" />
                Introduction To Machine Learning
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of Computer Programs that can change when exposed to new data. In this article, we'll see basics of Machine Learning, and implementation of a simple machine learning algorithm using python.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Python Libraries For Machine Learning - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-amber-400" />
                Best Python Libraries For Machine Learning
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed">
                    Machine Learning, as the name suggests, is the science of programming a computer by which they are able to learn from different kinds of data. A more general definition given by Arthur Samuel is - "Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed. They are typically used to solve various types of life problems.
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <p className="text-yellow-100 leading-relaxed">
                    In the older days, people used to perform Machine Learning tasks by manually coding all the algorithms and mathematical and statistical formula. This made the process time consuming, tedious and inefficient. But in the modern days, it is become very much easy and efficient compared to the olden days by various python libraries, frameworks, and modules. Today, Python is one of the most popular programming languages for this task and it has replaced many languages in the industry, one of the reason is its vast collection of libraries. Python libraries that used in Machine Learning are:
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4 mt-6">
                {pythonLibraries.map((library, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-orange-500/10 rounded-xl border border-orange-400/20 hover:bg-orange-500/15 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-orange-100 font-medium">{library}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Overview - Indigo Theme */}
            <section className="bg-gradient-to-br from-indigo-600/15 via-purple-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart className="w-8 h-8 text-indigo-400 animate-pulse" />
                Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Data science is a collection of research-based methods and processes often with difficulty insights from data. machine learning in data science is a activity will become ever more important as the amount of data available continues to increase, and the challenge of extracting discernment from the data follows.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    This observation defines of the difference among these three fields:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-purple-100">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Data science produces insights.
                    </li>
                    <li className="flex items-center gap-2 text-purple-100">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Machine learning produces predictions.
                    </li>
                    <li className="flex items-center gap-2 text-purple-100">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Artificial intelligence produces actions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Components Of Data Science - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-cyan-400" />
                The Components Of Data Science
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    Data science contents like machine learning, R, python and Deep learning..etc.. is a combination of mathematics, programming, problem-solving, and data capturing in "inventive ways". It is also the ability to find patterns, along with cleaning, preparing, and aligning data.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Data science is a field that encompasses anything related to data cleansing, preparation, and analysis. It is an umbrella term for techniques used when trying to extract insights and information from data.
                  </p>
                </div>
              </div>
            </section>

            {/* Artificial Intelligence(AI) - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-rose-400" />
                Artificial Intelligence(AI)
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    An artificial intelligence (AI) tools to find an accurate and deep understanding that they are looking for.
                  </p>
                  <p className="text-rose-100 leading-relaxed mt-3">
                    The fabulous data science as an occupation is that it does not necessarily need a degree to get into the field, Skills in maths , statistics or operations research, business or many others, can be leveraged as long as they are supported by a base knowledge of mathematics and programming.
                  </p>
                  <p className="text-rose-100 leading-relaxed mt-3">
                    This role to play as data and AI evolve, and its complexities multiply.
                  </p>
                  <p className="text-rose-100 leading-relaxed mt-3">
                    The increasing intelligence of AI has a lot to do with how neural networks are being applied within the field.
                  </p>
                </div>
                
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-pink-400" />
                    Neural Network
                  </h3>
                  <p className="text-pink-100 leading-relaxed">
                    A neural network is either a system software or hardware that works similar to the tasks performed by neurons of human brain. Neural networks include various technologies like deep learning, and machine learning as a part of Artificial Intelligence (AI).
                  </p>
                </div>

                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-red-400" />
                    Proposed three properties
                  </h3>
                  <p className="text-red-100 leading-relaxed">
                    Most professionals in these fields have been classified as data science, machine learning, or artificial intelligence, even if these are very hard tie together. But they're not interchangeable , The fields do have a great deal of overlap, and there's enough promotion around each of them that the possibility can feel like a matter of marketing.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Science Produces Insights - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-violet-400" />
                Data Science Produces Insights
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed">
                    Data science is prominent from the other two fields because its agenda is to gain insight and understanding. It is descriptive , exploratory and causal, not everything that produces insights qualifies as data science. Traditionally data science involves a combination of statistics, software engineering, and domain expertise.
                  </p>
                </div>
                
                <div className="grid gap-4">
                  {dataScienceComponents.map((component, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20 hover:bg-purple-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-100 font-medium">{component}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    Data scientists might use simple tools on SQL queries. They could also use very complex methods. They might work with distributed data stores to illustrates of records, developing most advanced statistical techniques, and build interactive with set of information as a chart or other image. Whatever they use, the hope strongly to achieve to gain a better understanding of their data.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Key Differentiators - Gradient Theme */}
            <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-slate-400" />
                Our Key Differentiators
              </h2>
              <div className="grid gap-6">
                {keyDifferentiators.map((differentiator, index) => (
                  <div key={index} className="bg-slate-500/10 rounded-xl p-6 border border-slate-400/20 hover:bg-slate-500/15 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-slate-400" />
                      {differentiator.title}
                    </h3>
                    <p className="text-slate-100 leading-relaxed">{differentiator.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center p-4 bg-gradient-to-r from-slate-500/15 to-gray-500/15 rounded-xl border border-slate-400/30 animate-bounce">
                <p className="text-lg font-semibold text-slate-300">
                  🎯 VRIT Solutions offers 100% placement Guaranteed program for deserving students.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <FAQ faqs={machineLearningFaqs} title="Machine Learning with Python Training FAQs" theme="machinelearning" />
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Machine Learning Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    So, what are you waiting for? Join now to make Machine Learning with Python as your career and get a highly paid job!
                  </p>
                </div>
                
                <CourseActionButtons 
                  courseName="Machine Learning with Python"
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
              <CourseSidebar slug={COURSE_SLUG} courseName="Machine Learning with Python" phoneNumber="+91-9032734343" />
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
