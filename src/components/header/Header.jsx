import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="sm:px-25 header text-center h-screen place-items-center">
      {/* <img src="/header_img.jpg" alt="" /> */}
      <h1 className="font-semibold">What will you make today?</h1>
      <h2 className="">
        App name is an app that helps you find and create delicious dishes base on your ingredients!
      </h2>
    </div>
  );
}

export default Header;
