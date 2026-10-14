// Food data module - contains the catalog of Indian food items

/**
 * Food catalog with minimum 8 Indian food items
 * Categories: appetizers, main-course, dessert
 */
const foodCatalog = [
  {
    id: 1,
    name: "Chicken Kabab",
    category: "appetizer",
    price: 220,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    description: "Juicy minced chicken kebabs seasoned with aromatic spices and herbs, grilled to perfection.",
    ingredients: "Minced chicken, onions, ginger-garlic, green chilies, coriander, garam masala"
  },
  {
    id: 49,
    name: "Chicken Leg Fried",
    category: "appetizer",
    price: 250,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    description: "Crispy fried chicken legs marinated in spicy batter, deep-fried until golden and crunchy.",
    ingredients: "Chicken legs, yogurt, red chili, ginger-garlic, cornflour, spices"
  },
  {
    id: 59,
    name: "Chicken 65",
    category: "appetizer",
    price: 240,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop",
    description: "Spicy, deep-fried chicken appetizer with South Indian flavors and curry leaves.",
    ingredients: "Chicken, yogurt, red chili, curry leaves, ginger-garlic, cornflour"
  },
  {
    id: 60,
    name: "Tandoori Chicken Wings",
    category: "appetizer",
    price: 260,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
    description: "Succulent chicken wings marinated in tandoori spices and grilled in clay oven.",
    ingredients: "Chicken wings, yogurt, tandoori masala, lemon juice, kasuri methi"
  },
  {
    id: 61,
    name: "Chicken Tikka",
    category: "appetizer",
    price: 230,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    description: "Boneless chicken pieces marinated in spiced yogurt and grilled to smoky perfection.",
    ingredients: "Chicken, yogurt, tandoori spices, ginger-garlic, lemon juice"
  },
  {
    id: 62,
    name: "Chili Chicken Dry",
    category: "appetizer",
    price: 245,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    description: "Indo-Chinese fusion with crispy chicken tossed in spicy chili sauce with bell peppers.",
    ingredients: "Chicken, bell peppers, onions, soy sauce, chili sauce, ginger-garlic, spring onions"
  },
  {
    id: 51,
    name: "Chili Paneer Dry",
    category: "appetizer",
    price: 175,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    description: "Indo-Chinese fusion with crispy paneer cubes tossed in spicy chili sauce with bell peppers.",
    ingredients: "Paneer, bell peppers, onions, soy sauce, chili sauce, ginger-garlic, spring onions"
  },
  {
    id: 53,
    name: "Stuffed Mushrooms",
    category: "appetizer",
    price: 190,
    image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?w=400&h=300&fit=crop",
    description: "Large mushroom caps stuffed with spiced cheese, herbs, and breadcrumbs, baked to golden perfection.",
    ingredients: "Large mushrooms, cream cheese, mozzarella, herbs, garlic, breadcrumbs"
  },
  {
    id: 54,
    name: "Paneer Tikka",
    category: "appetizer",
    price: 200,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    description: "Cottage cheese cubes marinated in tandoori spices and grilled with bell peppers.",
    ingredients: "Paneer, yogurt, tandoori masala, bell peppers, onions, lemon juice"
  },
  {
    id: 56,
    name: "Egg benidist",
    category: "appetizer",
    price: 185,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop",
    description: "Paneer cubes marinated in tangy pickle spices and grilled to perfection with a unique flavor.",
    ingredients: "Paneer, yogurt, pickle masala, mustard oil, fennel seeds, nigella seeds, bell peppers"
  },
  {
    id: 58,
    name: "Fried chicken leg",
    category: "appetizer",
    price: 500,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=300&fit=crop",
    description: "Healthy green vegetable patties made with spinach, peas, and potatoes, shallow fried to perfection.",
    ingredients: "Spinach, green peas, potatoes, paneer, green chilies, spices"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    category: "main-course",
    price: 250,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    description: "Fragrant basmati rice layered with tender mutton pieces, aromatic spices, and saffron. A royal feast!",
    ingredients: "Basmati rice, mutton, yogurt, saffron, biryani spices, fried onions"
  },
  {
    id: 4,
    name: "Butter Chicken",
    category: "main-course",
    price: 450,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    description: "Tender chicken pieces in a rich, creamy tomato-based gravy with butter and aromatic spices.",
    ingredients: "Chicken, tomatoes, cream, butter, kasuri methi, garam masala"
  },
  {
    id: 5,
    name: "Paneer Tikka",
    category: "main-course",
    price: 300,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions.",
    ingredients: "Paneer, yogurt, tandoori spices, bell peppers, onions"
  },
  {
    id: 6,
    name: "Mutton Biryani",
    category: "main-course",
    price: 750,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&h=300&fit=crop",
    description: "Aromatic basmati rice layered with marinated paneer cubes, herbs, and spices. A vegetarian delight!",
    ingredients: "Basmati rice, paneer, yogurt, saffron, biryani spices, fried onions, mint"
  },

  {
    id: 8,
    name: "Tandoori Roti with Paneer Curry",
    category: "main-course",
    price: 500,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    description: "Rich and creamy paneer curry cooked in aromatic tomato-onion gravy with authentic Indian spices.",
    ingredients: "Paneer, tomatoes, onions, cream, cashews, ginger-garlic, garam masala, kasuri methi"
  },
  {
    id: 9,
    name: "Masala Dosa",
    category: "main-course",
    price: 120,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
    description: "Crispy golden crepe made from fermented rice and lentil batter, filled with spiced potato masala.",
    ingredients: "Rice, urad dal, potatoes, mustard seeds, curry leaves, turmeric, onions"
  },
  {
    id: 10,
    name: "Chole Bhature",
    category: "main-course",
    price: 150,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=300&fit=crop",
    description: "Fluffy deep-fried bread served with spicy chickpea curry, a North Indian favorite.",
    ingredients: "Chickpeas, tomatoes, onions, ginger-garlic, chole masala, all-purpose flour"
  },
  {
    id: 11,
    name: "Palak Paneer",
    category: "main-course",
    price: 220,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    description: "Soft paneer cubes cooked in a creamy spinach gravy with aromatic spices.",
    ingredients: "Paneer, spinach, cream, tomatoes, ginger-garlic, garam masala"
  },
  {
    id: 12,
    name: "Dal Makhani",
    category: "main-course",
    price: 180,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    description: "Creamy black lentils slow-cooked with butter, cream, and aromatic spices.",
    ingredients: "Black lentils, kidney beans, butter, cream, tomatoes, ginger-garlic"
  },

  {
    id: 16,
    name: "Tandoori Chicken",
    category: "main-course",
    price: 320,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop",
    description: "Succulent chicken marinated in yogurt and spices, cooked in a traditional tandoor.",
    ingredients: "Chicken, yogurt, tandoori masala, lemon juice, kasuri methi"
  },
  {
    id: 17,
    name: "Rogan Josh",
    category: "main-course",
    price: 350,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    description: "Aromatic lamb curry cooked in a rich gravy with Kashmiri spices.",
    ingredients: "Lamb, yogurt, Kashmiri chili, fennel, ginger, garlic, onions"
  },
  {
    id: 18,
    name: "Hyderabadi Biryani",
    category: "main-course",
    price: 280,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    description: "Authentic Hyderabadi-style biryani with tender meat, fragrant rice, and dum-cooked perfection.",
    ingredients: "Basmati rice, chicken/mutton, yogurt, saffron, fried onions, mint"
  },


  {
    id: 24,
    name: "Malai Kofta",
    category: "main-course",
    price: 240,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    description: "Soft paneer and potato dumplings in a rich, creamy tomato-cashew gravy.",
    ingredients: "Paneer, potatoes, cashews, cream, tomatoes, garam masala"
  },
  {
    id: 25,
    name: "Mango Lassi Shake",
    category: "shakes",
    price: 120,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop",
    description: "Creamy and refreshing mango yogurt shake made with fresh Alphonso mangoes, yogurt, and a hint of cardamom.",
    ingredients: "Fresh mango pulp, yogurt, milk, sugar, cardamom, ice"
  },
  {
    id: 26,
    name: "Chocolate Oreo Shake",
    category: "shakes",
    price: 150,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
    description: "Decadent chocolate shake blended with crushed Oreo cookies, topped with whipped cream and cookie crumbles.",
    ingredients: "Chocolate ice cream, milk, Oreo cookies, chocolate syrup, whipped cream"
  },
  {
    id: 27,
    name: "Strawberry Delight Shake",
    category: "shakes",
    price: 140,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop",
    description: "Fresh strawberry shake with vanilla ice cream, topped with fresh strawberry slices and whipped cream.",
    ingredients: "Fresh strawberries, vanilla ice cream, milk, sugar, whipped cream"
  },
  {
    id: 28,
    name: "Peanut Butter Banana Shake",
    category: "shakes",
    price: 160,
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop",
    description: "Protein-rich shake with creamy peanut butter, ripe bananas, and honey for natural sweetness.",
    ingredients: "Bananas, peanut butter, milk, honey, vanilla ice cream, cinnamon"
  },
  {
    id: 29,
    name: "Cold Coffee Shake",
    category: "shakes",
    price: 130,
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop",
    description: "Rich and creamy iced coffee shake with a perfect blend of espresso, milk, and vanilla ice cream.",
    ingredients: "Espresso, vanilla ice cream, milk, sugar, chocolate syrup, whipped cream"
  },
  {
    id: 30,
    name: "Rose Falooda Shake",
    category: "shakes",
    price: 170,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    description: "Traditional Indian dessert shake with rose syrup, vermicelli, basil seeds, and vanilla ice cream.",
    ingredients: "Rose syrup, vermicelli, basil seeds, milk, vanilla ice cream, nuts"
  },
  {
    id: 31,
    name: "Butterscotch Crunch Shake",
    category: "shakes",
    price: 155,
    image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=400&h=300&fit=crop",
    description: "Smooth butterscotch shake with crunchy praline bits, topped with caramel sauce and whipped cream.",
    ingredients: "Butterscotch ice cream, milk, butterscotch sauce, praline, caramel, whipped cream"
  },
  {
    id: 32,
    name: "Blueberry Blast Shake",
    category: "shakes",
    price: 165,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    description: "Antioxidant-rich shake with fresh blueberries, yogurt, and honey for a healthy indulgence.",
    ingredients: "Fresh blueberries, Greek yogurt, milk, honey, vanilla extract, ice"
  },
  {
    id: 33,
    name: "Nutella Hazelnut Shake",
    category: "shakes",
    price: 180,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop",
    description: "Premium shake with Nutella spread, roasted hazelnuts, and chocolate ice cream for ultimate indulgence.",
    ingredients: "Nutella, chocolate ice cream, milk, roasted hazelnuts, chocolate chips, whipped cream"
  },
  {
    id: 34,
    name: "Kesar Badam Shake",
    category: "shakes",
    price: 145,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",
    description: "Royal Indian shake with saffron strands, almonds, and cardamom for a luxurious taste.",
    ingredients: "Almonds, saffron, milk, sugar, cardamom, vanilla ice cream, pistachios"
  },
  {
    id: 36,
    name: "Kulfi Falooda",
    category: "dessert",
    price: 130,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    description: "Creamy traditional Indian ice cream served with vermicelli, rose syrup, and basil seeds.",
    ingredients: "Kulfi, vermicelli, rose syrup, basil seeds, milk, nuts"
  },
  {
    id: 42,
    name: "Ras Malai Cake",
    category: "dessert",
    price: 180,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    description: "Fusion dessert combining traditional rasmalai with soft sponge cake layers and cardamom cream.",
    ingredients: "Sponge cake, paneer, milk, cream, cardamom, saffron, pistachios"
  },
  {
    id: 44,
    name: "Strawberry Cheesecake Parfait",
    category: "dessert",
    price: 125,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    description: "Creamy pistachio-flavored traditional Indian ice cream with real pistachio chunks.",
    ingredients: "Pistachios, condensed milk, cream, cardamom, saffron"
  },
  {
    id: 46,
    name: "Chocolate Barfi",
    category: "dessert",
    price: 150,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    description: "Fusion Indian sweet combining traditional barfi with rich chocolate flavor.",
    ingredients: "Milk powder, condensed milk, cocoa powder, ghee, chocolate chips"
  },
  {
    id: 48,
    name: "Malai Sandwich",
    category: "dessert",
    price: 105,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    description: "Creamy milk-based dessert sandwiched between crispy wafers, topped with nuts and saffron.",
    ingredients: "Malai, wafers, condensed milk, cardamom, saffron, pistachios, almonds"
  }
];

