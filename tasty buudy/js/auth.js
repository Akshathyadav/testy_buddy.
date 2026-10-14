// Authentication module - handles user login, signup, and session management

let currentUser = null;

/**
 * Initialize authentication on page load
 */
function initAuth() {
  // Check if user is already logged in
  const savedUser = localStorage.getItem('tastyBuddyCurrentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateUIForLoggedInUser();
  }
}

/**
 * Show login/signup modal
 */
function showAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
    showLoginForm();
    // Prevent body scroll on mobile
    document.body.classList.add('modal-open');
  }
}

/**
 * Close auth modal
 */
function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    clearAuthForms();
    // Re-enable body scroll
    document.body.classList.remove('modal-open');
  }
}

/**
 * Show login form
 */
function showLoginForm() {
  document.getElementById('login-form-container').classList.remove('hidden');
  document.getElementById('signup-form-container').classList.add('hidden');
  document.getElementById('login-tab').classList.add('active');
  document.getElementById('signup-tab').classList.remove('active');
}

/**
 * Show signup form
 */
function showSignupForm() {
  document.getElementById('login-form-container').classList.add('hidden');
  document.getElementById('signup-form-container').classList.remove('hidden');
  document.getElementById('login-tab').classList.remove('active');
  document.getElementById('signup-tab').classList.add('active');
}

/**
 * Clear all form inputs
 */
function clearAuthForms() {
  document.getElementById('login-form').reset();
  document.getElementById('signup-form').reset();
}

/**
 * Handle user login
 */
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    showNotification('Please fill in all fields', 'error');
    return;
  }

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem('tastyBuddyUsers') || '[]');
  
  // Find user
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    currentUser = {
      name: user.name,
      email: user.email,
      phone: user.phone
    };
    localStorage.setItem('tastyBuddyCurrentUser', JSON.stringify(currentUser));
    updateUIForLoggedInUser();
    closeAuthModal();
    showNotification('Login successful! Welcome back!', 'success');
    switchTab('profile');
  } else {
    showNotification('Invalid email or password', 'error');
  }
}

/**
 * Handle user signup
 */
