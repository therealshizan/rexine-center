import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { PRODUCTS, SAMPLE_BOOKS } from '../data/mockData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  initialQuery?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  initialQuery = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Sync internal state when initialQuery changes (e.g. clicking a popular tag)
  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBooks = SAMPLE_BOOKS.filter(
    (b) =>
      b.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div data-lenis-prevent className="fixed inset-0 z-[9000] flex flex-col bg-white/98 backdrop-blur-2xl p-6 md:p-12 overflow-y-auto animate-fade-in">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-2xl text-[#111111]">REXINE</span>
          <span className="text-xs font-button uppercase text-[#C67C4E] font-bold">Search Desk</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-500 hover:text-black hover:bg-black/5 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Search Input Bar */}
      <div className="max-w-4xl mx-auto w-full mb-10">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#C67C4E]" />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type design code (e.g. ML-102), texture name (e.g. Milano), or book name..."
            className="w-full bg-[#F8F6F2] border-2 border-black/10 focus:border-[#C67C4E] rounded-2xl pl-16 pr-6 py-5 text-base md:text-lg font-sans text-gray-900 placeholder-gray-400 focus:outline-none shadow-inner transition-all"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Products Results */}
        <div>
          <h4 className="font-button text-xs font-bold uppercase tracking-widest text-[#C67C4E] mb-4">
            Matching Products ({filteredProducts.length})
          </h4>

          {filteredProducts.length === 0 ? (
            <p className="font-sans text-xs text-gray-400">No matching products found for "{searchQuery}".</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(p);
                  }}
                  className="bg-white p-3 rounded-xl border border-black/8 hover:border-[#C67C4E] shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center gap-3 group"
                >
                  <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded-lg shrink-0" />
                  <div>
                    <span className="font-button text-[10px] font-bold text-[#C67C4E] uppercase">{p.code}</span>
                    <h5 className="font-sans text-xs font-semibold text-gray-900 group-hover:text-[#C67C4E] transition-colors">{p.name}</h5>
                    <p className="font-sans text-[11px] text-gray-400">₹{p.rrp} / {p.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Books Results */}
        {/* <div>
          <h4 className="font-button text-xs font-bold uppercase tracking-widest text-[#C67C4E] mb-4">
            Matching Physical Sample Books ({filteredBooks.length})
          </h4>

          {filteredBooks.length === 0 ? (
            <p className="font-sans text-xs text-gray-400">No matching sample books found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredBooks.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#F8F6F2] p-4 rounded-xl border border-black/8 flex items-center justify-between"
                >
                  <div>
                    <span className="font-button text-[10px] font-bold text-[#111111] uppercase">{b.code}</span>
                    <h5 className="font-serif text-sm font-bold text-gray-900">{b.name}</h5>
                    <p className="font-sans text-xs text-gray-500">{b.totalSwatches} Physical Swatches</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};