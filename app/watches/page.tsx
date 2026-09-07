'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getProductsByCategory } from '@/lib/products';

export default function WatchesPage() {
  const products = getProductsByCategory('Watches');
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Watches"
          description="Limited collaboration watches and accessible collector timepieces."
          heroLabel="Curated Drop"
          products={products}
          breadcrumb={['Home', 'Watches']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
