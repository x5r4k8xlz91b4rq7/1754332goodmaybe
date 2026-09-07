'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getProductsByCategory } from '@/lib/products';

export default function SneakersPage() {
  const products = getProductsByCategory('Sneakers');
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Sneakers"
          description="Limited colourways, retros and high-demand releases for serious collectors."
          heroLabel="Curated Drop"
          products={products}
          breadcrumb={['Home', 'Sneakers']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
