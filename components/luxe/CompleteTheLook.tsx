'use client';

import { ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/products';

export default function CompleteTheLook() {
  const { addItem } = useCart();

  const product: Product = {
    slug: 'shoe-protector',
    name: 'Shoe Protector 200ml',
    subtitle: 'Waterproof protection',
    category: 'Accessories',
    brand: 'DEALVAULT',
    price: 16,
    originalPrice: 20,
    discount: 20,
    badge: 'Verified Deal',
    image: 'https://images.pexels.com/photos/19869753/pexels-photo-19869753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: ['https://images.pexels.com/photos/19869753/pexels-photo-19869753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'],
    colors: [{ label: 'Standard', image: 'https://images.pexels.com/photos/19869753/pexels-photo-19869753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }],
  };

  return (
    <div className="rounded-2xl border border-[#e7eaf0] p-6">
      <h3 className="font-display text-lg font-bold text-navy mb-5">Complete the Look</h3>
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl product-image overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-navy">{product.name}</p>
          <p className="text-xs text-gray-500 mt-1">Keep them fresh. Waterproof protection for longer wear.</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-navy">${product.price}.00</span>
            <button
              onClick={() => addItem(product)}
              className="h-9 px-4 rounded-lg bg-navy text-white text-xs font-semibold hover:bg-violet transition-colors flex items-center gap-1.5"
            >
              Add to Cart <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
