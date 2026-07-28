import { SampleBook, Product, BrandCollection } from '../types';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import aboutInteriorDining from '../assets/images/about_interior_dining_1785154208545.jpg';
import leatherSwatchesStacked from '../assets/images/leather_swatches_stacked_1785154222031.jpg';
import chairLoungeContact from '../assets/images/chair_lounge_contact_1785154236762.jpg';
import heroLeatherFolds from '../assets/images/hero_leather_folds_1785161428952.jpg';
import rexineCognacNappa from '../assets/images/rexine_cognac_nappa_1785227277160.jpg';
import rexineBurgundyWine from '../assets/images/rexine_burgundy_wine_1785227406807.jpg';
import rexineSlateCharcoal from '../assets/images/rexine_slate_charcoal_1785227428841.jpg';
import rexineEmeraldGreen from '../assets/images/rexine_emerald_green_1785227447891.jpg';
import rexineMidnightNavy from '../assets/images/rexine_midnight_navy_1785227463408.jpg';

// Brand / Parent Collections
export const BRAND_COLLECTIONS: BrandCollection[] = [
  {
    id: 'ddecor',
    name: "D'Decor",
    tagline: 'Luxury Upholstery & Premium Textiles',
    description: "International standard luxury fabrics, crushed velvets, and soft touch furnishing leatherette sample books.",
    image: rexineBurgundyWine,
    accentColor: '#581825',
    totalBooks: 3,
  },
  {
    id: 'milano',
    name: 'Milano',
    tagline: 'Italian Silky Nappa Leatherette',
    description: 'Ultra-luxurious silky smooth synthetic hides engineered for executive seating, hotels, and luxury sofas.',
    image: rexineCognacNappa,
    accentColor: '#A66E38',
    totalBooks: 2,
  },
  {
    id: 'supreme',
    name: 'Supreme',
    tagline: 'Automotive & Heavy Duty UV Leatherette',
    description: 'UV-stabilized, flame-retardant, and high tear strength synthetic hides for vehicle seating & marine yachts.',
    image: rexineMidnightNavy,
    accentColor: '#1E2A38',
    totalBooks: 2,
  },
  {
    id: 'royal',
    name: 'Royal',
    tagline: 'Heritage Sofa Fabrics & Jacquard Weaves',
    description: 'Opulent woven upholstery, stain-resistant sofa velvets, and chenille fabrics.',
    image: aboutInteriorDining,
    accentColor: '#8C6239',
    totalBooks: 2,
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Commercial High Density PVC Sheets',
    description: 'Tough, bleach-cleanable flexible PVC sheets engineered for heavy footfall seating, restaurants, and clinics.',
    image: leatherSwatchesStacked,
    accentColor: '#111111',
    totalBooks: 2,
  },
  {
    id: 'signature',
    name: 'Signature',
    tagline: 'Embossed & Diamond Quilted Rexine',
    description: 'Bespoke diamond stitched padded hides, metallic shimmers, and decorative wall panel upholstery.',
    image: rexineEmeraldGreen,
    accentColor: '#1E4D3A',
    totalBooks: 2,
  }
];

