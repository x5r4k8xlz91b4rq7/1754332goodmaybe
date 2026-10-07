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
import KeyHighlights from '@/components/luxe/KeyHighlights';
import ProductGrid from '@/components/luxe/ProductGrid';
import { getProduct, getSimilarProducts } from '@/lib/products';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const similarProducts = getSimilarProducts(params.slug);

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

          {product.highlights && (
            <div className="mt-8">
              <KeyHighlights highlights={product.highlights} />
            </div>
          )}

          {/* Similar deals */}
          <div className="mt-12">
            <ProductGrid title="You Might Also Like" subtitle="More from the same corner of the culture." products={similarProducts} />
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