/**
 * Get a food item by its ID
 * @param {number} itemId - The ID of the food item
 * @returns {object|null} The food item object or null if not found
 */
function getFoodItemById(itemId) {
  return foodCatalog.find(item => item.id === itemId) || null;
}

/**
 * Render food items on the Items page
 * @param {string} category - Optional category to filter by
 */
function renderFoodItems(category = null) {
  const itemsGrid = document.getElementById('items-grid');
  if (!itemsGrid) return;

  itemsGrid.innerHTML = '';

  // Filter items by category if specified
  const itemsToDisplay = category 
    ? foodCatalog.filter(item => item.category === category)
    : foodCatalog.filter(item => !['shakes', 'appetizer'].includes(item.category)); // Exclude shakes and appetizers from default view

  // Show message if no items found
  if (itemsToDisplay.length === 0) {
    itemsGrid.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No items found in this category.</p>';
    return;
  }

  // Special handling for appetizers - group by chicken and veg
  if (category === 'appetizer') {
    const chickenItems = itemsToDisplay.filter(item => 
      item.name.toLowerCase().includes('chicken')
    );
    const vegItems = itemsToDisplay.filter(item => 
      !item.name.toLowerCase().includes('chicken')
    );

    // Render Chicken Starters section
    if (chickenItems.length > 0) {
      const chickenHeading = document.createElement('h3');
      chickenHeading.className = 'category-heading';
      chickenHeading.textContent = '🍗 Chicken Starters';
      itemsGrid.appendChild(chickenHeading);

      chickenItems.forEach(item => {
        const foodCard = createFoodCard(item);
        itemsGrid.appendChild(foodCard);
      });
    }

    // Render Veg Starters section
    if (vegItems.length > 0) {
      const vegHeading = document.createElement('h3');
      vegHeading.className = 'category-heading';
      vegHeading.textContent = '🥗 Veg Starters';
      itemsGrid.appendChild(vegHeading);

      vegItems.forEach(item => {
        const foodCard = createFoodCard(item);
        itemsGrid.appendChild(foodCard);
      });
    }
  } else {
    // Regular rendering for other categories
    itemsToDisplay.forEach(item => {
      const foodCard = createFoodCard(item);
      itemsGrid.appendChild(foodCard);
    });
  }
}

/**
 * Create a food card element
 * @param {object} item - The food item object
 * @returns {HTMLElement} The food card element
 */
function createFoodCard(item) {
  const foodCard = document.createElement('div');
  foodCard.className = 'food-card';
  foodCard.setAttribute('data-item-id', item.id);
  
  foodCard.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3 class="item-name">${item.name}</h3>
    <p class="item-price">₹${item.price}</p>
  `;

  // Add click event to open detail view
  foodCard.addEventListener('click', () => {
    showItemDetail(item.id);
  });

  return foodCard;
}

/**
 * Initialize category filter buttons
 */
function initCategoryFilters() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get category from data attribute
      const category = button.getAttribute('data-category');
      
      // Render items for selected category
      renderFoodItems(category);
    });
  });
}
