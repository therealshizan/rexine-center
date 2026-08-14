import rexineCognacNappa from '../assets/images/rexine_cognac_nappa_1785227277160.jpg';
import rexineBurgundyWine from '../assets/images/rexine_burgundy_wine_1785227406807.jpg';
import rexineSlateCharcoal from '../assets/images/rexine_slate_charcoal_1785227428841.jpg';
import rexineEmeraldGreen from '../assets/images/rexine_emerald_green_1785227447891.jpg';
import rexineMidnightNavy from '../assets/images/rexine_midnight_navy_1785227463408.jpg';
import heroLeatherRolls from '../assets/images/hero_leather_rolls_1785154192570.jpg';
// import leatherSwatchesStacked from '../assets/images/leather_swatches_stacked_1785154222031.jpg';
// import aboutInteriorDining from '../assets/images/about_interior_dining_1785154208545.jpg';
// import chairLoungeContact from '../assets/images/chair_lounge_contact_1785154236762.jpg';
// import heroLeatherFolds from '../assets/images/hero_leather_folds_1785161428952.jpg';
// import { CINEFAB_SHADES } from './book-shades/cinefabShades';
// import { AURA_SHADES } from './book-shades/auraShades';
// import { CLIFF_SHADES } from './book-shades/cliffShades';
// import { CORAL_SHADES } from './book-shades/coralShades';
// import { FLOW_SHADES } from './book-shades/flowShades';
// import { ITALIAN_LEATHER_SHADES } from './book-shades/italianLeatherShades';
// import { LUXE_SHADES } from './book-shades/luxeShades';
// import { SAND_SHADES } from './book-shades/sandShades';
// import { STAR_SHADES } from './book-shades/starShades';
// import { ULTRA_SHADES } from './book-shades/ultraShades';

import aura647 from './books-json/aura-647.json'
import cinefab651 from './books-json/cinefab-651.json'
import cliff653 from './books-json/cliff-653.json'
import coral from './books-json/coral.json'
import flow424 from './books-json/flow-424.json'
import italianleather422 from './books-json/italian-leather-422.json'
import luxe648 from './books-json/luxe-648.json'
import sand from './books-json/sand.json'
import star from './books-json/star.json'
import ultra649 from './books-json/ultra-649.json'

export interface BookProduct {
  code: string;

  name: string;

  shadeName?: string;

  category?: string;

  // Retail RRP price in INR per meter
  rrp: number;

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

  // Sale price in INR per meter
  salePrice: number;

  specs?: {
    thickness?: string;

    width?: string;

    backing?: string;

    finish?: string;

    targetUse?: string;
  };

  products: BookProduct[];
}

export interface BookShade {
  sr: string;

  name: string;

  hex: string;
}

//=========== to generate new products for new pdf =============
//
// export function generateNewProducts(
//   products: BookShade[],
//   bookCode: string,
//   bookSlug: string,
//   category: string,
//   rrp: number
// ): BookProduct[] {
//   const productNumber = bookCode.split('-').pop() ?? bookCode;

//   return products.map((shade) => ({
//     code: `${productNumber}-${shade.sr}`,

//     name: `${bookCode} ${shade.sr}`,

//     shadeName: `SR.NO: ${shade.sr} - ${shade.name}`,

//     category,

//     rrp,

//     unit: 'meter',

//     description: `Premium swatch (${productNumber}-${shade.sr}) from official catalogue '${bookCode}'. Features ${shade.name} with reinforced backing and high abrasion resistance for contract and residential upholstery.`,

//     image: ``,

//     colors: [
//       {
//         name: shade.name,
//         hex: shade.hex,
//       },
//     ],

//     specs: {},

//     inStock: true,
//   }));
// }
//============


export const MOCK_BOOKS: Book[] = [
   aura647,
   cinefab651,
   cliff653,
   coral,
   flow424,
   italianleather422,
   luxe648,
   sand,
   star,
   ultra649,
  // {
  //   slug: 'ddecor-luxury-velvet',
  //   title: "D'Decor - Luxury Velvet Vol. 1",
  //   code: 'DD-BK-VOL1',
  //   category: 'Sofa Fabrics & Velvet',
  //   year: '2026 Master Edition',
  //   description: "Official D'Decor physical sample book containing 28 rich velvet swatches, spill-shield treated for luxury living room sofas, recliners, and accent chairs.",
  //   coverImage: '/books/ddecor-luxury-velvet/cover.webp',
  //   fallbackCover: rexineBurgundyWine,
  //   pdfPath: '/books/ddecor-luxury-velvet/catalogue.pdf',
  //   designCount: 28,
  //   specs: {
  //     thickness: '1.4 mm',
  //     width: '56 inches (142 cm)',
  //     backing: 'Latex Bonded Weave',
  //     finish: 'Stain Shield Velvet Topcoat',
  //     targetUse: 'Luxury Sofas, Recliners & Armchairs',
  //   },
  //   products: generateMockProducts(
  //     'ddecor-luxury-velvet',
  //     'DD-BK-VOL1',
  //     "D'Decor Luxury Velvet",
  //     'Sofa Fabrics & Velvet',
  //     28,
  //     1250
  //   ),
  // },
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
