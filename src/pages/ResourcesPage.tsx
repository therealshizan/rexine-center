import React, { useState } from 'react';
import { BLOG_POSTS, FAQS, SAMPLE_BOOKS } from '../data/mockData';
import { BookOpen, FileText, Download, Play, HelpCircle, ChevronDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ResourcesPageProps {
  onOpenEnquiry: (product?: Product | null) => void;
  onOpenBookScanner: () => void;
  onOpenVideoModal: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onOpenEnquiry,
  onOpenBookScanner,
  onOpenVideoModal,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq1');

  return (
    <div className="bg-[#F8F6F2] min-h-screen pt-8 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E] block mb-2">
            Guides, Catalogs & Technical Specs
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] mb-4">
            Resources & Swatch Library
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            Everything you need to select, specify, clean, and maintain synthetic leather materials. Download official swatch book digital catalogs and explore technical articles.
          </p>
        </div>

        {/* Digital Catalog Download Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#111111]">
              Digital Swatch Books & Catalogs
            </h2>
            <button
              onClick={onOpenBookScanner}
              className="text-xs font-button font-bold text-[#C67C4E] hover:underline flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Scan Physical Swatch Book QR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAMPLE_BOOKS.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={book.coverImage}
                      alt={book.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md text-white text-[10px] font-button font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {book.code}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-wider block mb-1">
                      {book.category} • {book.totalSwatches} Swatches
                    </span>
                    <h3 className="font-serif font-bold text-base text-gray-900 mb-2">
                      {book.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenEnquiry(null)}
                    className="w-full bg-gray-50 hover:bg-[#111111] hover:text-white text-gray-800 py-2.5 rounded-lg font-button text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-gray-200"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Book</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog & Care Guides Section */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-[#111111] mb-6">
            Technical Articles & Maintenance Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-button font-bold px-2.5 py-1 rounded-md">
                    {post.date}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-[#C67C4E] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    Learn essential industry tips on selecting material density, maintaining surface elasticity, and choosing flame retardant properties.
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-button font-bold text-[#C67C4E] uppercase tracking-wider">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorial Card Banner */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E]">
              Video Workshop
            </span>
            <h2 className="font-serif text-3xl font-bold">
              Watch: How Rexine is Manufactured & Quality Tested
            </h2>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              Take a virtual tour of our state-of-the-art coating line, embossing pressure rollers, tensile tear strength testing, and quality control lab.
            </p>
          </div>
          <button
            onClick={onOpenVideoModal}
            className="w-16 h-16 rounded-full bg-[#C67C4E] hover:bg-white hover:text-[#111111] text-white flex items-center justify-center transition-all shadow-xl shrink-0 group scale-105 hover:scale-110"
          >
            <Play className="w-6 h-6 fill-current ml-1" />
          </button>
        </div>

        {/* Technical FAQ Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E] block mb-1">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left bg-gray-50/50 hover:bg-gray-50 flex items-center justify-between gap-4 font-serif font-bold text-gray-900 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isOpen ? 'rotate-180 text-[#C67C4E]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-2 bg-white font-sans text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
