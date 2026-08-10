import rexineCognacNappa from '../assets/images/rexine_cognac_nappa_1785227277160.jpg';
import rexineBurgundyWine from '../assets/images/rexine_burgundy_wine_1785227406807.jpg';
import rexineSlateCharcoal from '../assets/images/rexine_slate_charcoal_1785227428841.jpg';
import rexineEmeraldGreen from '../assets/images/rexine_emerald_green_1785227447891.jpg';
import rexineMidnightNavy from '../assets/images/rexine_midnight_navy_1785227463408.jpg';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import leatherSwatchesStacked from '../assets/images/leather_swatches_stacked_1785154222031.jpg';
import aboutInteriorDining from '../assets/images/about_interior_dining_1785154208545.jpg';
import chairLoungeContact from '../assets/images/chair_lounge_contact_1785154236762.jpg';
import heroLeatherFolds from '../assets/images/hero_leather_folds_1785161428952.jpg';

export interface BookProduct {
  code: string;
  name: string;
  shadeName?: string;
  category?: string;
  rrp: number; // Retail RRP price in INR per meter
  unit: string;
  description: string;
  image: string;
  fallbackImage?: string;
  gallery?: string[];
  colors?: { name: string; hex: string }[];
  specs: {
    thickness?: string;
    width?: string;
    backing?: string;
    finish?: string;
    gsm?: string;
    rollLength?: string;
    abrasion?: string;
  };
  inStock?: boolean;
}

export interface Book {
  slug: string;
  title: string;
  code: string;
  category: string;
  year?: string;
  description: string;
  coverImage: string;
  fallbackCover?: string;
  pdfPath: string;
  designCount: number;
  specs?: {
    thickness?: string;
    width?: string;
    backing?: string;
    finish?: string;
    targetUse?: string;
  };
  products: BookProduct[];
}

// Fallback images pool for graceful rendering when local webp isn't uploaded yet
const FALLBACK_IMAGES = [
  rexineBurgundyWine,
  rexineCognacNappa,
  rexineSlateCharcoal,
  rexineMidnightNavy,
  rexineEmeraldGreen,
  heroLeatherRolls,
  leatherSwatchesStacked,
  aboutInteriorDining,
  chairLoungeContact,
  heroLeatherFolds,
];

