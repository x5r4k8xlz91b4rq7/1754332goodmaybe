'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Crown, Menu, X, User, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { allNavLinks } from '@/lib/categories';
import { searchProducts, formatPrice } from '@/lib/products';
import ProductImage from './ProductImage';

export default function Header() {
  const { count, openCart, favorites } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const searchResults = searchQuery.length >= 2 ? searchProducts(searchQuery).slice(0, 5) : [];

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
          <div ref={searchRef} className="flex-1 max-w-2xl desktop-only relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                placeholder="Search for watches, sneakers, bags, sunglasses, and more..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#e7eaf0] bg-[#f6f8fb] text-sm outline-none focus:border-violet focus:bg-white transition-colors"
              />
            </div>

            {/* Search dropdown */}
            {searchFocused && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl border border-[#e7eaf0] premium-shadow overflow-hidden z-50">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    onClick={() => { setSearchFocused(false); setSearchQuery(''); }}
                    className="flex items-center gap-3 p-3 hover:bg-[#f6f8fb] transition-colors border-b border-[#eef1f6] last:border-0"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <ProductImage image={product.image} alt={product.name} brand={product.brand} name={product.name} variant={product.gallery[0] ?? 'trading-card-box'} className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-navy truncate">{product.name}</p>
                      <p className="text-[11px] text-gray-400">{product.brand} · {product.category}</p>
                    </div>
                    <span className="text-sm font-bold text-violet">{formatPrice(product.price)}</span>
                  </Link>
                ))}
                <Link
                  href={`/search?q=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setSearchFocused(false)}
                  className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-violet hover:bg-violet-light transition-colors"
                >
                  View all results <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
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
          {allNavLinks.map((link) => (
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchQuery.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
              }
            }}
            placeholder="Search luxury products..."
            className="w-full h-11 pl-12 pr-4 rounded-xl border border-[#e7eaf0] bg-[#f6f8fb] text-sm outline-none focus:border-violet focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#e7eaf0] bg-white">
          <div className="container-wide py-4 flex flex-col gap-3">
            {allNavLinks.map((link) => (
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

