import React from 'react';
import { ArrowRight } from 'lucide-react';
import { APPLICATIONS } from '../data/mockData';

interface ApplicationsSectionProps {
  onSelectApplication: (appTitle: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  onSelectApplication,
}) => {
  return (
    <section id="applications" className="bg-white py-14 border-b border-gray-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-1">
              APPLICATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              Designed for Every Industry
            </h2>
          </div>

          <a
            href="#applications"
            className="font-button text-xs font-bold text-gray-700 hover:text-[#C67C4E] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <span>View all applications</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Application Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              onClick={() => onSelectApplication(app.title)}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-black/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-end p-3"
            >
              {/* Background Image */}
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Title Tag */}
              <div className="relative z-10">
                <span className="font-button text-xs font-bold text-white uppercase tracking-wider block">
                  {app.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
