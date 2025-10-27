# Font & Design Consistency Audit
**Date:** October 27, 2025
**Auditor:** Claude Code
**Purpose:** Ensure consistent typography and design across entire Strive Soda site

---

## Executive Summary

**Status:** 🟡 Partial - Critical fixes applied, manual Shopify settings updates needed

**Completed:**
- ✅ Fixed 11 broken `var(--font-primary)` references across sections
- ✅ Three-pillar section responsive design optimized

**Remaining:**
- ⚠️ Update Shopify theme settings to use Inter instead of Figtree
- ⚠️ Import Poly Sans Mono font for nutrition/science content
- ⚠️ Standardize button corner radius (currently "0", should be rounded)
- ⚠️ Verify heading font-weight is 800 site-wide

---

## Brand Typography Guidelines

### From Chris & Jack (CMO/Founder)
- **Primary Font:** Inter (Polysans Standard fallback)
- **Heading Weight:** 800 (extra bold)
- **Science/Nutrition Font:** Poly Sans Mono
- **Button Corners:** Rounded (not sharp)

### From Drive Soda Toolkit
- Poly Sans Mono font files available in brand assets
- Brand book defines font hierarchy

---

## Audit Findings

### 1. ✅ FIXED: Broken Font References

**Problem:** 11 sections used `var(--font-primary)` which doesn't exist in CSS
**Impact:** Inconsistent/broken font rendering
**Solution:** Replaced with `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

**Files Fixed:**
- `sections/about-us-cta.liquid`
- `sections/gs-featured-collection.liquid`
- `sections/home-honey-vs-synthetics.liquid`
- `sections/product-benefits.liquid`
- `sections/product-nutrition-label.liquid`
- `sections/product-science-cta.liquid`
- `sections/product-when-to-drink.liquid`
- `sections/science-cta.liquid`
- `sections/science-electrolytes.liquid`
- `sections/science-honey.liquid`
- `sections/strive-vs-everyone.liquid`

**Git Commit:** `3736d1d` - "Fix broken font references"

---

### 2. ⚠️ TODO: Theme Settings Using Wrong Font

**Current State:**
```json
"bodyFontFamily": "figtree_n4",
"headingsFontFamily": "figtree_n4"
```

**Required State:**
```json
"bodyFontFamily": "inter_n4",
"headingsFontFamily": "inter_n8"  // weight 800
```

**Location:** `config/settings_data.json`
**Impact:** Global theme font doesn't match brand guidelines
**Action Required:** Update via Shopify theme editor OR manually edit settings_data.json

**Steps to Fix via Shopify Admin:**
1. Go to: https://ab6dae-bb.myshopify.com/admin/themes/182679339300/editor
2. Navigate to: Theme Settings → Typography → Body
3. Change font from "Figtree" to "Inter"
4. Navigate to: Theme Settings → Typography → Headings
5. Change font from "Figtree" to "Inter" with weight 800
6. Save

---

### 3. ⚠️ TODO: Poly Sans Mono Not Imported

**Current State:**
- Some sections reference `'Polysans Standard'` (different spelling)
- No actual font files imported
- Falling back to Inter

**Files Referencing Polysans:**
- `assets/science-page.css` (line 58, 98)
- `assets/footer-phone.css` (line 178)

**Required Action:**
1. Obtain Poly Sans Mono font files from Drive Soda Toolkit
2. Upload to Shopify assets: `/assets/poly-sans-mono-regular.woff2` (and variants)
3. Import via `snippets/global-fonts.liquid`:

```liquid
<style>
@font-face {
  font-family: "Poly Sans Mono";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("{{ 'poly-sans-mono-regular.woff2' | asset_url }}") format("woff2"),
       url("{{ 'poly-sans-mono-regular.woff' | asset_url }}") format("woff");
}

@font-face {
  font-family: "Poly Sans Mono";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("{{ 'poly-sans-mono-bold.woff2' | asset_url }}") format("woff2"),
       url("{{ 'poly-sans-mono-bold.woff' | asset_url }}") format("woff");
}

