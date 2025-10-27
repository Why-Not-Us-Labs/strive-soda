# Development Workflow - Strive Soda Theme

## Quick Reference

**Store:** ab6dae-bb.myshopify.com
**Production Theme ID:** #182679339300
**Production Theme Name:** Strive - Dev (Why Not Us Labs)

---

## Setup Complete ✓

Your local environment is now synced with the live production theme. All files match what's currently on StriveSoda.com.

---

## Time Tracking & Commits

**📋 TIMELOG.md** - Track all work sessions for transparent hourly billing.

**Every work session:**
1. **Clock in** - Add entry to TIMELOG.md with start time
2. **List planned tasks** - What you're working on this session
3. **Make small commits** - One logical change per commit
4. **Clock out** - Update TIMELOG.md with end time and duration

**Small, atomic commits:**
- ✓ Commit after each completed task
- ✓ Descriptive commit messages (e.g., "Fix hero video gap on mobile")
- ✓ Test before committing
- ✓ Push to GitHub frequently

See [TIMELOG.md](TIMELOG.md) for full tracking workflow and billing history.

---

## Development Workflow

### 1. Start Local Development Server

```bash
shopify theme dev --store=ab6dae-bb.myshopify.com --theme=182679339300
```

**What this does:**
- Starts local server at `http://127.0.0.1:9292`
- Auto-syncs changes to Shopify in real-time
- Live reload - changes appear instantly in browser
- **Does NOT affect live site** - only you can see changes at the dev URL

**Access your local version:**
- Local: http://127.0.0.1:9292
- With preview: http://127.0.0.1:9292/?preview_theme_id=182679339300

---

### 2. Make Changes & Test

**Edit files locally:**
- `sections/` - Page sections
- `snippets/` - Reusable components
- `templates/` - Page templates
- `assets/` - CSS, JS, images

**Changes sync automatically** to the dev server while running `shopify theme dev`.

**Test thoroughly:**
- Check all breakpoints (mobile, tablet, desktop)
- Test user interactions
- Verify no console errors
- Check cross-browser compatibility

---

### 3. Review Changes Before Production

**See what you've changed:**

```bash
git status
git diff
```

**List all theme files:**

```bash
shopify theme list --store=ab6dae-bb.myshopify.com
```

**Compare with production:**
Check your local changes against what's live to ensure you're only pushing intended modifications.

---

### 4. Push to Production (With Your Approval)

**⚠️ IMPORTANT: This affects the live site!**

When you're ready to deploy after testing:

**Option A: Push specific files**

```bash
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300 --only=sections/gs-hero.liquid
```

**Option B: Push all changes**

```bash
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300
```

The CLI will show you what files will be uploaded and ask for confirmation:

```
? Upload theme files to Strive - Dev (Why Not Us Labs) (#182679339300)? (y/N)
```

**Only type `y` and press Enter when you've confirmed:**
- ✓ All changes tested locally
- ✓ All breakpoints verified
- ✓ No console errors
- ✓ Changes are intentional and safe

---

## Safety Checks Before Production Deploy

**Pre-deployment checklist:**

- [ ] Tested on local dev server (`shopify theme dev`)
- [ ] Verified mobile responsiveness (320px - 768px)
- [ ] Verified tablet responsiveness (768px - 1024px)
- [ ] Verified desktop responsiveness (1024px+)
- [ ] No console errors or warnings
- [ ] All links and CTAs working
- [ ] Images loading correctly
- [ ] Typography and spacing correct
- [ ] Animations smooth and performant
- [ ] Forms functional (if applicable)
- [ ] Cart functionality working (if applicable)
- [ ] You've reviewed `git diff` to see exact changes

**Communication:**
Before pushing, confirm with me (Claude):
> "I've tested X, Y, Z locally. Ready to push to production. Confirm?"

I'll review the changes with you and we'll push together.

---

## Emergency Rollback

If something goes wrong after deployment:

**Option 1: Quick fix**

```bash
# Make the fix locally
# Test it
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300 --only=path/to/file.liquid
```

**Option 2: Full rollback**

```bash
# Revert local changes
git log  # Find the last good commit
git revert <commit-hash>

# Push reverted version
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300
```

**Option 3: Nuclear option (use backup theme)**

1. Go to Shopify admin
2. Themes → Find previous backup theme
3. Click "Publish" on the backup

---

## Common Commands Reference

```bash
# List all themes
shopify theme list --store=ab6dae-bb.myshopify.com

# Pull latest from production (overwrites local)
shopify theme pull --store=ab6dae-bb.myshopify.com --theme=182679339300

# Start dev server
shopify theme dev --store=ab6dae-bb.myshopify.com --theme=182679339300

# Push to production (with confirmation)
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300

# Push specific file
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300 --only=sections/gs-hero.liquid

# Push multiple files
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300 --only='sections/*.liquid'
```

---

## Git Workflow (Recommended)

**Before starting work:**

```bash
git checkout main
git pull origin main
```

**During development:**

```bash
# Make changes
git add .
git commit -m "Description of changes"
```

**After successful production deploy:**

```bash
git push origin main
```

**This creates a history of all changes and allows easy rollbacks.**

---

## Theme File Structure Quick Reference

```
strive-soda/
├── assets/           # CSS, JS, images
│   ├── app.css       # Main stylesheet (~74KB)
│   ├── app.js        # Main JavaScript
│   ├── footer-phone.* # Footer phone widget
│   └── strive-*.*    # Custom Strive components
├── config/           # Theme settings
│   └── settings_schema.json
├── layout/           # Base layouts
│   └── theme.liquid  # Main layout file
├── sections/         # Reusable sections (86 files)
│   ├── gs-hero.liquid
│   ├── science-*.liquid
│   └── footer.liquid
├── snippets/         # Reusable partials (46 files)
│   ├── global-*.liquid
│   └── footer-phone.liquid
└── templates/        # Page templates (23 files)
    ├── index.json
    ├── product.json
    └── page.about.json
```

---

## Key URLs

**Shopify Admin:**
- Theme Editor: https://ab6dae-bb.myshopify.com/admin/themes/182679339300/editor
- Themes List: https://ab6dae-bb.myshopify.com/admin/themes
- Navigation: https://ab6dae-bb.myshopify.com/admin/menus

**Live Site:**
- Homepage: https://StriveSoda.com
- Science Page: https://StriveSoda.com/pages/science-behind-strive
- About Us: https://StriveSoda.com/pages/about-us
- Shop: https://StriveSoda.com/collections/all

**Preview (with theme ID):**
- https://ab6dae-bb.myshopify.com/?preview_theme_id=182679339300

---

## Support & Troubleshooting

**Dev server not starting?**
- Check if port 9292 is already in use
- Try killing any existing Shopify CLI processes
- Run `shopify theme dev` again

**Changes not appearing?**
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check terminal for sync errors
- Verify file saved properly

**Authentication expired?**
```bash
shopify logout
shopify theme list --store=ab6dae-bb.myshopify.com  # Will prompt re-auth
```

**Files out of sync with production?**
```bash
shopify theme pull --store=ab6dae-bb.myshopify.com --theme=182679339300 --force
```
⚠️ This will overwrite local changes!

---

## Notes

- **Always test before pushing to production**
- **Production pushes require your explicit approval**
- **Use git commits to track all changes**
- **Keep this workflow document updated as the process evolves**

---

Last updated: October 27, 2025
