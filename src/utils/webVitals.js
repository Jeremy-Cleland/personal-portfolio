import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

/**
 * Monitors and reports Core Web Vitals metrics
 * @param {Object} options - Configuration options
 * @param {boolean} options.reportToAnalytics - Whether to send metrics to analytics
 * @param {boolean} options.reportToConsole - Whether to log metrics to console
 * @param {Function} options.callback - Optional callback for custom handling
 */
export function reportWebVitals(options = {}) {
  const {
    reportToAnalytics = true,
    reportToConsole = true,
    callback = null,
  } = options;

  function handleReport({ name, delta, id, value }) {
    // Format the metric for readability
    const metric = {
      name,
      id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      delta: Math.round(name === 'CLS' ? delta * 1000 : delta),
      rating: getRating(name, value),
    };

    // Log to console if enabled
    if (reportToConsole) {
      console.log(`Web Vital: ${name}`, metric);
    }

    // Send to analytics if enabled
    if (reportToAnalytics && window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
        metric_id: id,
        metric_name: name,
        metric_value: value,
        metric_delta: delta,
        metric_rating: getRating(name, value),
      });
    }

    // Run custom callback if provided
    if (typeof callback === 'function') {
      callback(metric);
    }
  }

  // Monitor all core web vitals
  onCLS(handleReport);
  onFID(handleReport);
  onLCP(handleReport);
  onTTFB(handleReport);
  onFCP(handleReport);
}

/**
 * Get performance rating based on Google's Core Web Vitals thresholds
 */
function getRating(metric, value) {
  switch (metric) {
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    default:
      return 'unknown';
  }
} 