import { sneakers } from './catalog/sneakers';
import { tradingCards } from './catalog/trading-cards';
import { apparel } from './catalog/apparel';
import { soccer } from './catalog/soccer';
import { collectibles } from './catalog/collectibles';
import { watches } from './catalog/watches';

export type ProductCategory =
  | 'Trading Cards'
  | 'Sneakers'
  | 'Apparel'
  | 'Soccer'
  | 'Collectibles'
  | 'Watches';

export type ProductStatus = 'Available' | 'Coming Soon' | 'Sourcing';

export type Product = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  price: number | null;
  compareAtPrice?: number;
  badge: string;
  status: ProductStatus;
  featured: boolean;
  newArrival: boolean;
  highScarcity: boolean;
  trending: boolean;
  image: string | null;
  gallery: string[];
  tags: string[];
  productType?: string;
  collection?: string;
  colourway?: string;
  condition?: string;
  release?: string;
  sizes?: string[];
  options?: { label: string; values: string[] }[];
  highlights?: { title: string; description: string; icon: string }[];
};

export const products: Product[] = [
  ...sneakers,
  ...tradingCards,
  ...apparel,
  ...soccer,
  ...collectibles,
  ...watches,
];

const categoryOrder: ProductCategory[] = ['Sneakers', 'Trading Cards', 'Apparel', 'Soccer', 'Collectibles', 'Watches'];

const featuredOrder = [
  'travis-scott-air-jordan-1-low-og-shy-pink',
  'jordan-4-nigel-sylvester-brick-after-brick',
  'pokemon-prismatic-evolutions-elite-trainer-box',
  'supreme-box-logo-hooded-sweatshirt',
  'cactus-jack-fc-barcelona-limited-edition-jersey',
  'popmart-the-monsters-big-into-energy-blind-box',
  'omega-swatch-moonswatch-mission-to-the-moon',
  'denim-tears-cotton-wreath-hoodie',
];

export const isPurchasable = (p: Product) => p.status === 'Available' && p.price !== null;

export const discountPercent = (p: Product) =>
  p.price !== null && p.compareAtPrice && p.compareAtPrice > p.price
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

export const placeholderVariant = (p: Product) =>
  p.gallery.find((g) => !g.startsWith('/')) ?? 'trading-card-box';

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = () =>
  featuredOrder
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));

export const getTrendingProducts = () => {
  const buckets = categoryOrder.map((c) => products.filter((p) => p.trending && p.category === c));
  const result: Product[] = [];
  const longest = Math.max(...buckets.map((b) => b.length));
  for (let i = 0; i < longest; i++) {
    buckets.forEach((b) => b[i] && result.push(b[i]));
  }
  return result;
};

export const getNewArrivals = () => products.filter((p) => p.newArrival);

export const getSaleProducts = () => products.filter((p) => discountPercent(p) > 0);

export const getVaultProducts = () => products.filter((p) => p.highScarcity);

export const getDropsProducts = () =>
  products.filter((p) => p.highScarcity && (p.featured || p.newArrival));

export const getSimilarProducts = (slug: string) => {
  const product = getProduct(slug);
  if (!product) return products.slice(0, 6);
  const similar = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 6);
  return similar.length > 0
    ? similar
    : products.filter((p) => p.slug !== slug).slice(0, 6);
};

export const searchProducts = (query: string) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.subcategory?.toLowerCase().includes(q) ?? false) ||
      (p.collection?.toLowerCase().includes(q) ?? false) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
};

export const formatPrice = (price: number | null) => {
  if (price === null) return 'Price Coming Soon';
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
};
