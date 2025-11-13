# STRIVE SODA - COMPREHENSIVE IMPLEMENTATION PLAN
## November 6, 2025 - Phase 2: Content & Messaging Updates

---

## 🎯 PROJECT CONTEXT

### What We've Already Completed (Phase 1 - Design System)
✅ **Typography System**: Changed all font-weight from 800 to 400 (normal weight PolySans)
✅ **Corner Radius**: Standardized to 4px across all buttons and image boxes
✅ **Drop Shadows**: Removed all box-shadows from buttons and hover states (15+ instances)
✅ **No-Fill Buttons**: Implemented outlined button style (transparent bg, 2px solid border)
✅ **Hero Title Responsive**: Fixed cutoff at mid-size screens with reduced font sizes
✅ **Product Title Responsive**: Fixed flavor name cutoff with responsive sizing
✅ **Hero Copy**: Already matches Chris's feedback
✅ **Nutrition Facts Panel**: Updated to 9g sugars, removed Calcium, font-weight 400
✅ **Header Navigation**: Fixed tablet wrapping with tighter spacing and flex-wrap: nowrap

### Files Modified in Phase 1
- `assets/app.css` - Cart/checkout buttons, drop shadows removed
- `assets/product.css` - Product page styles, font-weights, drop shadows
- `assets/science-page.css` - Science page buttons, typography
- `assets/why-strive-works.css` - Typography, drop shadows
- `assets/what-is-hydration-soda.css` - Typography, drop shadows
- `assets/strive-header-footer.css` - Header/footer styles, navigation fix
- `assets/footer-phone.css` - Phone widget typography
- `sections/gs-hero.liquid` - Hero section responsive fixes, button styles
- `sections/product-nutrition-label.liquid` - Nutrition panel updates
- `templates/index.json` - Homepage structure (reference only)

---

## 📊 CRITICAL MESSAGING - RESOLVED ✅

### ✅ ELECTROLYTE AMOUNT CONFIRMED
**CONFIRMED**: **180mg total electrolytes** (Instagram ad is source of truth)
**Official Product Stats**:
- Calories: 45 (vs 140 regular soda)
- Electrolytes: 180mg (vs 18mg regular soda)
- Sugar: 8g (vs 39g regular soda)
- Carbs: 10g (vs 39g regular soda)

**STATUS**: Ready to proceed with updates

---

## 🎯 PHASE 2: CONTENT & MESSAGING STRATEGY

### Core Messaging Hierarchy (from Chris's Google Doc)
1. **Soda First** (Flavor Must Win) - Lead with enjoyment, not education
2. **Better-For-You** (Hydration Through Electrolytes) - Own "the hydration soda"
3. **Clean Ingredients** (The Baseline, Not the Billboard) - Trust & transparency, not headline

### Brand Mantra
"We Strive Together."

### Mission Statement (Final Version)
"To craft drinks that keep you hydrated, fueled, and feeling alive — no compromises, ingredients that work as hard as you do. Because when you're out there chasing your dream, you deserve a soda that shows up for you."

---

## 📋 IMPLEMENTATION TASKS - DETAILED BREAKDOWN

---

## TASK 1: UPDATE HOMEPAGE HERO SECTION

### WHAT
Update hero headline, subheadline, and CTAs to match Google Doc exactly

### WHERE
**File**: `templates/index.json`
**Section**: Line 38-48 (hero section settings)

### WHY
Current copy already matches BUT we need to add "Subscribe & Save" CTA button (currently missing)

### CURRENT IMPLEMENTATION
```json
"headline_mobile": "Soda That Tastes Amazing and Keeps You Hydrated",
"subhead_mobile": "Strive Soda combines bold flavor, clean ingredients, and natural hydration so you can enjoy your favorite soda—without compromise.",
"cta": "SHOP FLAVORS",
"url": "shopify://collections/all",
"cta2": "What is hydration soda?",
"url2": "shopify://pages/science-behind-strive"
```

