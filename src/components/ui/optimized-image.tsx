import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fallback?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fallback = '/placeholder.svg',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate WebP source if supported
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const shouldLoadWebP = 'webp' in document.createElement('canvas').getContext('2d') || false;

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >
      {inView && (
        <>
          {/* Loading placeholder */}
          {!isLoaded && (
            <div 
              className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
              style={{ width, height }}
            >
              <div className="w-8 h-8 border-2 border-gray-300 border-t-whatsapp-green rounded-full animate-spin" />
            </div>
          )}

          {/* Optimized image with WebP support */}
          <picture>
            {shouldLoadWebP && (
              <source srcSet={webpSrc} type="image/webp" />
            )}
            <img
              src={hasError ? fallback : src}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              onLoad={handleLoad}
              onError={handleError}
              className={cn(
                'transition-opacity duration-300',
                isLoaded ? 'opacity-100' : 'opacity-0',
                'w-full h-full object-cover'
              )}
              {...props}
            />
          </picture>

          {/* Blur placeholder for better UX */}
          {!isLoaded && !hasError && (
            <div 
              className="absolute inset-0 bg-gradient-to-br from-whatsapp-green/5 to-whatsapp-dark/5 backdrop-blur-sm"
              style={{ width, height }}
            />
          )}
        </>
      )}
    </div>
  );
};