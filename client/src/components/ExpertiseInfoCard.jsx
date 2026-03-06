// client/src/components/ExpertiseInfoCard.jsx
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ExpertiseInfoCard({ imgSrc, altText, title, description }) {
  const [ref, isInView] = useScrollAnimation();
  return (
    <div ref={ref} className={`expertise-card slide-up ${isInView ? 'animated' : ''}`}>
      <div className="expertise-image-container">
        <img src={imgSrc} alt={altText} className="expertise-image" />
      </div>
      <div className="expertise-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ExpertiseInfoCard;