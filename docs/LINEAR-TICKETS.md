# Strive Soda - Linear Tickets (Complete Project History)

**Project:** Strive Soda Website Development
**Client:** Jack Espy (Founder), Chris Clark (CMO)
**Developer:** Gavin McNamara (Why Not Us Labs)
**Project Duration:** October 11, 2025 - Present

---

## COMPLETED TICKETS

### Epic: Initial Setup & Theme Configuration

#### STRIVE-001: Initial theme setup and local development environment
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 11, 2025
**Description:** Set up Shopify CLI, authenticate with store, pull production theme, configure local dev server at http://127.0.0.1:9292
**Files:** `.shopify/`, `DEV-WORKFLOW.md`

---

#### STRIVE-002: Git repository initialization and version control
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 11, 2025
**Description:** Initialize git repo, commit all 251 theme files (46,636 insertions), push to GitHub
**Files:** `.git/`, `.gitignore`

---

### Epic: Product Pages

#### STRIVE-003: Fix product page layout - sections outside grid
**Status:** Done
**Estimate:** 3h
**Completed:** Oct 12, 2025
**Description:** Move custom sections outside main product grid, fix content clipping, ensure all sections visible
**Files:** `templates/product.json`, `assets/product.css`

---

#### STRIVE-004: Create custom product.css stylesheet
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 12, 2025
**Description:** Create dedicated stylesheet for product page customizations
**Files:** `assets/product.css`

---

#### STRIVE-005: Fix peach product image height
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 29, 2025
**Description:** Fix peach image appearing too short on product page
**Files:** `assets/product.css`

---

### Epic: Typography & Font System

#### STRIVE-006: Font consistency - Polysans Standard / Inter fallback
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 12, 2025
**Description:** Apply Polysans Standard / Inter fallback across site, weight 800 for headings and buttons
**Files:** `snippets/global-fonts.liquid`, `assets/app.css`

---

#### STRIVE-007: Fix broken var(--font-primary) references
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 27, 2025
**Description:** Fix 11 broken `var(--font-primary)` references across all sections
**Files:** Multiple section files

---

#### STRIVE-008: Update theme settings programmatically - fonts & corners
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 27, 2025
**Description:** Change bodyFontFamily and headingsFontFamily from Figtree to Inter, enable rounded button corners (0.5rem)
**Files:** `config/settings_data.json`

---

#### STRIVE-009: Add Google Fonts (Roboto Mono) for monospace support
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 27, 2025
**Description:** Import Roboto Mono as placeholder for Poly Sans Mono
**Files:** `snippets/global-fonts.liquid`

---

#### STRIVE-010: Complete font & design consistency audit
**Status:** Done
**Estimate:** 1.5h
**Completed:** Oct 27, 2025
**Description:** Create documentation of all font usage, fix remaining references, standardize font-weight 400 (Phase 2)
**Files:** `docs/FONT-CONSISTENCY-AUDIT.md`, various CSS files

---

### Epic: Brand Colors & Design System

#### STRIVE-011: Tiffany Blue color correction
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 12, 2025
**Description:** Correct Tiffany Blue from #81d8d0 to #0ABAB5 throughout site
**Files:** `assets/app.css`, CSS variables

---

