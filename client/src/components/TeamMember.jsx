// client/src/components/TeamMember.jsx
import React from 'react';

function TeamMember({ imgSrc, name, title }) {
  return (
    <div className="team-member">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

export default TeamMember;