### DESIRED OUTCOME
```json
"headline_mobile": "Soda That Tastes Amazing and Keeps You Hydrated",
"subhead_mobile": "Strive Soda combines bold flavor, clean ingredients, and natural hydration so you can enjoy your favorite soda—without compromise.",
"cta": "BUY NOW",
"url": "shopify://collections/all",
"cta2": "FIND IN STORE",
"url2": "shopify://pages/store-locator",
"cta3": "SUBSCRIBE & SAVE",
"url3": "shopify://account" (or subscription page URL)
```

### HOW
Need to check if `gs-hero.liquid` section supports 3 CTA buttons. If not, modify section schema.

### OWNER
**Claude** (code changes) + **Gavin** (Shopify admin for store locator page creation)

---

## TASK 2: REBUILD "WHAT IS HYDRATION SODA?" SECTION

### WHAT
Complete rewrite of content + add electrolyte amount + "when to drink" scenarios

### WHERE
**File**: `templates/index.json` (line 60-109)
**Section Type**: `what-is-hydration-soda`
**Template File**: `sections/what-is-hydration-soda.liquid`

### WHY
Current content is close but missing:
- Specific electrolyte amount (170mg or 180mg - TBD)
- "When to drink" scenarios
- Emphasis on "no synthetic sugars"

### CURRENT IMPLEMENTATION
```json
"heading": "What Is a Hydration Soda?",
"description": "<p>Hydration soda is a better-for-you sparkling beverage that tastes like soda but goes beyond flavor.</p><p>Unlike traditional sodas loaded with sugar and empty calories, Strive Soda is designed to:</p>",
```

Benefits:
- 💧 Support Hydration (sodium, potassium, magnesium)
- 🍯 Deliver Natural Energy (organic honey)
- ✨ Keep Ingredients Clean (no artificial flavors/colors)
- 🎯 Fit Your Lifestyle (long days, travel, anytime)

### DESIRED OUTCOME (from Google Doc)
**Heading**: "What Is a Hydration Soda?"

**Body Copy**:
"Hydration soda is a better-for-you sparkling beverage that tastes like soda but goes beyond flavor.

Unlike traditional sodas loaded with sugar and empty calories, Strive Soda is designed to:"

**Benefits** (updated):
- 💧 **Support Hydration**: Infused with **[170mg/180mg - TBD]** balanced electrolytes like sodium, potassium, and magnesium to help your body stay refreshed
- 🍯 **Deliver Natural Energy**: Sweetened with organic wildflower honey for smooth, steady energy, plus antioxidants, trace vitamins, and minerals. **No synthetic sugars** (sucralose, aspartame, HFCS)
- ✨ **Keep Ingredients Clean**: Free from artificial flavors, colors, and preservatives
- 🎯 **Fit Your Lifestyle**: Perfect for **afternoon soda replacement, post-workout, post-yoga/run, long workdays, or travel**

**New Paragraph**:
"Think of it as the soda you love—but with functional benefits that help you feel your best. Strive makes hydration delicious, simple, and guilt-free."

**CTA**: "Learn More About Hydration Soda" → `/pages/science-behind-strive`

### HOW
1. Read `sections/what-is-hydration-soda.liquid` to understand schema
2. Update schema defaults in section file
3. Update `templates/index.json` with new content
4. Add emphasis on "no synthetic sugars"
5. Add "when to drink" scenarios to lifestyle benefit

### OWNER
**Claude** (code changes)

---

## TASK 3: UPDATE "WHY STRIVE WORKS" SECTION

### WHAT
Update benefit language to emphasize hydration-first, add icons, ensure messaging consistency

### WHERE
**File**: `templates/index.json` (line 134-183)
**Section Type**: `why-strive-works`
**Template File**: `sections/why-strive-works.liquid`

### WHY
Current benefits are good but need to:
- Emphasize "hydration support" not just "hydration redefined"
- Be more specific about electrolytes
- Maintain brand hierarchy (soda first, hydration second)

### CURRENT IMPLEMENTATION
```json
"heading": "Why Strive Works",
"subheading": "Refreshment you can feel good about",
"cta_text": "Shop Flavors",
"cta_link": "shopify://collections/all"
```

