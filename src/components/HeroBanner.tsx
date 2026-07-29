import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import heroLeatherFolds from '../assets/images/hero_leather_folds_1785161428952.jpg';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import rexineCognacNappa from '../assets/images/rexine_cognac_nappa_1785227277160.jpg';
import rexineBurgundyWine from '../assets/images/rexine_burgundy_wine_1785227406807.jpg';
import rexineEmeraldGreen from '../assets/images/rexine_emerald_green_1785227447891.jpg';
import rexineMidnightNavy from '../assets/images/rexine_midnight_navy_1785227463408.jpg';
import rexineSlateCharcoal from '../assets/images/rexine_slate_charcoal_1785227428841.jpg';

interface HeroBannerProps {
  onOpenBookScanner: () => void;
  onOpenEnquiry: () => void;
}

export const HERO_SLIDES = [
  {
    title: 'EXPLORE TEXTURES. ELEVATE SPACES.',
    description: 'Your trusted wholesale destination for rexine, leatherette, upholstery fabrics & furnishing materials.',
    button: 'BROWSE SAMPLE BOOKS',
    image: heroLeatherFolds,
    color: '#D6C3B1',
    subtitle: 'Classic Taupe Leather Fold',
  },
  {
    title: 'MILANO SOFT NAPPA HIDES.',
    description: 'Ultra-smooth 1.2mm Nappa leatherette crafted for high-end living room sofas and hospitality suites.',
    button: 'EXPLORE MILANO',
    image: heroLeatherRolls,
    color: '#D2A679',
    subtitle: 'Pebble Grain Amber Tan',
  },
  {
    title: 'COGNAC SILKY NAPPA FINISH.',
    description: 'Rich amber cognac upholstery hide engineered with supreme anti-peel & 100k-rub abrasion resistance.',
    button: 'VIEW COGNAC SWATCHES',
    image: rexineCognacNappa,
    color: '#A66E38',
    subtitle: 'Silky Cognac Nappa',
  },
  {
    title: 'ROYAL BURGUNDY EMBOSSED.',
    description: 'Luxury deep wine red artificial leather folds for executive chairs, headboards, and accent walls.',
    button: 'REQUEST SAMPLE BINDER',
    image: rexineBurgundyWine,
    color: '#581825',
    subtitle: 'Royal Wine Burgundy',
  },
  {
    title: 'EMERALD FOREST METALLIC.',
    description: 'Deep emerald forest green embossed leatherette roll with metallic sheen for automotive & interior accents.',
    button: 'EXPLORE EMERALD',
    image: rexineEmeraldGreen,
    color: '#1E4D3A',
    subtitle: 'Emerald Forest Grain',
  },
  {
    title: 'MIDNIGHT NAVY LUXURY GRADE.',
    description: 'Premium navy blue leatherette engineered for marine upholstery, executive seating, and commercial decor.',
    button: 'VIEW NAVY SWATCHES',
    image: rexineMidnightNavy,
    color: '#1E2A38',
    subtitle: 'Midnight Navy Sheen',
  },
  {
    title: 'MODERN SLATE & CHARCOAL.',
    description: 'Contemporary dark slate texture for minimalist commercial spaces, pods, and luxury interiors.',
    button: 'EXPLORE BOOKS',
    image: rexineSlateCharcoal,
    color: '#383D42',
    subtitle: 'Modern Slate Texture',
  },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenBookScanner,
  onOpenEnquiry,
}) => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[620px] sm:h-[700px] w-full overflow-hidden bg-[#EDE8E3] border-b border-gray-300">

      {/* Background Images with Fade Transition */}
      {HERO_SLIDES.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${active === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-10000`}
          referrerPolicy="no-referrer"
        />
      ))}

      {/* Right/Left Blur Overlay */}
      <div className="absolute left-0 top-0 h-full w-full sm:w-2/3 md:w-1/2 backdrop-blur-[16px] z-10 pointer-events-none" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EDE8E3] via-[#EDE8E3]/90 md:via-[#EDE8E3]/80 to-transparent z-10 pointer-events-none" />

      {/* Left Content */}
      <div className="relative z-20 flex h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex-col justify-center py-10">
        <div className="max-w-2xl sm:max-w-3xl space-y-6">

          <span className="font-button text-[11px] font-bold tracking-[0.25em] text-[#C67C4E] uppercase block">
            PREMIUM REXINE & LEATHERETTE • {HERO_SLIDES[active].subtitle}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold leading-[1.1] text-[#111111] uppercase tracking-tight">
            {HERO_SLIDES[active].title}
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 font-sans max-w-xl">
            {HERO_SLIDES[active].description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/books"
              className="flex w-fit items-center gap-3 rounded-full bg-[#111111] hover:bg-[#C67C4E] px-8 py-4 text-xs font-button font-bold uppercase tracking-wider text-white transition-all shadow-lg hover:shadow-xl group"
            >
              <span>{HERO_SLIDES[active].button}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenBookScanner}
              className="flex w-fit items-center gap-2 rounded-full border border-black/20 hover:border-black bg-white/70 hover:bg-white px-7 py-4 text-xs font-button font-bold uppercase tracking-wider text-black transition-all shadow-sm"
            >
              EXPLORE BOOKS
            </button>
          </div>

          {/* Color Buttons */}
          <div className="pt-8 flex items-center gap-3.5">
            <span className="text-[10px] font-button font-bold text-gray-500 uppercase tracking-widest mr-1">
              SWATCHES:
            </span>
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                title={slide.subtitle}
                aria-label={`Select swatch ${slide.subtitle}`}
                className={`h-7 w-7 rounded-full border-2 transition-all duration-300 ${active === index
                    ? 'scale-125 border-black ring-2 ring-offset-2 ring-offset-[#EDE8E3] ring-[#C67C4E] shadow-md'
                    : 'border-white/80 opacity-80 hover:opacity-100 hover:scale-110'
                  }`}
                style={{
                  background: slide.color,
                }}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};


