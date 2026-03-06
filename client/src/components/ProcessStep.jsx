// client/src/components/ProcessStep.jsx
import React from 'react';
import './ProcessStep.css';

function ProcessStep({ number, title, description }) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProcessStep;