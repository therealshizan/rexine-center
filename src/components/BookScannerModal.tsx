import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, QrCode, BookOpen, CheckCircle, ExternalLink, ArrowRight, Camera, FileText, Sparkles, RefreshCw } from 'lucide-react';
import { SAMPLE_BOOKS_DATA } from '../data/booksData';
import { PDFViewerModal } from './PDFViewerModal';
import { SITE_URL } from '../config';

interface BookScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookScannerModal: React.FC<BookScannerModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(SAMPLE_BOOKS_DATA[0]);
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [showPDFModal, setShowPDFModal] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
    }
  }, [isOpen]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraActive(true);
      } else {
        setCameraError('Camera API not supported in this browser window. Using scanner laser mode.');
      }
    } catch (err) {
      console.warn('Camera access error:', err);
      setCameraError('Camera access unavailable or declined. Using simulated laser scanner mode.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  if (!isOpen) return null;

  const handleSimulateScan = (book: typeof SAMPLE_BOOKS_DATA[0]) => {
    setSelectedBook(book);
    setScanned(true);
    const pdfTarget = `${SITE_URL.replace(/\/$/, '')}/books/${book.id}/catalogue.pdf`;
    setTimeout(() => {
      stopCamera();
      setScanned(false);
      onClose();
      window.open(pdfTarget, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  const handleOpenDirectly = (bookId: string) => {
    stopCamera();
    onClose();
    navigate(`/books/${bookId}`);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        onClick={() => {
          stopCamera();
          onClose();
        }}
      ><div
  onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-2xl max-h-[90vh] bg-[#111111] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden flex flex-col"
> 
          {/* Header */}
          <div className="p-5 bg-[#181818] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C67C4E] flex items-center justify-center text-white shrink-0 shadow-md">
                <QrCode className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <h3 className="font-button text-xs font-bold uppercase tracking-widest text-amber-300">
                  PHYSICAL SAMPLE BOOK QR SCANNER
                </h3>
                <p className="font-sans text-xs text-gray-400">
                  Scan physical book QR code to open all swatches & PDF catalogue
                </p>
              </div>
            </div>
            
            <button
              onClick={() => {
                stopCamera();
                onClose();
              }}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Container */}
          <div data-lenis-prevent className="p-6 space-y-6 overflow-y-auto flex-grow">  
            {/* Camera Viewfinder Box */}
            <div className="space-y-3">
              <div className="relative w-full h-48 sm:h-56 bg-black rounded-2xl border-2 border-white/15 overflow-hidden flex flex-col items-center justify-center">
                {isCameraActive ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-[#181818] flex flex-col items-center justify-center p-4 text-center">
                    <div className="relative w-24 h-24 border-2 border-dashed border-[#C67C4E]/60 rounded-xl flex items-center justify-center mb-2 overflow-hidden bg-black/40">
                      <div className="absolute inset-x-0 h-1 bg-[#C67C4E] shadow-[0_0_15px_#C67C4E] animate-bounce z-10" />
                      <QrCode className="w-10 h-10 text-[#C67C4E]/80" />
                    </div>
                    <p className="text-xs text-gray-300 font-sans max-w-xs">
                      Point camera at <span className="text-amber-300 font-bold">{selectedBook.code}</span> QR code on back of sample binder
                    </p>
                  </div>
                )}

                {/* Viewfinder Reticle Overlay */}
                <div className="absolute inset-6 sm:inset-8 border-2 border-amber-400/30 rounded-xl pointer-events-none flex flex-col justify-between p-2">
                  <div className="flex justify-between">
                    <div className="w-4 h-4 border-t-2 border-l-2 border-amber-300" />
                    <div className="w-4 h-4 border-t-2 border-r-2 border-amber-300" />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-4 h-4 border-b-2 border-l-2 border-amber-300" />
                    <div className="w-4 h-4 border-b-2 border-r-2 border-amber-300" />
                  </div>
                </div>
              </div>

              {/* Camera Action Controls (Moved out of video overlay to prevent hiding scanner) */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                {!isCameraActive ? (
                  <button
                    onClick={startCamera}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-[11px] font-button uppercase font-bold flex items-center gap-1.5 cursor-pointer border border-white/20 transition-all"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-300" />
                    <span>Enable Live Device Camera</span>
                  </button>
                ) : (
                  <button
                    onClick={stopCamera}
                    className="bg-red-500/80 hover:bg-red-600 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-[11px] font-button uppercase font-bold flex items-center gap-1 cursor-pointer transition-all"
                  >
                    <span>Stop Camera</span>
                  </button>
                )}

                <button
                  onClick={() => setShowPDFModal(true)}
                  className="bg-[#C67C4E] hover:bg-[#b06a3d] backdrop-blur-md text-white px-4 py-2 rounded-xl text-[11px] font-button uppercase font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-200" />
                  <span>Open PDF Catalogue</span>
                </button>
              </div>
            </div>

            {cameraError && (
              <p className="text-[11px] text-amber-300/80 bg-amber-400/10 p-2.5 rounded-xl border border-amber-400/20 text-center font-sans">
                {cameraError}
              </p>
            )}

            {/* Active Book Item */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-24 h-24 bg-gray-900 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md">
                <img
                  src={selectedBook.coverImage}
                  alt={selectedBook.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-1 left-1 right-1 text-[9px] font-button font-bold text-amber-300 uppercase bg-black/80 px-1 py-0.5 rounded text-center truncate">
                  {selectedBook.code}
                </div>
              </div>

              <div className="flex-grow text-center sm:text-left space-y-1">
                <span className="text-[10px] uppercase font-button text-[#C67C4E] font-bold tracking-wider">
                  {selectedBook.collectionName}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {selectedBook.name}
                </h4>
                <p className="font-sans text-xs text-gray-400 mb-3">
                  Contains {selectedBook.totalSwatches} active physical swatches with specs & wholesale rates.
                </p>

                {scanned ? (
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-500/30">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>QR Code Scanned! Opening Digital Book...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5 justify-center sm:justify-start flex-wrap pt-1">
                    <button
                      onClick={() => handleSimulateScan(selectedBook)}
                      className="inline-flex items-center gap-2 bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span>Scan & View Swatches</span>
                    </button>

                    <button
                      onClick={() => handleOpenDirectly(selectedBook.id)}
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-white/10"
                    >
                      <span>Open Book ({selectedBook.totalSwatches})</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Book Selection Carousel */}
            <div className="space-y-3">
              <h5 className="font-button text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Select Physical Sample Book:
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SAMPLE_BOOKS_DATA.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => {
                      setSelectedBook(book);
                      handleSimulateScan(book);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      selectedBook.id === book.id
                        ? 'border-[#C67C4E] bg-[#C67C4E]/15 shadow-md text-white ring-1 ring-[#C67C4E]'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <img
                      src={book.coverImage}
                      alt={book.name}
                      className="w-9 h-9 rounded-lg object-cover shrink-0 border border-white/10"
                    />
                    <div className="overflow-hidden">
                      <p className="font-button text-[10px] font-bold text-amber-300 uppercase truncate">
                        {book.code}
                      </p>
                      <p className="font-sans text-[11px] text-gray-200 truncate">{book.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
        title={selectedBook.name}
        pdfUrl={`/books/${selectedBook.id}/catalogue.pdf`}
        code={selectedBook.code}
        pageCount={selectedBook.totalSwatches + 4}
      />
    </>
  );
};