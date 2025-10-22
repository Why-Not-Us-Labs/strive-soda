const { chromium } = require('playwright');

async function testProductPages() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🚀 Starting Product Page Test...\n');

  try {
    // Navigate to homepage first
    console.log('📍 Navigating to homepage...');
    await page.goto('http://127.0.0.1:9292', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(2000); // Give it time to fully load
    console.log('✅ Homepage loaded\n');

    // Find and click shop link
    console.log('📍 Looking for shop link...');
    const shopLink = page.locator('a[href*="collections"]').first();
    await shopLink.click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    console.log('✅ Shop page loaded\n');

    // Get all product links
    const productLinks = await page.locator('a[href*="products"]').evaluateAll(links =>
      links.map(link => link.href).filter((href, index, self) =>
        href.includes('/products/') && self.indexOf(href) === index
      )
    );

    console.log(`📦 Found ${productLinks.length} product links:`);
    productLinks.forEach((link, i) => console.log(`   ${i + 1}. ${link}`));
    console.log('');

    // Test first product
    if (productLinks.length > 0) {
      const productUrl = productLinks[0];
      console.log(`📍 Testing product: ${productUrl}`);
      await page.goto(productUrl, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(2000);

      // Check for custom Strive sections
      console.log('\n🔍 Checking for custom sections...');

      const sections = {
        'Hero Image': '.strive-hero-image',
        'Built for those who strive': '.strive-tagline',
        'Key Benefits': '.strive-benefits',
        'Why Organic Honey': '.strive-honey',
        'Why Not Synthetic Sugars': '.strive-no-synthetic',
        'Learn More CTA': '.strive-learn-more'
      };

      for (const [name, selector] of Object.entries(sections)) {
        const element = await page.locator(selector).count();
        const status = element > 0 ? '✅' : '❌';
        console.log(`${status} ${name}: ${element > 0 ? 'Found' : 'Missing'}`);
      }

      // Check product photos are clickable
      console.log('\n🔍 Checking product photos...');
      const mediaItems = await page.locator('.product-page .bullet-product-media img').count();
      console.log(`📸 Found ${mediaItems} product images`);

      // Check for subscribe & save
      console.log('\n🔍 Checking Subscribe & Save...');
      const subscribeWidget = await page.locator('[id*="appstle"]').count();
      console.log(`${subscribeWidget > 0 ? '✅' : '❌'} Subscribe widget: ${subscribeWidget > 0 ? 'Found' : 'Missing'}`);

      // Check reviews
      console.log('\n🔍 Checking Reviews...');
      const reviewsWidget = await page.locator('[id*="judge"]').count();
      console.log(`${reviewsWidget > 0 ? '✅' : '❌'} Reviews widget: ${reviewsWidget > 0 ? 'Found' : 'Missing'}`);

      // Take screenshot
      await page.screenshot({ path: 'product-page-test.png', fullPage: true });
      console.log('\n📸 Screenshot saved: product-page-test.png');
    }

    console.log('\n✅ Test complete!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testProductPages();
