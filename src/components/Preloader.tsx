import React, { useEffect, useState } from 'react';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import { RexineLogo } from './RexineLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'texture' | 'exit' | 'done'>('intro');

  useEffect(() => {
    // Stage 1: Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 40 && phase === 'intro') {
      setPhase('texture');
    }
    if (progress >= 100 && phase !== 'exit' && phase !== 'done') {
      setPhase('exit');
      setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 900);
    }
  }, [progress, phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white text-[#111111] transition-all duration-1000 overflow-hidden ${
        phase === 'exit' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle Background Leather Roll Texture Fade */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-[0.07] ${
          phase === 'texture' || phase === 'exit' ? 'scale-105' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${heroLeatherRolls})` }}
      />

      {/* Subtle Warm Grid / Dot Pattern on White */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#C67C4E_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none" />

      {/* Soft Center Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#C67C4E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Brand Logo Mark */}
        <div className="mb-8 relative flex items-center justify-center transition-transform duration-500 hover:scale-105">
          <RexineLogo variant="dark" className="h-16 sm:h-20 md:h-24" />
        </div>

        {/* Tagline */}
        <p className="text-xs md:text-sm font-button font-bold uppercase tracking-[0.35em] text-[#C67C4E] mb-12">
          Crafted for Quality. Chosen for Trust.
        </p>

        {/* Counter & Progress Bar */}
        <div className="w-64 md:w-80 flex flex-col items-center">
          <div className="w-full flex justify-between items-end text-xs font-number text-gray-500 mb-2.5">
            <span className="uppercase tracking-widest text-[10px] font-semibold text-gray-600">Material Roll Loading</span>
            <span className="text-base font-extrabold text-[#C67C4E] font-mono">{Math.min(progress, 100)}%</span>
          </div>

          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden relative shadow-inner border border-gray-200/60">
            <div
              className="h-full bg-gradient-to-r from-[#C67C4E] via-[#E3A378] to-[#C67C4E] transition-all duration-150 ease-out rounded-full shadow-sm"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="absolute bottom-6 text-[10px] uppercase font-number tracking-widest text-gray-400 font-medium">
        Wholesale Product Catalogue • Surat, Gujarat
      </div>
    </div>
  );
};
