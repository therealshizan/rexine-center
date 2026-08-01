import React from 'react';
import { X, Trash2, MessageCircle, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onOpenEnquiry: (product?: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  const handleWhatsAppBatchEnquiry = () => {
    if (wishlistProducts.length === 0) return;
    const codes = wishlistProducts.map((p) => `${p.code} (${p.name})`).join(', ');
    const text = encodeURIComponent(`Hi Rexine Centre, I am interested in wholesale quotes for the following saved items from my wishlist: ${codes}`);
    window.open(`https://wa.me/918104019890?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9000] flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#F8F6F2]">
          <div>
            <h3 className="font-button text-sm font-bold uppercase tracking-wider text-[#111111]">
              SAVED WISHLIST
            </h3>
            <p className="font-sans text-xs text-gray-500">
              {wishlistProducts.length} Saved Swatch Items
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-black hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-gray-400">
              <p className="font-sans text-sm mb-2 font-medium">Your wishlist is empty</p>
              <p className="font-sans text-xs text-gray-400 max-w-xs">
                Click the heart icon on any material card to save it for quick bulk enquiry.
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="p-3 bg-[#F8F6F2] rounded-xl border border-black/8 flex items-center justify-between gap-3 group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg shrink-0"
                />
                <div className="flex-grow">
                  <span className="font-button text-[10px] font-bold text-[#C67C4E] uppercase">
                    {product.code}
                  </span>
                  <h4 className="font-sans text-xs font-semibold text-gray-900 leading-tight">
                    {product.name}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-500 mt-1">
                    RRP: ₹{product.rrp.toLocaleString('en-IN')} / {product.unit}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveFromWishlist(product.id)}
                  aria-label="Remove item"
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {wishlistProducts.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-[#F8F6F2] space-y-3">
            <button
              onClick={handleWhatsAppBatchEnquiry}
              className="w-full bg-[#25D366] hover:bg-[#1eb857] text-white py-3.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ENQUIRE ALL ON WHATSAPP</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
