'use client';

import Link from 'next/link';
import { categories, secondaryCategories, toneMap } from '@/lib/categories';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function CategoryCircles() {
  const { ref, visible } = useScrollReveal();
  const allCats = [...categories, ...secondaryCategories];

  return (
    <section ref={ref} className={`section-space border-y border-[#e7eaf0] bg-[#f6f8fb] reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide">
        <h2 className="font-display text-2xl font-bold text-navy mb-1">Shop by Category</h2>
        <p className="text-sm text-gray-500 mb-8">Explore our curated luxury departments</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {allCats.map((cat) => (
            <Link key={cat.slug} href={cat.href} className="flex flex-col items-center gap-3 group">
              <div
                className={`category-card w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${toneMap[cat.tone]} flex items-center justify-center border border-white`}
              >
                <span className="cat-icon text-2xl md:text-3xl">{cat.emoji}</span>
              </div>
              <span className={`text-xs md:text-sm font-medium text-center transition-colors group-hover:text-violet ${cat.slug === 'sale' ? 'text-sale font-semibold' : 'text-navy'}`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
