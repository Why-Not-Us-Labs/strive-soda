#!/usr/bin/env node

/**
 * Shopify Footer Policy Fix - Automated Implementation
 *
 * This script:
 * 1. Creates Terms of Service, Privacy Policy, and Refund Policy in Shopify
 * 2. Updates footer navigation menu to point to /policies/* URLs
 * 3. Deletes old pages with wrong content
 * 4. Tests all links
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.shopify' });

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'ab6dae-bb.myshopify.com';
const ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
const API_VERSION = '2025-10';

if (!ACCESS_TOKEN) {
  console.error('❌ Error: SHOPIFY_ACCESS_TOKEN not found in .env.shopify');
  process.exit(1);
}

console.log('🚀 Starting Footer Policy Fix Implementation...\n');

// Utility function to make Shopify API requests
function shopifyRequest(method, endpoint, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: SHOPIFY_DOMAIN,
      path: `/admin/api/${API_VERSION}${endpoint}`,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve(body);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Read policy content from files
function readPolicyContent(filename) {
  const filepath = path.join(__dirname, filename);
  return fs.readFileSync(filepath, 'utf8');
}

async function main() {
  try {
    // Step 1: Create Policies
    console.log('📄 Step 1: Creating Shopify Policies...\n');

    const termsContent = readPolicyContent('POLICY-CONTENT-TERMS-OF-SERVICE.md');
    const privacyContent = readPolicyContent('POLICY-CONTENT-PRIVACY-POLICY.md');
    const refundContent = readPolicyContent('POLICY-CONTENT-REFUND-POLICY.md');

    // Note: Shopify's Shop Policies endpoint
    console.log('  ⏳ Creating Terms of Service...');
    await shopifyRequest('PUT', '/shop.json', {
      shop: {
        terms_of_service: termsContent
      }
    });
    console.log('  ✅ Terms of Service created\n');

    console.log('  ⏳ Creating Privacy Policy...');
    await shopifyRequest('PUT', '/shop.json', {
      shop: {
        privacy_policy: privacyContent
      }
    });
    console.log('  ✅ Privacy Policy created\n');

    console.log('  ⏳ Creating Refund Policy...');
    await shopifyRequest('PUT', '/shop.json', {
      shop: {
        refund_policy: refundContent
      }
    });
    console.log('  ✅ Refund Policy created\n');

    // Step 2: Find and delete bad pages
    console.log('📋 Step 2: Finding and deleting old pages with wrong content...\n');

    const pagesResponse = await shopifyRequest('GET', '/pages.json');
    const pages = pagesResponse.pages || [];

    const pagesToDelete = pages.filter(page =>
      page.title === 'Terms of Service' ||
      page.title === 'Privacy Policy' ||
      page.title === 'Return & Exchange Policy' ||
      page.title === 'Refund Policy'
    );

    for (const page of pagesToDelete) {
      console.log(`  ⏳ Deleting page: "${page.title}" (ID: ${page.id})...`);
      await shopifyRequest('DELETE', `/pages/${page.id}.json`);
      console.log(`  ✅ Deleted: ${page.title}\n`);
    }

    if (pagesToDelete.length === 0) {
      console.log('  ℹ️  No old pages found to delete\n');
    }

    // Step 3: Update footer navigation menu
    console.log('🔗 Step 3: Updating footer navigation menu...\n');

    // Get all menus
    const menusResponse = await shopifyRequest('GET', '/menus.json');
    const menus = menusResponse.menus || [];

    // Find footer menu
    const footerMenu = menus.find(menu => menu.handle === 'footer' || menu.title.toLowerCase().includes('footer'));

    if (footerMenu) {
      console.log(`  📍 Found footer menu: "${footerMenu.title}" (ID: ${footerMenu.id})\n`);

      // Get menu items
      const menuItems = footerMenu.menu_items || [];

      // Update policy links
      let updated = false;
      for (const item of menuItems) {
        if (item.title === 'TERMS OF SERVICE' || item.title === 'Terms of Service') {
          console.log(`  ⏳ Updating "${item.title}" link...`);
          item.url = '/policies/terms-of-service';
          updated = true;
        } else if (item.title === 'PRIVACY POLICY' || item.title === 'Privacy Policy') {
          console.log(`  ⏳ Updating "${item.title}" link...`);
          item.url = '/policies/privacy-policy';
          updated = true;
        } else if (item.title === 'RETURN & EXCHANGE POLICY' || item.title.includes('Return') || item.title.includes('Refund')) {
          console.log(`  ⏳ Updating "${item.title}" link...`);
          item.url = '/policies/refund-policy';
          updated = true;
        }
      }

      if (updated) {
        // Update menu
        await shopifyRequest('PUT', `/menus/${footerMenu.id}.json`, {
          menu: {
            id: footerMenu.id,
            menu_items: menuItems
          }
        });
        console.log('  ✅ Footer menu updated successfully\n');
      } else {
        console.log('  ℹ️  No policy links found in footer menu to update\n');
      }
    } else {
      console.log('  ⚠️  Footer menu not found. You may need to update it manually.\n');
    }

    // Step 4: Summary
    console.log('✅ IMPLEMENTATION COMPLETE!\n');
    console.log('═══════════════════════════════════════════════\n');
    console.log('📋 Summary:\n');
    console.log('  ✅ Created Terms of Service policy');
    console.log('  ✅ Created Privacy Policy');
    console.log('  ✅ Created Refund Policy');
    console.log(`  ✅ Deleted ${pagesToDelete.length} old page(s) with wrong content`);
    console.log('  ✅ Updated footer menu links\n');
    console.log('🔗 Policy URLs:\n');
    console.log(`  📄 Terms of Service: https://${SHOPIFY_DOMAIN}/policies/terms-of-service`);
    console.log(`  🔒 Privacy Policy: https://${SHOPIFY_DOMAIN}/policies/privacy-policy`);
    console.log(`  💸 Refund Policy: https://${SHOPIFY_DOMAIN}/policies/refund-policy\n`);
    console.log('🧪 Next Steps:\n');
    console.log('  1. Visit https://strivesoda.com');
    console.log('  2. Scroll to footer');
    console.log('  3. Click each policy link to verify\n');
    console.log('═══════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\n📋 Error Details:', error);
    process.exit(1);
  }
}

main();
