import React from 'react';
import { ArrowRight, Heart, MessageCircle, Eye } from 'lucide-react';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiryWithProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct,
  onOpenEnquiryWithProduct,
}) => {
  return (
    <section id="featured-products" className="py-16 md:py-24 bg-[#F8F6F2] border-b border-black/8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-black/8">
          <div>
            <h2 className="font-button text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#111111]">
              FEATURED PRODUCTS
            </h2>
            <p className="font-serif italic text-sm text-[#C67C4E] mt-0.5">
              Wholesale master rolls & bespoke material swatches
            </p>
          </div>

          <a
            href="#featured-products"
            className="inline-flex items-center gap-2 text-xs font-button font-bold uppercase tracking-wider text-[#111111] hover:text-[#C67C4E] transition-colors group"
            data-cursor="View All"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Wishlist Top Container */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onClick={() => onSelectProduct(product)}
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    aria-label="Add to Wishlist"
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
                      isWishlisted
                        ? 'bg-[#C67C4E] text-white shadow-md'
                        : 'bg-white/80 text-gray-700 hover:bg-white hover:text-[#C67C4E]'
                    }`}
                    data-cursor="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick View Button Hover overlay */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur-md text-[#111111] py-2.5 rounded-lg font-button text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Eye className="w-4 h-4 text-[#C67C4E]" />
                    <span>Quick View Swatches</span>
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-button text-xs font-bold text-[#111111] uppercase tracking-wider">
                        {product.code}
                      </span>
                      <span className="text-[10px] uppercase font-number text-[#C67C4E] font-semibold bg-[#C67C4E]/10 px-2 py-0.5 rounded">
                        {product.category}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-sans font-semibold text-sm text-gray-800 hover:text-[#C67C4E] cursor-pointer transition-colors mb-2"
                    >
                      {product.name}
                    </h3>

                    {/* <p className="font-sans text-xs text-gray-500 mb-4 font-medium">
                      RRP: ₹{product.rrp.toLocaleString('en-IN')} / {product.unit}
                    </p> */}
                  </div>

                  {/* Bottom Row: Swatches & WhatsApp */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          title={color.name}
                          className="w-4 h-4 rounded-full border border-black/20 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>

                    {/* WhatsApp Quick Order Icon */}
                    <button
                      onClick={() => onOpenEnquiryWithProduct(product)}
                      aria-label="Enquire on WhatsApp"
                      className="w-9 h-9 rounded-full bg-[#F8F6F2] hover:bg-[#25D366] text-[#25D366] hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm"
                      data-cursor="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