function handleSignup(event) {
  event.preventDefault();
  
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const phone = document.getElementById('signup-phone').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  // Validation
  if (!name || !email || !phone || !password || !confirmPassword) {
    showNotification('Please fill in all fields', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showNotification('Passwords do not match', 'error');
    return;
  }

  if (password.length < 6) {
    showNotification('Password must be at least 6 characters', 'error');
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem('tastyBuddyUsers') || '[]');
  
  // Check if email already exists
  if (users.find(u => u.email === email)) {
    showNotification('Email already registered', 'error');
    return;
  }

  // Create new user
  const newUser = {
    name,
    email,
    phone,
    password,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem('tastyBuddyUsers', JSON.stringify(users));

  // Auto login after signup
  currentUser = {
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone
  };
  localStorage.setItem('tastyBuddyCurrentUser', JSON.stringify(currentUser));
  
  updateUIForLoggedInUser();
  closeAuthModal();
  showNotification('Account created successfully! Welcome!', 'success');
  switchTab('profile');
}

/**
 * Handle user logout
 */
function handleLogout() {
  currentUser = null;
  localStorage.removeItem('tastyBuddyCurrentUser');
  updateUIForLoggedOutUser();
  showNotification('Logged out successfully', 'info');
  switchTab('home');
}

/**
 * Update UI for logged in user
 */
function updateUIForLoggedInUser() {
  if (!currentUser) return;

  // Update profile page
  document.getElementById('user-name').textContent = currentUser.name;
  document.getElementById('user-email').textContent = currentUser.email;
  document.getElementById('user-phone').textContent = currentUser.phone;

  // Update location from last order or show default
  const orders = loadOrderHistory();
  const locationElement = document.getElementById('user-location');
  if (orders.length > 0 && orders[orders.length - 1].deliveryDetails) {
    const lastOrder = orders[orders.length - 1];
    const location = `${lastOrder.deliveryDetails.city}, ${lastOrder.deliveryDetails.pincode}`;
    locationElement.textContent = location;
  } else {
    locationElement.textContent = 'Location not set';
  }

  // Update order count
  const orderCountBadge = document.getElementById('order-count');
  const quickOrderCount = document.getElementById('quick-order-count');
  if (orderCountBadge) {
    orderCountBadge.textContent = orders.length;
  }
  if (quickOrderCount) {
    quickOrderCount.textContent = orders.length;
  }

  // Show logout button, hide login prompt
  const loginPrompt = document.getElementById('login-prompt');
  const profileContent = document.getElementById('profile-content');
  const logoutBtn = document.getElementById('logout-btn');

  if (loginPrompt) loginPrompt.classList.add('hidden');
  if (profileContent) profileContent.classList.remove('hidden');
  if (logoutBtn) logoutBtn.classList.remove('hidden');

  // Load profile photo
  loadProfilePhoto();
}

/**
 * Toggle order history section visibility
 */
function toggleOrderHistory() {
  const orderHistorySection = document.getElementById('order-history-section');
  if (orderHistorySection) {
    orderHistorySection.classList.toggle('hidden');
    // Scroll to order history if showing
    if (!orderHistorySection.classList.contains('hidden')) {
      orderHistorySection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

/**
 * Clear all order history
 */
function clearOrderHistory() {
  // Confirm before clearing
  if (confirm('Are you sure you want to clear all order history? This action cannot be undone.')) {
    // Clear from localStorage
    localStorage.removeItem('tastyBuddyOrders');
    
    // Update UI
    renderOrderHistory();
    
    // Update order counts
    const orderCountBadge = document.getElementById('order-count');
    const quickOrderCount = document.getElementById('quick-order-count');
    if (orderCountBadge) {
      orderCountBadge.textContent = '0';
    }
    if (quickOrderCount) {
      quickOrderCount.textContent = '0';
    }
    
    showNotification('Order history cleared successfully', 'info');
  }
}

/**
 * Update UI for logged out user
 */
function updateUIForLoggedOutUser() {
  const loginPrompt = document.getElementById('login-prompt');
  const profileContent = document.getElementById('profile-content');
  const logoutBtn = document.getElementById('logout-btn');

  if (loginPrompt) loginPrompt.classList.remove('hidden');
  if (profileContent) profileContent.classList.add('hidden');
  if (logoutBtn) logoutBtn.classList.add('hidden');
}

/**
 * Check if user is logged in
 */
function isUserLoggedIn() {
  return currentUser !== null;
}

/**
 * Get current user
 */
function getCurrentUser() {
  return currentUser;
}

/**
 * Handle profile photo upload
 */
function handleProfilePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Validate file type
  if (!file.type.startsWith('image/')) {
    showNotification('Please select an image file', 'error');
    return;
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    showNotification('Image size should be less than 5MB', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const imageData = e.target.result;
    
    // Save to localStorage
    if (currentUser) {
      localStorage.setItem('tastyBuddyProfilePhoto_' + currentUser.email, imageData);
      displayProfilePhoto(imageData);
      showNotification('Profile photo updated successfully!', 'success');
    }
  };
  reader.readAsDataURL(file);
}

/**
 * Display profile photo
 */
function displayProfilePhoto(imageData) {
  const profilePicture = document.getElementById('profile-picture');
  const defaultAvatar = document.getElementById('default-avatar');
  
  if (profilePicture && defaultAvatar) {
    profilePicture.src = imageData;
    profilePicture.classList.remove('hidden');
    defaultAvatar.classList.add('hidden');
  }
}

/**
 * Load profile photo
 */
function loadProfilePhoto() {
  if (!currentUser) return;
  
  const savedPhoto = localStorage.getItem('tastyBuddyProfilePhoto_' + currentUser.email);
  if (savedPhoto) {
    displayProfilePhoto(savedPhoto);
  }
}
