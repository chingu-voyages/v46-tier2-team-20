import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">

      <div className="footer-container">

        <p>
          © 2023 All rights reserved
        </p>

        <div className="flex items-center">

          <div className="pr-2">
            <a href="https://github.com/chingu-voyages/v46-tier2-team-20" target="_blank" rel="noreferrer">
              <img src="/github-mark-white.png" alt="github-logo" width="30" height="30" />
            </a>
          </div>

          <div>
            <p>Developers:</p>
            <p>Designer:</p>
          </div>

          <div>
            <div className="github-links">
              <a href="https://github.com/AOA19" target="_blank" rel="noreferrer">AOA19</a>
              {' '}
              <a href="https://github.com/allison-truhlar" target="_blank" rel="noreferrer">Allison</a>
              {' '}
              <a href="https://github.com/Emimint" target="_blank" rel="noreferrer">Emimint</a>
              {' '}
              <a href="https://github.com/komalgill0310" target="_blank" rel="noreferrer">Komal</a>
            </div>

            <div className="github-links flex">
              <a href="https://github.com/nghia-nguyen-dev" target="_blank" rel="noreferrer">
                Nghia
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
