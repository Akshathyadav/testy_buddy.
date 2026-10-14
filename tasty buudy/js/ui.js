// UI module - handles UI interactions, modals, and notifications

let currentItemId = null;

/**
 * Show item detail modal
 * @param {number} itemId - The ID of the food item to display
 */
function showItemDetail(itemId) {
  const item = getFoodItemById(itemId);
  if (!item) return;

  currentItemId = itemId;

  // Populate modal with item details
  document.getElementById('detail-image').src = item.image;
  document.getElementById('detail-image').alt = item.name;
  document.getElementById('detail-name').textContent = item.name;
  document.getElementById('detail-description').textContent = item.description;
  document.getElementById('detail-ingredients').textContent = `Ingredients: ${item.ingredients}`;
  document.getElementById('detail-price').textContent = `₹${item.price}`;

  // Show the modal
  const modal = document.getElementById('item-detail-modal');
  modal.classList.remove('hidden');
  
  // Prevent body scroll on mobile
  document.body.classList.add('modal-open');
}

/**
 * Close item detail modal
 */
function closeItemDetail() {
  const modal = document.getElementById('item-detail-modal');
  modal.classList.add('hidden');
  currentItemId = null;
  
  // Re-enable body scroll
  document.body.classList.remove('modal-open');
}

/**
 * Show order confirmation modal
 * @param {object} orderDetails - The order details to display
 */
function showOrderConfirmation(orderDetails) {
  document.getElementById('order-id').textContent = orderDetails.orderId;
  document.getElementById('order-item-count').textContent = orderDetails.itemCount;
  document.getElementById('order-total-amount').textContent = orderDetails.totalAmount;

  // Display ordered items
  const orderedItemsList = document.getElementById('ordered-items-list');
  if (orderedItemsList && orderDetails.items) {
    orderedItemsList.innerHTML = '';
    
    orderDetails.items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'ordered-item';
      
      itemElement.innerHTML = `
        <div class="ordered-item-info">
          <div class="ordered-item-name">${item.name}</div>
          <div class="ordered-item-quantity">Quantity: ${item.quantity}</div>
        </div>
        <div class="ordered-item-price">₹${item.price * item.quantity}</div>
      `;
      
      orderedItemsList.appendChild(itemElement);
    });
  }

  const modal = document.getElementById('order-confirmation-modal');
  modal.classList.remove('hidden');
  
  // Prevent body scroll on mobile
  document.body.classList.add('modal-open');
}

/**
 * Close order confirmation modal
 */
function closeOrderConfirmation() {
  const modal = document.getElementById('order-confirmation-modal');
  modal.classList.add('hidden');
  
  // Re-enable body scroll
  document.body.classList.remove('modal-open');
}

/**
 * Show notification toast
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success', 'error', 'info')
 */
function showNotification(message, type = 'success') {
  const toast = document.getElementById('notification-toast');
  const messageElement = document.getElementById('notification-message');

  messageElement.textContent = message;
  
  // Remove existing type classes
  toast.classList.remove('error', 'info');
  
  // Add type class if not success
  if (type !== 'success') {
    toast.classList.add(type);
  }

  // Show the toast
  toast.classList.remove('hidden');

  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-in-out';
    setTimeout(() => {
      toast.classList.add('hidden');
      toast.style.animation = '';
    }, 300);
  }, 3000);
}

/**
 * Initialize UI event listeners
 */
function initUI() {
  // Close item detail modal
  const closeDetailBtn = document.querySelector('#item-detail-modal .close-btn');
  const detailOverlay = document.querySelector('#item-detail-modal .modal-overlay');
  
  if (closeDetailBtn) {
    closeDetailBtn.addEventListener('click', closeItemDetail);
  }
  
  if (detailOverlay) {
    detailOverlay.addEventListener('click', closeItemDetail);
  }

  // Add to Cart button in modal
  const addToCartBtn = document.getElementById('modal-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (currentItemId) {
        addToCart(currentItemId);
        showNotification('Item added to cart!', 'success');
        closeItemDetail();
      }
    });
  }

  // Order Now button in modal
  const orderNowBtn = document.getElementById('modal-order-now');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
      if (currentItemId) {
        addToCart(currentItemId);
        closeItemDetail();
        switchTab('cart');
      }
    });
  }

  // Close order confirmation modal
  const closeOrderBtn = document.getElementById('close-order-confirmation');
  const orderOverlay = document.querySelector('#order-confirmation-modal .modal-overlay');
  
  if (closeOrderBtn) {
    closeOrderBtn.addEventListener('click', closeOrderConfirmation);
  }
  
  if (orderOverlay) {
    orderOverlay.addEventListener('click', closeOrderConfirmation);
  }

  // Explore More button on Home page
  const exploreBtn = document.getElementById('explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      switchTab('items');
    });
  }
}

