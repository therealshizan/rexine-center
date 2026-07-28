import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Building, Clock } from 'lucide-react';
import { Product } from '../types';

interface ContactPageProps {
  onOpenEnquiry: (product?: Product | null) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenEnquiry }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    requirement: 'Bulk Rolls',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#F8F6F2] min-h-screen pt-8 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E] block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] mb-4">
            Contact Our Sales & Technical Team
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            Whether you need custom color matching, bulk wholesale roll pricing, or physical swatch sample books for your studio, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone & WhatsApp Box */}
            <div className="bg-[#111111] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E] block">
                Instant Response
              </span>
              <h2 className="font-serif text-2xl font-bold">
                Direct Hotline & WhatsApp
              </h2>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                Connect directly with our procurement team for live price quotes, stock availability, and dispatch status across India.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/919476543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-emerald-600 text-white p-4 rounded-2xl flex items-center gap-4 transition-all shadow-md group"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <div>
                    <span className="font-button text-[10px] font-bold uppercase tracking-wider block opacity-90">
                      WhatsApp Quick Chat
                    </span>
                    <span className="font-serif text-base font-bold">
                      +91 94765 43210
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919476543210"
                  className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-2xl flex items-center gap-4 transition-all border border-white/15"
                >
                  <Phone className="w-6 h-6 text-[#C67C4E]" />
                  <div>
                    <span className="font-button text-[10px] font-bold uppercase tracking-wider block text-gray-400">
                      Toll Free Phone
                    </span>
                    <span className="font-serif text-base font-bold">
                      +91 (022) 2854 9900
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C67C4E] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-base text-gray-900">
                    Head Office & Experience Center
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-1 leading-relaxed">
                    Plot No. 125, Industrial Area, MIDC, Andheri East, Mumbai, Maharashtra 400093, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                <Building className="w-5 h-5 text-[#C67C4E] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-base text-gray-900">
                    Central Supply Hubs
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-1 leading-relaxed">
                    Mumbai • Ahmedabad • New Delhi • Bangalore • Chennai • Kolkata
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                <Clock className="w-5 h-5 text-[#C67C4E] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-base text-gray-900">
                    Business Hours
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-1">
                    Mon - Sat: 9:30 AM - 7:00 PM IST (Closed Sundays)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="font-sans text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out. Our technical team will review your requirement and contact you within 2 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#111111] text-white px-6 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Request Bulk Quote or Swatch Samples
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Furniture Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Requirement Type
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                    >
                      <option value="Bulk Rolls">Bulk Rolls Wholesale Order</option>
                      <option value="Sample Book">Request Physical Swatch Book</option>
                      <option value="Custom Matching">Custom Color / Emboss Matching</option>
                      <option value="Dealer Enquiry">Authorized Dealership Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-button font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Requirement Details / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify total meters, color codes, thickness, or end application..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111111] hover:bg-[#C67C4E] text-white py-3.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <span>Submit Requirement Enquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
