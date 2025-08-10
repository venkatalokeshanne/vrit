'use client';

import Image from 'next/image';
import CourseSidebar from '../components/CourseSidebar';
import FAQ from '../components/FAQ';
import { CourseActionButtons } from '../components/CourseActionButtons';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import { 
  Target, 
  BookOpen, 
  Award, 
  TrendingUp,
  Clock,
  CheckCircle,
  FileText,
  Settings,
  Star,
  Phone
} from 'lucide-react';

export default function DynamicCoursePage({ course }) {
  // Get SEO data from existing courseMetadata by matching slug
  const courseMetadata = getCourseBySlugStatic(course.slug.current);
  const _mainImageUrl = courseMetadata?.mainImage || '/logo.png';
  
  // Use existing structured data from courseMetadata if available
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  return (
    <>
      {/* Structured Data */}
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
              
              {/* Hero Section */}
              <section className="bg-gradient-to-br from-blue-500/15 via-purple-600/20 to-indigo-500/15 backdrop-blur-sm rounded-3xl p-4 lg:p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-500/10">
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {course.title}
                    </span>
                  </h1>
                  
                  {/* Course Image */}
                  <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl">
                    <Image 
                      src={_mainImageUrl}
                      alt={course.title}
                      width={1200}
                      height={630}
                      className="w-full object-cover border-2 border-blue-400/30"
                      style={{ aspectRatio: '1200/630' }}
                      onError={(e) => {
                        e.target.src = '/logo.png';
                      }}
                    />
                  </div>
                  
                  <div className="inline-block bg-gradient-to-r from-blue-500/25 to-purple-500/25 backdrop-blur-sm rounded-xl px-6 py-4 mb-6 border border-blue-400/40">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-300 font-semibold">+91-9032734343</span>
                      </div>
                      {course.duration && (
                        <>
                          <span className="hidden sm:block text-gray-300">|</span>
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-purple-400" />
                            <span className="text-purple-300 font-semibold">Duration: {course.duration}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <CourseActionButtons 
                    courseName={course.title}
                    showEnquireNow={true}
                    showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
                    showCallNow={false}
                    showJoinNow={false}
                  />
                </div>
              </section>
              
              {/* Course Description */}
              <section className="bg-gradient-to-br from-blue-600/15 via-cyan-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/30 shadow-xl shadow-blue-500/10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  About {course.title}
                </h2>
                <div className="space-y-6">
                  {course.description && Array.isArray(course.description) ? (
                    course.description.map((paragraph, index) => (
                      <div key={index} className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                        <p className="text-blue-100 leading-relaxed">
                          {paragraph}
                        </p>
                      </div>
                    ))
                  ) : course.description ? (
                    <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                      <p className="text-blue-100 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  ) : null}
                </div>
              </section>

              {/* Course Modules */}
              {course.courseModules && course.courseModules.length > 0 && (
                <section className="bg-gradient-to-br from-purple-600/15 via-pink-600/20 to-rose-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-purple-400/30 shadow-xl shadow-purple-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-6">
                    {course.courseModules.map((module, index) => (
                      <div key={module._key || index} className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                          <div className="bg-purple-600/30 rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-purple-300 font-bold text-sm">{index + 1}</span>
                          </div>
                          {module.title}
                        </h3>
                        {module.topics && module.topics.length > 0 && (
                          <div className="space-y-2 ml-11">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-purple-100">{topic}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Who Should Attend */}
              {course.whoShouldAttend && course.whoShouldAttend.length > 0 && (
                <section className="bg-gradient-to-br from-green-600/15 via-emerald-600/20 to-teal-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-green-400/30 shadow-xl shadow-green-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Who Should Attend
                  </h2>
                  <div className="space-y-4">
                    {course.whoShouldAttend.map((item, index) => (
                      <div key={index} className="bg-green-500/10 rounded-xl p-4 border border-green-400/20">
                        <p className="text-green-100 flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* What You Learn in This Course */}
              {course.whatYouLearn && course.whatYouLearn.length > 0 && (
                <section className="bg-gradient-to-br from-cyan-600/15 via-blue-600/20 to-indigo-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    What You Learn in This Course
                  </h2>
                  <div className="space-y-4">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-400/20">
                        <p className="text-cyan-100 flex items-center gap-3">
                          <Star className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <section className="bg-gradient-to-br from-rose-600/15 via-pink-600/20 to-red-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-rose-400/30 shadow-xl shadow-rose-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-rose-400" />
                    Prerequisites
                  </h2>
                  <div className="space-y-4">
                    {course.prerequisites.map((item, index) => (
                      <div key={index} className="bg-rose-500/10 rounded-xl p-4 border border-rose-400/20">
                        <p className="text-rose-100 flex items-center gap-3">
                          <Target className="w-5 h-5 text-rose-400 flex-shrink-0" />
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Why Should You Join This Course */}
              {course.whyJoinCourse && course.whyJoinCourse.length > 0 && (
                <section className="bg-gradient-to-br from-emerald-600/15 via-teal-600/20 to-green-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-emerald-400" />
                    Why Should You Join This Course?
                  </h2>
                  <div className="space-y-4">
                    {course.whyJoinCourse.map((item, index) => (
                      <div key={index} className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
                        <p className="text-emerald-100 flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Custom Sections */}
              {course.customSections && course.customSections.length > 0 && (
                <>
                  {course.customSections.map((section, index) => {
                    // Define color schemes for different sections
                    const colorSchemes = [
                      {
                        gradient: "from-purple-600/15 via-violet-600/20 to-indigo-600/15",
                        border: "border-purple-400/30",
                        shadow: "shadow-purple-500/10",
                        iconColor: "text-purple-400",
                        bgColor: "bg-purple-500/10",
                        borderColor: "border-purple-400/20",
                        textColor: "text-purple-100"
                      },
                      {
                        gradient: "from-cyan-600/15 via-sky-600/20 to-blue-600/15",
                        border: "border-cyan-400/30",
                        shadow: "shadow-cyan-500/10",
                        iconColor: "text-cyan-400",
                        bgColor: "bg-cyan-500/10",
                        borderColor: "border-cyan-400/20",
                        textColor: "text-cyan-100"
                      },
                      {
                        gradient: "from-amber-600/15 via-orange-600/20 to-red-600/15",
                        border: "border-amber-400/30",
                        shadow: "shadow-amber-500/10",
                        iconColor: "text-amber-400",
                        bgColor: "bg-amber-500/10",
                        borderColor: "border-amber-400/20",
                        textColor: "text-amber-100"
                      },
                      {
                        gradient: "from-lime-600/15 via-green-600/20 to-emerald-600/15",
                        border: "border-lime-400/30",
                        shadow: "shadow-lime-500/10",
                        iconColor: "text-lime-400",
                        bgColor: "bg-lime-500/10",
                        borderColor: "border-lime-400/20",
                        textColor: "text-lime-100"
                      },
                      {
                        gradient: "from-pink-600/15 via-rose-600/20 to-red-600/15",
                        border: "border-pink-400/30",
                        shadow: "shadow-pink-500/10",
                        iconColor: "text-pink-400",
                        bgColor: "bg-pink-500/10",
                        borderColor: "border-pink-400/20",
                        textColor: "text-pink-100"
                      },
                      {
                        gradient: "from-teal-600/15 via-emerald-600/20 to-green-600/15",
                        border: "border-teal-400/30",
                        shadow: "shadow-teal-500/10",
                        iconColor: "text-teal-400",
                        bgColor: "bg-teal-500/10",
                        borderColor: "border-teal-400/20",
                        textColor: "text-teal-100"
                      }
                    ];
                    
                    // Cycle through color schemes
                    const colorScheme = colorSchemes[index % colorSchemes.length];
                    
                    return (
                      <section 
                        key={section._key || index} 
                        className={`bg-gradient-to-br ${colorScheme.gradient} backdrop-blur-sm rounded-2xl p-4 lg:p-8 border ${colorScheme.border} shadow-xl ${colorScheme.shadow}`}
                      >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                          <FileText className={`w-8 h-8 ${colorScheme.iconColor}`} />
                          {section.heading}
                        </h2>
                        <div className="space-y-6">
                          {section.content && section.content.map((paragraph, paragraphIndex) => (
                            <div key={paragraphIndex} className={`${colorScheme.bgColor} rounded-xl p-6 border ${colorScheme.borderColor}`}>
                              <p className={`${colorScheme.textColor} leading-relaxed`}>
                                {paragraph}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </>
              )}

              {/* Key Differentiators */}
              {course.keyDifferentiators && course.keyDifferentiators.length > 0 && (
                <section className="bg-gradient-to-br from-orange-600/15 via-amber-600/20 to-yellow-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/30 shadow-xl shadow-orange-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Key Differentiators
                  </h2>
                  <div className="space-y-4">
                    {course.keyDifferentiators.map((item, index) => (
                      <div key={index} className="bg-orange-500/10 rounded-xl p-4 border border-orange-400/20">
                        <p className="text-orange-100 flex items-center gap-3">
                          <Award className="w-5 h-5 text-orange-400 flex-shrink-0" />
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <section className="bg-gradient-to-br from-violet-600/15 via-indigo-600/20 to-blue-600/15 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-violet-400/30 shadow-xl shadow-violet-500/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQ faqs={course.faqs} />
                </section>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <CourseSidebar slug={course.slug.current} courseName={course.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
