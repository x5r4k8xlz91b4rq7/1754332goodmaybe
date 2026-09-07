'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-space">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="hero-copy order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-light text-violet text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Edition Drops
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-5 leading-[1.1]">
              Verified Deals on
              <br />
              Limited Edition Pieces
            </h1>
            <p className="text-base text-gray-500 mt-5 max-w-md leading-relaxed">
              Curated drops. Iconic watches. Exclusive sneakers.
              <br />
              Luxury brands. Same-day offers.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-violet text-white text-sm font-semibold hover:bg-violet-dark transition-colors"
              >
                Shop the Drops <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl border border-[#e7eaf0] text-navy text-sm font-semibold hover:bg-[#f6f8fb] transition-colors"
              >
                Explore All Categories
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-[#e7eaf0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-light flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">100% Authentic</p>
                  <p className="text-xs text-gray-500">Verified products</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-light flex items-center justify-center">
                  <Truck className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Same-Day Shipping</p>
                  <p className="text-xs text-gray-500">On select items</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-light flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Exclusive Drops</p>
                  <p className="text-xs text-gray-500">Members get early access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - mascot art */}
          <div className="order-1 lg:order-2 relative">
            <div className="hero-mascot soft-grid">
              <div className="mascot-body" />
              <div className="mascot-head">
                <div className="mascot-eye left" />
                <div className="mascot-eye right" />
              </div>
              <div className="mascot-shoe one" />
              <div className="mascot-shoe two" />
            </div>

            {/* Decorative copy */}
            <div className="absolute top-6 left-6 font-display text-sm font-bold text-navy/70 tracking-wide">
              RARE PIECES
              <br />
              <span className="text-violet">BRIGHTER PEOPLE</span>
            </div>
            <div className="absolute bottom-6 right-6 font-display text-sm font-bold text-navy/70 tracking-wide text-right">
              MORE THAN DEALS.
              <br />
              <span className="text-electric">IT&apos;S A LIFESTYLE.</span>
            </div>

            {/* Carousel dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="w-6 h-2 rounded-full bg-violet" />
              <span className="w-2 h-2 rounded-full bg-white/60" />
              <span className="w-2 h-2 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
