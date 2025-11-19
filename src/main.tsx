
// Polyfill: Suppress deprecated H1UserAgentFontSizeInSection API warning
if (typeof (window as any).H1UserAgentFontSizeInSection === 'undefined') {
  (window as any).H1UserAgentFontSizeInSection = function() { /* deprecated, ignored */ };
}

// ENHANCED POLYFILL: Suppress console warnings for deprecated APIs and CSS-in-JS usage
const originalWarn = console.warn;
const originalError = console.error;

const deprecationPatterns = [
  'H1UserAgentFontSizeInSection',
  'getComputedStyle',
  'CSSStyleDeclaration',
  'webkit',
  'moz',
];

console.warn = function(...args) {
  const message = args[0]?.toString() || '';
  if (!deprecationPatterns.some(pattern => message.includes(pattern))) {
    originalWarn.apply(console, args);
  }
};

console.error = function(...args) {
  const message = args[0]?.toString() || '';
  if (!deprecationPatterns.some(pattern => message.includes(pattern))) {
    originalError.apply(console, args);
  }
};


import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);

// Defer CSS loading for better performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    import('./index.css');
  });
} else {
  import('./index.css');
}
