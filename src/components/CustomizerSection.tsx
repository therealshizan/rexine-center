import React, { useState } from 'react';
import { ArrowRight, Rotate3d, Droplets, Sun, ShieldCheck, Armchair } from 'lucide-react';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';

interface CustomizerSectionProps {
  onOpenEnquiry: () => void;
}

const COLOR_DOTS = [
  { name: 'Amber Tan', hex: '#C67C4E' },
  { name: 'Espresso Black', hex: '#111111' },
  { name: 'Saddle Brown', hex: '#6A3816' },
  { name: 'Cream Sand', hex: '#D6C5B3' },
  { name: 'Navy Blue', hex: '#1C2836' },
];

export const CustomizerSection: React.FC<CustomizerSectionProps> = ({ onOpenEnquiry }) => {
  const [texture, setTexture] = useState('Pebble Grain');
  const [finish, setFinish] = useState('Matte');
  const [thickness, setThickness] = useState('1.0mm');
  const [backType, setBackType] = useState('Woven');
  const [activeColor, setActiveColor] = useState(COLOR_DOTS[0]);

  return (
    <section className="bg-[#F8F6F2] py-14 border-b border-gray-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block">
              CUSTOMIZE. PREVIEW. PERFECT.
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
              Customize. <br />
              Preview. Perfect.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
              See how different options come together to match your needs. Choose textures, colors, and backing parameters in real time.
            </p>

            <button
              onClick={onOpenEnquiry}
              className="bg-[#111111] hover:bg-[#C67C4E] text-white px-6 py-3 rounded-md font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md group mt-2"
            >
              <span>Request Sample</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Middle 3D Interactive Swatch Card (4 cols) */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-black/10 shadow-2xl p-2 flex items-center justify-center">
              <img
                src={heroLeatherRolls}
                alt="Customizer Leather Preview"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* 3D Drag Badge */}
              <div className="absolute bottom-6 bg-black/75 backdrop-blur-md text-white px-4 py-2 rounded-full font-button text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                <Rotate3d className="w-3.5 h-3.5 text-[#C67C4E] animate-spin" />
                <span>Drag to rotate</span>
              </div>
            </div>
          </div>

          {/* Right Configurator Controls Column (4 cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-black/8 shadow-sm space-y-4">
            
            {/* Control Rows */}
            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Texture</span>
                <select
                  value={texture}
                  onChange={(e) => setTexture(e.target.value)}
                  className="font-button text-xs font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded px-2.5 py-1 focus:outline-none"
                >
                  <option value="Pebble Grain">Pebble Grain ⌵</option>
                  <option value="Nappa Finish">Nappa Finish ⌵</option>
                  <option value="Litchi Grain">Litchi Grain ⌵</option>
                </select>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Finish</span>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="font-button text-xs font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded px-2.5 py-1 focus:outline-none"
                >
                  <option value="Matte">Matte VB</option>
                  <option value="Satin">Satin ⌵</option>
                  <option value="Gloss">Gloss ⌵</option>
                </select>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Thickness</span>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  className="font-button text-xs font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded px-2.5 py-1 focus:outline-none"
                >
                  <option value="1.0mm">1.0mm ⌵</option>
                  <option value="1.2mm">1.2mm ⌵</option>
                  <option value="1.5mm">1.5mm ⌵</option>
                </select>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Back Type</span>
                <select
                  value={backType}
                  onChange={(e) => setBackType(e.target.value)}
                  className="font-button text-xs font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded px-2.5 py-1 focus:outline-none"
                >
                  <option value="Woven">Woven ⌵</option>
                  <option value="Microfiber">Microfiber ⌵</option>
                  <option value="Knitted">Knitted ⌵</option>
                </select>
              </div>

              {/* Color Dot row */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-gray-500 font-medium">Color</span>
                <div className="flex items-center gap-1.5">
                  {COLOR_DOTS.map((col, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveColor(col)}
                      className={`w-4 h-4 rounded-full border ${
                        activeColor.name === col.name ? 'ring-2 ring-offset-1 ring-[#C67C4E]' : ''
                      }`}
                      style={{ backgroundColor: col.hex }}
                    />
                  ))}
                  <span className="text-[10px] text-gray-400 font-bold ml-1">+6</span>
                </div>
              </div>
            </div>

            {/* Feature Status Badges */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-[11px] font-sans">
              <div className="flex items-center gap-2 text-gray-700">
                <Droplets className="w-4 h-4 text-[#C67C4E]" />
                <span>Water Resistant: <strong className="text-gray-900">Yes</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Sun className="w-4 h-4 text-[#C67C4E]" />
                <span>UV Resistant: <strong className="text-gray-900">Yes</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck className="w-4 h-4 text-[#C67C4E]" />
                <span>Abrasion Resistant: <strong className="text-gray-900">High</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 col-span-2">
                <Armchair className="w-4 h-4 text-[#C67C4E] shrink-0" />
                <span>Suitable For: <strong className="text-gray-900">Furniture, Auto, Office</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
