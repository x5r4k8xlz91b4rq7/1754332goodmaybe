'use client';

import { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite, addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const fav = isFavorite(product.slug);
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  return (
    <div
      className="product-card group relative bg-white rounded-2xl border border-[#e7eaf0] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        {/* Shine sweep */}
        <div className="card-shine" />

        {/* Badge */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {hasDiscount && (
            <span className="px-2.5 py-1 rounded-md bg-sale text-white text-xs font-bold">
              {discountPercent}% OFF
            </span>
          )}
          <span className="px-2.5 py-1 rounded-md bg-navy text-white text-xs font-bold">
            {product.badge}
          </span>
        </div>

        {/* Favorite */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(product.slug);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full backdrop-blur flex items-center justify-center transition-all ${
            fav
              ? 'bg-white text-violet'
              : 'bg-white/80 text-gray-400 hover:bg-white hover:text-violet'
          }`}
        >
          <Heart
            className={`transition-colors ${fav ? 'fill-violet text-violet' : ''}`}
            style={{ width: 18, height: 18 }}
          />
        </button>

        {/* Status pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2 py-0.5 rounded-full bg-violet-light text-violet text-[10px] font-semibold">
            {product.status}
          </span>
        </div>

        {/* Image */}
        <div className="product-image aspect-square overflow-hidden">
          <PlaceholderImage variant={product.image} brand={product.brand} name={product.name} className="w-full h-full" />
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{product.brand}</p>
          <h3 className="text-sm font-semibold text-navy mt-1 leading-snug line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{product.description}</p>

          <div className="flex items-center gap-2 mt-2.5">
            <span className="text-lg font-bold text-navy">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">{formatPrice(product.compareAtPrice!)}</span>
            )}
          </div>

          {/* Trust badge */}
          <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-light text-violet text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-violet" />
            {product.badge}
          </div>
        </div>
      </Link>

      {/* Quick add (appears on hover, desktop only) */}
      {hovered && (
        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-3 bg-white border-t border-[#e7eaf0] animate-in fade-in slide-in-from-bottom duration-200">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="btn-luxe w-full h-10 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span className="btn-shine" />
            Notify Me <ArrowRight className="w-4 h-4 btn-arrow" />
          </button>
        </div>
      )}
    </div>
  );
}
