// Cart Management - Client-side only using localStorage
console.log('Cart.js loaded successfully');

const Cart = {
    // Get cart from localStorage
    getCart() {
        const cart = localStorage.getItem('pierres-cart');
        console.log('Getting cart from localStorage:', cart);
        return cart ? JSON.parse(cart) : [];
    },
    
    // Save cart to localStorage
    saveCart(cart) {
        localStorage.setItem('pierres-cart', JSON.stringify(cart));
        this.updateCartCount();
    },
    
    // Add item to cart
    addItem(product) {
        console.log('Adding item to cart:', product);
        const cart = this.getCart();
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
            console.log('Item already exists, incrementing quantity');
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            console.log('New item added to cart');
        }
        
        this.saveCart(cart);
        console.log('Cart after adding:', cart);
        return true;
    },
    
    // Remove item from cart
    removeItem(productId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== productId);
        this.saveCart(cart);
    },
    
    // Update quantity
    updateQuantity(productId, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            item.quantity = parseInt(quantity);
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart(cart);
            }
        }
    },
    
    // Get cart total
    getTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    // Get cart item count
    getItemCount() {
        const cart = this.getCart();
        return cart.reduce((count, item) => count + item.quantity, 0);
    },
    
    // Clear cart
    clearCart() {
        localStorage.removeItem('pierres-cart');
        this.updateCartCount();
    },
    
    // Update cart count badge
    updateCartCount() {
        const count = this.getItemCount();
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-block' : 'none';
        }
    }
};

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, updating cart count');
    Cart.updateCartCount();
    console.log('Current cart:', Cart.getCart());
});
