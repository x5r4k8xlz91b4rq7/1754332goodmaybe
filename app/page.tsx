'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Hero from '@/components/luxe/Hero';
import CategoryCircles from '@/components/luxe/CategoryCircles';
import ProductGrid from '@/components/luxe/ProductGrid';
import ProductCarousel from '@/components/luxe/ProductCarousel';
import BrandStrip from '@/components/luxe/BrandStrip';
import LuxeBanner from '@/components/luxe/LuxeBanner';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import {
  getTrendingProducts,
  getNewArrivals,
  getVaultProducts,
  getProductsByCategory,
} from '@/lib/products';

export default function Home() {
  const trending = getTrendingProducts().slice(0, 8);
  const justDropped = getNewArrivals().slice(0, 6);
  const vault = getVaultProducts().slice(0, 6);
  const tradingCards = getProductsByCategory('Trading Cards').slice(0, 6);
  const sneakers = getProductsByCategory('Sneakers').slice(0, 6);
  const collectibles = getProductsByCategory('Collectibles').slice(0, 6);

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <CategoryCircles />
        <ProductGrid
          title="Trending Now"
          subtitle="The pieces everyone is watching right now."
          products={trending}
        />
        <ProductGrid
          title="Just Dropped"
          subtitle="Fresh arrivals, newly listed collector pieces."
          products={justDropped}
        />
        <ProductGrid
          title="The Vault"
          subtitle="High-scarcity items for serious collectors."
          products={vault}
        />
        <ProductCarousel
          title="Trading Cards"
          subtitle="Sealed boxes, special editions and limited releases."
          products={tradingCards}
          viewAllHref="/shop/trading-cards"
        />
        <ProductCarousel
          title="Sneakers"
          subtitle="Limited colourways, retros and high-demand releases."
          products={sneakers}
          viewAllHref="/shop/sneakers"
        />
        <BrandStrip />
        <ProductCarousel
          title="Collectibles"
          subtitle="Blind boxes, designer figures and hard-to-find pieces."
          products={collectibles}
          viewAllHref="/shop/collectibles"
        />
        <LuxeBanner />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
