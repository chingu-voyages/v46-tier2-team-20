/* eslint-disable linebreak-style */
import React from 'react';
import './StatusMessage.css';

function ErrorMessage() {
  const imageurl = '/technical_error.png';

  return (
    <div className="error-container">
      <img src={imageurl} alt={imageurl} />
      <h1 className="font-semibold" />
    </div>
  );
}

export default ErrorMessage;
