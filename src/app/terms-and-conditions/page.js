import FAQ from '../components/FAQ';
import { getStructuredDataStatic } from '../../utils/staticCourses';

// FAQ Data for Terms and Conditions
const termsAndConditionsFaqs = [
  {
    question: "What do these Terms and Conditions cover?",
    answer: "These Terms and Conditions govern your use of the VR IT Solutions website (vritsol.com), our educational services, content, and products. By using our website or services, you agree to be bound by these terms, which outline your rights and responsibilities as a user or customer."
  },
  {
    question: "Who is responsible if a company provides access to employees?",
    answer: "If you are a company or person providing access to VR IT Solutions products for others, you agree to take full responsibility for damages or indemnification that could properly apply to the customer. The company representative becomes liable for ensuring compliance with our terms."
  },
  {
    question: "What are the main website usage guidelines I must follow?",
    answer: "You must not engage in unlawful activities, abuse or harass others, publish offensive content, upload protected files, attempt hacking, run spam services, distribute unauthorized content, or violate intellectual property laws. Violation of these guidelines may result in blocked access to our services."
  },
  {
    question: "Can I link to VR IT Solutions website from my site?",
    answer: "You may provide legitimate links to our pages, but you cannot mirror or frame our content, use spam anchor text, include our copyrighted materials without permission, or link from sites containing illegal, pornographic, racist, or terrorist content. All links must comply with legal and ethical standards."
  },
  {
    question: "Who owns the content on VR IT Solutions website?",
    answer: "All content on our website, including text, graphics, code, software, and digital images, is protected by copyright and trademark laws owned by VR IT Solutions, its affiliates, or third-party licensors. You may not duplicate, modify, publish, or reproduce this content without written consent."
  },
  {
    question: "How do subscription services work at VR IT Solutions?",
    answer: "You can subscribe to individual courses or collections with automatic billing based on your chosen frequency (monthly/quarterly/yearly). You can freeze subscriptions anytime without charges, but access will be revoked during the freeze period. You can re-subscribe later with a new payment cycle."
  },
  {
    question: "What happens if I violate intellectual property rights?",
    answer: "VR IT Solutions reserves the right to disable or prohibit access for users who infringe on our intellectual property. If you believe your work has been used without permission, contact our support team with details. We take intellectual property violations seriously and will act appropriately."
  },
  {
    question: "Can prices change after I make a purchase?",
    answer: "All prices, products, and offers are subject to change without notice due to market conditions, course termination, or other circumstances. However, the price you paid at the time of purchase remains valid for your specific transaction. We strive to maintain accurate pricing but reserve the right to correct errors."
  },
  {
    question: "What is VR IT Solutions' liability for damages or issues?",
    answer: "VR IT Solutions shall not be liable for direct, indirect, incidental, special, or consequential damages including loss of profits, data, or other intangible losses. This includes issues from service use/inability to use, unauthorized access, third-party conduct, or other matters relating to our products."
  },
  {
    question: "What are my responsibilities as a user regarding indemnification?",
    answer: "You agree to indemnify and hold VR IT Solutions harmless from any third-party claims or demands (including legal expenses) arising from your breach of these terms, violation of laws, or infringement of third-party rights. This protects the company from issues caused by user misconduct."
  }
];

// Metadata for this page
export const metadata = {
  metadataBase: new URL('https://www.vritsol.com'),
  title: 'Terms and Conditions | VR IT Solutions',
  description: 'Read the terms and conditions for VR IT Solutions. Learn about our policies, user guidelines, and service terms.',
  keywords: ['terms and conditions', 'user agreement', 'VR IT Solutions policy'],
  openGraph: {
    title: 'Terms and Conditions | VR IT Solutions',
    description: 'Read the terms and conditions for VR IT Solutions. Learn about our policies, user guidelines, and service terms.',
    url: 'https://www.vritsol.com/terms-and-conditions',
    type: 'website',
    images: []
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | VR IT Solutions',
    description: 'Read the terms and conditions for VR IT Solutions. Learn about our policies, user guidelines, and service terms.',
    images: []
  },
  alternates: {
    canonical: 'https://www.vritsol.com/terms-and-conditions'
  }
};

