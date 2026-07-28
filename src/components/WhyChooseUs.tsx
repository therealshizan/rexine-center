import React from 'react';
import { Award, Layers, Tag, MessageCircle, Truck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the best materials',
    },
    {
      icon: Layers,
      title: 'Vast Collection',
      description: '1000+ designs & textures',
    },
    {
      icon: Tag,
      title: 'Wholesale Pricing',
      description: 'Best rates for businesses',
    },
    {
      icon: MessageCircle,
      title: 'Quick Enquiry',
      description: 'WhatsApp enquiry in one click',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'Reliable & timely delivery',
    },
  ];

  return (
    <section className="py-16 bg-[#F8F6F2] border-b border-black/8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-button text-sm font-bold uppercase tracking-[0.2em] text-[#111111] mb-8 text-center md:text-left">
          WHY CHOOSE US
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-black/8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F8F6F2] group-hover:bg-[#C67C4E] text-[#C67C4E] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-button text-xs font-bold text-[#111111] uppercase tracking-wider mb-1 group-hover:text-[#C67C4E] transition-colors">
                  {reason.title}
                </h3>
                <p className="font-sans text-xs text-gray-500">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
