import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FAQS, chairLoungeContact } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent('Hello Rexine Centre, I would like to get in touch regarding a wholesale order.');
    window.open(`https://wa.me/919930952947?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F8F6F2] border-b border-black/8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: FREQUENTLY ASKED QUESTIONS */}
          <div className="lg:col-span-7">
            <h2 className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-8">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-black/8 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 md:p-5 flex items-center justify-between text-left font-button text-xs md:text-sm font-semibold text-[#111111] hover:text-[#C67C4E] transition-colors"
                      data-cursor="Toggle"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <div className="w-6 h-6 rounded-full bg-[#F8F6F2] flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="w-3.5 h-3.5 text-[#C67C4E]" /> : <Plus className="w-3.5 h-3.5 text-gray-600" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 font-sans text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: GET IN TOUCH */}
          <div id="contact" className="lg:col-span-5 relative bg-white p-8 rounded-2xl border border-black/8 shadow-sm flex flex-col justify-between overflow-hidden">
            <div>
              <h2 className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-2">
                GET IN TOUCH
              </h2>
              <p className="font-serif italic text-base text-gray-700 mb-8">
                Let's create something beautiful together.
              </p>

              {/* Info Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-button uppercase text-gray-400 block">WhatsApp Desk</span>
                    <span className="font-sans text-xs font-semibold text-gray-900">+91 99309 52947</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C67C4E]/10 text-[#C67C4E] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-button uppercase text-gray-400 block">Email Us</span>
                    <span className="font-sans text-xs font-semibold text-gray-900">info@rexinecentre.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#111111]/10 text-[#111111] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-button uppercase text-gray-400 block">Location</span>
                    <span className="font-sans text-xs font-semibold text-gray-900">Surat, Gujarat, India</span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-[#111111] hover:bg-[#25D366] text-white py-3.5 px-6 rounded-lg font-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md group z-10 relative"
                data-cursor="WhatsApp"
              >
                <span>ENQUIRE ON WHATSAPP</span>
                <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Bottom Right Lounge Chair Image Cutout */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end">
              <img
                src={chairLoungeContact}
                alt="Rexine Upholstered Lounge Chair"
                className="w-36 h-36 object-contain hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
