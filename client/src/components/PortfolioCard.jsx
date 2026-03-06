// client/src/components/PortfolioCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Reusing our animation hook
import './PortfolioCard.css'; // We'll create styles for the card

function PortfolioCard({ imgSrc, title, description, link = "#" }) {
  const [cardRef, isInView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={cardRef} className={`portfolio-item ${isInView ? 'animated' : ''}`}>
      <img src={imgSrc} alt={title} />
      <div className="portfolio-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="view-button">View Case Study</Link>
      </div>
    </div>
  );
}

export default PortfolioCard;