#### STRIVE-012: Create CSS variables for brand colors
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 12, 2025
**Description:** Define CSS custom properties for Tiffany Blue (#0ABAB5), Orange (#FF7A00)
**Files:** `snippets/global-css-vars.liquid`

---

#### STRIVE-013: Standardize button corner radius across site
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 29, 2025
**Description:** Apply 4px border-radius to all buttons site-wide, outlined button style (transparent bg, 2px solid border)
**Files:** `assets/app.css`, multiple section files

---

#### STRIVE-014: Remove all drop shadows from buttons
**Status:** Done
**Estimate:** 1h
**Completed:** Nov 6, 2025
**Description:** Remove box-shadows from buttons and hover states (15+ instances)
**Files:** `assets/app.css`, `assets/product.css`, `assets/science-page.css`

---

### Epic: Science Page

#### STRIVE-015: Create science-honey.liquid section
**Status:** Done
**Estimate:** 3h
**Completed:** Oct 12, 2025
**Description:** Build honey benefits section for science page
**Files:** `sections/science-honey.liquid`

---

#### STRIVE-016: Fix honey image display (object-fit: cover)
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 15, 2025
**Description:** Change object-fit from contain to cover to eliminate light blue borders
**Files:** `sections/science-honey.liquid`

---

#### STRIVE-017: Build sweetener comparison component
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 12, 2025
**Description:** Create comparison showing honey vs other sweeteners
**Files:** `sections/science-honey.liquid`

---

#### STRIVE-018: Add flip card hover effects to honey section
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 27, 2025
**Description:** Add interactive flip card effects to honey benefit boxes
**Files:** `sections/science-honey.liquid`

---

#### STRIVE-019: Create 75% dehydration hero section
**Status:** Done
**Estimate:** 3h
**Completed:** Oct 27, 2025
**Description:** Build 75% dehydration problem/solution section with "4th-grade clarity"
**Files:** `sections/science-checkerboard-fold.liquid`

---

#### STRIVE-020: Restructure Science page with new hero
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 27, 2025
**Description:** Make 75% dehydration the hero section, reorganize page flow
**Files:** `templates/page.science.json`

---

### Epic: About Us Page

#### STRIVE-021: Build componentized About Us page (checkerboard)
**Status:** Done
**Estimate:** 4h
**Completed:** Oct 15, 2025
**Description:** Create About Us page using checkerboard sections (Tiffany Blue + Orange), 3 folds + CTA
**Files:** `templates/page.about.json`, `sections/about-checkerboard-fold.liquid`

---

#### STRIVE-022: Update About Us with Chris's finalized content
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 27, 2025
**Description:** Replace placeholder content with Chris's exact specifications (boilerplate, founder story, mission)
**Files:** `templates/page.about.json`

---

#### STRIVE-023: Add founder and mission images to About Us
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 27, 2025
**Description:** Upload and sync images: IMG_6130.jpg (founder), StriveLaunch-182.jpg (mission)
**Files:** `templates/page.about.json`, Shopify media

---

### Epic: Footer

#### STRIVE-024: Create footer phone widget (JuneShine-inspired)
**Status:** Done
**Estimate:** 4h
**Completed:** Oct 16, 2025
**Description:** iPhone-style frame with background slideshow, social media icons, "Kick it with us on social" notification
**Files:** `assets/footer-phone.css`, `assets/footer-phone.js`, `assets/footer-phone.svg`, `snippets/footer-phone.liquid`

---

#### STRIVE-025: Implement horizontal footer layout (desktop)
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 16, 2025
**Description:** 2-column grid: Links (left) | Phone widget (right), stack on mobile
**Files:** `assets/strive-header-footer.css`

---

#### STRIVE-026: Add social media URL inputs to theme editor
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 16, 2025
**Description:** Add 6 URL input fields for Instagram, Twitter, Facebook, TikTok, YouTube, LinkedIn with fallback logic
**Files:** `sections/footer.liquid`

---

#### STRIVE-027: Fix footer phone widget z-index and mobile visibility
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 16, 2025
**Description:** Change z-index from 100 to 1, remove display:none on mobile, add responsive sizing
**Files:** `assets/footer-phone.css`

---

### Epic: Header & Navigation

#### STRIVE-028: Move FAQ from header to footer navigation
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 17, 2025
**Description:** Clean up header by moving FAQ to footer legal links via Shopify admin
**Files:** Shopify admin navigation settings

---

#### STRIVE-029: Fix header width (full-width edge-to-edge)
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 27, 2025
**Description:** Override boxed layout constraint for full-width header
**Files:** `assets/strive-header-footer.css`

---

#### STRIVE-030: Fix header navigation tablet wrapping
**Status:** Done
**Estimate:** 1h
**Completed:** Nov 6, 2025
**Description:** Add tighter spacing and flex-wrap: nowrap to prevent nav items wrapping on tablet
**Files:** `assets/strive-header-footer.css`

---

### Epic: Homepage Hero

#### STRIVE-031: Fix hero video white space gap (mobile/tablet)
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 17, 2025
**Description:** Fix gap between teal panel and video using font-size:0, line-height:0 technique, position with top:50%
**Files:** `sections/gs-hero.liquid`

---

#### STRIVE-032: Fix hero section full width (desktop)
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 27, 2025
**Description:** Ensure hero spans edge-to-edge on desktop
**Files:** `sections/gs-hero.liquid`

---

#### STRIVE-033: Fix hero/header overlap (sticky header)
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 29, 2025
**Description:** Add padding-top for sticky header mode across all breakpoints
**Files:** `sections/gs-hero.liquid`

---

#### STRIVE-034: Fix hero responsive breakpoints (tablet/iPad)
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 29, 2025
**Description:** Extend tablet breakpoint from 1023px to 1279px, fix header height calculations with CSS calc()
**Files:** `sections/gs-hero.liquid`

---

#### STRIVE-035: Fix hero title responsive (text cutoff)
**Status:** Done
**Estimate:** 1h
**Completed:** Nov 6, 2025
**Description:** Fix title cutoff at mid-size screens with reduced font sizes
**Files:** `sections/gs-hero.liquid`

---

#### STRIVE-036: Fix hero viewport fill and center content
**Status:** Done
**Estimate:** 1h
**Completed:** Nov 8, 2025
**Description:** Ensure hero fills viewport, center content-wrapper and buttons
**Files:** `sections/gs-hero.liquid`

---

### Epic: Homepage Sections

#### STRIVE-037: Fix Shop Page CTA text
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 15, 2025
**Description:** Change "Shop All Flavors" to "Learn More About Hydration Soda" linking to science page
**Files:** `templates/collection.json`, `sections/science-cta.liquid`

---

#### STRIVE-038: Redesign three-pillar (Brand Hierarchy 1-2-3) section
**Status:** Done
**Estimate:** 3h
**Completed:** Oct 27, 2025
**Description:** Enhanced visual polish: rounded corners, hover effects, improved typography, zoom-out image reveal
**Files:** `sections/gs-brand-hierarchy.liquid`

---

#### STRIVE-039: Fix three-pillar section responsive issues
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 27, 2025
**Description:** Fix word-wrap, optimize breakpoints
**Files:** `sections/gs-brand-hierarchy.liquid`

---

#### STRIVE-040: Replace emoji icons with SVG icons
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 28, 2025
**Description:** Replace emoji placeholders with clean SVG icons, add Tiffany Blue → Orange hover transition
**Files:** Multiple section files

---

#### STRIVE-041: Add educational sections to homepage
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 28, 2025
**Description:** Add "What Is Hydration Soda?" and "Why Strive Works" section structures
**Files:** `sections/what-is-hydration-soda.liquid`, `sections/why-strive-works.liquid`

---

### Epic: Nutrition Facts

#### STRIVE-042: Update nutrition facts panel
**Status:** Done
**Estimate:** 1h
**Completed:** Nov 6, 2025
**Description:** Update to 9g sugars, remove Calcium, change font-weight to 400, make electrolyte total dynamic
**Files:** `sections/product-nutrition-label.liquid`

---

### Epic: Cart & Checkout

#### STRIVE-043: Modernize cart drawer design
**Status:** Done
**Estimate:** 2h
**Completed:** Nov 14, 2025
**Description:** Update cart drawer with consistent design system, enhanced visual styling
**Files:** `assets/app.css`, cart-related sections

---

#### STRIVE-044: Increase cart drawer spacing
**Status:** Done
**Estimate:** 30m
**Completed:** Nov 14, 2025
**Description:** Add more spacious feel to cart items
**Files:** `assets/app.css`

---

#### STRIVE-071: Fix Store Locator page font inconsistency
**Status:** Done
**Estimate:** 2h
**Completed:** Dec 8, 2025
**Description:** Fix font inconsistency where Store Locator page showed Times serif font instead of Inter sans-serif used across the rest of the site. Root cause: CSS variables (--hFontFamily, --fontFamily) resolving to serif on Store Locator page specifically.
**Files:** `assets/strive-header-footer.css`, `sections/store-locator-hero.liquid`, `sections/store-locator-widget.liquid`, `sections/store-locator-cta.liquid`
**Notes:** Added inline styles with !important to hero/CTA headings and descriptions. Updated header nav links with explicit Inter font fallback. Changed all Store Locator section CSS to use Inter as primary fallback.

---

### Epic: Security & Maintenance

#### STRIVE-045: Remove hardcoded API tokens from scripts
**Status:** Done
**Estimate:** 1h
**Completed:** Nov 14, 2025
**Description:** Security fix - remove any hardcoded tokens, use environment variables
**Files:** Various shell scripts

---

### Epic: Documentation

#### STRIVE-046: Create DEV-WORKFLOW.md
**Status:** Done
**Estimate:** 1h
**Completed:** Oct 27, 2025
**Description:** Comprehensive development workflow documentation
**Files:** `DEV-WORKFLOW.md`

---

#### STRIVE-047: Create TIMELOG.md for billing
**Status:** Done
**Estimate:** 30m
**Completed:** Oct 27, 2025
**Description:** Time tracking system for transparent hourly billing
**Files:** `TIMELOG.md`

---

#### STRIVE-048: Create Plan of Action document
**Status:** Done
**Estimate:** 2h
**Completed:** Oct 22, 2025
**Description:** Comprehensive POA from Oct 21 meeting with priorities and timeline
**Files:** `PLAN-OF-ACTION.md`

---

---

## OUTSTANDING TICKETS

### Epic: Science Page Bug Fixes (P0 - URGENT)

#### STRIVE-072: Fix Science page section overlap issue
**Status:** In Progress
**Estimate:** 1h
**Priority:** P0 - URGENT
**Assigned:** Gavin McNamara
**Description:** Jack reported: "The science page is kind of having some overlapping issues. That pink kind of background where What is the Hydration Soda is overlapping with the Shop Flavors CTA." Need to investigate and fix CSS positioning/z-index issues causing section overlap, likely on mobile.
**Files:** `sections/science-electrolytes.liquid`, `sections/science-checkerboard-fold.liquid`, `assets/science-page.css`
**Notes:** "What is Hydration Soda?" heading is in the electrolytes section. Need to check for margin/padding collapse, z-index issues, or positioning problems especially on mobile viewports.

---

#### STRIVE-073: Fix electrolyte flip cards showing blank on hover
**Status:** In Progress
**Estimate:** 2h
**Priority:** P0 - URGENT
**Assigned:** Gavin McNamara
**Description:** Jack reported: "The yellow, blue and orange boxes... when you highlight over it just goes blank like a yellow blank box." The electrolyte cards (Sodium/Potassium/Magnesium) flip animation is broken - back of card shows blank instead of content. Jack wants hover to show descriptive text like "replenishes what you sweat out to keep fluids balanced" for Sodium.
**Files:** `sections/science-electrolytes.liquid`
**Notes:** Current implementation uses CSS 3D transforms for flip effect. Issue could be: 1) backface-visibility not working in all browsers, 2) transform-style: preserve-3d failing, 3) card-back content not rendering. Consider simplifying to fade/slide animation instead of 3D flip.

