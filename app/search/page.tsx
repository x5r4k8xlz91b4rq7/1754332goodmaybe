'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { searchProducts } from '@/lib/products';

function SearchContent() {
  const params = useSearchParams();
  const query = params.get('q') ?? '';
  const results = searchProducts(query);

  return (
    <CategoryPage
      title={`Search: "${query}"`}
      description={results.length > 0 ? `${results.length} results found for "${query}".` : `No results found for "${query}". Try a different search.`}
      heroLabel="Search Results"
      products={results}
      breadcrumb={['Home', 'Search', query]}
    />
  );
}

export default function SearchPage() {
  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <Suspense fallback={<div className="container-wide pt-10 text-gray-500">Loading...</div>}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
