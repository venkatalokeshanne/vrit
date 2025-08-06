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
  Briefcase,
  Database,
  Brain,
  Cpu,
  Network,
  BarChart3,
  Activity,
  Zap
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('machine-learning-with-python-training-in-hyderabad');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('machine-learning-with-python-training-in-hyderabad');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default async  function MachineLearningWithPythonTrainingInHyderabad() {
  const structuredDataJson = await getPageStructuredData();

  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('machine-learning-with-python-training-in-hyderabad');
  const mainImageUrl = metadata?.mainImage || '/logo.png';

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

  const dataScienceSkills = [
    "Communication",
    "Data visualization",
    "Domain knowledge",
    "Experiment design",
    "Statistical inference"
  ];

  const machineLearningFaqs = [
    {
      question: "What is Machine Learning and why learn it with Python?",
      answer: "Machine Learning is a subset of AI that enables systems to learn and improve automatically from experience. Python is preferred for ML because of its extensive libraries (NumPy, Pandas, Scikit-learn, TensorFlow), simple syntax, and strong community support, making it ideal for data analysis and ML implementations."
    },
    {
      question: "What are the prerequisites for Machine Learning with Python training?",
      answer: "Basic knowledge of Python programming, understanding of mathematics (statistics, linear algebra, probability), and familiarity with data structures. Having analytical thinking and problem-solving skills is beneficial. We cover Python basics if needed."
    },
    {
      question: "What Machine Learning algorithms and techniques will I learn?",
      answer: "You'll learn supervised learning (Linear/Logistic Regression, Decision Trees, Random Forest, SVM), unsupervised learning (K-Means, Hierarchical Clustering), deep learning basics, neural networks, feature engineering, model evaluation, and deployment techniques."
    },
    {
      question: "What is the duration of the Machine Learning with Python course?",
      answer: "Our comprehensive Machine Learning with Python training is designed to be completed in 60-80 hours, which can be taken as weekend batches (10-12 weeks) or weekday batches (8-10 weeks) depending on your schedule and learning pace."
    },
    {
      question: "Will I work on real Machine Learning projects during training?",
      answer: "Yes! You'll work on multiple hands-on projects including data preprocessing, predictive modeling, classification problems, regression analysis, clustering projects, and a final capstone project using real-world datasets from various industries."
    },
    {
      question: "What career opportunities are available after ML training?",
      answer: "ML professionals can work as Data Scientist, Machine Learning Engineer, AI Developer, Research Scientist, Business Intelligence Analyst, Data Analyst, ML Consultant, or AI Product Manager with salaries ranging from ₹5-20 LPA depending on experience and skills."
    },
    {
      question: "Which Python libraries and tools will I master?",
      answer: "You'll master NumPy for numerical computing, Pandas for data manipulation, Matplotlib/Seaborn for visualization, Scikit-learn for ML algorithms, TensorFlow/Keras for deep learning, Jupyter notebooks, and cloud platforms for model deployment."
    },
    {
      question: "How does this course prepare me for industry requirements?",
      answer: "Our curriculum covers end-to-end ML pipeline including data collection, preprocessing, feature engineering, model selection, hyperparameter tuning, evaluation metrics, deployment strategies, and MLOps practices used in real industry projects."
    },
    {
      question: "Do you provide placement assistance and career support?",
      answer: "Yes, we offer 100% placement assistance including portfolio development, resume building, interview preparation with ML case studies, mock interviews, and connecting you with our network of companies hiring ML professionals."
    },
    {
      question: "What ongoing support do you provide after course completion?",
      answer: "We provide lifetime support including doubt resolution, career guidance, job support for ML projects, access to updated course materials, latest ML trends, research paper discussions, and alumni network for continuous learning and growth."
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
            <section className="bg-gradient-to-br from-orange-500/15 via-blue-600/20 to-teal-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30 shadow-2xl shadow-orange-500/10 animate-fade-in relative">
              {/* Floating Alert Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                🔥 Limited Seats!
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Machine Learning With Python Training
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">in Hyderabad</span>
                </h1>
                
                {/* Course Image - Facebook Post Dimensions */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img src={mainImageUrl}
                    alt="Machine Learning With Python Training Course in Hyderabad - VR IT Solutions"
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

                <CourseActionButtons 
                  courseName="Machine Learning with Python Training in Hyderabad"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />
              </div>
            </section>
            
            {/* ML | What Is Machine Learning - Purple Theme */}
            <section className="bg-gradient-to-br from-purple-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
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
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-emerald-400 animate-pulse" />
                Introduction To Machine Learning
              </h2>
              <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                <p className="text-emerald-100 leading-relaxed">
                  Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of Computer Programs that can change when exposed to new data. In this article, we&apos;ll see basics of Machine Learning, and implementation of a simple machine learning algorithm using python.
                </p>
              </div>
            </section>

            {/* Best Python Libraries For Machine Learning - Amber/Yellow Theme */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-amber-400" />
                Best Python Libraries For Machine Learning
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                  <p className="text-amber-100 leading-relaxed mb-4">
                    Machine Learning, as the name suggests, is the science of programming a computer by which they are able to learn from different kinds of data. A more general definition given by Arthur Samuel is - "Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed. They are typically used to solve various types of life problems.
                  </p>
                  <p className="text-amber-100 leading-relaxed">
                    In the older days, people used to perform Machine Learning tasks by manually coding all the algorithms and mathematical and statistical formula. This made the process time consuming, tedious and inefficient. But in the modern days, it is become very much easy and efficient compared to the olden days by various python libraries, frameworks, and modules. Today, Python is one of the most popular programming languages for this task and it has replaced many languages in the industry, one of the reason is its vast collection of libraries. Python libraries that used in Machine Learning are:
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {pythonLibraries.map((library, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20 hover:bg-yellow-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-yellow-100 font-medium">{library}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Overview - Cyan Theme */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
                Overview
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed mb-4">
                    Data science is a collection of research-based methods and processes often with difficulty insights from data. machine learning in data science is a activity will become ever more important as the amount of data available continues to increase, and the challenge of extracting discernment from the data follows.
                  </p>
                  <p className="text-cyan-100 leading-relaxed mb-4">
                    This observation defines of the difference among these three fields:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100 font-medium">Data science produces insights.</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-indigo-500/10 rounded-lg border border-indigo-400/20">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="text-indigo-100 font-medium">Machine learning produces predictions.</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-100 font-medium">Artificial intelligence produces actions.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Components Of Data Science - Rose Theme */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-rose-400 animate-pulse" />
                The Components Of Data Science
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    Data science contents like machine learning, R, python and Deep learning..etc.. is a combination of mathematics, programming, problem-solving, and data capturing in "inventive ways". It is also the ability to find patterns, along with cleaning, preparing, and aligning data.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    Data science is a field that encompasses anything related to data cleansing, preparation, and analysis. It is an umbrella term for techniques used when trying to extract insights and information from data.
                  </p>
                </div>
              </div>
            </section>

            {/* Artificial Intelligence(AI) - Violet Theme */}
            <section className="bg-gradient-to-br from-violet-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-violet-400" />
                Artificial Intelligence(AI)
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed">
                    An artificial intelligence (AI) tools to find an accurate and deep understanding that they are looking for.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    The fabulous data science as an occupation is that it does not necessarily need a degree to get into the field, Skills in maths , statistics or operations research, business or many others, can be leveraged as long as they are supported by a base knowledge of mathematics and programming.
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    This role to play as data and AI evolve, and its complexities multiply. The increasing intelligence of AI has a lot to do with how neural networks are being applied within the field.
                  </p>
                </div>
                
                {/* Neural Network subsection */}
                <div className="bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-xl p-6 border border-violet-400/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Network className="w-5 h-5 text-violet-400" />
                    Neural Network
                  </h3>
                  <p className="text-violet-100 leading-relaxed">
                    A neural network is either a system software or hardware that works similar to the tasks performed by neurons of human brain. Neural networks include various technologies like deep learning, and machine learning as a part of Artificial Intelligence (AI).
                  </p>
                </div>

                {/* Proposed three properties subsection */}
                <div className="bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-xl p-6 border border-purple-400/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-400" />
                    Proposed three properties
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Most professionals in these fields have been classified as data science, machine learning, or artificial intelligence, even if these are very hard tie together. But they&apos;re not interchangeable , The fields do have a great deal of overlap, and there&apos;s enough promotion around each of them that the possibility can feel like a matter of marketing.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Science Produces Insights - Blue Theme */}
            <section className="bg-gradient-to-br from-blue-600/15 via-indigo-600/20 to-purple-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-400 animate-pulse" />
                Data Science Produces Insights
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Data science is prominent from the other two fields because its agenda is to gain insight and understanding. It is descriptive , exploratory and causal, not everything that produces insights qualifies as data science. Traditionally data science involves a combination of statistics, software engineering, and domain expertise.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {dataScienceSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-indigo-500/10 rounded-xl border border-indigo-400/20 hover:bg-indigo-500/15 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-indigo-100 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    Data scientists might use simple tools on SQL queries. They could also use very complex methods. They might work with distributed data stores to illustrates of records, developing most advanced statistical techniques, and build interactive with set of information as a chart or other image. Whatever they use, the hope strongly to achieve to gain a better understanding of their data.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action - Final Orange/Red Theme */}
            <section className="bg-gradient-to-br from-orange-600/20 via-red-600/25 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 text-center shadow-2xl shadow-orange-500/15 relative">
              {/* Pulsing Alert Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
                  Ready to Start Your Machine Learning Journey?
                </h2>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20 mb-6">
                  <p className="text-red-100 mb-6 leading-relaxed text-lg">
                    Master Machine Learning with Python and become proficient in AI, data science, and predictive analytics. Join our comprehensive training program today!
                  </p>
                </div>
                <CourseActionButtons 
                  courseName="Machine Learning with Python Training in Hyderabad"
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
            <section className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
              <FAQ faqs={machineLearningFaqs} theme="dataScience" />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="Machine Learning With Python" phoneNumber="+91-9032734343" />
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
