import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Search, Filter, Sparkles, ArrowRight, ShieldCheck, Layers, CheckCircle2, BookOpen, ChevronRight, Award, Flame, Zap, QrCode } from 'lucide-react';
import { PRODUCTS, CATEGORIES, FEATURED_COLLECTIONS } from '../data/mockData';
import { SAMPLE_BOOKS_DATA, ALL_BOOK_DESIGNS } from '../data/booksData';
import { Product, FeaturedCollection, CategoryItem } from '../types';

interface CollectionsPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product?: Product | null) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const { collectionId: pathCollectionId } = useParams<{ collectionId?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Combine products and book designs
  const combinedCatalog: Product[] = [...PRODUCTS, ...ALL_BOOK_DESIGNS];

  // Get current active collection/category filter
  const queryCategory = searchParams.get('category') || searchParams.get('collection');
  const activeId = pathCollectionId || queryCategory || 'all';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedThickness, setSelectedThickness] = useState<string>('all');

  // Find if activeId matches a Featured Collection or a CategoryItem
  const activeFeaturedCollection = FEATURED_COLLECTIONS.find(
    (c) => c.id.toLowerCase() === activeId.toLowerCase()
  );

  const activeCategoryItem = CATEGORIES.find(
    (c) => c.id.toLowerCase() === activeId.toLowerCase() || c.title.toLowerCase() === activeId.toLowerCase()
  );

  // Filter sample books for active collection/category
  const activeSampleBooks = SAMPLE_BOOKS_DATA.filter((book) => {
    if (activeId === 'all') return true;
    const lowerActive = activeId.toLowerCase();
    return (
      book.collectionId.toLowerCase() === lowerActive ||
      book.collectionName.toLowerCase().includes(lowerActive) ||
      book.category.toLowerCase().includes(lowerActive)
    );
  });
  // Fallback to all if specific filter has no custom book mapped
  const displayedBooks = activeSampleBooks.length > 0 ? activeSampleBooks : SAMPLE_BOOKS_DATA;
  const filteredProducts = combinedCatalog.filter((product) => {
    // Check if matching active collection or category
    let matchesCategoryOrCollection = true;

    if (activeId !== 'all') {
      const lowerActive = activeId.toLowerCase();
      const matchesColId = product.collectionId?.toLowerCase() === lowerActive;
      const matchesColName = product.collectionName?.toLowerCase().includes(lowerActive);
      const matchesCategory = product.category.toLowerCase().includes(lowerActive) || lowerActive.includes(product.category.toLowerCase());
      const matchesSubCategory = product.subCategory?.toLowerCase().includes(lowerActive);

      matchesCategoryOrCollection = !!(matchesColId || matchesColName || matchesCategory || matchesSubCategory);
    }

    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shadeName?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesThickness =
      selectedThickness === 'all' ||
      product.specs.thickness?.includes(selectedThickness);

    return matchesCategoryOrCollection && matchesSearch && matchesThickness;
  });

  const handleSelectTab = (id: string) => {
    if (id === 'all') {
      navigate('/collections');
    } else {
      setSearchParams({ category: id });
    }
  };

  return (
    <div className="bg-[#F8F6F2] min-h-screen pt-6 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-button uppercase tracking-wider text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#C67C4E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => handleSelectTab('all')} className="hover:text-[#C67C4E] transition-colors">Collections</button>
          {activeFeaturedCollection && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#C67C4E] font-bold">{activeFeaturedCollection.title} Collection</span>
            </>
          )}
          {!activeFeaturedCollection && activeCategoryItem && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#C67C4E] font-bold">{activeCategoryItem.title}</span>
            </>
          )}
        </div>

        {/* 1. DEDICATED FEATURED COLLECTION / CATEGORY HERO BANNER */}
        {activeFeaturedCollection ? (
          <div className="relative rounded-3xl overflow-hidden mb-12 bg-[#111111] text-white shadow-2xl border border-white/10">
            <img
              src={activeFeaturedCollection.image}
              alt={activeFeaturedCollection.title}
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#C67C4E]/20 backdrop-blur-md border border-[#C67C4E]/40 px-3.5 py-1.5 rounded-full text-[#C67C4E] text-[11px] font-button font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Collection</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
                {activeFeaturedCollection.title} <span className="text-[#C67C4E]">COLLECTION</span>
              </h1>

              <p className="font-button text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-200/90">
                {activeFeaturedCollection.tagline}
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {activeFeaturedCollection.description}
              </p>

              {/* Spec Highlights Pills */}
              <div className="flex items-center gap-3 flex-wrap pt-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-button font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#C67C4E]" />
                  <span>{activeFeaturedCollection.designs}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-button font-bold uppercase">
                  <Flame className="w-4 h-4 text-[#C67C4E]" />
                  <span>100k Abrasion cycles</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-button font-bold uppercase">
                  <Award className="w-4 h-4 text-[#C67C4E]" />
                  <span>ISO & FR Certified</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 flex-wrap">
                <button
                  onClick={() => onOpenEnquiry(null)}
                  className="bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-7 py-3.5 rounded-full font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Request Swatch Sample Book</span>
                </button>
                <button
                  onClick={() => handleSelectTab('all')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-button text-xs font-bold uppercase tracking-wider transition-all"
                >
                  View All Collections
                </button>
              </div>
            </div>
          </div>
        ) : activeCategoryItem ? (
          <div className="relative rounded-3xl overflow-hidden mb-12 bg-[#111111] text-white shadow-2xl border border-white/10">
            <img
              src={activeCategoryItem.image}
              alt={activeCategoryItem.title}
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#C67C4E]/20 backdrop-blur-md border border-[#C67C4E]/40 px-3.5 py-1.5 rounded-full text-[#C67C4E] text-[11px] font-button font-bold uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5" />
                <span>Product Category Page</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
                {activeCategoryItem.title}
              </h1>

              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {activeCategoryItem.description}. Premium quality materials available in ready stock with nationwide fast delivery across India.
              </p>

              <div className="flex items-center gap-3 flex-wrap pt-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-button font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#C67C4E]" />
                  <span>{activeCategoryItem.count}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-button font-bold uppercase">
                  <Zap className="w-4 h-4 text-[#C67C4E]" />
                  <span>Ready Stock Dispatch</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(null)}
                  className="bg-[#C67C4E] hover:bg-[#b06a3d] text-white px-7 py-3 rounded-full font-button text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
                >
                  <span>Request Wholesale Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
            <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E] block">
              Explore All Swatches, Rolls & Collections
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111]">
              Our Rexine & Upholstery Collections
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
              Select any featured collection or product category below to view its complete series of synthetic hides, textured swatches, and technical specifications.
            </p>
          </div>
        )}

        {/* 2. COLLECTION & CATEGORY SWITCHER TABS */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              FEATURED COLLECTIONS:
            </h3>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleSelectTab('all')}
              className={`px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeId === 'all'
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Swatches & Rolls
            </button>

            {FEATURED_COLLECTIONS.map((col) => {
              const isSelected = activeId.toLowerCase() === col.id.toLowerCase();
              return (
                <button
                  key={col.id}
                  onClick={() => handleSelectTab(col.id)}
                  className={`px-5 py-2.5 rounded-xl font-button text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#C67C4E] text-white shadow-md border border-[#C67C4E]'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isSelected ? '#ffffff' : col.accentColor || '#C67C4E' }} />
                  <span>{col.title} Collection</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Categories Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-2 scrollbar-none border-t border-gray-200/80">
            <span className="text-[11px] font-button font-bold text-gray-400 uppercase tracking-wider mr-2 shrink-0">
              Browse Categories:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = activeId.toLowerCase() === cat.id.toLowerCase();
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-button text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#111111] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. SEARCH & FILTER CONTROLS */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm mb-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search in ${activeFeaturedCollection ? activeFeaturedCollection.title : activeCategoryItem ? activeCategoryItem.title : 'All Collections'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2 text-xs font-button font-bold text-gray-700">
              <Filter className="w-4 h-4 text-[#C67C4E]" />
              <span>Thickness Filter:</span>
              <select
                value={selectedThickness}
                onChange={(e) => setSelectedThickness(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#C67C4E]"
              >
                <option value="all">All Thicknesses</option>
                <option value="1.0">1.0 mm</option>
                <option value="1.2">1.2 mm</option>
                <option value="1.3">1.3 mm</option>
                <option value="1.4">1.4 mm</option>
              </select>
            </div>

            <span className="text-xs font-button font-bold text-gray-500 uppercase tracking-wider">
              {filteredProducts.length} Swatches Found
            </span>
          </div>
        </div>

        {/* 4. PRODUCTS LIST FOR SELECTED CATEGORY / COLLECTION */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div
                    className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md text-white text-[10px] font-button font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {product.code}
                    </span>
                    <span className="absolute top-3 right-3 bg-[#C67C4E] text-white text-[10px] font-button font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {product.specs.thickness}
                    </span>

                    {product.collectionName && (
                      <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-amber-200 text-[9px] font-button font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-amber-300/30">
                        {product.collectionName}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-button font-bold text-[#C67C4E] uppercase tracking-wider">
                        {product.category} Series
                      </span>
                      <span className="text-xs font-bold text-gray-900">
                        ₹{product.rrp} / {product.unit}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif font-bold text-lg text-gray-900 hover:text-[#C67C4E] transition-colors cursor-pointer leading-snug line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="font-sans text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs Summary Row */}
                    <div className="grid grid-cols-2 gap-1.5 bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-[10px] font-sans text-gray-600">
                      <div><span className="font-bold text-gray-900">GSM:</span> {product.specs.gsm}</div>
                      <div><span className="font-bold text-gray-900">Width:</span> {product.specs.width}</div>
                      <div><span className="font-bold text-gray-900">Backing:</span> {product.specs.backing}</div>
                      <div><span className="font-bold text-gray-900">Roll:</span> {product.specs.rollLength}</div>
                    </div>

                    {/* Available Color Swatches */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-button font-bold text-gray-400 uppercase tracking-wider mr-1">
                        Swatches:
                      </span>
                      {product.colors.map((c, idx) => (
                        <span
                          key={idx}
                          title={c.name}
                          className="w-4 h-4 rounded-full border border-black/20 shadow-xs transition-transform hover:scale-125"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto pt-4">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-button font-bold uppercase tracking-wider text-gray-800 hover:text-[#C67C4E] transition-colors flex items-center gap-1"
                  >
                    <span>View Specs</span>
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
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm mb-16 max-w-xl mx-auto space-y-4">
            <Search className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-gray-900">No matching swatches found</h3>
            <p className="font-sans text-xs text-gray-500">
              Try adjusting your search criteria, or browse all collections to discover our complete catalog.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedThickness('all');
                handleSelectTab('all');
              }}
              className="bg-[#111111] text-white px-6 py-2.5 rounded-full font-button text-xs font-bold uppercase tracking-wider hover:bg-[#C67C4E] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 5. ALL FEATURED COLLECTIONS GRID SHOWCASE (WHEN 'ALL' IS SELECTED) */}
        {activeId === 'all' && (
          <div className="mt-16 mb-16 space-y-8 border-t border-gray-200 pt-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E]">
                BROWSE BY FEATURED COLLECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mt-1">
                Explore Our Signature Series
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {FEATURED_COLLECTIONS.map((col) => (
                <div
                  key={col.id}
                  onClick={() => handleSelectTab(col.id)}
                  className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all border border-white/20 bg-[#111111] flex flex-col justify-between p-6"
                >
                  <img
                    src={col.image}
                    alt={col.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

                  <div className="relative z-10 pt-2">
                    <h3 className="font-serif text-xl font-black uppercase tracking-wider text-white group-hover:text-[#C67C4E] transition-colors">
                      {col.title}
                    </h3>
                    <span className="font-button text-[10px] font-bold uppercase tracking-widest text-gray-300 block mt-0.5">
                      {col.subtitle}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3">
                    <p className="font-sans text-[11px] text-gray-300 line-clamp-2 leading-relaxed">
                      {col.tagline}
                    </p>
                    <span className="font-button text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1 group-hover:bg-[#C67C4E] transition-colors">
                      <span>View Category Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. BESPOKE MANUFACTURING & BULK QUOTE BANNER */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="font-button text-xs font-bold uppercase tracking-[0.2em] text-[#C67C4E]">
              Bespoke Manufacturing & Bulk Swatch Books
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Require Special Shades or Technical Specifications?
            </h2>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              We engineer custom synthetic hides tailored to your exact industrial standard, including flame retardant (FR) BS5852, REACH compliance, UV stabilization, and custom embossing.
            </p>
            <div className="pt-2 flex items-center gap-4 flex-wrap">
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
