export type Product = {
  slug: string;
  brand: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  badge: string;
  image: string;
  gallery: string[];
  colors: { label: string; image: string }[];
  sizes?: string[];
  highlights?: { title: string; description: string; icon: string }[];
};

const sneakerImages = [
  'https://images.pexels.com/photos/19869760/pexels-photo-19869760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/19869759/pexels-photo-19869759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/19869753/pexels-photo-19869753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const watchImage = 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const bagImage = 'https://images.pexels.com/photos/27046143/pexels-photo-27046143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const sunglassesImage = 'https://images.pexels.com/photos/32677231/pexels-photo-32677231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const fragranceImage = 'https://images.pexels.com/photos/16722498/pexels-photo-16722498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const products: Product[] = [
  {
    slug: 'nike-air-force-1-gs-black-dutch-blue', brand: 'NIKE', name: 'Nike Air Force 1 GS Black / Dutch Blue - Court Blue', subtitle: 'Dutch Blue - Court Blue', category: 'Sneakers', price: 80, originalPrice: 105, discount: 20, badge: 'Verified Deal', image: sneakerImages[0], gallery: sneakerImages,
    colors: [{ label: 'Court Blue', image: sneakerImages[0] }, { label: 'Pink Foam', image: sneakerImages[1] }, { label: 'Sail', image: sneakerImages[2] }, { label: 'White', image: sneakerImages[1] }],
    sizes: ['4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    highlights: [{ title: 'Limited Edition', description: 'Harder to find. More to collect.', icon: 'gem' }, { title: 'Classic Style', description: 'Iconic AF1 design.', icon: 'star' }, { title: 'Premium Materials', description: 'Leather upper with lasting comfort.', icon: 'layers' }, { title: 'Junior Sizing', description: 'Designed for younger sneaker fans.', icon: 'users' }],
  },
  { slug: 'rolex-submariner-date', brand: 'ROLEX', name: 'Rolex Submariner Date', subtitle: '126610LN', category: 'Watches', price: 10995, originalPrice: 16250, discount: 32, badge: 'Verified Deal', image: watchImage, gallery: [watchImage], colors: [{ label: 'Black', image: watchImage }] },
  { slug: 'ray-ban-aviator-classic', brand: 'RAY-BAN', name: 'Ray-Ban Aviator Classic', subtitle: 'RB3025', category: 'Sunglasses', price: 112, originalPrice: 150, discount: 25, badge: 'Same-Day Shipping', image: sunglassesImage, gallery: [sunglassesImage], colors: [{ label: 'Gold / Green', image: sunglassesImage }] },
  { slug: 'air-jordan-4-retro-military-black', brand: 'JORDAN', name: 'Air Jordan 4 Retro', subtitle: 'Military Black', category: 'Sneakers', price: 205, originalPrice: 250, discount: 18, badge: 'Verified Deal', image: sneakerImages[2], gallery: [sneakerImages[2]], colors: [{ label: 'Military Black', image: sneakerImages[2] }] },
  { slug: 'louis-vuitton-neverfull-mm', brand: 'LOUIS VUITTON', name: 'Louis Vuitton Neverfull MM', subtitle: 'Monogram', category: 'Bags', price: 1799, originalPrice: 2500, discount: 28, badge: 'Verified Deal', image: bagImage, gallery: [bagImage], colors: [{ label: 'Monogram', image: bagImage }] },
  { slug: 'omega-speedmaster-professional', brand: 'OMEGA', name: 'Omega Speedmaster', subtitle: 'Professional', category: 'Watches', price: 4995, originalPrice: 8500, discount: 41, badge: 'Same-Day Shipping', image: watchImage, gallery: [watchImage], colors: [{ label: 'Steel', image: watchImage }] },
  { slug: 'nike-dunk-low-university-blue', brand: 'NIKE', name: 'Nike Dunk Low', subtitle: 'University Blue', category: 'Sneakers', price: 88, originalPrice: 130, discount: 32, badge: 'Verified Deal', image: sneakerImages[1], gallery: [sneakerImages[1]], colors: [{ label: 'University Blue', image: sneakerImages[1] }] },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug) ?? products[0];

export const formatPrice = (price: number) => `$${price.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
