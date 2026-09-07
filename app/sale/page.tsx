'use client';

import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { getSaleProducts } from '@/lib/products';

export default function SalePage() {
  const products = getSaleProducts();
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title="DealVault Sale"
          description="Limited pieces. Better prices. While they last."
          heroLabel="On Sale"
          products={products}
          breadcrumb={['Home', 'Sale']}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
