import RichSnippetsManager from '../../utils/richSnippets';

/**
 * FAQ Component with Rich Snippets Support
 * Displays FAQs with proper schema markup for rich snippets
 */
export default function FAQRichSnippets({ faqs, title = "Frequently Asked Questions", className = "" }) {
  // Use default FAQs if none provided
  const faqData = faqs && faqs.length > 0 ? faqs : RichSnippetsManager.getDefaultFAQs();
  
  // Generate FAQ Schema for rich snippets
  const faqSchema = RichSnippetsManager.generateFAQSchema(faqData);

  return (
    <section className={`py-12 bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`} aria-labelledby="faq-heading">
      {/* Schema Markup for FAQ Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our training programs and services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <details className="group">
                <summary 
                  className="flex justify-between items-center w-full p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  itemProp="name"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className="w-6 h-6 text-blue-600 transform group-open:rotate-180 transition-transform duration-200 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                
                <div 
                  className="px-6 pb-6 text-gray-700 leading-relaxed"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="prose prose-blue max-w-none">
                    {faq.answer}
                  </div>
                  
                  {/* Author information for rich snippets */}
                  <div itemProp="author" itemScope itemType="https://schema.org/Organization" style={{display: 'none'}}>
                    <span itemProp="name">VR IT Solutions</span>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
        
        {/* Additional CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert counselors are here to help you choose the right course for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contactus" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a 
                href="tel:+919032734343" 
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Course-specific FAQ component
 */
export function CourseFAQ({ courseName, courseFaqs, className = "" }) {
  const defaultCourseFaqs = [
    {
      question: `What are the prerequisites for ${courseName} training?`,
      answer: `Basic computer knowledge is sufficient for ${courseName} training. We provide comprehensive learning from basics to advanced level.`
    },
    {
      question: `What is the duration of ${courseName} course?`,
      answer: `The ${courseName} course duration is typically 2-3 months with flexible weekend and weekday batch options.`
    },
    {
      question: `Will I get placement assistance after ${courseName} training?`,
      answer: `Yes, we provide 100% placement assistance with resume preparation, mock interviews, and connections to our 500+ hiring partners.`
    },
    {
      question: `Do you provide ${courseName} certification?`,
      answer: `Yes, you will receive industry-recognized ${courseName} certification upon successful completion of the course and projects.`
    },
    {
      question: `Is ${courseName} training available online?`,
      answer: `Yes, we offer both online and classroom ${courseName} training with live instructors and hands-on practical sessions.`
    }
  ];

  const faqs = courseFaqs || defaultCourseFaqs;
  const title = `${courseName} Training - Frequently Asked Questions`;

  return (
    <FAQRichSnippets 
      faqs={faqs} 
      title={title} 
      className={className}
    />
  );
}