export default function TermsAndConditions() {
  // Get structured data from static function
  const structuredDataJson = JSON.stringify(getStructuredDataStatic());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 lg:p-8 md:p-12 border border-gray-700/30 shadow-2xl">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Terms and Conditions
            </span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            
            <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions ("Terms and Conditions") control your use of this website VRIT sol.com ("Website"). In these Terms and Conditions, "VRIT solutions" is referred to as the "Company", "us," or "we."
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                'You' refers to a user or a paying customer. If you are a company or another person who gives access to company products, you agree to take responsibility in full in case of damages or indemnification that could properly lie against the customer.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                The VRIT solutions website (the 'Site'), the educational services made available through the site, and the content (the 'Products') are owned, operated, and maintained, as applicable by VRIT solutions ('we', 'our', 'us', or the 'Company'). The Site, Products and Content are, collectively, the 'Company Products'.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By (a) using or accessing the Company Products, including, but not limited to downloading or accessing, (b) offering a Course through the Site or Software; you agree to the terms and conditions outlined in these Terms of Use (the "Terms")
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By using this website or its Products and Services, You Agree and Warrant that you have read, understood, and agreed to be bound by these terms. The company's privacy policy can be found at Privacy Policy. If you do not accept these terms, you must not use - and are not authorized to use - all or any portion of the company's website and its products or services (as defined below).
              </p>
            </div>

            <section className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Please read these points carefully before you use the services of this site:</h2>
              <ul className="text-gray-300 space-y-3">
                <li>• You should not unlawfully use this site; you must respect the website terms and conditions and follow the Privacy Policy.</li>
                <li>• Under no circumstances, will the company be liable for any change in the content that it publishes on website through its products and services, including but not limited to any errors, omissions, loss, or damage experienced in connection with the use of exposure of any content that is made available via our products, services, or various resources such as email, blog, etc.</li>
                <li>• Our services are free for any user, who have access to the internet. However, we are not responsible for the charges incurred for the usage of hardware, software, or internet services that are provided by any third-party service. Also, the user is fully responsible for the proper functioning of computer hardware and internet.</li>
                <li>• You will be required to use your login credentials for some of the sections on the site and the company reserves the right to block access to our services for any user who does not follow these conditions.</li>
                <li>• We make sure that users get uninterrupted access to our service, but there is no obligation to do so.</li>
                <li>• VRIT solutions is not responsible and is not obligated for issues in your network or server beyond certain limits.</li>
              </ul>
            </section>

            <section className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Website usage guidelines</h2>
              <ul className="text-gray-300 space-y-3">
                <li>• Do not insult, abuse, harass, stalk, threaten, or otherwise infringe the rights of others;</li>
                <li>• Do not publish, post, distribute or disseminate any defamatory, infringing, indecent, offensive, or unlawful material or information.</li>
                <li>• Do not upload, install or transfer files that are protected by Intellectual Property Laws or software which affects other computers.</li>
                <li>• Do not edit HTML source code, perform reverse engineering, or attempt to hack.</li>
                <li>• Do not run Spam services/scripts or anything which could affect the infrastructure, and in turn, the users.</li>
                <li>• Do not communicate spam, advertise, or sell services such as digital downloads, eBooks, or phishing links.</li>
                <li>• Do not copy, distribute, and indulge in plagiarism with website content or user-submitted content.</li>
                <li>• Do not use any content which violates any legal, regulatory, Governmental, or network operator conditions or codes of practice.</li>
              </ul>
            </section>

            <section className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Links and Hyperlinks Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This website may have links to other websites. We do not undertake any control over the content of these websites; nor are we responsible for their website content. The sole purpose of the included links is to provide users with the right information. Hence, VRIT solutions will not be held responsible for any of the third-party content. Also, please adhere to the following set of guidelines:
              </p>
              <ul className="text-gray-300 space-y-3">
                <li>• You may not mirror or frame the homepage or any other pages of this Site on any other website or webpage.</li>
                <li>• Do not provide hyperlinks to VRIT solutions pages and subpages with spam links/anchor text, which could provide a false impression. This may create misunderstandings for the users.</li>
                <li>• Do not use or include copyrighted or registered trademarks, or Intellectual property images, design, or content as a link to the VRIT solutions website.</li>
                <li>• Do not link to pages which support racism or terrorism.</li>
                <li>• Do not link to pages that provide pornographic content and violate human and animal rights.</li>
                <li>• Do not link pages to the content that infringes the intellectual property of any third party, person, or entity.</li>
                <li>• Do not link pages to the content that violates any legal, regulatory, Governmental, or network operator conditions or codes of practice.</li>
              </ul>
            </section>

            <section className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Copyright and Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We value and respect others' intellectual property and expect our users to do the same. The entire contents of the Site are protected by copyright and trademark laws. The owner of the copyrights and trademarks are VRIT solutions.com, its affiliates, or other third-party licensors. The material on the site, including text, graphics, code, and/or software is copyrighted and belongs to VRIT solutions. Hence, you may not duplicate, modify, publish, or reproduce the content in any manner.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                VRIT solutions does not take any responsibility for the content on other sites (except our partners and affiliates) that you may find when searching or accessing VRIT solutions' products or services. The Privacy Policy and Terms of Use of the sites that you visit will administer that material.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                VRIT solutions has all the rights to disable or prohibit access to users who do not respect, and involve in the infringement of VRIT solutions intellectual property.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You are not allowed to use any of the digital images or logos from the website. In case of copyright issues, there has to be a written consent from the trademark owner.
              </p>
            </section>

            <section className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Claims of Intellectual Property Violations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you believe that your work has been used without your permission in a way that prompts copyright infringement, please provide us with the information given below and we will act on it. You can reach VRIT solutions to notify your claims of copyright by writing to the support team of VRIT solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                No additional or different terms contained in any purchase order, document, transmission, or other communication shall be binding upon VRIT solutions unless agreed to by VRIT solutions in writing.
              </p>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions reserves the right to modify, change without prior notice, and in its sole discretion, limit the order quantity on any item and refuse service to anyone.
              </p>
            </section>

            <section className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Subscription Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You will be allowed to subscribe to a particular course or collection of courses ("Subscription Services") and will be charged automatically, depending on payment frequency chosen by you, such as monthly/quarterly/yearly, as may be applicable.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                You will be permitted to freeze or schedule the freeze of the Subscription Services at any time and VRIT solutions shall not charge you for any such opted Subscription Services according to the payment cycle. Further, the Subscription Services, access will be revoked if the user opts to freeze the subscription. You will have the option to re-subscribe to the particular Subscription Services again and the payment cycle will start accordingly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions retains the rights to modify the Subscription Service from time to time, including by adding or deleting features and functions, to improve your experience. But we will not make changes to the Subscription Service that materially minimizes the functionality of the Subscription Service provided to you during the Subscription Terms. We might provide some or all elements of the Subscription Service through third-party service providers.
              </p>
            </section>

            <section className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Limit of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                You expressly understand and agree that the Company shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including, damages for loss of profits, goodwill, use, data, or other intangible losses (even if the Company has been advised of the possibility of such damages), resulting from (i) the use or the inability to use the service; (ii) the cost of procurement of substitute goods and services resulting from any goods, or services purchases or obtained or messages received or transactions entered into through or from the Website or otherwise; (iii) unauthorized access to or alteration of your transmissions or data or confidential information; (iv) statements or conduct of any third party on the Products; (v) or (v) any other matter relating to the Products.
              </p>
            </section>

            <section className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Indemnity</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold the Company and our subsidiaries, affiliates, officers, directors, agents, and employees, harmless from any claim or demand (including legal expenses and the expenses of other professionals) made by a third party due to or arising out of your breach of this Terms of Use or the documents it incorporates by reference or your violation of any law or the rights of a third party.
              </p>
            </section>

            <section className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All prices, products, and offers of the VRIT solutions website are subject to change without notice.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                While we make sure to provide the most accurate and up-to-date information, in some cases one or more items on our website may be priced incorrectly. This might happen due to human errors, digital images, technical errors, or a mismatch in pricing information received from our suppliers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions reserves the right to change prices for all our products, offers, or deals. These changes are done due to market conditions, course termination, providers, price changes, errors in advertisements, and other mitigating circumstances. However, the price you paid at the time of purchase still holds for you.
              </p>
            </section>

            <section className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Proprietary Use of VRIT solutions Study Material</h2>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions reserves the right to change prices for all our products, offers, or deals. These changes are done due to market conditions, course termination, providers, price changes, errors in advertisements, and other justifying circumstances. However, the price you paid at the time of purchase still holds for you.
              </p>
            </section>

          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-orange-500/10 via-red-500/15 to-pink-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-orange-400/20 shadow-xl shadow-orange-500/5">
              <FAQ faqs={termsAndConditionsFaqs} theme="default" />
            </div>
          </div>

        </div>
      </div>

      {/* Structured Data for SEO */}

    </div>
  );
}
