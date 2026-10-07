import { getProduct, type Product } from './products';

export type CategoryInfo = {
  name: string;
  slug: string;
  href: string;
  description: string;
  representativeSlug?: string;
  variant: string;
};

export const categories: CategoryInfo[] = [
  { name: 'Sneakers', slug: 'sneakers', href: '/shop/sneakers', description: 'Travis Scott, Jordan 4s, Kobe Protros and the collabs everyone is chasing.', representativeSlug: 'travis-scott-air-jordan-1-low-og-shy-pink', variant: 'sneaker' },
  { name: 'Trading Cards', slug: 'trading-cards', href: '/shop/trading-cards', description: 'Sealed Pokémon, One Piece, Panini Prizm and Topps Chrome.', representativeSlug: 'pokemon-prismatic-evolutions-elite-trainer-box', variant: 'trading-card-box' },
  { name: 'Apparel', slug: 'apparel', href: '/shop/apparel', description: 'Supreme, Denim Tears, Corteiz, Stüssy and the pieces that sell out first.', representativeSlug: 'supreme-box-logo-hooded-sweatshirt', variant: 'hoodie' },
  { name: 'Soccer', slug: 'soccer', href: '/shop/soccer', description: 'Cactus Jack Barça, reissues, retro icons and special-edition kits.', representativeSlug: 'cactus-jack-fc-barcelona-limited-edition-jersey', variant: 'jersey' },
  { name: 'Collectibles', slug: 'collectibles', href: '/shop/collectibles', description: 'LABUBU, SKULLPANDA, CRYBABY, BE@RBRICK and designer vinyl.', representativeSlug: 'popmart-the-monsters-big-into-energy-blind-box', variant: 'plush' },
  { name: 'Watches', slug: 'watches', href: '/shop/watches', description: 'MoonSwatch, Swatch and Timex collabs, and G-SHOCK editions.', representativeSlug: 'omega-swatch-moonswatch-mission-to-the-moon', variant: 'watch' },
];

export const secondaryCategories: CategoryInfo[] = [
  { name: 'New Arrivals', slug: 'new-arrivals', href: '/new-arrivals', description: 'Fresh drops, new releases and recently added collector pieces.', representativeSlug: 'jordan-4-nigel-sylvester-brick-after-brick', variant: 'sneaker' },
  { name: 'Sale', slug: 'sale', href: '/sale', description: 'Confirmed reductions on listed pieces, when we have them.', variant: 'sports-card-box' },
];

export const getCategoryProduct = (cat: CategoryInfo): Product | undefined =>
  cat.representativeSlug ? getProduct(cat.representativeSlug) : undefined;

export const allNavLinks = [
  { label: 'Drops', href: '/drops' },
  { label: 'Trading Cards', href: '/shop/trading-cards' },
  { label: 'Sneakers', href: '/shop/sneakers' },
  { label: 'Apparel', href: '/shop/apparel' },
  { label: 'Soccer', href: '/shop/soccer' },
  { label: 'Collectibles', href: '/shop/collectibles' },
  { label: 'Watches', href: '/shop/watches' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Sale', href: '/sale', sale: true },
];
