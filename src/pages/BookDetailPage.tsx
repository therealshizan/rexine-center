import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  QrCode,
  BookOpen,
  Search,
  Filter,
  MessageCircle,
  Share2,
  Printer,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
  CheckSquare,
  Square,
  Layers,
  X,
  Send,
  Eye
} from 'lucide-react';
import { SAMPLE_BOOKS_DATA, getBookById, getDesignsByBookId } from '../data/booksData';
import { Product, SampleBook } from '../types';

interface BookDetailPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product?: Product | null) => void;
}

export const BookDetailPage: React.FC<BookDetailPageProps> = ({
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  // Retrieve book data
  const book = getBookById(bookId || 'bk-ddecor-vol1') || SAMPLE_BOOKS_DATA[0];
  const allDesignsInBook = getDesignsByBookId(book.id);

  // States for search and selection inside book
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSwatches, setSelectedSwatches] = useState<Product[]>([]);
  const [showQrStickerModal, setShowQrStickerModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter swatches in book
  const filteredDesigns = allDesignsInBook.filter((design) => {
    const matchesSearch =
      !searchQuery ||
      design.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.shadeName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' ||
      design.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  // Toggle selection for bulk WhatsApp swatch inquiry
  const toggleSwatchSelection = (product: Product) => {
    if (selectedSwatches.some((s) => s.id === product.id)) {
      setSelectedSwatches(selectedSwatches.filter((s) => s.id !== product.id));
    } else {
      setSelectedSwatches([...selectedSwatches, product]);
    }
  };

  // Direct WhatsApp single design inquiry link
  const getWhatsAppDesignUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Rexine Centre,\nI scanned Physical Sample Book: *${book.name}* (${book.code})\n\nI am interested in Design Swatch:\n📌 Design Code: *${product.code}*\n🎨 Shade: *${product.shadeName || product.name}*\n🏷️ Retail RRP: ₹${product.rrp}/${product.unit}\n\nPlease share wholesale availability, roll stock, and formal bulk quote.`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  // Direct WhatsApp bulk swatch inquiry
  const handleSendBulkWhatsAppInquiry = () => {
    if (selectedSwatches.length === 0) return;
    const swatchListText = selectedSwatches
      .map((s, idx) => `${idx + 1}. Code: *${s.code}* - ${s.shadeName || s.name} (RRP: ₹${s.rrp}/m)`)
      .join('\n');

    const text = encodeURIComponent(
      `Hello Rexine Centre,\nI scanned Physical Sample Book: *${book.name}* (${book.code})\n\nI have selected ${selectedSwatches.length} swatches for inquiry:\n${swatchListText}\n\nPlease provide wholesale roll pricing and delivery timeline to my city.`
    );

    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  // Copy book link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-[#F8F6F2] min-h-screen pt-6 pb-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-button uppercase tracking-wider text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#C67C4E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/customizer" className="hover:text-[#C67C4E] transition-colors">Sample Books</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to={`/collections?category=${book.collectionId}`} className="hover:text-[#C67C4E] transition-colors">{book.collectionName}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#C67C4E] font-bold">{book.name}</span>
        </div>

        {/* 1. SCANNED PHYSICAL BOOK NOTIFICATION BANNER */}
        <div className="bg-[#111111] text-white p-4 sm:p-5 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C67C4E] flex items-center justify-center shrink-0 text-white animate-pulse">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-widest bg-[#C67C4E]/20 px-2 py-0.5 rounded border border-[#C67C4E]/40">
                  Physical Book QR Verified
                </span>
                <span className="text-xs font-sans text-gray-300">Book Code: {book.code}</span>
              </div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-white mt-0.5">
                Scanning URL: <span className="text-amber-200">rexinecentre.com/books/{book.id}</span>
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowQrStickerModal(true)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-xl text-xs font-button font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-[#C67C4E]" />
              <span>View Book QR Sticker</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-4 py-2 rounded-xl text-xs font-button font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Book Link'}</span>
            </button>
          </div>
        </div>

        {/* 2. PHYSICAL SAMPLE BOOK HERO SECTION */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Book Cover Image & Physical Badge */}
            <div className="lg:col-span-4 relative group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                <img
                  src={book.coverImage}
                  alt={book.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Cover Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-button font-bold text-amber-300 uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-300/30">
                    {book.collectionName} Collection
                  </span>
                  <h3 className="font-serif text-xl font-bold">{book.name}</h3>
                  <p className="text-xs text-gray-300">{book.year}</p>
                </div>

                <div className="absolute top-4 right-4 bg-[#C67C4E] text-white text-[10px] font-button font-bold uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{book.totalSwatches} Designs</span>
                </div>
              </div>
            </div>

            {/* Book Metadata & Specs */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-button font-bold text-[#C67C4E] uppercase tracking-widest bg-[#C67C4E]/10 px-3 py-1 rounded-full border border-[#C67C4E]/20">
                    {book.collectionName} Collection Series
                  </span>
                  <span className="text-xs font-button font-bold text-gray-500 uppercase tracking-wider">
                    Category: {book.category}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                  {book.name}
                </h1>

                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                  {book.description}
                </p>
              </div>

              {/* Physical Book Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8F6F2] p-4 rounded-2xl border border-gray-200">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-wider block">
                    Thickness
                  </span>
                  <span className="text-xs font-bold text-gray-900">{book.specs?.thickness || '1.2 mm'}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-wider block">
                    Roll Width
                  </span>
                  <span className="text-xs font-bold text-gray-900">{book.specs?.width || '54 inches'}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-wider block">
                    Backing Type
                  </span>
                  <span className="text-xs font-bold text-gray-900">{book.specs?.backing || 'Cotton Fleece'}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-wider block">
                    Recommended For
                  </span>
                  <span className="text-xs font-bold text-[#C67C4E]">{book.specs?.targetUse || 'Sofa Upholstery'}</span>
                </div>
              </div>

              {/* Retail Prices Disclaimer */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed font-sans">
                  <strong className="font-bold font-button uppercase tracking-wider text-amber-950 block mb-0.5">
                    Retail Prices Only:
                  </strong>
                  Listed prices are per meter. For wholesale &amp; bulk roll discounts, chat with us directly on WhatsApp.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button
                  onClick={() => onOpenEnquiry(null)}
                  className="bg-[#111111] hover:bg-[#C67C4E] text-white px-7 py-3.5 rounded-full font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Request Physical Swatch Book</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello Rexine Centre,\nI scanned Physical Sample Book: ${book.name} (${book.code}).\nPlease send stock availability for all ${book.totalSwatches} swatches inside.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-7 py-3.5 rounded-full font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire Book Stock on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* 3. SWATCH DESIGNS SEARCH & SELECTION TOOLBAR */}
        <div className="mb-8 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111111]">
              Designs & Swatches in this Book ({allDesignsInBook.length})
            </h2>
            <p className="font-sans text-xs text-gray-500">
              Browse all {allDesignsInBook.length} physical swatches included in <span className="font-bold text-gray-800">{book.name}</span>.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Design Code e.g. DD-101 or Shade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
              />
            </div>

            {/* Select All Swatches for Inquiry */}
            <button
              onClick={() => {
                if (selectedSwatches.length === allDesignsInBook.length) {
                  setSelectedSwatches([]);
                } else {
                  setSelectedSwatches([...allDesignsInBook]);
                }
              }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3.5 py-2 rounded-xl text-xs font-button font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
            >
              {selectedSwatches.length === allDesignsInBook.length ? (
                <>
                  <CheckSquare className="w-4 h-4 text-[#C67C4E]" />
                  <span>Deselect All</span>
                </>
              ) : (
                <>
                  <Square className="w-4 h-4 text-gray-400" />
                  <span>Select All ({allDesignsInBook.length})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4. 25-30 PRODUCT DESIGNS GRID FOR THIS BOOK */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredDesigns.map((product, idx) => {
              const isSelected = selectedSwatches.some((s) => s.id === product.id);

              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group relative ${
                    isSelected
                      ? 'border-[#C67C4E] ring-2 ring-[#C67C4E]/30 shadow-xl'
                      : 'border-gray-200 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {/* Selection Checkbox */}
                  <button
                    onClick={() => toggleSwatchSelection(product)}
                    className={`absolute top-3 left-3 z-20 p-1.5 rounded-lg backdrop-blur-md transition-all ${
                      isSelected
                        ? 'bg-[#C67C4E] text-white shadow-md'
                        : 'bg-black/40 text-white hover:bg-black/70'
                    }`}
                    title="Select swatch for WhatsApp inquiry"
                  >
                    {isSelected ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                  </button>

                  <div>
                    {/* Swatch Image */}
                    <div
                      className="relative h-56 bg-gray-100 overflow-hidden cursor-pointer"
                      onClick={() => onSelectProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-[10px] font-button font-bold text-white uppercase tracking-wider flex items-center gap-1 bg-[#111111]/80 px-2.5 py-1 rounded-md backdrop-blur-md">
                          <Eye className="w-3 h-3 text-[#C67C4E]" />
                          Inspect Texture Specs
                        </span>
                      </div>

                      {/* Code Badge */}
                      <span className="absolute top-3 right-3 bg-[#111111]/90 backdrop-blur-md text-amber-300 text-[10px] font-button font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-amber-300/30">
                        {product.code}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-widest">
                          Swatch #{idx + 1}
                        </span>
                        {/* RRP RETAIL PRICE ONLY */}
                        <div className="text-right">
                          <span className="text-xs font-black text-gray-900 block">
                            ₹{product.rrp} / {product.unit}
                          </span>
                          <span className="text-[9px] font-button font-bold text-gray-400 uppercase tracking-widest">
                            Retail RRP
                          </span>
                        </div>
                      </div>

                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-serif font-bold text-base text-gray-900 hover:text-[#C67C4E] transition-colors cursor-pointer leading-snug line-clamp-1"
                      >
                        {product.shadeName || product.name}
                      </h3>

                      <p className="font-sans text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Color Dots */}
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="text-[9px] font-button font-bold text-gray-400 uppercase tracking-wider">
                          Shade:
                        </span>
                        {product.colors.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            title={c.name}
                            className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-xs"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>

                      {/* Technical Specs Summary */}
                      <div className="grid grid-cols-2 gap-1 bg-gray-50 p-2 rounded-lg text-[9px] font-sans text-gray-600 border border-gray-100">
                        <div><span className="font-bold text-gray-900">GSM:</span> {product.specs.gsm}</div>
                        <div><span className="font-bold text-gray-900">Thick:</span> {product.specs.thickness}</div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Direct Action */}
                  <div className="p-4 pt-0 border-t border-gray-100 mt-auto pt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-[10px] font-button font-bold uppercase tracking-wider text-gray-600 hover:text-[#111111] transition-colors"
                    >
                      Specs
                    </button>

                    <a
                      href={getWhatsAppDesignUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-3 py-1.5 rounded-lg font-button text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm mb-16 max-w-md mx-auto space-y-4">
            <Search className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-gray-900">No swatches match "{searchQuery}"</h3>
            <p className="font-sans text-xs text-gray-500">
              Try searching by design code (e.g. DD-101) or shade name.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-[#111111] text-white px-5 py-2 rounded-full font-button text-xs font-bold uppercase tracking-wider"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* OTHER PHYSICAL SAMPLE BOOKS BANNER SHOWCASE */}
        <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 mb-16 border border-white/10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#C67C4E]/20 text-[#C67C4E] px-3 py-1 rounded-full text-[10px] font-button font-bold uppercase tracking-widest border border-[#C67C4E]/30 mb-2">
                <QrCode className="w-3.5 h-3.5" />
                <span>Physical Sample Books with QR Code</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Scan Any Physical Book to View 25–30 Swatches
              </h3>
              <p className="font-sans text-xs text-gray-300 mt-1 max-w-2xl">
                Every physical sample book sent to dealers and architects carries a unique QR Code. Click any book below to simulate scanning and view all designs with RRP pricing.
              </p>
            </div>
            <Link
              to="/customizer"
              className="bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-5 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
            >
              Request Physical Book
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SAMPLE_BOOKS_DATA.map((otherBook) => {
              const isCurrentBook = otherBook.id === book.id;
              return (
                <div
                  key={otherBook.id}
                  onClick={() => {
                    navigate(`/books/${otherBook.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`border rounded-2xl p-3 cursor-pointer transition-all text-center group flex flex-col justify-between ${
                    isCurrentBook
                      ? 'bg-[#C67C4E]/20 border-[#C67C4E] ring-2 ring-[#C67C4E]/40'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#C67C4E]'
                  }`}
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-900 mb-2 border border-white/10">
                    <img
                      src={otherBook.coverImage}
                      alt={otherBook.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 bg-[#C67C4E] text-white text-[9px] font-button font-bold uppercase px-1.5 py-0.5 rounded">
                      QR Code
                    </span>
                    <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm text-[9px] font-button font-bold text-amber-300 uppercase px-1 py-0.5 rounded truncate">
                      {otherBook.totalSwatches} Designs
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#C67C4E] transition-colors line-clamp-1">
                      {otherBook.name}
                    </h4>
                    <span className="text-[10px] font-button text-gray-400 block uppercase font-bold">
                      Code: {otherBook.code}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. FLOATING STICKY BULK INQUIRY DRAWER */}
        {selectedSwatches.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[8000] w-full max-w-2xl px-4 animate-fade-in">
            <div className="bg-[#111111] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-between gap-4 backdrop-blur-xl">
              <div>
                <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-widest block">
                  {book.name} Swatches Selected
                </span>
                <h4 className="font-serif text-sm font-bold text-white">
                  {selectedSwatches.length} Swatches added for WhatsApp Inquiry
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedSwatches([])}
                  className="text-gray-400 hover:text-white text-xs font-button font-bold uppercase tracking-wider px-2"
                >
                  Clear
                </button>

                <button
                  onClick={handleSendBulkWhatsAppInquiry}
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6. PHYSICAL BOOK QR STICKER GENERATOR / VIEW MODAL */}
        {showQrStickerModal && (
          <div className="fixed inset-0 z-[9500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/10">
              <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <QrCode className="w-5 h-5 text-[#C67C4E]" />
                  <h3 className="font-button text-xs font-bold uppercase tracking-widest text-white">
                    Physical Book QR Sticker Label
                  </h3>
                </div>
                <button
                  onClick={() => setShowQrStickerModal(false)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 text-center bg-[#F8F6F2] space-y-6">
                {/* Printable QR Sticker Graphic */}
                <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-[#111111] shadow-xl max-w-xs mx-auto text-left space-y-4">
                  <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-button font-bold text-[#C67C4E] uppercase tracking-widest block">
                        REXINE CENTRE
                      </span>
                      <h4 className="font-serif font-black text-sm text-[#111111] uppercase">
                        {book.collectionName}
                      </h4>
                    </div>
                    <span className="text-[9px] font-button font-bold bg-[#111111] text-white px-2 py-0.5 rounded">
                      {book.code}
                    </span>
                  </div>

                  {/* QR Code Matrix Display */}
                  <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200 flex flex-col items-center justify-center space-y-2">
                    <div className="w-36 h-36 bg-white p-2 border-2 border-black rounded-lg flex flex-col items-center justify-center shadow-inner relative">
                      {/* Simulated QR Code Canvas */}
                      <div className="w-full h-full bg-[#111111] p-1 rounded grid grid-cols-6 gap-1">
                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white rounded-xs"></div>

                        <div className="bg-[#111111]"></div>
                        <div className="bg-white"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-[#111111]"></div>

                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-[#C67C4E] rounded-xs"></div>
                        <div className="bg-[#C67C4E] rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white rounded-xs"></div>

                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-[#C67C4E] rounded-xs"></div>
                        <div className="bg-[#C67C4E] rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white rounded-xs"></div>

                        <div className="bg-[#111111]"></div>
                        <div className="bg-white"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-[#111111]"></div>

                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-white rounded-xs"></div>
                        <div className="bg-[#111111]"></div>
                        <div className="bg-white rounded-xs"></div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-800">
                      SCAN TO VIEW DIGITAL CATALOGUE
                    </span>
                  </div>

                  <div className="text-[10px] font-sans text-gray-500 space-y-0.5">
                    <p><strong>Book Title:</strong> {book.name}</p>
                    <p><strong>Swatches:</strong> {book.totalSwatches} Swatches</p>
                    <p className="text-[#C67C4E] font-bold">rexinecentre.com/books/{book.id}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="bg-[#111111] text-white px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print QR Label Sticker</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="bg-[#C67C4E] text-white px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Copy URL</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
