import { Product, CategoryItem, SampleBook, IndustryItem, Testimonial, FAQItem, FeaturedCollection } from '../types';
import { siteUrl } from '../config';

import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import aboutInteriorDining from '../assets/images/about_interior_dining_1785154208545.jpg';
import leatherSwatchesStacked from '../assets/images/leather_swatches_stacked_1785154222031.jpg';
import chairLoungeContact from '../assets/images/chair_lounge_contact_1785154236762.jpg';
import heroLeatherFolds from '../assets/images/hero_leather_folds_1785161428952.jpg';
import officeUse from '../assets/images/office-use.png';
import rexineCognacNappa from '../assets/images/rexine_cognac_nappa_1785227277160.jpg';
import rexineBurgundyWine from '../assets/images/rexine_burgundy_wine_1785227406807.jpg';
import rexineSlateCharcoal from '../assets/images/rexine_slate_charcoal_1785227428841.jpg';
import rexineEmeraldGreen from '../assets/images/rexine_emerald_green_1785227447891.jpg';
import rexineMidnightNavy from '../assets/images/rexine_midnight_navy_1785227463408.jpg';

export {
  heroLeatherRolls,
  aboutInteriorDining,
  leatherSwatchesStacked,
  chairLoungeContact,
  heroLeatherFolds,
  rexineCognacNappa,
  rexineBurgundyWine,
  rexineSlateCharcoal,
  rexineEmeraldGreen,
  rexineMidnightNavy,
};

export const FEATURED_COLLECTIONS: FeaturedCollection[] = [
  {
    id: 'milano',
    title: 'MILANO',
    subtitle: 'COLLECTION',
    tagline: 'Italian Nappa & Silky Smooth Leatherette',
    description: 'Ultra-luxurious, silky smooth synthetic hides engineered for executive office seating, luxury hotel suites, and high-end residential sofas.',
    designs: '30 Designs',
    image: rexineCognacNappa,
    accentColor: '#A66E38',
  },
  {
    id: 'supreme',
    title: 'SUPREME',
    subtitle: 'COLLECTION',
    tagline: 'Automotive-Grade & Heavy Duty UV Hides',
    description: 'UV-resistant, flame-retardant, and scratch-proof leatherette designed for vehicle seats, motorcycle saddles, and marine yachts.',
    designs: '28 Designs',
    image: rexineMidnightNavy,
    accentColor: '#1E2A38',
  },
  {
    id: 'royal',
    title: 'ROYAL',
    subtitle: 'COLLECTION',
    tagline: 'Velvet & Heavy Duty Woven Upholstery',
    description: 'Opulent woven textiles and plush upholstery fabrics with rich drape and spill-resistant stain shields for sofas and recliners.',
    designs: '32 Designs',
    image: rexineBurgundyWine,
    accentColor: '#581825',
  },
  {
    id: 'elite',
    title: 'ELITE',
    subtitle: 'COLLECTION',
    tagline: 'Commercial Heavy Duty PVC Sheets & Hides',
    description: 'High-density flexible PVC sheets with reinforced backing, engineered for intense footfall seating, restaurant booths, and medical clinics.',
    designs: '26 Designs',
    image: leatherSwatchesStacked,
    accentColor: '#111111',
  },
  {
    id: 'signature',
    title: 'SIGNATURE',
    subtitle: 'COLLECTION',
    tagline: 'Embossed Designer & Diamond Quilted Rexine',
    description: 'Artisanal embossed grain patterns, metallic shimmers, and stitched diamond quilted synthetic hides for wall panels and bespoke furniture.',
    designs: '29 Designs',
    image: rexineEmeraldGreen,
    accentColor: '#1E4D3A',
  },
];

