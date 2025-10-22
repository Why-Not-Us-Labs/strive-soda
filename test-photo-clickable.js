const { chromium } = require('playwright');

async function testPhotoClickable() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🖼️  Testing Product Photo Gallery...\n');

  try {
    // Navigate to product page
    console.log('📍 Navigating to product page...');
    await page.goto('http://127.0.0.1:9292/products/strive-soda-peach', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);
    console.log('✅ Product page loaded\n');

    // Check if images have imgzoomer class (clickable)
    console.log('🔍 Checking if images are clickable...');
    const clickableImages = await page.locator('a.imgzoomer').count();
    console.log(`${clickableImages > 0 ? '✅' : '❌'} Found ${clickableImages} clickable product images`);

    if (clickableImages > 0) {
      // Check first image has proper lightbox attributes
      const firstImage = page.locator('a.imgzoomer').first();
      const hasWidth = await firstImage.getAttribute('data-pswp-width');
      const hasHeight = await firstImage.getAttribute('data-pswp-height');
      const href = await firstImage.getAttribute('href');

      console.log(`  - Has PhotoSwipe width: ${hasWidth ? '✅' : '❌'}`);
      console.log(`  - Has PhotoSwipe height: ${hasHeight ? '✅' : '❌'}`);
      console.log(`  - Has full-size image URL: ${href ? '✅' : '❌'}`);

      // Click the first image to test lightbox
      console.log('\n📸 Clicking first image to test lightbox...');
      await firstImage.click();
      await page.waitForTimeout(1000);

      // Check if lightbox/modal opened
      const lightboxOpen = await page.locator('.pswp, [class*="lightbox"], [class*="modal"]').count();
      console.log(`${lightboxOpen > 0 ? '✅' : '❌'} Lightbox opened: ${lightboxOpen > 0 ? 'Yes' : 'No'}`);

      // Take screenshot
      await page.screenshot({ path: 'product-photo-gallery-test.png', fullPage: false });
      console.log('\n📸 Screenshot saved: product-photo-gallery-test.png');

      // Keep browser open for manual verification
      console.log('\n👀 Browser will stay open for 20 seconds for manual verification...');
      await page.waitForTimeout(20000);
    }

    console.log('\n✅ Test complete!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

testPhotoClickable();
