'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getDropsProducts } from '@/lib/products';

export default function DropsPage() {
  const products = getDropsProducts();

  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Drops"
          description="High-demand releases and hard-to-find pieces. The most anticipated listings on Vanta Row Luxe."
          heroLabel="Featured Drops"
          products={products}
          breadcrumb={['Home', 'Drops']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
