import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="ZenLyft home">
              <img src="/Images/Zenlyft_icon_dark.png" alt="ZenLyft Logo" className="nav__logo-img" />
              <span>ZenLyft</span>
            </Link>
            <p className="footer__tagline">
              Building technology for what comes next.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Company</h4>
            <nav className="footer__nav" aria-label="Footer company links">
              <Link to="/about" className="footer__link">About</Link>
              <Link to="/our-journey" className="footer__link">Our Journey</Link>
              <Link to="/what-we-build" className="footer__link">What We Build</Link>
              <Link to="/products" className="footer__link">Products</Link>
              <Link to="/careers" className="footer__link">Careers</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="footer__heading">Legal</h4>
            <nav className="footer__nav" aria-label="Footer legal links">
              <a href="/privacy" className="footer__link">Privacy Policy</a>
              <a href="/terms" className="footer__link">Terms of Service</a>
            </nav>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 ZenLyft Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

