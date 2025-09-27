import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: any;
  }
}

export const useMetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route change
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      console.log('📊 Meta Pixel PageView tracked:', location.pathname);
    } else {
      // Queue the event if fbq isn't ready yet
      if (window.fbq && window.fbq.queue) {
        window.fbq('track', 'PageView');
      }
    }
  }, [location.pathname, location.search]);
};