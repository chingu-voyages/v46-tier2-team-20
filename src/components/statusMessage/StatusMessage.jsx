import React from 'react';
import './StatusMessage.css';

function StatusMessage() {
  const imageurl = '/researching.png';

  return (
    <div className="error-container">
      <img src={imageurl} alt={imageurl} />
      <h1 className="font-semibold">
        No recipes found - try a different ingredient
      </h1>
    </div>
  );
}

export default StatusMessage;
