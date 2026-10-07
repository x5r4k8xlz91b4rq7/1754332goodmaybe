'use client';

import { useState } from 'react';
import { Heart, ArrowRight, Bell, Check } from 'lucide-react';
import Link from 'next/link';
import { Product, formatPrice, discountPercent as getDiscountPercent, isPurchasable, placeholderVariant } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import ProductImage from './ProductImage';

export default function ProductCard({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite, addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const fav = isFavorite(product.slug);
  const discountPercent = getDiscountPercent(product);
  const hasDiscount = discountPercent > 0;
  const purchasable = isPurchasable(product);

  return (
    <div
      className="product-card group relative bg-white rounded-lg border border-[#e7eaf0] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        {/* Shine sweep */}
        <div className="card-shine" />

        {/* Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 flex gap-2">
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
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span className="px-2 py-0.5 rounded-full bg-violet-light text-violet text-[10px] font-semibold">
            {product.status}
          </span>
        </div>

        {/* Image */}
        <div className="product-image aspect-square overflow-hidden">
          <ProductImage
            image={product.image}
            alt={product.name}
            brand={product.brand}
            name={product.name}
            variant={placeholderVariant(product)}
            className="w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{product.brand}</p>
          <h3 className="text-[13px] font-semibold text-navy mt-1 leading-snug line-clamp-2 min-h-[2.25rem]">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-base font-bold text-navy">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">{formatPrice(product.compareAtPrice!)}</span>
            )}
          </div>
        </div>
      </Link>

      {/* Quick add (appears on hover, desktop only) */}
      {hovered && (
        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-3 bg-white border-t border-[#e7eaf0] animate-in fade-in slide-in-from-bottom duration-200">
          {product.status === 'Sourcing' && (
            <p className="text-[11px] text-gray-500 text-center mb-2">We&apos;re actively sourcing this piece.</p>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              if (purchasable) addItem(product);
              else toggleFavorite(product.slug);
            }}
            className="btn-luxe w-full h-10 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span className="btn-shine" />
            {purchasable ? (
              <>Add to Bag <ArrowRight className="w-4 h-4 btn-arrow" /></>
            ) : fav ? (
              <>On Your Watchlist <Check className="w-4 h-4" /></>
            ) : (
              <>Notify Me <Bell className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
