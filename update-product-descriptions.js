/**
 * Update Product Descriptions in Shopify
 * Run with: node update-product-descriptions.js
 */

const https = require('https');

// Product descriptions
const descriptions = {
  'tropical-recharge-variety-12-pack': `BUILT FOR THOSE WHO STRIVE

Tropical Recharge is your escape to paradise in every sip. Bold passion fruit meets smooth coconut, perfectly powered by organic wildflower honey. This isn't just hydration—it's a tropical getaway that fuels your day with 180mg of essential electrolytes.

When to drink:
Pre-workout fuel • Mid-day recharge • Post-adventure refreshment • Anytime you need to reset

Whether you're powering through a workout, recovering from a long day, or just reaching for something better, Strive soda makes hydration taste as good as it feels.`,

  'strive-soda-peach-12-pack': `BUILT FOR THOSE WHO STRIVE

Peach Perfect is a little slice of paradise. Juicy summer peach, lemon coconut, perfectly powered by honey. Nobody's perfect, but nobody said a soda couldn't be. Reach for Peach Perfect when you need a refreshing pick-me-up that tastes like sunshine in a can.

When to drink:
Mid-afternoon energy boost • Post-workout refreshment • Weekend brunch companion • Poolside perfection

Whether you're powering through a workout, recovering from a long day, or just reaching for something better, Strive soda makes hydration taste as good as it feels.`,

  'variety-pack': `BUILT FOR THOSE WHO STRIVE

Can't decide? Don't. Our Variety Pack brings together the best of both worlds—Tropical Recharge and Peach Perfect—so you can switch up your hydration game based on your mood. Each can delivers 180mg of essential electrolytes and the clean sweetness of 100% organic wildflower honey.

When to drink:
Perfect for trying both flavors • Stock your fridge for any occasion • Gift for the hydration-conscious • Never get bored of your beverage

Whether you're powering through a workout, recovering from a long day, or just reaching for something better, Strive soda makes hydration taste as good as it feels.`
};

console.log('Product descriptions ready to update:');
console.log('\n=== TROPICAL RECHARGE ===');
console.log(descriptions['tropical-recharge-variety-12-pack']);
console.log('\n=== PEACH PERFECT ===');
console.log(descriptions['strive-soda-peach-12-pack']);
console.log('\n=== VARIETY PACK ===');
console.log(descriptions['variety-pack']);
console.log('\n\nTo update these in Shopify, you need to:');
console.log('1. Go to each product page URL:');
console.log('   - http://127.0.0.1:9292/products/tropical-recharge-variety-12-pack');
console.log('   - http://127.0.0.1:9292/products/strive-soda-peach-12-pack');
console.log('   - http://127.0.0.1:9292/products/variety-pack (need to verify handle)');
console.log('2. Copy the descriptions above');
console.log('3. Update via Shopify Admin → Products → [Product Name] → Description');