:root {
  --font-mono: "Poly Sans Mono", monospace;
}
</style>
```

4. Update references from `'Polysans Standard'` to `'Poly Sans Mono'`
5. Use for nutrition labels, ingredient lists, science data

---

### 4. ⚠️ TODO: Button Corner Radius

**Current State:**
```json
"BorderRadiusGlobal": "0"  // No rounding
```

**Required State:**
```json
"BorderRadiusGlobal": "0.5rem"  // or "1rem" for more rounded
```

**Location:** `config/settings_data.json`
**Impact:** Buttons have sharp corners (not matching brand aesthetic)

**Steps to Fix via Shopify Admin:**
1. Go to: https://ab6dae-bb.myshopify.com/admin/themes/182679339300/editor
2. Navigate to: Theme Settings → Layout → Round corners
3. Change from "None" to "Small" (0.5rem) or "Medium" (1rem)
4. Save

**CSS Variable Affected:**
- `--radius` (used by buttons, boxes, cards)
- `--buttonRadius: var(--radius)`

---

### 5. ✅ VERIFIED: Custom Sections Use Consistent Fonts

**Sections with Hardcoded Inter (Correct):**
- `sections/gs-brand-hierarchy.liquid` ✅
- `sections/gs-hero.liquid` ✅
- `sections/gs-hero-text.liquid` ✅
- `sections/science-test-fold.liquid` ✅
- `sections/gs-image-text.liquid` ✅
- + 11 sections fixed above ✅

**Pattern Used:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

This ensures custom sections always use Inter regardless of theme settings.

---

### 6. ⚠️ TODO: Verify Heading Font Weight

**Brand Requirement:** Weight 800 for all major headings

**Current Implementation:** Mixed (some 800, some 700, some 600)

**Action Required:**
Audit all heading declarations and standardize to:
```css
h1, h2, h3, .heading-class {
  font-weight: 800;
}
```

**Files to Check:**
- `assets/app.css` - Global heading styles
- `assets/strive-header-footer.css` - Header/footer headings
- All `sections/*.liquid` - Section-specific headings

---

## Design Consistency Checklist

### Typography ✓ / ✗
- [x] Custom sections use Inter font
- [ ] Theme settings updated to Inter
- [ ] Poly Sans Mono imported for science content
- [ ] All headings use weight 800
- [ ] Body text uses Inter weight 400

### Buttons ✓ / ✗
- [ ] Rounded corners applied site-wide
- [ ] Consistent padding across all buttons
- [ ] Consistent font-weight (600 or 700?)
- [ ] Consistent text-transform (uppercase vs normal)
- [ ] Consistent letter-spacing

### Icons ✓ / ✗
- [ ] Consistent icon sizes
- [ ] Consistent icon stroke-width
- [ ] Consistent icon colors (Tiffany Blue #0ABAB5, Orange #FF7A00)
- [ ] All SVG icons optimized

### Responsive Design ✓ / ✗
- [x] Three-pillar section responsive (320px-2560px)
- [ ] All sections tested at 320px (iPhone SE)
- [ ] All sections tested at 768px (iPad)
- [ ] All sections tested at 1024px (iPad Pro)
- [ ] All sections tested at 1440px+ (Desktop)
- [ ] No text cutoff at any breakpoint
- [ ] No horizontal scroll at any breakpoint

---

## Next Steps (Priority Order)

1. **P0 - Update Theme Settings** (Shopify Admin)
   - Change fonts to Inter
   - Enable rounded button corners
   - Verify changes reflected site-wide

2. **P0 - Import Poly Sans Mono**
   - Get font files from Drive Toolkit
   - Upload to Shopify assets
   - Import via global-fonts.liquid
   - Update references in science-page.css

3. **P1 - Heading Weight Audit**
   - Search all CSS for h1, h2, h3, .heading
   - Ensure weight: 800
   - Test visual hierarchy

4. **P1 - Button Consistency**
   - Audit all button styles
   - Standardize padding, font-weight, transform
   - Test across all pages

5. **P2 - Responsive Testing**
   - Test every page at all breakpoints
   - Use browser dev tools + real devices
   - Document any issues found

---

## References

- **Theme Settings Location:** `config/settings_data.json`
- **Global Font Imports:** `snippets/global-fonts.liquid`
- **Global CSS Variables:** `snippets/global-css-vars.liquid`
- **Button Styles:** `assets/app.css` (search for `.button`)
- **Brand Guidelines:** `docs/meeting-notes/10-21-2025/`
- **Drive Soda Toolkit:** [Dropbox link from meeting notes]

---

## Maintenance Notes

**When Adding New Sections:**
1. Always use: `font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;`
2. For science/nutrition content: Use `'Poly Sans Mono', monospace`
3. For headings: Always `font-weight: 800;`
4. For body text: `font-weight: 400;` or `500;`
5. Add `word-wrap: break-word; overflow-wrap: break-word;` to prevent text overflow

**When Editing Existing Sections:**
1. Check font-family matches pattern above
2. Verify text doesn't overflow at mobile breakpoints
3. Test hover states work on touch devices
4. Ensure proper contrast ratios (WCAG AA minimum)

---

## Commit History

- `e5cc9a9` - Fix three-pillar section responsive issues
- `3736d1d` - Fix broken font references (var(--font-primary))
- `dca5aff` - Redesign three-pillar section with enhanced visual polish
- `09cdf8e` - Fix hero section full width
- `e24eb31` - Fix header full width

---

**Last Updated:** October 27, 2025
**Next Review:** After Poly Sans Mono import + theme settings update
