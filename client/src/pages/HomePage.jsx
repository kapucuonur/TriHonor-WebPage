import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all the section components
import SEO from '../components/SEO';
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
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              once: true
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to add non-hero sections to ref array (hero is above fold, no scroll trigger)
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="homepage-wrapper">
      <SEO 
        title="Fullstack Web/Software & AI Development" 
        description="Professional fullstack web, software and AI development services. We build cutting-edge solutions to grow your business." 
      />
      {/* Hero is NOT in scroll trigger — it's above the fold, show immediately */}
      <div className="home-section hero-wrapper">
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