// Helper to generate products for a mock book
const generateMockProducts = (
  slug: string,
  bookCode: string,
  bookTitle: string,
  category: string,
  count: number,
  basePrice: number
): BookProduct[] => {
  const shades = [
    { name: 'Royal Crimson Wine', hex: '#581825' },
    { name: 'Amber Cognac', hex: '#A66E38' },
    { name: 'Midnight Charcoal', hex: '#1C2024' },
    { name: 'Deep Midnight Navy', hex: '#1E2A38' },
    { name: 'Emerald Forest Green', hex: '#1E4D3A' },
    { name: 'Pristine Pearl Ivory', hex: '#F0EAD6' },
    { name: 'Espresso Roast Brown', hex: '#4A2511' },
    { name: 'Slate Steel Grey', hex: '#383D42' },
    { name: 'Mustard Ochre Gold', hex: '#C29B38' },
    { name: 'Copper Bronze Shimmer', hex: '#B87333' },
    { name: 'Jet Black Matte', hex: '#000000' },
    { name: 'Sand Taupe Beige', hex: '#C2B280' },
    { name: 'Teal Peacock Marine', hex: '#008080' },
    { name: 'Rustic Terracotta', hex: '#A35422' },
    { name: 'Olive Army Green', hex: '#4B5320' },
    { name: 'Plum Violet Purple', hex: '#4A1521' },
    { name: 'Saddle Chestnut', hex: '#8C5638' },
    { name: 'Charcoal Perforated', hex: '#2B2B2B' },
    { name: 'Warm Almond Cream', hex: '#E3D7C5' },
    { name: 'Gunmetal Silver Gloss', hex: '#2A2E33' },
    { name: 'Mahogany Vintage', hex: '#421C0E' },
    { name: 'Ocean Cyan Marine', hex: '#1B4D5C' },
    { name: 'Rosewood Blush', hex: '#6D3A3B' },
    { name: 'Ash Fog Light Grey', hex: '#8C9298' },
    { name: 'Desert Camel Tan', hex: '#C67C4E' },
    { name: 'Champagne Shimmer', hex: '#D4B886' },
    { name: 'Forest Moss Green', hex: '#2E473B' },
    { name: 'Cobalt Sapphire', hex: '#102A45' },
  ];

  const prefix = bookCode.split('-')[0];
  const products: BookProduct[] = [];

  for (let i = 1; i <= count; i++) {
    const shade = shades[(i - 1) % shades.length];
    const code = `${prefix}-${100 + i}`;
    const fallback = FALLBACK_IMAGES[(i - 1) % FALLBACK_IMAGES.length];
    const imagePath = `/books/${slug}/products/${code}.webp`;
    const rrp = basePrice + i * 25;

    products.push({
      code,
      name: `${bookTitle} - ${shade.name}`,
      shadeName: shade.name,
      category,
      rrp,
      unit: 'Meter',
      description: `Premium swatch #${i} (${code}) from official catalogue '${bookTitle}'. Features ${shade.name} with reinforced backing and high abrasion resistance for contract and residential upholstery.`,
      image: imagePath,
      fallbackImage: fallback,
      gallery: [imagePath, fallback],
      colors: [
        { name: shade.name, hex: shade.hex },
        { name: 'Companion Neutral', hex: '#D6C5B3' },
        { name: 'Accent Dark', hex: '#111111' },
      ],
      specs: {
        thickness: '1.2 mm - 1.4 mm',
        width: '54 inches (137 cm)',
        backing: 'Woven Cotton Fleece Mesh',
        finish: 'Stain-Shield Protective Topcoat',
        gsm: `${580 + i * 5} GSM`,
        rollLength: '30 Meters Standard Roll',
        abrasion: '80,000+ Martindale Cycles',
      },
      inStock: true,
    });
  }

  return products;
};

