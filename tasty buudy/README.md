# Tasty Buddy - Indian Food Delivery Application 🍛

A beautiful single-page web application for browsing and ordering delicious Indian food items, built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Tab-based Navigation**: Seamlessly navigate between Home, About, Items, Profile, and Cart pages
- **Food Catalog**: Browse 8+ authentic Indian dishes including appetizers, main courses, and desserts
- **Item Details**: View comprehensive information about each dish with images, descriptions, and ingredients
- **Shopping Cart**: Add items, adjust quantities, and manage your order
- **User Authentication**: Login/Signup system with profile management
- **Order History**: Track all your past orders with detailed information
- **Checkout System**: Complete order flow with delivery details and payment options
- **Persistent Storage**: Cart data, user info, and order history saved using localStorage
- **Responsive Design**: Beautiful UI with smooth animations and transitions

## 🚀 How to Run

### Option 1: Direct File Opening (Simplest)
1. Right-click on `index.html`
2. Select "Open with" and choose your browser (Chrome, Firefox, Edge, etc.)

### Option 2: Using Local Server (Recommended)
Double-click `start-server.bat` and the server will start automatically!
- Opens at: http://localhost:8000
- Press Ctrl+C to stop the server

### Option 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Manual Python Server
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

## 📁 Project Structure

```
tasty-buddy/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling with animations
├── js/
│   ├── app.js          # Main application controller
│   ├── navigation.js   # Tab navigation logic
│   ├── foodData.js     # Food catalog data (8+ items)
│   ├── cart.js         # Cart & order management
│   ├── ui.js           # UI utilities and modals
│   └── auth.js         # Authentication system
├── start-server.bat    # Quick server launcher for Windows
├── .vscode/
│   └── launch.json     # VS Code debug configuration
└── .kiro/
    └── specs/          # Feature specifications
```

## 🎯 Usage Guide

1. **Home Tab**: View the welcome page with beautiful food imagery and inspiring quotes
2. **Items Tab**: Click "Explore More" or navigate to Items to browse the full menu
3. **Item Details**: Click any food item card to see detailed information
4. **Add to Cart**: Use "Add to Cart" or "Order Now" buttons
5. **Cart Tab**: Review your order, adjust quantities, and proceed to checkout
6. **Checkout**: Fill in delivery details and select payment method
7. **Profile Tab**: Login/Signup to track orders and manage your account
8. **About Tab**: Learn more about Tasty Buddy and how it works

## 🍽️ Food Items

The application features 8 authentic Indian dishes:

**Appetizers:**
- Samosa - ₹40
- Pav Bhaji - ₹80

**Main Courses:**
- Chicken Biryani - ₹250
- Butter Chicken - ₹250
- Paneer Tikka - ₹300
- Mutton Biryani - ₹240
- Tandoori Roti with Paneer Curry - ₹500

**Desserts:**
- Kheer - ₹90

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern styling with CSS Variables, Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Modular vanilla JavaScript
- **LocalStorage API**: For data persistence
- **Unsplash API**: For high-quality food images

## 🎨 Features Highlights

- Smooth page transitions and animations
- Glowing call-to-action buttons with pulse effects
- Modal dialogs for item details, checkout, and authentication
- Toast notifications for user feedback
- Persistent cart across browser sessions
- Complete order history tracking
- Form validation for checkout and authentication
- Responsive grid layouts for all screen sizes
- Custom scrollbars for better aesthetics
- Quantity controls with smooth animations

## 🐛 Troubleshooting

**Website not loading in Kiro/VS Code?**
- Use the `start-server.bat` file to launch a local server
- Or right-click `index.html` and open with your browser directly
- The `.vscode/launch.json` is now configured for both file and server modes

**Images not showing?**
- Check your internet connection (images load from Unsplash CDN)
- Some browsers may block external images when opening files directly
- Using a local server (Option 2) resolves this issue

**Cart not persisting?**
- Make sure your browser allows LocalStorage
- Check browser privacy settings
- Clear browser cache and try again

**Console errors?**
- Press F12 to open browser DevTools
- Check the Console tab for specific error messages
- Ensure all JS files are loading correctly

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📝 Notes

- All data is stored locally in your browser (LocalStorage)
- No backend server or database required
- Images are loaded from Unsplash CDN for demonstration
- Sample Indian food items with realistic pricing
- Authentication is simulated (no real backend)

## 🔒 Security Note

This is a demonstration project. In a production environment:
- Never store passwords in plain text (currently stored in localStorage)
- Use proper backend authentication with encrypted passwords
- Implement HTTPS for secure data transmission
- Add CSRF protection and input sanitization

## 📄 License

This project is created for educational purposes and is open source.

---

Made with ❤️ for food lovers everywhere!

**Enjoy your meal! 🍛🍕🍰**
