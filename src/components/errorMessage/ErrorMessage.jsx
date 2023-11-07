import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <img src="./public/researching.png" alt="error" />
      <h1 className="font-semibold">
        {message}
        {' '}
      </h1>
    </div>
  );
}

export default ErrorMessage;
