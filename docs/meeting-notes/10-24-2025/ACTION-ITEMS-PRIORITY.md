# Strive Soda - Prioritized Action Items
## Meeting: October 24, 2025 - Jack & Gavin

**Last Updated:** October 25, 2025
**Deadline:** Weekend implementation (Oct 25-27)
**Next Sync:** Monday, Oct 28, 2025

---

## 🔴 P0 - IMMEDIATE (End of Day Oct 25)

### 1. About Us Page - Complete Rewrite ✅ IN PROGRESS
**Status:** Awaiting Chris's final approval on mission statement
**Files:** `templates/page.about.json`, `sections/science-checkerboard-fold.liquid`

**New Content Approved by Jack:**

#### WE STRIVE TOGETHER
**The Founder's Story**

Strive Soda began with one simple truth: Jack Espy loves soda. Always has. But he also loves feeling good — staying hydrated, active, and balanced. Somewhere along the way, he realized most people walk around dehydrated and reaching for drinks that don't actually help. So he decided to change that.

Jack built Strive to be more than just another beverage. It's a hydration-forward soda—crafted for people who want incredible flavor and real function. Each can is packed with electrolytes to keep your body fueled and your mind sharp.

Instead of cutting corners with synthetic sugars like sucralose or aspartame, Jack chose 100% organic wildflower honey — because nature already nailed sweetness. It's his way of proving that health and flavor don't have to live in separate worlds.

Born in San Diego, California, Strive was made for the movers, the shakers, the doers, and the everyday strivers chasing what's next.

Strive isn't just a drink.
It's a mindset — a reminder that what you put in your body should help you feel your best, and that progress tastes a little sweeter when you earn it.

#### Our Mission
**[PENDING CHRIS APPROVAL - Top Options:**
- Option 1: "To craft drinks that keep you hydrated, fueled, and feeling alive — no compromises, no fake stuff, just real ingredients that work as hard as you do. Because when you're striving toward what's next, you deserve a soda that shows up for you."
- Option 2: "To create soda that actually makes you feel good"
- Option 3: "We believe refreshment should lift you up, not weigh you down"]

**Mission Must Align with Hierarchy:**
1. **SODA FIRST** (taste, refreshment)
2. **HYDRATION SECOND** (functional benefit)
3. **100% WILDFLOWER HONEY THIRD** (ingredient quality)

**Critical Note from Jack (Timestamp 47:45):**
> "We are a better-for-you soda that aids in hydration, NOT a hydration soda"

**Action Items:**
- [x] Draft About Us copy with Jack
- [x] Send to Chris for approval
- [ ] Implement approved copy into About Us page
- [ ] Add image placeholder for founder/Jack photo
- [ ] Add mission-aligned imagery
- [ ] Test on local dev server
- [ ] Push to production once approved

**Location:** https://strivesoda.com/pages/about-us

---

## 🟠 P1 - HIGH PRIORITY (This Weekend Oct 25-27)

### 2. Fix "1-2-3 of Hydration Soda" Section
**Status:** Both Jack & Gavin "not in love with it"
**Issue:** Current layout doesn't work, messaging is "hydration soda" not "soda first"

**Jack's Feedback (Timestamp 05:48):**
> "I think I love the idea of it, but just like the way it's laid out right now..."

**Gavin's Response (Timestamp 06:40):**
> "That's like me mid building and I'm not in love with it too"

**Requirements:**
- Redesign layout to emphasize SODA → HYDRATION → HONEY hierarchy
- Make visually compelling
- Ensure messaging is "better-for-you soda" not "hydration drink"
- Test responsiveness

**Files to Modify:**
- Find and update the 1-2-3 section (likely in `templates/index.json` or custom section)

---

### 3. Homepage - Soda-First Messaging Review
**Status:** Need to audit ALL homepage copy for messaging alignment

**Messaging Hierarchy (CRITICAL):**
1. **SODA** - Taste, flavor, refreshment (lead with this)
2. **HYDRATION** - Electrolytes, functional benefit (secondary)
3. **HONEY** - 100% organic wildflower honey, no synthetics (third)

**Anti-Pattern to Avoid:**
- ❌ "Hydration soda with electrolytes"
- ❌ "Electrolyte drink that tastes like soda"
- ❌ Leading with hydration benefits

**Correct Pattern:**
- ✅ "Incredible tasting soda that keeps you hydrated"
- ✅ "Better-for-you soda packed with electrolytes"
- ✅ "Real soda, real hydration, real ingredients"

**Action Items:**
- [ ] Audit hero section copy
- [ ] Review all CTAs and headlines
- [ ] Update product descriptions
- [ ] Ensure "soda first" approach throughout

**Files:** `templates/index.json`, `sections/gs-hero.liquid`

---

### 4. Science Page - Messaging Alignment
**Status:** Need to ensure science page supports "soda first" positioning

**Review Areas:**
- Hero/intro copy
- Electrolyte benefits section
- Honey benefits section
- Why Strive section
- All CTAs and headlines

**Action Items:**
- [ ] Read through entire Science page copy
- [ ] Flag any "hydration soda" or "hydration drink" language
- [ ] Reframe to "better-for-you soda with hydration benefits"
- [ ] Ensure hierarchy: Taste → Hydration → Ingredients

