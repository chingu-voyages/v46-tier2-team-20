/* eslint-disable linebreak-style */
import React from 'react';
import './StatusMessage.css';

function ErrorMessage() {
  const imageurl = '/technical_error.png';

  return (
    <div className="error-container">
      <img src={imageurl} alt={imageurl} />
      <p className="font-semibold">
        Oops! There is a problem with the server ☹...
      </p>
    </div>
  );
}

export default ErrorMessage;
