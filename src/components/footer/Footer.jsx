import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>
          © 2023 All rights reserved
        </p>
        <div className="dev-info">
          <p>
            Designer:
            {' '}
            <span>
              <a href="https://github.com/nghia-nguyen-dev" target="blank">
                Nghia
              </a>
            </span>
          </p>
          <p>
            Developers:
            {' '}
            <span>
              <a href="https://github.com/AOA19">Alexandra</a>
            </span>
            {' '}
            <span>
              <a href="https://github.com/allison-truhlar" target="blank">Allison</a>
            </span>
            {' '}
            <span>
              <a href="https://github.com/Emimint" target="blank">Emimint</a>
            </span>
            {' '}
            <span>
              <a href="https://github.com/komalgill0310" target="blank">Komal</a>
            </span>
          </p>
        </div>
        <div className="git-logo">
          <a href="https://github.com/chingu-voyages/v46-tier2-team-20" target="blank"><img src="/github-mark-white.png" alt="github-logo" width="30" height="30" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
