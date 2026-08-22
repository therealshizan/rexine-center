import React from 'react';

interface LeatherMarqueeProps {
  className?: string;
}

const SWATCHES = [
  { id: 1, src: '/images/swatches/swatch_1.webp', alt: 'Classic Tan Folded Leather Swatch' },
  { id: 2, src: '/images/swatches/swatch_2.webp', alt: 'Royal Cobalt Blue Leather Swatch' },
  { id: 3, src: '/images/swatches/swatch_3.webp', alt: 'Warm Cognac Textured Leather Swatch' },
  { id: 4, src: '/images/swatches/swatch_4.webp', alt: 'Black Grain Premium Leather Swatch' },
  { id: 5, src: '/images/swatches/swatch_5.webp', alt: 'Rich Saddle Brown Leather Swatch' },
  { id: 6, src: '/images/swatches/swatch_6.webp', alt: 'Amber Rust Pleated Leather Swatch' },
];

export const LeatherMarquee: React.FC<LeatherMarqueeProps> = ({ className = '' }) => {
  // Duplicated set for seamless 50% translation loop
  const marqueeItems = [...SWATCHES, ...SWATCHES];

  return (
    <section className={`relative overflow-hidden bg-[#EDE8E3] py-8 sm:py-12 select-none border-b border-black/5 ${className}`}>
      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden flex items-center">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 w-max animate-leather-marquee cursor-pointer py-1">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-none w-[160px] sm:w-[210px] md:w-[250px] lg:w-[280px] aspect-square flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                draggable={false}
                className="w-full h-full object-contain pointer-events-none drop-shadow-sm transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
