# Homepage Brand Hierarchy - BEFORE State

**Date:** October 19, 2025
**File:** `/Users/gmac/Dev/strive-soda/sections/gs-hero-text.liquid`
**Homepage Config:** `/Users/gmac/Dev/strive-soda/templates/index.json` (lines 60-76)

---

## Current Implementation

### Section: "What is Hydration Soda?"

**Eyebrow:** WHY STRIVE SODA?
**Heading:** What is Hydration Soda?
**Description:** Hydration soda is a new category of sparkling beverage designed to do more than just quench your thirst
**CTA:** THE SCIENCE BEHIND STRIVE → `/pages/science-behind-strive`

### Three Boxes (Current):

1. **SODIUM** (Gold Yellow #FFD700)
   - Badge: "Essential Electrolyte"
   - Description: "Replenishes what you sweat out to keep fluids balanced."
   - Hover: Shows lifestyle image

2. **POTASSIUM** (Tiffany Blue #0ABAB5)
   - Badge: "Muscle Power"
   - Description: "Supports muscle and nerve function; balances sodium."
   - Hover: Shows lifestyle image

3. **MAGNESIUM** (Orange #FF7A00)
   - Badge: "Energy Catalyst"
   - Description: "Aids energy and muscle function; helps prevent cramps."
   - Hover: Shows lifestyle image

---

## Problems with Current Implementation

### ❌ Does NOT Follow Brand Hierarchy

**Current focus:** Electrolytes (Sodium/Potassium/Magnesium)
**What it SHOULD be:** Soda → Hydration → Honey

From Chris Clark (CMO) on October 17:

> "Hierarchy of information is: soda, hydration, sweetened comes from organic honey 100%."

### ❌ Too Technical

- "Sodium," "Potassium," "Magnesium" are technical terms
- Descriptions use jargon ("nerve function," "balances sodium")
- NOT fourth-grade level language

### ❌ Wrong Category Positioning

- Leads with HYDRATION (electrolytes)
- Should lead with SODA (category)
- Chris: "We want to be in the soda category. It's a soda occasion."

### ❌ Missing Key Differentiator

- Honey is NOWHERE in this section
- Honey is the #3 pillar of brand messaging
- "100% organic wildflower honey" is the unique sweetener story

---

## What Needs to Change

### New 1-2-3 Hierarchy (Chris's Exact Framework):

1. **IT'S A SODA**
   - Category: Soda occasion
   - NOT a sports drink, NOT a functional beverage
   - "Refreshing. Flavorful. It's soda."

2. **HYDRATION WITH ELECTROLYTES**
   - What makes it better: The hydration element
   - Powered by 180mg electrolytes
   - "Better for you. Built to hydrate."

3. **SWEETENED WITH ORGANIC HONEY**
   - Every soda needs sweetness
   - Ours comes from 100% organic wildflower honey
   - "Naturally sweet. No artificial stuff."

---

## Technical Details

### Current Layout:
- **Desktop:** 2-column grid (text left, 3 boxes right)
- **Mobile:** Stacked vertically (centered text, stacked boxes)
- **Colors:** Gold (#FFD700), Tiffany Blue (#0ABAB5), Orange (#FF7A00)
- **Interactions:** Hover shows lifestyle images (opacity fade)

### Files Involved:
- `sections/gs-hero-text.liquid` - Main section file
- `templates/index.json` - Homepage configuration

---

## Next Steps

1. Create NEW section: `sections/gs-brand-hierarchy.liquid`
2. Update homepage to use new section
3. Follow 1-2-3 framework from Chris
4. Use fourth-grade language throughout
5. Make it BETTER than JuneShine

---

**Reference:** See `meeting-transcripts-raw.txt` for Chris's exact quotes on brand hierarchy.
