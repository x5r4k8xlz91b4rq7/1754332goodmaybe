'use client';

import { useState } from 'react';
import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

type ProductImageProps = {
  image: string | null;
  alt: string;
  brand?: string;
  name?: string;
  className?: string;
  variant?: string;
  sizes?: string;
  priority?: boolean;
  minimal?: boolean;
};

export default function ProductImage({
  image,
  alt,
  brand,
  name,
  className,
  variant,
  sizes = '(max-width: 768px) 50vw, 25vw',
  priority = false,
  minimal = false,
}: ProductImageProps) {
  const [errored, setErrored] = useState(false);

  if (image && !errored) {
    return (
      <div className={`relative ${className ?? ''}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain p-2"
          onError={() => setErrored(true)}
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
      minimal={minimal}
    />
  );
}
