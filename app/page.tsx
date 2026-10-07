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
  getFeaturedProducts,
  getTrendingProducts,
  getNewArrivals,
  getProductsByCategory,
} from '@/lib/products';

export default function Home() {
  const featured = getFeaturedProducts();
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const trending = getTrendingProducts().filter((p) => !featuredSlugs.has(p.slug)).slice(0, 6);
  const justDropped = getNewArrivals().slice(0, 8);
  const sneakers = getProductsByCategory('Sneakers').slice(0, 8);
  const tradingCards = getProductsByCategory('Trading Cards').slice(0, 8);
  const apparel = getProductsByCategory('Apparel').slice(0, 8);
  const soccer = getProductsByCategory('Soccer').slice(0, 8);
  const collectibles = getProductsByCategory('Collectibles').slice(0, 8);
  const watches = getProductsByCategory('Watches').slice(0, 8);

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <CategoryCircles />
        <ProductCarousel
          title="Featured"
          subtitle="The pieces people are searching for right now."
          products={featured}
          viewAllHref="/drops"
        />
        <ProductGrid
          title="Trending Now"
          subtitle="Across sneakers, cards, apparel, football, collectibles and watches."
          products={trending}
        />
        <BrandStrip />
        <ProductCarousel
          title="Just Dropped"
          subtitle="Recent and upcoming releases on our radar."
          products={justDropped}
          viewAllHref="/new-arrivals"
        />
        <ProductCarousel
          title="Sneakers"
          subtitle="Travis Scott, Jordan 4s, Kobe Protros and the collabs everyone is chasing."
          products={sneakers}
          viewAllHref="/shop/sneakers"
        />
        <ProductCarousel
          title="Trading Cards"
          subtitle="Sealed Pokémon, One Piece, Prizm and Topps Chrome."
          products={tradingCards}
          viewAllHref="/shop/trading-cards"
        />
        <ProductCarousel
          title="Apparel"
          subtitle="Supreme, Denim Tears, Corteiz and Stüssy."
          products={apparel}
          viewAllHref="/shop/apparel"
        />
        <ProductCarousel
          title="Soccer"
          subtitle="Cactus Jack Barça, reissues and retro icons."
          products={soccer}
          viewAllHref="/shop/soccer"
        />
        <ProductCarousel
          title="Collectibles"
          subtitle="LABUBU, SKULLPANDA, BE@RBRICK and designer vinyl."
          products={collectibles}
          viewAllHref="/shop/collectibles"
        />
        <ProductCarousel
          title="Watches"
          subtitle="MoonSwatch, Swatch and Timex collabs, and G-SHOCK."
          products={watches}
          viewAllHref="/shop/watches"
        />
        <LuxeBanner />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
