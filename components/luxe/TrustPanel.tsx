'use client';

import { Crown, ArrowRight, ShieldCheck, Store, Lock, RotateCcw } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, title: '100% Authentic', desc: 'Verified partner products' },
  { icon: Store, title: 'Trusted Retailer Network', desc: 'Official / verified sellers' },
  { icon: Lock, title: 'Secure Checkout', desc: 'Your information is protected' },
  { icon: RotateCcw, title: 'Easy Returns', desc: 'Hassle-free within 30 days' },
];

export default function TrustPanel() {
  return (
    <div className="space-y-5">
      {/* Membership card */}
      <div className="rounded-2xl bg-navy p-6 premium-shadow">
        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
          <Crown className="w-7 h-7 text-violet-light" />
        </div>
        <h3 className="font-display text-lg font-bold text-white">Get Early Access to Exclusive Drops</h3>
        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
          Join DealVault Luxe for member pricing, special events, and more.
        </p>
        <button className="w-full mt-4 h-11 rounded-xl bg-violet text-white text-sm font-semibold hover:bg-violet-dark transition-colors flex items-center justify-center gap-2">
          Join Luxe <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust card */}
      <div className="rounded-2xl border border-[#e7eaf0] p-6">
        <h3 className="font-display text-lg font-bold text-navy mb-5">Shop with Confidence</h3>
        <div className="space-y-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-light flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-violet" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
