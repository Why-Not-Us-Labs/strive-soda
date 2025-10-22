# FIX PRODUCTION ISSUES - STEP BY STEP

**Issues Found:**
1. ❌ New product page sections not showing (product-benefits, product-when-to-drink, product-science-cta)
2. ❌ Honey image showing "[HONEY IMAGE]" placeholder
3. ❌ Product descriptions showing short version only
4. ❌ Homepage honey vs synthetics section not showing

---

## 🚀 STEP 1: Push New Sections to Shopify (YOU NEED TO RUN THIS)

The sections we created exist locally but aren't live on Shopify yet.

### Run this command in your terminal:

```bash
cd /Users/gmac/Dev/strive-soda

shopify theme push --theme=182679339300 --only sections/product-benefits.liquid sections/product-when-to-drink.liquid sections/product-science-cta.liquid sections/home-honey-vs-synthetics.liquid
```

**When prompted:**
- **"Push theme files to the live theme?"** → Type `y` and press Enter

This will upload the 4 new section files to your live Shopify theme.

---

## 🎨 STEP 2: Add Sections to Product Pages (Via Shopify Theme Editor)

After pushing, the sections exist in Shopify but aren't added to the product template yet.

### For EACH product (Tropical Recharge, Peach Perfect, Variety Pack):

1. **Go to:** Shopify Admin → Online Store → Themes → Customize
2. **Navigate to:** Any product page (use the dropdown at top)
3. **Scroll down** past the main product section (after Add to Cart button)
4. **Click "Add section"**
5. **Search for and add** in this order:
   - ✅ "Product: Key Benefits"
   - ✅ "Product: When to Drink"
   - ✅ "Product: Science CTA"
6. **Customize each section:**
   - Update copy if needed for each specific product
   - Upload lifestyle images to "When to Drink" blocks
7. **Save**
8. **Important:** Product templates might be specific to each product variant, so you may need to repeat for all 3 products

---

## 🍯 STEP 3: Fix Honey Image on Science Page

The honey image URL is hardcoded but not loading. Two options:

### Option A: Upload image via Shopify theme editor (Easiest)

1. **Go to:** Customize → Science page
2. **Find:** "Science: Why Honey" section
3. **Click on the section settings**
4. **Find:** "Honey image" field
5. **Upload your honey image** (the one from your assets)
6. **Save**

### Option B: Fix the hardcoded URL (If you have the image file)

1. **Go to:** Shopify Admin → Content → Files
2. **Upload** your honey image file
3. **Copy the CDN URL** Shopify gives you
4. **Run this command** to update the file:

```bash
# Update with your new image URL
sed -i '' 's|https://cdn.shopify.com/s/files/1/0878/4170/2180/files/why-honey-img.png?v=1760288982|YOUR_NEW_URL_HERE|g' sections/science-honey.liquid

# Then push the updated file
shopify theme push --theme=182679339300 --only sections/science-honey.liquid
```

---

## 📝 STEP 4: Fix Product Descriptions

The descriptions are showing the short version. You need to update them in Shopify Admin.

### For EACH product:

1. **Go to:** Shopify Admin → Products
2. **Click on:** Product name
3. **Clear the current description completely**
4. **Click:** "<> Show HTML" button
5. **Paste the correct HTML** (from PRODUCT-DESCRIPTIONS.md file I created earlier)
6. **Click:** "<> Show HTML" again to preview
7. **Save**

**IMPORTANT:** Make sure to REPLACE the text, not APPEND to it. Delete everything first!

---

## 🏠 STEP 5: Add Honey vs Synthetics to Homepage

1. **Go to:** Customize → Homepage
2. **Scroll** to find a good spot (after "What is Hydration Soda?" section)
3. **Click "Add section"**
4. **Search for:** "Home: Honey vs Synthetics"
5. **Add it**
6. **Drag to position** it where you want
7. **Customize copy** if needed
8. **Save**

---

## ⚡ QUICK FIX CHECKLIST

Run these commands in order:

```bash
# 1. Make sure you're in the project directory
cd /Users/gmac/Dev/strive-soda

# 2. Push new sections to Shopify
shopify theme push --theme=182679339300 --only sections/product-benefits.liquid sections/product-when-to-drink.liquid sections/product-science-cta.liquid sections/home-honey-vs-synthetics.liquid
# (When prompted, type 'y' to confirm)

# 3. Then go to Shopify theme editor and:
#    - Add sections to product pages
#    - Fix honey image
#    - Update product descriptions
#    - Add honey vs synthetics to homepage
```

---

## 🔍 WHY THIS HAPPENED

1. **Sections not showing:** We created the .liquid files locally, but Shopify doesn't automatically sync them. You need to explicitly push them using `shopify theme push`.

2. **Sections not in template:** Even after pushing, section files just sit in the theme's /sections/ folder. You have to manually add them to page templates via the theme editor UI.

3. **Honey image:** The hardcoded URL might be pointing to an image that doesn't exist or was deleted. Using the image_picker field in the theme editor is more reliable.

4. **Product descriptions:** Shopify product data (title, description, price) is separate from theme files. You update this via Shopify Admin → Products, not via code.

---

## 📸 WHAT YOU'LL SEE AFTER FIXING:

### Product Pages:
- ✅ Full description with "BUILT FOR THOSE WHO STRIVE"
- ✅ "When to drink:" section
- ✅ Key Benefits cards (electrolytes, honey, no synthetics)
- ✅ When to Drink cards with your lifestyle images
- ✅ Science CTA section (Tiffany Blue)

### Science Page:
- ✅ Honey image loading properly

### Homepage:
- ✅ Honey vs Synthetics comparison section

---

*Start with STEP 1 (push command) and work through in order!* 🚀
