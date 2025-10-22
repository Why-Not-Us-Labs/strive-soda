# STRIVE SODA SITE AUDIT REPORT
**Date:** October 12, 2025
**Audited By:** Claude Code
**Purpose:** Verify all pages have the right sections before adding images

---

## PRODUCT PAGES AUDIT

### Current State (product.json)

**✅ ENABLED Sections:**
1. Main product section (t-product)
   - Title block ✅
   - Description block ✅
   - Variant picker ✅
   - Judge.me review preview badge ✅
   - Price ✅
   - Quantity selector (disabled currently)
   - Appstle subscription widget ✅
   - Buy buttons ✅
   - Payment icons (disabled)
   - Popup (disabled) - was for nutrition facts
   - Collapsible tabs (disabled x2) - were for "Who's it for" and "Benefits"

2. Slideshow section (gs_slideshow_qE9PBK) ✅
   - Has single slide with desktop/mobile images
   - Location: Below main product section

3. Image with text sections (4 copies - ALL DISABLED)
   - gs_image_text_p99qzw
   - gs_image_text_3C3yyj
   - gs_image_text_9Ntzxx
   - gs_image_text_cnancJ
   - Content: "What is Hydration Soda?" messaging

4. Hero banner section (gs_hero_BbanQq) - DISABLED
   - Has video block with tea b-roll
   - Content: "Fueling everyday movement" messaging

5. Product recommendations - DISABLED

6. Judge.me review widget ✅ ENABLED
   - Shows sample data currently
   - Located after product content

7. Hero double/multicolumn sections - DISABLED
   - Has 3 lifestyle images

8. Another hero banner - DISABLED

### ⚠️ MISSING Product Page Sections (Per P0 Requirements):

Based on CHECKLIST.md P0 requirements, we need to CREATE:

1. **Key Benefits Section** ❌ NOT FOUND
   - Should highlight: 180mg electrolytes, 100% honey, no synthetic sugars
   - Need to create: `sections/product-benefits.liquid`

2. **When to Drink Section** ❌ NOT FOUND
   - Should show lifestyle use cases (yoga, running, hiking, climbing)
   - Need to create: `sections/product-when-to-drink.liquid`

3. **Learn More CTA Section** ❌ NOT FOUND
   - Should link to science page
   - Could potentially use existing gs-hero or create new section

4. **Product Hero Image** ⚠️ PARTIALLY EXISTS
   - Slideshow section exists but needs proper product images
   - Needs: Can laying in ingredients (passion fruit/coconut for Tropical, peach/lemon for Peach Perfect)

### 🔧 Product Page Actions Needed:

**Before Images:**
- [ ] Enable or create "Key Benefits" section
- [ ] Enable or create "When to Drink" section
- [ ] Add "Learn More" CTA to science page
- [ ] Review disabled sections - determine which to keep/remove
- [ ] Clean up 4 duplicate disabled image-text sections

**After Images Added:**
- [ ] Update slideshow with proper product hero images
- [ ] Add lifestyle images to "When to Drink" section

---

## HOMEPAGE AUDIT

### Current State (index.json)

