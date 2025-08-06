import React from 'react';
import Link from 'next/link';
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
  Zap,
  Database,
  Shield,
  BarChart,
  Activity,
  Heart,
} from 'lucide-react';

// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('sas-clinical-training-in-bangalore');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('sas-clinical-training-in-bangalore');
  return structuredData ? JSON.stringify(structuredData) : null;
}

// FAQ Data for SAS Clinical Online Training
const sasClinicalOnlineFaqs = [
  {
    question: "What are the advantages of taking SAS Clinical training online?",
    answer: "Online SAS Clinical training offers flexibility to learn at your own pace, access to recorded sessions for revision, interactive virtual labs with real clinical datasets, live instructor support, and the ability to balance learning with work commitments. You get the same comprehensive curriculum and hands-on experience as in-person training."
  },
  {
    question: "What technical requirements do I need for online SAS Clinical training?",
    answer: "You need a stable internet connection, computer with minimum 8GB RAM, updated web browser, and access to SAS software (provided through our virtual lab environment). We provide cloud-based SAS access, so you don't need to install software locally. Headset with microphone is recommended for interactive sessions."
  },
  {
    question: "How do online practical sessions work for SAS Clinical programming?",
    answer: "Online practical sessions use cloud-based SAS environments with real clinical datasets. You'll have screen sharing capabilities, virtual breakout rooms for group projects, real-time code review with instructors, and collaborative workspace for CDISC standard implementations. All hands-on exercises mirror real pharmaceutical industry scenarios."
  },
  {
    question: "What is the duration and schedule flexibility for online SAS Clinical training?",
    answer: "Our online SAS Clinical program spans 8-10 weeks with multiple scheduling options including weekday evenings (7-9 PM), weekend batches (10 AM-5 PM), and accelerated weekend programs. All sessions are recorded and available for 1 year for unlimited revision and practice."
  },
  {
    question: "How do you ensure quality interaction and doubt resolution in online mode?",
    answer: "We maintain small batch sizes (max 15 students), dedicated Q&A sessions, one-on-one mentoring calls, active discussion forums, 24/7 support chat, and regular assessment with personalized feedback. Instructors are available for individual consultations via video calls throughout the program."
  },
  {
    question: "What online resources and materials will I receive?",
    answer: "You'll receive comprehensive study materials including clinical datasets, CDISC implementation guides, regulatory submission templates, video recordings of all sessions, practice exercises with solutions, sample TLFs (Tables/Listings/Figures), and access to our learning management system with progress tracking."
  },
  {
    question: "How does online placement assistance work for SAS Clinical roles?",
    answer: "Our online placement support includes virtual resume workshops, mock interview sessions via video calls, direct referrals to pharmaceutical companies and CROs, access to our job portal with exclusive openings, LinkedIn profile optimization, and networking opportunities with industry professionals through virtual meetups."
  },
  {
    question: "Can I interact with instructors and peers effectively in online mode?",
    answer: "Yes, through live interactive sessions, virtual study groups, collaborative project work, peer code review sessions, industry expert guest lectures, and alumni networking events. We use advanced online platforms that facilitate seamless interaction and create a community learning environment."
  },
  {
    question: "What happens if I miss a live online session?",
    answer: "All sessions are recorded and available within 24 hours. You can schedule one-on-one catch-up sessions with instructors, access detailed session notes and code samples, join makeup classes for hands-on exercises, and receive personalized assignments to cover missed content. No learning is compromised due to missed sessions."
  },
  {
    question: "How do you provide hands-on experience with clinical data online?",
    answer: "Through cloud-based SAS environment with real de-identified clinical datasets, virtual clinical trial simulations, online access to clinical databases like Oracle Clinical, remote access to regulatory submission tools, and collaborative projects that simulate real pharmaceutical company workflows and CDISC standard implementations."
  }
];

