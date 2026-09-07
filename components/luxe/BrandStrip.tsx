'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const brands = ['Rolex', 'Omega', 'Cartier', 'Nike', 'Louis Vuitton', 'Ray-Ban', 'Gucci', 'Prada', 'Tissot'];

export default function BrandStrip() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-12 border-y border-[#e7eaf0] reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8">
          Featured Brands
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-mask-l" />
        <div className="marquee-mask-r" />
        <div className="marquee-track">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="font-display text-lg md:text-xl font-bold text-gray-400 hover:text-navy transition-colors cursor-default whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
