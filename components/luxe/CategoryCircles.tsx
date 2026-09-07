'use client';

import Link from 'next/link';
import { categories } from '@/lib/categories';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const toneMap: Record<string, string> = {
  watch: 'from-blue-50 to-blue-100',
  sneaker: 'from-violet-50 to-violet-100',
  bag: 'from-amber-50 to-amber-100',
  sunglasses: 'from-cyan-50 to-cyan-100',
  accessories: 'from-rose-50 to-rose-100',
  tech: 'from-slate-50 to-slate-200',
  fragrance: 'from-emerald-50 to-emerald-100',
  sale: 'from-red-50 to-red-100',
  new: 'from-indigo-50 to-indigo-100',
};

export default function CategoryCircles() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-space border-y border-[#e7eaf0] bg-[#f6f8fb] reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide">
        <h2 className="font-display text-2xl font-bold text-navy mb-1">Shop by Category</h2>
        <p className="text-sm text-gray-500 mb-8">Explore our curated luxury departments</p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href="/" className="flex flex-col items-center gap-3 group">
              <div
                className={`category-card w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${toneMap[cat.tone]} flex items-center justify-center border border-white`}
              >
                <span className="cat-icon text-2xl md:text-3xl">{cat.icon}</span>
              </div>
              <span className={`text-xs md:text-sm font-medium text-center transition-colors group-hover:text-violet ${cat.name === 'Sale' ? 'text-sale font-semibold' : 'text-navy'}`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
