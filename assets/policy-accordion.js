/**
 * Policy Pages Accordion Enhancement
 * Converts policy page sections into collapsible accordions for better UX
 * Similar to FAQ page functionality - makes long policy pages more digestible
 */

(function() {
  'use strict';

  // Only run on policy pages
  if (!document.querySelector('.shopify-policy__body')) {
    return;
  }

  let accordionsInitialized = false;

  function initPolicyAccordions() {
    // Prevent double initialization
    if (accordionsInitialized) return;
    
    const policyBody = document.querySelector('.shopify-policy__body');
    if (!policyBody) return;

    const rte = policyBody.querySelector('.rte');
    if (!rte) return;

    // Check if already converted
    if (rte.querySelector('.policy-accordion-section')) {
      accordionsInitialized = true;
      return;
    }

    // Find all h2 and h3 headings to create accordion sections (skip h1 as it's usually the intro)
    const headings = Array.from(rte.querySelectorAll('h2, h3')).filter(h => {
      // Skip headings that are already inside accordions or special sections
      return !h.closest('details') && !h.closest('.policy-accordion-section');
    });
    
    if (headings.length === 0) {
      accordionsInitialized = true;
      return;
    }

    // Create accordion structure for each heading
    headings.forEach((heading, index) => {
      // Find all content until next heading of same or higher level
      const headingLevel = parseInt(heading.tagName.charAt(1));
      let content = [];
      let nextElement = heading.nextElementSibling;
      
      while (nextElement) {
        // Stop at next heading of same or higher level
        if (nextElement.tagName.match(/^H[1-6]$/)) {
          const nextLevel = parseInt(nextElement.tagName.charAt(1));
          if (nextLevel <= headingLevel) break;
        }
        
        // Skip if already in an accordion
        if (nextElement.closest('.policy-accordion-section')) {
          nextElement = nextElement.nextElementSibling;
          continue;
        }
        
        content.push(nextElement);
        nextElement = nextElement.nextElementSibling;
      }

      // Only create accordion if there's meaningful content
      if (content.length === 0) return;

      // Create details element
      const details = document.createElement('details');
      details.className = 'policy-accordion-section';
      
      // Create summary from heading
      const summary = document.createElement('summary');
      summary.className = 'policy-accordion-title';
      
      // Preserve heading content (including any HTML inside)
      summary.innerHTML = heading.innerHTML;
      
      // Create content wrapper
      const contentDiv = document.createElement('div');
      contentDiv.className = 'policy-accordion-content';
      
      // Move content into wrapper
      content.forEach(el => {
        // Clone to avoid moving if element is used elsewhere
        const clone = el.cloneNode(true);
        contentDiv.appendChild(clone);
        el.remove();
      });
      
      // Assemble accordion
      details.appendChild(summary);
      details.appendChild(contentDiv);
      
      // Replace heading with accordion
      heading.replaceWith(details);
      
      // Keep first section open by default for better UX
      if (index === 0) {
        details.setAttribute('open', '');
      }
    });

    accordionsInitialized = true;
  }

  // Initialize on page load
  function tryInit() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPolicyAccordions);
    } else {
      // Small delay to ensure content is fully rendered
      setTimeout(initPolicyAccordions, 100);
    }
  }

  tryInit();

  // Re-initialize if content is dynamically loaded (Shopify section updates)
  if (typeof document.addEventListener !== 'undefined') {
    document.addEventListener('shopify:section:load', function() {
      accordionsInitialized = false;
      setTimeout(initPolicyAccordions, 200);
    });
  }
})();

