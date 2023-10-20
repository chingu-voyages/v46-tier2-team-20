import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="sm:px-25 md:px-60 lg:px-60 header text-center h-screen place-items-center">
      <h1 className="sm:text-3xl md:text-4xl lg:text-5xl">What will you make today?</h1>
      <h2 className="sm:text-xs md:text-xl lg:text-2xl">
        App name is an app that helps you find and create delicious dishes base on your ingredients!
      </h2>
    </div>
  );
}

export default Header;
