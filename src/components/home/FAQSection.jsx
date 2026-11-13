import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { faqsData } from '../../data/faqsData';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Clear Guidance"
          title="Frequently Asked"
          titleHighlight="Elevator Questions"
          description="Everything you need to know about elevator installation timelines, preventative AMC contracts, safety regulations, and emergency entrapment protocols."
          align="center"
        />

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-accent/60 bg-lightBg shadow-md' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start space-x-2.5 sm:space-x-3 pr-3">
                    <span className="text-[11px] font-bold text-accent-dark uppercase tracking-wider block shrink-0 mt-0.5">
                      Q{idx + 1}.
                    </span>
                    <h3 className="font-heading font-semibold text-xs sm:text-sm md:text-base text-primary leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-accent text-primary' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 sm:pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-block text-[10px] sm:text-[11px] font-semibold text-accent-dark uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200/80">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact help card */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-lightBg border border-slate-200 text-center">
          <h4 className="font-heading font-bold text-sm sm:text-base text-primary">
            Have a Specific Question About Your Building Shaft or Code Compliance?
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-mutedText">
            Our engineering team is available for phone consultations and on-site shaft surveys.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors text-center"
            >
              Ask an Elevator Engineer
            </Link>
            <Link
              to="/quote"
              className="px-5 py-2.5 rounded-lg bg-gold-gradient text-primary text-xs sm:text-sm font-semibold hover:shadow-gold-glow transition-all text-center"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
