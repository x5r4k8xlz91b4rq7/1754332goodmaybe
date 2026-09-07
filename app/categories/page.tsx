'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/luxe/Header';
import Footer from '@/components/luxe/Footer';
import CartDrawer from '@/components/luxe/CartDrawer';
import { categories, secondaryCategories, toneMap } from '@/lib/categories';
import { getProductsByCategory, getNewArrivals, getSaleProducts } from '@/lib/products';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function CategoriesPage() {
  const { ref, visible } = useScrollReveal();

  const getCount = (slug: string) => {
    if (slug === 'new-arrivals') return getNewArrivals().length;
    if (slug === 'sale') return getSaleProducts().length;
    return getProductsByCategory(categories.find((c) => c.slug === slug)?.name ?? '').length;
  };

  return (
    <CartProvider>
      <Header />
      <main className="section-space page-fade">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link href="/" className="hover:text-violet transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span className="text-navy font-medium">All Categories</span>
          </nav>

          {/* Hero */}
          <div className="pt-6 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-light text-violet text-xs font-semibold uppercase tracking-wider">
              Explore Collections
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy mt-4">All Categories</h1>
            <p className="text-base text-gray-500 mt-3 max-w-2xl">Browse every DealVault Luxe collection. From sealed trading card boxes to limited collaboration watches.</p>
          </div>

          {/* Primary categories */}
          <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger ${visible ? 'revealed' : ''}`}>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="group rounded-2xl border border-[#e7eaf0] overflow-hidden hover:border-violet/30 transition-all duration-200 hover:shadow-lg"
              >
                <div className={`h-40 bg-gradient-to-br ${toneMap[cat.tone]} flex items-center justify-center text-5xl`}>
                  {cat.emoji}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy group-hover:text-violet transition-colors">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-400">{getCount(cat.slug)} listings</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-violet">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Secondary categories */}
          <div className="mt-5">
            <div className="grid md:grid-cols-2 gap-5">
              {secondaryCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={cat.href}
                  className={`group rounded-2xl border border-[#e7eaf0] overflow-hidden hover:border-violet/30 transition-all duration-200 hover:shadow-lg ${cat.slug === 'sale' ? 'border-sale/20' : ''}`}
                >
                  <div className="flex items-center gap-4 p-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${toneMap[cat.tone]} flex items-center justify-center text-3xl shrink-0`}>
                      {cat.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-display text-lg font-bold group-hover:text-violet transition-colors ${cat.slug === 'sale' ? 'text-sale' : 'text-navy'}`}>{cat.name}</h3>
                      <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">{cat.description}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-xs text-gray-400">{getCount(cat.slug)} listings</span>
                        <span className="text-gray-300">·</span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-violet">
                          Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
