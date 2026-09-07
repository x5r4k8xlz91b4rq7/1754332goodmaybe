'use client';

import { ArrowRight, Crown, Zap, Tag, Calendar } from 'lucide-react';

const benefits = [
  { icon: Zap, label: 'Exclusive Drops' },
  { icon: Calendar, label: 'Early Access' },
  { icon: Tag, label: 'Member Pricing' },
  { icon: Crown, label: 'Special Events' },
];

export default function LuxeBanner() {
  return (
    <section className="section-space">
      <div className="container-wide">
        <div className="relative rounded-3xl overflow-hidden bg-navy premium-shadow">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #5b2df5 0%, transparent 50%)' }} />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            {/* Mascot placeholder */}
            <div className="hidden md:block">
              <div className="w-48 h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Crown className="w-20 h-20 text-violet" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet/20 text-violet-light text-xs font-semibold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5" />
                Luxe Membership
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4">
                Go Luxe. Get More.
              </h2>
              <p className="text-base text-gray-300 mt-3 max-w-md">
                Early access to limited drops, exclusive member pricing, and VIP perks.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {benefits.map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <b.icon className="w-4.5 h-4.5 text-violet-light" style={{ width: 18, height: 18 }} />
                    </div>
                    <span className="text-sm font-medium text-white">{b.label}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-violet text-white text-sm font-semibold hover:bg-violet-dark transition-colors mt-7">
                Join DealVault Luxe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
