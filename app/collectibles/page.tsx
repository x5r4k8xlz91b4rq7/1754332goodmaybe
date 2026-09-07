'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getProductsByCategory } from '@/lib/products';

export default function CollectiblesPage() {
  const products = getProductsByCategory('Collectibles');
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Collectibles"
          description="Blind boxes, designer figures and hard-to-find collector pieces."
          heroLabel="Curated Drop"
          products={products}
          breadcrumb={['Home', 'Collectibles']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