// Physical Sample Books distributed to customers
export const SAMPLE_BOOKS_DATA: SampleBook[] = [
  {
    id: 'bk-ddecor-vol1',
    code: 'DD-BK-VOL1',
    name: "D'Decor - Luxury Velvet Volume 1",
    collectionId: 'ddecor',
    collectionName: "D'Decor",
    category: 'Sofa Fabrics & Velvet',
    year: '2025-2026 Master Edition',
    description: 'Official D\'Decor physical sample book containing 28 rich velvet swatches, spill-shield treated for luxury living room sofas & recliners.',
    totalSwatches: 28,
    coverImage: rexineBurgundyWine,
    qrCodeUrl: 'https://rexinecentre.com/books/bk-ddecor-vol1',
    specs: {
      thickness: '1.4 mm',
      width: '56 inches',
      backing: 'Latex Bonded Weave',
      finish: 'Stain Shield Velvet',
      targetUse: 'Luxury Sofas & Armchairs'
    }
  },
  {
    id: 'bk-milano-nappa',
    code: 'ML-BK-NAPPA26',
    name: 'Milano - Silky Nappa Master Book',
    collectionId: 'milano',
    collectionName: 'Milano',
    category: 'Leatherette',
    year: '2026 Edition',
    description: 'Physical sample catalog with 30 silky Italian Nappa finish synthetic leather swatches for executive chairs and interior upholstery.',
    totalSwatches: 30,
    coverImage: rexineCognacNappa,
    qrCodeUrl: 'https://rexinecentre.com/books/bk-milano-nappa',
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'Woven Cotton Fleece',
      finish: 'Satin Smooth',
      targetUse: 'Executive Seating & Lounge Sofas'
    }
  },
  {
    id: 'bk-supreme-auto',
    code: 'SP-BK-AUTO',
    name: 'Supreme - Heavy Duty Auto Leatherette',
    collectionId: 'supreme',
    collectionName: 'Supreme',
    category: 'Automotive Upholstery',
    year: '2025-2026 Edition',
    description: 'Physical sample binder containing 28 automotive-grade UV-shielded and micro-perforated leatherette swatches for cars & motorcycles.',
    totalSwatches: 28,
    coverImage: rexineMidnightNavy,
    qrCodeUrl: 'https://rexinecentre.com/books/bk-supreme-auto',
    specs: {
      thickness: '1.3 mm',
      width: '54 inches',
      backing: 'Heavy Mesh Tricot',
      finish: 'UV Shield Satin',
      targetUse: 'Car Seat Covers & Bike Saddles'
    }
  },
  {
    id: 'bk-royal-sofa',
    code: 'RY-BK-SOFA25',
    name: 'Royal - Heritage Sofa Fabric Swatches',
    collectionId: 'royal',
    collectionName: 'Royal',
    category: 'Upholstery Fabrics',
    year: '2025 Edition',
    description: 'Physical sample book with 26 jacquard woven and textured chenille fabrics designed for classic living room suites.',
    totalSwatches: 26,
    coverImage: aboutInteriorDining,
    qrCodeUrl: 'https://rexinecentre.com/books/bk-royal-sofa',
    specs: {
      thickness: '1.1 mm',
      width: '54 inches',
      backing: 'Woven Cotton Mesh',
      finish: 'Jacquard Textured',
      targetUse: 'Living Room Furniture'
    }
  },
  {
    id: 'bk-elite-pvc',
    code: 'EL-BK-PVC26',
    name: 'Elite - Commercial Heavy Duty PVC Sheets',
    collectionId: 'elite',
    collectionName: 'Elite',
    category: 'PVC Sheets',
    year: '2026 Edition',
    description: 'Physical sample catalog with 25 commercial grade flexible PVC sheet swatches, anti-bacterial and easy disinfectant for clinics and restaurants.',
    totalSwatches: 25,
    coverImage: leatherSwatchesStacked,
    qrCodeUrl: 'https://rexinecentre.com/books/bk-elite-pvc',
    specs: {
      thickness: '1.0 mm',
      width: '54 inches',
      backing: 'Polyester Woven Mesh',
      finish: 'Bleach Cleanable Gloss',
      targetUse: 'Restaurant Booths & Clinics'
    }
  },
  {
    id: 'bk-signature-quilted',
    code: 'SG-BK-QUILT',
    name: 'Signature - Diamond Quilted & Embossed',
    collectionId: 'signature',
    collectionName: 'Signature',
    category: 'Decorative Materials',
    year: '2026 Edition',
    description: 'Physical swatch book with 27 padded diamond stitched and metallic embossed synthetic hides for headboards and decorative wall panels.',
    totalSwatches: 27,
    coverImage: rexineEmeraldGreen,
    qrCodeUrl: 'https://rexinecentre.com/books/bk-signature-quilted',
    specs: {
      thickness: '1.4 mm',
      width: '54 inches',
      backing: '10mm Foam Padding',
      finish: 'Stitched Diamond & Metallic',
      targetUse: 'Headboards & Wall Panels'
    }
  }
];

