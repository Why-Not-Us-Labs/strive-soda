const { chromium } = require('playwright');

async function inspectSubscribeWidget() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🔍 Inspecting Subscribe & Save Widget...\n');

  try {
    // Navigate directly to product page
    console.log('📍 Navigating to product page...');
    await page.goto('http://127.0.0.1:9292/products/strive-soda-peach', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000); // Wait for widgets to load

    // Check for radio buttons
    console.log('\n🔍 Looking for radio buttons...');
    const radioButtons = await page.$$('input[type="radio"]');
    console.log(`Found ${radioButtons.length} radio buttons`);

    for (let i = 0; i < radioButtons.length; i++) {
      const radio = radioButtons[i];
      const id = await radio.getAttribute('id');
      const name = await radio.getAttribute('name');
      const value = await radio.getAttribute('value');
      const checked = await radio.isChecked();
      console.log(`  ${i + 1}. ID: ${id}, Name: ${name}, Value: ${value}, Checked: ${checked}`);
    }

    // Check for elements with 'appstle' in class or id
    console.log('\n🔍 Looking for Appstle elements...');
    const appstleElements = await page.locator('[class*="appstle"], [id*="appstle"]').count();
    console.log(`Found ${appstleElements} elements with 'appstle' in class or id`);

    // Get all elements with 'subscribe' in their attributes
    console.log('\n🔍 Looking for elements with "subscribe"...');
    const subscribeElements = await page.locator('[class*="subscribe"], [id*="subscribe"], [data-*="subscribe"]').count();
    console.log(`Found ${subscribeElements} elements with 'subscribe' in attributes`);

    // Get the HTML of the purchase type section
    console.log('\n🔍 Getting PURCHASE TYPE section HTML...');
    const purchaseTypeHTML = await page.locator('text=PURCHASE TYPE').locator('..').innerHTML().catch(() => null);
    if (purchaseTypeHTML) {
      console.log('Purchase type section HTML (first 500 chars):');
      console.log(purchaseTypeHTML.substring(0, 500));
    }

    // Check console for my script's log message
    await page.waitForTimeout(2000);

    console.log('\n✅ Inspection complete!');
    console.log('Browser will stay open for 30 seconds for manual inspection...');
    await page.waitForTimeout(30000);

  } catch (error) {
    console.error('❌ Inspection failed:', error.message);
  } finally {
    await browser.close();
  }
}

inspectSubscribeWidget();
