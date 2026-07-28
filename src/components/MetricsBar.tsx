import React from 'react';
import { Award, Users, Layers, MapPin, Clock } from 'lucide-react';

const METRICS = [
  { icon: Award, stat: '25+', label: 'Years of Experience' },
  { icon: Users, stat: '1000+', label: 'Happy Clients' },
  { icon: Layers, stat: '500+', label: 'Material Options' },
  { icon: MapPin, stat: '28+', label: 'States Delivery' },
  { icon: Clock, stat: '99%', label: 'On-time Delivery' },
];

export const MetricsBar: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C67C4E] shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-white block leading-tight">
                    {item.stat}
                  </span>
                  <span className="font-sans text-[11px] text-gray-400 font-medium uppercase tracking-wider block">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
