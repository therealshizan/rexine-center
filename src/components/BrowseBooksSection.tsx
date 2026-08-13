import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, QrCode, ArrowRight, Layers } from 'lucide-react';
import { MOCK_BOOKS, Book } from '../data/mockBooks';
import { BookQRCodeModal } from './BookQRCodeModal';

export const BrowseBooksSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeQRBook, setActiveQRBook] = useState<Book | null>(null);

  return (
    <section id="browse-books" className="bg-[#111111] text-white py-20 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C67C4E]/20 text-[#C67C4E] px-3.5 py-1.5 rounded-full text-xs font-button font-bold uppercase tracking-widest border border-[#C67C4E]/30">
              <QrCode className="w-3.5 h-3.5" />
              <span>Physical Sample Books Directory</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Browse Master Swatch Books
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              Scan or browse our physical sample binders distributed across India. Every book features an instant QR code that opens all 28+ swatches, specs, and wholesale roll rates upon scanning.
            </p>
          </div>

          <button
            onClick={() => navigate('/books')}
            className="inline-flex items-center gap-2 bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-6 py-3.5 rounded-full font-button text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-lg cursor-pointer"
          >
            <span>VIEW ALL BOOKS INDEX ({MOCK_BOOKS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Books Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BOOKS.map((book) => (
            <div
              key={book.slug}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C67C4E] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Book Cover Image */}
                <div
                  className="relative h-64 bg-gray-900 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/books/${book.slug}`)}
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    onError={(e) => {
                      if (book.fallbackCover) {
                        e.currentTarget.src = book.fallbackCover;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* QR / Code Badge */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveQRBook(book);
                    }}
                    className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-amber-300 border border-amber-300/30 text-[10px] font-button font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg hover:bg-[#C67C4E] hover:text-white transition-colors"
                    title="Scan Book QR Code"
                  >
                    <QrCode className="w-3.5 h-3.5 text-[#C67C4E] group-hover:text-white" />
                    <span>{book.code} (Scan QR)</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#C67C4E] text-white text-[10px] font-button font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{book.designCount} Swatches</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-button font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
                      {book.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-snug line-clamp-1 group-hover:text-[#C67C4E] transition-colors">
                      {book.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pb-3 space-y-4">
                  <p className="font-sans text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {book.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="grid grid-cols-2 gap-2 bg-black/40 p-3 rounded-2xl border border-white/10 text-xs">
                    <div>
                      <span className="text-[9px] font-button font-bold text-gray-400 uppercase tracking-wider block">
                        Thickness
                      </span>
                      <span className="font-bold text-white">{book.specs?.thickness || '1.2 mm'}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-button font-bold text-gray-400 uppercase tracking-wider block">
                        Width
                      </span>
                      <span className="font-bold text-white">{book.specs?.width || '54 inches'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t border-white/10 mt-4 flex items-center gap-3">
                <button
                  onClick={() => navigate(`/books/${book.slug}`)}
                  className="flex-1 bg-white hover:bg-[#C67C4E] text-[#111111] hover:text-white py-3 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View Swatches ({book.designCount})</span>
                </button>

                <button
                  onClick={() => setActiveQRBook(book)}
                  className="bg-white/10 hover:bg-[#C67C4E] text-white p-3 rounded-xl border border-white/20 transition-all shadow-md flex items-center justify-center gap-1.5 font-button text-xs font-bold uppercase cursor-pointer"
                  title="Scan Book QR Code to Open Swatches"
                >
                  <QrCode className="w-4 h-4 text-amber-300" />
                  <span className="hidden sm:inline">QR Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* QR Code Modal */}
        <BookQRCodeModal
          isOpen={!!activeQRBook}
          onClose={() => setActiveQRBook(null)}
          book={activeQRBook}
        />

      </div>
    </section>
  );
};
