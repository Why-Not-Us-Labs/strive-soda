# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Shopify theme called "Bullet" (v5.5.0) by OpenThinking, customized for the "Strive - Dev" store. The theme uses Shopify's Liquid templating language with a component-based architecture built around custom web components and modular sections.

## IMPORTANT: Project Context Documents

**ALWAYS reference these files when working on this project:**

1. **PROJECT-CONTEXT.md** - Complete project breakdown using WHAT/WHY/HOW/WHEN/WHERE framework
   - Contains all deliverables, business goals, technical implementation details
   - Timeline with P0/P1/P2 priorities
   - File locations, team structure, key messaging, decision log
   - **Read this first** to understand the full project scope

2. **CHECKLIST.md** - Prioritized task list with checkboxes
   - P0: Urgent tasks before Saturday ads launch (product pages, homepage, navigation)
   - P1: High priority tasks by Monday review (science page, shop page)
   - P2: Post-Wednesday nice-to-haves (store locator, ambassador section)
   - Separated into Developer Tasks (coding) and User Tasks (media creation)
   - **Update this file** as tasks are completed

3. **meeting-transcripts-raw.txt** - Raw meeting notes and transcripts
   - Verbatim records of all meetings with client (Jack/Jespy)
   - Use for detailed context and exact wording of requirements
   - Reference when clarification is needed on project decisions

### Project Context at a Glance

