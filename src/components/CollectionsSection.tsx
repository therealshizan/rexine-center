import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, heroLeatherRolls, leatherSwatchesStacked, aboutInteriorDining } from '../data/mockData';

interface CollectionsSectionProps {
  onSelectCollection: (colId: string) => void;
}

const FEATURED_COLLECTIONS_MOCK = [
  {
    id: 'milano',
    title: 'MILANO',
    subtitle: 'COLLECTION',
    designs: '30 Designs',
    image: heroLeatherRolls,
  },
  {
    id: 'supreme',
    title: 'SUPREME',
    subtitle: 'COLLECTION',
    designs: '28 Designs',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'royal',
    title: 'ROYAL',
    subtitle: 'COLLECTION',
    designs: '32 Designs',
    image: aboutInteriorDining,
  },
  {
    id: 'elite',
    title: 'ELITE',
    subtitle: 'COLLECTION',
    designs: '26 Designs',
    image: leatherSwatchesStacked,
  },
  {
    id: 'signature',
    title: 'SIGNATURE',
    subtitle: 'COLLECTION',
    designs: '29 Designs',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
  },
];

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectCollection,
}) => {
  return (
    <section id="collections" className="bg-[#EDE8E3] py-16 border-b border-gray-300/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. BROWSE BY CATEGORY */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              BROWSE BY CATEGORY
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCollection(cat.id)}
                className="group relative h-40 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-black/10 flex items-end p-2.5 bg-[#111111]"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                <span className="relative z-10 font-button text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white text-center w-full block group-hover:text-[#C67C4E] transition-colors leading-tight">
                  {cat.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FEATURED COLLECTIONS */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              FEATURED COLLECTIONS
            </h2>

            <a
              href="#collections"
              className="font-button text-xs font-bold text-[#C67C4E] hover:underline uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FEATURED_COLLECTIONS_MOCK.map((col) => (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-white/20 bg-[#111111] flex flex-col justify-between p-6"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

                <div className="relative z-10 pt-4">
                  <h3 className="font-poppins text-xl font-black uppercase tracking-wider text-white group-hover:text-[#C67C4E] transition-colors">
                    {col.title}
                  </h3>
                  <span className="font-button text-[10px] font-bold uppercase tracking-widest text-gray-300 block mt-0.5">
                    {col.subtitle}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="font-button text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block">
                    {col.designs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
