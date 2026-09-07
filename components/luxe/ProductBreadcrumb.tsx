'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ProductBreadcrumb({ items }: { items: string[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-violet transition-colors">{item}</Link>
          {i < items.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-gray-300" />}
        </span>
      ))}
    </nav>
  );
}
