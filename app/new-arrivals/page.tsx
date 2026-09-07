'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getNewArrivals } from '@/lib/products';

export default function NewArrivalsPage() {
  const products = getNewArrivals();
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="New Arrivals"
          description="Fresh drops, new releases and recently added collector pieces."
          heroLabel="Just Dropped"
          products={products}
          breadcrumb={['Home', 'New Arrivals']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