Benefits:
- 💧 Hydration Redefined: Electrolytes for balance and refreshment
- 🍯 Clean, Natural Sweetness: Organic honey instead of refined sugar
- ✨ Better-for-You: Low sugar, natural, indulgent flavor
- 🌱 Feel Good Ingredients: Free from artificial flavors, colors, and preservatives

### DESIRED OUTCOME (from Google Doc)
**Heading**: "How It Works"
**Subheadline**: "Functional Benefits"

Benefits (updated):
- 💧 **Hydration Redefined**: Electrolytes support subtle hydration for your everyday life
- 🍯 **Clean, Natural Sweetness**: Organic honey provides smooth, flavorful sweetness without refined sugar
- ✨ **Better-for-You**: Low sugar, natural, and indulgent
- 🎯 **Refreshment You Can Feel Good About**: Crisp, sparkling soda designed to delight your taste buds while helping you stay balanced

**CTA**: "Shop Flavors"

### HOW
1. Update `templates/index.json` with new benefit copy
2. Keep existing benefit structure
3. Maintain icon system (💧🍯✨🌱)

### OWNER
**Claude** (code changes)

---

## TASK 4: ADD "COMPARE STRIVE VS REGULAR SODA" SECTION

### WHAT
Build brand new comparison table section showing Strive vs Regular Soda side-by-side

### WHERE
**New Section File**: `sections/strive-comparison-table.liquid` (needs to be created)
**Add to Homepage**: `templates/index.json` (insert after "Why Strive Works" section)

### WHY
Critical for conversion - shows clear differentiation from regular soda
Per Google Doc: "Add side-by-side table comparing Strive to regular soda: sugar, electrolytes, sweetener, artificial ingredients, hydration support"

### CURRENT IMPLEMENTATION
❌ Does not exist

### DESIRED OUTCOME
**New Section with:**

| Feature | Regular Soda | Strive Soda |
|---------|--------------|-------------|
| Sugar per can | 39g+ | 9g |
| Electrolytes | 0mg | [170mg/180mg - TBD] |
| Sweetener | High Fructose Corn Syrup | 100% Organic Wildflower Honey |
| Artificial Ingredients | Yes (colors, flavors, preservatives) | None |
| Hydration Support | No | Yes (balanced electrolytes) |

**Styling**: Clean, modern table with Tiffany Blue accents, 4px border radius, outlined style

**CTA**: "Shop Strive" → `/collections/all`

### HOW
1. Create new Liquid section file `sections/strive-comparison-table.liquid`
2. Build schema for table data (editable via Shopify admin)
3. Add styling for comparison table (mobile responsive)
4. Add to `templates/index.json` in proper order

### OWNER
**Claude** (section creation)

---

## TASK 5: UPDATE PRODUCT PAGES (PEACH PERFECT & TROPICAL RECHARGE)

### WHAT
Update product page copy with new messaging: 170mg electrolytes, "when to drink", no synthetic sugars emphasis

### WHERE
**Files**: Product-specific content lives in Shopify admin product descriptions
**Template Files**:
- `templates/product.json`
- `sections/product-nutrition-label.liquid` (already updated)
- Various product sections

### WHY
Product pages need to reflect new messaging hierarchy and include functional use cases

### CURRENT IMPLEMENTATION
Product pages have:
- Basic product description
- Nutrition label (updated in Phase 1)
- Image carousel
- Add to cart
- Some product-specific sections (tagline, benefits, etc.)

### DESIRED OUTCOME

#### **Peach Perfect Product Page:**

**Headline**: "Peach Perfect – Flavor That Refreshes"
**Subheadline**: "Peach-flavored soda that tastes amazing while helping your body stay naturally hydrated."

**Key Benefits**:
- Supports hydration with **[170mg/180mg - TBD]** balanced electrolytes
- Sweetened naturally with organic honey, **no refined sugar, no synthetic sugars** (sucralose, aspartame, HFCS)
- Bold, clean peach flavor
- Only **9g sugar** per can

**When to Drink**:
- Afternoon soda replacement
- Post-workout refreshment
- Long workdays
- Anytime you want delicious hydration

