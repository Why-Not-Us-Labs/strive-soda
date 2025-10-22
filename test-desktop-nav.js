const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  await page.goto('http://127.0.0.1:9292/');
  await page.waitForLoadState('networkidle');

  console.log('\n=== DESKTOP NAVIGATION TEST ===\n');

  // Check if desktop nav is visible
  const desktopNav = await page.locator('.menulink.large-only nav');
  const isVisible = await desktopNav.isVisible();
  console.log(`Desktop nav visible: ${isVisible}`);

  // Get all navigation links
  const navLinks = await page.locator('.menulink.large-only nav a.no-style').all();
  console.log(`Found ${navLinks.length} navigation links\n`);

  // Test each link
  for (const link of navLinks) {
    const text = await link.textContent();
    const href = await link.getAttribute('href');
    const isClickable = await link.isVisible();

    // Get computed styles
    const styles = await link.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        display: computed.display,
        visibility: computed.visibility,
        pointerEvents: computed.pointerEvents,
        opacity: computed.opacity,
        zIndex: computed.zIndex,
        position: computed.position
      };
    });

    // Check if anything is covering it
    const boundingBox = await link.boundingBox();
    let coveringElement = null;
    if (boundingBox) {
      const elementAtPoint = await page.evaluate(([x, y]) => {
        const el = document.elementFromPoint(x, y);
        return el ? el.tagName + (el.className ? '.' + el.className : '') : null;
      }, [boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2]);
      coveringElement = elementAtPoint;
    }

    console.log(`Link: "${text?.trim()}"`);
    console.log(`  href: ${href}`);
    console.log(`  visible: ${isClickable}`);
    console.log(`  styles:`, styles);
    console.log(`  element at center: ${coveringElement}`);
    console.log(`  bounding box:`, boundingBox);
    console.log('');
  }

  // Try clicking the first link
  if (navLinks.length > 0) {
    console.log('Attempting to click "SHOP" link...');
    try {
      const shopLink = await page.locator('.menulink.large-only nav a.no-style:has-text("SHOP")');
      await shopLink.click({ timeout: 5000 });
      await page.waitForLoadState('networkidle');
      console.log(`Successfully navigated to: ${page.url()}`);
    } catch (error) {
      console.log(`Error clicking: ${error.message}`);
    }
  }

  await page.waitForTimeout(2000);
  await browser.close();
})();
