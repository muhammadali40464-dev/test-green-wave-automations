// Performance Budget Monitoring Utility
export class PerformanceBudget {
  private static readonly BUDGETS = {
    // Asset size limits (in KB)
    totalPageSize: 3000, // 3MB max
    javascriptBundle: 500, // 500KB max
    cssBundle: 100, // 100KB max
    imagesPerPage: 2000, // 2MB max for all images
    fontFiles: 300, // 300KB max for fonts
    
    // Request limits
    totalRequests: 50,
    thirdPartyRequests: 10,
    fontRequests: 4,
    criticalPathRequests: 6,
    
    // Core Web Vitals targets
    lcpTarget: 2500, // 2.5 seconds
    fidTarget: 100, // 100 milliseconds
    clsTarget: 0.1, // 0.1 score
    fcpTarget: 1800, // 1.8 seconds
  };

  static checkAssetSizes(): void {
    if (typeof window === 'undefined') return;

    // Monitor resource sizes
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalSize = 0;
    let jsSize = 0;
    let cssSize = 0;
    let imageSize = 0;
    let fontSize = 0;

    resources.forEach((resource) => {
      const size = resource.transferSize || 0;
      totalSize += size;

      if (resource.name.includes('.js')) {
        jsSize += size;
      } else if (resource.name.includes('.css')) {
        cssSize += size;
      } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        imageSize += size;
      } else if (resource.name.match(/\.(woff|woff2|ttf|otf)$/i)) {
        fontSize += size;
      }
    });

    // Convert to KB
    const sizeInKB = (bytes: number) => Math.round(bytes / 1024);

    console.group('📊 Performance Budget Report');
    
    // Check budgets
    const checks = [
      { name: 'Total Page Size', current: sizeInKB(totalSize), budget: this.BUDGETS.totalPageSize },
      { name: 'JavaScript Bundle', current: sizeInKB(jsSize), budget: this.BUDGETS.javascriptBundle },
      { name: 'CSS Bundle', current: sizeInKB(cssSize), budget: this.BUDGETS.cssBundle },
      { name: 'Images', current: sizeInKB(imageSize), budget: this.BUDGETS.imagesPerPage },
      { name: 'Fonts', current: sizeInKB(fontSize), budget: this.BUDGETS.fontFiles },
      { name: 'Total Requests', current: resources.length, budget: this.BUDGETS.totalRequests },
    ];

    checks.forEach(({ name, current, budget }) => {
      const status = current <= budget ? '✅' : '❌';
      const percentage = Math.round((current / budget) * 100);
      console.log(`${status} ${name}: ${current}${name.includes('Requests') ? '' : 'KB'} / ${budget}${name.includes('Requests') ? '' : 'KB'} (${percentage}%)`);
    });

    console.groupEnd();
  }

  static measureCoreWebVitals(): Promise<{lcp: number, fid: number, cls: number}> {
    return new Promise((resolve) => {
      const metrics = { lcp: 0, fid: 0, cls: 0 };
      let metricsCollected = 0;
      const totalMetrics = 3;

      const checkComplete = () => {
        metricsCollected++;
        if (metricsCollected >= totalMetrics) {
          this.reportCoreWebVitals(metrics);
          resolve(metrics);
        }
      };

      // LCP Observer
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            metrics.lcp = lastEntry.startTime;
            checkComplete();
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID Observer
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              metrics.fid = entry.processingStart - entry.startTime;
            });
            checkComplete();
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS Observer
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                metrics.cls += entry.value;
              }
            });
            checkComplete();
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Fallback timeout
          setTimeout(() => {
            resolve(metrics);
          }, 10000);

        } catch (error) {
          console.warn('Performance Observer not supported:', error);
          resolve(metrics);
        }
      } else {
        resolve(metrics);
      }
    });
  }

  private static reportCoreWebVitals(metrics: {lcp: number, fid: number, cls: number}): void {
    console.group('🎯 Core Web Vitals Report');
    
    const vitals = [
      { name: 'LCP (Largest Contentful Paint)', current: Math.round(metrics.lcp), target: this.BUDGETS.lcpTarget, unit: 'ms' },
      { name: 'FID (First Input Delay)', current: Math.round(metrics.fid), target: this.BUDGETS.fidTarget, unit: 'ms' },
      { name: 'CLS (Cumulative Layout Shift)', current: Math.round(metrics.cls * 1000) / 1000, target: this.BUDGETS.clsTarget, unit: '' },
    ];

    vitals.forEach(({ name, current, target, unit }) => {
      const status = (name.includes('CLS') ? current <= target : current <= target) ? '✅' : '❌';
      console.log(`${status} ${name}: ${current}${unit} (Target: ${target}${unit})`);
    });

    console.groupEnd();
  }

  static generatePerformanceReport(): void {
    console.log('🚀 Generating Performance Report...');
    
    // Run asset size check
    this.checkAssetSizes();
    
    // Run Core Web Vitals check
    this.measureCoreWebVitals();
    
    // Additional performance insights
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      console.group('📈 Additional Performance Metrics');
      console.log(`Time to First Byte (TTFB): ${Math.round(navigation.responseStart)} ms`);
      console.log(`DOM Content Loaded: ${Math.round(navigation.domContentLoadedEventEnd)} ms`);
      console.log(`Page Load Complete: ${Math.round(navigation.loadEventEnd)} ms`);
      console.groupEnd();
    }
  }
}

// Auto-run performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      PerformanceBudget.generatePerformanceReport();
    }, 2000);
  });
}