// Helper to generate 25-30 product designs for a given sample book
const generateBookDesigns = (book: SampleBook): Product[] => {
  const shades = [
    { name: 'Royal Crimson Wine', hex: '#581825', category: 'Deep Red' },
    { name: 'Amber Cognac', hex: '#A66E38', category: 'Warm Tan' },
    { name: 'Midnight Charcoal', hex: '#1C2024', category: 'Dark Grey' },
    { name: 'Deep Midnight Navy', hex: '#1E2A38', category: 'Navy Blue' },
    { name: 'Emerald Forest Green', hex: '#1E4D3A', category: 'Green' },
    { name: 'Pristine Pearl Ivory', hex: '#F0EAD6', category: 'Cream White' },
    { name: 'Espresso Roast Brown', hex: '#4A2511', category: 'Dark Brown' },
    { name: 'Slate Steel Grey', hex: '#383D42', category: 'Grey' },
    { name: 'Mustard Ochre Gold', hex: '#C29B38', category: 'Gold Yellow' },
    { name: 'Copper Bronze Shimmer', hex: '#B87333', category: 'Metallic' },
    { name: 'Jet Black Matte', hex: '#000000', category: 'Black' },
    { name: 'Sand Taupe Beige', hex: '#C2B280', category: 'Beige' },
    { name: 'Teal Peacock Marine', hex: '#008080', category: 'Teal' },
    { name: 'Rustic Terracotta', hex: '#A35422', category: 'Terracotta' },
    { name: 'Olive Army Green', hex: '#4B5320', category: 'Olive' },
    { name: 'Plum Violet Purple', hex: '#4A1521', category: 'Purple' },
    { name: 'Saddle Chestnut', hex: '#8C5638', category: 'Brown' },
    { name: 'Charcoal Perforated', hex: '#2B2B2B', category: 'Charcoal' },
    { name: 'Warm Almond Cream', hex: '#E3D7C5', category: 'Cream' },
    { name: 'Gunmetal Silver Gloss', hex: '#2A2E33', category: 'Metallic' },
    { name: 'Mahogany Vintage', hex: '#421C0E', category: 'Deep Brown' },
    { name: 'Ocean Cyan Marine', hex: '#1B4D5C', category: 'Blue' },
    { name: 'Rosewood Blush', hex: '#6D3A3B', category: 'Rose' },
    { name: 'Ash Fog Light Grey', hex: '#8C9298', category: 'Light Grey' },
    { name: 'Desert Camel Tan', hex: '#C67C4E', category: 'Tan' },
    { name: 'Champagne Shimmer', hex: '#D4B886', category: 'Gold' },
    { name: 'Forest Moss Green', hex: '#2E473B', category: 'Green' },
    { name: 'Cobalt Sapphire', hex: '#102A45', category: 'Blue' },
  ];

  const images = [
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

  const designs: Product[] = [];
  const count = book.totalSwatches || 28;

  for (let i = 1; i <= count; i++) {
    const shadeObj = shades[(i - 1) % shades.length];
    const image = images[(i - 1) % images.length];
    const designCode = `${book.code.split('-')[0]}-${100 + i}`;
    
    // RRP calculations (Only RRP retail price public!)
    const rrp = 950 + (i * 20) + (book.collectionId === 'ddecor' ? 300 : book.collectionId === 'supreme' ? 250 : 150);

    designs.push({
      id: `${book.id}-design-${i}`,
      code: designCode,
      name: `${book.collectionName} ${shadeObj.name}`,
      shadeName: shadeObj.name,
      category: book.category,
      collectionId: book.collectionId,
      collectionName: book.collectionName,
      bookId: book.id,
      bookTitle: book.name,
      rrp: rrp, // ONLY RRP RETAIL PRICE
      unit: 'Meter',
      description: `Official Design Swatch #${i} from physical book '${book.name}'. Features ${shadeObj.name} with ${book.specs?.finish || 'durable protection'} and ${book.specs?.backing || 'reinforced backing'}.`,
      image: image,
      colors: [
        { name: shadeObj.name, hex: shadeObj.hex },
        { name: 'Companion Neutral', hex: '#D6C5B3' },
        { name: 'Accent Dark', hex: '#111111' }
      ],
      specs: {
        thickness: book.specs?.thickness || '1.2 mm',
        width: book.specs?.width || '54 inches',
        backing: book.specs?.backing || 'Woven Cotton',
        finish: book.specs?.finish || 'Protective Topcoat',
        gsm: `${580 + (i * 5)} GSM`,
        rollLength: '30 Meters',
        abrasion: '80,000+ Martindale Cycles'
      },
      featured: i <= 3,
      inStock: true
    });
  }

  return designs;
};

// Generate all designs across all physical sample books
export const ALL_BOOK_DESIGNS: Product[] = SAMPLE_BOOKS_DATA.flatMap((book) => generateBookDesigns(book));

// Utility function to get book by ID
export const getBookById = (bookId: string): SampleBook | undefined => {
  return SAMPLE_BOOKS_DATA.find((b) => b.id.toLowerCase() === bookId.toLowerCase() || b.code.toLowerCase() === bookId.toLowerCase());
};

// Utility function to get all designs for a book
export const getDesignsByBookId = (bookId: string): Product[] => {
  return ALL_BOOK_DESIGNS.filter((d) => d.bookId?.toLowerCase() === bookId.toLowerCase());
};
