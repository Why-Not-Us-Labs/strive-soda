# NEW SECTIONS CREATED - READY FOR IMAGES

**Date:** October 12, 2025
**Status:** ✅ Ready for image integration

---

## PRODUCT PAGE SECTIONS (P0 - Critical for Saturday Launch)

### 1. product-benefits.liquid ✅
**Location:** `/sections/product-benefits.liquid`

**What it does:**
- Displays 3 key benefit cards in a responsive grid
- Highlights: 180mg electrolytes, 100% organic honey, no synthetic sugars
- Shows electrolyte breakdown (100mg sodium, 30mg potassium, 30mg magnesium, 20mg calcium)

**Styling:**
- Gradient backgrounds for each card (Tiffany Blue, Gold, Orange accents)
- Hover effects (cards lift on hover)
- Fully responsive with mobile optimization
- Inter font, weight 800 for headings

**Ready for:**
- Product page integration via theme editor
- No images needed - uses emojis (⚡🍯🚫)

**How to add to product pages:**
1. Go to Shopify admin → Online Store → Themes → Customize
2. Navigate to any product page
3. Click "Add section" below the main product content
4. Search for "Product: Key Benefits"
5. Customize copy as needed

---

### 2. product-when-to-drink.liquid ✅
**Location:** `/sections/product-when-to-drink.liquid`

**What it does:**
- Shows lifestyle use cases in image + text cards
- Supports multiple blocks (yoga, running, climbing, hiking, etc.)
- Falls back to colorful emoji placeholders if no image provided

**Styling:**
- 4:3 aspect ratio image containers
- Hover zoom effect on images
- Gradient placeholder backgrounds (Tiffany Blue → Orange)
- Fully responsive grid (1-4 columns depending on screen size)

**Ready for:**
- YOUR lifestyle images! 🎯
- Yoga, running, climbing, hiking shots
- Product page integration via theme editor

**How to add to product pages:**
1. Customize → Product page → Add section
2. Search for "Product: When to Drink"
3. Section comes pre-loaded with 4 use cases (emojis as placeholders)
4. **Upload your lifestyle images** to each block
5. Adjust copy as needed

**Image specs:**
- Aspect ratio: 4:3 (landscape)
- Recommended size: 800px width minimum
- Format: JPG or PNG
- Lifestyle shots: People doing yoga, running, climbing, hiking WITH or WITHOUT product

---

### 3. product-science-cta.liquid ✅
**Location:** `/sections/product-science-cta.liquid`

**What it does:**
- Bold CTA section driving traffic to science page
- "What is Hydration Soda?" → Learn More button
- Links to science page

**Styling:**
- Tiffany Blue background
- White button with hover effect (inverts colors)
- Arrow animation on hover
- Fully responsive

**Ready for:**
- Product page integration (add at bottom of product pages)
- No images needed

**How to add to product pages:**
1. Customize → Product page → Add section at bottom
2. Search for "Product: Science CTA"
3. Verify link points to `/pages/science-behind-strive`

---

## HOMEPAGE SECTIONS (P0 - Critical for Saturday Launch)

### 4. home-honey-vs-synthetics.liquid ✅
**Location:** `/sections/home-honey-vs-synthetics.liquid`

**What it does:**
- Side-by-side comparison: Honey (winner) vs Synthetic Sugars
- Shows benefits of honey with ✓ checkmarks
- Shows issues with synthetics with ✗ crosses
- VS badge in center (orange circle)
- Optional CTA button to science page

**Styling:**
- Honey side: Gold gradient background, winner badge
- Synthetic side: Gray gradient, warning tone
- Orange "VS" circle divider
- Tiffany Blue CTA button at bottom
- Fully responsive (stacks on mobile)

**Ready for:**
- Homepage integration via theme editor
- No images needed - uses text and icons

**How to add to homepage:**
1. Customize → Homepage → Add section
2. Search for "Home: Honey vs Synthetics"
3. Place after "What is Hydration Soda?" section
4. Customize copy as needed

---

## HOMEPAGE FIX COMPLETED

### Tiffany Blue Color Correction ✅
**File:** `/templates/index.json`
**Change:** Line 56
- **Before:** `"heroMetaH1Bg": "#81d8d0"` (old incorrect blue)
- **After:** `"heroMetaH1Bg": "#0ABAB5"` (correct Tiffany Blue)

**Result:** Homepage hero now uses correct brand color

---

## HOW TO INTEGRATE - STEP BY STEP

### Product Pages Integration:

1. **Open Shopify admin** → Online Store → Themes → Customize
2. **Navigate to any product page** (Tropical Recharge, Peach Perfect, or Variety Pack)
3. **Scroll down past the main product section** (title, price, buy button)
4. **Click "Add section"** button
5. **Add sections in this order:**
   - Product: Key Benefits (no images needed)
   - Product: When to Drink (⚠️ ADD YOUR LIFESTYLE IMAGES HERE)
   - Product: Science CTA (no images needed)
6. **Customize each section:**
   - Update copy to match each product flavor
   - Upload lifestyle images to "When to Drink" blocks
   - Verify science page link works
7. **Save changes**
8. **Repeat for all 3 product pages**

### Homepage Integration:

1. **Open Shopify admin** → Customize homepage
2. **Add section:** Home: Honey vs Synthetics
3. **Place after:** "What is Hydration Soda?" section (gs_hero_text_DrHpxq)
4. **Customize copy** as needed
5. **Verify CTA link** points to science page
6. **Save changes**

---

## WHAT'S STILL MISSING (From Audit)

### P0 Items Still Needed:
- [ ] **Product hero images** - Cans laying in ingredients (passion fruit/coconut for Tropical, peach/lemon for Peach Perfect)
  - You're working on these! Drop them into the existing slideshow section
- [ ] **Homepage hero video/image** - 3D rotating can with lifestyle background
  - Replace existing video in hero section
- [ ] **Product carousel images** - Lifestyle context shots for homepage featured collection

### Navigation (Quick Fix):
- [ ] Check "Learn" dropdown configuration in theme editor
- [ ] Verify header search/cart alignment

---

## NEXT STEPS

1. **YOU:** Add lifestyle images to product pages
   - Upload yoga, running, climbing, hiking shots to "When to Drink" section blocks
   - Add hero images (cans in ingredients) to product slideshow sections

2. **ME:** After images are added
   - Fix Judge.me review display
   - Make product photos clickable (gallery view)
   - Configure subscription widget default

3. **BOTH:** Test on mobile and desktop

---

## BRAND CONSISTENCY CHECK ✅

All new sections follow brand guidelines:
- ✅ Tiffany Blue (#0ABAB5)
- ✅ Orange (#FF7A00)
- ✅ Gold Yellow (#FFD700) for accents
- ✅ Inter font family throughout
- ✅ Font-weight 800 for headings
- ✅ Mobile-first responsive design
- ✅ Hover effects and transitions
- ✅ 3px borders on cards/buttons

---

*Ready to rock! Add your images and let's ship this thing* 🚀
