'use client';

import Link from 'next/link';
import { Crown, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  Shop: ['Watches', 'Sneakers', 'Bags', 'Sunglasses', 'Accessories', 'Fragrance'],
  Company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Contact'],
  Support: ['Help Center', 'Shipping', 'Returns', 'Authenticity', 'Track Order'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-violet flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-xl font-bold">DealVault Luxe</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400 mt-0.5">Curated Luxury</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mt-4 max-w-xs leading-relaxed">
              Luxury Today. A Brighter Tomorrow. Curated, verified, exclusive deals on limited edition pieces.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-violet transition-colors cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-400">© 2026 DealVault Luxe. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Mail className="w-3.5 h-3.5" />
            <span>support@dealvaultluxe.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
