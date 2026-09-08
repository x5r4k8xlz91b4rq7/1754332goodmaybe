'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const container = mascotRef.current;
    if (!container) return;

    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      targetX = -dx * 12;
      targetY = -dy * 8;
    };

    const handleLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      const inner = container.querySelector('.mascot-inner') as HTMLElement;
      if (inner) {
        inner.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseleave', handleLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section-space">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-light text-violet text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Edition Drops
            </div>
            <h1 className="hero-enter hero-enter-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-5 leading-[1.1]">
              Verified Deals on
              <br />
              Limited Edition Pieces
            </h1>
            <p className="hero-enter hero-enter-3 text-base text-gray-500 mt-5 max-w-md leading-relaxed">
              Curated drops. Iconic watches. Exclusive sneakers.
              <br />
              Luxury brands. Same-day offers.
            </p>
            <div className="hero-enter hero-enter-4 flex flex-wrap gap-3 mt-7">
              <Link
                href="/drops"
                className="btn-luxe inline-flex items-center gap-2 h-12 px-7 rounded-xl text-white text-sm font-semibold"
              >
                <span className="btn-shine" />
                Shop the Drops <ArrowRight className="w-4 h-4 btn-arrow" />
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl border border-[#e7eaf0] text-navy text-sm font-semibold hover:bg-[#f6f8fb] transition-colors"
              >
                Explore All Categories
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="hero-enter hero-enter-5 flex flex-wrap gap-6 mt-8 pt-8 border-t border-[#e7eaf0]">
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
          <div ref={mascotRef} className="order-1 lg:order-2 relative">
            <div className="hero-enter hero-enter-6 hero-mascot soft-grid">
              {/* Ambient glows */}
              <div className="hero-ambient-1" />
              <div className="hero-ambient-2" />
              <div className="hero-ambient-3" />
              <div className="hero-ambient-red" />

              {/* Mascot inner (parallax target) */}
              <div className="mascot-inner" style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
                <div className="mascot-glow" />
                <Image
                  src="/brand/neon_streetwear_mascot_with_luxury_gear.png"
                  alt="Vanta Row Luxe mascot with limited-edition sneakers, watch, and shoebox"
                  fill
                  priority
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  className="mascot-image object-contain"
                />
              </div>

              {/* Decorative copy */}
              <div className="absolute top-6 left-6 font-display text-sm font-bold text-navy/70 tracking-wide z-10">
                RARE PIECES
                <br />
                <span className="text-violet">BRIGHTER PEOPLE</span>
              </div>
              <div className="absolute bottom-6 right-6 font-display text-sm font-bold text-navy/70 tracking-wide text-right z-10">
                MORE THAN DEALS.
                <br />
                <span className="text-electric">IT&apos;S A LIFESTYLE.</span>
              </div>

              {/* Carousel dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <span className="w-6 h-2 rounded-full bg-violet" />
                <span className="w-2 h-2 rounded-full bg-white/60" />
                <span className="w-2 h-2 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
