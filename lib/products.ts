export type ProductCategory =
  | 'Trading Cards'
  | 'Sneakers'
  | 'Apparel'
  | 'Soccer'
  | 'Collectibles'
  | 'Watches';

export type Product = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  badge: string;
  status: 'Coming Soon' | 'Available';
  featured: boolean;
  newArrival: boolean;
  sale: boolean;
  image: string;
  gallery: string[];
  colors?: { label: string; image: string }[];
  sizes?: string[];
  options?: { label: string; values: string[] }[];
  highlights?: { title: string; description: string; icon: string }[];
};

export const placeholderImage = (variant: string) => variant;

export const products: Product[] = [
  {
    id: 'pokemon-30-center-box',
    slug: 'pokemon-30th-pokemon-center-box',
    brand: 'Pokémon',
    name: '30th Celebration Pokémon Center Exclusive Box',
    category: 'Trading Cards',
    subcategory: 'Pokémon',
    description: 'Sealed collector-focused special-edition release.',
    price: 249,
    compareAtPrice: 299,
    badge: 'LIMITED DROP',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: true,
    image: placeholderImage('trading-card-box'),
    gallery: [placeholderImage('trading-card-box')],
    options: [
      { label: 'Condition', values: ['Factory Sealed'] },
      { label: 'Release', values: ['Special Edition'] },
      { label: 'Purchase', values: ['1 Box'] },
    ],
    highlights: [
      { title: 'Limited Edition', description: 'Harder to find. More to collect.', icon: 'gem' },
      { title: 'Factory Sealed', description: 'Unopened, collector-grade condition.', icon: 'shield' },
      { title: 'Special Edition', description: 'Exclusive 30th anniversary release.', icon: 'star' },
      { title: 'Collector Focus', description: 'Designed for serious collectors.', icon: 'layers' },
    ],
  },
  {
    id: 'pokemon-30-anniversary',
    slug: 'pokemon-30th-anniversary-special-collection',
    brand: 'Pokémon',
    name: '30th Anniversary Special Collection',
    category: 'Trading Cards',
    subcategory: 'Pokémon',
    description: 'A curated anniversary collection celebrating three decades of Pokémon.',
    price: 149,
    badge: 'COLLECTOR PICK',
    status: 'Coming Soon',
    featured: false,
    newArrival: true,
    sale: false,
    image: placeholderImage('trading-card-pack'),
    gallery: [placeholderImage('trading-card-pack')],
    options: [
      { label: 'Condition', values: ['Factory Sealed'] },
      { label: 'Release', values: ['Anniversary Edition'] },
      { label: 'Purchase', values: ['1 Set'] },
    ],
    highlights: [
      { title: 'Anniversary Edition', description: 'Celebrating 30 years.', icon: 'star' },
      { title: 'Factory Sealed', description: 'Unopened, collector-grade.', icon: 'shield' },
      { title: 'Curated Collection', description: 'Hand-picked for collectors.', icon: 'layers' },
      { title: 'Limited Availability', description: 'Produced in limited quantities.', icon: 'gem' },
    ],
  },
  {
    id: 'pokemon-elite-trainer-box',
    slug: 'pokemon-center-exclusive-elite-trainer-box',
    brand: 'Pokémon',
    name: 'Pokémon Center Exclusive Elite Trainer Box',
    category: 'Trading Cards',
    subcategory: 'Pokémon',
    description: 'An exclusive Elite Trainer Box available through Pokémon Center.',
    price: 189,
    badge: 'EXCLUSIVE',
    status: 'Coming Soon',
    featured: false,
    newArrival: false,
    sale: false,
    image: placeholderImage('trading-card-box'),
    gallery: [placeholderImage('trading-card-box')],
    options: [
      { label: 'Condition', values: ['Factory Sealed'] },
      { label: 'Release', values: ['Exclusive Edition'] },
      { label: 'Purchase', values: ['1 Box'] },
    ],
    highlights: [
      { title: 'Exclusive Release', description: 'Pokémon Center exclusive.', icon: 'gem' },
      { title: 'Factory Sealed', description: 'Unopened condition.', icon: 'shield' },
      { title: 'Elite Trainer Kit', description: 'Includes accessories and packs.', icon: 'layers' },
      { title: 'Limited Stock', description: 'Allocated quantities only.', icon: 'star' },
    ],
  },
  {
    id: 'one-piece-op16',
    slug: 'one-piece-op16-sealed-booster-box',
    brand: 'One Piece Card Game',
    name: 'One Piece OP-16 Sealed Booster Box',
    category: 'Trading Cards',
    subcategory: 'One Piece',
    description: 'Sealed booster box from the latest One Piece Card Game set.',
    price: 139,
    badge: 'NEW RELEASE',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: false,
    image: placeholderImage('booster-box'),
    gallery: [placeholderImage('booster-box')],
    options: [
      { label: 'Condition', values: ['Factory Sealed'] },
      { label: 'Release', values: ['OP-16'] },
      { label: 'Purchase', values: ['1 Box'] },
    ],
    highlights: [
      { title: 'New Release', description: 'Latest OP-16 set.', icon: 'star' },
      { title: 'Factory Sealed', description: 'Unopened condition.', icon: 'shield' },
      { title: 'Booster Box', description: 'Contains multiple booster packs.', icon: 'layers' },
      { title: 'High Demand', description: 'Limited allocation expected.', icon: 'gem' },
    ],
  },
  {
    id: 'panini-prizm-2026',
    slug: 'panini-prizm-fifa-world-cup-2026-hobby-box',
    brand: 'Panini',
    name: 'Prizm FIFA World Cup 2026 Hobby Box',
    category: 'Trading Cards',
    subcategory: 'Sports',
    description: 'Premium hobby box for the Prizm FIFA World Cup 2026 collection.',
    price: 399,
    badge: 'WORLD CUP',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: false,
    image: placeholderImage('sports-card-box'),
    gallery: [placeholderImage('sports-card-box')],
    options: [
      { label: 'Condition', values: ['Factory Sealed'] },
      { label: 'Release', values: ['2026 World Cup'] },
      { label: 'Purchase', values: ['1 Box'] },
    ],
    highlights: [
      { title: 'World Cup Edition', description: '2026 FIFA World Cup Prizm.', icon: 'star' },
      { title: 'Factory Sealed', description: 'Unopened hobby box.', icon: 'shield' },
      { title: 'Premium Prizm', description: 'Chase rookies and parallels.', icon: 'gem' },
      { title: 'Limited Allocation', description: 'High demand expected.', icon: 'layers' },
    ],
  },
  {
    id: 'popmart-crybaby',
    slug: 'popmart-limited-crybaby-sealed-case',
    brand: 'Pop Mart',
    name: 'Limited Crybaby Sealed Case',
    category: 'Collectibles',
    description: 'A sealed case of limited Pop Mart Crybaby figures.',
    price: 219,
    badge: 'LIMITED',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: false,
    image: placeholderImage('blind-box-case'),
    gallery: [placeholderImage('blind-box-case')],
    options: [
      { label: 'Condition', values: ['New / Sealed'] },
      { label: 'Case Size', values: ['Full Case'] },
    ],
    highlights: [
      { title: 'Limited Release', description: 'Produced in limited quantities.', icon: 'gem' },
      { title: 'Sealed Case', description: 'Unopened full case.', icon: 'shield' },
      { title: 'Blind Box Format', description: 'Chase variants inside.', icon: 'layers' },
      { title: 'Collector Favorite', description: 'Highly sought series.', icon: 'star' },
    ],
  },
  {
    id: 'popmart-skullpanda',
    slug: 'popmart-skullpanda-special-edition-sealed-case',
    brand: 'Pop Mart',
    name: 'Skullpanda Special Edition Sealed Case',
    category: 'Collectibles',
    description: 'A sealed case of Pop Mart Skullpanda Special Edition figures.',
    price: 239,
    badge: 'COLLECTOR PICK',
    status: 'Coming Soon',
    featured: false,
    newArrival: false,
    sale: false,
    image: placeholderImage('blind-box-case'),
    gallery: [placeholderImage('blind-box-case')],
    options: [
      { label: 'Condition', values: ['New / Sealed'] },
      { label: 'Case Size', values: ['Full Case'] },
    ],
    highlights: [
      { title: 'Special Edition', description: 'Exclusive Skullpanda variant.', icon: 'gem' },
      { title: 'Sealed Case', description: 'Unopened full case.', icon: 'shield' },
      { title: 'Collector Pick', description: 'Curated for collectors.', icon: 'star' },
      { title: 'Blind Box Format', description: 'Chase figures inside.', icon: 'layers' },
    ],
  },
  {
    id: 'jellycat-plush',
    slug: 'jellycat-retired-event-exclusive-plush',
    brand: 'Jellycat',
    name: 'Retired / Event Exclusive Plush Character',
    category: 'Collectibles',
    description: 'A retired or event-exclusive Jellycat plush character.',
    price: 129,
    badge: 'HARD TO FIND',
    status: 'Coming Soon',
    featured: false,
    newArrival: false,
    sale: false,
    image: placeholderImage('plush'),
    gallery: [placeholderImage('plush')],
    options: [
      { label: 'Condition', values: ['New with Tags'] },
      { label: 'Edition', values: ['Retired / Event'] },
    ],
    highlights: [
      { title: 'Hard to Find', description: 'Retired or event exclusive.', icon: 'gem' },
      { title: 'New with Tags', description: 'Pristine collector condition.', icon: 'shield' },
      { title: 'Limited Availability', description: 'No longer in production.', icon: 'star' },
      { title: 'Collector Piece', description: 'A rare Jellycat find.', icon: 'layers' },
    ],
  },
  {
    id: 'supreme-box-logo-hoodie',
    slug: 'supreme-box-logo-hoodie-limited-release',
    brand: 'Supreme',
    name: 'Box Logo Hoodie Limited Release',
    category: 'Apparel',
    description: 'A limited release Supreme Box Logo Hoodie.',
    price: 399,
    compareAtPrice: 475,
    badge: 'LIMITED DROP',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: true,
    image: placeholderImage('hoodie'),
    gallery: [placeholderImage('hoodie')],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    options: [
      { label: 'Size', values: ['S', 'M', 'L', 'XL', 'XXL'] },
    ],
    highlights: [
      { title: 'Limited Drop', description: 'Released in restricted quantities.', icon: 'gem' },
      { title: 'Iconic Design', description: 'Classic Box Logo silhouette.', icon: 'star' },
      { title: 'Premium Quality', description: 'Heavyweight cotton construction.', icon: 'layers' },
      { title: 'Streetwear Staple', description: 'A collector wardrobe essential.', icon: 'users' },
    ],
  },
  {
    id: 'soccer-club-jersey',
    slug: 'special-edition-club-jersey',
    brand: 'Limited Football Collection',
    name: 'Special Edition Club Jersey',
    category: 'Soccer',
    description: 'Collector-focused special release inspired by limited club and collaboration jerseys.',
    price: 179,
    badge: 'LIMITED EDITION',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: false,
    image: placeholderImage('jersey'),
    gallery: [placeholderImage('jersey')],
    sizes: ['S', 'M', 'L', 'XL'],
    options: [
      { label: 'Size', values: ['S', 'M', 'L', 'XL'] },
    ],
    highlights: [
      { title: 'Limited Edition', description: 'Special club-inspired release.', icon: 'gem' },
      { title: 'Collector Focus', description: 'Not a standard retail jersey.', icon: 'star' },
      { title: 'Premium Material', description: 'Quality construction and fit.', icon: 'layers' },
      { title: 'Collaboration Design', description: 'Inspired by limited drops.', icon: 'users' },
    ],
  },
  {
    id: 'jordan-retro',
    slug: 'jordan-retro-limited-colourway',
    brand: 'Jordan',
    name: 'Jordan Retro Limited Colourway',
    category: 'Sneakers',
    description: 'A limited colourway of the iconic Jordan Retro.',
    price: 289,
    badge: 'LIMITED DROP',
    status: 'Coming Soon',
    featured: false,
    newArrival: true,
    sale: false,
    image: placeholderImage('sneaker'),
    gallery: [placeholderImage('sneaker')],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    options: [
      { label: 'Size', values: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'] },
    ],
    highlights: [
      { title: 'Limited Colourway', description: 'Exclusive colour release.', icon: 'gem' },
      { title: 'Iconic Silhouette', description: 'Classic Jordan Retro design.', icon: 'star' },
      { title: 'Premium Materials', description: 'Quality leather upper.', icon: 'layers' },
      { title: 'Collector Demand', description: 'Highly sought release.', icon: 'users' },
    ],
  },
  {
    id: 'kobe-performance-retro',
    slug: 'kobe-performance-retro-limited-release',
    brand: 'Nike',
    name: 'Kobe Performance Retro Limited Release',
    category: 'Sneakers',
    description: 'A limited release of the Kobe Performance Retro line.',
    price: 299,
    badge: 'HIGH DEMAND',
    status: 'Coming Soon',
    featured: true,
    newArrival: true,
    sale: false,
    image: placeholderImage('sneaker'),
    gallery: [placeholderImage('sneaker')],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13'],
    options: [
      { label: 'Size', values: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13'] },
    ],
    highlights: [
      { title: 'High Demand', description: 'Extremely sought release.', icon: 'gem' },
      { title: 'Performance Design', description: 'Built for the court.', icon: 'star' },
      { title: 'Premium Materials', description: 'Lightweight performance upper.', icon: 'layers' },
      { title: 'Limited Release', description: 'Restricted quantities.', icon: 'users' },
    ],
  },
  {
    id: 'swatch-collab',
    slug: 'swatch-limited-collaboration-watch',
    brand: 'Swatch',
    name: 'Limited Collaboration Watch',
    category: 'Watches',
    description: 'A limited collaboration watch from Swatch.',
    price: 329,
    badge: 'COLLABORATION',
    status: 'Coming Soon',
    featured: false,
    newArrival: false,
    sale: false,
    image: placeholderImage('watch'),
    gallery: [placeholderImage('watch')],
    options: [
      { label: 'Condition', values: ['New / Sealed'] },
      { label: 'Model', values: ['Collaboration Edition'] },
      { label: 'Edition', values: ['Limited'] },
    ],
    highlights: [
      { title: 'Collaboration Piece', description: 'Special partnership release.', icon: 'gem' },
      { title: 'New / Sealed', description: 'Unopened condition.', icon: 'shield' },
      { title: 'Limited Edition', description: 'Produced in restricted numbers.', icon: 'star' },
      { title: 'Collector Appeal', description: 'A unique wearable collectible.', icon: 'layers' },
    ],
  },
  {
    id: 'timex-collab',
    slug: 'timex-limited-edition-collaboration',
    brand: 'Timex',
    name: 'Limited Edition Collaboration',
    category: 'Watches',
    description: 'A limited edition collaboration watch from Timex.',
    price: 249,
    badge: 'LIMITED',
    status: 'Coming Soon',
    featured: false,
    newArrival: false,
    sale: false,
    image: placeholderImage('watch'),
    gallery: [placeholderImage('watch')],
    options: [
      { label: 'Condition', values: ['New / Sealed'] },
      { label: 'Model', values: ['Collaboration Edition'] },
      { label: 'Edition', values: ['Limited'] },
    ],
    highlights: [
      { title: 'Limited Edition', description: 'Restricted production run.', icon: 'gem' },
      { title: 'New / Sealed', description: 'Unopened condition.', icon: 'shield' },
      { title: 'Collaboration Design', description: 'Special partnership piece.', icon: 'star' },
      { title: 'Accessible Collectible', description: 'Entry-level luxury collectible.', icon: 'layers' },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getNewArrivals = () => products.filter((p) => p.newArrival);

export const getSaleProducts = () => products.filter((p) => p.compareAtPrice && p.compareAtPrice > p.price);

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const searchProducts = (query: string) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.subcategory?.toLowerCase().includes(q) ?? false)
  );
};

export const formatPrice = (price: number) => `$${price.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