- **Client:** Jack (Jespy) - Strive Soda founder
- **Launch Deadline:** Saturday (ads resume)
- **Brand Colors:** Tiffany Blue (#0ABAB5), Orange (#FF7A00)
- **Fonts:** Polysans Standard / Inter fallback, weight 800 for headings
- **Key Differentiator:** "Hydration soda" with 180mg electrolytes + 100% organic honey
- **Target Audience:** Active lifestyle enthusiasts (yoga, running, hiking, climbing)
- **Dev Server:** http://127.0.0.1:9292

## Theme Architecture

### Core Structure

The theme follows Shopify's standard directory structure:
- **assets/** - CSS, JavaScript, and static files (app.css is the main stylesheet ~74KB)
- **config/** - Theme settings and configuration (settings_schema.json defines all theme customization options)
- **layout/** - Base HTML templates (theme.liquid is the main layout)
- **locales/** - Translation files for internationalization
- **sections/** - Reusable content sections that can be added/removed via theme editor
- **snippets/** - Reusable partial templates (prefixed with `global-`, `c-`, `gs-`, or `h-`)
- **templates/** - Page type templates (JSON-based, referencing sections)

### Component Naming Convention

- **global-*** - Global utility snippets (icons, meta, breadcrumbs, product cards, etc.)
- **c-*** - Complex interactive components (cart, dialog, slideshow, etc.)
- **gs-*** - General sections (featured products, collections, blog, countdown, etc.)
- **h-*** - Helper components and utilities (carousel, editor utilities, etc.)

### Key Theme Features

The theme is highly customizable through `config/settings_schema.json` which includes:
- Layout controls (boxed/fluid, borders, image radius)
- Complete color system (background, text, buttons, form fields)
- Typography system (body font, headings, custom fonts support)
- Product card configurations (grid, quick buy, hover effects)
- Cart functionality (drawer/side drawer/page, free shipping bar)
- SEO and social media settings
- Custom CSS and JavaScript injection

### Styling System

The theme uses CSS custom properties (CSS variables) defined in `snippets/global-css-vars.liquid`:
- Variables are dynamically generated from theme settings
- Main stylesheet is `assets/app.css`
- Component-specific styles: `c-*.css`, `gs-*.css`
- Skeleton/base styles in `assets/skelet.css`

### JavaScript Architecture

- **app.js** - Main JavaScript bundle
- Component-specific JS files follow same naming as CSS (`c-*.js`, `h-*.js`)
- Uses modern ES6+ patterns and custom web components
- Ajax cart functionality via `c-cart.js.liquid`
- Instant page loading via `m-instantpage.min.js`

### Section Groups

Sections are organized into groups for better structure:
- **group-header.json** - Header sections
- **group-footer.json** - Footer sections
- **group-overlay.json** - Overlays (cart drawer, search, etc.)

## Development Workflow

### Local Development

```bash
# Start local development server (already running)
shopify theme dev
# Server runs at http://127.0.0.1:9292
# Changes auto-sync to development theme
```

### Theme Commands

```bash
# Pull theme from Shopify
shopify theme pull --theme=<THEME_ID>

# Push changes to Shopify
shopify theme push

# List available themes
shopify theme list

# Publish theme
shopify theme publish
```

### Important Development Notes

1. **Live Reloading**: The dev server auto-syncs changes - edits to Liquid, CSS, or JS files are immediately reflected
2. **Theme Editor**: Changes made via theme editor while dev server is running may conflict with local changes
3. **Custom Code**: The theme provides settings for custom CSS/JS injection (settings.css and settings.js) to avoid direct theme file edits
4. **Design Mode**: Editor-specific features load via `h-editor.js` when `request.design_mode` is active

### File Modification Guidelines

When editing theme files:
- **CSS**: Edit `assets/app.css` for global styles, component-specific CSS for isolated changes
- **Liquid**: Main layout is `layout/theme.liquid`, page structures in `templates/*.json`
- **Components**: Interactive components in `sections/` can be customized per-page via theme editor
- **Snippets**: Reusable partials in `snippets/` - use `{% render 'snippet-name' %}` to include

### Theme Settings Access

All theme settings are accessible in Liquid via `settings.*`:
- Colors: `settings.bgColor`, `settings.color`, `settings.buttonBgColor`
- Typography: `settings.bodyFontFamily`, `settings.fontSize`, `settings.hSize`
- Layout: `settings.boxedLayout`, `settings.globalBorderWidth`, `settings.BorderRadiusGlobal`
- Features: `settings.cart_type`, `settings.showBreadcrumbs`, `settings.predictive_search_enabled`

## Theme Documentation

- Official docs: https://docs.openthinking.net/themes/bullet/
- Support: https://openthinking.net/support/

---

## Recent Session Updates

### October 15, 2025 - Shop Page, Science Page, & About Us Page Updates

**Completed Tasks:**

1. **Fixed Shop Page CTA** (`templates/collection.json` lines 76-77)
   - Issue: CTA said "Shop All Flavors" when already on shop page
   - Fix: Changed button to "Learn More About Hydration Soda" linking to `/pages/science-behind-strive`
   - Root cause: Template was using wrong setting names (`button_text`/`button_link` instead of `cta_text`/`cta_link`)
   - Files: `templates/collection.json`, `sections/science-cta.liquid`

2. **Fixed Honey Image Display on Science Page** (`sections/science-honey.liquid` line 115)
   - Issue: Honey image showed light blue borders (image background visible)
   - Fix: Changed `object-fit: contain` to `object-fit: cover`
   - Result: Image now fills frame seamlessly without borders showing
   - File: `sections/science-honey.liquid`

3. **Built Componentized About Us Page** (`templates/page.about.json`)
   - Created new About Us page using existing `science-checkerboard-fold` sections
   - Structure: 3 checkerboard sections + orange CTA
     - **Hero Section (Fold 1)**: "WE STRIVE TOGETHER" + mission text + team image (Tiffany Blue/Orange)
     - **Founder Story (Fold 2)**: Placeholder for founder image + Jack's journey text (Orange/Tiffany Blue)
     - **Mission Section (Fold 3)**: "Our Mission" + purpose statement + placeholder image (Tiffany Blue/Orange)
     - **CTA**: "Ready to Join the Strive Movement?" → Shop link
   - All content preserved from original About page
   - Fully editable in Shopify theme editor
   - Files: `templates/page.about.json`
   - URLs:
     - Local: http://127.0.0.1:9292/pages/about-us
     - Live: https://StriveSoda.com/pages/about-us

**Deployment Notes:**

- All changes pushed to **both** themes:
  - Development theme (#182818734372) - for local dev server
  - Live/Production theme (#182679339300) - for StriveSoda.com
- Important: Dev server uses Development theme, production uses Live theme

**Next Steps:**

- Upload founder/Jack images for About Us page (Founder Story section, left column)
- Upload mission/brand images for About Us page (Mission section, right column)
- Continue building out Science page checkerboard sections with compelling story content


### October 16, 2025 - Footer Phone Widget & Social Media Hub

**Completed Tasks:**

1. **Created Footer Phone Widget (JuneShine-inspired Social Hub)**
   - Files created:
     - `assets/footer-phone.css` - Phone widget styling
     - `assets/footer-phone.js` - Slideshow functionality
     - `assets/footer-phone.svg` - iPhone frame SVG
     - `snippets/footer-phone.liquid` - Phone widget component
   - Features:
     - iPhone-style frame with background image slideshow
     - Social media icons (Instagram, Twitter, Facebook, TikTok, YouTube, LinkedIn)
     - "Kick it with us on social" notification card
     - Fully responsive design
   - Files: `assets/footer-phone.*`, `snippets/footer-phone.liquid`, `sections/footer.liquid`

2. **Implemented Horizontal Footer Layout on Desktop**
   - Modified `assets/strive-header-footer.css` to create 2-column grid layout
   - Desktop (>1024px): Links section (left) | Phone widget (right)
   - Mobile (≤1024px): Stacked vertically (links on top, phone below)
   - Maintains JuneShine aesthetic with proper alignment
   - Files: `assets/strive-header-footer.css`

3. **Added Social Media URL Inputs to Theme Editor**
   - Added 6 URL input fields to Phone Widget section settings:
     - Instagram URL
     - Twitter URL
     - Facebook URL
     - TikTok URL
     - YouTube URL
     - LinkedIn URL
   - Fallback logic: Uses section-specific URLs if set, otherwise falls back to global theme settings
   - Users can now edit social links directly in Footer > Phone Widget (Social Hub) section
   - Files: `sections/footer.liquid` (lines 109-114, 453-482)

4. **Fixed Mobile Visibility & Z-Index Issues**
   - Removed `display: none` that was hiding phone widget on screens <480px
   - Added proper responsive sizing for small mobile devices (320px+)
   - Fixed z-index from 100 to 1 to prevent phone widget from overlapping header navigation
   - Files: `assets/footer-phone.css` (lines 11, 245-266)

**Technical Implementation:**

- **Grid Layout System:**
  ```css
  .main-footer footer {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Desktop: 2 columns */
  }
  .main-footer footer #f-links { grid-column: 1; grid-row: 1; }
  .main-footer footer #f-phone { grid-column: 2; grid-row: 1; }

  @media (max-width: 1024px) {
    .main-footer footer { grid-template-columns: 1fr; } /* Mobile: stack */
  }
  ```

- **Social Icons Fallback Logic:**
  ```liquid
  assign insta_url = instagram_link | default: settings.socialInstagram
  ```

**Deployment Notes:**

- All changes deployed to production theme (#182679339300)
- Local environment synced with production (latest pull completed)
- Social media icons automatically appear when URLs are added via theme editor

**How to Use:**

1. Go to: https://ab6dae-bb.myshopify.com/admin/themes/182679339300/editor
2. Navigate to Footer section → Phone Widget (Social Hub) block
3. Scroll to "Social Media Links" section
4. Add URLs for desired platforms
5. Save - icons appear instantly on phone widget

**Key Files:**

- `assets/footer-phone.css` - Phone widget styling (z-index: 1, responsive breakpoints)
- `assets/footer-phone.js` - Slideshow rotation logic
- `assets/footer-phone.svg` - iPhone frame graphic
- `assets/strive-header-footer.css` - Horizontal footer grid layout
- `sections/footer.liquid` - Footer section with phone widget block
- `snippets/footer-phone.liquid` - Phone widget component with social icons
