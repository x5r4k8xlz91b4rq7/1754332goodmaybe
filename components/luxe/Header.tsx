'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Crown, Menu, X, User } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { label: 'All Categories', href: '/' },
  { label: 'Watches', href: '/' },
  { label: 'Sneakers', href: '/' },
  { label: 'Bags', href: '/' },
  { label: 'Sunglasses', href: '/' },
  { label: 'Accessories', href: '/' },
  { label: 'Fragrance', href: '/' },
  { label: 'New Arrivals', href: '/' },
  { label: 'Sale', href: '/', sale: true },
];

export default function Header() {
  const { count, openCart, favorites } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Utility bar */}
      <div className="bg-navy text-white text-xs">
        <div className="container-wide flex items-center justify-between h-9">
          <div className="flex items-center gap-3 opacity-90">
            <span>Same-Day Shipping on Select Items</span>
            <span className="opacity-40">|</span>
            <span>100% Authentic</span>
            <span className="opacity-40 desktop-only">|</span>
            <span className="desktop-only">Curated. Verified. Exclusive.</span>
          </div>
          <div className="flex items-center gap-3 opacity-90">
            <span className="desktop-only">DealVault Luxe</span>
            <span className="opacity-40 desktop-only">|</span>
            <span>Luxury Today. A Brighter Tomorrow.</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-[#e7eaf0]">
        <div className="container-wide flex items-center gap-6 h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-violet flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <div className="font-display text-xl font-bold text-navy tracking-tight">DealVault Luxe</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400 mt-0.5">Curated Luxury</div>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl desktop-only">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for watches, sneakers, bags, sunglasses, and more..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#e7eaf0] bg-[#f6f8fb] text-sm outline-none focus:border-violet focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-5 ml-auto">
            <button className="hidden md:flex items-center gap-1.5 text-sm font-medium text-navy hover:text-violet transition-colors">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </button>
            <button className="relative text-navy hover:text-violet transition-colors">
              <Heart className="w-6 h-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-violet text-white text-[10px] flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </button>
            <button onClick={openCart} className="relative text-navy hover:text-violet transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-violet text-white text-[10px] flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <button className="btn-luxe hidden md:inline-flex items-center h-10 px-5 rounded-xl text-white text-sm font-semibold">
              <span className="btn-shine" />
              Join Luxe
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-navy">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Second nav row */}
      <nav className="border-b border-[#e7eaf0] hidden md:block">
        <div className="container-wide flex items-center gap-7 h-11 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link hover:text-violet transition-colors ${link.sale ? 'text-sale font-semibold' : 'text-navy'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile search */}
      <div className="md:hidden border-b border-[#e7eaf0] px-3 py-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search luxury products..."
            className="w-full h-11 pl-12 pr-4 rounded-xl border border-[#e7eaf0] bg-[#f6f8fb] text-sm outline-none focus:border-violet focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#e7eaf0] bg-white">
          <div className="container-wide py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-1.5 ${link.sale ? 'text-sale' : 'text-navy'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t border-[#e7eaf0] mt-2">
              <button className="flex-1 h-11 rounded-xl border border-[#e7eaf0] text-sm font-medium text-navy">Sign In</button>
              <button className="btn-luxe flex-1 h-11 rounded-xl text-white text-sm font-semibold">
                <span className="btn-shine" />
                Join Luxe
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
