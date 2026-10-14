// Cart module - handles shopping cart operations and order placement

let cartItems = [];

/**
 * Save cart to localStorage
 */
function saveCartToStorage() {
  try {
    localStorage.setItem('tastyBuddyCart', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
}

/**
 * Load cart from localStorage
 */
function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem('tastyBuddyCart');
    if (savedCart) {
      cartItems = JSON.parse(savedCart);
      updateCartCount(getTotalItemCount());
      renderCart();
    }
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    cartItems = [];
  }
}

/**
 * Get total number of items in cart
 * @returns {number} Total item count
 */
function getTotalItemCount() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Add item to cart or increment quantity if already exists
 * @param {number} itemId - The ID of the food item to add
 */
function addToCart(itemId) {
  const foodItem = getFoodItemById(itemId);
  if (!foodItem) return;

  // Check if item already exists in cart
  const existingItem = cartItems.find(item => item.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: foodItem.id,
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
      quantity: 1
    });
  }

  // Update UI and storage
  updateCartCount(getTotalItemCount());
  saveCartToStorage();
  renderCart();
}

/**
 * Remove item from cart
 * @param {number} itemId - The ID of the food item to remove
 */
function removeFromCart(itemId) {
  cartItems = cartItems.filter(item => item.id !== itemId);
  
  // Update UI and storage
  updateCartCount(getTotalItemCount());
  saveCartToStorage();
  renderCart();
}

/**
 * Update quantity of an item in cart
 * @param {number} itemId - The ID of the food item
 * @param {number} newQuantity - The new quantity
 */
function updateQuantity(itemId, newQuantity) {
  const item = cartItems.find(item => item.id === itemId);
  
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      item.quantity = newQuantity;
      updateCartCount(getTotalItemCount());
      saveCartToStorage();
      renderCart();
    }
  }
}

/**
 * Calculate total price of all items in cart
 * @returns {number} Total price
 */
