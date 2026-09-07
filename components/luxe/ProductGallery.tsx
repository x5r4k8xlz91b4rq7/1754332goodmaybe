'use client';

import { useState } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/lib/products';

export default function ProductGallery({ product }: { product: Product }) {
  const images = product.gallery.length > 1 ? product.gallery : [product.image, product.image, product.image, product.image];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4 enter-from-left">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl product-image overflow-hidden border border-[#e7eaf0]">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-sale text-white text-xs font-bold">
            {product.discount}% OFF
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-navy text-white text-xs font-bold">
            LIMITED EDITION
          </span>
        </div>

        {/* Controls */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
            <ZoomIn className="w-4 h-4 text-navy" />
          </button>
        </div>
        <button
          onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-navy" />
        </button>
        <button
          onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-navy" />
        </button>

        {/* Image with zoom + spotlight */}
        <div className="gallery-main w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[activeIndex]} alt={product.name} className="w-full h-full object-cover" />
          <div className="gallery-spotlight" />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              activeIndex === i
                ? 'border-violet ring-2 ring-violet/20'
                : 'border-[#e7eaf0] hover:border-gray-300'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover product-image" />
          </button>
        ))}
      </div>
    </div>
  );
}
