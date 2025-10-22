/**
 * Playwright Test: Homepage Brand Hierarchy - BEFORE State
 *
 * This test documents the current "What is Hydration Soda?" section
 * BEFORE we implement the new 1-2-3 brand hierarchy.
 *
 * Current Problem:
 * - Section focuses on ELECTROLYTES (Sodium/Potassium/Magnesium)
 * - Does NOT follow Chris Clark's 1-2-3 hierarchy:
 *   1. It's a SODA (category first)
 *   2. Better-for-you = HYDRATION (benefit)
 *   3. Sweetened with ORGANIC HONEY (proof/differentiator)
 *
 * Run: npx playwright test test-homepage-hierarchy-before.js --headed
 */

const { test, expect } = require('@playwright/test');

test.describe('Homepage Brand Hierarchy - BEFORE (Current State)', () => {

  test('should display current "What is Hydration Soda?" section', async ({ page }) => {
    // Navigate to homepage
    await page.goto('http://127.0.0.1:9292/', { waitUntil: 'networkidle' });

    // Wait for section to load
    await page.waitForSelector('.why-strive-section', { timeout: 10000 });

    // Take screenshot of current section
    const section = page.locator('.why-strive-section');
    await section.screenshot({
      path: 'docs/fixes/homepage-hierarchy-before-desktop.png',
      fullPage: false
    });

    console.log('✅ Desktop screenshot saved');

    // Verify current heading
    const heading = await page.locator('.why-strive-heading').textContent();
    console.log('Current heading:', heading);
    expect(heading).toContain('What is Hydration Soda?');

    // Verify electrolyte boxes exist (current implementation)
    const sodiumBox = page.locator('.electrolyte-box.sodium');
    const potassiumBox = page.locator('.electrolyte-box.potassium');
    const magnesiumBox = page.locator('.electrolyte-box.magnesium');

    await expect(sodiumBox).toBeVisible();
    await expect(potassiumBox).toBeVisible();
    await expect(magnesiumBox).toBeVisible();

    console.log('✅ Current electrolyte boxes visible');

    // Verify this does NOT follow the 1-2-3 hierarchy
    const sodiumTitle = await page.locator('.electrolyte-box.sodium .electrolyte-title').textContent();
    console.log('Box 1 title:', sodiumTitle);
    expect(sodiumTitle).not.toContain('SODA'); // Should be "It's a Soda" but isn't

    console.log('❌ Current section does NOT follow 1-2-3 brand hierarchy');
  });

  test('should display current section on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('http://127.0.0.1:9292/', { waitUntil: 'networkidle' });
    await page.waitForSelector('.why-strive-section', { timeout: 10000 });

    // Take mobile screenshot
    const section = page.locator('.why-strive-section');
    await section.screenshot({
      path: 'docs/fixes/homepage-hierarchy-before-mobile.png',
      fullPage: false
    });

    console.log('✅ Mobile screenshot saved');
  });

  test('should hover electrolyte boxes and show images', async ({ page }) => {
    await page.goto('http://127.0.0.1:9292/', { waitUntil: 'networkidle' });
    await page.waitForSelector('.why-strive-section', { timeout: 10000 });

    // Hover sodium box
    const sodiumBox = page.locator('.electrolyte-box.sodium');
    await sodiumBox.hover();
    await page.waitForTimeout(500); // Wait for hover animation

    // Take screenshot of hover state
    const section = page.locator('.why-strive-section');
    await section.screenshot({
      path: 'docs/fixes/homepage-hierarchy-before-hover.png',
      fullPage: false
    });

    console.log('✅ Hover state screenshot saved');
  });

});
