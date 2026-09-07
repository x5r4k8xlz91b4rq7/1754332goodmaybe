'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/products';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ProductCarousel({
  title,
  subtitle,
  products,
  viewAllHref,
}: {
  title: string;
  subtitle: string;
  products: Product[];
  viewAllHref: string;
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
            href={viewAllHref}
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-dark transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className={`flex gap-4 md:gap-5 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 reveal-stagger ${visible ? 'revealed' : ''} carousel-scroll`}>
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-[60vw] sm:w-[280px] md:w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="md:hidden mt-4 text-center">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
