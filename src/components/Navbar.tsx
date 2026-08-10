import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, MessageCircle, ArrowRight, Menu, X, ChevronDown, Sliders, Phone, MapPin, Truck, ShieldCheck } from 'lucide-react';
import { RexineLogo } from './RexineLogo';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenEnquiry: () => void;
  // wishlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenWishlist,
  onOpenEnquiry,
  // wishlistCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-colors py-1 ${isActive ? 'text-[#C67C4E] border-b-2 border-[#C67C4E]' : 'text-gray-800 hover:text-[#C67C4E]'
    }`;

  return (
    <>
      {/* Top Header Announcement & Contact Bar */}
      <div className="bg-[#111111] text-white text-[10px] sm:text-[11px] font-button font-medium py-2 border-b border-gray-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">

          {/* Left Info: Contact & Express Dispatch Notice */}
          <div className="flex items-center gap-4 text-gray-300">
            <a
              href="https://wa.me/918104019890?text=Hi%20Rexine%20Centre%2C%20I%20need%20wholesale%20catalogue%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C67C4E]" />
              <span className="font-bold text-white">+91 81040 19890</span>
            </a>

            <span className="hidden md:inline text-gray-600">|</span>

            <div className="hidden sm:flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C67C4E]" />
              <span>PAN-INDIA EXPRESS WHOLESALE DISPATCH (24-48 HR)</span>
            </div>
          </div>

          {/* Right Status & Location Hubs */}
          <div className="flex items-center gap-4 text-gray-300">
            <div className="hidden lg:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C67C4E]" />
              <span>GST INVOICE ASSURED</span>
            </div>

            <span className="hidden lg:inline text-gray-600">|</span>

            <Link
              to="/supply-locations"
              className="flex items-center gap-1 text-[#C67C4E] hover:text-white font-bold transition-colors uppercase tracking-wider"
            >
              <MapPin className="w-3 h-3" />
              <span>500+ CITIES SERVED</span>
            </Link>
          </div>

        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80 transition-all">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group py-1">
            <RexineLogo variant="dark" className="h-9 sm:h-10" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-button font-bold uppercase tracking-wider">
            <NavLink to="/" end className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/books" className={navLinkStyle}>
              Books
            </NavLink>

            <NavLink to="/applications" className={navLinkStyle}>
              Industries We Serve
            </NavLink>

            <NavLink to="/resources" className={navLinkStyle}>
              Resources
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Icon Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-700 hover:text-black hover:bg-black/5 rounded-full transition-all"
              aria-label="Search Catalogue"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Icon Button */}
            {/* <button
              onClick={onOpenWishlist}
              className="p-2 text-gray-700 hover:text-black hover:bg-black/5 rounded-full transition-all relative"
              aria-label="Saved Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#C67C4E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button> */}

            {/* Main CTA Button: ENQUIRE NOW */}
            <button
              onClick={onOpenEnquiry}
              className="hidden md:flex bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-5 py-2.5 rounded-lg font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md group"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 font-button text-xs font-bold uppercase tracking-wider text-gray-900 animate-fade-in">
            <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Home
            </NavLink>
            <NavLink to="/books" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Books
            </NavLink>
            <NavLink to="/applications" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Industries We Serve
            </NavLink>
            <NavLink to="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Resources
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Contact
            </NavLink>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#111111] text-white py-3 rounded-full flex items-center justify-center gap-2"
            >
              Request Samples →
            </button>
          </div>
        )}
      </header>
    </>
  );
};
