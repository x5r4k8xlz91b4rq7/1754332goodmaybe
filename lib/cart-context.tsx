'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Product } from './products';

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  favorites: string[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size?: string, color?: string) => void;
  removeItem: (slug: string, size?: string) => void;
  updateQuantity: (slug: string, size: string | undefined, delta: number) => void;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product, size?: string, color?: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          color,
          quantity: 1,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, size?: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
  }, []);

  const updateQuantity = useCallback((slug: string, size: string | undefined, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.slug === slug && i.size === size
            ? { ...i, quantity: Math.max(0, i.quantity + delta) }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const isFavorite = useCallback((slug: string) => favorites.includes(slug), [favorites]);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        favorites,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        toggleFavorite,
        isFavorite,
        count,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
