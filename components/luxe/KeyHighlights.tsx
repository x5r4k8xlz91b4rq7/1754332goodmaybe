'use client';

import { Gem, Star, Layers, Users, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, typeof Gem> = {
  gem: Gem,
  star: Star,
  layers: Layers,
  users: Users,
  shield: ShieldCheck,
};

export default function KeyHighlights({
  highlights,
}: {
  highlights: { title: string; description: string; icon: string }[];
}) {
  return (
    <div className="rounded-2xl border border-[#e7eaf0] p-6">
      <h3 className="font-display text-lg font-bold text-navy mb-5">Key Highlights</h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {highlights.map((h) => {
          const Icon = iconMap[h.icon] ?? Gem;
          return (
            <div key={h.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-light flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-violet" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">{h.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{h.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
