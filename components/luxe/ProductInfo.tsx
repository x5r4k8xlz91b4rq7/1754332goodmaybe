'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Truck, ArrowRight, Ruler } from 'lucide-react';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(0);
  const { addItem, toggleFavorite, isFavorite } = useCart();
  const fav = isFavorite(product.slug);

  return (
    <div className="space-y-5">
      <div>
        <Link href="/" className="text-xs font-bold uppercase tracking-[0.15em] text-violet hover:text-violet-dark transition-colors">
          {product.brand}
        </Link>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2 leading-tight">
          {product.name}
        </h1>
        <Link href="/" className="text-sm text-violet hover:text-violet-dark transition-colors mt-1.5 inline-block">
          Explore {product.brand} →
        </Link>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-navy">{formatPrice(product.price)}</span>
        <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
        <span className="px-2.5 py-1 rounded-md bg-sale text-white text-xs font-bold">{product.discount}% OFF</span>
      </div>
      <p className="text-sm text-gray-500">or 4 interest-free payments of {formatPrice(product.price / 4)}</p>

      {/* Colors */}
      <div>
        <p className="text-sm font-semibold text-navy mb-3">Core Colours</p>
        <div className="flex gap-3">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                selectedColor === i ? 'border-violet ring-2 ring-violet/20' : 'border-[#e7eaf0] hover:border-gray-300'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={color.image} alt={color.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">{product.colors[selectedColor]?.label}</p>
      </div>

      {/* Sizing */}
      {product.sizes && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-navy">Junior US Sizing</p>
            <button className="flex items-center gap-1.5 text-xs text-violet hover:text-violet-dark transition-colors">
              <Ruler className="w-3.5 h-3.5" /> US sizing guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[3.5rem] h-11 px-3 rounded-xl border text-sm font-semibold transition-all ${
                  selectedSize === size
                    ? 'border-violet bg-violet text-white'
                    : 'border-[#e7eaf0] text-navy hover:border-violet hover:text-violet'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add to cart */}
      <div className="pt-2 space-y-3">
        <button
          onClick={() => addItem(product, selectedSize, product.colors[selectedColor]?.label)}
          className="w-full h-13 rounded-xl bg-violet text-white text-base font-semibold hover:bg-violet-dark transition-colors flex items-center justify-center gap-2"
          style={{ height: 52 }}
        >
          Add to Cart <ArrowRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => toggleFavorite(product.slug)}
          className="w-full h-12 rounded-xl border border-[#e7eaf0] text-navy text-sm font-semibold hover:bg-[#f6f8fb] transition-colors flex items-center justify-center gap-2"
        >
          <Heart className={`w-4 h-4 ${fav ? 'fill-violet text-violet' : ''}`} />
          {fav ? 'Added to favourites' : 'Add to favourites'}
        </button>
      </div>

      {/* Shipping note */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f6f8fb] border border-[#e7eaf0]">
        <Truck className="w-5 h-5 text-violet shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-navy">Same-Day Shipping</p>
          <p className="text-xs text-gray-500 mt-0.5">On select items. Order by 2PM.</p>
        </div>
      </div>
    </div>
  );
}
