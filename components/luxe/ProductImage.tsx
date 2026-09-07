'use client';

import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

type ProductImageProps = {
  image: string | null;
  alt: string;
  brand?: string;
  name?: string;
  className?: string;
  variant?: string;
};

export default function ProductImage({
  image,
  alt,
  brand,
  name,
  className,
  variant,
}: ProductImageProps) {
  if (image) {
    return (
      <div className={`relative ${className ?? ''}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-2"
        />
      </div>
    );
  }

  return (
    <PlaceholderImage
      variant={variant ?? 'trading-card-box'}
      brand={brand}
      name={name}
      className={className}
    />
  );
}