**Files:** `templates/page.science.json`, `sections/science-*.liquid`

---

## 🟡 P2 - MEDIUM PRIORITY (Next Week Oct 28 - Nov 1)

### 5. Store Locator (GEO Locator)
**Status:** Can wait until after priority edits
**Mentioned:** Timestamp 06:18

**Jack's Note:**
> "The about us and the creating the GEO locator for strive. Like we can wait on that."

**Strategic Context (from Oct 21 meeting notes):**
Chris's vision: Retail should outpace DTC within 12 months

**Requirements:**
- Add to header navigation (dropdown or standalone)
- Implement as CTA on multiple pages
- Currently San Diego only, but future-proof for expansion
- Awaiting store locator data from Chris (expected Oct 25)

**Action Items:**
- [ ] Wait for store locator data from Chris
- [ ] Plan navigation placement
- [ ] Design store locator page
- [ ] Implement search functionality
- [ ] Add CTAs across site (homepage, product pages, about)

---

### 6. Product Pages - Nutrition Facts Updates
**Status:** From Oct 21 meeting notes, still pending

**Updates Needed:**
- Peach Perfect: 10g carbs, 8g sugars
- Tropical Recharge: 10g carbs, 8g sugars

**Files:** `sections/product-nutrition-label.liquid`

---

### 7. Design Consistency Audit
**Status:** From Oct 21 POA, still pending

**Items to Review:**
- [ ] Button corner radius standardization (site-wide)
- [ ] Font weight & size consistency
- [ ] Poly Sans Mono import for science/nutrition content
- [ ] Heading hierarchy using "75% of adults" style as template

**Files:**
- `snippets/global-fonts.liquid`
- `assets/app.css`
- `assets/strive-header-footer.css`

---

## 🟢 P3 - NICE TO HAVE (Future)

### 8. Responsiveness Bug Fixes
**Status:** From Oct 21 POA

**Issues:**
- Product page scroll bug (can't scroll to top)
- Peach image height issue
- Homepage video white space on desktop resize
- Homepage video white space on mobile

**Files:** Various (need to reproduce and identify)

---

## 📋 General Guidelines for All Updates

### Brand Messaging Rules
1. **Always lead with SODA** (taste, flavor, enjoyment)
2. **Then HYDRATION** (electrolytes, function)
3. **Then HONEY** (organic, natural, no synthetics)

### Copy Tone
- Founder-focused but empowering
- Active lifestyle oriented
- San Diego born and raised vibe
- "Movers, shakers, doers, everyday strivers"
- Aspirational but accessible

### Technical Requirements
- All sections must be editable in Shopify theme editor
- Use existing `science-checkerboard-fold.liquid` component structure
- Maintain componentization for easy reordering
- Test on local dev server before pushing to production
- Mobile-first responsive design

---

## 🎯 Success Criteria

**About Us Page is Complete When:**
- [x] Founder story copy approved by Chris
- [ ] Mission statement approved by Chris
- [ ] Copy implemented in theme editor
- [ ] Founder/Jack image placeholder added
- [ ] Mission imagery added
- [ ] Fully editable in Shopify admin
- [ ] Mobile responsive
- [ ] Live on production

**Messaging is Aligned When:**
- [ ] All "hydration soda" language removed
- [ ] Homepage leads with soda/taste
- [ ] Science page supports soda-first positioning
- [ ] Product pages emphasize flavor first
- [ ] Hierarchy consistent: Soda → Hydration → Honey

---

## 📞 Next Steps

**Today (Oct 25):**
- Implement About Us page updates (pending Chris approval)
- Begin messaging audit across site

**Weekend (Oct 25-27):**
- Fix 1-2-3 section layout
- Complete homepage messaging review
- Update Science page copy
- Test all changes on local server

**Monday (Oct 28):**
- Sync with Jack to review progress
- Discuss next project (Spirited Hive)
- Plan early November retainer discussion

**Early November:**
- Store locator implementation
- Monthly retainer pricing discussion
- Long-term partnership structure

---

## 🔗 Related Documents

- **Meeting Notes:** `/docs/meeting-notes/10-24-2025/meeting-notes.md`
- **Transcript:** `/docs/meeting-notes/10-24-2025/transcript.md`
- **Video:** `/docs/meeting-notes/10-24-2025/video.mp4`
- **Previous POA:** `/PLAN-OF-ACTION.md` (Oct 21 meeting)
- **Project Context:** `/PROJECT-CONTEXT.md`
- **Task Checklist:** `/CHECKLIST.md`

---

## 💬 Key Quotes from Meeting

**On Brand Positioning:**
> "We are a better-for-you soda that aids in hydration, not a hydration soda." - Jack (47:45)

**On Mission Statement:**
> "Make it a little bit more punchy, make it a little bit more meaningful. Get rid of energize - we don't want to energize anywhere in this." - Jack (44:03)

**On Collaboration:**
> "Three weeks ago I was looking for a web developer and it came to me - why don't I just see if Gab can do it?" - Jack (56:55)

**On AI Workflow:**
> "AI is supposed to take things off your plate, not add more to your plate." - Gavin (53:25)

---

**End of Action Items Document**
