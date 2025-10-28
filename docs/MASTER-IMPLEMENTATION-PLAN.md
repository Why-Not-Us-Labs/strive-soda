# Strive Soda - Master Implementation Plan
## Comprehensive Site Audit & Action Roadmap

**Created:** October 25, 2025
**Last Updated:** October 25, 2025
**Status:** Current - Based on Oct 24 & Oct 27 meetings

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Site Audit](#current-site-audit)
3. [Content Requirements from Chris](#content-requirements-from-chris)
4. [Oct 24 Meeting Priorities](#oct-24-meeting-priorities)
5. [Implementation Roadmap](#implementation-roadmap)
6. [Success Criteria](#success-criteria)

---

## Executive Summary

### What We Have
✅ **About Us Page** - Fully implemented with Chris's exact specifications (Oct 27)
✅ **Science Page** - 75% dehydration hero + honey flip cards
✅ **Brand Hierarchy** - 1-2-3 section on homepage (needs refinement)
✅ **Foundation** - Dev server running, local-to-production sync working

### What We Need
🔴 **Homepage Hero** - Update to Chris's exact headlines
🔴 **"What Is Hydration Soda?"** - NEW section needed
🔴 **Product Pages** - Update with Chris's exact copy
🔴 **Messaging Audit** - Remove "hydration soda" where inappropriate
🔴 **1-2-3 Section** - Refine based on Oct 24 feedback

---

## Current Site Audit

### ✅ About Us Page (COMPLETE)

**Status:** Implemented with Chris's exact specifications

**Current Content:**
- **Hero (Fold 1):** "WE STRIVE TOGETHER" + boilerplate
- **Founder Story (Fold 2):** Jack's story with proper question framing
- **Mission (Fold 3):** Chris's mission statement
- **Images:** All uploaded (founder, team, mission)

**Quality:** ⭐⭐⭐⭐⭐ Perfect - matches Chris's specs exactly

---

### 🟡 Homepage (NEEDS UPDATES)

**Current Sections:**
1. **Hero Section** (gs-hero)
   - Current: "MEET THE SODA FOR MOVERS, SHAKERS, DOERS"
   - Subhead: "Better-for-you soda. Built to hydrate."
   - CTAs: "SHOP FLAVORS" + "What is hydration soda?"

2. **Brand Hierarchy** (gs-brand-hierarchy) - "The 1-2-3 of Hydration Soda"
   - Pillar 1: "It's a Soda"
   - Pillar 2: "Hydration with Electrolytes"
   - Pillar 3: "Sweetened with Organic Honey"

3. **Featured Collection** (gs-featured-collection)

4. **Hero Multicolumn** (gs-hero-double) - Currently disabled

5. **Testimonials** (gs-reviews)

**Issues Identified:**

#### ❌ Hero Section
- **Current:** "MEET THE SODA FOR MOVERS, SHAKERS, DOERS"
- **Chris Wants:** "Soda That Tastes Amazing and Keeps You Hydrated"
- **Gap:** Not emphasizing taste + hydration equally

#### ❌ Missing Section: "What Is Hydration Soda?"
- **Status:** NOT IMPLEMENTED
- **Priority:** 🔴 P0 - Critical educational section
- **Per Chris:** Must define category immediately after hero

#### 🟡 Brand Hierarchy (1-2-3) Section
- **Oct 24 Meeting:** Jack & Gavin both "not in love with it"
- **Current:** "The 1-2-3 of Hydration Soda"
- **Issue:** Layout/design needs refinement
- **Content:** Messaging is correct, presentation needs work

#### ❌ Missing Section: Functional Benefits
- **Status:** NOT IMPLEMENTED
- **Per Chris:** "Why Strive Works" with icon-based benefits

#### ❌ Missing Section: Compare Strive vs Soda
- **Status:** NOT IMPLEMENTED
- **Per Chris:** Side-by-side table comparing to regular soda

**Quality:** ⭐⭐⭐ Good foundation, needs content additions

---

### 🟢 Science Page (EXCELLENT)

**Current Sections:**
- ✅ 75% dehydration hero (4th-grade clarity)
- ✅ Honey benefits with flip card hover effects
- ✅ Electrolytes section
- ✅ Science CTAs

**Status:** Recently restructured (Oct 27), high quality

**Quality:** ⭐⭐⭐⭐⭐ Excellent - ready for launch

---

### 🔴 Product Pages (NEEDS COMPLETE OVERHAUL)

**Status:** OLD CONTENT - Needs Chris's exact copy

**What's Missing:**
- ❌ New headlines per Chris
- ❌ "Supports hydration with 170mg electrolytes" messaging
- ❌ "When to drink" examples
- ❌ Proper ingredient callouts
- ❌ Updated nutrition facts (8g honey vs sugar)

**Chris's Exact Requirements:**

#### Peach Perfect:
```
Headline: "Peach Perfect – Flavor That Refreshes"
Subheadline: "Peach-flavored soda that tastes amazing while helping your body stay naturally hydrated."

Key Benefits:
- Supports hydration with balanced electrolytes
- Sweetened naturally with organic honey, no refined sugar
- Bold, clean peach flavor
- Only 5g sugar per can
```

#### Tropical Recharge:
```
Headline: "Tropical Recharge – Your Vacation in a Can"
Subheadline: "Tropical-flavored soda with clean ingredients and natural hydration to transport your taste buds to paradise."

Key Benefits:
- Escape with every sip: juicy passionfruit and creamy coconut finished with honey
- Supports hydration with balanced electrolytes for long days, travel, or anytime you need a lift
- Sweetened naturally with organic honey, no refined sugar
- Light, vibrant, island-inspired flavor
- Only 5g sugar per can
```

**Quality:** ⭐⭐ Needs work - high priority

---

## Content Requirements from Chris

### Brand Foundation (from Oct 27 Specs)

#### Boilerplate:
> Strive Soda is the first hydration soda — made for the movers, the shakers, and the tastemakers — delivering refreshing flavor and easy hydration.
>
> Born in San Diego, Strive blends clean ingredients with electrolytes to keep you refreshed through life's endless adventure. It's not a performance drink or a sugar bomb. Strive proves you don't have to choose between great flavor and feeling great.
>
> Inspired by our California playground; From the beaches to the boardroom.

#### Mission:
> To craft drinks that keep you hydrated, fueled, and feeling alive — no compromises, ingredients that work as hard as you do.
>
> Because when you're out there chasing your dream, you deserve a soda that shows up for you.

#### Brand Mantra:
> **We Strive Together.**

---

### Content Hierarchy (CRITICAL)

**1. Soda First (Flavor Must Win)**
- Core Idea: It's a soda, not a supplement
- Tone: Confident, craveable, refreshing, repeatable
- Messaging Goal: Lead with enjoyment, not education
- Design: Refreshing, bright, crave-inducing (bubbles, chill, taste)

**2. Better-For-You (Hydration Through Electrolytes)**
- Core Idea: Strive is the only soda designed to hydrate you back
- Tone: Confident and casual — effortless, not technical
- Messaging Goal: Own the white space — "the hydration soda"
- Design: Show hydration subtly (fluid motion, gradients, reflections)

**3. Clean Ingredients (The Baseline, Not the Billboard)**
- Core Idea: Clean is the expectation, not the headline
- Tone: Confident and understated
- Messaging Goal: Reinforce trust — but always after taste and hydration
- Design: Ingredient cues in supporting visuals, don't dominate

---

## Oct 24 Meeting Priorities

### From Meeting with Jack (Oct 24, 2025)

**Key Topics Discussed:**

1. **About Us Page** ✅
   - Status: Draft sent to Chris, now implemented
   - Content: Founder story + mission
   - Images: Placeholders ready for uploads

2. **1-2-3 Section ("Hydration Soda" hierarchy)** 🔴
   - Jack: "I'm not in love with the 1, 2, 3 of hydration soda. I think I love the idea of it, but just like the way it's laid out right now."
   - Gavin: "100. That's like me mid building and I'm not in love with it too."
   - **Action:** Needs redesign/refinement

3. **GEO Locator (Store Locator)** 🟡
   - Jack: "The about us and the creating the GEO locator for strive. Like we can wait on that."
   - Status: Deprioritized until after priority edits

4. **Brand Positioning (CRITICAL)**
   - Jack [47:45]: **"We always go back to soda, hydration, honey. NOT hydration soda, honey. We are a better-for-you soda that aids in hydration, not a hydration soda."**
   - This is THE foundational messaging rule

5. **Spirited Hive (Holiday Project)** ⚪
   - Discussed holiday-themed vodka page
   - AI-generated images with Rudolph/Herbie
   - SEPARATE project, not part of Strive priorities

6. **Future Collaboration** 💼
   - Move from hourly to retainer model
   - Monthly maintenance for both sites
   - Discuss pricing early November

---

## Implementation Roadmap

### 🔴 P0 - IMMEDIATE (This Weekend - Oct 25-27)

#### 1. Homepage Hero Section Update
**File:** `templates/index.json` → hero section
**Current:**
```
headline_mobile: "MEET THE SODA FOR MOVERS, SHAKERS, DOERS"
subhead_mobile: "Better-for-you soda. Built to hydrate."
```

**Change To (Chris's Spec):**
```
headline_mobile: "Soda That Tastes Amazing and Keeps You Hydrated"
subhead_mobile: "Strive Soda combines bold flavor, clean ingredients, and natural hydration so you can enjoy your favorite soda—without compromise."
```

**CTAs:**
- Keep: "Shop Flavors" → /collections/all
- Keep: "What is hydration soda?" → /pages/science-behind-strive
- ADD: "Find in Store" → Store locator (when ready)

---

#### 2. Create "What Is Hydration Soda?" Section
**Status:** NEW section needed
**Location:** After hero, before brand hierarchy
**Priority:** 🔴 CRITICAL

**Content (from Chris):**

**Headline:** "What Is a Hydration Soda?"

**Body:**
> Hydration soda is a better-for-you sparkling beverage that tastes like soda but goes beyond flavor.
>
> Unlike traditional sodas loaded with sugar and empty calories, Strive Soda is designed to:
>
> - **Support Hydration:** Infused with balanced electrolytes like sodium, potassium, and magnesium to help your body stay refreshed
> - **Deliver Natural Energy:** Sweetened with organic wildflower honey for smooth, steady energy, plus antioxidants, trace vitamins, and minerals
> - **Keep Ingredients Clean:** Free from artificial flavors, colors, and preservatives
> - **Fit Your Lifestyle:** Perfect for long days, travel, or anytime you want a flavorful, refreshing drink
>
> Think of it as the soda you love—but with functional benefits that help you feel your best. Strive makes hydration delicious, simple, and guilt-free.

**Visual:** Iconography showing electrolytes, honey, bubbles, hydration benefits

**CTA:** "Learn More About Hydration Soda" → /pages/science-behind-strive

**Implementation:**
- Create new section type or use existing section
- Add between hero and brand hierarchy
- Use icons for each bullet point
- Make fully editable in theme editor

---

#### 3. Redesign 1-2-3 Brand Hierarchy Section
**File:** `templates/index.json` → gs_brand_hierarchy_new
**Current Status:** Content is good, layout needs work
**Per Oct 24:** Both Jack & Gavin "not in love with it"

**Keep Content (it's correct):**
- Pillar 1: "It's a Soda" - Refreshing. Flavorful. Made for soda occasions.
- Pillar 2: "Hydration with Electrolytes" - 180mg electrolytes keep you going.
- Pillar 3: "Sweetened with Organic Honey" - 100% organic wildflower honey.

**Improve:**
- Layout/visual presentation
- Spacing and hierarchy
- Make it more visually engaging
- Consider card-based design vs current layout

**Action:** Use shopify-expert agent to redesign section maintaining componentization

---

#### 4. Add Functional Benefits Section
**Status:** NEW section needed
**Priority:** 🔴 HIGH

**Content (from Chris):**

**Headline:** "Why Strive Works"
**Subheadline:** "Refreshment you can feel good about"

**Four Icon-Based Benefit Blocks:**
1. **Hydration Redefined:** Electrolytes for balance and refreshment
2. **Clean, Natural Sweetness:** Organic honey instead of refined sugar
3. **Better-for-You:** Low sugar, natural, indulgent flavor
4. **Feel Good Ingredients:** Free from artificial flavors, colors, and preservatives

**Visuals:** Icons or small lifestyle images (work, travel, on-the-go)

**CTA:** "Shop Flavors"

**Implementation:**
- Create section with 4 icon/text blocks
- Use existing icon library or create custom
- Make editable in theme editor

---

### 🟠 P1 - HIGH PRIORITY (Next Week - Oct 28 - Nov 1)

#### 5. Product Pages Complete Overhaul

**Files:**
- Product page template
- Product sections (benefits, nutrition, CTA)

**Peach Perfect Updates:**
```
Headline: "Peach Perfect – Flavor That Refreshes"
Subheadline: "Peach-flavored soda that tastes amazing while helping your body stay naturally hydrated."

Key Benefits:
- Supports hydration with balanced electrolytes
- Sweetened naturally with organic honey, no refined sugar
- Bold, clean peach flavor
- Only 5g sugar per can

Ingredients: Sparkling water, organic honey, natural peach flavor, electrolytes (sodium, potassium, magnesium)

When to Drink:
- Afternoon soda replacement
- Post-workout refreshment
- Long workdays
```

**Tropical Recharge Updates:**
```
Headline: "Tropical Recharge – Your Vacation in a Can"
Subheadline: "Tropical-flavored soda with clean ingredients and natural hydration to transport your taste buds to paradise."

Key Benefits:
- Escape with every sip: juicy passionfruit and creamy coconut finished with honey
- Supports hydration with balanced electrolytes for long days, travel, or anytime you need a lift
- Sweetened naturally with organic honey, no refined sugar
- Light, vibrant, island-inspired flavor
- Only 5g sugar per can

Ingredients: Sparkling water, organic honey, natural tropical flavors (passionfruit, coconut), electrolytes (sodium, potassium, magnesium)

When to Drink:
- Afternoon soda replacement
- Post-yoga/run
- Travel companion
```

**Implementation:**
- Update all product copy
- Add "when to drink" section
- Update nutrition callouts
- Add ingredient photography if available

---

#### 6. Add Compare Section (Strive vs Regular Soda)
**Status:** NEW section needed
**Priority:** 🟠 MEDIUM-HIGH

**Content:** Side-by-side comparison table

**Strive vs Regular Soda:**
| Feature | Strive Soda | Regular Soda |
|---------|-------------|--------------|
| Sugar | 5g per can | 39g per can |
| Electrolytes | 170mg | 0mg |
| Sweetener | Organic wildflower honey | High fructose corn syrup |
| Artificial Ingredients | None | Yes |
| Hydration Support | Yes | No |

**CTA:** "Shop Strive"

---

#### 7. Messaging Audit & Cleanup

**Task:** Remove "hydration soda" where it doesn't fit the hierarchy

**Per Jack (Oct 24):**
> "We are a better-for-you soda that aids in hydration, NOT a hydration soda"

**Pages to Audit:**
- Homepage
- Product pages
- Science page
- About Us (already done ✅)
- CTAs throughout site

**Replace:**
- ❌ "Hydration soda" (when leading)
- ❌ "Electrolyte drink"
- ❌ "Performance beverage"

**With:**
- ✅ "Better-for-you soda"
- ✅ "Soda that supports hydration"
- ✅ "Real soda, real hydration"

---

### 🟡 P2 - MEDIUM PRIORITY (Post-Launch)

#### 8. Store Locator Implementation
**Status:** Awaiting data from Chris (expected Oct 25)
**Per Oct 24:** Deprioritized until priority edits complete

**Requirements:**
- Add to header navigation
- Implement as CTA on multiple pages
- Currently San Diego only, future-proof for expansion
- Strategic importance per Oct 21 meeting with Chris

---

#### 9. Nutrition Facts Updates
**Files:** `sections/product-nutrition-label.liquid`

**Updates Needed:**
- Peach Perfect: 10g carbs, 8g sugars
- Tropical Recharge: 10g carbs, 8g sugars
- Clarify honey (8g) vs sugar breakdown

---

#### 10. Design Consistency Audit
**From Oct 21 POA:**
- [ ] Button corner radius standardization (site-wide)
- [ ] Font weight & size consistency
- [ ] Poly Sans Mono import for science/nutrition content
- [ ] Heading hierarchy using "75% of adults" style as template

---

## Success Criteria

### Homepage is "Done" When:
- [x] About Us page complete with images
- [ ] Hero section updated with Chris's exact copy
- [ ] "What Is Hydration Soda?" section implemented
- [ ] Functional benefits section added
- [ ] 1-2-3 section redesigned (per Jack's feedback)
- [ ] Compare table implemented
- [ ] All CTAs properly placed
- [ ] Mobile responsive and tested

### Product Pages are "Done" When:
- [ ] Headlines match Chris's exact copy
- [ ] Subheadlines implemented
- [ ] Key benefits listed correctly
- [ ] "When to drink" examples added
- [ ] Ingredient callouts accurate
- [ ] Nutrition facts updated
- [ ] CTAs properly placed

### Site Messaging is "Aligned" When:
- [ ] "Soda first" hierarchy followed everywhere
- [ ] "Hydration soda" only used in educational context
- [ ] Product pages lead with taste/flavor
- [ ] Science page supports but doesn't lead
- [ ] All CTAs consistent and strategic

---

## Files & Resources

### Key Documents:
- **This File:** `/docs/MASTER-IMPLEMENTATION-PLAN.md`
- **Chris's Specs:** `/docs/meeting-notes/10-27-2025/content-specifications.md`
- **Oct 24 Meeting:** `/docs/meeting-notes/10-24-2025/`
- **Oct 21 POA:** `/PLAN-OF-ACTION.md`
- **Checklist:** `/CHECKLIST.md`

### Key Theme Files:
- Homepage: `/templates/index.json`
- About Us: `/templates/page.about.json` ✅
- Science: `/templates/page.science.json` ✅
- Product Template: `/templates/product.json`

### Key Sections to Modify/Create:
- `sections/gs-hero.liquid` - Hero updates
- `sections/gs-brand-hierarchy.liquid` - 1-2-3 redesign
- NEW: `sections/what-is-hydration-soda.liquid` - Educational section
- NEW: `sections/functional-benefits.liquid` - Benefits icons
- NEW: `sections/strive-vs-soda-compare.liquid` - Comparison table
- `sections/product-*.liquid` - Product page sections

---

## Next Actions

### Immediate (Today - Oct 25):
1. ✅ Pull latest from GitHub
2. ✅ Review Chris's Oct 27 specifications
3. ✅ Audit current site implementation
4. ✅ Create this master plan
5. [ ] Format Oct 24 meeting notes properly
6. [ ] Begin P0 implementations

### This Weekend (Oct 25-27):
1. [ ] Implement homepage hero updates
2. [ ] Create "What Is Hydration Soda?" section
3. [ ] Redesign 1-2-3 brand hierarchy
4. [ ] Add functional benefits section
5. [ ] Test all changes on local server
6. [ ] Sync to production

### Next Week (Oct 28 - Nov 1):
1. [ ] Product page complete overhaul (both flavors)
2. [ ] Add compare section
3. [ ] Complete messaging audit
4. [ ] Store locator implementation (if data ready)
5. [ ] Monday sync with Jack

---

**Last Updated:** October 25, 2025
**Next Review:** After P0 completion (Oct 27)
**Owner:** Gavin McNamara (Why Not Us Labs)