// Specific generator for CINEFAB-651 swatches matching exact 35 serial numbers from PDF
const generateCinefabProducts = (): BookProduct[] => {
  const cinefabShades = [
    { sr: '01', name: 'Dusty Rose Pink', hex: '#D19E9A' },
    { sr: '02', name: 'Seafoam Teal', hex: '#519E92' },
    { sr: '03', name: 'Peach Blush', hex: '#E5A898' },
    { sr: '04', name: 'Pistachio Green', hex: '#A8D09A' },
    { sr: '05', name: 'Sand Cream', hex: '#E1D5B8' },
    { sr: '06', name: 'Ivory Beige', hex: '#E8DEC8' },
    { sr: '07', name: 'Oat Cream', hex: '#DFD3BC' },
    { sr: '08', name: 'Warm Greige', hex: '#C9C1AF' },
    { sr: '09', name: 'Pearl Off-White', hex: '#E2DFD3' },
    { sr: '10', name: 'Sage Olive', hex: '#A1A690' },
    { sr: '11', name: 'Light Ash', hex: '#9EA29C' },
    { sr: '12', name: 'Charcoal Slate', hex: '#6B706B' },
    { sr: '13', name: 'Mint Fog', hex: '#B2C2B8' },
    { sr: '14', name: 'Taupe Grey', hex: '#B2AEA3' },
    { sr: '15', name: 'Desert Camel', hex: '#C9AD85' },
    { sr: '16', name: 'Cognac Tan', hex: '#AC8356' },
    { sr: '17', name: 'Espresso Grey', hex: '#7A7568' },
    { sr: '18', name: 'Seafoam Light', hex: '#A4C6B8' },
    { sr: '19', name: 'Sky Blue', hex: '#ACCFCD' },
    { sr: '20', name: 'Ocean Cyan', hex: '#72B2BF' },
    { sr: '21', name: 'Deep Teal', hex: '#43757F' },
    { sr: '22', name: 'Steel Blue', hex: '#698B99' },
    { sr: '23', name: 'Midnight Navy', hex: '#263B51' },
    { sr: '24', name: 'Royal Blue', hex: '#21496E' },
    { sr: '25', name: 'Cyan Teal', hex: '#1E6C84' },
    { sr: '26', name: 'Emerald Green', hex: '#298565' },
    { sr: '27', name: 'Forest Green', hex: '#1E5E48' },
    { sr: '28', name: 'Dark Pine', hex: '#234938' },
    { sr: '29', name: 'Pearl White', hex: '#DCE0DA' },
    { sr: '30', name: 'Textured Ice Blue', hex: '#BDCCC9' },
    { sr: '31', name: 'Slate Grey', hex: '#738180' },
    { sr: '32', name: 'Gunmetal Grey', hex: '#687776' },
    { sr: '33', name: 'Dark Charcoal', hex: '#485656' },
    { sr: '34', name: 'Shadow Grey', hex: '#4D5957' },
    { sr: '35', name: 'Dusty Sage', hex: '#8BA393' },
  ];

  return cinefabShades.map((s, idx) => {
    const code = `651-${s.sr}`;
    const fallback = FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length];
    const imagePath = `/books/cinefab-651/products/${code}.png`;

    return {
      code,
      name: `CINEFAB 651 - SR.NO: ${s.sr} (${s.name})`,
      shadeName: `SR.NO: ${s.sr} - ${s.name}`,
      category: '100% Polyester Upholstery',
      rrp: 950 + idx * 15,
      unit: 'Meter',
      description: `Official Rexine Centre CINEFAB 651 swatch SR.NO: ${s.sr} (${s.name}). 100% Polyester, 140 CMS width, 380 GSM weight, and 50,000 Martindale Rubs. Premium durability for luxury sofas, chairs, and home upholstery.`,
      image: imagePath,
      fallbackImage: fallback,
      gallery: [imagePath],
      colors: [
        { name: s.name, hex: s.hex },
        { name: 'Base Weave', hex: '#EAEAEA' },
      ],
      specs: {
        thickness: '1.2 mm',
        width: '140 CMS (54 Inches)',
        backing: '100% Polyester Woven Backing',
        finish: '380 GSM Soft Touch Upholstery',
        gsm: '380 GSM',
        rollLength: '30-40 Meters Standard Roll',
        abrasion: '50,000 Martindale Rubs',
      },
      inStock: true,
    };
  });
};

