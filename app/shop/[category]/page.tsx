'use client';

import { notFound } from 'next/navigation';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import CategoryPage from '@/components/luxe/CategoryPage';
import { categories } from '@/lib/categories';
import { getProductsByCategory } from '@/lib/products';

const categoryMeta: Record<string, { title: string; description: string; heroLabel: string }> = {
  'trading-cards': {
    title: 'Trading Cards',
    description: 'Sealed boxes, special editions and limited releases selected for collectors.',
    heroLabel: 'Curated Drop',
  },
  sneakers: {
    title: 'Sneakers',
    description: 'Limited colourways, retros and high-demand releases.',
    heroLabel: 'Curated Drop',
  },
  apparel: {
    title: 'Apparel',
    description: 'Limited drops, collaborations and collector-grade streetwear.',
    heroLabel: 'Curated Drop',
  },
  soccer: {
    title: 'Soccer',
    description: 'Special edition jerseys and collector-focused football releases.',
    heroLabel: 'Curated Drop',
  },
  collectibles: {
    title: 'Collectibles',
    description: 'Blind boxes, designer figures and hard-to-find collector pieces.',
    heroLabel: 'Curated Drop',
  },
  watches: {
    title: 'Watches',
    description: 'Limited collaboration watches and accessible collector timepieces.',
    heroLabel: 'Curated Drop',
  },
};

export default function ShopCategoryRoute({ params }: { params: { category: string } }) {
  const slug = params.category;
  const meta = categoryMeta[slug];
  if (!meta) notFound();

  const cat = categories.find((c) => c.slug === slug);
  const products = getProductsByCategory(cat?.name ?? meta.title);

  return (
    <CartProvider>
      <Header />
      <main className="section-space">
        <CategoryPage
          title={meta.title}
          description={meta.description}
          heroLabel={meta.heroLabel}
          products={products}
          breadcrumb={['Home', 'Shop', meta.title]}
          categorySlug={slug}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
