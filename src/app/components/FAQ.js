'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = ({ faqs, title = "Frequently Asked Questions", theme = "default" }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const getThemeClasses = () => {
    const themes = {
      default: {
        container: 'from-blue-600/15 via-cyan-600/20 to-teal-600/15',
        border: 'border-blue-400/30',
        shadow: 'shadow-blue-500/10',
        icon: 'text-blue-400',
        itemBg: 'bg-blue-500/10 hover:bg-blue-500/15',
        itemBorder: 'border-blue-400/20 hover:border-blue-400/40',
        text: 'text-blue-100',
        expandedBg: 'bg-blue-500/5'
      },
      servicenow: {
        container: 'from-cyan-600/15 via-blue-600/20 to-indigo-600/15',
        border: 'border-cyan-400/30',
        shadow: 'shadow-cyan-500/10',
        icon: 'text-cyan-400',
        itemBg: 'bg-cyan-500/10 hover:bg-cyan-500/15',
        itemBorder: 'border-cyan-400/20 hover:border-cyan-400/40',
        text: 'text-cyan-100',
        expandedBg: 'bg-cyan-500/5'
      },
      salesforce: {
        container: 'from-green-600/15 via-teal-600/20 to-emerald-600/15',
        border: 'border-green-400/30',
        shadow: 'shadow-green-500/10',
        icon: 'text-green-400',
        itemBg: 'bg-green-500/10 hover:bg-green-500/15',
        itemBorder: 'border-green-400/20 hover:border-green-400/40',
        text: 'text-green-100',
        expandedBg: 'bg-green-500/5'
      },
      sap: {
        container: 'from-orange-600/15 via-yellow-600/20 to-amber-600/15',
        border: 'border-orange-400/30',
        shadow: 'shadow-orange-500/10',
        icon: 'text-orange-400',
        itemBg: 'bg-orange-500/10 hover:bg-orange-500/15',
        itemBorder: 'border-orange-400/20 hover:border-orange-400/40',
        text: 'text-orange-100',
        expandedBg: 'bg-orange-500/5'
      },
      python: {
        container: 'from-yellow-600/15 via-green-600/20 to-blue-600/15',
        border: 'border-yellow-400/30',
        shadow: 'shadow-yellow-500/10',
        icon: 'text-yellow-400',
        itemBg: 'bg-yellow-500/10 hover:bg-yellow-500/15',
        itemBorder: 'border-yellow-400/20 hover:border-yellow-400/40',
        text: 'text-yellow-100',
        expandedBg: 'bg-yellow-500/5'
      },
      dataScience: {
        container: 'from-purple-600/15 via-pink-600/20 to-indigo-600/15',
        border: 'border-purple-400/30',
        shadow: 'shadow-purple-500/10',
        icon: 'text-purple-400',
        itemBg: 'bg-purple-500/10 hover:bg-purple-500/15',
        itemBorder: 'border-purple-400/20 hover:border-purple-400/40',
        text: 'text-purple-100',
        expandedBg: 'bg-purple-500/5'
      },
      aws: {
        container: 'from-orange-600/15 via-yellow-600/20 to-red-600/15',
        border: 'border-orange-400/30',
        shadow: 'shadow-orange-500/10',
        icon: 'text-orange-400',
        itemBg: 'bg-orange-500/10 hover:bg-orange-500/15',
        itemBorder: 'border-orange-400/20 hover:border-orange-400/40',
        text: 'text-orange-100',
        expandedBg: 'bg-orange-500/5'
      }
    };
    return themes[theme] || themes.default;
  };

  const themeClasses = getThemeClasses();

  return (
    <section className={`bg-gradient-to-br ${themeClasses.container} backdrop-blur-sm rounded-2xl p-8 border ${themeClasses.border} shadow-xl ${themeClasses.shadow}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
        <HelpCircle className={`w-8 h-8 ${themeClasses.icon}`} />
        {title}
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${themeClasses.itemBg} rounded-xl border ${themeClasses.itemBorder} transition-all duration-300 overflow-hidden`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-white/20 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white pr-4 leading-relaxed">
                {faq.question}
              </h3>
              <div className={`flex-shrink-0 w-6 h-6 ${themeClasses.icon} transition-transform duration-300 ${expandedItems.has(index) ? 'rotate-180' : ''}`}>
                {expandedItems.has(index) ? <ChevronUp /> : <ChevronDown />}
              </div>
            </button>
            
            {expandedItems.has(index) && (
              <div className={`px-6 pb-6 ${themeClasses.expandedBg} border-t border-white/10`}>
                <div className="pt-4">
                  <p className={`${themeClasses.text} leading-relaxed text-sm md:text-base`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/20 text-center">
        <p className="text-white/80 text-sm">
          Have more questions? Contact us at{' '}
          <a href="tel:+919032734343" className={`${themeClasses.icon} hover:text-white font-semibold transition-colors`}>
            +91-9032734343
          </a>
          {' '}or{' '}
          <a href="mailto:info@vritsol.com" className={`${themeClasses.icon} hover:text-white font-semibold transition-colors`}>
            info@vritsol.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
