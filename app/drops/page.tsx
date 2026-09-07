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
          description="The strongest combination of featured, new arrival and high-scarcity pieces. These are the most anticipated releases on DealVault Luxe."
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
