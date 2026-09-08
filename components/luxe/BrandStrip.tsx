'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const brands = ['Rolex', 'Omega', 'Cartier', 'Nike', 'Louis Vuitton', 'Ray-Ban', 'Gucci', 'Prada', 'Tissot'];

export default function BrandStrip() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`brand-strip border-y border-[#e7eaf0] reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide brand-strip-inner">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 whitespace-nowrap">Featured Brands</p>
        <div className="marquee">
          <div className="marquee-mask-l" />
          <div className="marquee-mask-r" />
          <div className="marquee-track">
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="font-display text-base md:text-lg font-bold text-gray-400 hover:text-navy transition-colors cursor-default whitespace-nowrap">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
