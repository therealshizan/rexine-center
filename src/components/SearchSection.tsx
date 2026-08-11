import React, { useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';

interface SearchSectionProps {
  onSearchSubmit: (query: string) => void;
  onOpenEnquiry: () => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onSearchSubmit, onOpenEnquiry }) => {
  const [productQuery, setProductQuery] = useState('');
  const [bookQuery, setBookQuery] = useState('');

  const handleProductSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (productQuery.trim()) {
      onSearchSubmit(productQuery);
    }
  };

  const handleBookSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookQuery.trim()) {
      onSearchSubmit(bookQuery);
    }
  };

  // Handler for product tags
  const handleProductTagClick = (tag: string) => {
    setProductQuery(tag);
    onSearchSubmit(tag);
  };

  // Handler for book tags
  const handleBookTagClick = (tag: string) => {
    setBookQuery(tag);
    onSearchSubmit(tag);
  };

  return (
    <section className="bg-[#EDE8E3] py-8 border-b border-gray-300/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Box 1: SEARCH PRODUCTS (5 cols) */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-black/8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-button font-bold text-gray-500 uppercase tracking-widest block mb-2">
                SEARCH <span className="text-[#C67C4E]">PRODUCTS</span>
              </span>

              <form onSubmit={handleProductSearch} className="relative mb-3">
                <input
                  type="text"
                  value={productQuery}
                  onChange={(e) => setProductQuery(e.target.value)}
                  placeholder="Search by Design Code, Material, Texture..."
                  className="w-full bg-[#EDE8E3]/60 border border-gray-300 rounded-xl px-4 py-2.5 pr-12 text-xs text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#C67C4E]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#C67C4E] text-white rounded-lg flex items-center justify-center hover:bg-[#b06a3d] transition-colors"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-sans">
              <span className="text-gray-500 font-medium">Popular:</span>
              {['CINEFAB-651',"CLIFF-653",'FLOW-424','AURA-647','CORAL'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleProductTagClick(tag)}
                  className="bg-[#EDE8E3] hover:bg-gray-300 text-gray-800 px-2 py-0.5 rounded transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Box 2: SEARCH BOOKS (4 cols) */}
          <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-black/8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-button font-bold text-gray-500 uppercase tracking-widest block mb-2">
                SEARCH <span className="text-[#C67C4E]">BOOKS</span>
              </span>

              <form onSubmit={handleBookSearch} className="relative mb-3">
                <input
                  type="text"
                  value={bookQuery}
                  onChange={(e) => setBookQuery(e.target.value)}
                  placeholder="Search by Book Name or Collection..."
                  className="w-full bg-[#EDE8E3]/60 border border-gray-300 rounded-xl px-4 py-2.5 pr-12 text-xs text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#C67C4E]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#C67C4E] text-white rounded-lg flex items-center justify-center hover:bg-[#b06a3d] transition-colors"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-sans">
              <span className="text-gray-500 font-medium">Popular:</span>
              {['CINEFAB-651','AURA-647','CORAL',"CLIFF-653"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleBookTagClick(tag)}
                  className="bg-[#EDE8E3] hover:bg-gray-300 text-gray-800 px-2 py-0.5 rounded transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Box 3: QUICK ENQUIRY (3 cols) */}
          <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-black/8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-button font-bold text-gray-500 uppercase tracking-widest block mb-1">
                QUICK ENQUIRY
              </span>
              <p className="font-sans text-xs text-gray-600 mb-4">
                Get wholesale pricing & availability on WhatsApp
              </p>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full bg-[#111111] hover:bg-[#C67C4E] text-white py-2.5 px-4 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all group shadow-sm"
            >
              <span>ENQUIRE ON WHATSAPP</span>
              <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};