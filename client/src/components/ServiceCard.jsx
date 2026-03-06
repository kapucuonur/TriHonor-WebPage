// client/src/components/ServiceCard.jsx
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ServiceCard({ iconClass, title, description }) {
  const [ref, isInView] = useScrollAnimation();
  return (
    <div ref={ref} className={`service-card slide-up ${isInView ? 'animated' : ''}`}>
      <div className="service-icon"><i className={iconClass}></i></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default ServiceCard;