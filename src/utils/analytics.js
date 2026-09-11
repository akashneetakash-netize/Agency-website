// Centralized Analytics Integration Helper

const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID || 'G-COGNIFY-DEV';

export function trackPageView(path) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS_ID, {
      page_path: path,
    });
  }
  console.log(`[Analytics] PageView tracked: ${path}`);
}

export function trackEvent(eventName, properties = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  console.log(`[Analytics] Event tracked: ${eventName}`, properties);
}

export function trackFormSubmission(formName, isSuccess) {
  trackEvent('form_submission', {
    form_name: formName,
    success: isSuccess,
    timestamp: new Date().toISOString()
  });
}
