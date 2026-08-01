import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, QrCode, CheckCircle2, Copy, FileText, ArrowRight, Camera, Sparkles, ExternalLink } from 'lucide-react';
import { PDFViewerModal } from './PDFViewerModal';

interface BookQRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    slug: string;
    title: string;
    code: string;
    category?: string;
    coverImage?: string;
    pdfPath?: string;
    designCount?: number;
  } | null;
}

export const BookQRCodeModal: React.FC<BookQRCodeModalProps> = ({ isOpen, onClose, book }) => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  if (!isOpen || !book) return null;

  // Real URL for smartphone scanning
  const targetUrl = `${window.location.origin}/books/${book.slug}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    targetUrl
  )}&color=000000&bgcolor=FFFFFF`;

  const handleScanAndOpen = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      onClose();
      navigate(`/books/${book.slug}`);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Backdrop — cursor:auto keeps cursor visible over the modal */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        style={{ cursor: 'auto' }}
        onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label={`QR Code for ${book.title}`}
      >
        <div
          className="w-full max-w-md bg-[#111111] text-white rounded-3xl shadow-2xl overflow-hidden border border-white/15 relative"
          style={{ cursor: 'auto' }}
        >

          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C67C4E] flex items-center justify-center text-white shrink-0 shadow-md">
                <QrCode className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <h3 className="font-button text-xs font-bold uppercase tracking-widest text-amber-300">
                  PHYSICAL BOOK QR CODE
                </h3>
                <p className="font-sans text-[11px] text-gray-400">
                  Book Code: <span className="text-white font-mono font-bold">{book.code}</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-5 text-center">

            <div className="space-y-1">
              <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-widest bg-[#C67C4E]/20 px-2.5 py-0.5 rounded border border-[#C67C4E]/30 inline-block">
                {book.category || '100% Polyester Upholstery'}
              </span>
              <h2 className="font-serif text-xl font-bold text-white">
                {book.title}
              </h2>
              <p className="text-xs text-gray-400 font-sans">
                Scan QR code to open the PDF catalogue directly ({book.designCount || 35}+ swatches)
              </p>
            </div>

            {/* Genuine Scannable QR Code Image */}
            <div className="relative mx-auto w-64 h-64 bg-white p-3 rounded-2xl shadow-2xl border-4 border-[#C67C4E]/50 flex flex-col items-center justify-center group overflow-hidden">

              {/* Animated Laser Scanning Line */}
              {scanning && (
                <div className="absolute inset-x-0 h-1 bg-[#C67C4E] shadow-[0_0_20px_#C67C4E] z-20 animate-bounce" />
              )}

              <img
                src={qrImageUrl}
                alt={`QR Code for ${book.title}`}
                className="w-full h-full object-contain"
              />

              {/* Center Logo Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#111111] text-[#C67C4E] px-2.5 py-1 rounded-xl border border-white/20 shadow-2xl flex items-center gap-1 font-button text-[9px] font-bold uppercase tracking-wider">
                  <QrCode className="w-3.5 h-3.5 text-amber-300" />
                  <span>REXINE</span>
                </div>
              </div>
            </div>

            {/* Direct URL Box */}
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-xs font-mono text-amber-200/90 truncate flex items-center justify-between gap-2">
              <span className="truncate text-left text-[11px]">{targetUrl}</span>
              <button
                onClick={handleCopy}
                className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors shrink-0 cursor-pointer"
                title="Copy Link"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleScanAndOpen}
                disabled={scanning}
                className="w-full bg-[#C67C4E] hover:bg-[#b06a3d] text-white py-3.5 rounded-2xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer disabled:opacity-50"
              >
                {scanning ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-amber-200" />
                    <span>SCANNING QR & OPENING BOOK...</span>
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4" />
                    <span>SIMULATE SCAN & OPEN DIGITAL BOOK</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                onClick={() => setShowPDF(true)}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-2xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/15 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>OPEN CATALOGUE PDF VIEWER</span>
              </button>

              <p className="text-[10px] text-gray-400 font-sans">
                Scanning or clicking opens all swatches, wholesale rates, and PDF catalogue.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* PDF Modal */}
      <PDFViewerModal
        isOpen={showPDF}
        onClose={() => setShowPDF(false)}
        title={book.title}
        pdfUrl={book.pdfPath || '/books/cinefab-651/catalogue.pdf'}
        code={book.code}
        pageCount={book.designCount ? book.designCount + 4 : 39}
      />
    </>
  );
};
