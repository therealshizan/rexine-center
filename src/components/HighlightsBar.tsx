import React from 'react';
import { Award, Grid, ShieldCheck, MessageSquare, Crown, Headphones } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Crown,
    title: 'PREMIUM QUALITY',
    desc: 'World-class materials',
  },
  {
    icon: Grid,
    title: 'HUGE COLLECTION',
    desc: '1000+ Designs',
  },
  {
    icon: ShieldCheck,
    title: 'TRUSTED BY EXPERTS',
    desc: 'Industry preferred',
  },
  {
    icon: MessageSquare,
    title: 'EASY ENQUIRY',
    desc: 'WhatsApp in one click',
  },
];

export const HighlightsBar: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white border-b border-gray-800 py-5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#C67C4E]/20 text-[#C67C4E] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-button text-xs font-bold uppercase tracking-wider text-white mb-0.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-400 leading-snug">
                    {item.desc}
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
