import React, { useState } from 'react';
import { X, Heart, MessageCircle, Check, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  // isWishlisted: boolean;
  // onToggleWishlist: (productId: string) => void;
  onOpenEnquiry: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  // isWishlisted,
  // onToggleWishlist,
  onOpenEnquiry,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0] || { name: 'Default', hex: '#111111' });

  return (
    <div data-lenis-prevent className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Left Visual Column */}
        <div className="w-full md:w-1/2 bg-[#111111] relative p-6 flex flex-col justify-between text-white">
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 z-20 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Main Swatch Image */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-4 group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Selected Color Overlay Tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
              <span className="w-4 h-4 rounded-full border border-white/40" style={{ backgroundColor: selectedColor.hex }} />
              <span className="font-button text-xs font-bold text-white uppercase tracking-wider">{selectedColor.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 font-sans">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#C67C4E]" />
              Wholesale Grade Certified
            </span>
            <span className="text-[#C67C4E] font-bold uppercase tracking-widest text-[10px]">
              Ready Stock Master Roll
            </span>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between bg-[#F8F6F2]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-button text-xs font-bold text-[#C67C4E] uppercase tracking-widest bg-[#C67C4E]/10 px-2.5 py-1 rounded">
                CODE: {product.code}
              </span>
              <button
                onClick={onClose}
                className="hidden md:block p-1 text-gray-400 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111] mb-1">
              {product.name}
            </h2>

            <p className="font-sans text-xs text-gray-500 mb-4">
              Category: <span className="font-semibold text-gray-800">{product.category}</span>
            </p>

            {/* <div className="bg-white p-3 rounded-xl border border-black/8 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-button text-gray-400 block">Retail Rate (RRP)</span>
                <span className="font-serif text-xl font-bold text-[#111111]">
                  ₹{product.rrp.toLocaleString('en-IN')} <span className="text-xs font-sans font-normal text-gray-500">/ {product.unit}</span>
                </span>
              </div>
              <span className="text-[10px] font-button font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                Wholesale Tiers Available
              </span>
            </div> */}

            <p className="font-sans text-xs text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color Selector */}
            {/* <div className="mb-6">
              <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-2">
                Available Swatch Shades ({product.colors.length})
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {product.colors.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(col)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-sans transition-all ${
                      selectedColor.name === col.name
                        ? 'border-[#C67C4E] bg-white shadow-sm font-semibold'
                        : 'border-transparent bg-white/60 hover:bg-white'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: col.hex }} />
                    <span className="text-gray-800">{col.name}</span>
                  </button>
                ))}
              </div>
            </div> */}

            {/* Tech Specs Table */}
            <div className="bg-white rounded-xl border border-black/8 p-4 mb-6">
              <h4 className="font-button text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C67C4E]" />
                cal Specifications
              </h4>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] font-sans">
                <div><span className="text-gray-400">Thickness:</span> <span className="font-semibold text-gray-800">{product.specs.thickness}</span></div>
                <div><span className="text-gray-400">Roll Width:</span> <span className="font-semibold text-gray-800">{product.specs.width}</span></div>
                <div><span className="text-gray-400">Backing:</span> <span className="font-semibold text-gray-800">{product.specs.backing}</span></div>
                <div><span className="text-gray-400">GSM Weight:</span> <span className="font-semibold text-gray-800">{product.specs.gsm}</span></div>
                <div><span className="text-gray-400">Finish:</span> <span className="font-semibold text-gray-800">{product.specs.finish}</span></div>
                <div><span className="text-gray-400">Std Roll:</span> <span className="font-semibold text-gray-800">{product.specs.rollLength}</span></div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-black/8">
            {/* <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-3 rounded-xl border transition-all ${
                isWishlisted
                  ? 'bg-[#C67C4E] text-white border-[#C67C4E]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#C67C4E]'
              }`}
              data-cursor="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button> */}

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(product);
              }}
              className="flex-grow bg-[#111111] hover:bg-[#25D366] text-white py-3.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group"
              data-cursor="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>ENQUIRE WHATSAPP QUOTE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
