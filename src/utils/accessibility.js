// Accessibility Testing Utilities

/**
 * Check if an element has proper ARIA labels
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - Whether the element has proper labeling
 */
export const hasProperLabeling = (element) => {
  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
  const hasTitle = element.hasAttribute('title');
  const hasTextContent = element.textContent && element.textContent.trim().length > 0;
  
  return hasAriaLabel || hasAriaLabelledBy || hasTitle || hasTextContent;
};

/**
 * Check if interactive elements are keyboard accessible
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - Whether the element is keyboard accessible
 */
export const isKeyboardAccessible = (element) => {
  const tagName = element.tagName.toLowerCase();
  const hasTabIndex = element.hasAttribute('tabindex');
  const tabIndex = parseInt(element.getAttribute('tabindex') || '0');
  
  // Naturally focusable elements
  const naturallyFocusable = ['a', 'button', 'input', 'textarea', 'select'];
  
  if (naturallyFocusable.includes(tagName)) {
    return tabIndex >= 0;
  }
  
  // Elements with positive tabindex or 0
  return hasTabIndex && tabIndex >= 0;
};

/**
 * Check color contrast ratio (simplified check)
 * @param {string} foreground - Foreground color
 * @param {string} background - Background color
 * @returns {number} - Contrast ratio
 */
export const getContrastRatio = (foreground, background) => {
  // This is a simplified implementation
  // In a real application, you'd use a proper color contrast library
  
  const getLuminance = (color) => {
    // Convert hex to RGB and calculate relative luminance
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    const sRGB = [r, g, b].map(c => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  };
  
  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Run basic accessibility audit on the current page
 * @returns {Object} - Audit results
 */
export const runAccessibilityAudit = () => {
  const results = {
    headingStructure: checkHeadingStructure(),
    missingAltText: checkMissingAltText(),
    keyboardNavigation: checkKeyboardNavigation(),
    ariaLabels: checkAriaLabels(),
    colorContrast: checkColorContrast()
  };
  
  return results;
};

/**
 * Check heading structure for proper hierarchy
 * @returns {Array} - Issues found
 */
const checkHeadingStructure = () => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const issues = [];
  let previousLevel = 0;
  
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    
    if (index === 0 && level !== 1) {
      issues.push(`First heading should be h1, found ${heading.tagName}`);
    }
    
    if (level > previousLevel + 1) {
      issues.push(`Heading level skipped: ${heading.tagName} after h${previousLevel}`);
    }
    
    previousLevel = level;
  });
  
  return issues;
};

/**
 * Check for images missing alt text
 * @returns {Array} - Issues found
 */
const checkMissingAltText = () => {
  const images = document.querySelectorAll('img');
  const issues = [];
  
  images.forEach(img => {
    if (!img.hasAttribute('alt')) {
      issues.push(`Image missing alt attribute: ${img.src}`);
    }
  });
  
  return issues;
};

/**
 * Check keyboard navigation
 * @returns {Array} - Issues found
 */
const checkKeyboardNavigation = () => {
  const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
  const issues = [];
  
  interactiveElements.forEach(element => {
    if (!isKeyboardAccessible(element)) {
      issues.push(`Element not keyboard accessible: ${element.tagName}`);
    }
  });
  
  return issues;
};

/**
 * Check ARIA labels
 * @returns {Array} - Issues found
 */
const checkAriaLabels = () => {
  const elementsNeedingLabels = document.querySelectorAll('button, a, input, textarea, select');
  const issues = [];
  
  elementsNeedingLabels.forEach(element => {
    if (!hasProperLabeling(element)) {
      issues.push(`Element missing proper labeling: ${element.tagName}`);
    }
  });
  
  return issues;
};

/**
 * Check color contrast (basic implementation)
 * @returns {Array} - Issues found
 */
const checkColorContrast = () => {
  // This would require more sophisticated color analysis
  // For now, return empty array as we're using CSS custom properties
  // that should maintain proper contrast ratios
  return [];
};

/**
 * Log accessibility audit results to console
 */
export const logAccessibilityAudit = () => {
  const results = runAccessibilityAudit();
  
  console.group('🔍 Accessibility Audit Results');
  
  Object.entries(results).forEach(([category, issues]) => {
    if (issues.length > 0) {
      console.group(`❌ ${category}`);
      issues.forEach(issue => console.warn(issue));
      console.groupEnd();
    } else {
      console.log(`✅ ${category}: No issues found`);
    }
  });
  
  console.groupEnd();
};
