import React, { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    userType: 'Architect',
    quantity: '1 Roll (30m)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also open WhatsApp prefilled
    const pInfo = selectedProduct ? ` regarding ${selectedProduct.code} (${selectedProduct.name})` : '';
    const text = encodeURIComponent(
      `Hello Rexine Centre,\nI am submitting a wholesale enquiry${pInfo}:\nName: ${formData.name}\nCity: ${formData.city}\nRole: ${formData.userType}\nQuantity: ${formData.quantity}\nNotes: ${formData.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
          <div>
            <h3 className="font-button text-sm font-bold uppercase tracking-wider text-white">
              WHOLESALE QUICK ENQUIRY
            </h3>
            <p className="font-sans text-xs text-[#C67C4E]">
              {selectedProduct ? `Product: ${selectedProduct.code} — ${selectedProduct.name}` : 'Direct Stock & Pricing Desk'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 bg-[#F8F6F2]">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h4 className="font-button text-sm font-bold text-[#111111] uppercase tracking-wider mb-1">
                Redirecting to WhatsApp Desk...
              </h4>
              <p className="font-sans text-xs text-gray-600">
                Your enquiry details have been prefilled for instant response.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikramaditya Shah"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#C67C4E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#C67C4E]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Surat, Mumbai"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#C67C4E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-1">
                    I am a...
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#C67C4E]"
                  >
                    <option value="Architect">Architect / Interior Designer</option>
                    <option value="Sofa Maker">Sofa / Furniture Manufacturer</option>
                    <option value="Retailer">Retail Fabric Store / Dealer</option>
                    <option value="Automotive">Automotive Interior Specialist</option>
                    <option value="End User">End Consumer / Home Owner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Req. Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#C67C4E]"
                  >
                    <option value="Sample Book Only">Physical Sample Book</option>
                    <option value="5-15 Meters">5 - 15 Meters (Sample Roll)</option>
                    <option value="1 Roll (30m)">1 Full Master Roll (~30m)</option>
                    <option value="5+ Bulk Rolls">5+ Bulk Rolls (Commercial)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-button font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Message / Special Texture Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify required color shades, backing type, or project timeline..."
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#C67C4E]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#111111] hover:bg-[#25D366] text-white py-3.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group mt-2"
              >
                <span>SUBMIT VIA WHATSAPP DESK</span>
                <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
