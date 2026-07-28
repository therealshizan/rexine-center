import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-white border-b border-black/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-button text-sm font-bold uppercase tracking-[0.2em] text-[#111111] mb-12 text-center md:text-left">
          WHAT OUR CLIENTS SAY
        </h2>

        {/* Desktop 3 Columns / Mobile Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-[#F8F6F2] p-8 rounded-2xl border border-black/8 shadow-sm flex flex-col justify-between transition-all duration-500 ${
                activeIdx === idx ? 'ring-2 ring-[#C67C4E]' : 'opacity-90'
              }`}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C67C4E] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-xs md:text-sm text-gray-700 leading-relaxed italic mb-8">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/8">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#C67C4E]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-button text-xs font-bold text-[#111111]">{t.author}</h4>
                  <p className="font-sans text-[11px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`transition-all rounded-full ${
                activeIdx === idx ? 'w-6 h-2 bg-[#C67C4E]' : 'w-2 h-2 bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