**Ingredients Callout**:
"Sparkling water, organic honey, natural peach flavor, electrolytes (sodium, potassium, magnesium)"

**Quick Pitch**:
"Peach Perfect is a crisp, better-for-you soda for movers and shakers. Enjoy indulgent flavor while subtle hydration helps you feel your best."

**CTA Buttons**:
- Buy Now
- Find in Store

#### **Tropical Recharge Product Page:**

**Headline**: "Tropical Recharge – Your Vacation in a Can"
**Subheadline**: "Tropical-flavored soda with clean ingredients and natural hydration to transport your taste buds to paradise."

**Key Benefits**:
- Escape with every sip: juicy passionfruit and creamy coconut finished with honey
- Supports hydration with **[170mg/180mg - TBD]** balanced electrolytes for long days, travel, or anytime you need a lift
- Sweetened naturally with organic honey, **no refined sugar, no synthetic sugars** (sucralose, aspartame, HFCS)
- Light, vibrant, island-inspired flavor
- Only **9g sugar** per can

**When to Drink**:
- Post-yoga/run
- Travel or commute
- Afternoon pick-me-up
- Anytime you need tropical refreshment

**Ingredients Callout**:
"Sparkling water, organic honey, natural tropical flavors (passionfruit, coconut), electrolytes (sodium, potassium, magnesium)"

**Quick Pitch**:
"Tropical Recharge delivers crisp, flavorful hydration you can feel good about. Pack it in your fridge, gym bag, or office for grab-and-go refreshment anytime, anywhere."

**CTA Buttons**:
- Buy Now
- Find in Store

### HOW
1. Update product descriptions in Shopify admin (product edit pages)
2. Create "When to Drink" section on product template
3. Update product-specific content sections
4. Add emphasis callouts for "no synthetic sugars"
5. Ensure nutrition label matches (already done in Phase 1)

### OWNER
**Gavin** (Shopify admin product description updates) + **Claude** (template modifications for "when to drink" section)

---

## TASK 6: ADD "WHEN TO DRINK" SCENARIOS THROUGHOUT SITE

### WHAT
Create visual/text modules showing functional use cases for Strive

### WHERE
**Multiple locations**:
1. Homepage - after "Why Strive Works" section
2. Product pages - each flavor
3. Science page - contextual use

### WHY
Ties functional benefits to real-world scenarios, helps customers understand when to reach for Strive

### CURRENT IMPLEMENTATION
❌ Does not exist

### DESIRED OUTCOME
**Section Title**: "Perfect for Every Moment"

**Scenarios** (with icons/imagery):
- ☕ **Morning to Afternoon**: Replace your afternoon soda craving
- 🏃 **Post-Workout**: Refresh after exercise, yoga, or a run
- 💼 **Long Workdays**: Stay balanced and focused through meetings
- ✈️ **Travel & Commute**: Portable hydration for on-the-go

**Styling**: Icon-based cards or simple text blocks, minimal lifestyle imagery (desk, gym bag, not aspirational surf)

**CTA**: "Shop Flavors"

### HOW
1. Create new section `sections/when-to-drink.liquid`
2. Add schema for scenario cards (editable)
3. Add to homepage after "Why Strive Works"
4. Add flavor-specific scenarios to product pages

### OWNER
**Claude** (section creation)

---

## TASK 7: UPDATE ABOUT US PAGE WITH FINALIZED FOUNDER STORY

### WHAT
Replace current About Us placeholder content with Chris's finalized copy from Google Doc

### WHERE
**File**: `templates/page.about.json`
**Sections**: About checkerboard fold sections

### WHY
Current About Us has draft content; need to replace with final approved copy

### CURRENT IMPLEMENTATION
About Us page structure exists with 3 checkerboard sections + CTA:
- Hero Section: "WE STRIVE TOGETHER" + mission text + team image
- Founder Story: Placeholder for founder image + Jack's journey text
- Mission Section: "Our Mission" + purpose statement + placeholder image
- CTA: "Ready to Join the Strive Movement?"

### DESIRED OUTCOME (from Google Doc)