---

### Epic: Homepage Content Updates (P0 - Critical)

#### STRIVE-049: Update homepage hero CTAs
**Status:** To Do
**Estimate:** 1h
**Priority:** P0
**Description:** Add 3 CTAs: "BUY NOW" → /collections/all, "FIND IN STORE" → /pages/store-locator, "SUBSCRIBE & SAVE" → subscription page. May need to modify gs-hero.liquid schema to support 3 buttons.
**Files:** `templates/index.json`, `sections/gs-hero.liquid`
**Blocked by:** Store Locator page creation, Subscription page URL

---

#### STRIVE-050: Rebuild "What Is Hydration Soda?" section content
**Status:** To Do
**Estimate:** 2h
**Priority:** P0
**Description:** Update content to match Chris's Google Doc specs: Add 180mg electrolytes, "no synthetic sugars" emphasis, "when to drink" scenarios (afternoon replacement, post-workout, long workdays, travel)
**Files:** `sections/what-is-hydration-soda.liquid`, `templates/index.json`

---

#### STRIVE-051: Update "Why Strive Works" section content
**Status:** To Do
**Estimate:** 1h
**Priority:** P0
**Description:** Update heading to "How It Works", subheading to "Functional Benefits", update benefit copy per Chris's specs
**Files:** `sections/why-strive-works.liquid`, `templates/index.json`

