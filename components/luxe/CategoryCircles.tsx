'use client';

import Link from 'next/link';
import { categories, secondaryCategories, toneMap } from '@/lib/categories';
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
    <section ref={ref} className={`border-b border-[#e7eaf0] bg-white py-6 reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-navy">Shop by Category</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {allCats.map((cat) => {
            const catProducts = getProductsByCategory(cat.name);
            const firstProduct = catProducts[0];
            const variant = categoryVariantMap[cat.slug] ?? 'trading-card-box';
            return (
              <Link key={cat.slug} href={cat.href} className="flex flex-col items-center gap-2 group">
                <div
                  className={`category-card w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-[#e7eaf0] ${toneMap[cat.tone]}`}
                >
                  {firstProduct ? (
                    <ProductImage
                      image={firstProduct.image}
                      alt={firstProduct.name}
                      brand={firstProduct.brand}
                      name={firstProduct.name}
                      variant={variant}
                      className="w-full h-full"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${toneMap[cat.tone]} flex items-center justify-center`}>
                      <span className="cat-icon text-xl md:text-2xl">{cat.emoji}</span>
                    </div>
                  )}
                </div>
                <span className={`text-[11px] md:text-xs font-medium text-center transition-colors group-hover:text-violet ${cat.slug === 'sale' ? 'text-sale font-semibold' : 'text-navy'}`}>
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
