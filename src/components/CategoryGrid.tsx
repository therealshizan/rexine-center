import React from 'react';
import { ArrowRight, Layers, Sparkles, Grid as GridIcon, Armchair, Sofa, Car, Home, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Layers,
  Sparkles,
  Grid: GridIcon,
  Armchair,
  Sofa,
  Car,
  Home,
  Palette,
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#F8F6F2]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-black/8">
          <div>
            <h2 className="font-button text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#111111]">
              BROWSE BY CATEGORY
            </h2>
            <p className="font-serif italic text-sm text-[#C67C4E] mt-0.5">
              Curated textures for architectural & manufacturing excellence
            </p>
          </div>

          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-xs font-button font-bold uppercase tracking-wider text-[#111111] hover:text-[#C67C4E] transition-colors group"
            data-cursor="View All"
          >
            <span>VIEW ALL CATEGORIES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Cards Grid (8 cols on lg desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3.5">
          {CATEGORIES.map((category) => {
            const IconComponent = ICON_MAP[category.iconName] || Layers;
            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="group relative h-56 lg:h-60 rounded-xl overflow-hidden cursor-pointer shadow-md border border-black/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between p-3"
                data-cursor="Explore"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop';
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-300" />

                {/* Top Subtle Icon Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-[#C67C4E] group-hover:border-[#C67C4E] transition-colors duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Bottom Content Title & Count */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                  <h3 className="font-button text-sm md:text-base font-bold text-white tracking-wide group-hover:text-[#E3A378] transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-sans text-[11px] text-gray-300 mt-1 flex items-center justify-between">
                    <span>{category.count}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#C67C4E] font-bold">
                      Explore →
                    </span>
                  </p>
                </div>

                {/* Copper Border Highlight on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C67C4E] rounded-xl transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
