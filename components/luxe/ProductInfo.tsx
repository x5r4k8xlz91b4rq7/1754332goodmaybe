'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Truck, ArrowRight, Ruler, Check, ShieldCheck } from 'lucide-react';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0]);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.options?.forEach((opt) => {
      initial[opt.label] = opt.values[0];
    });
    return initial;
  });
  const [added, setAdded] = useState(false);
  const { addItem, toggleFavorite, isFavorite } = useCart();
  const fav = isFavorite(product.slug);
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const isSneakerOrApparel = product.category === 'Sneakers' || product.category === 'Apparel' || product.category === 'Soccer';

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-5 enter-from-bottom">
      <div>
        <Link href="/" className="text-xs font-bold uppercase tracking-[0.15em] text-violet hover:text-violet-dark transition-colors">
          {product.brand}
        </Link>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2 leading-tight">
          {product.name}
        </h1>
        {product.subcategory && (
          <p className="text-sm text-gray-400 mt-1">{product.subcategory}</p>
        )}
        <Link href="/" className="text-sm text-violet hover:text-violet-dark transition-colors mt-1.5 inline-block">
          Explore {product.brand} →
        </Link>
      </div>

      {/* Status banner */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-light text-violet text-sm font-semibold">
        <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
        {product.status}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-3xl font-bold text-navy">{formatPrice(product.price)}</span>
        {hasDiscount && (
          <>
            <span className="text-lg text-gray-400 line-through">{formatPrice(product.compareAtPrice!)}</span>
            <span className="px-2.5 py-1 rounded-md bg-sale text-white text-xs font-bold">
              {Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)}% OFF
            </span>
          </>
        )}
      </div>
      {hasDiscount && (
        <p className="text-sm text-gray-500">or 4 interest-free payments of {formatPrice(product.price / 4)}</p>
      )}

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

      {/* Conditional options */}
      {product.options && product.options.map((opt) => (
        <div key={opt.label}>
          <p className="text-sm font-semibold text-navy mb-3">{opt.label}</p>
          {opt.label === 'Size' ? (
            <div className="flex flex-wrap gap-2.5">
              {opt.values.map((val) => (
                <button
                  key={val}
                  onClick={() => setSelectedSize(val)}
                  className={`min-w-[3.5rem] h-11 px-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                    selectedSize === val
                      ? 'border-violet bg-violet text-white scale-105'
                      : 'border-[#e7eaf0] text-navy hover:border-violet hover:text-violet'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2.5">
              {opt.values.map((val) => (
                <button
                  key={val}
                  onClick={() => setSelectedOptions((prev) => ({ ...prev, [opt.label]: val }))}
                  className={`h-10 px-4 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                    selectedOptions[opt.label] === val
                      ? 'border-violet bg-violet-light text-violet'
                      : 'border-[#e7eaf0] text-navy hover:border-violet hover:text-violet'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Add to cart */}
      <div className="pt-2 space-y-3">
        <button
          onClick={handleAddToCart}
          className={`w-full rounded-xl text-white text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
            added ? 'btn-confirm' : 'btn-luxe'
          }`}
          style={{ height: 52 }}
        >
          {!added && <span className="btn-shine" />}
          {added ? (
            <>Added to Bag <Check className="w-5 h-5" /></>
          ) : (
            <>Notify Me When Available <ArrowRight className="w-5 h-5 btn-arrow" /></>
          )}
        </button>
        <button
          onClick={() => toggleFavorite(product.slug)}
          className="w-full h-12 rounded-xl border border-[#e7eaf0] text-navy text-sm font-semibold hover:bg-[#f6f8fb] transition-colors flex items-center justify-center gap-2"
        >
          <Heart className={`w-4 h-4 transition-all ${fav ? 'fill-violet text-violet scale-110' : ''}`} />
          {fav ? 'Added to favourites' : 'Add to favourites'}
        </button>
      </div>

      {/* Shipping note */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f6f8fb] border border-[#e7eaf0]">
        <ShieldCheck className="w-5 h-5 text-violet shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-navy">100% Authentic Guarantee</p>
          <p className="text-xs text-gray-500 mt-0.5">Verified partner products. Secure checkout.</p>
        </div>
      </div>
    </div>
  );
}
