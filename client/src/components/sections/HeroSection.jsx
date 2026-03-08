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
      // Create a timeline for entrance animation
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 }
      });

      // Add entrance animations
      timeline
        .from(titleRef.current, { opacity: 0, y: 50 })
        .from(paragraphRef.current, { opacity: 0, y: 30 }, '-=0.5')
        .from(buttonsRef.current, { opacity: 0, y: 20 }, '-=0.5')
        .from(imageRef.current, { opacity: 0, scale: 0.95, y: 40 }, '-=0.7');

      // Image is now stable - continuous floating / rolling effect removed to fix scroll performance bugs


      // Subtle background movement effect - now targeting a real div
      gsap.to(glowRef.current, {
        x: '+=20',
        y: '+=20',
        duration: 20,
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
          <img src={heroBg} alt="Abstract Glass Waves" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;