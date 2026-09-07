'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/products';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ProductGrid({
  title,
  subtitle,
  products,
}: {
  title: string;
  subtitle: string;
  products: Product[];
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-space">
      <div className="container-wide">
        <div className={`flex items-end justify-between mb-8 reveal ${visible ? 'revealed' : ''}`}>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          </div>
          <Link
            href="/"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-dark transition-colors"
          >
            View All Deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 reveal-stagger ${visible ? 'revealed' : ''}`}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="md:hidden mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet"
          >
            View All Deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
