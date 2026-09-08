'use client';

import Image from 'next/image';
import { ArrowRight, Calendar, Crown, Tag, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const benefits = [
  { icon: Zap, label: 'Exclusive Drops' },
  { icon: Calendar, label: 'Early Access' },
  { icon: Tag, label: 'Member Pricing' },
  { icon: Crown, label: 'Special Events' },
];

export default function LuxeBanner() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-space reveal ${visible ? 'revealed' : ''}`}>
      <div className="container-wide">
        <div className="relative overflow-hidden luxe-banner-bg premium-shadow luxe-banner-card">
          <div className="luxe-banner-border" />
          <div className="luxe-banner-glow" style={{ left: '12%', top: '50%', transform: 'translate(-50%, -50%)' }} />

          <div className="relative flex items-center gap-6 px-6 py-5 md:px-8 md:py-6">
            <div className="luxe-banner-mascot hidden sm:block">
              <Image
                src="/brand/neon_streetwear_mascot_with_luxury_gear.png"
                alt="Vanta Row Luxe mascot"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>

            <div className="min-w-[190px]">
              <div className="inline-flex items-center gap-2 text-violet-light text-[10px] font-semibold uppercase tracking-[0.18em]">
                <Crown className="w-3 h-3" />
                Vanta Row Luxe
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 leading-none">Go Luxe. Get More.</h2>
              <p className="text-xs text-gray-300 mt-2 max-w-[250px] leading-relaxed">Early access, member pricing, and a closer look at the pieces worth chasing.</p>
            </div>

            <div className="luxe-benefits-row flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3">
              {benefits.map((b) => (
                <div key={b.label} className="luxe-benefit flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <b.icon className="text-violet-light" style={{ width: 16, height: 16 }} />
                  </div>
                  <span className="text-xs font-medium text-white whitespace-nowrap">{b.label}</span>
                </div>
              ))}
            </div>

            <button className="btn-luxe inline-flex shrink-0 items-center gap-2 h-10 px-5 rounded-lg text-white text-xs font-semibold">
              <span className="btn-shine" />
              Join Luxe <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
