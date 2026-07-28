import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, QrCode, BookOpen, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { SAMPLE_BOOKS_DATA } from '../data/booksData';

interface BookScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookScannerModal: React.FC<BookScannerModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(SAMPLE_BOOKS_DATA[0]);
  const [scanned, setScanned] = useState(false);

  if (!isOpen) return null;

  const handleSimulateScan = (book: typeof SAMPLE_BOOKS_DATA[0]) => {
    setSelectedBook(book);
    setScanned(true);
    setTimeout(() => {
      onClose();
      navigate(`/books/${book.id}`);
    }, 1200);
  };

  const handleOpenDirectly = (bookId: string) => {
    onClose();
    navigate(`/books/${bookId}`);
  };

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/10">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C67C4E] flex items-center justify-center text-white">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-button text-xs font-bold uppercase tracking-widest text-white">
                PHYSICAL SAMPLE BOOK QR SCANNER
              </h3>
              <p className="font-sans text-xs text-[#C67C4E]">
                Scan or tap your physical sample book to view all 25–30 swatches
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#F8F6F2]">
          {/* Active Book View */}
          <div className="bg-white p-5 rounded-2xl border border-black/8 shadow-sm flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="relative w-28 h-28 bg-gray-100 rounded-xl overflow-hidden shrink-0 border border-gray-200">
              <img
                src={selectedBook.coverImage}
                alt={selectedBook.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-2 left-2 right-2 text-[9px] font-button font-bold text-white uppercase bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-center">
                {selectedBook.code}
              </div>
            </div>

            <div className="flex-grow text-center sm:text-left">
              <span className="text-[10px] uppercase font-button text-[#C67C4E] font-bold tracking-wider">
                {selectedBook.collectionName} Collection
              </span>
              <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">
                {selectedBook.name}
              </h4>
              <p className="font-sans text-xs text-gray-500 mb-4">
                Contains {selectedBook.totalSwatches} active physical swatches with QR lookup & RRP pricing.
              </p>

              {scanned ? (
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>QR Code Scanned! Opening Book Page...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 justify-center sm:justify-start flex-wrap">
                  <button
                    onClick={() => handleSimulateScan(selectedBook)}
                    className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#C67C4E] text-white px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <QrCode className="w-4 h-4 text-[#C67C4E]" />
                    <span>Scan QR Camera Link</span>
                  </button>

                  <button
                    onClick={() => handleOpenDirectly(selectedBook.id)}
                    className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>View Swatches ({selectedBook.totalSwatches})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Book Selection Carousel */}
          <div className="space-y-3">
            <h5 className="font-button text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Select Sample Book to Inspect:
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SAMPLE_BOOKS_DATA.map((book) => (
                <button
                  key={book.id}
                  onClick={() => handleSimulateScan(book)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    selectedBook.id === book.id
                      ? 'border-[#C67C4E] bg-white shadow-md ring-2 ring-[#C67C4E]/20'
                      : 'border-black/8 bg-white/60 hover:bg-white'
                  }`}
                >
                  <img
                    src={book.coverImage}
                    alt={book.name}
                    className="w-10 h-10 rounded-lg object-cover shrink-0 border border-gray-200"
                  />
                  <div className="overflow-hidden">
                    <p className="font-button text-[10px] font-bold text-[#111111] uppercase truncate">
                      {book.code}
                    </p>
                    <p className="font-sans text-[11px] text-gray-600 truncate">{book.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
