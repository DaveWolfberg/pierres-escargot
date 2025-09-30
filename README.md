# Pierre's Escargot 🐌

A simple static website template with Google Tag Manager, Shopify Buy Button integration, and custom script injection capabilities.

## What is this project?

This is a minimal, production-ready static site designed for:
- **Google Tag Manager (GTM)** - Track user behavior and analytics
- **Product Showcase** - Display products with manual buy buttons/links
- **Custom Script Injection** - Easily add third-party pixels, chat widgets, or tracking scripts

Perfect for launching a simple landing page or product showcase with GitHub Pages. All buttons and integrations are manual - no complex SDKs or dependencies.

## Quick Start

1. **Clone this repository** (if you haven't already):
   ```bash
   git clone https://github.com/yourusername/pierres-escargot.git
   cd pierres-escargot
   ```

2. **Edit the configuration** (see below)

3. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Configure site settings"
   git push origin main
   ```

4. **Enable GitHub Pages** (see instructions below)

## How to Edit `index.html`

The `index.html` file is fully self-contained with inline CSS and JavaScript. Here's what you need to customize:

### 1. Google Tag Manager

**Find this section in `<head>`:**
```javascript
})(window,document,'script','dataLayer','GTM-XXXXXXX');
```

**Replace `GTM-XXXXXXX`** with your actual GTM container ID (e.g., `GTM-ABC1234`).

**Also update the noscript tag in `<body>`:**
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
```

**Where to find your GTM ID:**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container
3. Look for the ID in the format `GTM-XXXXXXX` at the top

### 2. Product Cards & Buy Buttons

The site includes **three product cards** by default: Escargot, Croissant, and Mime Costume. Each has a simple "Buy Now" button.

**Find each product card in the HTML:**
```html
<div class="product-card">
    <img src="https://via.placeholder.com/400x300/..." alt="Premium Escargot">
    <h3>Escargot de Bourgogne</h3>
    <p>Traditional Burgundy snails...</p>
    <div class="product-price">$24.99</div>
    <a href="#" class="buy-button">Buy Now</a>
</div>
```

#### How to Configure Buy Buttons

Each product has a simple `<a href="#" class="buy-button">` link. Here are your options:

**Option 1: Link to External Store (Shopify, Etsy, etc.)**
```html
<a href="https://your-store.myshopify.com/products/escargot" class="buy-button">Buy Now</a>
```

**Option 2: Link to Checkout Page**
```html
<a href="https://checkout.your-store.com/escargot" class="buy-button">Buy Now</a>
```

**Option 3: Add JavaScript for Custom Behavior**
```html
<a href="#" class="buy-button" onclick="addToCart('escargot'); return false;">Buy Now</a>
```

Then add a script at the bottom:
```javascript
function addToCart(productId) {
    // Your custom cart logic here
    alert('Added ' + productId + ' to cart!');
}
```

**Option 4: Email/Contact Form**
```html
<a href="mailto:orders@pierres-escargot.com?subject=Order: Escargot" class="buy-button">Order via Email</a>
```

**Option 5: Embed Buy Button Widget**
Paste any third-party buy button code (Shopify, Gumroad, Stripe) directly:
```html
<!-- Replace the <a> tag with: -->
<div class="buy-button">
    <!-- Paste your Shopify/Gumroad/Stripe button code here -->
</div>
```

### 3. Update Product Details

**Edit prices:**
```html
<div class="product-price">$24.99</div>  <!-- Change this -->
```

**Edit product images:**
```html
<img src="https://via.placeholder.com/400x300/..." alt="Premium Escargot">
```
Replace `src` with:
- Direct image URL: `https://yourcdn.com/escargot.jpg`
- Relative path: `images/escargot.jpg` (if you add an `images/` folder)
- Any image hosting service (Imgur, Cloudinary, etc.)

**Edit titles and descriptions:**
```html
<h3>Escargot de Bourgogne</h3>
<p>Traditional Burgundy snails...</p>
```

**Add or remove products:**
- Copy/paste an entire `<div class="product-card">` block to add more
- Delete a product card to remove it
- The grid will automatically adjust (responsive CSS)

### 4. Custom Script Injection

**Find this section in `index.html`:**
```html
<!-- 
═══════════════════════════════════════════════════════════════
PASTE YOUR CUSTOM SCRIPTS HERE
Examples: Facebook Pixel, Intercom, Drift, Hotjar, etc.
═══════════════════════════════════════════════════════════════
-->
```

**Paste any third-party scripts here**, such as:
- Facebook Pixel
- Intercom chat widget
- Drift chat
- Hotjar analytics
- Custom tracking pixels
- Any other `<script>` tags

### 5. Customize Appearance

Feel free to edit:
- **Header title and tagline** - Update the `<h1>` and `<p>` in `<header>`
- **Welcome text** - Edit the content in the first `<section>`
- **Colors** - Modify CSS variables in `:root`:
  ```css
  :root {
      --primary-color: #2c3e50;    /* Dark blue-gray */
      --secondary-color: #3498db;   /* Blue (button color) */
      --accent-color: #e74c3c;      /* Red (warnings) */
  }
  ```
- **Button style** - Edit `.buy-button` CSS class
- **Meta tags** - Update description, title, etc. in `<head>`

## How to Enable GitHub Pages

Once you've committed and pushed your changes:

1. Go to your GitHub repository at `https://github.com/yourusername/pierres-escargot`
2. Click **Settings** (top navigation)
3. Scroll down and click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://yourusername.github.io/pierres-escargot/`

## File Structure

```
pierres-escargot/
├── index.html          # Main website file (HTML, CSS, and JS all in one)
└── README.md           # This file
```

That's it! Everything is self-contained in `index.html`.

## Troubleshooting

### Buy buttons not working?
- Check that `href` links are valid URLs (not `#`)
- If using JavaScript, check browser console for errors (F12 → Console)
- For third-party widgets (Shopify/Gumroad), verify embed code is correct
- Test links in incognito mode to rule out browser extensions

### Images not loading?
- Verify image URLs are valid and accessible
- Check for HTTPS/HTTP mixed content issues (GitHub Pages uses HTTPS)
- Try opening image URL directly in browser to test

### GTM not tracking?
- Verify your GTM container ID is correct
- Use [Google Tag Assistant](https://tagassistant.google.com/) browser extension to debug
- Check that you've published your GTM container

### GitHub Pages not updating?
- Changes may take 1-2 minutes to deploy
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the Actions tab in GitHub for deployment status

## License

MIT License - Feel free to use this template for any project!

## Tips for Going Live

- **Connect a custom domain**: GitHub Pages supports custom domains (e.g., `pierres-escargot.com`)
- **Add SSL**: GitHub Pages includes free HTTPS automatically
- **SEO**: Update meta tags in `<head>` for better search engine visibility
- **Analytics**: GTM is already set up - just configure your tags in Google Tag Manager
- **Payment processing**: Use Stripe, PayPal, Shopify Buy Buttons, or link to external store

---

**Happy selling! 🐌**