---

### Epic: New Homepage Sections (P1 - High Priority)

#### STRIVE-052: Create comparison table section (Strive vs Regular Soda)
**Status:** To Do
**Estimate:** 3h
**Priority:** P1
**Description:** Build new section with side-by-side comparison table. Columns: Feature, Regular Soda, Strive Soda. Rows: Sugar (39g vs 9g), Electrolytes (0 vs 180mg), Sweetener (HFCS vs Organic Honey), Artificial ingredients (Yes vs None), Hydration support (No vs Yes). CTA: "Shop Strive"
**Files:** `sections/strive-comparison-table.liquid` (create new), `assets/strive-comparison.css` (create new)

---

#### STRIVE-053: Create "When to Drink" scenarios section
**Status:** To Do
**Estimate:** 2h
**Priority:** P1
**Description:** Build section titled "Perfect for Every Moment" with 4 scenario cards: Morning to Afternoon (soda replacement), Post-Workout, Long Workdays, Travel & Commute. Icon-based cards with minimal lifestyle imagery.
**Files:** `sections/when-to-drink.liquid` (create new)

---

#### STRIVE-054: Add CTA groups to multiple homepage sections
**Status:** To Do
**Estimate:** 1h
**Priority:** P1
**Description:** Ensure "Buy Now", "Find in Store", "Subscribe & Save" CTAs appear after: Why Strive Works, Flavors section, Footer CTA section
**Files:** Multiple homepage sections

