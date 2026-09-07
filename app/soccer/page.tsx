'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getProductsByCategory } from '@/lib/products';

export default function SoccerPage() {
  const products = getProductsByCategory('Soccer');
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Soccer"
          description="Special edition jerseys and collector-focused football releases."
          heroLabel="Curated Drop"
          products={products}
          breadcrumb={['Home', 'Soccer']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
