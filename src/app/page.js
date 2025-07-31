import { 
  Phone,
  Star, 
  Users, 
  BookOpen, 
  Award, 
  Zap, 
  Target, 
  Globe,
  ChevronRight,
  Play,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Cloud,
  Cpu,
  Brain,
  Rocket,
  Sparkles,
  GraduationCap,
  Building,
  Shield,
  Lightbulb,
  ArrowRight,
  Mail
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  const courses = [
    { name: 'ServiceNow', duration: '40 Days', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Salesforce', duration: '40 Days', icon: Zap, color: 'from-green-500 to-teal-500' },
    { name: 'SAP FICO', duration: '50 Days', icon: Database, color: 'from-purple-500 to-pink-500' },
    { name: 'Pega', duration: '40 Days', icon: Zap, color: 'from-pink-500 to-rose-500' },
    { name: 'Azure DevOps & AWS Cloud', duration: '90 Days', icon: Cpu, color: 'from-indigo-500 to-purple-500' },
    { name: 'Mulesoft', duration: '40 Days', icon: Cloud, color: 'from-teal-500 to-blue-500' },
    { name: 'SAS Clinical', duration: '40 Days', icon: Database, color: 'from-emerald-500 to-green-500' },
    { name: 'SAP Basis', duration: '50 Days', icon: Database, color: 'from-orange-500 to-red-500' },
    { name: 'SAP EWM', duration: '70 Days', icon: Database, color: 'from-yellow-500 to-orange-500' },
    { name: 'SAP HANA Admin', duration: '40 Days', icon: Database, color: 'from-purple-600 to-pink-600' },
    { name: 'S/4 HANA Finance', duration: '40 Days', icon: Database, color: 'from-blue-600 to-cyan-600' },
    { name: 'SAP Leonardo', duration: '50 Days', icon: Brain, color: 'from-green-600 to-teal-600' },
    { name: 'SAP Security & GRC', duration: '60 Days', icon: Shield, color: 'from-red-500 to-pink-500' },
    { name: 'SAP Logistics', duration: '40 Days', icon: Database, color: 'from-indigo-600 to-purple-600' },
    { name: 'Data Science', duration: '90 Hours', icon: Brain, color: 'from-orange-500 to-red-500' },
    { name: 'Python', duration: '40 Days', icon: Code, color: 'from-yellow-500 to-orange-500' },
    { name: 'Python With AWS', duration: '40 Days', icon: Code, color: 'from-green-500 to-blue-500' },
    { name: 'Workday', duration: '60 Days', icon: Users, color: 'from-purple-500 to-pink-500' },
    { name: 'Machine Learning With Python', duration: '60 Days', icon: Brain, color: 'from-blue-500 to-purple-500' },
    { name: 'DevOps With AWS', duration: '60 Days', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { name: 'Informatica MDM', duration: '30 Days', icon: Database, color: 'from-pink-500 to-red-500' },
    { name: 'Full Stack Developer', duration: '45 Days', icon: Code, color: 'from-indigo-500 to-blue-500' },
    { name: 'EDI Training', duration: '45 Days', icon: Code, color: 'from-emerald-500 to-teal-500' },
    { name: 'Hadoop', duration: '60 Days', icon: Database, color: 'from-orange-600 to-yellow-600' }
  ];

  const features = [
    { icon: Users, title: 'Flexible Modes of Training', desc: 'Select any mode of training. You can have online training, classroom training and we deliver trainings for your corporate needs too. Here you get Classroom Training and Online Training also.' },
    { icon: BookOpen, title: '20+ Technology and Non Tech Courses', desc: 'Train your professional team from VR IT Solution\'s 20+ technology and Non Tech Courses. From Artificial Intelligence, Python to Data Science or from Soft skill to Digital Marketing Training.' },
    { icon: Target, title: 'Hands-On Learning', desc: 'Learning can only be effective if there is a Hand-on learning knowledge available. We provide live projects and real time case studies by which it is easy to understand each and every concept practically.' },
    { icon: Award, title: 'Get trained by Industry Experts', desc: 'Our professional trainers have real time industry experience in particular domain. We have the expert trainers with ample amount of training experience.' },
    { icon: Globe, title: 'Unique Method of Training', desc: 'We follow some unique approach in each and every training by which we can achieve our outcome in less time. Also we focus on improving knowledge of students and professionals by easiest techniques.' },
    { icon: Rocket, title: 'True Partnership', desc: 'Our goal is to build an honest relationship with our valuable students, corporate team and provide them best training and business solutions with lifetime support and placements.' }
  ];

  const companies = [
    { name: 'Infosys' },
    { name: 'Wipro' },
    { name: 'Accenture' },
    { name: 'Delloite' },
    { name: 'Cognizent' },
    { name: 'Cap Gemini' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-medium">🏆 Best Software Training Institute in Hyderabad</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-white">Career Journey</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
              Get knowledge in practical way, Everyone satisfied with our innovation way of knowledge transfer. Best Software Training Institute in Hyderabad for best brains!
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {[
                { label: 'Online Training', icon: Globe, gradient: 'from-blue-500 to-blue-600' },
                { label: 'Classroom Training', icon: Users, gradient: 'from-teal-500 to-teal-600' },
                { label: 'Job Support', icon: Target, gradient: 'from-orange-500 to-orange-600' },
                { label: 'Call Now', icon: Phone, gradient: 'from-orange-600 to-red-500' }
              ].map((btn, index) => (
                <button
                  key={btn.label}
                  className={`group relative bg-gradient-to-r ${btn.gradient} text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-sm`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-2">
                    <btn.icon className="w-4 h-4" />
                    <span>{btn.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { number: '5000+', label: 'Students Trained', icon: GraduationCap },
                { number: '20+', label: 'Technology Courses', icon: Code },
                { number: '100%', label: 'Placement Rate', icon: TrendingUp },
                { number: '15+', label: 'Years Experience', icon: Award }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/60 font-medium text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="text-white">VR IT Solutions?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We leverage cutting-edge technology and industry expertise to deliver world-class training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 hover:-translate-y-1 hover:scale-102 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's unique about VR IT Training Center Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">What Makes Us Special</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                What&apos;s unique about
              </span>
              <br />
              <span className="text-white">VR IT Training Center?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Discover the distinctive features that set us apart from other training institutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Expert-Designed Curriculum",
                desc: "A comprehensive curriculum for various courses, designed by Industry experts and academicians from IITs and NITs.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Unique Learning Pedagogy",
                desc: "A unique learning pedagogy, where training is mostly imparted through vigorous theory sessions, supplemented by state-of-the art practical sessions",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: Globe,
                title: "Flexible Training Modes",
                desc: "Choose either of the modes: classroom or online training – as per your convenience",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Unlimited Learning",
                desc: "No defined frontiers – learn from anywhere, anytime.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Award,
                title: "Affordable Excellence",
                desc: "Affordable fees – worth it considering the huge value you would derive once you put your theory into practice",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Code,
                title: "Real-World Projects",
                desc: "Live projects to help you understand the latest industry trends, project execution methodology and more to make you a seasoned IT professional",
                gradient: "from-teal-500 to-blue-500"
              },
              {
                icon: Users,
                title: "Placement Assistance",
                desc: "Placement assistance to deserving candidates in reputed companies",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Rocket,
                title: "And Much More",
                desc: "And much more….",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR IT Training Institute Proficiencies Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                VR IT Training Institute
              </span>
              <br />
              <span className="text-white">Proficiencies</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Discover our comprehensive approach to software training and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: "Career Transformation Focus",
                desc: "VR IT the software trainings we provide will give no trouble for your IT career which transforms every one of those ladders, giving instructors and trainers more control and suppleness to get their trainings across.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: BookOpen,
                title: "Carefully Crafted Curriculum",
                desc: "We define our Curriculum at VR IT with the special care so that students and trainers establish their views into a more effective way students can, inculcation on the subject by the trainers structure, but it's more important how the students are getting benefited by the very construction of the curriculum can guide students on a conventional line over the books.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: Target,
                title: "Summary-Oriented Learning",
                desc: "VR IT is summary oriented where the lectures are going to be very useful for shaping your knowledge and skills, but we will build the presentation resources for the class which gives the students better understanding.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                title: "Continuous Course Updates",
                desc: "VR IT is will update and work on the latest courses and the update the presentations and curriculum accordingly keeping the students' success as primary motive.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Sparkles,
                title: "Dedicated Digital Media Team",
                desc: "VR IT had a dedicated digital media team who work continuous improvements of photos, audio recordings, PowerPoint presentations, movie clips.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Mail,
                title: "Extended Learning Support",
                desc: "Our instructors provide additional information that is not included in the curriculum, through emails and the other sources linked with the course.",
                gradient: "from-teal-500 to-blue-500"
              },
              {
                icon: Users,
                title: "Interactive Learning Methods",
                desc: "VR IT follows different methods in educating the students keeping them engaged in the real time activities through mock interviews and quizzes and also each student is rewarded for his/her outstanding performance.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Award,
                title: "Certification & Practice Support",
                desc: "Instructors at VR IT will help the students in providing the right information about the certification programs and providing the extra practice material.",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((proficiency, index) => (
              <div
                key={proficiency.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proficiency.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-r ${proficiency.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <proficiency.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                    {proficiency.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {proficiency.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Placement Assistance Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Placement Guarantee</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                100% Get Placement Assistance
              </span>
              <br />
              <span className="text-white">& Job Support</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              From the joining of your course till the day you got job, you will surely get placement assistance from VR IT Solutions. As we provide 100% placement to our students.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Building className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">About Our Institute</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Welcome To
                </span>
                <br />
                <span className="text-white">VR IT Solutions</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                That&apos;s what we would precisely define ourselves. In this competitive world, nothing succeeds like knowledge and knowledge is true wealth, which manifests and grows in leaps and bounds. We earnestly believe that every student or a professional, who acquires software training with us should be equipped with the necessary weapons to face the fierce competitive world and emerge victorious. For this, we leverage the best platforms and impart the latest courses in software – be it Hadoop Training, Python Training, Data Science Training, Informatica Training, Servicenow Training, SAP HANA Training, SAP MDM Training, Google Cloud Training, Azure Training or Pega Training etc., to transform you into a full fledged professional, where your success is only measured by your knowledge. So, it&apos;s time to tighten your belts to jump start your career to dizzying heights – get the best out of your investment.
              </p>

              <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
                  Special Note
                </h4>
                <p className="text-white/80 text-sm">
                  Any aspirants who is looking for help on the real time scenarios, on job support, help on the certifications, we have team of experienced and talented working consultants who can assist you on the key points to concentrate and get succeed in their tasks.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                
                {/* Placeholder for company image */}
                <div className="w-full h-64 bg-gradient-to-br from-orange-500/30 to-blue-500/30 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-blue-600/20"></div>
                  <div className="text-center z-10">
                    <Building className="w-16 h-16 text-white/50 mx-auto mb-4" />
                    <p className="text-white/60 font-semibold">VR IT Solutions Office</p>
                    <p className="text-sm text-white/40">[Image Placeholder]</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: TrendingUp, title: '100% Placement', desc: 'Guaranteed job assistance' },
                    { icon: Users, title: 'Expert Faculty', desc: 'Industry professionals' },
                    { icon: Shield, title: 'Certified Courses', desc: 'Industry recognized' },
                    { icon: Globe, title: 'Global Reach', desc: 'Worldwide accessibility' }
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Students Work At
            </h3>
            <p className="text-white/70">
              VR IT Solutions is the best software training institute in Hyderabad. We are training professionals online & Class room tainings from Hyderabad. VR IT solutions is trained & placed thousands of people in majour MNC&apos;s like Infosys, Wipro, Accenture, Delloite, Cognizent, Cap Gemini and other companies as well.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-white/20 to-white/10 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-white/60">{company.name.substring(0, 3)}</span>
                  </div>
                  <p className="text-xs text-white/60">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Our Training Programs</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Trending Software
              </span>
              <br />
              <span className="text-white">Training Courses</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Are you looking to start a new learning journey? Take Best Software Training Courses in Hyderabad at VR IT Solutions to get the best job support & placement in reputed companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative">
                  
                  {/* Course Image Placeholder */}
                  <div className={`w-full h-32 bg-gradient-to-br ${course.color} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="text-center z-10">
                      <course.icon className="w-10 h-10 text-white mb-2" />
                      <p className="text-xs text-white/80">[Course Image]</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-white/60 mb-4 text-sm">Duration: {course.duration}</p>
                  <button
                    className={`w-full bg-gradient-to-r ${course.color} text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>View All Courses</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Transform Your Career?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Join thousands of successful professionals who started their journey with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Free Demo</span>
              </button>
              <a
                href="tel:+919032734343"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