**Section 1: Brand Boilerplate**
"Strive Soda is the first hydration soda — made for the movers, the shakers, and the tastemakers — delivering refreshing flavor and easy hydration.

Born in San Diego, Strive blends clean ingredients with electrolytes to keep you refreshed through life's endless adventure. It's not a performance drink or a sugar bomb. Strive proves you don't have to choose between great flavor and feeling great.

Inspired by our California playground; From the beaches to the boardroom."

**Section 2: Founder Story (Full Version)**
"Strive Soda started with a simple question from founder, Jack Espy: Why can't soda taste great and feel great?

Jack, like many of us, grew up loving soda — the flavor, the fizz, the fun. With a lifestyle built around movement — the drinks he loved no longer fit the lifestyle. Most people walk around dehydrated and reaching for drinks that don't actually help.

The first hydration soda was born. A drink that puts flavor first and adds a subtle boost of electrolytes for easy hydration through the day. Made with clean ingredients like organic honey, it's proof that soda can be both refreshing and better for you, without losing what makes it fun.

Born in San Diego, California, Strive was made for the movers, the shakers, the doers, and the everyday strivers chasing what's next."

**Section 3: Mission**
"To craft drinks that keep you hydrated, fueled, and feeling alive — no compromises, ingredients that work as hard as you do.

Because when you're striving toward what's next, you deserve a soda that shows up for you."

**Brand Mantra**: "We Strive Together."

### HOW
1. Update `templates/page.about.json` with new text content
2. Keep existing checkerboard layout (already built)
3. Replace placeholder text with final copy

### OWNER
**Claude** (content update in JSON)

---

## TASK 8: ADD MULTIPLE CTA PLACEMENTS SITE-WIDE

### WHAT
Ensure "Buy Now", "Find in Store", and "Subscribe & Save" CTAs appear in multiple strategic locations

### WHERE
**Locations to add CTAs**:
1. Hero section (homepage)
2. After "Why Strive Works" section
3. After "Flavors" section
4. Footer CTA section
5. Product pages

### WHY
Multiple conversion opportunities throughout user journey

### CURRENT IMPLEMENTATION
CTAs exist but "Subscribe & Save" is missing in most places

### DESIRED OUTCOME
**CTA Group** (appears 4-5 times on homepage):
- Primary: "Buy Now" → `/collections/all`
- Secondary: "Find in Store" → `/pages/store-locator`
- Tertiary: "Subscribe & Save" → subscription page URL

**Styling**: Outlined buttons (already implemented in Phase 1)

### HOW
1. Audit all sections for CTA placement
2. Add "Subscribe & Save" button to hero
3. Add CTA group after key sections
4. Ensure consistent styling (4px radius, outlined, no drop shadow)

### OWNER
**Claude** (code changes) + **Gavin** (provide subscription page URL)

---

## TASK 9: CREATE PLACEHOLDER SECTIONS FOR CUSTOMER REVIEWS/TESTIMONIALS

### WHAT
Build review/testimonial section structure with placeholder content

### WHERE
**New Section File**: `sections/strive-reviews.liquid`
**Add to**:
- Homepage (after flavors section)
- Product pages (below product details)

### WHY
Social proof is critical for conversion; need structure in place even if content comes later

### CURRENT IMPLEMENTATION
❌ Does not exist (site has `gs-reviews` section but may need customization)

### DESIRED OUTCOME
**Section with**:
- Star ratings display
- Customer quote cards
- Name + location attribution
- Placeholder text: "Reviews coming soon" or early buzz quotes

**Styling**: Clean cards, Tiffany Blue accents, 4px border radius

### HOW
1. Check if existing `sections/gs-reviews.liquid` can be used
2. If not, create custom `sections/strive-reviews.liquid`
3. Add schema for review cards
4. Add placeholder content
5. Insert into homepage and product page templates

### OWNER
**Claude** (section creation) + **Gavin** (provide any early testimonials if available)

---

## TASK 10: REMOVE/REPLACE SURF IMAGERY WITH GROUNDED LIFESTYLE

