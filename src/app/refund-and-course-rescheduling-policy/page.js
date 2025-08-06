import React from 'react';
import FAQ from '../components/FAQ';
import { getPageMetadata, getStructuredData } from '../../utils/metadata';

// FAQ Data for Refund and Course Rescheduling Policy
const refundPolicyFaqs = [
  {
    question: "How long do I have to request a refund after purchasing a course?",
    answer: "You must raise a refund request within 7 days of the commencement of the first session. Any refund request beyond this 7-day period will not be accepted, and no refund will be provided. This policy ensures fair usage while protecting our training resources."
  },
  {
    question: "Can I get a refund if I've already attended some training sessions?",
    answer: "No, the refund request will not be accepted if you have attended the online classroom training for more than 1 day's session or have accessed/downloaded course material from the learning portal. This policy ensures that students cannot misuse the refund system after benefiting from our training content."
  },
  {
    question: "Are discounted courses eligible for refunds?",
    answer: "No, refunds are not provided on discounted courses. This includes promotional offers, early bird discounts, group discounts, or any specially priced courses. The discounted pricing is offered with the understanding that it's a final sale with no refund options."
  },
  {
    question: "What happens if I don't attend my scheduled training session?",
    answer: "If you don't turn up on the given schedule without prior notice, no refund will be provided. However, you may contact our support team to discuss rescheduling options to another available batch, subject to availability and our rescheduling policies."
  },
  {
    question: "How long does the refund process take once approved?",
    answer: "All approved refunds will be processed within 20 working days of receipt of the refund request. The refund will be credited back to the original payment method used during the course purchase. Please note that taxes amount will not be refunded as per our policy."
  },
  {
    question: "Can I get a refund for self-paced learning courses?",
    answer: "No, refunds are not provided for self-paced courses. Once you purchase a self-paced learning course and gain access to the content, the sale is considered final. This policy is in place because self-paced courses provide immediate access to all course materials upon purchase."
  },
  {
    question: "What happens if I share my course access with others?",
    answer: "Course sharing is strictly prohibited. If we find that a course is being shared with others or multiple users, or if the intention of course purchase is to copy the material/content, no refund will be provided, access will be revoked, and the account will be blocked immediately."
  },
  {
    question: "Can VR IT Solutions cancel or postpone training sessions?",
    answer: "Yes, VR IT Solutions reserves the right to postpone or cancel an event due to instructor illness or force-majeure events (like floods, earthquakes, political instability, pandemic situations like COVID-19, etc.). In such cases, we will reschedule the training or provide alternative arrangements."
  },
  {
    question: "What if there's no available batch for me to re-attend the course?",
    answer: "If you want to re-attend the online instructor-led classes for your purchased course and there's no availability of the batch in the near future, the maximum refund applicable will be 10% of the total amount paid. This partial refund acknowledges the inconvenience while covering our administrative costs."
  },
  {
    question: "Who should I contact for refund requests or policy clarifications?",
    answer: "For any queries regarding refunds or course rescheduling, please contact our support team at info@vritsol.com or call +91-9032734343. Our support team will guide you through the refund process and help clarify any aspects of our refund and rescheduling policies."
  }
];

export async function generateMetadata() {
  return await getPageMetadata('refund-and-course-rescheduling-policy');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('refund-and-course-rescheduling-policy');
  return structuredData ? JSON.stringify(structuredData) : null;
}

export default function RefundAndCourseReschedulingPolicy() {
  const structuredDataJson = getPageStructuredData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/30 shadow-2xl">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Refund and Course Rescheduling Policy
            </span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                Thank you for buying our courses. We want to make sure that our users have a rewarding experience while they are discovering information, assessing, and purchasing our training courses, whether it may be for online or classroom training courses.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As with any online purchase experience, the below are the terms and conditions that govern the Refund Policy. When you buy a training course on the vr it solutions website you agree to our <a href="/privacy-policy" className="text-green-400 hover:text-green-300 underline">Privacy Policy</a> and <a href="/terms-and-conditions" className="text-green-400 hover:text-green-300 underline">Terms of use policy</a> and the points below.
              </p>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions reserves the right to postpone/cancel an event because of instructor illness or force-majeure events (like floods, earthquakes, political instability, pandemic situation like COVID19, etc.)
              </p>
            </div>

            <section className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">General Refund Terms</h2>
              <ul className="text-gray-300 space-y-3">
                <li>• The refund request will not be accepted if you have attended the online classroom training for more than 1 day's session or have accessed / downloaded course material from the learning portal.</li>
                <li>• No refund will be provided on discounted courses.</li>
                <li>• No refund will be provided for the academic institute tie up courses.</li>
                <li>• If the delegate doesn't turn up on the given schedule then no refund will be provided.</li>
                <li>• Raise refund request within 7 days of commencement of the first session. Any refund request beyond 7 days of purchasing the course will not be accepted and no refund will be provided.</li>
                <li>• In the case of refund, taxes amount will not be refunded.</li>
                <li>• If the learners wants to re-attended the online instructor led classes for the purchased course and if their no availability of the batch in near future then in that case maximum refund applicable will be 10% of the total amount paid.</li>
                <li>• If due to any technical reason learners are not able to access the self-paced videos or class recordings and already attended the complete course through instructor led online classes then in that case no refund is applicable or a can be provided with a voucher for the amount equivalent of the 10% amount paid by the learner at the time of enrollment.</li>
              </ul>
              <div className="bg-blue-600/20 rounded-lg p-4 mt-6 border border-blue-400/30">
                <p className="text-blue-200 font-semibold">
                  Note: All refunds will be processed within 20 working days of receipt of the refund request.
                </p>
              </div>
            </section>

            <section className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Cancellation and Refunds: Self Paced Learning</h2>
              <ul className="text-gray-300 space-y-3">
                <li>• No refund will be done for Self Placed courses.</li>
                <li>• No refund will be provided and access will be revoked, If anytime found course is been shared with others / multiple users or intention of course purchase is to copy the material/ Content and account will be blocked at the same time.</li>
              </ul>
            </section>

            <section className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Important Notice</h2>
              <div className="bg-orange-600/20 rounded-lg p-4 border border-orange-400/30">
                <p className="text-orange-200 leading-relaxed">
                  Please read all terms and conditions carefully before purchasing any course. For any queries regarding refunds or course rescheduling, please contact our support team at <a href="mailto:info@vritsol.com" className="text-orange-300 hover:text-orange-200 underline">info@vritsol.com</a> or call <a href="tel:+919032734343" className="text-orange-300 hover:text-orange-200 underline">+91-9032734343</a>.
                </p>
              </div>
            </section>

          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/15 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/20 shadow-xl shadow-indigo-500/5">
              <FAQ faqs={refundPolicyFaqs} theme="default" />
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
    </div>
  );
}
