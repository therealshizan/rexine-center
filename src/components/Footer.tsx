import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { RexineLogo } from './RexineLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-14 pb-8 border-t border-white/10 text-xs font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          
          {/* Column 1: Brand Info (2 cols width on lg) */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div>
              <Link to="/" className="inline-block py-1">
                <RexineLogo variant="light" className="h-9" />
              </Link>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Leading manufacturer and supplier of premium rexine for diverse industries across India. Crafted with precision, designed for perfection.
            </p>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C67C4E]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C67C4E]" />
                <span>info@rexinecentre.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C67C4E] mt-0.5 shrink-0" />
                <span>Plot No. 125, Industrial Area, Surat, Gujarat, India</span>
              </div>
            </div>

            {/* Chat with us WhatsApp button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2 rounded-lg font-button text-[10px] font-bold uppercase tracking-wider hover:bg-[#1eb857] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: PRODUCTS */}
          <div className="space-y-3">
            <h4 className="font-button text-[11px] font-bold uppercase tracking-wider text-white">
              PRODUCTS
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-[11px]">
              <li><Link to="/collections" className="hover:text-white transition-colors">Sofa Rexine</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Automotive Rexine</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">PU Leather</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">PVC Leather</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Office Chair Rexine</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Hospitality Rexine</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Gym Rexine</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Fire Retardant Rexine</Link></li>
              <li><Link to="/collections" className="hover:text-[#C67C4E] font-bold transition-colors">All Collections</Link></li>
            </ul>
          </div>

          {/* Column 3: APPLICATIONS */}
          <div className="space-y-3">
            <h4 className="font-button text-[11px] font-bold uppercase tracking-wider text-white">
              APPLICATIONS
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-[11px]">
              <li><Link to="/applications" className="hover:text-white transition-colors">Automotive</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Furniture</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Office</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Marine</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Retail</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Public Transport</Link></li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div className="space-y-3">
            <h4 className="font-button text-[11px] font-bold uppercase tracking-wider text-white">
              RESOURCES
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-[11px]">
              <li><Link to="/resources" className="hover:text-white transition-colors">Blog & News</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Buying Guide</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Care & Maintenance</Link></li>
              <li><Link to="/customizer" className="hover:text-white transition-colors">Customizer Studio</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Catalog Download</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Video Gallery</Link></li>
            </ul>
          </div>

          {/* Column 5: COMPANY */}
          <div className="space-y-3">
            <h4 className="font-button text-[11px] font-bold uppercase tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-[11px]">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Factory</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Quality Assurance</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 6 & 7: SUPPLY ACROSS INDIA */}
          <div className="space-y-3">
            <h4 className="font-button text-[11px] font-bold uppercase tracking-wider text-white">
              SUPPLY INDIA
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-[11px]">
              <li><Link to="/supply-locations?state=maharashtra" className="hover:text-white transition-colors">Maharashtra</Link></li>
              <li><Link to="/supply-locations?state=gujarat" className="hover:text-white transition-colors">Gujarat</Link></li>
              <li><Link to="/supply-locations?state=delhi" className="hover:text-white transition-colors">Delhi NCR</Link></li>
              <li><Link to="/supply-locations?state=karnataka" className="hover:text-white transition-colors">Karnataka</Link></li>
              <li><Link to="/supply-locations?state=tamil-nadu" className="hover:text-white transition-colors">Tamil Nadu</Link></li>
              <li><Link to="/supply-locations?state=punjab" className="hover:text-white transition-colors">Punjab</Link></li>
              <li><Link to="/supply-locations?state=rajasthan" className="hover:text-white transition-colors">Rajasthan</Link></li>
              <li><Link to="/supply-locations?state=uttar-pradesh" className="hover:text-white transition-colors">Uttar Pradesh</Link></li>
              <li><Link to="/supply-locations" className="hover:text-[#C67C4E] font-bold transition-colors">View All States</Link></li>
            </ul>
          </div>

        </div>

        {/* Popular Cities SEO Footer Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-button text-[10px] font-bold text-[#C67C4E] uppercase tracking-widest">
              POPULAR CITIES WHOLESALE REXINE SUPPLY
            </span>
            <Link to="/supply-locations" className="text-[10px] font-button font-bold text-gray-400 hover:text-white uppercase tracking-wider">
              Explore All Cities →
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-400">
            {[
              'Mumbai', 'Pune', 'Surat', 'Ahmedabad', 'Delhi', 'Gurgaon', 'Noida',
              'Bangalore', 'Chennai', 'Coimbatore', 'Hyderabad', 'Jaipur', 'Jodhpur',
              'Ludhiana', 'Jalandhar', 'Lucknow', 'Kanpur', 'Kolkata', 'Nagpur', 'Nashik',
              'Vadodara', 'Rajkot', 'Bhiwandi', 'Indore', 'Bhopal', 'Patna'
            ].map((cityName, idx, arr) => (
              <React.Fragment key={idx}>
                <Link
                  to={`/supply-locations?state=${cityName.toLowerCase()}`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {cityName} Rexine
                </Link>
                {idx < arr.length - 1 && <span className="text-gray-700">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-[11px] gap-4">
          <p>© 2026 Rexine Centre. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
