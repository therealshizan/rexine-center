import React, { useState } from 'react';
// import { startLenis, stopLenis } from '../lib/lenis';
import { X, Download, FileText, ExternalLink, ChevronLeft, ChevronRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { MOCK_BOOKS } from '../data/mockBooks';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl?: string;
  code?: string;
  pageCount?: number;
}

export const PDFViewerModal: React.FC<PDFViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  pdfUrl: propPdfUrl,
  code = 'CINEFAB-651',
  pageCount: propPageCount,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'embed' | 'gallery'>('gallery');

  if (!isOpen) return null;

  // Dynamically find the book based on the code or slug
  const book = MOCK_BOOKS.find(
    (b) => b.code.toLowerCase() === code.toLowerCase() || b.slug === code.toLowerCase()
  );

  // Resolve dynamic properties with safe fallbacks
  const pdfUrl = book?.pdfPath || `/book/${code.toLowerCase()}/catalogue.pdf`;
  const products = book?.products ?? [];
  // Dynamic page count: Cover page (1) + Swatches (products.length) + Back/Specs page (1)
  const pageCount = propPageCount || (products.length > 0 ? products.length + 2 : 39);
  const coverImage = book?.coverImage || `/book/${code.toLowerCase()}/cover.png`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${code}-Catalogue.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const swatchIndex = currentPage - 2;
  const product = products[swatchIndex];
  const shadeNumber = swatchIndex + 1;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-5xl h-[90vh] bg-[#111111] text-white rounded-3xl shadow-2xl overflow-hidden border border-white/15 flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#181818] border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C67C4E] flex items-center justify-center text-white shrink-0 shadow-md">
              <FileText className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-button font-bold text-amber-300 uppercase tracking-widest bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {code}
                </span>
                <span className="text-xs text-gray-400 font-sans">Official Catalogue PDF</span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate max-w-md">
                {title || book?.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-3 py-1.5 rounded-lg text-xs font-button font-bold uppercase transition-all ${
                  activeTab === 'gallery'
                    ? 'bg-[#C67C4E] text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Page Slides ({pageCount})
              </button>
              <button
                onClick={() => setActiveTab('embed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-button font-bold uppercase transition-all ${
                  activeTab === 'embed'
                    ? 'bg-[#C67C4E] text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="bg-white/10 hover:bg-white/20 text-white p-2.5 sm:px-4 sm:py-2 rounded-xl text-xs font-button font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border border-white/10"
              title="Download PDF"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            <button
              onClick={handleOpenNewTab}
              className="bg-[#C67C4E] hover:bg-[#b06a3d] text-white p-2.5 sm:px-4 sm:py-2 rounded-xl text-xs font-button font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
              title="Open PDF in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open in Tab</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Switcher */}
        <div className="sm:hidden p-2 bg-[#181818] border-b border-white/10 flex justify-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-1 rounded-lg text-xs font-button font-bold uppercase ${
              activeTab === 'gallery' ? 'bg-[#C67C4E] text-white' : 'text-gray-400'
            }`}
          >
            Slides View
          </button>
          <button
            onClick={() => setActiveTab('embed')}
            className={`px-3 py-1 rounded-lg text-xs font-button font-bold uppercase ${
              activeTab === 'embed' ? 'bg-[#C67C4E] text-white' : 'text-gray-400'
            }`}
          >
            Native PDF
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 bg-black overflow-hidden relative flex flex-col items-center justify-center">
          {activeTab === 'embed' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1`}
                title={`${title} Catalogue PDF`}
                className="w-full flex-1 border-0"
              />
              <div className="p-3 bg-[#181818] border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>PDF Document Stream</span>
                <button
                  onClick={handleOpenNewTab}
                  className="text-amber-300 hover:underline flex items-center gap-1 font-button text-[11px] uppercase font-bold"
                >
                  If preview doesn't render, click to open PDF directly <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col p-4">
              
              {/* Page Gallery Container */}
              <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-[#181818] rounded-2xl border border-white/10 p-4">
                
                {/* Simulated / Rendered Page View */}
                <div className="max-h-full max-w-full aspect-[1/1.4] bg-white text-black shadow-2xl rounded-lg overflow-hidden relative flex flex-col justify-between p-6">
                  {currentPage === 1 ? (
                    
                    <div className="h-full flex flex-col items-center justify-between text-center py-8">
                      <div className="text-xl font-bold tracking-widest font-serif pb-2">
                        REXINE CENTRE
                      </div>

                      <div className="my-auto space-y-3">
                        {/* Cover Image */}
                        <div className="w-48 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-[#C67C4E] shadow-sm">
                          <img
                            src={coverImage}
                            alt={`${code} catalogue cover`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Smaller Catalogue Title */}
                        <h2 className="font-serif text-2xl font-bold text-gray-900">
                          SAMPLE CATALOGUE
                        </h2>

                        <p className="text-xs text-gray-600 font-sans max-w-xs mx-auto">
                          {book?.category || '100% Polyester Premium Upholstery Fabrics'}
                          <br />
                          {book?.specs?.finish || book?.specs?.thickness ? `(${book?.specs?.finish} • ${book?.specs?.thickness})` : ''}
                        </p>
                      </div>

                      <div className="text-[10px] uppercase font-button tracking-widest text-gray-500">
                        Official Rexine Centre Physical Sample Binder
                      </div>
                    </div>
                  ) : currentPage === pageCount ? (
                    // Specs Back Cover
                    <div className="h-full flex flex-col justify-between p-4 bg-amber-50/50 rounded-lg border border-amber-200 text-left">
                      <div className="border-b border-gray-300 pb-3 flex justify-between items-center">
                        <span className="font-serif font-bold text-lg text-gray-900">REXINE CENTRE</span>
                        <span className="font-mono text-xs font-bold text-[#C67C4E]">{code}</span>
                      </div>

                      <div className="space-y-4 my-auto">
                        <h3 className="font-serif text-xl font-bold text-gray-900">Technical Specifications</h3>
                        <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                          <div className="p-2.5 bg-white rounded border border-gray-200">
                            <span className="text-gray-500 block text-[10px] uppercase font-bold">Width</span>
                            <span className="font-bold text-gray-900">{book?.specs?.width || '140 CMS (54 Inches)'}</span>
                          </div>
                          <div className="p-2.5 bg-white rounded border border-gray-200">
                            <span className="text-gray-500 block text-[10px] uppercase font-bold">Backing</span>
                            <span className="font-bold text-gray-900">{book?.specs?.backing || 'Standard Backing'}</span>
                          </div>
                          <div className="p-2.5 bg-white rounded border border-gray-200">
                            <span className="text-gray-500 block text-[10px] uppercase font-bold">Finish / GSM</span>
                            <span className="font-bold text-gray-900">{book?.specs?.finish || 'Standard Finish'}</span>
                          </div>
                          <div className="p-2.5 bg-white rounded border border-gray-200">
                            <span className="text-gray-500 block text-[10px] uppercase font-bold">Target Use</span>
                            <span className="font-bold text-gray-900">{book?.specs?.targetUse || 'Upholstery'}</span>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded border border-gray-200 text-[11px] text-gray-600">
                          <span className="font-bold block text-gray-800 mb-0.5">Care Instructions:</span>
                          Gentle wash or professional dry clean. Colour shades may slightly vary from dye lot to dye lot.
                        </div>
                      </div>

                      <div className="text-[10px] text-gray-500 text-center border-t border-gray-300 pt-2 font-mono">
                        Page {currentPage} of {pageCount} • Rexine Centre India
                      </div>
                    </div>
                  ) : product ? (
                    // Swatch Page
                    <div className="h-full flex flex-col justify-between">
                      {/* Header */}
                      <div className="flex justify-between items-center text-xs text-gray-500 border-b border-gray-200 pb-2">
                        <span className="font-serif font-bold text-black">
                          REXINE CENTRE
                        </span>

                        <span className="font-mono text-xs font-bold text-[#C67C4E]">
                          SR.NO: {String(shadeNumber).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Swatch */}
                      <div className="my-auto flex flex-col items-center justify-center p-4">
                        <div className="w-56 h-64 bg-amber-100/50 rounded-xl border-4 border-dashed border-amber-300 flex flex-col items-center justify-center p-4 shadow-inner text-center">
                          
                          {/* Product image */}
                          <div className="w-50 h-50 rounded-2xl overflow-hidden mb-2 shadow-md border border-gray-200">
                            <img
                              src={product.image}
                              alt={product.code}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product code */}
                          <span className="font-serif font-bold text-gray-900 text-base">
                            {product.code}
                          </span>

                          {/* Shade number */}
                          <span className="font-mono text-xs text-[#C67C4E] font-bold mt-1">
                            Shade #{String(shadeNumber).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  ) : null}
                </div>

                {/* Left Navigation Arrow */}
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#C67C4E] text-white rounded-full border border-white/20 transition-all shadow-xl disabled:opacity-30 disabled:hover:bg-black/80 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
                  disabled={currentPage === pageCount}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#C67C4E] text-white rounded-full border border-white/20 transition-all shadow-xl disabled:opacity-30 disabled:hover:bg-black/80 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Page Selector Toolbar */}
              <div className="p-3 bg-[#181818] rounded-2xl border border-white/10 mt-3 flex items-center justify-between text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-button uppercase text-[11px] font-bold">
                    Page {currentPage} of {pageCount}
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="text-amber-300 text-xs truncate hidden sm:inline">
                    {currentPage === 1
                      ? 'Cover Page'
                      : currentPage === pageCount
                      ? 'Technical Specs & Back Cover'
                      : `Swatch Shade #${String(currentPage - 1).padStart(2, '0')}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded text-[11px] font-button uppercase text-gray-300"
                  >
                    Cover
                  </button>
                  <button
                    onClick={() => setCurrentPage(2)}
                    className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded text-[11px] font-button uppercase text-gray-300"
                  >
                    First Swatch
                  </button>
                  <button
                    onClick={() => setCurrentPage(pageCount)}
                    className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded text-[11px] font-button uppercase text-gray-300"
                  >
                    Specs Page
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};