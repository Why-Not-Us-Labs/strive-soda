/**
 * Debug script to check navigation clickability
 * Tests z-index, pointer-events, and element overlays
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await page.newPage();
  await page.setViewport({ width: 1920, height: 1080 }); // Desktop size

  await page.goto('http://127.0.0.1:9292/', { waitUntil: 'networkidle2' });

  // Check navigation elements
  const navDebug = await page.evaluate(() => {
    const results = [];

    // Find all navigation links
    const navLinks = document.querySelectorAll('.menulink a.no-style');

    navLinks.forEach((link, index) => {
      const rect = link.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(link);

      // Get element at the center of the link
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const elementAtPoint = document.elementFromPoint(centerX, centerY);

      results.push({
        index,
        text: link.textContent.trim(),
        href: link.getAttribute('href'),
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        computedStyle: {
          pointerEvents: computedStyle.pointerEvents,
          zIndex: computedStyle.zIndex,
          position: computedStyle.position,
          display: computedStyle.display,
          visibility: computedStyle.visibility
        },
        elementAtCenter: {
          tagName: elementAtPoint?.tagName,
          className: elementAtPoint?.className,
          id: elementAtPoint?.id,
          isTheLink: elementAtPoint === link
        }
      });
    });

    // Check header z-index
    const header = document.querySelector('.main-header');
    const headerZIndex = header ? window.getComputedStyle(header).zIndex : 'not found';

    // Check if there's an overlay
    const overlays = Array.from(document.querySelectorAll('*')).filter(el => {
      const style = window.getComputedStyle(el);
      const zIndex = parseInt(style.zIndex);
      return !isNaN(zIndex) && zIndex > 99;
    }).map(el => ({
      tagName: el.tagName,
      className: el.className,
      id: el.id,
      zIndex: window.getComputedStyle(el).zIndex,
      rect: el.getBoundingClientRect()
    }));

    return {
      navLinks: results,
      headerZIndex,
      overlays
    };
  });

  console.log('=== NAVIGATION DEBUG ===\n');
  console.log('Header z-index:', navDebug.headerZIndex);
  console.log('\n=== Elements with z-index > 99 (potentially blocking) ===');
  console.log(JSON.stringify(navDebug.overlays, null, 2));

  console.log('\n=== Navigation Links ===');
  navDebug.navLinks.forEach(link => {
    console.log(`\n${link.text} (${link.href}):`);
    console.log('  Position:', link.rect);
    console.log('  Styles:', link.computedStyle);
    console.log('  Element at center:', link.elementAtCenter);
    if (!link.elementAtCenter.isTheLink) {
      console.log('  ⚠️  WARNING: Different element is blocking this link!');
    }
  });

  await browser.close();
})();
