export type CategoryInfo = {
  name: string;
  slug: string;
  href: string;
  description: string;
  icon: string;
  tone: string;
  emoji: string;
};

export const categories: CategoryInfo[] = [
  { name: 'Trading Cards', slug: 'trading-cards', href: '/shop/trading-cards', description: 'Sealed boxes, special editions and limited releases for collectors.', icon: 'cards', tone: 'trading', emoji: '🃏' },
  { name: 'Sneakers', slug: 'sneakers', href: '/shop/sneakers', description: 'Limited colourways, retros and high-demand releases.', icon: 'sneaker', tone: 'sneaker', emoji: '👟' },
  { name: 'Apparel', slug: 'apparel', href: '/shop/apparel', description: 'Limited drops, collaborations and collector-grade streetwear.', icon: 'hoodie', tone: 'apparel', emoji: '👕' },
  { name: 'Soccer', slug: 'soccer', href: '/shop/soccer', description: 'Special edition jerseys and collector-focused football releases.', icon: 'jersey', tone: 'soccer', emoji: '⚽' },
  { name: 'Collectibles', slug: 'collectibles', href: '/shop/collectibles', description: 'Blind boxes, designer figures and hard-to-find collector pieces.', icon: 'blindbox', tone: 'collectibles', emoji: '🎁' },
  { name: 'Watches', slug: 'watches', href: '/shop/watches', description: 'Limited collaboration watches and accessible collector timepieces.', icon: 'watch', tone: 'watches', emoji: '⌚' },
];

export const secondaryCategories: CategoryInfo[] = [
  { name: 'New Arrivals', slug: 'new-arrivals', href: '/new-arrivals', description: 'Fresh drops, new releases and recently added collector pieces.', icon: 'new', tone: 'new', emoji: '✨' },
  { name: 'Sale', slug: 'sale', href: '/sale', description: 'Limited pieces at better prices. While they last.', icon: 'sale', tone: 'sale', emoji: '🏷️' },
];

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

export const toneMap: Record<string, string> = {
  trading: 'from-violet-50 to-violet-100',
  sneaker: 'from-blue-50 to-blue-100',
  apparel: 'from-rose-50 to-rose-100',
  soccer: 'from-emerald-50 to-emerald-100',
  collectibles: 'from-amber-50 to-amber-100',
  watches: 'from-slate-50 to-slate-200',
  new: 'from-indigo-50 to-indigo-100',
  sale: 'from-red-50 to-red-100',
};
