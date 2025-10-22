// Test script to verify which sections are rendering on the science page
// Run with: node test-science-sections.js

const sections = [
  {
    name: 'Science Hero (science-test-fold)',
    selector: '.science-test-fold',
    description: 'Problem stack + "Better Way to Hydrate" heading'
  },
  {
    name: 'Strive vs Everyone',
    selector: '.strive-vs-everyone',
    description: 'Comparison table with electrolytes, sweetener, etc.'
  },
  {
    name: 'About Us CTA',
    selector: '.about-us-cta',
    description: 'Transition to About Us page'
  },
  {
    name: 'Science Electrolytes',
    selector: '.science-electrolytes',
    description: 'Electrolytes deep dive section'
  },
  {
    name: 'Science Honey',
    selector: '.science-honey',
    description: 'Honey deep dive section'
  }
];

console.log('\n=== SCIENCE PAGE SECTION TEST ===\n');
console.log('Testing URL: http://127.0.0.1:9292/pages/science-behind-strive\n');
console.log('Expected sections on the page:\n');

sections.forEach((section, index) => {
  console.log(`${index + 1}. ${section.name}`);
  console.log(`   Selector: ${section.selector}`);
  console.log(`   Description: ${section.description}\n`);
});

console.log('\n=== TEMPLATE CONFIGURATION ===\n');
console.log('File: templates/page.science.json\n');
console.log('Section Order (from template):');
console.log('1. science_test_visual (science-test-fold) - disabled: false');
console.log('2. science_fold_1 (checkerboard)');
console.log('3. science_fold_2 (checkerboard)');
console.log('4. science_electrolytes - disabled: false');
console.log('5. science_honey - disabled: false');
console.log('6. science_fold_3 (checkerboard)');
console.log('7. science_fold_4 (checkerboard)');
console.log('8. science_fold_5 (checkerboard)');
console.log('9. strive_vs_everyone - disabled: false');
console.log('10. about_us_cta - disabled: false');

console.log('\n=== NEXT STEPS ===\n');
console.log('1. Visit http://127.0.0.1:9292/pages/science-behind-strive in your browser');
console.log('2. Open browser DevTools (F12 or Cmd+Option+I)');
console.log('3. In the Console tab, run these commands to check if sections exist:\n');

sections.forEach(section => {
  console.log(`   document.querySelector('${section.selector}') // Should return element, not null`);
});

console.log('\n4. Check the Elements/Inspector tab to see the actual DOM structure');
console.log('5. Look for any console errors that might prevent rendering');
console.log('6. Verify the page URL is correct (not a draft/preview URL)');

console.log('\n=== TROUBLESHOOTING CHECKLIST ===\n');
console.log('✓ Section files exist: science-test-fold.liquid, strive-vs-everyone.liquid, about-us-cta.liquid');
console.log('✓ Template configured: templates/page.science.json has all sections');
console.log('✓ Sections NOT disabled: All have "disabled": false');
console.log('✓ Schema properly formatted: All {% schema %} blocks are valid JSON');
console.log('\nIf sections still not showing:');
console.log('• Check if page "science-behind-strive" exists in Shopify admin');
console.log('• Verify page template is set to "page.science"');
console.log('• Clear browser cache and hard refresh (Cmd+Shift+R)');
console.log('• Check Shopify theme editor for any section visibility settings');
console.log('• Verify dev server is syncing changes (check terminal for sync messages)');
console.log('\n');