export const CATEGORIES: CategoryItem[] = [
  { id: 'rexine', title: 'Rexine', count: '120+ Swatches', image: heroLeatherRolls, iconName: 'Layers', description: 'Synthetic leather for multipurpose' },
  { id: 'leatherette', title: 'Leatherette', count: '95+ Swatches', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop', iconName: 'Shield', description: 'Silky luxury synthetic hide' },
  { id: 'pvc-sheets', title: 'PVC Sheets', count: '80+ Swatches', image: leatherSwatchesStacked, iconName: 'Grid', description: 'High density vinyl sheets' },
  { id: 'upholstery-fabrics', title: 'Upholstery Fabrics', count: '150+ Swatches', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop', iconName: 'Sparkles', description: 'Woven furniture textiles' },
  { id: 'sofa-fabrics', title: 'Sofa Fabrics', count: '110+ Swatches', image: aboutInteriorDining, iconName: 'Sofa', description: 'Heavy duty sofa covers' },
  { id: 'automotive-upholstery', title: 'Automotive Upholstery', count: '85+ Swatches', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop', iconName: 'Car', description: 'UV resistant auto hide' },
  { id: 'furnishing-materials', title: 'Furnishing Materials', count: '140+ Swatches', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop', iconName: 'Home', description: 'Interior design hides' },
  { id: 'decorative-materials', title: 'Decorative Materials', count: '60+ Swatches', image: chairLoungeContact, iconName: 'Crown', description: 'Embossed pattern hides' }
];

export const INDUSTRIES: IndustryItem[] = [
  { id: 'ind1', title: 'Furniture Manufacturers', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop', iconName: 'Building', description: 'Bulk supply for sofas' },
  { id: 'ind2', title: 'Interior Designers', image: aboutInteriorDining, iconName: 'Sparkles', description: 'Bespoke textures for luxury projects' },
  { id: 'ind3', title: 'Sofa Makers', image: chairLoungeContact, iconName: 'Armchair', description: 'Durable hides with high tear strength' },
  { id: 'ind4', title: 'Automotive Industry', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop', iconName: 'Car', description: 'UV-stabilized vehicle seating' },
  { id: 'ind5', title: 'Hospitality', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop', iconName: 'Building2', description: 'Flame retardant materials' },
  { id: 'ind6', title: 'Retail & Dealers', image: leatherSwatchesStacked, iconName: 'ShoppingBag', description: 'Wholesale rolls & swatch books' },
  { id: 'ind7', title: 'Architects', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', iconName: 'Building', description: 'Commercial specification guidance' },
  { id: 'ind8', title: 'Upholstery Shops', image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1275?q=80&w=800&auto=format&fit=crop', iconName: 'Wrench', description: 'Ready stock fast dispatch' }
];

export const SAMPLE_BOOKS: SampleBook[] = [
  { id: 'b1', name: 'Milano Master Collection 2024', code: 'BK-MILANO-24', category: 'Luxury Leatherette', totalSwatches: 48, coverImage: heroLeatherRolls, qrCodeUrl: siteUrl('/book/milano') },
  { id: 'b2', name: 'Supreme Auto-Grade Leatherette', code: 'BK-AUTO-GRADE', category: 'Automotive Grade', totalSwatches: 32, coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop', qrCodeUrl: siteUrl('/book/supreme') },
  { id: 'b3', name: 'Royal Sofa Fabrics Swatch Edition', code: 'BK-ROYAL-SOFA', category: 'Upholstery Fabrics', totalSwatches: 64, coverImage: aboutInteriorDining, qrCodeUrl: siteUrl('/book/royal') },
  { id: 'b4', name: 'Elite Commercial PVC Hides', code: 'BK-ELITE-PVC', category: 'Heavy Duty Commercial', totalSwatches: 40, coverImage: leatherSwatchesStacked, qrCodeUrl: siteUrl('/book/elite') }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', author: 'Rahul Mehta', role: 'Procurement Head', company: 'Nilkamal', quote: 'Rexine has consistently delivered top quality materials for our projects. Their product range and service are exceptional.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop' },
  { id: 't2', author: 'Amit Sharma', role: 'Interior Designer', quote: 'Rexine Centre offers a wide range of premium materials. The quality and service are exceptional!', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop' },
  { id: 't3', author: 'Sneha Iyer', role: 'Architect', quote: 'Beautiful collections with great textures. WhatsApp enquiry makes the process so easy and quick.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop' }
];

export const REXINE_COLLECTIONS = [
  {
    id: 'pebble-grain',
    name: 'Pebble Grain',
    subtitle: 'Textured • 1.0mm',
    type: 'Textured',
    thickness: '1.0mm',
    image: heroLeatherRolls,
    price: '₹950 / Meter',
  },
  {
    id: 'nappa-finish',
    name: 'Nappa Finish',
    subtitle: 'Smooth • 1.2mm',
    type: 'Smooth',
    thickness: '1.2mm',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    price: '₹1,250 / Meter',
  },
  {
    id: 'quilted-rexine',
    name: 'Quilted Rexine',
    subtitle: 'Stitched • 1.2mm',
    type: 'Stitched',
    thickness: '1.2mm',
    image: leatherSwatchesStacked,
    price: '₹1,400 / Meter',
  },
  {
    id: 'litchi-grain',
    name: 'Litchi Grain',
    subtitle: 'Textured • 1.0mm',
    type: 'Textured',
    thickness: '1.0mm',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    price: '₹1,100 / Meter',
  },
];

export const APPLICATIONS = [
  {
    id: 'automotive',
    title: 'Automotive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    description: 'High durability, UV-resistant leatherette for car seats & dashboards.'
  },
  {
    id: 'furniture',
    title: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    description: 'Luxurious textures for luxury sofas, recliners, and lounge chairs.'
  },
  {
    id: 'office',
    title: 'Office',
    image: officeUse,
    description: 'Ergonomic breathable upholstery for executive office chairs & pods.'
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    image: aboutInteriorDining,
    description: 'Commercial fire-retardant hides for hotel lobbies, bars & restaurants.'
  },
  {
    id: 'marine',
    title: 'Marine',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop',
    description: 'Saltwater and mildew resistant synthetic leather for luxury yachts.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    description: 'Antimicrobial and easy-disinfectant vinyl for medical beds & clinics.'
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Material Selection',
    desc: 'Carefully selected raw materials.'
  },
  {
    step: '02',
    title: 'Manufacturing',
    desc: 'Advanced technology for perfect finish.'
  },
  {
    step: '03',
    title: 'Quality Testing',
    desc: 'Rigorous testing at every stage.'
  },
  {
    step: '04',
    title: 'Finishing',
    desc: 'Perfect look and feel in every detail.'
  },
  {
    step: '05',
    title: 'On-time Delivery',
    desc: 'Reliable delivery across India.'
  }
];

export const BLOG_POSTS = [
  {
    id: 'b1',
    title: 'How to Choose the Right Rexine for Your Furniture',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'b2',
    title: 'PU vs PVC Rexine: Which is Better for You?',
    date: 'April 28, 2024',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'b3',
    title: 'How to Clean and Maintain Rexine Products',
    date: 'April 15, 2024',
    image: leatherSwatchesStacked,
  }
];

export const STATES_LIST = [
  { name: 'Maharashtra', icon: '🏛️' },
  { name: 'Gujarat', icon: '🏭' },
  { name: 'Karnataka', icon: '🏰' },
  { name: 'Delhi', icon: '🕌' },
  { name: 'Tamil Nadu', icon: '🛕' },
  { name: 'Uttar Pradesh', icon: '🏰' },
];

export const POPULAR_CITIES = [
  'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Surat', 'Ahmedabad', 'Vadodara', 'Rajkot',
  'Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Hyderabad',
  'Jaipur', 'Lucknow', 'Kanpur', 'Indore', 'Bhopal', 'Patna', 'Kolkata'
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What is rexine made of?',
    answer: 'Rexine is a high-grade synthetic leather produced by coating a fabric backing (woven cotton or polyester mesh) with plasticized PVC or Polyurethane (PU), embossed with rich natural leather grain patterns.'
  },
  {
    id: 'faq2',
    question: 'How do I clean rexine?',
    answer: 'Simply wipe down with a damp microfiber cloth and mild soapy water. Avoid harsh solvents, abrasive scourers, or pure bleach to preserve the soft protective top layer.'
  },
  {
    id: 'faq3',
    question: 'Is rexine waterproof?',
    answer: 'Yes! High-density PVC and PU synthetic hides are 100% waterproof and moisture-resistant, making them ideal for high-traffic furniture and outdoor automotive use.'
  },
  {
    id: 'faq4',
    question: 'Can rexine be used for car seats?',
    answer: 'Absolutely. Automotive-grade rexine is UV-treated, heat-resistant, and tear-resistant specifically engineered for vehicle seating and interior panels.'
  },
  {
    id: 'faq5',
    question: 'How long does rexine last?',
    answer: 'With standard care, premium commercial rexine lasts between 7 to 12+ years without peeling, cracking, or color fading.'
  },
  {
    id: 'faq6',
    question: 'Is rexine eco friendly?',
    answer: 'Our modern eco-line uses bio-based polyurethane and phthalate-free coatings that consume significantly less water than traditional leather tanning.'
  }
];

export const TESTIMONIAL_FEATURED = {
  quote: "Rexine has consistently delivered top quality materials for our projects. Their product range and service are exceptional.",
  author: "Rahul Mehta",
  role: "Procurement Head, Nilkamal",
  rating: 5,
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
};

export const PRODUCTS: Product[] = [
  // MILANO COLLECTION
  {
    id: 'p1',
    code: 'ML-01',
    name: 'Milano Cognac Silky Nappa Leatherette',
    category: 'Leatherette',
    collectionId: 'milano',
    collectionName: 'Milano Collection',
    rrp: 1250,
    unit: 'Meter',
    description: 'Ultra-smooth Italian Nappa finish with a silky soft touch, anti-peel topcoat, and 100k Martindale abrasion resistance.',
    image: rexineCognacNappa,
    colors: [
      { name: 'Amber Cognac', hex: '#A66E38' },
      { name: 'Charcoal Slate', hex: '#2B2B2B' },
      { name: 'Warm Beige', hex: '#D6C5B3' },
      { name: 'Espresso Black', hex: '#111111' }
    ],
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'Microfiber Suede',
      finish: 'Satin Smooth',
      gsm: '650 GSM',
      rollLength: '25 Meters'
    },
    featured: true
  },
  {
    id: 'p2',
    code: 'ML-02',
    name: 'Milano Ivory Soft Touch Hide',
    category: 'Leatherette',
    collectionId: 'milano',
    collectionName: 'Milano Collection',
    rrp: 1300,
    unit: 'Meter',
    description: 'Pristine ivory tone synthetic hide designed for luxury hotel bedroom headboards, lounge sofas, and executive suites.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Ivory Cream', hex: '#F0EAD6' },
      { name: 'Pearl White', hex: '#F5F5F0' },
      { name: 'Sand Khaki', hex: '#C2B280' }
    ],
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'Knitted Cotton Fleece',
      finish: 'Soft Matte',
      gsm: '670 GSM',
      rollLength: '25 Meters'
    }
  },
  {
    id: 'p3',
    code: 'ML-03',
    name: 'Milano Slate Grey Executive Nappa',
    category: 'Leatherette',
    collectionId: 'milano',
    collectionName: 'Milano Collection',
    rrp: 1280,
    unit: 'Meter',
    description: 'Refined dark slate grey finish with minimal grain glare, ideal for modern ergonomic office chairs and boardroom seating.',
    image: rexineSlateCharcoal,
    colors: [
      { name: 'Slate Grey', hex: '#383D42' },
      { name: 'Midnight Charcoal', hex: '#1C2024' },
      { name: 'Gunmetal', hex: '#2A2E33' }
    ],
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'Reinforced Poly-Suede',
      finish: 'Low Gloss Matte',
      gsm: '660 GSM',
      rollLength: '30 Meters'
    }
  },

  // SUPREME COLLECTION (AUTOMOTIVE & HEAVY DUTY)
  {
    id: 'p4',
    code: 'SP-01',
    name: 'Supreme Midnight Navy Auto Hide',
    category: 'Automotive Upholstery',
    collectionId: 'supreme',
    collectionName: 'Supreme Collection',
    rrp: 1450,
    unit: 'Meter',
    description: 'UV-stabilized marine & automotive grade leatherette with high heat dissipation, tear resistance, and anti-mildew coating.',
    image: rexineMidnightNavy,
    colors: [
      { name: 'Midnight Navy', hex: '#1E2A38' },
      { name: 'Stealth Black', hex: '#12161A' },
      { name: 'Deep Royal Blue', hex: '#0F1C3F' }
    ],
    specs: {
      thickness: '1.3 mm',
      width: '54 inches',
      backing: 'Heavy Woven Mesh',
      finish: 'UV Shielded Satin',
      gsm: '720 GSM',
      rollLength: '20 Meters'
    },
    featured: true
  },
  {
    id: 'p5',
    code: 'SP-02',
    name: 'Supreme Carbon Black Perforated Rexine',
    category: 'Automotive Upholstery',
    collectionId: 'supreme',
    collectionName: 'Supreme Collection',
    rrp: 1500,
    unit: 'Meter',
    description: 'Micro-perforated breathable synthetic hide engineered for luxury car seat inserts, ventilated seats, and sports steering grips.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Carbon Black', hex: '#151515' },
      { name: 'Racing Red Trim', hex: '#8B0000' }
    ],
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'High Tensile Tricot',
      finish: 'Breathable Perforated',
      gsm: '700 GSM',
      rollLength: '20 Meters'
    }
  },

  // ROYAL COLLECTION (VELVET & SOFA FABRICS)
  {
    id: 'p6',
    code: 'RY-01',
    name: 'Royal Burgundy Wine Velvet Fabric',
    category: 'Sofa Fabrics',
    collectionId: 'royal',
    collectionName: 'Royal Collection',
    rrp: 1350,
    unit: 'Meter',
    description: 'Opulent deep wine burgundy woven velvet with water-repellent backing, rich lustre, and anti-snag pile construction.',
    image: rexineBurgundyWine,
    colors: [
      { name: 'Burgundy Wine', hex: '#581825' },
      { name: 'Royal Emerald', hex: '#1E4D3A' },
      { name: 'Golden Mustard', hex: '#C29B38' },
      { name: 'Deep Ochre', hex: '#A35422' }
    ],
    specs: {
      thickness: '1.4 mm',
      width: '56 inches',
      backing: 'Latex Bonded Weave',
      finish: 'Stain Shield Velvet',
      gsm: '550 GSM',
      rollLength: '30 Meters'
    },
    featured: true
  },
  {
    id: 'p7',
    code: 'RY-02',
    name: 'Royal Heritage Jacquard Weave',
    category: 'Upholstery Fabrics',
    collectionId: 'royal',
    collectionName: 'Royal Collection',
    rrp: 1420,
    unit: 'Meter',
    description: 'Intricate royal woven pattern fabric designed for formal living room furniture, accent armchairs, and luxury cushions.',
    image: aboutInteriorDining,
    colors: [
      { name: 'Heritage Gold', hex: '#B8860B' },
      { name: 'Warm Walnut', hex: '#5C4033' }
    ],
    specs: {
      thickness: '1.1 mm',
      width: '54 inches',
      backing: 'Woven Cotton Mesh',
      finish: 'Jacquard Textured',
      gsm: '520 GSM',
      rollLength: '35 Meters'
    }
  },

  // ELITE COLLECTION (COMMERCIAL PVC SHEETS)
  {
    id: 'p8',
    code: 'EL-01',
    name: 'Elite Heavy Duty Commercial PVC Sheet',
    category: 'PVC Sheets',
    collectionId: 'elite',
    collectionName: 'Elite Collection',
    rrp: 890,
    unit: 'Meter',
    description: 'High-density flexible PVC sheet with tough wear layer, ideal for restaurant booth benches, cinema seats, and public waiting areas.',
    image: leatherSwatchesStacked,
    colors: [
      { name: 'Saddle Tan', hex: '#8B5A2B' },
      { name: 'Commercial Grey', hex: '#4F4F4F' },
      { name: 'Jet Black', hex: '#000000' }
    ],
    specs: {
      thickness: '1.0 mm',
      width: '54 inches',
      backing: 'Polyester Woven',
      finish: 'Heavy Duty Gloss',
      gsm: '620 GSM',
      rollLength: '40 Meters'
    }
  },
  {
    id: 'p9',
    code: 'EL-02',
    name: 'Elite Antimicrobial Healthcare Vinyl',
    category: 'PVC Sheets',
    collectionId: 'elite',
    collectionName: 'Elite Collection',
    rrp: 980,
    unit: 'Meter',
    description: 'Chemical-resistant, bleach-cleanable medical grade PVC sheet designed for clinic beds, dentist chairs, and laboratory upholstery.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Hospital Teal', hex: '#008080' },
      { name: 'Clean Mint', hex: '#98FF98' },
      { name: 'Sky Blue', hex: '#87CEEB' }
    ],
    specs: {
      thickness: '1.1 mm',
      width: '54 inches',
      backing: 'Knitted Antimicrobial Net',
      finish: 'Easy Disinfect Surface',
      gsm: '640 GSM',
      rollLength: '30 Meters'
    }
  },

  // SIGNATURE COLLECTION (EMBOSSED & QUILTED REXINE)
  {
    id: 'p10',
    code: 'SG-01',
    name: 'Signature Emerald Metallic Pebble Rexine',
    category: 'Decorative Materials',
    collectionId: 'signature',
    collectionName: 'Signature Collection',
    rrp: 1150,
    unit: 'Meter',
    description: 'Deep forest emerald green synthetic hide with subtle metallic sheen and high-definition pebble grain embossing.',
    image: rexineEmeraldGreen,
    colors: [
      { name: 'Emerald Forest', hex: '#1E4D3A' },
      { name: 'Metallic Bronze', hex: '#8C6239' },
      { name: 'Copper Tan', hex: '#B87333' }
    ],
    specs: {
      thickness: '1.1 mm',
      width: '54 inches',
      backing: 'Twill Cotton',
      finish: 'Metallic Pearl Sheen',
      gsm: '610 GSM',
      rollLength: '30 Meters'
    },
    featured: true
  },
  {
    id: 'p11',
    code: 'SG-02',
    name: 'Signature Diamond Stitched Quilted Rexine',
    category: 'Rexine',
    collectionId: 'signature',
    collectionName: 'Signature Collection',
    rrp: 1400,
    unit: 'Meter',
    description: 'Precision diamond-quilted padded synthetic hide with thick foam backing for luxury headboards, bar counter panels, and auto interiors.',
    image: heroLeatherFolds,
    colors: [
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Rich Wine', hex: '#581825' },
      { name: 'Champagne Tan', hex: '#C67C4E' }
    ],
    specs: {
      thickness: '1.4 mm',
      width: '54 inches',
      backing: '10mm Foam Padding',
      finish: 'Stitched Diamond',
      gsm: '800 GSM',
      rollLength: '15 Meters'
    }
  },
  {
    id: 'p12',
    code: 'SG-03',
    name: 'Signature Litchi Grain Heavy Duty Rexine',
    category: 'Rexine',
    collectionId: 'signature',
    collectionName: 'Signature Collection',
    rrp: 1100,
    unit: 'Meter',
    description: 'Deep litchi seed embossing offering superior scratch resistance and rugged hand feel for high-use sofa cushions.',
    image: heroLeatherRolls,
    colors: [
      { name: 'Amber Tan', hex: '#D49B4B' },
      { name: 'Mahogany Brown', hex: '#4A2511' },
      { name: 'Jet Black', hex: '#000000' }
    ],
    specs: {
      thickness: '1.0 mm',
      width: '54 inches',
      backing: 'Knitted Poly-cotton',
      finish: 'Anti-scratch Matte',
      gsm: '580 GSM',
      rollLength: '35 Meters'
    }
  },

  // CATEGORY SPECIFIC ITEMS
  {
    id: 'p13',
    code: 'FN-01',
    name: 'Furnishing Linen Look Soft Synthetic Hide',
    category: 'Furnishing Materials',
    collectionId: 'milano',
    collectionName: 'Milano Collection',
    rrp: 1180,
    unit: 'Meter',
    description: 'Supple interior furnishing hide with subtle texture designed for acoustic wall paneling, doors, and bed surrounds.',
    image: chairLoungeContact,
    colors: [
      { name: 'Oatmeal Beige', hex: '#E3D7C5' },
      { name: 'Warm Taupe', hex: '#8B7D6B' }
    ],
    specs: {
      thickness: '1.0 mm',
      width: '54 inches',
      backing: 'Soft Woven Fleece',
      finish: 'Linen Texture Matte',
      gsm: '540 GSM',
      rollLength: '30 Meters'
    }
  }
];
