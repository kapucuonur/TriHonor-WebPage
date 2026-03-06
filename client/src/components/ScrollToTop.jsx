// client/src/components/ScrollToTop/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component ensures that when a new page is navigated to,
// the user is scrolled to the very top of the page.
function ScrollToTop() {
  // Extracts the pathname from the current URL (e.g., "/about", "/services")
  const { pathname } = useLocation();

  // The useEffect hook runs every time the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // The dependency array ensures this effect only runs on a URL change.

  // This component does not render any visible UI, so it returns null.
  return null;
}

export default ScrollToTop;