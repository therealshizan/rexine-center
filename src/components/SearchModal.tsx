import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { MOCK_BOOKS } from '../data/mockBooks';
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
  
  const query = searchQuery.toLowerCase().trim();

  // Map each product with its parent book metadata
  const allProducts = MOCK_BOOKS.flatMap((book) => 
    (book.products || []).map((product) => ({
      product,
      bookSlug: book.slug,
      bookCode: book.code,
      bookTitle: book.title,
    }))
  );

  // Filter products based on code, name, category, or book details
  const filteredItems = allProducts.filter(({ product, bookCode, bookTitle }) => {
    if (!query) return true;
    return (
      product.code.toLowerCase().includes(query) ||
      (product.name && product.name.toLowerCase().includes(query)) ||
      (product.category && product.category.toLowerCase().includes(query)) ||
      bookCode.toLowerCase().includes(query) ||
      bookTitle.toLowerCase().includes(query)
    );
  });

  // Limit results to show only a manageable number (e.g., 9 items max)
  const limitedResults = filteredItems.slice(0, 9);

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
          className="p-2 text-gray-500 hover:text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
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
            placeholder="Type design code (e.g. CINEFAB-651-01), texture name, or book title..."
            className="w-full bg-[#F8F6F2] border-2 border-black/10 focus:border-[#C67C4E] rounded-2xl pl-16 pr-6 py-5 text-base md:text-lg font-sans text-gray-900 placeholder-gray-400 focus:outline-none shadow-inner transition-all"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-button text-xs font-bold uppercase tracking-widest text-[#C67C4E]">
              Matching Products ({filteredItems.length} found{filteredItems.length > 9 ? ', showing top 9' : ''})
            </h4>
          </div>

          {limitedResults.length === 0 ? (
            <p className="font-sans text-xs text-gray-400">No matching products found for "{searchQuery}".</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {limitedResults.map(({ product, bookSlug, bookCode }) => (
                <div
                  key={`${bookSlug}-${product.code}`}
                  onClick={() => {
                    onClose();
                    onSelectProduct({
                      ...product,
                      id: (product as any).id || product.code, // Fallback id if missing
                    } as Product);
                  }}
                  className="bg-white p-3 rounded-xl border border-black/8 hover:border-[#C67C4E] shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center gap-3 group"
                >
                  <img src={product.image} alt={product.code} className="w-14 h-14 object-cover rounded-lg shrink-0 border border-gray-100" />
                  <div className="min-w-0 flex-1">
                    <span className="font-button text-[10px] font-bold text-[#C67C4E] uppercase block truncate">{product.code}</span>
                    <h5 className="font-sans text-xs font-semibold text-gray-900 group-hover:text-[#C67C4E] transition-colors truncate">{product.name || bookCode}</h5>
                    <p className="font-sans text-[10px] text-gray-400 truncate">Book: {bookCode}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};