function calculateTotal() {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Render cart items on the Cart page
 */
function renderCart() {
  const cartContainer = document.getElementById('cart-items-container');
  const emptyMessage = document.getElementById('empty-cart-message');
  const cartSummary = document.querySelector('.cart-summary');
  const totalAmountElement = document.getElementById('total-amount');

  if (!cartContainer) return;

  // Clear existing content
  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    // Show empty cart message
    if (emptyMessage) emptyMessage.classList.remove('hidden');
    if (cartSummary) cartSummary.style.display = 'none';
    return;
  }

  // Hide empty message and show summary
  if (emptyMessage) emptyMessage.classList.add('hidden');
  if (cartSummary) cartSummary.style.display = 'block';

  // Render each cart item
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    cartItemElement.setAttribute('data-item-id', item.id);

    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
      <div class="quantity-controls">
        <button class="qty-decrease" data-item-id="${item.id}">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="qty-increase" data-item-id="${item.id}">+</button>
      </div>
      <button class="remove-item-btn" data-item-id="${item.id}">Remove</button>
    `;

    cartContainer.appendChild(cartItemElement);
  });

  // Update total
  if (totalAmountElement) {
    totalAmountElement.textContent = calculateTotal();
  }

  // Add event listeners for quantity controls
  document.querySelectorAll('.qty-decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-item-id'));
      const item = cartItems.find(item => item.id === itemId);
      if (item) {
        updateQuantity(itemId, item.quantity - 1);
      }
    });
  });

  document.querySelectorAll('.qty-increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-item-id'));
      const item = cartItems.find(item => item.id === itemId);
      if (item) {
        updateQuantity(itemId, item.quantity + 1);
      }
    });
  });

  // Add event listeners for remove buttons
  document.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-item-id'));
      removeFromCart(itemId);
    });
  });
}

/**
 * Clear all items from cart
 */
function clearCart() {
  cartItems = [];
  updateCartCount(0);
  saveCartToStorage();
  renderCart();
}

/**
 * Generate a unique order ID
 * @returns {string} Unique order ID
 */
function generateOrderId() {
  return 'ORD' + Date.now() + Math.floor(Math.random() * 1000);
}

/**
 * Save order to order history in localStorage
 * @param {object} order - The order object to save
 */
function saveOrderToHistory(order) {
  try {
    let orderHistory = JSON.parse(localStorage.getItem('tastyBuddyOrders') || '[]');
    orderHistory.push(order);
    localStorage.setItem('tastyBuddyOrders', JSON.stringify(orderHistory));
  } catch (error) {
    console.error('Failed to save order to history:', error);
  }
}

/**
 * Show checkout modal
 */
function showCheckoutModal() {
  if (cartItems.length === 0) {
    showNotification('Your cart is empty!', 'error');
    return;
  }

  const modal = document.getElementById('checkout-modal');
  if (modal) {
    // Pre-fill user details if logged in
    const currentUser = getCurrentUser();
    if (currentUser) {
      document.getElementById('checkout-name').value = currentUser.name || '';
      document.getElementById('checkout-email').value = currentUser.email || '';
      document.getElementById('checkout-phone').value = currentUser.phone || '';
    }
    
    // Display order summary
    document.getElementById('checkout-total').textContent = calculateTotal();
    document.getElementById('checkout-items-count').textContent = getTotalItemCount();
    
    modal.classList.remove('hidden');
    
    // Prevent body scroll on mobile
    document.body.classList.add('modal-open');
  }
}

/**
 * Close checkout modal
 */
function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.getElementById('checkout-form').reset();
    
    // Re-enable body scroll
    document.body.classList.remove('modal-open');
  }
}

/**
 * Toggle UPI ID field based on payment method selection
 */
function toggleUpiField() {
  const paymentMethod = document.getElementById('payment-method').value;
  const upiField = document.getElementById('upi-field');
  const upiInput = document.getElementById('upi-id');
  
  if (paymentMethod === 'upi') {
    upiField.classList.remove('hidden');
    upiInput.setAttribute('required', 'required');
  } else {
    upiField.classList.add('hidden');
    upiInput.removeAttribute('required');
    upiInput.value = '';
  }
}

/**
 * Handle checkout form submission
 */
function handleCheckout(event) {
  event.preventDefault();
  
  // Get form data
  const name = document.getElementById('checkout-name').value.trim();
  const email = document.getElementById('checkout-email').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const city = document.getElementById('checkout-city').value.trim();
  const pincode = document.getElementById('checkout-pincode').value.trim();
  const paymentMethod = document.getElementById('payment-method').value;
  
  // Validation
  if (!name || !email || !phone || !address || !city || !pincode) {
    showNotification('Please fill in all delivery details', 'error');
    return;
  }

  if (!paymentMethod) {
    showNotification('Please select a payment method', 'error');
    return;
  }

  // UPI validation
  let upiId = null;
  if (paymentMethod === 'upi') {
    upiId = document.getElementById('upi-id').value.trim();
    if (!upiId) {
      showNotification('Please enter your UPI ID', 'error');
      return;
    }
    // Validate UPI ID format
    const upiPattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    if (!upiPattern.test(upiId)) {
      showNotification('Please enter a valid UPI ID', 'error');
      return;
    }
  }

  // Create order object
  const order = {
    orderId: generateOrderId(),
    items: [...cartItems],
    totalAmount: calculateTotal(),
    itemCount: getTotalItemCount(),
    orderDate: new Date().toISOString(),
    status: 'confirmed',
    deliveryDetails: {
      name,
      email,
      phone,
      address,
      city,
      pincode
    },
    paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI Payment',
    upiId: upiId
  };

  // Save to order history
  saveOrderToHistory(order);

  // Update order history display immediately
  renderOrderHistory();

  // Update order count badges
  const orders = loadOrderHistory();
  const orderCountBadge = document.getElementById('order-count');
  const quickOrderCount = document.getElementById('quick-order-count');
  if (orderCountBadge) {
    orderCountBadge.textContent = orders.length;
  }
  if (quickOrderCount) {
    quickOrderCount.textContent = orders.length;
  }

  // Update user location in profile
  if (typeof updateUIForLoggedInUser === 'function') {
    updateUIForLoggedInUser();
  }

  // Close checkout modal
  closeCheckoutModal();

  // Show confirmation modal
  showOrderConfirmation(order);

  // Clear cart
  clearCart();
}

/**
 * Place an order with current cart items (legacy - now redirects to checkout)
 */
function placeOrder() {
  showCheckoutModal();
}

/**
 * Load order history from localStorage
 * @returns {array} Array of past orders
 */
function loadOrderHistory() {
  try {
    return JSON.parse(localStorage.getItem('tastyBuddyOrders') || '[]');
  } catch (error) {
    console.error('Failed to load order history:', error);
    return [];
  }
}

/**
 * Render order history on Profile page
 */
function renderOrderHistory() {
  const ordersContainer = document.getElementById('orders-container');
  if (!ordersContainer) return;

  const orders = loadOrderHistory();

  if (orders.length === 0) {
    ordersContainer.innerHTML = '<p style="color: #666;">No orders yet. Start ordering delicious food!</p>';
    return;
  }

  ordersContainer.innerHTML = '';

  // Render orders in reverse chronological order
  orders.reverse().forEach(order => {
    const orderElement = document.createElement('div');
    orderElement.className = 'order-item';
    orderElement.style.cursor = 'pointer';

    const orderDate = new Date(order.orderDate).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    orderElement.innerHTML = `
      <div class="order-header">
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>Date:</strong> ${orderDate}</p>
        <p><strong>Items:</strong> ${order.itemCount}</p>
        <p><strong>Total:</strong> ₹${order.totalAmount}</p>
        <p><strong>Status:</strong> ${order.status}</p>
        <p class="view-details-hint">Click to view items ▼</p>
      </div>
      <div class="order-items-details hidden">
        ${order.items.map(item => `
          <div class="order-detail-item">
            <span class="item-name">${item.name}</span>
            <span class="item-quantity">Qty: ${item.quantity}</span>
            <span class="item-price">₹${item.price * item.quantity}</span>
          </div>
        `).join('')}
      </div>
    `;

    // Add click event to toggle items display
    orderElement.addEventListener('click', function() {
      const itemsDetails = this.querySelector('.order-items-details');
      const hint = this.querySelector('.view-details-hint');
      if (itemsDetails) {
        itemsDetails.classList.toggle('hidden');
        if (itemsDetails.classList.contains('hidden')) {
          hint.textContent = 'Click to view items ▼';
        } else {
          hint.textContent = 'Click to hide items ▲';
        }
      }
    });

    ordersContainer.appendChild(orderElement);
  });
}

/**
 * Initialize cart functionality
 */
function initCart() {
  // Load cart from storage
  loadCartFromStorage();

  // Place Order button
  const placeOrderBtn = document.getElementById('place-order-btn');
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', placeOrder);
  }
}
