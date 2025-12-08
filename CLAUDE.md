# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Shopify theme called "Bullet" (v5.5.0) by OpenThinking, customized for Strive Soda. The theme uses Shopify's Liquid templating language with a component-based architecture built around custom web components and modular sections.

**Store:** ab6dae-bb.myshopify.com
**Live Production Theme:** wnu-11-14-2025-prod (#183784997156)
**Dev Server:** http://127.0.0.1:9292

## Project Context Documents

Reference these files when working on this project:

- **PROJECT-CONTEXT.md** - Complete project breakdown (WHAT/WHY/HOW/WHEN/WHERE framework), deliverables, business goals, technical implementation details
- **CHECKLIST.md** - Prioritized task list with P0/P1/P2 priorities
- **DEV-WORKFLOW.md** - Full development workflow, deployment checklist, rollback procedures
- **TIMELOG.md** - Work session tracking for billing

### Brand Quick Reference

- **Brand Colors:** Tiffany Blue (#0ABAB5), Orange (#FF7A00)
- **Fonts:** Poly Sans (loaded from cdnfonts.com) / Inter fallback, weight 400 for headings
- **CSS Font Variables:** `--font-primary`, `--font-headings` (both Poly Sans), `--font-mono` (Poly Sans Mono)
- **Key Differentiator:** "Hydration soda" with 180mg electrolytes + 100% organic honey

## Development Commands

```bash
# Start local development server (against live theme)
shopify theme dev --store=ab6dae-bb.myshopify.com --theme=183784997156

# Pull latest from production (overwrites local)
shopify theme pull --store=ab6dae-bb.myshopify.com --theme=183784997156

# Push all changes to production
shopify theme push --store=ab6dae-bb.myshopify.com --theme=183784997156

# Push specific file
shopify theme push --store=ab6dae-bb.myshopify.com --theme=183784997156 --only=sections/gs-hero.liquid

# Push multiple specific files
shopify theme push --store=ab6dae-bb.myshopify.com --theme=<THEME_ID> --only="sections/file1.liquid" --only="sections/file2.liquid" --nodelete

# List all themes
shopify theme list --store=ab6dae-bb.myshopify.com

# Clone theme for feature development
shopify theme push --store=ab6dae-bb.myshopify.com --unpublished --json
```

## Theme Architecture

### Directory Structure

- **assets/** - CSS, JavaScript, static files (app.css is main stylesheet)
- **config/** - Theme settings (settings_schema.json defines all customization options)
- **layout/** - Base HTML templates (theme.liquid is main layout)
- **locales/** - Translation files
- **sections/** - Reusable content sections (added/removed via theme editor)
- **snippets/** - Reusable partial templates
- **templates/** - Page type templates (JSON-based, referencing sections)

### Component Naming Convention

- **global-*** - Global utility snippets (icons, meta, breadcrumbs, product cards)
- **c-*** - Complex interactive components (cart, dialog, slideshow)
- **gs-*** - General sections (featured products, collections, blog, countdown)
- **h-*** - Helper components and utilities (carousel, editor utilities)
- **science-*** - Custom science page sections (specific to Strive)
- **about-*** - Custom about page sections (specific to Strive)
- **store-locator-*** - Store locator page sections (hero, widget, CTA)

### Styling System

CSS custom properties defined in `snippets/global-css-vars.liquid`:
- Variables are dynamically generated from theme settings
- Main stylesheet: `assets/app.css`
- Component-specific styles: `c-*.css`, `gs-*.css`
- Custom Strive styles: `assets/strive-*.css`, `assets/footer-phone.css`

### JavaScript Architecture

- **app.js** - Main JavaScript bundle
- Component-specific JS files follow same naming as CSS (`c-*.js`, `h-*.js`)
- Uses modern ES6+ patterns and custom web components
- Ajax cart functionality via `c-cart.js.liquid`

### Section Groups

- **group-header.json** - Header sections
- **group-footer.json** - Footer sections
- **group-overlay.json** - Overlays (cart drawer, search, etc.)

## Key Development Notes

1. **Live Reloading**: Dev server auto-syncs changes - edits to Liquid, CSS, or JS appear immediately
2. **Theme Editor Conflicts**: Changes made via theme editor while dev server runs may conflict with local changes
3. **Design Mode**: Editor-specific features load via `h-editor.js` when `request.design_mode` is active

### Theme Settings Access

All theme settings accessible in Liquid via `settings.*`:
- Colors: `settings.bgColor`, `settings.color`, `settings.buttonBgColor`
- Typography: `settings.bodyFontFamily`, `settings.fontSize`, `settings.hSize`
- Layout: `settings.boxedLayout`, `settings.globalBorderWidth`, `settings.BorderRadiusGlobal`
- Features: `settings.cart_type`, `settings.showBreadcrumbs`, `settings.predictive_search_enabled`

## File Modification Guidelines

- **CSS**: Edit `assets/app.css` for global styles, component-specific CSS for isolated changes
- **Liquid**: Main layout is `layout/theme.liquid`, page structures in `templates/*.json`
- **Components**: Interactive components in `sections/` can be customized per-page via theme editor
- **Snippets**: Reusable partials in `snippets/` - use `{% render 'snippet-name' %}` to include

## Key URLs

**Shopify Admin:**
- Theme Editor: https://ab6dae-bb.myshopify.com/admin/themes/183784997156/editor
- Navigation Menus: https://ab6dae-bb.myshopify.com/admin/menus

**Live Site:**
- Homepage: https://strivesoda.com
- Science Page: https://strivesoda.com/pages/science-behind-strive
- About Us: https://strivesoda.com/pages/about-us
- Shop: https://strivesoda.com/collections/all
- Store Locator: https://strivesoda.com/pages/store-locator

## Third-Party Integrations

**Storepoint.co** - Store locator widget
- Widget ID: `168f803b457043`
- Embed script: `https://widget.storepoint.co/embed.js`
- Sections: `store-locator-hero.liquid`, `store-locator-widget.liquid`, `store-locator-cta.liquid`
- Template: `templates/page.store-locator.json`

## Common Issues & Solutions

**White space gaps between sections with custom elements:**
Custom elements like `<video-player>` are treated as inline elements by default, inheriting `font-size` and `line-height` from parents. Fix by setting `font-size: 0; line-height: 0` on the container and resetting on child content elements.

**Fonts falling back to Times/serif on dev themes:**
When cloning themes for feature development, ensure all font files are pushed:
```bash
shopify theme push --store=ab6dae-bb.myshopify.com --theme=<DEV_THEME_ID> --only="snippets/global-fonts.liquid" --only="snippets/global-css-vars.liquid" --only="layout/theme.liquid" --only="assets/app.css" --nodelete
```

**Third-party widget styling (e.g., Storepoint):**
- Use exact widget class names (inspect in browser) with `!important`
- Add JavaScript to apply fonts after widget loads using `setTimeout` and `MutationObserver`
- Widget classes often load dynamically after initial page render

**Changes not appearing:**
- Hard refresh browser (Cmd+Shift+R)
- Check terminal for sync errors
- Verify file saved properly

**Authentication expired:**
```bash
shopify logout
shopify theme list --store=ab6dae-bb.myshopify.com  # Will prompt re-auth
```

**Footer showing duplicate links:**
Check `sections/group-footer.json` - ensure "menu" and "legalLinks" blocks don't reference the same menu. Set `legalMenu` to empty to use shop.policies instead.

## Theme Documentation

- Official docs: https://docs.openthinking.net/themes/bullet/
- Support: https://openthinking.net/support/
