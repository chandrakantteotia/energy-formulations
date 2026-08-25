import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/faqData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-light text-brand-text border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="editorial-tag-navy mb-4 mx-auto">
            <HelpCircle className="w-3.5 h-3.5 text-brand-navy-900" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight mb-4">
            Common Technical & Commercial Queries
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Clear answers regarding our manufacturing parameters, minimum order quantities, formulation timelines, and partnership models.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500/30"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-brand-navy-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-brand-green-500 text-brand-navy-950 rotate-180 shadow-glow-green' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for unlisted questions */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-brand-navy-900">
              Have a specific technical question not covered here?
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Our formulation specialists can provide specific monograph and feasibility advice.
            </div>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-800 transition-colors shrink-0"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-green-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
