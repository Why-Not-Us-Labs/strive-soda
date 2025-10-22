const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('http://127.0.0.1:9292/');

  // Check what's on top of the nav links
  const overlayCheck = await page.evaluate(() => {
    const links = document.querySelectorAll('.menulink.large-only nav a.no-style');
    const results = [];

    links.forEach((link, index) => {
      const rect = link.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const elementAtPoint = document.elementFromPoint(centerX, centerY);
      const isLinkItself = elementAtPoint === link || link.contains(elementAtPoint);

      results.push({
        linkText: link.textContent.trim(),
        linkRect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        centerPoint: { x: centerX, y: centerY },
        elementAtCenter: {
          tag: elementAtPoint?.tagName,
          className: elementAtPoint?.className,
          id: elementAtPoint?.id,
          isTheLink: isLinkItself
        },
        linkStyles: {
          position: window.getComputedStyle(link).position,
          zIndex: window.getComputedStyle(link).zIndex,
          transform: window.getComputedStyle(link).transform
        }
      });
    });

    return results;
  });

  console.log('\n=== Overlay Detection Test ===\n');
  overlayCheck.forEach(result => {
    console.log(`Link: ${result.linkText}`);
    console.log(`  Position: x=${result.linkRect.x.toFixed(0)}, y=${result.linkRect.y.toFixed(0)}`);
    console.log(`  Element at center:`, result.elementAtCenter);
    console.log(`  Is link clickable: ${result.elementAtCenter.isTheLink ? 'YES' : 'NO - BLOCKED!'}`);
    console.log(`  Link styles:`, result.linkStyles);
    console.log('');
  });

  await browser.close();
})();