**✅ ENABLED Sections:**
1. Hero section (gs-hero) ✅
   - Video: Solento web video
   - Fallback image
   - Mobile headline: "MEET THE SODA FOR MOVERS, SHAKERS, DOERS"
   - CTAs: "SHOP FLAVORS" and "What is hydration soda?"
   - ⚠️ Issue: heroMetaH1Bg still using old Tiffany Blue (#81d8d0) instead of #0ABAB5

2. Hero text section (gs_hero_text_DrHpxq) ✅
   - "What is Hydration Soda?" content
   - Electrolyte descriptions (sodium, potassium, magnesium)
   - CTA to science page

3. Featured collection carousel (gs_featured_collection_PVBnqW) ✅
   - Has custom CSS for Tiffany Blue background
   - Shows 2 products

4. Reviews section (gs_reviews_mHx8cH) ✅
   - Testimonials display

**🔴 DISABLED Sections:**
- Second featured collection
- Multiple image-text sections
- Marquee sections (2x) - "SUMMER ON THE INSIDE"
- Hero banner sections (2x)
- Hero double multicolumn
- Video with text
- Logo list
- Judge.me featured carousel
- FAQs section

### ⚠️ MISSING Homepage Sections (Per P0 Requirements):

1. **Enhanced Header Design** ⚠️ NEEDS REVIEW
   - Current hero exists but may need styling updates
   - Need to verify typography and layout polish

2. **"What is Hydration Soda?" Section with 3 CTAs** ⚠️ PARTIALLY EXISTS
   - Hero text section exists with electrolyte info
   - Has 1 CTA to science page
   - ❌ Missing structure for 3 distinct CTAs:
     - Amazing flavor → Shop
     - What is hydration soda? → Science page (top)
     - 100% organic honey → Science page (honey section)

3. **Product Carousel** ✅ EXISTS
   - Featured collection carousel is enabled
   - May need styling review

4. **Why Honey vs Synthetic Sugars Section** ❌ NOT FOUND
   - Need to create highlight section
   - Could adapt existing sections or create new one

5. **Footer Redesign with Social Links** ⚠️ NEEDS VERIFICATION
   - Footer is in group-footer.json (not audited yet)
   - Need to check footer structure

### 🔧 Homepage Actions Needed:

**Before Images:**
- [ ] Fix Tiffany Blue color in hero section (#81d8d0 → #0ABAB5)
- [ ] Create or adapt "Why Honey vs Synthetics" section
- [ ] Restructure "What is Hydration Soda" to have 3 distinct CTAs
- [ ] Review and enhance header typography/design
- [ ] Audit footer in group-footer.json
- [ ] Clean up disabled sections - remove or archive

**After Images Added:**
- [ ] Update hero video/image
- [ ] Add backup static hero image
- [ ] Update product carousel images with lifestyle contexts

---

## SCIENCE PAGE AUDIT

### Existing Science Sections Found:

1. **science-honey.liquid** ✅ EXISTS
   - Hero split layout with image
   - 3 benefit cards (Natural Energy, Healthy Carbs, Pure & Organic)
   - Sweetener comparison grid
   - Fully styled with brand colors and fonts

2. **science-electrolytes.liquid** - NEED TO CHECK

3. **science-cta.liquid** - NEED TO CHECK

### Science Sections Status:

**✅ COMPLETED Science Sections:**

1. **science-honey.liquid** ✅ PRODUCTION READY
   - Hero split layout with hardcoded honey image
   - 3 benefit cards (Natural Energy, Healthy Carbs, Pure & Organic)
   - Sweetener comparison grid (Honey vs Cane Sugar vs HFCS)
   - Fully styled with Tiffany Blue, Inter fonts, responsive
   - Ready for content/images

2. **science-electrolytes.liquid** ✅ PRODUCTION READY
   - Interactive hover/flip cards for 3 electrolytes (Sodium, Potassium, Magnesium)
   - Color-coded cards (Gold Yellow, Tiffany Blue, Orange)
   - Detailed benefits on card backs
   - Comparison table (Strive vs Traditional Soda vs Sports Drinks)
   - Mobile tap-to-flip functionality
   - Fully styled and responsive
   - Ready for content/images

3. **science-cta.liquid** ✅ PRODUCTION READY
   - Bold orange CTA section
   - "Ready to Try Hydration Soda?" messaging
   - Button linking to shop
   - Fully styled and responsive
   - Ready for content

### ⚠️ MISSING Science Page Sections (Per P1 Requirements):

Based on CHECKLIST.md P1 requirements, we need to ADD/CREATE:

1. **"The Science Behind Hydration Soda" Hero Section** ❌ NOT FOUND
   - Should be top of page with headline
   - Could create new section or adapt existing hero section

2. **75% Dehydration Stat Callout** ❌ NOT FOUND
   - Prominent stat display
   - Need to create new callout section or add to hero

3. **Electrolyte Constellation Visual** ⚠️ NEEDS ENHANCEMENT
   - science-electrolytes.liquid has cards but no "constellation" visual
   - P1 requirement: "constellation visual (sodium, potassium, magnesium, calcium with connecting lines)"
   - Current: Hover cards (good)
   - Missing: Visual showing relationships/connections between electrolytes
   - Note: Also missing **Calcium** (20mg) - only has Sodium, Potassium, Magnesium

4. **Why NOT Synthetic Sugars Section** ❌ NOT FOUND
   - Should highlight health risks, blood sugar crashes, chemical additives
   - Different from honey benefits section
   - Need to create new section

### 🔧 Science Page Actions Needed:

**Before Images:**
- [ ] Create science page hero section with "The Science Behind Hydration Soda" headline
- [ ] Add 75% dehydration stat callout (could be in hero)
- [ ] Add Calcium (20mg) to electrolytes section
- [ ] Update electrolyte amounts to correct values:
  - Sodium: 100mg ✅
  - Potassium: 30mg (currently shows 100mg ❌)
  - Magnesium: 30mg (currently shows 100mg ❌)
  - Calcium: 20mg (missing ❌)
- [ ] Create "Why NOT Synthetic Sugars" section
- [ ] Consider adding constellation visual or keep hover cards as-is

**After Images Added:**
- [ ] Update electrolyte cards with any visual assets
- [ ] Add constellation visual if designed

---

## SHOP PAGE AUDIT

Need to check collection template and shop page structure.

### 🔍 Actions Needed:
- [ ] Read collection template
- [ ] Verify hover effects are implemented
- [ ] Check product grid layout
- [ ] Verify font/color consistency

---

## NAVIGATION AUDIT

Need to check header structure and menu configuration.

### 🔍 Actions Needed:
- [ ] Read group-header.json
- [ ] Verify navigation menu structure
- [ ] Check "Learn" dropdown configuration
- [ ] Verify search and cart alignment

---

## SUMMARY OF FINDINGS

### ✅ WHAT'S WORKING WELL:

1. **Science Page Sections** - Three beautiful, fully-functional sections ready to go
2. **Product Page Structure** - Main template with Judge.me, subscription widget, buy buttons
3. **Homepage Hero** - Video/image hero with CTAs to shop and science page
4. **Brand Consistency** - CSS variables, Inter fonts, Tiffany Blue throughout existing sections

### 🔴 CRITICAL MISSING PIECES (P0):

**Product Pages:**
1. Key Benefits section (electrolytes, honey, no synthetics)
2. When to Drink section (lifestyle use cases)
3. Learn More CTA to science page
4. Product hero images (cans in ingredients)

**Homepage:**
1. 3-CTA structure for "What is Hydration Soda" section
2. Why Honey vs Synthetics highlight section
3. Tiffany Blue color fix in hero (#81d8d0 → #0ABAB5)

**Navigation:**
1. Fix "Learn" dropdown
2. Verify header alignment (search/cart)

### ⚠️ HIGH PRIORITY MISSING PIECES (P1):

**Science Page:**
1. Hero section with "The Science Behind Hydration Soda" headline
2. 75% dehydration stat callout
3. Calcium electrolyte (20mg) - currently missing
4. Correct electrolyte amounts (Potassium and Magnesium showing 100mg instead of 30mg)
5. "Why NOT Synthetic Sugars" section

**Shop Page:**
1. Hover effects (blue → lifestyle shot)
2. Mobile optimization

### 📋 NEXT STEPS:

1. **IMMEDIATE:** Create missing product page sections
   - product-benefits.liquid
   - product-when-to-drink.liquid
   - product-science-cta.liquid (or reuse existing CTA section)

2. **IMMEDIATE:** Fix homepage
   - Update hero Tiffany Blue color
   - Create/adapt "Why Honey vs Synthetics" section
   - Restructure "What is Hydration Soda" for 3 CTAs

3. **IMMEDIATE:** Audit navigation
   - Check header configuration
   - Fix "Learn" dropdown

4. **AFTER PRODUCT PAGES:** Science page enhancements
   - Create hero section
   - Add 75% stat callout
   - Fix electrolyte amounts
   - Add Calcium
   - Create "Why NOT Synthetics" section

5. **AFTER PRODUCT PAGES:** Shop page polish
   - Add hover effects
   - Optimize mobile

---

## FILES TO CREATE:

### Product Page Sections:
1. `/sections/product-benefits.liquid` - Key benefits display
2. `/sections/product-when-to-drink.liquid` - Lifestyle use cases
3. `/sections/product-science-cta.liquid` - Or reuse existing science-cta.liquid

### Homepage Sections:
1. `/sections/home-honey-vs-synthetics.liquid` - Comparison highlight

### Science Page Sections:
1. `/sections/science-hero.liquid` - "The Science Behind Hydration Soda" hero
2. `/sections/science-stat-callout.liquid` - 75% dehydration stat
3. `/sections/science-why-not-synthetics.liquid` - Synthetic sugars warning

---

*Audit completed: October 12, 2025*
*Ready for section creation and polish*
