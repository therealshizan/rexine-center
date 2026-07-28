export interface CityDetail {
  cityName: string;
  citySlug: string;
  stateName: string;
  stateSlug: string;
  marketLocations: string[];
  keyIndustries: string[];
  recommendedRexine: string[];
  deliveryTimeline: string;
  seoDescription: string;
}

export interface StateDetail {
  id: string;
  stateName: string;
  stateSlug: string;
  capital: string;
  tagline: string;
  description: string;
  totalDistributors: string;
  popularCities: string[];
  demandSectors: string[];
  wholesaleHubs: string[];
  avgDeliveryTime: string;
  topProductsInDemand: string[];
  citiesDetails: CityDetail[];
  faqs: { question: string; answer: string }[];
}

export const STATE_SUPPLY_DATA: StateDetail[] = [
  {
    id: 'maharashtra',
    stateName: 'Maharashtra',
    stateSlug: 'maharashtra',
    capital: 'Mumbai',
    tagline: 'Leading Wholesale Hub for Sofa Rexine, Auto Leatherette & Commercial PVC Sheets in Maharashtra',
    description: 'Rexine Centre is Maharashtra’s primary wholesale manufacturer and bulk distributor of premium artificial leather, PVC sheeting, and PU upholstery hides. With our direct central warehousing hub in Bhiwandi & MIDC Andheri, we supply over 1000+ sofa manufacturers, car seat upholsterers, hotel interior decorators, and retail re-sellers across Mumbai, Pune, Nagpur, Nashik, and Kolhapur with 24-hour express roll dispatches.',
    totalDistributors: '180+ Authorized Wholesale Outlets',
    popularCities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Chhatrapati Sambhajinagar', 'Solapur', 'Kolhapur', 'Amravati'],
    demandSectors: [
      'Luxury Sofa & Living Room Upholstery',
      'Automotive OEM & Aftermarket Seat Covers',
      'Office Ergonomic Executive Chair Rexine',
      'Hospitality & Lounge Seating',
      'Bags, Luggage & Footwear Manufacturing'
    ],
    wholesaleHubs: [
      'Bhiwandi Central Textile Warehousing Zone',
      'Dharavi & Crawford Leather Markets, Mumbai',
      'Ulhasnagar Furniture Wholesale Belt',
      'Market Yard & Timber Market, Pune',
      'MIDC Industrial Area, Nagpur'
    ],
    avgDeliveryTime: '24 to 48 Hours',
    topProductsInDemand: [
      'Milano Ultra-Smooth Nappa Leatherette (1.2mm)',
      'Pebble Grain Heavy Duty Sofa Hide',
      'Auto-Grade UV Shielded Diamond Stitched Rexine',
      'Commercial Flame Retardant Hotel Rexine',
      'Gym Equipment Anti-Tear Vinyl Sheeting'
    ],
    citiesDetails: [
      {
        cityName: 'Mumbai',
        citySlug: 'mumbai',
        stateName: 'Maharashtra',
        stateSlug: 'maharashtra',
        marketLocations: ['Bhiwandi Warehousing', 'Dharavi Leather Market', 'Ulhasnagar Wholesale Belt', 'Crawford Market Area'],
        keyIndustries: ['Commercial Interior Design', 'Automotive Refitting', 'Luxury Sofa Manufacturing', 'Bags & Travel Gear'],
        recommendedRexine: ['Milano Nappa 1.2mm', 'Pebble Grain Heavy Duty', 'Diamond Quilted Auto Hide'],
        deliveryTimeline: 'Same-day or Next-day Express Delivery',
        seoDescription: 'As Mumbai’s top wholesale rexine supplier, we cater to interior designers, sofa artisans in Ulhasnagar, and automotive customizers across Bandra, Andheri, and Thane with instant roll delivery.'
      },
      {
        cityName: 'Pune',
        citySlug: 'pune',
        stateName: 'Maharashtra',
        stateSlug: 'maharashtra',
        marketLocations: ['Timber Market, Bhavani Peth', 'Chakan Industrial Corridor', 'Pimpri-Chinchwad (PCMC)'],
        keyIndustries: ['Automotive OEM Seating', 'IT Office Executive Chairs', 'Modular Furniture Factories'],
        recommendedRexine: ['Breathable Office Chair Rexine', 'UV Anti-Fade Car Seat Hide', 'Litchi Embossed Sofa Hide'],
        deliveryTimeline: '24 Hours Direct Trucking',
        seoDescription: 'Serving Pune’s thriving furniture workshops and Chakan auto seat manufacturing plants with high-tensile, abrasion-tested artificial leatherette rolls.'
      },
      {
        cityName: 'Nagpur',
        citySlug: 'nagpur',
        stateName: 'Maharashtra',
        stateSlug: 'maharashtra',
        marketLocations: ['Itwari Wholesale Market', 'MIDC Hingna', 'Kalamna Industrial Zone'],
        keyIndustries: ['Central India Furniture Wholesalers', 'Public Bus Transport Seating', 'Commercial Hotel Upholstery'],
        recommendedRexine: ['Heavy Duty PVC Sheeting', 'Flame Retardant Rexine', 'Sofa Cover Fabrics'],
        deliveryTimeline: '24 to 36 Hours Dispatch',
        seoDescription: 'Central supply warehouse point delivering durable, anti-cracking rexine rolls to furniture dealers across Vidarbha and Nagpur.'
      }
    ],
    faqs: [
      {
        question: 'How fast can I get rexine rolls delivered in Mumbai & Pune?',
        answer: 'Orders dispatched from our Bhiwandi warehouse reach Mumbai, Thane, and Navi Mumbai within 12-24 hours. Direct logistics to Pune take 24 hours.'
      },
      {
        question: 'Do you provide physical swatch sample books to Maharashtra dealers?',
        answer: 'Yes! We ship complete physical sample binder books (Milano, Supreme, Royal, Elite) directly to showrooms and design studios across Maharashtra.'
      }
    ]
  },
  {
    id: 'gujarat',
    stateName: 'Gujarat',
    stateSlug: 'gujarat',
    capital: 'Gandhinagar',
    tagline: 'Premier Supplier of Industrial PVC Sheets & Upholstery Rexine Across Ahmedabad, Surat & Vadodara',
    description: 'Gujarat is India’s industrial manufacturing hub for footwear, luggage, auto interiors, and home furnishings. Rexine Centre maintains direct express logistics networks supplying high-grade PVC leatherette, textured PU hides, and embossed vinyl rolls across Ahmedabad, Surat, Vadodara, Rajkot, and Morbi.',
    totalDistributors: '150+ Wholesale Partners',
    popularCities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh', 'Morbi'],
    demandSectors: [
      'Industrial Machinery & Seat Covers',
      'Handbag, Purse & Footwear Manufacturing',
      'Textile Market Furnishing Wholesalers',
      'Residential Sofa & Furniture Units',
      'Public Bus & Railway Seating'
    ],
    wholesaleHubs: [
      'Kalupur & Relief Road Furniture Market, Ahmedabad',
      'Ring Road Textile Market & Bhatar, Surat',
      'Makarpura GIDC Industrial Area, Vadodara',
      'Aji GIDC & Bhaktinagar, Rajkot'
    ],
    avgDeliveryTime: '24 to 48 Hours',
    topProductsInDemand: [
      'Litchi Embossed Budget PVC Rexine',
      'Footwear & Luggage PU Sheeting',
      'Super Soft Sofa Leatherette',
      'Abrasion-Resistant Auto Vinyl',
      'Flame-Retardant Bus Seating Hide'
    ],
    citiesDetails: [
      {
        cityName: 'Ahmedabad',
        citySlug: 'ahmedabad',
        stateName: 'Gujarat',
        stateSlug: 'gujarat',
        marketLocations: ['Kalupur Wholesale Market', 'Changodar GIDC', 'Naroda Industrial Estate'],
        keyIndustries: ['Modular Sofa Manufacturing', 'Luggage & Bags Manufacturing', 'Office Interior Seating'],
        recommendedRexine: ['Litchi Embossed Rexine', 'Milano Nappa', '0.8mm Purse PVC'],
        deliveryTimeline: '24 Hours Express Logistics',
        seoDescription: 'Direct supplier of high-grade artificial leather rolls to Kalupur furniture markets and GIDC industrial units in Ahmedabad.'
      },
      {
        cityName: 'Surat',
        citySlug: 'surat',
        stateName: 'Gujarat',
        stateSlug: 'gujarat',
        marketLocations: ['Ring Road Textile Market', 'Bhatar Commercial Zone', 'Pandesara GIDC'],
        keyIndustries: ['Upholstery Textiles', 'Decorative Furnishings', 'Luxury Home Decor'],
        recommendedRexine: ['Embroidery Backed Rexine', 'Quilted Sofa Fabric', 'Gold-Bronze Metallic Leatherette'],
        deliveryTimeline: '24 to 36 Hours',
        seoDescription: 'Catering to Surat’s massive textile trade with specialty metallic, embossed, and embroidered synthetic leather hides.'
      }
    ],
    faqs: [
      {
        question: 'Can we order full container load or wholesale bulk rolls in Gujarat?',
        answer: 'Yes, we supply bulk rolls in 30, 50, or 100-meter factory rolls with GST invoices and direct transport to your factory anywhere in Gujarat.'
      }
    ]
  },
  {
    id: 'delhi',
    stateName: 'Delhi NCR',
    stateSlug: 'delhi',
    capital: 'New Delhi',
    tagline: 'Capital Hub for Luxury Leatherette, Automotive Auto Hide & Interior Upholstery Rexine in Delhi NCR',
    description: 'Rexine Centre delivers top-grade synthetic leather and upholstery textiles across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. Serving Kirti Nagar furniture hub, Karol Bagh car accessory markets, and Okhla design offices with high-density, anti-peel PU leatherette rolls.',
    totalDistributors: '160+ Dealers & Specifiers',
    popularCities: ['Delhi', 'New Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida'],
    demandSectors: [
      'Kirti Nagar Asia’s Furniture Capital',
      'Karol Bagh & Mayapuri Automotive Refitting',
      'Gurgaon Corporate Office Fitouts',
      'Boutique Hotel & Banquet Upholstery',
      'Fashion Bags & Belt Manufacturing'
    ],
    wholesaleHubs: [
      'Kirti Nagar Furniture Market',
      'Karol Bagh Auto Accessory Market',
      'Sadar Bazar Wholesale Market',
      'Okhla Industrial Area',
      'Noida Sector 63 Furniture Hub'
    ],
    avgDeliveryTime: '24 Hours',
    topProductsInDemand: [
      'Kirti Nagar Grade Milano Leatherette',
      'Karol Bagh Auto-Grade Diamond Quilted Rexine',
      'Fire-Retardant Hotel Upholstery Hide',
      'Breathable Office Pod Leatherette'
    ],
    citiesDetails: [
      {
        cityName: 'Delhi',
        citySlug: 'delhi',
        stateName: 'Delhi NCR',
        stateSlug: 'delhi',
        marketLocations: ['Kirti Nagar', 'Karol Bagh', 'Sadar Bazar', 'Okhla Phase 1-3'],
        keyIndustries: ['Luxury Furniture Manufacturing', 'Car Interior Modification', 'Architectural Interior Contracting'],
        recommendedRexine: ['Milano Nappa', 'Quilted Diamond Auto Hide', 'Pebble Grain Sofa Rexine'],
        deliveryTimeline: 'Same Day / Next Day Dispatch',
        seoDescription: 'Serving Kirti Nagar sofa makers and Karol Bagh car upholstery centers with premium quality, 100k-rub tested rexine rolls.'
      }
    ],
    faqs: [
      {
        question: 'Do you supply fire-retardant (FR) certified rexine in Delhi NCR?',
        answer: 'Yes, we manufacture and supply BS 5852 & CAL 117 certified flame retardant rexine for Delhi NCR hotels, cinemas, and corporate buildings.'
      }
    ]
  },
  {
    id: 'karnataka',
    stateName: 'Karnataka',
    stateSlug: 'karnataka',
    capital: 'Bangalore',
    tagline: 'South India’s Leading Wholesale Source for IT Workspace Seating & Home Decor Rexine in Karnataka',
    description: 'From Bangalore’s IT office complexes and Chickpet furniture markets to Mysuru and Mangaluru, Rexine Centre supplies premium PU leatherette, eco-conscious REACH-compliant hides, and durable PVC upholstery rolls.',
    totalDistributors: '120+ Authorized Showrooms',
    popularCities: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davangere', 'Bellary', 'Shivamogga'],
    demandSectors: [
      'IT & Corporate Office Ergonomic Seating',
      'Modern Apartment Modular Sofas',
      'Luxury Pubs, Cafes & Restaurant Upholstery',
      'Coastal Marine Seating (Mangalore Yachts)',
      'Interstate Bus Transport Seating'
    ],
    wholesaleHubs: [
      'Chickpet & Avenue Road Wholesale Market, Bangalore',
      'Peenya Industrial Area, Bangalore',
      'Mysore Road Furniture Cluster',
      'Baikampady Industrial Estate, Mangalore'
    ],
    avgDeliveryTime: '24 to 48 Hours',
    topProductsInDemand: [
      'Breathable Ergonomic Office Chair PU',
      'Hydrophobic Mildew-Proof Marine Vinyl',
      'Milano Soft Nappa Sofa Hide',
      'Scratch-Resistant Pet-Friendly Rexine'
    ],
    citiesDetails: [
      {
        cityName: 'Bangalore',
        citySlug: 'bangalore',
        stateName: 'Karnataka',
        stateSlug: 'karnataka',
        marketLocations: ['Chickpet', 'Peenya Industrial Area', 'Mysore Road', 'Whitefield Cluster'],
        keyIndustries: ['Corporate Workspace Furniture', 'Modern Sofa Brands', 'Fine Dining Upholstery'],
        recommendedRexine: ['Milano Nappa', 'Ergonomic Office PU', 'Pebble Grain Sofa Hide'],
        deliveryTimeline: '24 Hours Express Trucking',
        seoDescription: 'Supplying Bangalore’s top office furniture brands and luxury interior designers with premium, scratch-proof synthetic hides.'
      }
    ],
    faqs: [
      {
        question: 'Is your rexine suitable for humid Bangalore and coastal Mangalore weather?',
        answer: 'Absolutely. Our products feature anti-fungal, anti-mildew, and moisture-resistant protective coatings to prevent peeling in high humidity.'
      }
    ]
  },
  {
    id: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    capital: 'Chennai',
    tagline: 'Wholesale Rexine & Automotive Leatherette Manufacturer Supply Network in Tamil Nadu',
    description: 'Supplying Chennai’s automotive assembly belts, Coimbatore’s textile machinery seating, and Madurai’s furniture manufacturers with certified high-tensile artificial leather, PVC sheeting, and sofa rexine.',
    totalDistributors: '130+ Commercial Partners',
    popularCities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirupur', 'Erode', 'Vellore'],
    demandSectors: [
      'Automotive OEM Seating & Accessories',
      'Hospitality & Coastal Resort Furnishings',
      'Home Sofa & Recliners',
      'Footwear & Leather Goods Manufacturing'
    ],
    wholesaleHubs: [
      'Parrys & Broadway Wholesale Market, Chennai',
      'Ambattur & Guindy Industrial Estates',
      '100 Feet Road Furniture Hub, Coimbatore',
      'Tirupur Textile Machinery Belt'
    ],
    avgDeliveryTime: '36 to 48 Hours',
    topProductsInDemand: [
      'Auto-Grade UV Shielded Seat Covers',
      'Ultra Durable Sofa Rexine',
      'Commercial Bus & Coach Seating Hide',
      'Footwear Upper Synthetic Leather'
    ],
    citiesDetails: [
      {
        cityName: 'Chennai',
        citySlug: 'chennai',
        stateName: 'Tamil Nadu',
        stateSlug: 'tamil-nadu',
        marketLocations: ['Parrys Corner', 'Ambattur Industrial Estate', 'Guindy IE'],
        keyIndustries: ['Automotive Refitters', 'Commercial Office Interiors', 'Hospitality Seating'],
        recommendedRexine: ['Auto Grade Supreme', 'Milano Nappa', 'PVC Sheeting'],
        deliveryTimeline: '24 to 36 Hours',
        seoDescription: 'Chennai’s trusted supplier of automotive seat covers, bus upholstery, and premium residential sofa rexine rolls.'
      }
    ],
    faqs: [
      {
        question: 'Can you match custom Pantone color codes for Tamil Nadu bulk buyers?',
        answer: 'Yes! Our spectrophotometer lab in-house enables exact custom color matching for bulk orders above 500 meters within 48 hours.'
      }
    ]
  },
  {
    id: 'punjab',
    stateName: 'Punjab',
    stateSlug: 'punjab',
    capital: 'Chandigarh',
    tagline: 'Top Wholesale Source for Heavy Duty Sofa Rexine & Tractor/Vehicle Seating in Punjab',
    description: 'Rexine Centre provides heavy-duty, climate-resistant artificial leather and PVC hides across Ludhiana, Jalandhar, Amritsar, Patiala, and Mohali. Engineered to withstand Punjab’s harsh temperature fluctuations.',
    totalDistributors: '95+ Wholesale Distributors',
    popularCities: ['Ludhiana', 'Jalandhar', 'Amritsar', 'Patiala', 'Mohali', 'Bhatinda', 'Pathankot', 'Phagwara'],
    demandSectors: [
      'Heavy Duty Tractor & Agricultural Vehicle Seating',
      'Royal Wedding Palace & Banquet Hall Upholstery',
      'Luxury Sofa & Living Room Sets',
      'Sports Goods & Gym Fitness Equipment Sheeting'
    ],
    wholesaleHubs: [
      'Ludhiana Industrial Area & Timber Market',
      'Jalandhar Sports Market & Leather Complex',
      'Amritsar Hall Bazar Furniture Market'
    ],
    avgDeliveryTime: '36 to 48 Hours',
    topProductsInDemand: [
      'Heavy Duty Tractor Seat PVC Hide',
      'Wedding Banquet Gold-Embossed Rexine',
      'Gym Anti-Tear High Density Vinyl',
      'Milano Nappa Soft Sofa Hide'
    ],
    citiesDetails: [
      {
        cityName: 'Ludhiana',
        citySlug: 'ludhiana',
        stateName: 'Punjab',
        stateSlug: 'punjab',
        marketLocations: ['Industrial Area A & B', 'Timber Market', 'Ferozepur Road'],
        keyIndustries: ['Agricultural Machinery Seating', 'Furniture Manufacturing', 'Cycle & Vehicle Accessories'],
        recommendedRexine: ['Heavy Duty Tractor PVC', 'Milano Nappa', 'Gym Equipment Vinyl'],
        deliveryTimeline: '36 Hours Truck Logistics',
        seoDescription: 'Leading supplier of heavy duty tractor seating rexine, gym vinyl, and home sofa upholstery across Ludhiana.'
      }
    ],
    faqs: [
      {
        question: 'Is your rexine resistant to extreme summer heat and winter cold in Punjab?',
        answer: 'Yes, our formulated PVC and PU compounds are cold-crack resistant up to -10°C and heat-stable up to 70°C without peeling.'
      }
    ]
  },
  {
    id: 'rajasthan',
    stateName: 'Rajasthan',
    stateSlug: 'rajasthan',
    capital: 'Jaipur',
    tagline: 'Heritage & Modern Furnishing Rexine Supplier for Hotels & Handicrafts in Rajasthan',
    description: 'Supplying Jaipur, Jodhpur, Udaipur, Kota, and Ajmer with heritage-finish synthetic hides, antique embossed leatherette, and high-durability sofa rexine for royal hotel upholstery and exported handicrafts.',
    totalDistributors: '110+ Regional Dealers',
    popularCities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Bhilwara', 'Alwar'],
    demandSectors: [
      'Heritage Hotel & Resort Royal Furnishing',
      'Jodhpur Wooden Furniture Upholstery',
      'Handicraft & Vintage Box Lining',
      'Tourist Bus & SUV Interior Seating'
    ],
    wholesaleHubs: [
      'Mansarovar & VKI Industrial Area, Jaipur',
      'Jodhpur Wooden Handicrafts Cluster',
      'Udaipur Sukher Industrial Zone'
    ],
    avgDeliveryTime: '36 to 48 Hours',
    topProductsInDemand: [
      'Antique Weathered Vintage Leatherette',
      'Royal Velvet Backed Sofa Rexine',
      'UV Shielded Tourist Bus Hide',
      'Pebble Grain Furniture Leatherette'
    ],
    citiesDetails: [
      {
        cityName: 'Jaipur',
        citySlug: 'jaipur',
        stateName: 'Rajasthan',
        stateSlug: 'rajasthan',
        marketLocations: ['Mansarovar Furniture Market', 'VKI Industrial Area', 'Sanger Road'],
        keyIndustries: ['Heritage Hotel Restorations', 'Export Furniture', 'Tourist Transport Interiors'],
        recommendedRexine: ['Vintage Antique Leatherette', 'Milano Nappa', 'Quilted Auto Hide'],
        deliveryTimeline: '36 Hours',
        seoDescription: 'Supplying Jaipur palace hotels, interior contractors, and export furniture units with antique-look luxury synthetic leather.'
      }
    ],
    faqs: [
      {
        question: 'Do you offer antique or distressed leather look options for Jodhpur furniture manufacturers?',
        answer: 'Yes! We have dedicated vintage distressed and pull-up finish leatherette series crafted specifically for handicraft and wooden furniture exports.'
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    capital: 'Lucknow',
    tagline: 'Bulk Wholesale Rexine & PVC Sheeting Supplier Across Lucknow, Kanpur & Agra',
    description: 'Serving Uttar Pradesh’s major industrial & furniture hubs in Lucknow, Kanpur, Agra, Meerut, Varanasi, and Bareilly with affordable, high-strength PVC rexine, sofa covers, and footwear upper hides.',
    totalDistributors: '140+ Dealers',
    popularCities: ['Lucknow', 'Kanpur', 'Agra', 'Meerut', 'Varanasi', 'Bareilly', 'Prayagraj', 'Gorakhpur', 'Noida'],
    demandSectors: [
      'Kanpur & Agra Footwear & Leather Goods',
      'Bareilly Wooden Furniture Craftsmen',
      'Lucknow & Kanpur Sofa Wholesalers',
      'Public Transport & Railways'
    ],
    wholesaleHubs: [
      'Latouche Road & Aminabad, Lucknow',
      'Panki Industrial Area, Kanpur',
      'Agra Leather Goods Cluster',
      'Bareilly Furniture Market'
    ],
    avgDeliveryTime: '36 to 48 Hours',
    topProductsInDemand: [
      'Kanpur Grade Footwear PVC Hide',
      'Bareilly Soft Sofa Rexine',
      'Litchi Grain Heavy Duty Sheeting',
      'Budget Upholstery Vinyl'
    ],
    citiesDetails: [
      {
        cityName: 'Lucknow',
        citySlug: 'lucknow',
        stateName: 'Uttar Pradesh',
        stateSlug: 'uttar-pradesh',
        marketLocations: ['Latouche Road', 'Aminabad', 'Transport Nagar'],
        keyIndustries: ['Residential Furniture', 'Government & Public Seating', 'Commercial Interiors'],
        recommendedRexine: ['Milano Nappa', 'Pebble Grain Rexine', 'Litchi Grain PVC'],
        deliveryTimeline: '36 Hours Express Transport',
        seoDescription: 'Lucknow’s trusted wholesale warehouse connection for high-durability sofa rexine and executive chair leatherette.'
      }
    ],
    faqs: [
      {
        question: 'What is the minimum order quantity (MOQ) for bulk rolls in UP?',
        answer: 'For standard running stock colors, the MOQ is just 1 roll (25-35 meters). We ship directly via national express logistics.'
      }
    ]
  },
  {
    id: 'west-bengal',
    stateName: 'West Bengal',
    stateSlug: 'west-bengal',
    capital: 'Kolkata',
    tagline: 'Eastern India Wholesale Hub for Rexine, Upholstery & Furniture Materials in Kolkata',
    description: 'Serving Kolkata, Howrah, Siliguri, Durgapur, and Asansol with premium synthetic hides, marine vinyl, and sofa upholstery textiles. Central distributor for West Bengal and Eastern India markets.',
    totalDistributors: '110+ Eastern Dealers',
    popularCities: ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur', 'Asansol', 'Kharagpur', 'Bardhaman'],
    demandSectors: [
      'Kolkata Heritage & Modern Furniture Manufacturing',
      'Bags, Belts & Fancy Leatherette Goods',
      'Restaurant & Cafe Booth Upholstery',
      'Passenger Ferries & Marine Seating'
    ],
    wholesaleHubs: [
      'Bowbazar & Burrabazar Wholesale Market, Kolkata',
      'Howrah Industrial Belt',
      'Siliguri Hill Cart Road Furnishing Market'
    ],
    avgDeliveryTime: '48 Hours Express Transport',
    topProductsInDemand: [
      'Burrabazar Grade Milano Leatherette',
      'Waterproof Marine Yacht Vinyl',
      'Luggage & Bag Embossed PVC Sheeting',
      'Soft Sofa Cover Leatherette'
    ],
    citiesDetails: [
      {
        cityName: 'Kolkata',
        citySlug: 'kolkata',
        stateName: 'West Bengal',
        stateSlug: 'west-bengal',
        marketLocations: ['Burrabazar', 'Bowbazar', 'Howrah IE', 'Tangra'],
        keyIndustries: ['Furniture Retail & Wholesale', 'Leather Goods Accessories', 'Interior Contracting'],
        recommendedRexine: ['Milano Soft Nappa', 'Pebble Grain Sofa Hide', 'Luggage Grade PVC'],
        deliveryTimeline: '48 Hours Direct Express',
        seoDescription: 'Kolkata’s premier supplier of synthetic leather rolls for Burrabazar dealers, sofa craftsmen, and interior decorators.'
      }
    ],
    faqs: [
      {
        question: 'Do you deliver to North Bengal and Eastern states from Kolkata hub?',
        answer: 'Yes, we supply dealers across Siliguri, Assam, Bihar, and Jharkhand with fast express road transport from Kolkata central logistics.'
      }
    ]
  }
];

export const ALL_SERVED_CITIES_SEO = [
  'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Chhatrapati Sambhajinagar', 'Solapur', 'Kolhapur',
  'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Morbi',
  'Delhi', 'New Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad',
  'Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum',
  'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirupur',
  'Ludhiana', 'Jalandhar', 'Amritsar', 'Patiala', 'Mohali',
  'Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer',
  'Lucknow', 'Kanpur', 'Agra', 'Meerut', 'Varanasi', 'Bareilly',
  'Kolkata', 'Howrah', 'Siliguri', 'Durgapur',
  'Hyderabad', 'Secunderabad', 'Vijayawada', 'Visakhapatnam', 'Kochi', 'Thiruvananthapuram', 'Indore', 'Bhopal', 'Patna', 'Ranchi', 'Guwahati'
];
