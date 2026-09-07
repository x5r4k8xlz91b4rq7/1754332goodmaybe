'use client';

import { notFound } from 'next/navigation';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import ProductBreadcrumb from '@/components/luxe/ProductBreadcrumb';
import ProductGallery from '@/components/luxe/ProductGallery';
import ProductInfo from '@/components/luxe/ProductInfo';
import TrustPanel from '@/components/luxe/TrustPanel';
import PriceHistory from '@/components/luxe/PriceHistory';
import KeyHighlights from '@/components/luxe/KeyHighlights';
import CompleteTheLook from '@/components/luxe/CompleteTheLook';
import ProductGrid from '@/components/luxe/ProductGrid';
import { getProduct, products } from '@/lib/products';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const similar = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 6);
  const similarProducts = similar.length > 0 ? similar : products.filter((p) => p.slug !== product.slug).slice(0, 6);

  return (
    <CartProvider>
      <Header />
      <main className="section-space page-fade">
        <div className="container-wide">
          {/* Breadcrumb */}
          <ProductBreadcrumb
            items={['Home', product.category, product.brand, product.name]}
          />

          {/* Main product area */}
          <div className="grid lg:grid-cols-12 gap-8 mt-6">
            {/* Left: gallery */}
            <div className="lg:col-span-5">
              <ProductGallery product={product} />
            </div>

            {/* Center: info */}
            <div className="lg:col-span-4">
              <ProductInfo product={product} />
            </div>

            {/* Right: sidebar */}
            <div className="lg:col-span-3">
              <TrustPanel />
            </div>
          </div>

          {/* Price history + highlights */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <PriceHistory />
            {product.highlights && <KeyHighlights highlights={product.highlights} />}
          </div>

          {/* Complete the look */}
          <div className="mt-8">
            <CompleteTheLook />
          </div>

          {/* Similar deals */}
          <div className="mt-12">
            <ProductGrid title="Similar Deals" subtitle="You might also like these curated picks." products={similarProducts} />
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
