import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { APPLICATIONS } from "../data/mockData";

interface ApplicationsSectionProps {
  onSelectApplication: (appTitle: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  onSelectApplication,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 6;
  const totalCards = APPLICATIONS.length;
  const maxIndex = Math.max(0, totalCards - visibleCards);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="applications"
      className="bg-white py-14 border-b border-gray-200/80"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-1">
              APPLICATIONS
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              Designed for Every Industry
            </h2>
          </div>

          {totalCards > visibleCards && (
            <div className="hidden lg:flex gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40 hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={next}
                disabled={currentIndex === maxIndex}
                className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40 hover:bg-gray-100"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / 6)))`,
            }}
          >
            {APPLICATIONS.map((app) => (
              <div
                key={app.id}
                className="relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-black/10 group shrink-0"
                style={{
                  width: "calc((100% - 5 * 1rem) / 6)",
                }}
                onClick={() => onSelectApplication(app.title)}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-3 left-3 z-10">
                  <span className="font-button text-xs font-bold text-white uppercase tracking-wider">
                    {app.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet */}
        <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              onClick={() => onSelectApplication(app.title)}
              className="snap-start shrink-0 w-[80%] sm:w-[45%] md:w-[30%] relative h-48 rounded-2xl overflow-hidden shadow-md border border-black/10 group"
            >
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-3">
                <span className="font-button text-xs font-bold text-white uppercase tracking-wider">
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