# Footer Policy Links Fix Instructions

## The Problem

The footer menu links (Terms of Service, Privacy Policy, Return & Exchange Policy) are pointing to custom pages at `/pages/*` that contain science page content instead of actual policies.

## Root Cause

The "footer" navigation menu in Shopify admin contains links to custom pages that were likely duplicated from the science page by mistake.

## The Fix (2 options)

### Option 1: Remove Policy Links from Footer Menu (Recommended)

1. **Go to Navigation Menu:**
   https://ab6dae-bb.myshopify.com/admin/menus

2. **Edit the "Footer menu":**
   - Click on "Footer menu"
   - **DELETE** these 3 menu items:
     - TERMS OF SERVICE
     - PRIVACY POLICY
     - RETURN & EXCHANGE POLICY
   - Keep: CONTACT, WHOLESALE, FAQ
   - Click "Save"

3. **The legalLinks block will automatically show Shopify policies**
   - The footer already has a separate `legalLinks` block configured
   - It will automatically display policies from Settings > Policies
   - These will appear as separate links below the main footer menu

### Option 2: Update Menu Links to Point to /policies/

1. **Go to Navigation Menu:**
   https://ab6dae-bb.myshopify.com/admin/menus

2. **Edit the "Footer menu":**
   - Click on each policy link and update the URL:
   - **TERMS OF SERVICE**: Change link to `/policies/terms-of-service`
   - **PRIVACY POLICY**: Change link to `/policies/privacy-policy`
   - **RETURN & EXCHANGE POLICY**: Change link to `/policies/refund-policy`
   - Click "Save"

3. **Set up policies in Shopify:**
   https://ab6dae-bb.myshopify.com/admin/settings/legal
   - Fill in each policy with actual content
   - Or use Shopify's policy generator templates

### Option 3: Delete Bad Pages (Nuclear Option)

1. **Go to Pages:**
   https://ab6dae-bb.myshopify.com/admin/pages

2. **Delete these pages** (they have science content):
   - Find and delete: "Terms of Service"
   - Find and delete: "Privacy Policy"
   - Find and delete: "Return & Exchange Policy"

3. **Update footer menu** to use `/policies/*` URLs (see Option 2)

4. **Set up policies:**
   https://ab6dae-bb.myshopify.com/admin/settings/legal

## Recommendation

**Use Option 1** - It's the cleanest approach:
- Keeps footer menu simple (CONTACT, WHOLESALE, FAQ)
- Legal links appear separately via the `legalLinks` block
- Automatically syncs with Shopify's policy system
- No risk of broken links

## Testing

After making changes:
1. Visit: https://strivesoda.com
2. Scroll to footer
3. Click each policy link
4. Verify they go to actual policies, not the science page

## Technical Details

- Footer configuration: `sections/group-footer.json`
- Legal links block is already configured (lines 75-84)
- Main footer menu: "footer" (line 25)
- The `legalLinks` block has `"legalMenu": ""` which means it uses Shopify's default policies
