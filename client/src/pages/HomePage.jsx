import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all the section components
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CompactAboutSection from '../components/sections/CompactAboutSection';
import CompactContactSection from '../components/sections/CompactContactSection';

import './HomePage.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%', // Starts animation when top of section hits 85% of viewport height
              toggleActions: 'play none none reverse' // Play on enter, reverse on leave back up
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to add sections to ref array
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="homepage-wrapper">
      <div ref={addToRefs} className="home-section hero-wrapper">
        <HeroSection />
      </div>
      <div ref={addToRefs} className="home-section services-wrapper">
        <ServicesSection />
      </div>
      <div ref={addToRefs} className="home-section expertise-wrapper">
        <ExpertiseSection />
      </div>
      <div ref={addToRefs} className="home-section portfolio-wrapper">
        <PortfolioSection />
      </div>
      <div ref={addToRefs} className="home-section testimonials-wrapper">
        <TestimonialsSection />
      </div>
      <div ref={addToRefs} className="home-section about-wrapper">
        <CompactAboutSection />
      </div>
      <div ref={addToRefs} className="home-section contact-wrapper">
        <CompactContactSection />
      </div>
    </div>
  );
}

export default HomePage;