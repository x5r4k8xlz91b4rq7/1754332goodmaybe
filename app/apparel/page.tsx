'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getProductsByCategory } from '@/lib/products';

export default function ApparelPage() {
  const products = getProductsByCategory('Apparel');
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Apparel"
          description="Limited drops, collaborations and collector-grade streetwear."
          heroLabel="Curated Drop"
          products={products}
          breadcrumb={['Home', 'Apparel']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
