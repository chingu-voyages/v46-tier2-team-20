import React from 'react';
import './StatusMessage.css';

function StatusMessage({ message, statusCode }) {
  let imageurl = './public/';

  switch ((`${statusCode}`)[0]) {
    case '2': // Synthax error
      imageurl += 'researching.png';
      break;
    case '4': // Client side error
      imageurl += 'error_404.png';
      break;
    default: // any other error
      imageurl = 'technical_error.png';
  }

  return (
    <div className="error-container">
      <img src={imageurl} alt={imageurl} />
      <h1 className="font-semibold">
        {message}
      </h1>
    </div>
  );
}

export default StatusMessage;
