import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppFloating = () => {
    const text = encodeURIComponent('Hello Rexine Centre, I am browsing your online catalogue and would like to make an enquiry.');
    window.open(`https://wa.me/918104019890?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Sticky Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          onClick={handleWhatsAppFloating}
          aria-label="Direct WhatsApp Enquiry"
          className="relative group w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
          data-cursor="WhatsApp"
        >
          {/* Animated Outer Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping" />
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111111] text-white text-[10px] font-button font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
            Quick WhatsApp Enquiry
          </span>
        </button>

        {/* Back To Top Scroll Button with Ring Progress */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="relative w-11 h-11 bg-white border border-black/10 rounded-full flex items-center justify-center text-gray-800 hover:text-[#C67C4E] shadow-xl hover:scale-105 transition-all duration-300"
            data-cursor="Top"
          >
            {/* SVG Ring Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#C67C4E]"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeWidth="2.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <ArrowUp className="w-4 h-4 relative z-10" />
          </button>
        )}
      </div>
    </>
  );
};
