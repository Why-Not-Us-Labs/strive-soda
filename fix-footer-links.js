#!/usr/bin/env node

// This script will help identify the footer menu and show its current links
// Run with: node fix-footer-links.js

const { execSync } = require('child_process');

console.log('Checking footer menu configuration...\n');

try {
  // Get the footer menu using Shopify CLI
  const result = execSync('shopify theme info --theme=182679339300 --json', { encoding: 'utf-8' });
  console.log('Theme info:', result);
} catch (error) {
  console.error('Error:', error.message);
  console.log('\nTo fix the footer links manually:');
  console.log('1. Go to: https://ab6dae-bb.myshopify.com/admin/menus');
  console.log('2. Find the "footer" menu');
  console.log('3. Update these links:');
  console.log('   - Terms of Service → /pages/privacy-policy or /policies/terms-of-service');
  console.log('   - Privacy Policy → /pages/privacy-policy');
  console.log('   - Return & Exchange Policy → /policies/refund-policy');
  console.log('\nOR add a legal links block to the footer via theme editor.');
}
