import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message, errorCode }) {
  let imageurl = './public/';

  switch ((`${errorCode}`)[0]) {
    case '2': // Synthax error
      imageurl += 'researching.png';
      break;
    case '4': // Client side error
      imageurl += 'error_404.png';
      break;
    case '5': // Server side error
      imageurl = 'technical_error.png';
      break;
    default: // any other error
      imageurl = 'no_results.png';
  }

  return (
    <div className="error-container">
      <img src={imageurl} alt={imageurl} />
      <h1 className="font-semibold">
        {message}
        {' '}
      </h1>
    </div>
  );
}

export default ErrorMessage;
