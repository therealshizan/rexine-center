import React from 'react';
import { Play, ArrowRight, Award, Layers, Users, Truck } from 'lucide-react';
import { aboutInteriorDining, leatherSwatchesStacked } from '../data/mockData';

interface AboutSectionProps {
  onOpenVideo: () => void;
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenVideo, onOpenEnquiry }) => {
  return (
    <section id="about" className="py-20 bg-white border-y border-black/8 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Video Thumbnail */}
          <div className="lg:col-span-4 relative group">
            <div
              onClick={onOpenVideo}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/10 cursor-pointer group/v"
              data-cursor="Play Video"
            >
              <img
                src={aboutInteriorDining}
                alt="Rexine Centre Showcase Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/v:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover/v:bg-black/40 transition-colors" />

              {/* White Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 group-hover/v:bg-[#C67C4E] rounded-full flex items-center justify-center text-[#111111] group-hover/v:text-white shadow-2xl transition-all duration-300 transform group-hover/v:scale-110">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Story & Stats */}
          <div className="lg:col-span-5 flex flex-col items-start px-0 lg:px-4">
            <span className="text-xs font-button font-bold uppercase tracking-[0.2em] text-[#C67C4E] mb-2">
              ABOUT REXINE CENTRE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight mb-4">
              Crafted for Quality.<br />
              <span className="italic text-[#C67C4E]">Chosen for Trust.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-8">
              With decades of expertise, Rexine Centre is a leading wholesaler of high-quality rexine, leatherette, upholstery fabrics and furnishing materials. Our premium collections are curated to inspire designers, manufacturers and creators across India.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8 pt-6 border-t border-black/8">
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#111111]">25+</div>
                <div className="font-sans text-[11px] text-gray-500 font-medium">Years of Experience</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#111111]">1000+</div>
                <div className="font-sans text-[11px] text-gray-500 font-medium">Unique Designs</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#111111]">5000+</div>
                <div className="font-sans text-[11px] text-gray-500 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="font-serif text-xl md:text-2xl font-bold text-[#111111]">Pan India</div>
                <div className="font-sans text-[11px] text-gray-500 font-medium">Delivery Network</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-3 bg-white hover:bg-[#111111] text-[#111111] hover:text-white border border-black/20 px-6 py-3 rounded-full font-button text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group"
              data-cursor="Learn More"
            >
              <span>KNOW MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4 text-[#C67C4E] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Right Column: Texture Swatches Image */}
          <div className="lg:col-span-3 relative">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-black/10 group">
              <img
                src={leatherSwatchesStacked}
                alt="Layered Rexine & Leather Swatches"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic text-xs text-gray-200">Embossed Geometric Grain</p>
                <p className="font-button text-xs font-bold uppercase tracking-widest text-[#E3A378]">Signature Hides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
