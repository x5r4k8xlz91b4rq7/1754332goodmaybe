'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Hero from '@/components/luxe/Hero';
import CategoryCircles from '@/components/luxe/CategoryCircles';
import ProductGrid from '@/components/luxe/ProductGrid';
import BrandStrip from '@/components/luxe/BrandStrip';
import LuxeBanner from '@/components/luxe/LuxeBanner';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import { products } from '@/lib/products';

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <CategoryCircles />
        <ProductGrid
          title="Featured Drops"
          subtitle="Curated collector picks at unbeatable prices."
          products={featured}
        />
        <BrandStrip />
        <LuxeBanner />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
