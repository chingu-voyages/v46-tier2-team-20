import React from 'react';
import './StatusMessage.css';

function StatusMessage() {
  const imageurl = '/researching.png';

  return (
    <div className="error-container">
      <img src={imageurl} alt={imageurl} />
      <p className="font-semibold">
        No recipes found - try a different ingredient
      </p>
    </div>
  );
}

export default StatusMessage;
