// client/src/components/PortfolioItem.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Or just 'a' if it's an external link
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function PortfolioItem({ imgSrc, altText, title, link = "#" }) {
  const [ref, isInView] = useScrollAnimation();
  return (
    <div ref={ref} className={`portfolio-item slide-up ${isInView ? 'animated' : ''}`}>
      <div className="portfolio-image">
        <img src={imgSrc} alt={altText} />
        <div className="overlay">
          <h3>{title}</h3>
          <Link to={link} className="view-button">View Details</Link>
        </div>
      </div>
    </div>
  );
}
export default PortfolioItem;