'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, SlidersHorizontal, LayoutGrid, LayoutList } from 'lucide-react';
import { Product, formatPrice, placeholderVariant } from '@/lib/products';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import ProductCard from './ProductCard';
import ProductImage from './ProductImage';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';

type FilterConfig = {
  label: string;
  options: string[];
};

const unique = (values: (string | undefined)[]) =>
  Array.from(new Set(values.filter((v): v is string => Boolean(v))));

function getFilterConfig(products: Product[], categorySlug?: string): FilterConfig[] {
  const configs: FilterConfig[] = [];
  if (categorySlug) configs.push({ label: 'Line', options: unique(products.map((p) => p.subcategory)) });
  if (categorySlug === 'trading-cards') configs.push({ label: 'Product Type', options: unique(products.map((p) => p.productType)) });
  if (categorySlug === 'collectibles' || categorySlug === 'watches') configs.push({ label: 'Collection', options: unique(products.map((p) => p.collection)) });
  if (categorySlug === 'sneakers' || categorySlug === 'apparel' || categorySlug === 'soccer') {
    configs.push({ label: 'Size', options: unique(products.flatMap((p) => p.sizes ?? [])) });
  }
  configs.push({ label: 'Status', options: unique(products.map((p) => p.status)) });
  return configs.filter((c) => c.options.length > 0);
}

export default function CategoryPage({
  title,
  description,
  heroLabel,
  products,
  breadcrumb,
  categorySlug,
}: {
  title: string;
  description: string;
  heroLabel: string;
  products: Product[];
  breadcrumb: string[];
  categorySlug?: string;
}) {
  const { ref, visible } = useScrollReveal();
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, Set<string>>>({});

  const filterConfigs = useMemo(() => getFilterConfig(products, categorySlug), [products, categorySlug]);

  const toggleFilter = (group: string, value: string) => {
    setActiveFilters((prev) => {
      const next = { ...prev };
      const set = new Set(next[group] ?? []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      next[group] = set;
      return next;
    });
  };

  const filtered = useMemo(() => {
    let result = products;
    Object.entries(activeFilters).forEach(([group, values]) => {
      if (values.size === 0) return;
      result = result.filter((p) => {
        if (group === 'Line') return values.has(p.subcategory ?? '');
        if (group === 'Status') return values.has(p.status);
        if (group === 'Size') return p.sizes?.some((s) => values.has(s));
        if (group === 'Product Type') return values.has(p.productType ?? '');
        if (group === 'Collection') return values.has(p.collection ?? '');
        return true;
      });
    });
    return result;
  }, [products, activeFilters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortBy) {
      case 'price-low': return arr.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
      case 'price-high': return arr.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
      case 'newest': return arr.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
      default: return arr.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [filtered, sortBy]);

  return (
    <div className="page-fade">
      <div className="container-wide pt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <Link href={i === 0 ? '/' : '#'} className="hover:text-violet transition-colors">{item}</Link>
              {i < breadcrumb.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-gray-300" />}
            </span>
          ))}
        </nav>
      </div>

      {/* Hero */}
      <div className="container-wide pt-6 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-light text-violet text-xs font-semibold uppercase tracking-wider">
          {heroLabel}
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy mt-4">{title}</h1>
        <p className="text-base text-gray-500 mt-3 max-w-2xl">{description}</p>
      </div>

      {/* Toolbar */}
      <div className="container-wide border-t border-b border-[#e7eaf0] py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{sorted.length} items</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 h-10 px-4 rounded-xl border border-[#e7eaf0] text-sm font-medium text-navy hover:bg-[#f6f8fb] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-10 px-4 rounded-xl border border-[#e7eaf0] text-sm font-medium text-navy bg-white outline-none cursor-pointer hover:bg-[#f6f8fb] transition-colors"
            >
              <option value="featured">Sort: Featured</option>
              <option value="newest">Sort: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="hidden md:flex items-center gap-1 border border-[#e7eaf0] rounded-xl p-1">
              <button
                onClick={() => setView('grid')}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${view === 'grid' ? 'bg-violet text-white' : 'text-gray-400 hover:text-navy'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${view === 'list' ? 'bg-violet text-white' : 'text-gray-400 hover:text-navy'}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-wide py-8">
        <div className="flex gap-8">
          {/* Filter sidebar (desktop) */}
          {showFilters && (
            <aside className="hidden md:block w-64 shrink-0">
              <div className="rounded-2xl border border-[#e7eaf0] p-5 sticky top-32">
                <h3 className="font-display text-base font-bold text-navy mb-4">Filters</h3>
                <div className="space-y-5">
                  {filterConfigs.map((config) => (
                    <div key={config.label}>
                      <p className="text-sm font-semibold text-navy mb-2">{config.label}</p>
                      <div className="space-y-1.5">
                        {config.options.map((opt) => (
                          <label key={opt} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input
                              type="checkbox"
                              className="accent-violet"
                              checked={activeFilters[config.label]?.has(opt) ?? false}
                              onChange={() => toggleFilter(config.label, opt)}
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div ref={ref} className="flex-1">
            {sorted.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-[#f6f8fb] flex items-center justify-center mb-4">
                  <SlidersHorizontal className="w-10 h-10 text-gray-300" />
                </div>
                <p className="font-display text-lg font-semibold text-navy">No products found</p>
                <p className="text-sm text-gray-500 mt-1">Check back soon for new drops.</p>
              </div>
            ) : view === 'grid' ? (
              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 reveal-stagger ${visible ? 'revealed' : ''}`}>
                {sorted.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={`space-y-4 reveal ${visible ? 'revealed' : ''}`}>
                {sorted.map((product) => (
                  <ProductListRow key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductListRow({ product }: { product: Product }) {

  return (
    <Link
      href={`/product/${product.slug}`}
      className="product-card flex gap-4 bg-white rounded-2xl border border-[#e7eaf0] overflow-hidden p-4"
    >
      <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0">
        <ProductImage image={product.image} alt={product.name} variant={placeholderVariant(product)} minimal className="w-full h-full" sizes="112px" />
      </div>
      <div className="flex-1 min-w-0 flex items-center">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{product.brand}</p>
          <h3 className="text-sm font-semibold text-navy mt-0.5 truncate">{product.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{product.description}</p>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-light text-violet text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-violet" />
            {product.badge}
          </div>
        </div>
        <div className="text-right shrink-0 ml-4">
          <p className="text-lg font-bold text-navy">{formatPrice(product.price)}</p>
          <p className="text-[10px] text-violet mt-1 font-semibold">{product.status}</p>
        </div>
      </div>
    </Link>
  );
}
