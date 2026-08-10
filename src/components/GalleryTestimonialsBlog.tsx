import React, { useState } from 'react';
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, TESTIMONIAL_FEATURED } from '../data/mockData';
import aboutInteriorDining from '../assets/images/about_interior_dining_1785154208545.jpg';
import leatherSwatchesStacked from '../assets/images/leather_swatches_stacked_1785154222031.jpg';
import chairLoungeContact from '../assets/images/chair_lounge_contact_1785154236762.jpg';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import heroLeatherFolds from '../assets/images/hero_leather_folds_1785161428952.jpg';
import officeUse from '../assets/images/office-use.png';
import { Link } from 'react-router-dom';

export const GalleryTestimonialsBlog: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const GALLERY_IMAGES = [
    chairLoungeContact,
    aboutInteriorDining,
    heroLeatherRolls,
    heroLeatherFolds,
    leatherSwatchesStacked,
    officeUse
  ];

  return (
    <section className="bg-white py-14 border-b border-gray-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: PROJECT GALLERY (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-0.5">
                    PROJECT GALLERY
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#111111]">
                    Real Spaces. Real Impact.
                  </h3>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {GALLERY_IMAGES.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-black/8 group">
                    <img
                      src={img}
                      alt="Project Showcase"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = leatherSwatchesStacked;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          <Link to="/applications" className="font-button text-xs font-bold text-gray-700 hover:text-[#C67C4E] uppercase tracking-wider flex items-center gap-1.5 transition-colors">
              
              <span>View full gallery</span>
              <ArrowRight className="w-4 h-4" />
          </Link>
          </div>

          {/* Column 2: CLIENT TESTIMONIALS (4 cols) */}
          <div className="lg:col-span-4 bg-[#F8F6F2] p-6 rounded-2xl border border-black/8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-4">
                CLIENT TESTIMONIALS
              </span>

              <Quote className="w-8 h-8 text-[#C67C4E] opacity-50 mb-3" />

              <p className="font-sans text-xs sm:text-sm text-gray-800 italic leading-relaxed mb-6">
                "{TESTIMONIAL_FEATURED.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIAL_FEATURED.avatar}
                  alt={TESTIMONIAL_FEATURED.author}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#111111]">
                    {TESTIMONIAL_FEATURED.author}
                  </h4>
                  <p className="font-sans text-[10px] text-gray-500">
                    {TESTIMONIAL_FEATURED.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button aria-label="Previous Testimonial" className="w-7 h-7 rounded-full bg-white text-gray-700 hover:bg-[#111111] hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button aria-label="Next Testimonial" className="w-7 h-7 rounded-full bg-white text-gray-700 hover:bg-[#111111] hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: FROM OUR BLOG (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-widest block mb-4">
                FROM OUR BLOG
              </span>

              <div className="space-y-3 mb-4">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F8F6F2] transition-colors cursor-pointer group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0 border border-black/8"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-sans text-xs font-semibold text-gray-900 group-hover:text-[#C67C4E] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="font-sans text-[10px] text-gray-400 mt-1 block">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          <Link to="/resources" className="font-button text-xs font-bold text-gray-700 hover:text-[#C67C4E] uppercase tracking-wider flex items-center gap-1.5 transition-colors">
              
              <span>Explore all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
