# Getting the Correct Shopify Admin API Access Token

## Issue

The API Secret Key you provided (`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`) is **not** the Access Token. We need the **Admin API access token** instead.

## How to Get the Access Token

### Step 1: Go to Your Custom App

**URL:**
```
https://ab6dae-bb.myshopify.com/admin/settings/apps/development
```

### Step 2: Click on the App

Click on **"Claude Code - Footer Policy Fix"** (the app you just created)

### Step 3: Find the Admin API Access Token Section

Scroll down to the section labeled **"Admin API access token"**

### Step 4: Reveal and Copy the Token

1. Click **"Reveal token once"** button
2. **Copy the entire token** (it starts with `shpat_...`)
3. **Send me this token**

---

## What You Sent vs What I Need

### ❌ What You Sent (Not Usable)

```
API Key = cb2cb155cc37636a98ac7b8e469b915f
API Secret Key = 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
```

These are the app credentials, but they're not the access token.

### ✅ What I Need

```
Admin API Access Token = shpat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

This is the actual token that starts with `shpat_` and is shown only once when you click "Reveal token once".

---

## Quick Visual Guide

1. **Apps & Sales Channels** → **Develop apps**
2. Click on **"Claude Code - Footer Policy Fix"**
3. Scroll to **"Admin API access token"**
4. Click **"Reveal token once"**
5. **Copy the token that appears** (starts with `shpat_`)
6. **Send it to me**

---

## Alternative: Create a New App

If you already revealed the token and didn't save it, you'll need to:

1. Delete the current app
2. Create a new one following the same steps
3. This time, copy the access token immediately when revealed

---

Once you send me the `shpat_...` token, I can:
- Create all 3 policies
- Update footer menu
- Delete bad pages
- Complete the entire fix in 2-3 minutes

Let me know when you have the access token! 🔑
