// client/src/components/SEO.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SEO({ title, description, noindex = false }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    document.title = title 
      ? `${title} | TriHonor` 
      : 'TriHonor | Fullstack Web/Software & AI Development';

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    const defaultDesc = 'Professional fullstack web, software and AI development services. We build cutting-edge solutions to grow your business.';
    metaDesc.setAttribute('content', description || defaultDesc);

    // 3. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    // Remove trailing slash if present to maintain consistency (except for homepage)
    let cleanPath = location.pathname;
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    const canonicalUrl = `https://trihonor.com${cleanPath}`;
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph & Twitter URL Tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);

    // 5. Update Open Graph & Twitter Title Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title ? `${title} | TriHonor` : 'TriHonor | Fullstack Web/Software & AI Development');

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title ? `${title} | TriHonor` : 'TriHonor | Fullstack Web/Software & AI Development');

    // 6. Update Open Graph & Twitter Description Tags
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || defaultDesc);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description || defaultDesc);

    // 7. Handle Robots Meta (noindex)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      if (metaRobots) {
        metaRobots.remove();
      }
    }
  }, [title, description, noindex, location.pathname]);

  return null;
}

export default SEO;
