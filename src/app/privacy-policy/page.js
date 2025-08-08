import React from 'react';
import FAQ from '../components/FAQ';
import { getCourseBySlugStatic } from '../../utils/staticCourses';

// FAQ Data for Privacy Policy
const privacyPolicyFaqs = [
  {
    question: "What personal information does VR IT Solutions collect?",
    answer: "We collect information you provide when you register for courses, contact us, or use our services. This includes your name, email address, phone number, educational background, and payment information. We also collect usage data about how you interact with our website and learning platform to improve our services."
  },
  {
    question: "How does VR IT Solutions use my personal information?",
    answer: "We use your personal information to provide our training services, process course registrations, communicate course updates, provide customer support, send relevant educational content, and improve our services. We do not sell your personal information to third parties or use it for purposes other than providing our educational services."
  },
  {
    question: "Is my personal information shared with third parties?",
    answer: "We only share your personal information with trusted service providers who help us deliver our services, such as payment processors and learning management system providers. These partners are bound by strict confidentiality agreements. We may also share information when required by law or to protect our rights and safety."
  },
  {
    question: "How long does VR IT Solutions retain my personal data?",
    answer: "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. Course completion records may be retained longer for certification purposes. You can request deletion of your data at any time, subject to legal and business requirements."
  },
  {
    question: "What rights do I have regarding my personal information?",
    answer: "You have the right to access, update, correct, or delete your personal information. You can also request data portability and object to certain processing activities. You may opt-out of marketing communications at any time. Contact our support team at info@vritsol.com to exercise these rights."
  },
  {
    question: "How does VR IT Solutions protect my personal information?",
    answer: "We implement industry-standard security measures including encryption, secure servers, access controls, and regular security audits. Our staff is trained on data protection practices, and we have incident response procedures in place. However, no system is 100% secure, and we encourage you to use strong passwords and protect your account credentials."
  },
  {
    question: "What happens if I'm an end-user whose employer enrolled me in training?",
    answer: "If your employer or an authorized training partner enrolled you, they are our customer and may have their own privacy policies. We collect information under their direction and may not have a direct relationship with you. For privacy inquiries, please contact your administrator first. We do not send personalized advertisements to end-users."
  },
  {
    question: "Does VR IT Solutions use cookies and tracking technologies?",
    answer: "Yes, we use cookies and similar technologies to enhance your browsing experience, remember your preferences, analyze website traffic, and improve our services. You can control cookie settings through your browser preferences. Some cookies are essential for website functionality and cannot be disabled."
  },
  {
    question: "Is my data transferred internationally?",
    answer: "Your personal data may be stored and processed in your region or in other countries where VR IT Solutions or our service providers operate facilities. We ensure appropriate safeguards are in place when transferring data internationally, including using standard contractual clauses and working with providers that comply with applicable data protection laws."
  },
  {
    question: "How can I contact VR IT Solutions about privacy concerns?",
    answer: "For any privacy-related questions, concerns, or requests, please contact us at info@vritsol.com or call +91-9032734343. You can also write to us with your privacy inquiries. We are committed to addressing your concerns promptly and transparently in accordance with applicable data protection laws."
  }
];

// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}



export default function PrivacyPolicy() {
  // Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || '/logo.png';

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 lg:p-8 md:p-12 border border-gray-700/30 shadow-2xl">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            
            <section className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Purpose</h2>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions ("VRIT solutions," "we," or "us") is committed to protecting your privacy. We take data protection and privacy very seriously. This Privacy Policy ("Policy") describes how VRIT solutions collects, uses, shares and secures the personal information you provide when you visit the Websites and Mobile Apps owned and operated by VRIT solutions (listed below), and when you use our Service(s). It also describes your choices regarding the use, access, and correction of your personal information. The use of information collected through our Service(s) shall be limited to the purpose of providing the service for which you have engaged VRIT solutions. The capitalized terms used in this Policy but not defined herein shall have the same meaning as defined in our Terms of Service.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please read this Privacy Policy carefully, as it governs how you use VRIT solutions or its affiliate products. If you do not agree to this Privacy Policy, please do not use VRIT solutions.
              </p>
            </section>

            <section className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Notice to End Users</h2>
              <p className="text-gray-300 leading-relaxed">
                In some cases, an administrator may create an account in VRIT solutions on the behalf of an "End-User" and may provide his/her information, including Personal Information. In such cases, the administrator who may be your Employer or a VRIT solutions Authorized Training Partner (ATP) is our "Customer." We collect Information under the direction of our customers and have no direct relationship with the End-User whose personal data we process.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                An end-user's use of the VRIT solutions platform may be subject to the Customer's policies if any.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our Customer must have the authority to act on behalf of the End-User and to consent to the collection and use of their Personal Information as described in this Privacy Policy.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                If you are an End-user using our platform, please direct your privacy inquiries to your administrator. VRIT solutions is not responsible for the privacy or security practices of our customers, which may differ from those outlined in this privacy statement.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                VRIT solutions does not send personalized advertisements or Marketing communication to end-users.
              </p>
            </section>

            <section className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">International Transfer</h2>
              <p className="text-gray-300 leading-relaxed">
                Personal data collected by VRIT solutions may be stored and processed in your region, and in any other country where VRIT solutions or its affiliates and data sub-processors operate facilities.
              </p>
            </section>

            <section className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Use of your Personal Information and Other Data</h2>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions uses this Privacy Policy to govern the use of personal information you provide to us. We use your personal information solely to provide our services to you.
              </p>
            </section>

          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/15 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-blue-400/20 shadow-xl shadow-blue-500/5">
              <FAQ faqs={privacyPolicyFaqs} theme="default" />
            </div>
          </div>

        </div>
      </div>

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
