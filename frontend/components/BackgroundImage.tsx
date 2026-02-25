import React from 'react';
import { getFallbackSrc, getSrcSet } from './evtolMedia';

interface BackgroundImageProps {
  base: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  width?: number;
  height?: number;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  base,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  width,
  height,
}) => {
  const fallback = getFallbackSrc(base);

  return (
    <picture>
      <source type="image/avif" srcSet={getSrcSet(base, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={getSrcSet(base, 'webp')} sizes={sizes} />
      <img
        src={fallback}
        srcSet={getSrcSet(base, 'jpg')}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
      />
    </picture>
  );
};