---

### Epic: Product Pages Overhaul (P1 - High Priority)

#### STRIVE-055: Overhaul Peach Perfect product page
**Status:** To Do
**Estimate:** 3h
**Priority:** P1
**Description:** New headline: "Peach Perfect – Flavor That Refreshes". New subhead: "Peach-flavored soda that tastes amazing while helping your body stay naturally hydrated." Add key benefits, "when to drink" examples, ingredient callout, quick pitch per Chris's specs.
**Files:** `templates/product.json`, product description in Shopify admin

---

#### STRIVE-056: Overhaul Tropical Recharge product page
**Status:** To Do
**Estimate:** 3h
**Priority:** P1
**Description:** New headline: "Tropical Recharge – Your Vacation in a Can". New subhead: "Tropical-flavored soda with clean ingredients and natural hydration to transport your taste buds to paradise." Add key benefits, "when to drink" examples (post-yoga, travel), ingredient callout, quick pitch.
**Files:** `templates/product.json`, product description in Shopify admin

---

#### STRIVE-057: Add "When to Drink" section to product template
**Status:** To Do
**Estimate:** 2h
**Priority:** P1
**Description:** Create reusable "when to drink" component for product pages with flavor-specific scenarios
**Files:** `templates/product.json`, new section file

---

### Epic: Store Locator (P1 - High Priority)

#### STRIVE-058: Create Store Locator page
**Status:** Done
**Estimate:** 3h
**Completed:** Dec 8, 2025
**Priority:** P1
**Description:** Build store locator page with Storepoint embed, future-proof for retail expansion (currently San Diego only, will scale to Target/Whole Foods)
**Files:** `templates/page.store-locator.json`, `sections/store-locator-hero.liquid`, `sections/store-locator-widget.liquid`, `sections/store-locator-cta.liquid`
**Notes:** Integrated Storepoint.co widget (ID: 168f803b457043), created 3 custom sections: Tiffany Blue hero, widget container with brand styling, and dark CTA section

---

#### STRIVE-059: Add Store Locator to header navigation
**Status:** Done
**Estimate:** 1h
**Completed:** Dec 8, 2025
**Priority:** P1
**Description:** Add "Find Us" or Store Locator to main navigation. Option 1: About Us dropdown (Our Story, Store Locator). Option 2: Standalone nav item.
**Files:** `sections/header.liquid`, `snippets/header-mobile.liquid`
**Notes:** Added "STORE LOCATOR" link to both desktop and mobile navigation

---

#### STRIVE-060: Add Store Locator CTAs across site
**Status:** In Progress
**Estimate:** 1h
**Priority:** P1
**Description:** Add "Find Strive Near You" CTA to: Homepage (under products), Product pages, About Us, Science page, Shop page
**Files:** Multiple section files
**Notes:** CTA section created on Store Locator page. Remaining: Add CTAs to homepage, product pages, about us, science page

---

### Epic: Reviews & Social Proof (P2 - Medium Priority)

#### STRIVE-061: Create reviews/testimonials placeholder section
**Status:** To Do
**Estimate:** 2h
**Priority:** P2
**Description:** Build review section with star ratings, customer quote cards, name/location attribution. Use placeholder text "Reviews coming soon" or early buzz quotes. Add to homepage and product pages.
**Files:** `sections/strive-reviews.liquid` (create new or customize gs-reviews.liquid)

---

### Epic: Hero Media Update (P2 - Medium Priority)

#### STRIVE-062: Replace hero surf video with product imagery
**Status:** To Do
**Estimate:** 2h
**Priority:** P2
**Description:** Per Chris: "as much as I love surfing, we have more to say" - need functional context, not aspirational lifestyle. Options: Static product hero shot (2 cans with bubbles/condensation) OR lifestyle slideshow (desk, gym, travel scenarios)
**Files:** `templates/index.json`, Shopify media library
**Blocked by:** New imagery creation (WhyNotUs.ai or studio shoot)
**Note:** May need to generate images via WhyNotUs.ai: product hero shot, lifestyle scenarios (desk/office, post-workout, travel)

