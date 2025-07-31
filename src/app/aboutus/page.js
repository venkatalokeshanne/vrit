'use client';

import React from 'react';
import { CheckCircle, Users, Target, TrendingUp, Award, Clock, MapPin, Mail, Phone, Globe, BookOpen, Monitor, Code, Briefcase, Star, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const courses = [
    'Hadoop', 'Workday Online Training', 'DevOps Online Training', 'DataScience Training',
    'Python Online Training', 'Mulesoft online Training', 'Spark & Scala', 'ServiceNow',
    'Pega', 'Oracle Fusion Financials'
  ];

  const requirements = [
    'A reliable internet connection with appropriate training software installed on your system',
    'A passion to succeed and create a difference in your lives'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">VR IT Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Let your investment reap huge returns – it&apos;s the knowledge that drives the intellect and powers you to be a next generation technocrat!
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Overview</h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                We are one of the reputed global online training institutes, recognized for excellence in imparting quality training, affordable fees and above all the personal attention that we offer to groom you into a full fledged professional. Our highly experienced faculty with over 50+ years of combined experience aims to impart training par excellence.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                From the past few years, online training has been gaining importance to help professionals from all walks of easily enroll, learn, practice and apply the knowledge to gain a competitive edge. With no hassles of physical boundaries, we believe this is the best mode of training. And VR IT is the pioneer in offering several online training programs in varied courses to make you industry relevant professional from day one itself.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Not just online mode of training, we also offer class room sessions for discerning professionals, who have the required time and bandwidth to attend sessions without comprising on other activities.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether online or class room training programs, we assure you would get the best out of your experience - an enriched learning experience with unmatched practical exposure that you gain, while working on industry endorsed live projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Requirements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What you need to have for getting started?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg leading-relaxed">{requirement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Our Unique Approach</h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                We have an exclusive team, who is constantly gauging the industry trends, interacting with industry giants, understanding their requirements and finalizing the courses, which are in high demand. Hence, the courses which we offer are on latest platforms and technologies, perfectly endorsed by industry professionals and veterans in the IT sector.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                This means, you will always stay ahead of other professionals in the industry, equipped with the latest tools in emerging platforms or technologies to get started for next generation careers. Rest assured, your money is worth the investment and you will never be disappointed.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                What&apos;s more? To compliment your technical expertise, we also offer courses in basic etiquette – how to communicate, face interviews and above all certain valuable tips to succeed in this competitive world. These skills are quite vital from a professional stand point, boosting your confidence level and helping you face stringent competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Courses */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sample List of Courses</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of industry-relevant courses designed to boost your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">{course}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Corporate Training</h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                What was relevant a few years back is now obsolete, considering that the technology is fast changing and evolving rapidly to scale new heights to make our lives better and simpler. Organizations are also slowly adapting to the latest technologies in sync with their market demands and expect their associates to keep abreast with the latest technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                However, most of the corporates are not well-equipped to offer proper training, considering their time & resource constraints, lack of good trainers and confused about how to proceed and what topics need to be covered in the training programs.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                This gap is slowly widening and Institutes such as VR IT is well placed to fill the gap faced by corporate employees. With good experience in imparting training for companies of all sizes, there is no exaggeration that many reputed MNCs approach for customized training programs for their employees.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Thus, our corporate programs are designed keeping in mind the requirements of the industry, specific learning outcomes of associates and above all the overall budget of the companies. The offered mode of training is both online and classroom based, suiting the specific needs of the companies.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Right from freshers to experienced veterans, our training programs are targeted across varied learning groups to meet the specific industry demands. We adopt industry endorsed best training practices, unique mentoring, and structured course material that is designed in simple language with easy to understand illustrations and hands-on practice sessions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                And the best part is our training programs are quite affordable, as compared to the costs that they might incur if they organize in-house training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Team */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Our Team</h2>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Our team is dynamic, passionate and above all highly experienced, drawn from renowned institutes like IIT, NIT and from other reputed universities. With a commitment to offer the best possible training, we ensure that our training adheres to the best practices, aimed to assimilate the theoretical knowledge with hands-on exercises and practical training.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                This is complimented by the state-of-the-art infrastructure including audio-visual kits, learning material and spacious classrooms for those who intend to opt for classroom training.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-semibold text-center">
                Let success redefine your career path and we at VR IT solutions will help realize your dreams!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About VR IT Solutions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">About VR IT Solutions</h2>
            <div className="text-center space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                VR IT Solutions is the best software training institute in Hyderabad. We are training professionals online & Class room trainings from Hyderabad. VR IT solutions is trained & placed thousands of people in major MNC&apos;s like Infosys, Wipro, Accenture, Deloitte, Cognizant, Cap Gemini... and other companies as well.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['Infosys', 'Wipro', 'Accenture', 'Deloitte', 'Cognizant', 'Cap Gemini'].map((company, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
                    <span className="text-orange-400 font-semibold">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Information</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-orange-500/50 transition-all duration-300">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Office Location</h3>
              <p className="text-gray-300 leading-relaxed">
                506/A, Aditya Enclave,<br/>
                Nilagiri Block, 5th Floor,<br/>
                Ameerpet, Hyderabad<br/>
                Telangana - 500016
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-blue-500/50 transition-all duration-300">
              <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 leading-relaxed">
                <a href="tel:+919032734343" className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold">
                  +91-9032734343
                </a>
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-teal-500/50 transition-all duration-300">
              <Mail className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 leading-relaxed">
                <a href="mailto:info@vritsol.com" className="text-teal-400 hover:text-teal-300 transition-colors text-lg font-semibold">
                  info@vritsol.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful professionals who have advanced their careers with VR IT Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <ArrowRight className="w-5 h-5" />
                Get Started Today
              </button>
              <button className="border border-orange-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-orange-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                Request Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
