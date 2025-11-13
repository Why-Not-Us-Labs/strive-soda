# Complete Footer Policy Links Fix

## Quick Summary

Your footer policy links (Terms of Service, Privacy Policy, Return & Exchange) all go to the science page because:
1. The custom pages at `/pages/*` contain science content (wrong)
2. Shopify's built-in policies at `/policies/*` don't exist yet (empty)
3. The footer menu points to the wrong `/pages/*` URLs

## THE FIX (Complete Step-by-Step)

### Step 1: Create Shopify Policies (5 minutes)

1. **Go to Shopify Policies Settings:**
   https://ab6dae-bb.myshopify.com/admin/settings/legal

2. **Click "Terms of Service"**
   - Click "Create from template" (Shopify provides a legal template)
   - OR paste custom content
   - Click "Save"

3. **Click "Privacy Policy"**
   - Click "Create from template"
   - OR paste custom content
   - Click "Save"

4. **Click "Refund Policy"**
   - Click "Create from template"
   - OR paste custom content
   - Click "Save"

### Step 2: Update Footer Menu Links (2 minutes)

1. **Go to Navigation:**
   https://ab6dae-bb.myshopify.com/admin/menus

2. **Click "Footer menu"**

3. **Update each policy link:**

   **For "TERMS OF SERVICE":**
   - Click the link
   - In the "Link" field, change from `Contact` or whatever page it's pointing to
   - Select "Policies" → "Terms of Service"
   - OR manually type: `/policies/terms-of-service`
   - Click "Apply"

   **For "PRIVACY POLICY":**
   - Click the link
   - Select "Policies" → "Privacy Policy"
   - OR manually type: `/policies/privacy-policy`
   - Click "Apply"

   **For "RETURN & EXCHANGE POLICY":**
   - Click the link
   - Select "Policies" → "Refund Policy"
   - OR manually type: `/policies/refund-policy`
   - Click "Apply"

4. **Click "Save menu"**

### Step 3: Delete Bad Pages (Optional but Recommended - 1 minute)

1. **Go to Pages:**
   https://ab6dae-bb.myshopify.com/admin/pages

2. **Find and delete these pages:**
   - Search for "Terms of Service" → Click → "Delete page"
   - Search for "Privacy Policy" → Click → "Delete page"
   - Search for "Return & Exchange Policy" → Click → "Delete page"

   **Why delete them?** They contain science page content and will confuse Google/SEO.

### Step 4: Test (30 seconds)

1. Visit https://strivesoda.com
2. Scroll to footer
3. Click each link:
   - ✅ Terms of Service → Should show actual terms
   - ✅ Privacy Policy → Should show actual privacy policy
   - ✅ Return & Exchange Policy → Should show actual refund policy

## Alternative: Quick Fix (If You're in a Hurry)

If you don't want to create policies right now, you can temporarily:

1. Go to Pages: https://ab6dae-bb.myshopify.com/admin/pages
2. Edit each policy page ("Terms of Service", "Privacy Policy", "Return & Exchange Policy")
3. Replace the science content with a simple message like:
   ```
   # Terms of Service

   [Content coming soon]

   For questions, contact us at hello@strivesoda.com
   ```

But I **strongly recommend** using Step 1-4 above for proper legal compliance.

## What Changed in the Code

I already updated the footer configuration to include a `legalLinks` block that's ready to use Shopify's policy system. The code change has been pushed to your live theme (#182679339300).

**File modified:** `sections/group-footer.json` (lines 75-84)

## Summary

**You need to:**
1. Create policies in Shopify Settings
2. Update footer menu links to point to `/policies/*` instead of `/pages/*`
3. Delete the old pages with wrong content

**Total time:** ~8 minutes
**Difficulty:** Easy (just clicking through Shopify admin)

## Need Help?

If you want me to draft custom policy content for Strive Soda, let me know! I can write:
- Terms of Service specific to beverage/DTC business
- Privacy Policy (GDPR/CCPA compliant)
- Refund/Return Policy for beverage products
