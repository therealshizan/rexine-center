import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';

interface FAQAndBulkSectionProps {
  onOpenEnquiry: () => void;
}

export const FAQAndBulkSection: React.FC<FAQAndBulkSectionProps> = ({ onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="bg-[#F8F6F2] py-14 border-b border-gray-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: FREQUENTLY ASKED QUESTIONS (8 cols) */}
          <div className="lg:col-span-8">
            <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#111111] mb-6">
              Frequently Asked Questions
            </h2>

            {/* 2-Column Grid of FAQ accordions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-black/8 p-4 transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between text-left gap-3"
                    >
                      <span className="font-serif text-xs font-bold text-[#111111]">
                        {faq.question}
                      </span>
                      <span className="p-1 rounded-full bg-gray-100 text-gray-600 shrink-0">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="font-sans text-[11px] text-gray-500 mt-2.5 pt-2.5 border-t border-gray-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: NEED BULK QUANTITY? (4 cols) */}
          <div className="lg:col-span-4 bg-[#EBE7DF] rounded-2xl p-6 border border-black/10 relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                Need Bulk Quantity?
              </h3>
              <p className="font-sans text-xs text-gray-600 leading-relaxed max-w-xs mb-6">
                Let's work together for your next commercial, hospitality, or automotive project.
              </p>

              <button
                onClick={onOpenEnquiry}
                className="bg-[#111111] hover:bg-[#C67C4E] text-white px-6 py-3 rounded-md font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Rolled Leather Visual in bottom right */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full overflow-hidden opacity-90 pointer-events-none border-4 border-white/40 shadow-xl">
              <img
                src={heroLeatherRolls}
                alt="Bulk Leather Rolls"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