### WHAT
Replace hero video (surf) with grounded lifestyle imagery (desk, gym, travel)

### WHERE
**File**: `templates/index.json` (hero section)
**Current Video**: `2025_0913 Strive_Solento_web.mp4` (surf video)

### WHY
Chris feedback: "as much as I love surfing, we have more to say" - need functional context, not aspirational lifestyle

### CURRENT IMPLEMENTATION
Hero section uses surf video: `shopify://files/videos/2025_0913 Strive_Solento_web.mp4`

### DESIRED OUTCOME
**Replace with**:
Option 1: Static hero image (Peach + Tropical cans with bubbles/condensation)
Option 2: New lifestyle video/slideshow (desk, gym, travel scenarios)

**WhyNotUs.ai Image Generation Needed**:
- Product hero shot: 2 cans with bubbles/condensation on clean background
- Lifestyle shots: person at desk with can, post-workout with can, travel with can

### HOW
1. Generate images via WhyNotUs.ai
2. Upload to Shopify assets
3. Update `templates/index.json` hero section to use new image/video
4. OR create image slideshow with multiple lifestyle scenarios

### OWNER
**Gavin** (WhyNotUs.ai image generation + upload to Shopify) + **Claude** (template updates once assets ready)

---

## 📸 WHYNOTUS.AI IMAGE GENERATION BRIEF

### PRIORITY 1: Hero Product Shot
**Type**: Text to Image
**Prompt**: "Two aluminum soda cans (Peach Perfect and Tropical Recharge) on clean white background, water condensation droplets on cans, sparkling bubbles around cans, professional product photography, studio lighting, high resolution, refreshing aesthetic"
**Dimensions**: 1920x1080 (hero banner)
**Quantity**: 1 main hero shot

### PRIORITY 2: Lifestyle Scenarios (Grounded, Not Aspirational)
**Type**: Text to Image or Image + Text to Image
**Scenarios**:
1. **Desk/Office**: Professional workspace with Strive can, laptop, natural light, modern minimal aesthetic
2. **Post-Workout**: Gym bag with yoga mat, towel, and Strive can, clean athletic aesthetic
3. **Travel**: Carry-on bag with Strive can, passport, phone, minimalist travel aesthetic

**Dimensions**: 1200x800 (section images)
**Quantity**: 3-4 lifestyle shots

### PRIORITY 3: Ingredient Photography
**Type**: Text to Image
**Subjects**:
- Organic honey drizzle
- Fresh peaches with water splash
- Tropical fruits (passionfruit, coconut)

**Dimensions**: 800x600 (smaller section images)
**Quantity**: 3-4 ingredient shots

### PRIORITY 4: Comparison Table Visual
**Type**: Text to Image or Design Element
**Concept**: Side-by-side visual showing Strive can vs regular soda can with checkmarks/X marks for features
**Dimensions**: 1000x600
**Quantity**: 1

---

## 🚨 CRITICAL QUESTIONS TO RESOLVE BEFORE PROCEEDING

### 1. **Electrolyte Amount** ✅
- **CONFIRMED**: 170mg (Google Doc is source of truth)
- Current site: 180mg (to be updated throughout)
- **STATUS**: Ready to proceed with updates

### 2. **Subscribe & Save URL**
- Need URL for subscription page
- **ACTION**: Gavin provides URL or confirms if needs to be created

### 3. **Store Locator Page Status**
- Page needs to be created with Storepoint embed
- **ACTION**: Gavin creates page in Shopify admin or confirms if exists

### 4. **Sugar Amount** ✅
- **CONFIRMED**: 9g sugar per can (Google Doc source of truth)
- Current nutrition label already correct at 9g
- **STATUS**: No change needed

---

## 📊 IMPLEMENTATION SEQUENCE (RECOMMENDED ORDER)

### **STEP 1: Resolve Critical Questions** ⏸️
- Stop and get answers from Chris/team
- Don't proceed with content updates until electrolyte/sugar amounts confirmed

### **STEP 2: Content Updates (Low Effort, High Impact)**
1. Update "What is Hydration Soda?" section copy
2. Update "Why Strive Works" section copy
3. Update About Us page with founder story
4. Add "when to drink" language to existing sections

