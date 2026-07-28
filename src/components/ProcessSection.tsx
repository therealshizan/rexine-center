import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#F8F6F2] py-14 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-1">
              OUR PROCESS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              Crafted with Precision
            </h2>
          </div>

          <a
            href="#process"
            className="font-button text-xs font-bold text-gray-700 hover:text-[#C67C4E] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <span>View full process</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Steps horizontal workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative bg-white p-5 rounded-2xl border border-black/8 shadow-sm flex flex-col justify-between">
              
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#F8F6F2] text-[#111111] font-button text-xs font-bold flex items-center justify-center border border-black/10">
                  {step.step}
                </span>

                {idx < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-gray-300 absolute -right-3 top-8 z-10" />
                )}
              </div>

              <div>
                <h3 className="font-serif text-base font-bold text-[#111111] mb-1">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
