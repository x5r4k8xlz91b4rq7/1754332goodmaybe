'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getProductsByCategory } from '@/lib/products';

export default function TradingCardsPage() {
  const products = getProductsByCategory('Trading Cards');
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="Trading Cards"
          description="Sealed boxes, special editions and limited releases selected for collectors."
          heroLabel="Curated Drop"
          products={products}
          breadcrumb={['Home', 'Trading Cards']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