---

### Epic: Font System Completion (P2 - Medium Priority)

#### STRIVE-063: Import and apply Poly Sans Mono brand font
**Status:** To Do
**Estimate:** 2h
**Priority:** P2
**Description:** Replace Roboto Mono placeholder with actual Poly Sans Mono from Drive Soda Toolkit. Apply to: Nutrition Facts panels, Science page technical sections.
**Files:** `snippets/global-fonts.liquid`, `assets/app.css`, relevant section files
**Blocked by:** Poly Sans Mono font files (web-friendly formats)

---

### Epic: SEO & Accessibility (P2 - Medium Priority)

#### STRIVE-064: Add alt text to all images
**Status:** To Do
**Estimate:** 2h
**Priority:** P2
**Description:** Audit all images across site, add descriptive alt text for SEO and accessibility
**Files:** Multiple template and section files

---

#### STRIVE-065: Implement hover text/tooltips
**Status:** To Do
**Estimate:** 2h
**Priority:** P2
**Description:** Add descriptive hover text throughout site for improved SEO/AEO (AI search optimization)
**Files:** Various interactive elements

---

#### STRIVE-066: Optimize for AI search engines (AEO)
**Status:** To Do
**Estimate:** 3h
**Priority:** P2
**Description:** Ensure site is optimized for ChatGPT, Perplexity, and other AI search engines. Target keywords: "hydration soda", "electrolyte soda", "honey sweetened soda"
**Files:** Meta descriptions, structured data, content optimization

---

### Epic: Performance (P3 - Nice to Have)

#### STRIVE-067: Performance optimization (lazy loading)
**Status:** To Do
**Estimate:** 2h
**Priority:** P3
**Description:** Implement image lazy loading, ensure site loads <3 seconds
**Files:** Image components, layout files

---

#### STRIVE-068: Analytics dashboard setup
**Status:** To Do
**Estimate:** 2h
**Priority:** P3
**Description:** Set up heat maps for user flow tracking, analytics dashboards
**Files:** Theme integration, third-party tools

---

### Epic: Future Features (P3 - Nice to Have)

#### STRIVE-069: Community & Ambassador section
**Status:** To Do
**Estimate:** 4h
**Priority:** P3
**Description:** Build section for ambassador program and community features
**Files:** New section files

---

#### STRIVE-070: 3D can integration
**Status:** To Do
**Estimate:** 8h
**Priority:** P3
**Description:** Add interactive 3D can element to homepage
**Files:** New component, possibly Three.js integration
**Note:** Discussed in previous meetings, deferred for timeline

---

---

## SUMMARY

### Completed: 51 tickets
### Outstanding: 21 tickets

### Outstanding by Priority:
- **P0 (URGENT):** 2 tickets (Science page bugs - IN PROGRESS)
- **P0 (Critical):** 3 tickets
- **P1 (High):** 7 tickets (Store Locator complete!)
- **P2 (Medium):** 6 tickets
- **P3 (Nice to Have):** 4 tickets

### Blockers:
1. **Subscription page URL** - Blocks STRIVE-049
2. **New hero imagery** - Blocks STRIVE-062
3. **Poly Sans Mono font files** - Blocks STRIVE-063

### Estimated Remaining Hours:
- **P0:** ~4 hours
- **P1:** ~15 hours
- **P2:** ~13 hours
- **P3:** ~16 hours
- **Total:** ~48 hours (if all features implemented)

---

## NOTES

### Time Already Invested (from TIMELOG.md):
- October 27: 2.24 hours
- October 28: 1.5 hours
- October 29: 2.25 hours
- **Documented total:** ~6 hours
- **Estimated actual total (including Oct 11-22):** 50-55 hours

### Key Dates from Chris (Content Uploads):
- Per Nov 6 implementation plan: New videos/imagery TBD
- Store locator data: Originally expected Oct 25, still pending

### Brand Positioning Rule (from Jack, Oct 24):
> "We are a better-for-you soda that aids in hydration, NOT a hydration soda"

Apply this messaging hierarchy to all content tickets:
1. SODA (taste, flavor, refreshment)
2. HYDRATION (electrolytes, functional benefit)
3. HONEY (organic, natural, no synthetics)

---

**Last Updated:** December 8, 2025
