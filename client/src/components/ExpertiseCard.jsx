// client/src/components/ExpertiseCard.jsx

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Import our new hook
import './ExpertiseCard.css';

// We pass the card's content as props to make it reusable
function ExpertiseCard({ iconClass, title, description, animationType = 'slide-up' }) {
  // Use the custom hook to get a ref and the in-view status
  const [cardRef, isInView] = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  // Event handler for the 3D mouse move effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation angles based on mouse position
    const angleX = (y - centerY) / 20; // Tweak divisor for sensitivity
    const angleY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
  };

  // Event handler to reset the card's transform on mouse leave
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className={`expertise-card ${animationType} ${isInView ? 'animated' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-icon">
        <i className={iconClass}></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default ExpertiseCard;