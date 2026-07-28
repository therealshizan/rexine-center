import React, { useState } from 'react';
import { Search, Filter, Sparkles, ArrowRight, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, CATEGORIES, REXINE_COLLECTIONS } from '../data/mockData';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface CollectionsPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product?: Product | null) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedThickness, setSelectedThickness] = useState<string>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesThickness =
      selectedThickness === 'all' ||
      product.specs.thickness.includes(selectedThickness);

    return matchesCategory && matchesSearch && matchesThickness;
  });

  return (
    <div className="bg-[#F8F6F2] min-h-screen pt-8 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E] block mb-2">
            Explore All Swatches & Rolls
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] mb-4">
            Our Premium Rexine Collections
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            Discover our complete range of high-performance synthetic hides, leatherettes, and PVC sheets crafted for furniture, automotive interiors, and commercial space design.
          </p>
        </div>

        {/* Featured Category Quick Badges */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Collections
          </button>
          <button
            onClick={() => setSelectedCategory('Textured')}
            className={`px-5 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'Textured'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Textured Grain
          </button>
          <button
            onClick={() => setSelectedCategory('Smooth')}
            className={`px-5 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'Smooth'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Smooth Nappa
          </button>
          <button
            onClick={() => setSelectedCategory('Stitched')}
            className={`px-5 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'Stitched'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Quilted & Stitched
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, grain code, or spec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs font-button font-bold text-gray-700">
              <Filter className="w-4 h-4 text-[#C67C4E]" />
              <span>Thickness:</span>
              <select
                value={selectedThickness}
                onChange={(e) => setSelectedThickness(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
              >
                <option value="all">All Thicknesses</option>
                <option value="1.0">1.0 mm</option>
                <option value="1.2">1.2 mm</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onSelectProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md text-white text-[10px] font-button font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {product.code}
                  </span>
                  <span className="absolute top-3 right-3 bg-[#C67C4E] text-white text-[10px] font-button font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {product.specs.thickness}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-wider">
                      {product.category} Series
                    </span>
                    <span className="text-xs font-bold text-gray-900">
                      ₹{product.rrp} / {product.unit}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif font-bold text-lg text-gray-900 hover:text-[#C67C4E] transition-colors cursor-pointer mb-2 line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <p className="font-sans text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Available Colors */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-wider mr-1">
                      Swatches:
                    </span>
                    {product.colors.map((c, idx) => (
                      <span
                        key={idx}
                        title={c.name}
                        className="w-4 h-4 rounded-full border border-black/20 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="text-xs font-button font-bold uppercase tracking-wider text-gray-800 hover:text-[#C67C4E] transition-colors flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(product)}
                  className="bg-[#111111] hover:bg-[#C67C4E] text-white px-3.5 py-2 rounded-lg font-button text-[11px] font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Request Sample
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Banner Showcase */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E]">
              Bespoke Manufacturing & Custom Swatch Books
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Need Custom Thickness, Color Matching or Embossing?
            </h2>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              We engineer custom synthetic hides tailored to your precise industrial standards. From flame retardance (FR) to antimicrobial medical grade coatings.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry(null)}
                className="bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-8 py-3.5 rounded-full font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-lg"
              >
                <span>Talk to Technical Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
