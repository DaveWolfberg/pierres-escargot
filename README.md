# Pierre's Escargot 🐌

A simple static website template with Google Tag Manager, Shopify Buy Button integration, and custom script injection capabilities.

## What is this project?

This is a minimal, production-ready static site designed for:
- **Google Tag Manager (GTM)** - Track user behavior and analytics
- **Shopify Buy Button** - Sell products directly on your static site
- **Custom Script Injection** - Easily add third-party pixels, chat widgets, or tracking scripts

Perfect for launching a simple e-commerce landing page or product showcase with GitHub Pages.

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
   git commit -m "Configure GTM and Shopify"
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

### 2. Shopify Buy Button

**Find this section near the bottom of `<body>`:**
```javascript
// ============================================================
// SHOPIFY CONFIGURATION - REPLACE THESE VALUES
// ============================================================
var domain = 'your-store.myshopify.com';
var storefrontAccessToken = 'your-storefront-access-token-here';
var productId = 'gid://shopify/Product/1234567890';
```

**Replace these three values:**

- **`domain`**: Your Shopify store domain (e.g., `pierres-escargot.myshopify.com`)
- **`storefrontAccessToken`**: Your Storefront API access token
- **`productId`**: The product GID you want to display

**How to get these values:**

#### A. Get your Shopify domain
- It's in your Shopify admin URL: `https://[your-store].myshopify.com/admin`

#### B. Get your Storefront Access Token
1. In Shopify Admin, go to **Settings** → **Apps and sales channels**
2. Click **Develop apps** (or **Manage private apps** for older accounts)
3. Click **Create an app** → Name it (e.g., "Buy Button App")
4. Go to **Configuration** → **Storefront API** → Check **unauthenticated_read_product_listings**
5. Click **Install app** → Copy the **Storefront API access token**

#### C. Get your Product ID (GID)
1. In Shopify Admin, go to **Products**
2. Click on the product you want to sell
3. Look at the URL: `https://admin.shopify.com/store/[store]/products/[PRODUCT_ID]`
4. The product GID format is: `gid://shopify/Product/[PRODUCT_ID]`
   - Example: If URL shows `products/8675309`, use `gid://shopify/Product/8675309`

### 3. Custom Script Injection

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

### 4. Customize Content

Feel free to edit:
- **Header title and tagline** - Update the `<h1>` and `<p>` in `<header>`
- **Welcome text** - Edit the content in the first `<section>`
- **Colors and styling** - Modify CSS variables in `:root` or any other styles
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

### Shopify Buy Button not showing?
- Double-check your `domain`, `storefrontAccessToken`, and `productId`
- Make sure the product is published to your sales channel
- Check browser console for errors (F12 → Console)

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

---

**Happy selling! 🐌**
