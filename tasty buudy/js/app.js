// Main application controller - initializes and wires everything together

/**
 * Initialize the Tasty Buddy application
 */
function init() {
  // Initialize authentication
  initAuth();

  // Initialize navigation
  initNavigation();

  // Initialize UI components
  initUI();

  // Initialize cart
  initCart();

  // Initialize category filters
  initCategoryFilters();

  // Render order history on Profile page
  renderOrderHistory();

  // Mobile-specific optimizations
  initMobileOptimizations();

  console.log('Tasty Buddy application initialized successfully!');
}

/**
 * Initialize mobile-specific optimizations
 */
function initMobileOptimizations() {
  // Prevent pull-to-refresh on mobile browsers
  let lastTouchY = 0;
  let preventPullToRefresh = false;

  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    lastTouchY = e.touches[0].clientY;
    preventPullToRefresh = window.pageYOffset === 0;
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (preventPullToRefresh) {
      // Prevent pull-to-refresh if at the top of the page
      if (touchYDelta > 0) {
        e.preventDefault();
        return;
      }
      preventPullToRefresh = false;
    }
  }, { passive: false });

  // Fix viewport height for mobile browsers (address bar issue)
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 100);
  });

  // Prevent zoom on double-tap for specific elements
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Add active state for touch devices
  document.addEventListener('touchstart', () => {}, { passive: true });

  // Optimize scroll performance
  if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  // Detect if running as PWA
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
    || window.navigator.standalone 
    || document.referrer.includes('android-app://');

  if (isStandalone) {
    document.body.classList.add('pwa-mode');
  }

  // Handle orientation changes
  window.addEventListener('orientationchange', () => {
    // Force reflow to fix layout issues
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
  });

  // Improve touch scrolling on iOS
  const scrollableElements = document.querySelectorAll('.page-content, .modal-content, .ordered-items-section');
  scrollableElements.forEach(element => {
    element.style.webkitOverflowScrolling = 'touch';
  });
}

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
