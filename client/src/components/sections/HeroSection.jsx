// client/src/components/sections/HeroSection.jsx

import React, { useLayoutEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import './HeroSection.css'; // Import styles
import heroBg from '../../assets/hero-bg.png';

// Import GSAP and its ScrollTrigger plugin
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const componentRef = useRef();
  const titleRef = useRef();
  const paragraphRef = useRef();
  const buttonsRef = useRef();
  const imageRef = useRef();
  const glowRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline for entrance animation — keep it snappy
      const timeline = gsap.timeline({
        defaults: { ease: 'power2.out', duration: 0.5 }
      });

      // Add entrance animations
      timeline
        .from(titleRef.current, { opacity: 0, y: 28 })
        .from(paragraphRef.current, { opacity: 0, y: 18 }, '-=0.3')
        .from(buttonsRef.current, { opacity: 0, y: 12 }, '-=0.3')
        .from(imageRef.current, { opacity: 0, scale: 0.97, y: 24 }, '-=0.4');

      // Image is now stable - continuous floating / rolling effect removed to fix scroll performance bugs


      // Subtle background glow drift — slow for performance
      gsap.to(glowRef.current, {
        x: '+=15',
        y: '+=15',
        duration: 30,
        ease: 'none',
        repeat: -1,
        yoyo: true
      });

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={componentRef}>
      {/* Real div for background glow instead of pseudo-element for GSAP compatibility */}
      <div className="hero-glow" ref={glowRef}></div>

      <div className="container">
        <div className="hero-content">
          <h1 ref={titleRef}>Transforming Ideas into <br /><span>Digital Excellence.</span></h1>
          <p ref={paragraphRef}>Fullstack web/software and AI solutions tailored to your business needs.</p>
          <div className="hero-buttons" ref={buttonsRef}>
            <HashLink smooth to="/#contact" className="cta-button">Get Started</HashLink>
            <HashLink smooth to="/#services" className="cta-button secondary">Learn more ›</HashLink>
          </div>
        </div>

        <div className="hero-image-container" ref={imageRef}>
          <img src={heroBg} alt="Abstract Glass Waves" loading="eager" decoding="sync" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;