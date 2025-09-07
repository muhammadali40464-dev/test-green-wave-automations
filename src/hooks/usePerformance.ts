import { useEffect } from 'react';

// Type definitions for performance monitoring
interface LCPEntry extends PerformanceEntry {
  startTime: number;
}

interface FIDEntry extends PerformanceEntry {
  processingStart: number;
}

interface CLSEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

declare global {
  function gtag(...args: any[]): void;
}

// Core Web Vitals monitoring hook
export const usePerformance = () => {
  useEffect(() => {
    // Enhanced service worker registration for better caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'imports'
      }).then((registration) => {
        console.log('SW registered successfully');
        
        // Force update check for new versions
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available, update caches
                newWorker.postMessage({ command: 'skipWaiting' });
              }
            });
          }
        });
        
        // Check for updates every 5 minutes
        setInterval(() => {
          registration.update();
        }, 5 * 60 * 1000);
        
      }).catch((error) => {
        console.log('SW registration failed:', error);
      });
      
      // Listen for service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated successfully');
        }
      });
    }

    // Performance monitoring
    const observePerformance = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries() as LCPEntry[];
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
            
            // Track LCP for analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'core_web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lastEntry.startTime)
              });
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID - First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries() as FIDEntry[];
            entries.forEach((entry) => {
              console.log('FID:', entry.processingStart - entry.startTime);
              
              if (typeof gtag !== 'undefined') {
                gtag('event', 'core_web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FID',
                  value: Math.round(entry.processingStart - entry.startTime)
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS - Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries() as CLSEntry[];
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('CLS:', clsValue);
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'core_web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000)
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

        } catch (error) {
          console.log('Performance Observer not supported:', error);
        }
      }
    };

    // Initialize performance monitoring after page load
    if (document.readyState === 'complete') {
      observePerformance();
    } else {
      window.addEventListener('load', observePerformance);
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/src/assets/whatsapp-mockup.jpg';
      document.head.appendChild(link);
    };

    preloadCriticalResources();

  }, []);
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });

    return () => observer.disconnect();
  }, [callback, options]);
};