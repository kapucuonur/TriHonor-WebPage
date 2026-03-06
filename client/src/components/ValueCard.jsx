// client/src/components/ValueCard.jsx
import React from 'react';

function ValueCard({ iconClass, title, description }) {
  return (
    <div className="value-card">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ValueCard;