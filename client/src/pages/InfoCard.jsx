// client/src/components/InfoCard.jsx
import React from 'react';
import './InfoCard.css'; // We'll create dedicated styles for this card

function InfoCard({ iconClass, title, text }) {
  // We can make the text a link if it's an email or phone number
  const isEmail = text.includes('@');
  const isPhone = text.startsWith('+');
  let link = text;
  if (isEmail) link = `mailto:${text}`;
  if (isPhone) link = `tel:${text}`;

  return (
    <div className="info-card">
      <div className="info-card-icon">
        <i className={iconClass}></i>
      </div>
      <div className="info-card-content">
        <h3>{title}</h3>
        {isEmail || isPhone ? (
          <a href={link}>{text}</a>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
}

export default InfoCard;