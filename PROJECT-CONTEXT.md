# STRIVE SODA WEBSITE PROJECT - COMPLETE CONTEXT

**Project Start Date:** September 29, 2025
**Client:** Jack (Jespy) - Strive Soda / Spirited Hive
**Developer:** Gavin (You)
**Platform:** Shopify (Theme: Bullet v5.5.0)
**Primary Goal:** Complete website overhaul before ad launch

---

## WHAT: Project Overview & Deliverables

### Core Website Pages
1. **Homepage** - Hero section, product showcase, CTAs, social proof
2. **Product Pages** (3 products)
   - Tropical Recharge (variety pack)
   - Peach Perfect
   - Variety Pack (individual)
3. **Science Page** - "The Science Behind Hydration Soda"
4. **About/Story Page** - Brand narrative
5. **Shop Page** - Product grid with hover effects

### Key Features to Implement
- **Working 10% discount popup** (currently broken)
- **Product subscriptions** (10% off, defaulted)
- **Review system** (Judge.me - currently not displaying)
- **Store locator** (Round 2 - post-launch)
- **Image carousel** for homepage products
- **Mobile-first responsive design**
- **Heat maps/analytics integration**

### Design & Branding Assets
- **AI-generated product images**
  - Lifestyle shots (yoga, running, climbing, hiking)
  - Product in ingredients (passion fruit, coconut, peaches, lemons, honey)
  - Hero video with rotating can and lifestyle footage
