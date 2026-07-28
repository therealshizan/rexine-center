export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  subCategory?: string;
  rrp: number;
  unit: string;
  description: string;
  image: string;
  colors: { name: string; hex: string; image?: string }[];
  specs: {
    thickness?: string;
    width?: string;
    backing?: string;
    finish?: string;
    gsm?: string;
    rollLength?: string;
  };
  featured?: boolean;
  isNew?: boolean;
  inStock?: boolean;
}

export interface CategoryItem {
  id: string;
  title: string;
  count: string;
  image: string;
  iconName: string;
  description: string;
}

export interface SampleBook {
  id: string;
  code: string;
  name: string;
  totalSwatches: number;
  coverImage: string;
  category: string;
  qrCodeUrl: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  iconName: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EnquiryData {
  productCode?: string;
  productName?: string;
  selectedColor?: string;
  quantity?: string;
  userType?: 'Retailer' | 'Architect' | 'Manufacturer' | 'End User' | 'Other';
  name: string;
  phone: string;
  city: string;
  message: string;
}
