const { chromium } = require('playwright');

async function testResponsiveCarousel() {
  const browser = await chromium.launch({ headless: false });

  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1440, height: 900 }
  ];

  console.log('📱 Testing Responsive Image Carousel...\n');

  for (const viewport of viewports) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📐 ${viewport.name} (${viewport.width}x${viewport.height})`);
    console.log('='.repeat(60));

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height }
    });
    const page = await context.newPage();

    try {
      // Navigate to product page
      await page.goto('http://127.0.0.1:9292/products/strive-soda-peach', {
        waitUntil: 'load',
        timeout: 60000
      });
      await page.waitForTimeout(3000);

      // Check main slider
      const mainSlider = await page.locator('[id^="Slider-Gallery"]').count();
      console.log(`✅ Main Image Slider: ${mainSlider > 0 ? 'Found' : 'Missing'}`);

      // Check thumbnails
      const thumbnails = await page.locator('.thumbnail-list').count();
      console.log(`✅ Thumbnail Carousel: ${thumbnails > 0 ? 'Found' : 'Missing'}`);

      // Check for image count
      const imageCount = await page.locator('.slider__slide').count();
      console.log(`📸 Total Images: ${imageCount}`);

      // Check for overlapping by measuring layout
      const productMedia = await page.locator('.bullet-product-media').boundingBox();
      const productContent = await page.locator('.bullet-product-content').boundingBox();

      if (productMedia && productContent) {
        const overlapping = (
          productMedia.x < productContent.x + productContent.width &&
          productMedia.x + productMedia.width > productContent.x &&
          productMedia.y < productContent.y + productContent.height &&
          productMedia.y + productMedia.height > productContent.y
        );
        console.log(`📏 Layout Check: ${overlapping ? '❌ Elements Overlapping' : '✅ No Overlapping'}`);
      }

      // Check if custom sections are visible
      const customSections = {
        'Tagline': '.strive-tagline',
        'Benefits': '.strive-benefits',
        'Honey': '.strive-honey',
        'No Synthetic': '.strive-no-synthetic'
      };

      let allVisible = true;
      for (const [name, selector] of Object.entries(customSections)) {
        const visible = await page.locator(selector).isVisible();
        if (!visible) allVisible = false;
      }
      console.log(`✨ Custom Sections: ${allVisible ? '✅ All Visible' : '⚠️ Some Hidden'}`);

      // Take screenshot
      const filename = `carousel-${viewport.name.toLowerCase()}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`📸 Screenshot: ${filename}`);

    } catch (error) {
      console.error(`❌ Error on ${viewport.name}:`, error.message);
    } finally {
      await context.close();
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('✅ Responsive Testing Complete!');
  console.log('='.repeat(60) + '\n');

  await browser.close();
}

testResponsiveCarousel();
