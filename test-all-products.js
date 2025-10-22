const { chromium } = require('playwright');

async function testAllProducts() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 Testing All Product Pages...\n');

  const products = [
    { name: 'Peach Perfect', url: 'http://127.0.0.1:9292/products/strive-soda-peach' },
    { name: 'Tropical Recharge', url: 'http://127.0.0.1:9292/products/strive-soda-tropical' },
    { name: 'Variety Pack', url: 'http://127.0.0.1:9292/products/variety-pack' }
  ];

  try {
    for (const product of products) {
      console.log(`\n${'='.repeat(50)}`);
      console.log(`📦 Testing: ${product.name}`);
      console.log('='.repeat(50));

      await page.goto(product.url, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(2000);

      // Check for custom sections
      console.log('\n✅ Custom Sections:');
      const sections = {
        'Hero Image': '.strive-hero-image',
        'Built for those who strive': '.strive-tagline',
        'Key Benefits': '.strive-benefits',
        'Why Organic Honey': '.strive-honey',
        'Why Not Synthetic Sugars': '.strive-no-synthetic',
        'Learn More CTA': '.strive-learn-more'
      };

      for (const [name, selector] of Object.entries(sections)) {
        const count = await page.locator(selector).count();
        console.log(`   ${count > 0 ? '✅' : '❌'} ${name}`);
      }

      // Get product-specific tagline text
      console.log('\n📝 Product-Specific Copy:');
      const taglineText = await page.locator('.strive-tagline p').first().textContent();
      console.log(`   "${taglineText.substring(0, 80)}..."`);

      // Check Subscribe & Save - find the radio with a non-empty value
      const allSellingPlanRadios = await page.locator('input[name="selling_plan"]').all();
      let subscribeChecked = false;
      for (const radio of allSellingPlanRadios) {
        const value = await radio.getAttribute('value');
        if (value && value !== '') {
          subscribeChecked = await radio.isChecked();
          break;
        }
      }
      console.log(`\n💳 Subscribe & Save: ${subscribeChecked ? '✅ Selected by default' : '❌ Not selected'}`);

      // Check reviews
      const reviewsCount = await page.locator('[id*="judge"]').count();
      console.log(`⭐ Reviews Widget: ${reviewsCount > 0 ? '✅ Found' : '❌ Missing'}`);

      // Take screenshot
      const filename = `product-${product.name.toLowerCase().replace(' ', '-')}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`📸 Screenshot: ${filename}`);
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log('✅ All Product Tests Complete!');
    console.log('='.repeat(50));

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testAllProducts();
