// client/src/components/ServiceDetailCard.jsx
import React, { useState } from 'react';
import './ServiceDetailCard.css';

function ServiceDetailCard({ iconClass, title, shortDesc, longDesc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className={`service-detail-card ${isExpanded ? 'is-expanded' : ''}`}>
      <div className="service-icon"><i className={iconClass}></i></div>
      <h2>{title}</h2>
      <p className="service-short-description">{shortDesc}</p>
      
      <div className="service-features">
        <h3>Service Details:</h3>
        <p className="service-long-description">{longDesc}</p>
      </div>

      <button className="cta-button service-cta" onClick={handleToggle}>
        {isExpanded ? 'Show Less' : 'Learn More'}
      </button>
    </div>
  );
}

export default ServiceDetailCard;