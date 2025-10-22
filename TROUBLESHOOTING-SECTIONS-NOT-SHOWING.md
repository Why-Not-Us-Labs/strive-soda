# TROUBLESHOOTING: Sections Not Showing in Production

**Issue:** New sections pushed to Shopify but not appearing on product pages in production.

---

## ✅ WHAT WE CONFIRMED:

1. **Section files ARE on Shopify** (pushed successfully):
   - product-benefits.liquid
   - product-when-to-drink.liquid
   - product-science-cta.liquid
   - home-honey-vs-synthetics.liquid

2. **Template files ARE updated locally**:
   - product.json has all 3 new sections defined
   - index.json has honey vs synthetics section defined
   - Sections are in the "order" arrays

3. **Templates WERE pushed to Shopify** (saw success messages)

---

## 🤔 POSSIBLE CAUSES:

### 1. Template Files Didn't Actually Update on Shopify
**Most Likely Cause:** Even though we saw "success" messages, Shopify theme templates are special files that sometimes don't update the same way section files do.

**Solution:** Pull down the LIVE templates from Shopify to see what's actually there, then push again if needed.

### 2. Multiple Product Templates
**Possible:** Each product might be using a DIFFERENT product template (product.tropical.json, product.peach.json, etc.) instead of the default product.json.

**Solution:** Check if product-specific templates exist and update those too.

### 3. Dev Server vs Live Theme Mismatch
**Possible:** The local dev server might be connected to a DEVELOPMENT theme while we pushed to the LIVE theme.

**Solution:** Verify which theme ID the dev server is using vs which theme we pushed to.

---

## 🔧 LET'S FIX IT:

### STEP 1: Pull Down Current Live Templates

```bash
cd /Users/gmac/Dev/strive-soda

# Pull ONLY the template files from live theme to see what's actually there
shopify theme pull --theme=182679339300 --only templates/product.json templates/index.json
```

This will show us if our changes actually made it to Shopify or if they got overwritten.

### STEP 2: Check for Product-Specific Templates

```bash
# List all product templates
ls -la templates/product*.json
```

If you see files like:
- product.tropical-recharge.json
- product.peach.json
- product.variety-pack.json

Then each product is using its OWN template and we need to add our sections to ALL of them.

### STEP 3: Force Push Templates Again

If the pull shows our changes are missing, let's force push them:

```bash
# Push templates with force flag
shopify theme push --theme=182679339300 --allow-live --only templates/product.json templates/index.json
```

### STEP 4: Verify on Live Site

After pushing, clear browser cache and check:
- https://ab6dae-bb.myshopify.com/products/strive-soda-peach-12-pack
- https://ab6dae-bb.myshopify.com/

---

## 🎯 ALTERNATIVE: Use Theme Editor Instead

If pushing templates isn't working, we can add the sections via Shopify's theme editor UI:

1. Go to: https://ab6dae-bb.myshopify.com/admin/themes/182679339300/editor
2. Navigate to a product page
3. Click "Add section" (the sections ARE there, they just aren't added to the template yet)
4. Search for:
   - "Product: Key Benefits"
   - "Product: When to Drink"
   - "Product: Science CTA"
5. Add them in order
6. Save

This directly modifies the template JSON via Shopify's interface, which sometimes works better than pushing via CLI.

---

## 📊 DIAGNOSTIC COMMANDS:

Run these to see what's going on:

```bash
# 1. Check what theme dev server is connected to
shopify theme dev --help | grep -i theme

# 2. Pull templates from live to compare
shopify theme pull --theme=182679339300 --only templates/

# 3. Check if product-specific templates exist
ls templates/product*.json

# 4. View what's in live product.json (after pulling)
cat templates/product.json | grep -A 2 "product_benefits\|product_when\|product_science"
```

---

## ✅ QUICK TEST:

Let's test if sections are at least AVAILABLE in Shopify theme editor:

1. Go to: https://ab6dae-bb.myshopify.com/admin/themes/182679339300/editor
2. Navigate to any product page
3. Click "Add section" button
4. Search for "Product: Key Benefits"

**If you SEE it:** The section file uploaded successfully, we just need to add it to the template
**If you DON'T see it:** The section file didn't upload, need to push again

---

*Let's run STEP 1 and STEP 2 first to diagnose the issue!*
