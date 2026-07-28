import { Product, CategoryItem, SampleBook, IndustryItem, Testimonial, FAQItem } from '../types';

import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
import aboutInteriorDining from '../assets/images/about_interior_dining_1785154208545.jpg';
import leatherSwatchesStacked from '../assets/images/leather_swatches_stacked_1785154222031.jpg';
import chairLoungeContact from '../assets/images/chair_lounge_contact_1785154236762.jpg';

export { heroLeatherRolls, aboutInteriorDining, leatherSwatchesStacked, chairLoungeContact };

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
  { id: 'b1', name: 'Milano Master Collection 2024', code: 'BK-MILANO-24', category: 'Luxury Leatherette', totalSwatches: 48, coverImage: heroLeatherRolls, qrCodeUrl: 'https://rexinecentre.com/book/milano' },
  { id: 'b2', name: 'Supreme Auto-Grade Leatherette', code: 'BK-AUTO-GRADE', category: 'Automotive Grade', totalSwatches: 32, coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop', qrCodeUrl: 'https://rexinecentre.com/book/supreme' },
  { id: 'b3', name: 'Royal Sofa Fabrics Swatch Edition', code: 'BK-ROYAL-SOFA', category: 'Upholstery Fabrics', totalSwatches: 64, coverImage: aboutInteriorDining, qrCodeUrl: 'https://rexinecentre.com/book/royal' },
  { id: 'b4', name: 'Elite Commercial PVC Hides', code: 'BK-ELITE-PVC', category: 'Heavy Duty Commercial', totalSwatches: 40, coverImage: leatherSwatchesStacked, qrCodeUrl: 'https://rexinecentre.com/book/elite' }
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
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1275?q=80&w=800&auto=format&fit=crop',
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
  }
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
  {
    id: 'p1',
    code: 'Pebble Grain',
    name: 'Textured Pebble Grain Rexine',
    category: 'Textured',
    rrp: 950,
    unit: 'Meter',
    description: 'High quality rexine with tactile pebble texture for sofas, recliners, and heavy commercial seating.',
    image: heroLeatherRolls,
    colors: [
      { name: 'Warm Tan', hex: '#C67C4E' },
      { name: 'Espresso Black', hex: '#111111' },
      { name: 'Saddle Brown', hex: '#6A3816' },
      { name: 'Sand Cream', hex: '#D6C5B3' }
    ],
    specs: {
      thickness: '1.0 mm',
      width: '54 inches',
      backing: 'Woven Cotton',
      finish: 'Matte Protective',
      gsm: '600 GSM',
      rollLength: '30 Meters'
    }
  },
  {
    id: 'p2',
    code: 'Nappa Finish',
    name: 'Ultra Smooth Nappa Finish',
    category: 'Smooth',
    rrp: 1250,
    unit: 'Meter',
    description: 'Silky smooth luxury leatherette designed for executive chairs and luxury hotel interiors.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Cognac', hex: '#8C5638' },
      { name: 'Charcoal', hex: '#2B2B2B' },
      { name: 'Ivory', hex: '#F0EAD6' }
    ],
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'Microfiber Suede',
      finish: 'Satin Smooth',
      gsm: '650 GSM',
      rollLength: '25 Meters'
    }
  },
  {
    id: 'p3',
    code: 'Quilted Rexine',
    name: 'Stitched Diamond Quilted Rexine',
    category: 'Stitched',
    rrp: 1400,
    unit: 'Meter',
    description: 'Intricate diamond stitched padded synthetic hide for automotive seat inserts and luxury headboards.',
    image: leatherSwatchesStacked,
    colors: [
      { name: 'Midnight Black', hex: '#151515' },
      { name: 'Dark Burgundy', hex: '#4A1521' }
    ],
    specs: {
      thickness: '1.2 mm',
      width: '54 inches',
      backing: 'High Density Foam',
      finish: 'UV Shielded',
      gsm: '750 GSM',
      rollLength: '20 Meters'
    }
  },
  {
    id: 'p4',
    code: 'Litchi Grain',
    name: 'Litchi Embossed Rexine',
    category: 'Textured',
    rrp: 1100,
    unit: 'Meter',
    description: 'Deep litchi grain embossing providing high scratch resistance and soft hand feel.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    colors: [
      { name: 'Amber Tan', hex: '#D49B4B' },
      { name: 'Deep Black', hex: '#111111' }
    ],
    specs: {
      thickness: '1.0 mm',
      width: '54 inches',
      backing: 'Knitted Poly-cotton',
      finish: 'Matte Anti-scratch',
      gsm: '580 GSM',
      rollLength: '35 Meters'
    }
  }
];
