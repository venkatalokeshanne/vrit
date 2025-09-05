import Image from 'next/image';
import DynamicSEOHeaders from '../components/DynamicSEOHeaders';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import { 
  Monitor, 
  Users, 
  Headphones, 
  Clock, 
  Award, 
  CheckCircle,
  Target,
  Rocket
} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = 'services';import FAQ from '../components/FAQ';
import { EnquireNowButton, CallNowButton } from '../components/CourseActionButtons';

// FAQ Data for Services Page
const servicesFaqs = [
  {
    question: "What services does VR IT Solutions offer?",
    answer: "VR IT Solutions offers three main services: Online Training for flexible remote learning, Classroom Training for interactive face-to-face sessions, and comprehensive Job Support including placement assistance, resume building, and interview preparation. All services are designed to provide complete career support and professional development."
  },
  {
    question: "What are the advantages of online training at VR IT Solutions?",
    answer: "Our online training offers maximum flexibility - learn anytime, anywhere with no geographical constraints. You get access to expert trainers, interactive sessions, recorded classes for revision, practical exercises, and the same quality curriculum as classroom training. Perfect for busy professionals who want to upskill without compromising their current commitments."
  },
  {
    question: "How does classroom training differ from online training?",
    answer: "Classroom training provides face-to-face interaction with trainers and peers, immediate doubt resolution, hands-on lab sessions, collaborative learning environment, and direct mentorship. While online training offers flexibility, classroom training provides more intensive, personalized attention and networking opportunities with fellow students."
  },
  {
    question: "What does the job support service include?",
    answer: "Our comprehensive job support includes 100% placement assistance, professional resume building, mock interview sessions, career guidance counseling, soft skills training, direct referrals to top MNCs like Infosys, Wipro, Accenture, and Deloitte, and ongoing support until you secure your desired job role."
  },
  {
    question: "Can I switch between online and classroom training modes?",
    answer: "Yes, we offer flexible learning options. You can start with one mode and switch to another based on your schedule and preferences. We also provide hybrid options where certain sessions can be attended online while practical sessions are conducted in classroom settings, ensuring you get the best of both worlds."
  },
  {
    question: "What kind of practical training do you provide in your services?",
    answer: "All our services include extensive hands-on practical training with real-world projects, live case studies, industry-standard tools and software, simulation exercises, and project-based learning. Whether online or classroom, you'll work on actual scenarios that prepare you for professional challenges."
  },
  {
    question: "How experienced are the trainers providing these services?",
    answer: "Our trainers have 10+ years of industry experience from top companies like TCS, Infosys, Microsoft, and other leading MNCs. They bring real-world expertise, current industry practices, and practical insights to all our services - online training, classroom sessions, and job support guidance."
  },
  {
    question: "What is the success rate of your job support service?",
    answer: "We have successfully placed over 95% of our students in leading companies with salary packages ranging from ₹4-15 lakhs annually. Our job support has helped thousands of professionals transition to better roles in companies like Accenture, Deloitte, Cognizant, Cap Gemini, and many other renowned organizations."
  },
  {
    question: "Do you provide ongoing support after course completion?",
    answer: "Yes, all our services include post-completion support. This includes lifetime access to updated course materials, alumni network access, periodic refresher sessions, job market updates, career advancement guidance, and continued placement assistance until you achieve your career goals."
  },
  {
    question: "How can I choose the right service for my career needs?",
    answer: "Our career counselors provide free consultation to assess your background, career goals, and constraints. Based on this evaluation, we recommend the most suitable service - online training for flexibility, classroom training for intensive learning, or focused job support for immediate career transition. Contact us at +91-9032734343 for personalized guidance."
  }
];

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function Services() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for _mainImageUrl
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
            <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Online/ClassRoom Training's
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We offer complete support in your career initiatives to take you to the next level of career progression. Join VR IT now, get ahead of others and make an enriching career!
          </p>
          
          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-blue-700/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl hover:scale-105 transition-all duration-300">
              <Monitor className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Online Training</h3>
              <p className="text-blue-200">Learn anytime, anywhere with our comprehensive online training programs</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 via-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl hover:scale-105 transition-all duration-300">
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">ClassRoom Training</h3>
              <p className="text-purple-200">Interactive classroom sessions with expert trainers and hands-on experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/20 via-teal-600/20 to-teal-700/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-teal-400/30 shadow-xl hover:scale-105 transition-all duration-300">
              <Headphones className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Job Support</h3>
              <p className="text-teal-200">Complete career support and job placement assistance for your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Training Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Online Training Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Monitor className="w-12 h-12 text-blue-400" />
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Online Training
                  </span>
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/20 shadow-xl">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    A busy professional like you may not have the required bandwidth to attend class room training and hence to facilitate easy and effective learning, VR IT solutions has specially designed online mode of training for all the courses. We adopt the best practices, excellent learning pedagogies and easy to follow examples to make your learning experience, quite pleasurable and enriching. This online training is supported by exemplary practical training to make you a complete professional and job ready. We offer training in basic and advanced courses to meet your specific career goals. So, get started now to learn anytime, anywhere.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    What's more? We offer complete support in your career initiatives to take you to the next level of career progression.
                  </p>
                  
                  <p className="text-blue-200 font-semibold text-lg">
                    Join VR IT now, get ahead of others and make an enriching career!
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <EnquireNowButton 
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                      courseName="online training"
                    >
                      Enquire Now
                    </EnquireNowButton>
                    <CallNowButton 
                      className="border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                      Call Now
                    </CallNowButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Training Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-2xl">
                <Image src="/remote.jpeg"
                  alt="Online Training institutes in Hyderabad"
                  width={600}
                  height={400}
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                  🎯 Learn Anywhere!
                </div>
              </div>
              
              {/* Floating Benefits */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 shadow-xl">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Flexible Timing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Training Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Classroom Training Image */}
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-2xl">
                <Image src="/class.jpg" alt="ClassRoom Training institutes in Hyderabad" className="w-full rounded-xl shadow-lg" width={1200} height={630}  priority fetchPriority="high" />
                <div className="absolute -top-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                  👥 Interactive Learning!
                </div>
              </div>
              
              {/* Floating Benefits */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30 shadow-xl">
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Expert Trainers</span>
                </div>
              </div>
            </div>

            {/* Classroom Training Content */}
            <div className="lg:order-2 space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-12 h-12 text-purple-400" />
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ClassRoom Training
                  </span>
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/20 shadow-xl">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Experience hands-on learning with our interactive classroom training sessions. Our expert trainers provide personalized attention and real-time guidance to ensure you master every concept thoroughly. The classroom environment fosters collaborative learning and immediate doubt resolution.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Interactive Sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Expert Trainers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Hands-on Practice</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Immediate Support</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <EnquireNowButton 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                      courseName="classroom training"
                    >
                      Enquire Now
                    </EnquireNowButton>
                    <CallNowButton 
                      className="border border-purple-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                      Call Now
                    </CallNowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Job Support Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Headphones className="w-12 h-12 text-teal-400" />
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                    Job Support
                  </span>
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-teal-400/20 shadow-xl">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our comprehensive job support services ensure your successful career transition. From resume preparation to interview coaching and placement assistance, we provide end-to-end support to help you secure your dream job in top MNCs.
                  </p>
                  
                  <div className="grid gap-6 my-8">
                    <div className="flex items-start gap-4 p-4 bg-teal-500/10 rounded-lg border border-teal-400/20">
                      <Award className="w-6 h-6 text-teal-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">100% Placement Assistance</h4>
                        <p className="text-gray-300 text-sm">Dedicated placement team to help you find the right job opportunities.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                      <Target className="w-6 h-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Resume & Interview Prep</h4>
                        <p className="text-gray-300 text-sm">Professional resume building and mock interview sessions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                      <Rocket className="w-6 h-6 text-emerald-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Career Guidance</h4>
                        <p className="text-gray-300 text-sm">Expert guidance to help you choose the right career path.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <EnquireNowButton 
                      className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                      courseName="job support"
                    >
                      Enquire Now
                    </EnquireNowButton>
                    <CallNowButton 
                      className="border border-teal-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-teal-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                      Call Now
                    </CallNowButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Support Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500/20 via-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-teal-400/30 shadow-2xl">
                <Image src="/job.jpeg" alt="Job Support services in Hyderabad" className="w-full rounded-xl shadow-lg" width={1200} height={630}  priority fetchPriority="high" />
                <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                  💼 Career Success!
                </div>
              </div>
              
              {/* Floating Benefits */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-600/90 to-green-600/90 backdrop-blur-sm rounded-xl p-4 border border-teal-400/30 shadow-xl">
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">100% Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/15 to-teal-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/20 shadow-xl shadow-blue-500/5">
            <FAQ faqs={servicesFaqs} theme="default" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-teal-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of professionals who have advanced their careers with VR IT Solutions. Get started with our comprehensive training and job support services today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnquireNowButton 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                courseName="VR IT Solutions services"
              >
                Get Started Today
              </EnquireNowButton>
              <CallNowButton 
                className="border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Call Now
              </CallNowButton>
            </div>
          </div>
        </div>
      </section>

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
