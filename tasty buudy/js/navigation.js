// Navigation module - handles tab switching and active state

/**
 * Switch to a specific tab/page
 * @param {string} tabName - The name of the tab to switch to
 */
function switchTab(tabName) {
  // Hide all page content
  const allPages = document.querySelectorAll('.page-content');
  allPages.forEach(page => {
    page.classList.remove('active');
  });

  // Show the selected page
  const selectedPage = document.getElementById(`${tabName}-page`);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }

  // Update active tab highlighting
  highlightActiveTab(tabName);

  // If switching to items page, automatically show main course
  if (tabName === 'items') {
    // Remove active class from all category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // Find and activate the main-course button
    const mainCourseBtn = document.querySelector('[data-category="main-course"]');
    if (mainCourseBtn) {
      mainCourseBtn.classList.add('active');
    }
    
    // Render main course items
    renderFoodItems('main-course');
  }
}

/**
 * Highlight the active navigation tab
 * @param {string} tabName - The name of the tab to highlight
 */
function highlightActiveTab(tabName) {
  // Remove active class from all tabs
  const allTabs = document.querySelectorAll('.nav-tab');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Add active class to the selected tab
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

/**
 * Update the cart count badge
 * @param {number} count - The number of items in the cart
 */
function updateCartCount(count) {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
    
    // Add pulse animation
    cartCountElement.classList.add('pulse');
    setTimeout(() => {
      cartCountElement.classList.remove('pulse');
    }, 300);
  }
}

/**
 * Initialize navigation event listeners
 */
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  
  navTabs.forEach(tab => {
    // Use both click and touchend for better mobile support
    const handleTabClick = (e) => {
      e.preventDefault();
      const tabName = tab.getAttribute('data-tab');
      switchTab(tabName);
    };
    
    tab.addEventListener('click', handleTabClick);
    
    // Add touch feedback for mobile devices
    tab.addEventListener('touchstart', () => {
      tab.style.opacity = '0.7';
    });
    
    tab.addEventListener('touchend', () => {
      tab.style.opacity = '1';
    });
    
    tab.addEventListener('touchcancel', () => {
      tab.style.opacity = '1';
    });
  });

  // Set Home as the default active tab
  switchTab('home');
  
  // Prevent double-tap zoom on buttons
  document.querySelectorAll('button, .nav-tab, .food-card').forEach(element => {
    element.addEventListener('touchend', (e) => {
      e.preventDefault();
      element.click();
    }, { passive: false });
  });
}
