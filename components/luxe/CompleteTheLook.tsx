'use client';

import { ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/products';
import PlaceholderImage from './PlaceholderImage';

export default function CompleteTheLook() {
  const { addItem } = useCart();

  const product: Product = {
    id: 'shoe-protector',
    slug: 'shoe-protector',
    name: 'Shoe Protector 200ml',
    category: 'Collectibles',
    brand: 'DEALVAULT',
    description: 'Keep them fresh. Waterproof protection for longer wear.',
    price: 16,
    compareAtPrice: 20,
    badge: 'Verified Deal',
    status: 'Coming Soon',
    featured: false,
    newArrival: false,
    sale: true,
    image: 'sneaker',
    gallery: ['sneaker'],
    options: [{ label: 'Purchase', values: ['1 Bottle'] }],
  };

  return (
    <div className="rounded-2xl border border-[#e7eaf0] p-6">
      <h3 className="font-display text-lg font-bold text-navy mb-5">Complete the Look</h3>
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
          <PlaceholderImage variant="sneaker" className="w-full h-full" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-navy">{product.name}</p>
          <p className="text-xs text-gray-500 mt-1">{product.description}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-navy">${product.price}.00</span>
            <button
              onClick={() => addItem(product)}
              className="btn-luxe h-9 px-4 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <span className="btn-shine" />
              Add to Cart <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