### **STEP 3: New Section Creation (Medium Effort)**
1. Build comparison table section
2. Build "When to Drink" section
3. Add review placeholder sections
4. Update product page templates for new content areas

### **STEP 4: CTA & Navigation Updates (Low-Medium Effort)**
1. Add "Subscribe & Save" to hero
2. Add CTA groups to multiple sections
3. Create Store Locator page (Gavin - Shopify admin)
4. Update navigation to include Store Locator

### **STEP 5: Imagery & Assets (High Effort, Gavin-Led)**
1. Generate images via WhyNotUs.ai
2. Upload to Shopify
3. Replace hero video with product shot
4. Add lifestyle images to sections

---

## 📁 FILES TO BE CREATED (Net New)

1. `/sections/strive-comparison-table.liquid` - Comparison table section
2. `/sections/when-to-drink.liquid` - When to drink scenarios section
3. `/sections/strive-reviews-custom.liquid` - Custom reviews section (if needed)
4. `/assets/strive-comparison.css` - Comparison table styling

---

## 📁 FILES TO BE MODIFIED

1. `templates/index.json` - Homepage structure and content
2. `templates/page.about.json` - About Us content
3. `templates/product.json` - Product page template (add when to drink)
4. `sections/what-is-hydration-soda.liquid` - Schema updates
5. `sections/why-strive-works.liquid` - Schema/content updates
6. `sections/gs-hero.liquid` - Add 3rd CTA button support

---

## 🎯 SUCCESS CRITERIA

### Content Accuracy
- ✅ All electrolyte amounts consistent across site
- ✅ "No synthetic sugars" messaging prominent
- ✅ "When to drink" scenarios on homepage + product pages
- ✅ Founder story matches approved version

### Conversion Optimization
- ✅ "Subscribe & Save" CTA on hero and 3+ other locations
- ✅ Comparison table clearly shows Strive differentiation
- ✅ Multiple CTA placements (5+ on homepage)

### Brand Messaging
- ✅ Hierarchy maintained: Soda First → Hydration → Clean Ingredients
- ✅ Tone is confident, not preachy
- ✅ Lifestyle imagery is grounded, not aspirational

### Design Consistency
- ✅ All new sections use 4px border radius
- ✅ Outlined button style maintained
- ✅ No drop shadows
- ✅ Font-weight 400 (normal)
- ✅ Tiffany Blue (#0ABAB5) and Orange (#FF7A00) brand colors

---

## 🤝 ROLES & RESPONSIBILITIES

### Claude (Code & Structure)
- All Liquid template modifications
- CSS styling for new sections
- Schema updates
- Content implementation in JSON files
- Responsive design for new sections

### Gavin (Content, Assets, Shopify Admin)
- Resolve electrolyte/sugar amount with Chris
- WhyNotUs.ai image generation
- Upload images to Shopify
- Create Store Locator page in Shopify admin
- Update product descriptions in Shopify admin
- Provide subscription page URL
- Review and approve all changes

---

## 📞 NEXT IMMEDIATE ACTION

**GAVIN - YOU NEED TO**:
1. Text/email Chris: "Quick clarification - is it 170mg or 180mg total electrolytes? Google Doc says 170mg, current site has 180mg. Also confirming sugar is 9g per can, not 5g per can as mentioned in one place in the doc?"

2. Confirm subscription page URL or let me know if we need to create it

3. Once answers received, give me the green light and I'll start systematically crushing this list

**DO NOT PROCEED WITH CONTENT UPDATES UNTIL AMOUNTS CONFIRMED** ⚠️

---

## 💬 COMMUNICATION PROTOCOL

- Gavin will mark tasks as complete in this doc
- Claude will update this doc after each major task completion
- Use checkbox format: ⬜ Not Started | 🔄 In Progress | ✅ Complete
- Flag blockers immediately

---

**CURRENT STATUS**: ⏸️ Paused - Awaiting clarification on electrolyte/sugar amounts

**LAST UPDATED**: November 6, 2025 - 7:30 PM PST
