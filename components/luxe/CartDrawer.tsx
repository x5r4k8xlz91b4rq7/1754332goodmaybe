'use client';

import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-[60] animate-in fade-in"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] drawer flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-[#e7eaf0]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-navy" />
            <h2 className="font-display text-lg font-bold text-navy">Your Bag ({count})</h2>
          </div>
          <button onClick={closeCart} className="text-gray-400 hover:text-navy transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-[#f6f8fb] flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-navy">Your bag is empty</p>
              <p className="text-sm text-gray-500 mt-1">Add some luxury pieces to get started.</p>
            </div>
            <button onClick={closeCart} className="h-11 px-6 rounded-xl bg-violet text-white text-sm font-semibold hover:bg-violet-dark transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div key={`${item.slug}-${item.size}`} className="flex gap-4 pb-4 border-b border-[#eef1f6] last:border-0">
                  <div className="w-20 h-20 rounded-lg product-image overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-navy truncate">{item.name}</p>
                    {item.size && <p className="text-xs text-gray-500 mt-0.5">Size: {item.size}</p>}
                    {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                    <p className="text-sm font-bold text-violet mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#e7eaf0] rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.slug, item.size, -1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-navy"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.size, 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-navy"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug, item.size)}
                        className="text-gray-400 hover:text-sale transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-[#e7eaf0] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Subtotal</span>
                <span className="font-display text-xl font-bold text-navy">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-gray-400">Shipping and taxes calculated at checkout.</p>
              <div className="flex gap-3">
                <Link href="/" className="flex-1 h-12 rounded-xl border border-[#e7eaf0] text-sm font-semibold text-navy flex items-center justify-center hover:bg-[#f6f8fb] transition-colors">
                  View Cart
                </Link>
                <button
                  className="flex-1 h-12 rounded-xl bg-violet text-white text-sm font-semibold hover:bg-violet-dark transition-colors"
                  disabled
                >
                  Checkout coming soon
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