- **Brand Colors:**
  - Primary: Tiffany Blue (#0ABAB5)
  - Secondary: Orange (#FF7A00)
  - Font: Polysans Standard (Inter as fallback)
  - Font weight: 800 for headings/buttons

---

## WHY: Business Drivers & Goals

### The Problem
- **Current site is underperforming** - ads turned off due to poor conversion
- Users drop off at homepage/product pages
- No clear value proposition ("What is hydration soda?")
- Missing key differentiation from competitors
- Poor mobile experience
- Reviews not working - social proof missing

### Business Impact
- **Every day counts** - losing sales while site is broken
- Ads resume Saturday → need product pages ready ASAP
- Circle K pitch materials needed (separate Hive project)
- Competing in crowded "better-for-you soda" market

### Target Audience
- **"Movers, Shakers, Doers"**
  - Active lifestyle enthusiasts (NOT just surfers)
  - Yoga practitioners, runners, hikers, climbers
  - Health-conscious consumers avoiding synthetic sugars
  - People seeking alternatives to traditional soda/energy drinks
  - Sober-curious community (like Gavin - almost 1 year sober)

### Competitive Differentiation
- **NOT a probiotic/prebiotic soda** (like Poppy, Olipop)
- **Hydration-focused** with real electrolytes:
  - 100mg sodium
  - 30mg magnesium
  - 30mg potassium
  - 20mg calcium
  - Total: 180mg electrolytes per can
- **100% organic wildflower honey** - world's first natural sweetener
- **No synthetic sugars** - no sucralose, aspartame, high-fructose corn syrup

---

## HOW: Technical Implementation

### Development Approach
- **Test-drive model:** 5-hour collaborative session
- **Real-time feedback:** Jack present during build
- **Pay on satisfaction:** $150/hour capped at ~$2,500
- **Mobile-first:** Most traffic from Instagram/social
- **Shopify native:** Using Bullet theme capabilities

### Technology Stack
- **Platform:** Shopify
- **Theme:** Bullet v5.5.0 by OpenThinking
- **Review System:** Judge.me
- **Email/SMS:** Integrated with purchase flow
- **Analytics:** Heat maps and user flow tracking
- **AI Image Generation:** Why Not Us platform (superior to ChatGPT)
- **Fonts:** Polysans Standard, Inter fallback
- **Custom CSS:** Brand colors via CSS variables

### File Structure
```
/assets/
  - product.css (custom Strive sections styling)
  - app.css (main stylesheet)
/sections/
  - t-product.liquid (product template - FIXED: moved custom sections outside grid)
  - science-honey.liquid (honey science section)
  - gs-*.liquid (general sections)
/templates/
  - index.json (homepage structure)
  - product.json (product page templates)
/snippets/
  - global-*.liquid (reusable components)
```

### Key Technical Fixes Completed
1. **Product page layout:** Moved custom sections from inside `<product-content>` to outside `</x-grid>` for full-width display
2. **Brand consistency:** Updated Tiffany Blue from #81d8d0 to #0ABAB5
3. **Font standardization:** Applied Inter/Polysans throughout with font-weight 800
4. **Honey image:** Hardcoded image URL in science-honey.liquid with proper sizing
5. **Responsive styling:** Improved mobile-first CSS across all sections

---

## WHEN: Timeline & Priorities

### P0 - URGENT (Before Saturday Ads Launch)
**Must be done by Friday night / Saturday morning**

#### Product Pages (HIGHEST PRIORITY)
- [ ] Hero images: Can laying in ingredients (tropical + peach)
- [ ] Updated descriptions for all 3 products
- [ ] Key benefits section (electrolytes, honey, no synthetic sugars)
- [ ] "When to drink" section
- [ ] "Learn more" CTA → links to science page
- [ ] Fix reviews display (Judge.me configuration)
- [ ] Make photos clickable for gallery view
- [ ] Subscription defaulted with 10% discount

#### Homepage
- [ ] Header enhancement (more engaging design)
- [ ] Hero video/image (3D can with lifestyle background)
- [ ] "What is hydration soda?" section with 3 CTAs:
  - Amazing flavor → Shop
  - What is hydration soda? → Science page (top section)
  - 100% organic honey → Science page (honey section)
- [ ] Product carousel (replace full-page grid)
- [ ] Why honey vs synthetic sugars highlights
- [ ] Footer redesign with social links

#### Navigation
- [ ] Fix "Learn" dropdown (currently links to wrong page)
- [ ] New structure:
  - Home, Shop, Learn, About
  - About dropdown: Our Story, FAQ
- [ ] Fix search and cart header alignment

### P1 - HIGH PRIORITY (By Monday Review)
**Needed before team feedback session Monday 10am**

#### Science Page
- [ ] "The Science Behind Hydration Soda" headline
- [ ] 75% dehydration stat callout
- [ ] Electrolyte constellation visual (sodium, potassium, magnesium, calcium)
- [ ] Updated electrolyte breakdown
- [ ] Why honey section (antioxidants, minerals, enzymes)
- [ ] Why NOT synthetic sugars section (health risks, blood sugar crashes)
- [ ] Comparison chart: Strive vs regular soda vs sports drinks
- [ ] Hover interactions (not scroll-heavy)

#### Shop Page
- [ ] Hover effects implemented (blue background → lifestyle shot)
- [ ] Mobile optimization
- [ ] Font/color consistency

### P2 - POST-WEDNESDAY (Round 2)
**Nice-to-haves after main launch**

- [ ] Store locator (Destiny product locator or custom)
- [ ] Ambassador/community building section
- [ ] Enhanced review system features
- [ ] Additional lifestyle imagery
- [ ] Video testimonials

### COMPLETED ✅
- [x] Product page layout fix (full-width custom sections)
- [x] Font consistency (Polysans Standard throughout)
- [x] Tiffany Blue color correction (#0ABAB5)
- [x] Honey image added to science page
- [x] 10% discount popup fix
- [x] Shopify theme pushed to development
- [x] Mobile responsive improvements

---

## WHERE: File Locations & Key Code

### Critical Files
1. `/Users/gmac/Dev/strive-soda/sections/t-product.liquid` (Lines 66-140)
   - **Why important:** Main product template controlling product page layout
   - **Key fix:** Moved custom sections outside `</x-grid>` for full-width display

2. `/Users/gmac/Dev/strive-soda/assets/product.css` (Lines 909-1253)
   - **Why important:** All custom Strive section styling
   - **Key changes:** CSS variables, Inter font, Tiffany Blue updates, font-weight 800

3. `/Users/gmac/Dev/strive-soda/sections/science-honey.liquid` (Lines 16-21, 123-135)
   - **Why important:** Honey section on Science page
   - **Key changes:** Hardcoded honey image, adjusted sizing (cover vs contain)

4. `/Users/gmac/Dev/strive-soda/templates/index.json`
   - **Why important:** Landing page structure and sections
   - **Status:** Many disabled sections, needs review for additions

### Brand Assets
- **Logo:** Strive wordmark with eye detail (nod to Hive)
- **Can Images:** High-res product shots (tropical, peach, variety)
- **Ingredient Images:** Passion fruit, coconut, peaches, lemons, honey
- **Lifestyle Images:** Yoga, running, climbing, hiking, cycling
- **Honey Image:** `https://cdn.shopify.com/s/files/1/0878/4170/2180/files/why-honey-img.png?v=1760288982`

---

## WHO: Team & Stakeholders

### Core Team
- **Jack (Jespy)** - Founder, decision maker
  - Always available for questions
  - Provides detailed copy and requirements
  - Former location: California → now Long Island

- **Gavin (You)** - Developer
  - Full-stack developer with product management background (Axon)
  - Specializes in AI-powered image generation (Why Not Us platform)
  - Mobile-first, design-focused approach
  - Almost 1 year sober (target user persona)

- **Graham (G)** - Frontend Engineer
  - Works with Gavin on Why Not Us
  - Available for collaborative sessions
  - Lives in NYC (Joey's apartment)

### Extended Team
- **CMO** - Owns product page copy updates (completed by Friday)
- **SMS/Email Specialist** - Updating product descriptions
- **CFO** - Budget approval (~$2,500)

### Meeting Schedule
- **Friday 2-4pm:** Major review session before Saturday launch
- **Monday 10am:** Final review before team feedback

---

## KEY MESSAGING & COPY

### Core Value Props
1. **Tastes amazing** - Great tasting soda first
2. **Hydration soda** - New category, not energy drink
3. **Bold flavors:**
   - Tropical Recharge: Passion fruit + coconut + honey
   - Peach Perfect: Peach + lemon + honey
4. **100% organic wildflower honey** - World's first natural sweetener

### Product Descriptions (All products end with this)
> "Whether you're powering through a workout, recovering from a long day, or just reaching for something better, Strive soda makes hydration taste as good as it feels."

### Tagline Options
- "Built for those who strive"
- "For the movers, shakers, doers"
- "Hydration that tastes as good as it feels"

### Science Messaging
- 75% of adults are chronically dehydrated without knowing it
- Strive delivers hydration, clean sweetness, and bold flavor
- Unlike sports drinks (180mg vs typical 500mg+ electrolytes)
- No glucose spikes from honey vs refined sugars
- No synthetic chemicals (sucralose, aspartame, ace-K)

---

## INSPIRATION & COMPETITORS

### Direct Inspiration
1. **June Shine** - North Star for site structure
   - Good flow and storytelling
   - Science section explaining benefits
   - Individual product pages with details
   - **Issues:** Navigation confusing, too many sub-sites

2. **Ben Stiller's "Stillers Soda"**
   - Effective "no fake stuff" messaging
   - Retro video player aesthetic
   - Store locator integration (131 locations)
   - Mobile-phone mockup design

3. **Roark** - Lifestyle video approach
   - Shows active lifestyle without products
   - Simple navigation
   - Minimal clicks to purchase

### Competitive Set
- **Probiotic sodas:** Poppy, Olipop, Culture Pop
- **Traditional sodas:** Coke, Sprite, etc.
- **Sports drinks:** Gatorade, Powerade
- **Position:** "Hydration soda" - unique category

---

## DECISION LOG

### Design Decisions
1. ✅ **Mobile-first** - Most traffic from Instagram/social
2. ✅ **Two fonts max** - Polysans Standard with weights (not multiple fonts)
3. ✅ **Full-width sections** - Moved out of product grid for impact
4. ✅ **Hover interactions** - Shop page blue bg → lifestyle shot
5. ✅ **Constellation visual** - For electrolyte relationships (vs list)
6. ✅ **Default subscription** - 10% off, pre-selected for users
7. ✅ **No energy messaging** - Hydration-focused, not energy drink

### Content Decisions
1. ✅ **"Somewhere on the Inside" campaign** - Keep only if drives purchase
2. ✅ **Science page vs homepage** - Brief teaser on homepage, full detail on dedicated page
3. ✅ **Lifestyle categories** - Yoga, running, hiking, climbing (not just surfing)
4. ✅ **Video placement** - Move surfing video to About/Story page (not homepage hero)
5. ✅ **Comparison chart** - Strive vs regular soda vs sports drinks (3-column)
6. ✅ **Store locator** - Round 2 feature (post-launch)

### Technical Decisions
1. ✅ **Shopify theme** - Keep Bullet theme, customize within constraints
2. ✅ **Judge.me reviews** - Fix configuration (auto-publish enabled)
3. ✅ **AI image generation** - Use Why Not Us (not ChatGPT)
4. ✅ **CSS variables** - Define brand colors at root level
5. ✅ **Hardcoded honey image** - Direct URL vs image picker (faster deployment)

---

## RISKS & MITIGATION

### Risks
1. **Timeline pressure** - Ads launch Saturday, product pages must be ready
   - **Mitigation:** Product pages P0, everything else P1/P2

2. **Hero video quality** - 3D can render may not meet quality standards
   - **Mitigation:** Have backup static image ready

3. **Team coordination** - CMO owns product copy, could cause delays
   - **Mitigation:** Work in parallel on structure/design

4. **Shopify theme limitations** - May need workarounds for custom features
   - **Mitigation:** Leverage existing Bullet theme components

5. **Review system** - Judge.me configuration still not fully resolved
   - **Mitigation:** AI-generated reviews as temporary solution

---

## SUCCESS METRICS

### Launch Success (By Saturday)
- [ ] Product pages live with all content
- [ ] Homepage updated with clear value prop
- [ ] Mobile experience polished
- [ ] No broken functionality (forms, cart, checkout)

### Post-Launch (Week 1)
- Ads running successfully
- Conversion rate improvement vs old site
- Reduced drop-off on product pages
- Reviews being collected

### Long-term Goals
- Store locator driving in-person purchases
- Ambassador program applications
- Lower bounce rate on homepage
- Higher engagement with Science page

---

*Last Updated: October 12, 2025*
*Full meeting transcripts available in: `/Users/gmac/Dev/strive-soda/meeting-transcripts-raw.txt`*
