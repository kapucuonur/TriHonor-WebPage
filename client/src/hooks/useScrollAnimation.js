// client/src/hooks/useScrollAnimation.js

import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook that uses IntersectionObserver to detect when an element is in view.
 * @param {object} options - IntersectionObserver options (e.g., { threshold: 0.1 })
 * @returns {[React.RefObject, boolean]} - A ref to attach to the element and a boolean indicating if it's in view.
 */
export function useScrollAnimation(options = { threshold: 0.1, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // Rerun effect if options change

  return [elementRef, isInView];
}