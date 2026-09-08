'use client';

import Link from 'next/link';
import { categories, secondaryCategories } from '@/lib/categories';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import ProductImage from './ProductImage';
import { getProductsByCategory } from '@/lib/products';

const categoryVariantMap: Record<string, string> = {
  'trading-cards': 'trading-card-box',
  'sneakers': 'sneaker',
  'apparel': 'hoodie',
  'soccer': 'jersey',
  'collectibles': 'blind-box-case',
  'watches': 'watch',
  'new-arrivals': 'trading-card-pack',
  'sale': 'sports-card-box',
};

export default function CategoryCircles() {
  const { ref, visible } = useScrollReveal();
  const allCats = [...categories, ...secondaryCategories];

  return (
    <section ref={ref} className={`border-b border-[#e7eaf0] bg-white py-4 reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-display text-sm font-bold text-navy whitespace-nowrap hidden md:block">Shop by Category</h2>
          <div className="flex flex-1 justify-evenly gap-3 md:gap-4">
            {allCats.map((cat) => {
              const catProducts = getProductsByCategory(cat.name);
              const firstProduct = catProducts[0];
              const variant = categoryVariantMap[cat.slug] ?? 'trading-card-box';
              return (
                <Link key={cat.slug} href={cat.href} className="flex flex-col items-center gap-1.5 group flex-1 min-w-0">
                  <div
                    className={`category-card w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-[#e7eaf0] bg-[#f5f6f8]`}
                  >
                    <ProductImage
                      image={firstProduct?.image ?? null}
                      alt={firstProduct?.name ?? cat.name}
                      brand={firstProduct?.brand}
                      name={firstProduct?.name}
                      variant={variant}
                      className="w-full h-full"
                    />
                  </div>
                  <span className={`text-[10px] md:text-[11px] font-medium text-center transition-colors group-hover:text-violet leading-tight ${cat.slug === 'sale' ? 'text-sale font-semibold' : 'text-navy'}`}>
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
