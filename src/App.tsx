import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';

import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

// Pages
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { BookProductDetailPage } from './pages/BookProductDetailPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { CustomizerPage } from './pages/CustomizerPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CitiesSupplyPage } from './pages/CitiesSupplyPage';
import { SitemapPage } from './pages/SitemapPage';

// Modals & Drawers
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BookScannerModal } from './components/BookScannerModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';

import { PRODUCTS } from './data/mockData';
import { Product } from './types';

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainAppContent() {
  const [loading, setLoading] = useState(true);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['p1', 'p3']);

  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState<Product | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [bookScannerOpen, setBookScannerOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const navigate = useNavigate();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleSearchSubmit = (query: string) => {
    setSearchInitialQuery(query);
    setSearchOpen(true);
  };

  const handleOpenEnquiryWithProduct = (product?: Product | null) => {
    setSelectedEnquiryProduct(product || null);
    setEnquiryOpen(true);
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="relative min-h-screen bg-[#F8F6F2] text-[#111111] antialiased selection:bg-[#C67C4E] selection:text-white">
      <ScrollToTop />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="flex flex-col min-h-screen">
          {/* 1. Shared Navbar */}
          <Navbar
            onOpenSearch={() => setSearchOpen(true)}
            onOpenWishlist={() => setWishlistOpen(true)}
            onOpenEnquiry={() => handleOpenEnquiryWithProduct(null)}
            wishlistCount={wishlistIds.length}
          />

          {/* 2. Dynamic Page Routes */}
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenBookScanner={() => setBookScannerOpen(true)}
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                    onSearchSubmit={handleSearchSubmit}
                    onSelectProduct={(p) => setDetailProduct(p)}
                    onSelectApplication={(appTitle) => {
                      navigate('/applications');
                    }}
                  />
                }
              />

              <Route
                path="/books"
                element={
                  <BooksPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/books/:slug"
                element={
                  <BookDetailPage
                    onSelectProduct={(p) => setDetailProduct(p)}
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/books/:slug/:productCode"
                element={
                  <BookProductDetailPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                    onSelectProduct={(p) => setDetailProduct(p)}
                  />
                }
              />

              <Route
                path="/applications"
                element={
                  <ApplicationsPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/customizer"
                element={
                  <CustomizerPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/resources"
                element={
                  <ResourcesPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                    onOpenBookScanner={() => setBookScannerOpen(true)}
                    onOpenVideoModal={() => setVideoOpen(true)}
                  />
                }
              />

              <Route
                path="/about"
                element={
                  <AboutPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/contact"
                element={
                  <ContactPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/supply-locations"
                element={
                  <CitiesSupplyPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              <Route
                path="/sitemap"
                element={
                  <SitemapPage
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                  />
                }
              />

              {/* Catch-all fallback route to Home */}
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenBookScanner={() => setBookScannerOpen(true)}
                    onOpenEnquiry={handleOpenEnquiryWithProduct}
                    onSearchSubmit={handleSearchSubmit}
                    onSelectProduct={(p) => setDetailProduct(p)}
                    onSelectApplication={(appTitle) => navigate('/applications')}
                  />
                }
              />
            </Routes>
          </main>

          {/* 3. Shared Footer */}
          <Footer />

          {/* Floating Action WhatsApp & Back to Top */}
          <FloatingElements />
        </div>
      )}

      {/* Modals & Drawers */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onOpenEnquiry={handleOpenEnquiryWithProduct}
      />

      <QuickEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        selectedProduct={selectedEnquiryProduct}
      />

      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        isWishlisted={detailProduct ? wishlistIds.includes(detailProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenEnquiry={handleOpenEnquiryWithProduct}
      />

      <BookScannerModal
        isOpen={bookScannerOpen}
        onClose={() => setBookScannerOpen(false)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => setDetailProduct(p)}
        initialQuery={searchInitialQuery}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainAppContent />
    </BrowserRouter>
  );
}