export const MOCK_BOOKS: Book[] = [
  {
    slug: 'cinefab-651',
    title: 'CINEFAB-651 - 100% Polyester Upholstery',
    code: 'CINEFAB-651',
    category: '100% Polyester Upholstery',
    year: '2026 Master Edition',
    description: 'Official Rexine Centre CINEFAB-651 sample book featuring 35 premium 100% Polyester upholstery swatches (380 GSM, 50,000 Martindale Rubs, 140 CMS Width) for luxury sofas, chairs, and interior projects.',
    coverImage: '/books/cinefab-651/cover.png',
    fallbackCover: '/books/cinefab-651/cover.png',
    pdfPath: '/books/cinefab-651/catalogue.pdf',
    designCount: 35,
    specs: {
      thickness: '1.2 mm',
      width: '140 CMS (54 Inches)',
      backing: '100% Polyester Backing',
      finish: '380 GSM Soft Touch',
      targetUse: 'Sofas, Armchairs, Recliners, Cushions & Interior Upholstery',
    },
    products: generateCinefabProducts(),
  },
  {
    slug: 'ddecor-luxury-velvet',
    title: "D'Decor - Luxury Velvet Vol. 1",
    code: 'DD-BK-VOL1',
    category: 'Sofa Fabrics & Velvet',
    year: '2026 Master Edition',
    description: "Official D'Decor physical sample book containing 28 rich velvet swatches, spill-shield treated for luxury living room sofas, recliners, and accent chairs.",
    coverImage: '/books/ddecor-luxury-velvet/cover.webp',
    fallbackCover: rexineBurgundyWine,
    pdfPath: '/books/ddecor-luxury-velvet/catalogue.pdf',
    designCount: 28,
    specs: {
      thickness: '1.4 mm',
      width: '56 inches (142 cm)',
      backing: 'Latex Bonded Weave',
      finish: 'Stain Shield Velvet Topcoat',
      targetUse: 'Luxury Sofas, Recliners & Armchairs',
    },
    products: generateMockProducts(
      'ddecor-luxury-velvet',
      'DD-BK-VOL1',
      "D'Decor Luxury Velvet",
      'Sofa Fabrics & Velvet',
      28,
      1250
    ),
  },
  {
    slug: 'milano-silky-nappa',
    title: 'Milano - Silky Nappa Master Book',
    code: 'ML-BK-NAPPA26',
    category: 'Leatherette',
    year: '2026 Edition',
    description: 'Physical sample catalog with 30 silky Italian Nappa finish synthetic leather swatches for executive chairs, boutique hotel seating, and luxury lounge sofas.',
    coverImage: '/books/milano-silky-nappa/cover.webp',
    fallbackCover: rexineCognacNappa,
    pdfPath: '/books/milano-silky-nappa/catalogue.pdf',
    designCount: 30,
    specs: {
      thickness: '1.2 mm',
      width: '54 inches (137 cm)',
      backing: 'Woven Cotton Fleece',
      finish: 'Satin Soft Nappa Touch',
      targetUse: 'Executive Seating & Lounge Furniture',
    },
    products: generateMockProducts(
      'milano-silky-nappa',
      'ML-BK-NAPPA26',
      'Milano Silky Nappa',
      'Leatherette',
      30,
      1100
    ),
  },
  {
    slug: 'supreme-auto-leatherette',
    title: 'Supreme - Heavy Duty Auto Leatherette',
    code: 'SP-BK-AUTO',
    category: 'Automotive Upholstery',
    year: '2026 Edition',
    description: 'Physical sample binder containing 28 automotive-grade UV-shielded and micro-perforated leatherette swatches for cars, motorcycles, and marine yachts.',
    coverImage: '/books/supreme-auto-leatherette/cover.webp',
    fallbackCover: rexineMidnightNavy,
    pdfPath: '/books/supreme-auto-leatherette/catalogue.pdf',
    designCount: 28,
    specs: {
      thickness: '1.3 mm',
      width: '54 inches (137 cm)',
      backing: 'Heavy Mesh Tricot',
      finish: 'UV Shield Satin Finish',
      targetUse: 'Car Seat Covers & Bike Saddles',
    },
    products: generateMockProducts(
      'supreme-auto-leatherette',
      'SP-BK-AUTO',
      'Supreme Auto Leatherette',
      'Automotive Upholstery',
      28,
      1350
    ),
  },
  {
    slug: 'royal-heritage-sofa',
    title: 'Royal - Heritage Sofa Fabric Swatches',
    code: 'RY-BK-SOFA25',
    category: 'Upholstery Fabrics',
    year: '2026 Edition',
    description: 'Physical sample book with 26 jacquard woven and textured chenille fabrics designed for classic living room suites and decorative pillows.',
    coverImage: '/books/royal-heritage-sofa/cover.webp',
    fallbackCover: aboutInteriorDining,
    pdfPath: '/books/royal-heritage-sofa/catalogue.pdf',
    designCount: 26,
    specs: {
      thickness: '1.1 mm',
      width: '54 inches (137 cm)',
      backing: 'Woven Cotton Mesh',
      finish: 'Jacquard Textured Weave',
      targetUse: 'Classic Living Room Suites',
    },
    products: generateMockProducts(
      'royal-heritage-sofa',
      'RY-BK-SOFA25',
      'Royal Heritage Sofa',
      'Upholstery Fabrics',
      26,
      980
    ),
  },
  {
    slug: 'elite-pvc-sheets',
    title: 'Elite - Commercial Heavy Duty PVC Sheets',
    code: 'EL-BK-PVC26',
    category: 'PVC Sheets',
    year: '2026 Edition',
    description: 'Physical sample catalog with 25 commercial grade flexible PVC sheet swatches, anti-bacterial and easy disinfectant for clinics, restaurants, and public seating.',
    coverImage: '/books/elite-pvc-sheets/cover.webp',
    fallbackCover: leatherSwatchesStacked,
    pdfPath: '/books/elite-pvc-sheets/catalogue.pdf',
    designCount: 25,
    specs: {
      thickness: '1.0 mm',
      width: '54 inches (137 cm)',
      backing: 'Polyester Woven Mesh',
      finish: 'Bleach Cleanable Gloss',
      targetUse: 'Restaurant Booths, Clinics & Commercial',
    },
    products: generateMockProducts(
      'elite-pvc-sheets',
      'EL-BK-PVC26',
      'Elite Commercial PVC',
      'PVC Sheets',
      25,
      890
    ),
  },
  // {
  //   slug: 'signature-diamond-quilted',
  //   title: 'Signature - Diamond Quilted & Embossed',
  //   code: 'SG-BK-QUILT',
  //   category: 'Decorative Materials',
  //   year: '2026 Edition',
  //   description: 'Physical swatch book with 27 padded diamond stitched and metallic embossed synthetic hides for luxury headboards and decorative wall panels.',
  //   coverImage: '/books/signature-diamond-quilted/cover.webp',
  //   fallbackCover: rexineEmeraldGreen,
  //   pdfPath: '/books/signature-diamond-quilted/catalogue.pdf',
  //   designCount: 27,
  //   specs: {
  //     thickness: '1.4 mm',
  //     width: '54 inches (137 cm)',
  //     backing: '10mm Foam Padded Backing',
  //     finish: 'Stitched Diamond & Metallic Gloss',
  //     targetUse: 'Headboards, Wall Panels & Accents',
  //   },
  //   products: generateMockProducts(
  //     'signature-diamond-quilted',
  //     'SG-BK-QUILT',
  //     'Signature Diamond Quilted',
  //     'Decorative Materials',
  //     27,
  //     1480
  //   ),
  // },
];

// Utility: get book by slug or ID/code
export const getBookBySlug = (slugOrId: string): Book | undefined => {
  const query = slugOrId.toLowerCase().trim();
  return MOCK_BOOKS.find(
    (b) =>
      b.slug.toLowerCase() === query ||
      b.code.toLowerCase() === query ||
      b.slug.replace(/-/g, '').toLowerCase() === query.replace(/-/g, '')
  );
};

// Utility: get product inside book
export const getBookProduct = (
  slug: string,
  productCode: string
): { book: Book; product: BookProduct } | undefined => {
  const book = getBookBySlug(slug);
  if (!book) return undefined;

  const codeQuery = productCode.toLowerCase().trim();
  const product = book.products.find(
    (p) => p.code.toLowerCase() === codeQuery
  );

  if (!product) return undefined;
  return { book, product };
};

// Utility: get related products from same book
export const getRelatedProducts = (
  slug: string,
  currentProductCode: string,
  limit = 4
): BookProduct[] => {
  const book = getBookBySlug(slug);
  if (!book) return [];

  return book.products
    .filter((p) => p.code.toLowerCase() !== currentProductCode.toLowerCase())
    .slice(0, limit);
};
