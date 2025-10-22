const { chromium } = require('playwright');

async function checkCurrentUI() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log('🔍 Checking current product page UI...\n');

  // Set viewport to desktop
  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    await page.goto('http://127.0.0.1:9292/products/strive-soda-peach', {
      waitUntil: 'networkidle',
      timeout: 60000
    });

    // Wait a bit for everything to load
    await page.waitForTimeout(2000);

    // Take full page screenshot
    await page.screenshot({
      path: 'product-page-current.png',
      fullPage: true
    });

    console.log('✅ Full page screenshot saved: product-page-current.png');

    // Take screenshot of fold 1 (hero)
    await page.screenshot({
      path: 'fold-1-hero.png',
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });

    console.log('✅ Fold 1 (Hero) screenshot saved: fold-1-hero.png');

    // Scroll to fold 2
    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(500);

    await page.screenshot({
      path: 'fold-2-tagline.png',
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });

    console.log('✅ Fold 2 (Tagline) screenshot saved: fold-2-tagline.png');

    // Scroll to fold 3
    await page.evaluate(() => window.scrollTo(0, 1400));
    await page.waitForTimeout(500);

    await page.screenshot({
      path: 'fold-3-benefits.png',
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });

    console.log('✅ Fold 3 (Benefits) screenshot saved: fold-3-benefits.png');

    console.log('\n✅ All screenshots captured successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  await browser.close();
}

checkCurrentUI();
