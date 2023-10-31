import React from 'react';

function ErrorMessage({ message }) {
  return (
    <h1 className="h-screen font-semibold text-3xl">
      {message}
      {' '}
    </h1>
  );
}

export default ErrorMessage;