export default async function SASClinicalTrainingInBangalore() {
  const structuredDataJson = await getPageStructuredData();
  const courseStructure = [
    "Introduction to SAS and Clinical Trials",
    "DATA step processing",
    "Presenting and summarising data(Procedures used in Clinical SAS)",
    "Advanced SAS(Macros, Proc SQL)",
    "ICH-GCP",
    "Overview of CDISC (SDTM & ADAM)",
    "Protocol, Statistical Analysis Plan (SAP) and TLFs"
  ];

  const whoCanDo = [
    "Any Graduates/post graduates with science background(any MSC and BSC)",
    "B.Pharmacy, M.Pharmacy, B.Tech (Biotechnology)",
    "MCA, BCA, B.Tech in Computers",
    "BDS, BAMS, BUMS and BHMS"
  ];

  const trainingModes = [
    "Online Training",
    "Classroom Training", 
    "Job Support"
  ];

  const whyChooseUs = [
    "Real time project Explanation",
    "Free Resume preparation",
    "Backup Classes",
    "Career guidance",
    "Mock Tests and Interviews",
    "24/7 support"
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      {/* Course Schema */}
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section - SAS Clinical Training In Bangalore */}
            <section className="bg-gradient-to-br from-blue-500/15 via-indigo-600/20 to-purple-500/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    SAS Clinical Training In Bangalore
                  </span>
                </h1>
                
                {/* Course Image */}
                <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/sas-clinical.jpg"
                    alt="SAS Clinical Training Course in Bangalore - VR IT Solutions"
                    className="w-full object-cover border-2 border-blue-400/30"
                    style={{ aspectRatio: '1200/630' }}
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-blue-500/25 to-indigo-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">+91-9032734343</span>
                    </div>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-300 font-semibold">Duration: 120 Days (Online & Classroom)</span>
                    </div>
                  </div>
                </div>

                <CourseActionButtons 
                  courseName="SAS Clinical"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={true}
                  showDownload={true}
                  showJoinNow={false}
                  showCallNow={false}
                  layout="horizontal"
                  size="lg"
                />
              </div>
            </section>

            {/* SAS Clinical Online Training In Bangalore */}
            <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                SAS Clinical Online Training In Bangalore
              </h2>
              <div className="space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    This project is focused on educating programmers in Pharmaceutical or Contract Research Organizations. VR IT Solutions is of the best sas clinical training in bangalore we are providing the scenario based training with practical examples.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                  <p className="text-blue-100 leading-relaxed">
                    Each session in this training will be followed by solving examples and summarizing contents covered and trainees will be given actual Pharmaceutical data and exercise to work on. These assignments will be evaluated and graded for their improvement and perfection of tasks
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    At the end of project, professional resume will be created and mock interviews will be conducted
                  </p>
                </div>
              </div>
            </section>

            {/* Sas Clinical Programmer Training in Bangalore */}
            <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Sas Clinical Programmer Training in Bangalore
              </h3>
              <div className="space-y-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-100 leading-relaxed">
                    Our training, in real time scenarios, our courses the contents, which will start like this, it will we will go and discuss about the SAS basics then we will discuss say these are all real time scenario is working as a sas clinical research associate he will go and visit the trials visit the sites and he will verify how these trials are conducting in case any disturbances in case any problems if he sees then he will mention in there if he will report.those are really matters a lot. Why? Because we will develop one domain called protocol deviation. it's the kind of thing like it's at once.
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    I'm just discussing about that role what he is going to do the CRA, very familiar with his role. Why because you as a SAS programmer, sometimes he says Well, okay, I'm coming to the importing, exporting, how we are going to take the data and what are the things really important for us that is really sophisticated with the different statements procedures functions, we are going to explain you in details with an example.we are here whatever we included, once the basis has been completed, then we will move to the project.
                  </p>
                </div>
              </div>
            </section>

            {/* SDTM Project Training In Bangalore */}
            <section className="bg-gradient-to-br from-amber-600/15 via-yellow-600/20 to-orange-600/15 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 shadow-xl shadow-amber-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                SDTM Project Training In Bangalore
              </h2>
            </section>

            {/* Clinical SAS Training in Bangalore */}
            <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Clinical SAS Training in Bangalore
              </h3>
              <div className="space-y-6">
                <div className="bg-rose-500/10 rounded-xl p-6 border border-rose-400/20">
                  <p className="text-rose-100 leading-relaxed">
                    I'm going to explain you with the real time examples. we will do how to collect the data is also really matters a lot what type of data we are collecting based on the data after collecting the data, how we are going to collect the data here earlier we had used it the paper base now, everything got changed and we are collecting in the EDC system, EDC system is nothing but an electronic data capturing system using this system. Anybody has opened any Google account as of now. Anyone Yeah, we have an open Google account right. we are going to analyze the thing based on our data, if data is there, we can make different kinds of decisions.
                  </p>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                  <p className="text-pink-100 leading-relaxed">
                    Clinical SAS is the application of SAS technology to clinical domain for clinical trial data analysis in pharmaceutical or biotech and clinical research companies. Familiarity with clinical trial aspects combined with knowledge of SAS can lead to a challenging and rewarding career that also positively impacts & transforms patients' lives.
                  </p>
                </div>
              </div>
            </section>

            {/* Clinical SAS ADaM Training in Bangalore */}
            <section className="bg-gradient-to-br from-purple-600/15 via-violet-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Clinical SAS ADaM Training in Bangalore
              </h3>
              <div className="space-y-6">
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                  <p className="text-purple-100 leading-relaxed">
                    SDTM is the study data tabulation model. And Adam is the analysis data models. These are the standards earlier there is no standards at all, we faced very much very difficulty to submit the data to FDA. why we have to submit the data to FDA after conducting the clinical trials. Why because in order to get the approval on our truck, FDA the Food and Drug Administration who is responsible that America so what they will do, they will verify whatever you are submitting and K in case if you want to submit in case if you want to market a truck, they need to provide worldwide they need to provide the approval based on your data provided you are going to market your truck. So I'm going to explain you what are the phases are involved here. I hope you are able to see my screen these are the phases so one the research is there then they will conduct the preclinical trials play
                  </p>
                </div>
                <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                  <p className="text-violet-100 leading-relaxed">
                    clinical trials are nothing but in the test tube and on animals they are going to perform those trials once the molecule they figure it out, this molecule is going to be helpful for them. So, based on that molecule, they can go ahead and redo in test tube they will verify water compositions are really important for them, then that composition is with some mold they are going to give to the guinea pigs rats. So, those animals are going to be going to take this drug, they will test they will see what kind of changes are happening with that animals. Once after verifying, then they will go back and go to the clinical development research process in this clinical research process, phase one phase two phase three trials are involved Okay, anybody is having any any idea about this clinical procedure what we will do in order to get the drug into the market?
                  </p>
                </div>
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                  <p className="text-indigo-100 leading-relaxed">
                    we will examine the person and observation and we will be noticing the changes which are going through very good. See, here, our objectives will be there and points will be there here safeties are in the phase when safety is a really important metric for us. So, we will take the healthy volunteers and we will do the experiments. Okay. Once this phase has been through, then we will move to the phase two, there, we will take so many subjects as volunteer subjects will be there. Okay, they are going to enroll into the study, once the recruitment is going to be started. Once the subjects are there, we will start our trials here the object to the safety and efficacy. Coming to the phase three here our motto is efficacy. Okay, once all these trials has been conducted, then they will go for the approval process. This is called the post marketing trial.
                  </p>
                </div>
                <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-300/20">
                  <p className="text-purple-100 leading-relaxed">
                    Once the drug is going to be released into the market, we don't know who whomsoever is going to take the truck might be the children might take the people might take we don't know, right. So we might have some problems as well. Consequences as well, some good things as well and adverse events as well. We don't know what will happen. So here they're going to record each and every cases they will analyze and finally, whether they want to approve or not. If they want to terminate, they will do the termination. This is what's going to happen in this clinical development process. Yeah, any doubts here? Anybody is having any doubts? Hello. Now, so as I told you, as I requested you as well, in the Google Forms, how we are going to collect the data, this is called the EDC system, where the CRF case report form is going to give you the details about what type of data you're supposed to collect the data,
                  </p>
                </div>
                <div className="bg-violet-400/10 rounded-xl p-6 border border-violet-300/20">
                  <p className="text-violet-100 leading-relaxed">
                    what type of data you are supposed to collect forever study. If you're going to see here it is a demographic CRF where we are collecting data of birth, gender, gender is going to have whether you are male or female, based on that you are supposed to check that box. As a SAS programmer ,supposed to do few things. And as per my expectation you should know SAS basics and advanced topics, as I told you. advanced topics Next. Next one. I'm hearing some mysteries from one side. Basics and advanced topics. Using this programming tool, see, we are going to see how to convert that raw data how to collect first, from the EDC system, then, we will go to the stt ablation model, then analysis data Don't worry about in case if you don't get the definitions of sdtm ciders, I'm going to explain you in detail, don't worry about all those things. Okay, just to see this is a high level view, raw data will be there, we are going to convert this is a process I'm telling you as TTM, adder and TLS.
                  </p>
                </div>
              </div>
            </section>

            {/* Clinical SAS Programming 100% Job Orientated Training in Bangalore */}
            <section className="bg-gradient-to-br from-teal-600/15 via-cyan-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 shadow-xl shadow-teal-500/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Clinical SAS Programming 100% Job Orientated Training in Bangalore
              </h3>
              <div className="space-y-6">
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
                  <p className="text-teal-100 leading-relaxed">
                    So you might have the doubt in your mind now. Okay. So, five, join as a SAS programmer, in a real time scenario, do I need to do this is called end to end. end to end end to end means you will get to know how the raw data is flowing. Okay, how you're mapping that raw data to standard and how you're preparing the data for analysis and how what type of reports we are generating out of that to make the decisions. So this is called end to end. Then in case if you know from the raw data to sdtm mapping you feel comfortable if you're confident enough on this. So many jobs are there. So many jobs are there. it's not like that you should know from end to end up to TLS. No, it is in our interest in our class, we are going to discuss about stms Adams TLS everything and interview preparation.First one is sdtm programmer Another one is Adam programmer Okay, this ADaM programmer is going to take the input from a programmer is going to take the input see this is a high level raw data to sdtm to Adam introduction of sass and where we use the sas in industries.we have collected data like ecrf CRF EDC electronic data capture.So, how we are going to get the data okay.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <p className="text-cyan-100 leading-relaxed">
                    This project is going to give you an idea about the phases clinical research process, what are the phases we are following right now and the statistical analysis based on the statistical analysis plan, we will get to know how to do the programming part. And coming to the what are the standards we are using right now, to submit that's really matters a lot for us In the sas clinical different kinds of domains, what domains how our data is going to be fitted into the domain. So that we can access very easily we can standardize the things and what are the specifications? What are the requirement documents we are going to use sas clinical. And another standard is the atom standard.
                  </p>
                </div>
              </div>
            </section>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-gradient-to-br from-slate-600/15 via-gray-600/20 to-zinc-600/15 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30 shadow-xl shadow-slate-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Training Modes
                </h2>
                <div className="space-y-3">
                  {trainingModes.map((mode, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-500/10 rounded-xl border border-slate-400/20">
                      <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-100 text-sm font-medium">{mode}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Why to choose VR IT solutions?
                </h2>
                <div className="space-y-3">
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                      <Star className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-emerald-100 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CourseSidebar courseName="SAS Clinical" phoneNumber="+91-9032734343" />
            </div>
          </div>

        </div>

        {/* FAQ Section - Full Width */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-blue-600/15 via-purple-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
            <FAQ faqs={sasClinicalOnlineFaqs} theme="default" />
          </div>
        </div>

        {/* Our Locations Section - Full Width */}
        <div className="mt-12">
          <section className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 shadow-xl shadow-indigo-500/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Our SAS Clinical Training Locations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Link href="/sas-clinical-online-training-in-hyderabad" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold">Hyderabad</div>
              </Link>
              <div className="bg-gradient-to-br from-cyan-600/40 to-blue-600/40 rounded-xl p-4 border-2 border-cyan-400/50 text-center">
                <div className="text-cyan-200 font-bold">Bangalore</div>
                <div className="text-xs text-cyan-300 mt-1">Current Location</div>
              </div>
              <Link href="/sas-clinical-training-in-chennai" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold">Chennai</div>
              </Link>
              <Link href="/sas-clinical-training-in-pune" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold">Pune</div>
              </Link>
              <Link href="/sas-clinical-online-training-in-us-uk-canada-australia" className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 rounded-xl p-4 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 text-center group">
                <div className="text-blue-300 group-hover:text-blue-200 font-semibold text-sm">US/UK/Canada/Australia</div>
              </Link>
            </div>
            <div className="text-center mt-6">
              <p className="text-indigo-200">Choose your preferred location for SAS Clinical training</p>
            </div>
          </section>
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
