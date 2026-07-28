import React from 'react';
import { ArrowRight, Armchair, Compass, Sofa, Car, Hotel, Store, Building, Scissors } from 'lucide-react';
import { INDUSTRIES } from '../data/mockData';

interface IndustriesServedProps {
  onSelectIndustry: (industryTitle: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Armchair,
  Compass,
  Sofa,
  Car,
  Hotel,
  Store,
  Building,
  Scissors,
};

export const IndustriesServed: React.FC<IndustriesServedProps> = ({ onSelectIndustry }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-black/8">
          <div>
            <h2 className="font-button text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#111111]">
              INDUSTRIES WE SERVE
            </h2>
            <p className="font-serif italic text-sm text-[#C67C4E] mt-0.5">
              Empowering craftsmen, manufacturers and creators across sectors
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-button font-bold uppercase tracking-wider text-[#111111] hover:text-[#C67C4E] transition-colors group"
            data-cursor="View All"
          >
            <span>VIEW ALL INDUSTRIES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3.5">
          {INDUSTRIES.map((industry) => {
            const IconComponent = ICON_MAP[industry.iconName] || Building;
            return (
              <div
                key={industry.id}
                onClick={() => onSelectIndustry(industry.title)}
                className="group relative h-56 rounded-xl overflow-hidden cursor-pointer shadow-md border border-black/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
                data-cursor="Explore"
              >
                {/* Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-colors" />

                {/* Top Icon */}
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-[#C67C4E] group-hover:border-[#C67C4E] transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Title */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="font-button text-xs md:text-sm font-bold text-white tracking-wide group-hover:text-[#E3A378] transition-colors leading-tight">
                    {industry.title}
                  </h3>
                  <p className="font-sans text-[10px] text-gray-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
