'use client';

const brands = ['Rolex', 'Omega', 'Cartier', 'Nike', 'Louis Vuitton', 'Ray-Ban', 'Gucci', 'Prada', 'Tissot'];

export default function BrandStrip() {
  return (
    <section className="py-12 border-y border-[#e7eaf0]">
      <div className="container-wide">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8">
          Featured Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg md:text-xl font-bold text-gray-400 hover:text-navy transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
