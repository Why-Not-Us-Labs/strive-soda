const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  console.log('Loading homepage...');
  await page.goto('http://127.0.0.1:9292/');
  console.log('Page loaded');

  // Check desktop navigation
  const navLinks = await page.$$eval('.menulink.large-only nav a.no-style', links =>
    links.map(link => ({
      text: link.textContent.trim(),
      href: link.getAttribute('href'),
      visible: link.offsetParent !== null,
      pointerEvents: window.getComputedStyle(link).pointerEvents,
      display: window.getComputedStyle(link).display
    }))
  );

  console.log('\n=== Desktop Navigation Links ===');
  navLinks.forEach(link => {
    console.log(`\n${link.text}`);
    console.log(`  URL: ${link.href}`);
    console.log(`  Visible: ${link.visible}`);
    console.log(`  Pointer Events: ${link.pointerEvents}`);
    console.log(`  Display: ${link.display}`);
  });

  await browser.close();
  console.log('\nTest complete!');
})();
