// Test navigation links on homepage
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:9292/');

  // Check desktop navigation
  const desktopNav = await page.evaluate(() => {
    const nav = document.querySelector('.menulink.large-only nav');
    if (!nav) return 'Desktop nav not found';

    const links = Array.from(nav.querySelectorAll('a.no-style'));
    return links.map(link => ({
      text: link.textContent.trim(),
      href: link.getAttribute('href'),
      clickable: link.offsetParent !== null,
      styles: {
        pointerEvents: window.getComputedStyle(link).pointerEvents,
        display: window.getComputedStyle(link).display,
        zIndex: window.getComputedStyle(link).zIndex
      }
    }));
  });

  // Check mobile navigation
  const mobileNav = await page.evaluate(() => {
    const nav = document.querySelector('#mobmenu nav');
    if (!nav) return 'Mobile nav not found';

    const links = Array.from(nav.querySelectorAll('a.no-style'));
    return links.map(link => ({
      text: link.textContent.trim(),
      href: link.getAttribute('href')
    }));
  });

  console.log('DESKTOP NAVIGATION:', JSON.stringify(desktopNav, null, 2));
  console.log('\nMOBILE NAVIGATION:', JSON.stringify(mobileNav, null, 2));

  await browser.close();
})();
