'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Crown, ShieldCheck, Sparkles, Truck } from 'lucide-react';

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
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
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
      if (inner) inner.style.transform = `translate(${currentX}px, ${currentY}px)`;
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
    <section className="hero-banner">
      <div className="hero-ambient-1" />
      <div className="hero-ambient-2" />
      <div className="hero-ambient-3" />
      <div className="hero-ambient-red" />
      <div className="hero-cityline" />
      <div className="hero-readability-gradient" />

      <div className="container-wide hero-banner-inner">
        <div className="hero-copy">
          <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-violet">
            <Sparkles className="w-3 h-3" />
            Limited Edition Drops
          </div>
          <h1 className="hero-enter hero-enter-2 hero-headline font-display font-bold text-navy mt-4 leading-[1.02] tracking-[-0.035em]">
            Verified Deals on
            <br />
            Limited Edition Pieces
          </h1>
          <p className="hero-enter hero-enter-3 hero-subcopy text-[17px] text-[#526078] mt-4 max-w-[460px] leading-[1.55]">
            Curated drops. Iconic watches. Exclusive sneakers.
            <br />
            Luxury brands. Same-day offers.
          </p>
          <div className="hero-enter hero-enter-4 flex flex-wrap gap-3 mt-5">
            <Link href="/drops" className="btn-luxe hero-cta inline-flex items-center gap-2 h-12 px-7 rounded-lg text-white text-[13px] font-semibold">
              <span className="btn-shine" />
              Shop the Drops <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
            </Link>
            <Link href="/categories" className="hero-cta inline-flex items-center gap-2 h-12 px-7 rounded-lg border border-[#17294a] text-navy text-[13px] font-semibold hover:bg-white/70 transition-colors">
              Explore All Categories
            </Link>
          </div>

          <div className="hero-enter hero-enter-5 flex flex-wrap gap-4 mt-6 pt-4 border-t border-[#dbe2ec]">
            <div className="hero-trust-item">
              <div className="hero-trust-icon"><ShieldCheck className="w-4 h-4" /></div>
              <div><p>100% Authentic</p><span>Verified products</span></div>
            </div>
            <div className="hero-trust-item">
              <div className="hero-trust-icon"><Truck className="w-4 h-4" /></div>
              <div><p>Same-Day Shipping</p><span>On select items</span></div>
            </div>
            <div className="hero-trust-item">
              <div className="hero-trust-icon"><Crown className="w-4 h-4" /></div>
              <div><p>Exclusive Drops</p><span>Members get early access</span></div>
            </div>
          </div>
        </div>

        <div ref={mascotRef} className="hero-mascot-area">
          <div className="hero-enter hero-enter-6 hero-mascot-stage">
            <div className="mascot-inner" style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
              <div className="mascot-glow" />
              <Image
                src="/brand/neon_streetwear_mascot_with_luxury_gear.png"
                alt="Vanta Row Luxe mascot with limited-edition sneakers, watch, and shoebox"
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 65vw, 58vw"
                className="mascot-image object-contain"
              />
            </div>
            <button className="hero-arrow hero-arrow-left" aria-label="Previous hero slide"><ArrowLeft className="w-4 h-4" /></button>
            <button className="hero-arrow hero-arrow-right" aria-label="Next hero slide"><ArrowRight className="w-4 h-4" /></button>
            <div className="hero-dots" aria-label="Hero slides">
              <span className="active" /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
