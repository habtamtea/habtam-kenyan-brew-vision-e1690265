
// Polyfill: Suppress deprecated H1UserAgentFontSizeInSection API warning
if (typeof (window as any).H1UserAgentFontSizeInSection === 'undefined') {
  (window as any).H1UserAgentFontSizeInSection = function() { /* deprecated, ignored */ };
}


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
