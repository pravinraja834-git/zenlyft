import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const { pathname } = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`nav__link${pathname === to ? ' nav__link--active' : ''}`}
    >
      {label}
    </Link>
  );

  const drawerLink = (to, label) => (
    <Link
      to={to}
      className={`nav__drawer-link${pathname === to ? ' nav__drawer-link--active' : ''}`}
    >
      {label}
    </Link>
  );

  return (
    <header role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container nav__inner">
          {/* Logo */}
          <Link to="/" className="nav__logo" aria-label="ZenLyft homepage">
            <img src="/Images/Zenlyft_icon.png" alt="ZenLyft Logo" className="nav__logo-img" />
            <span className="nav__logotype">ZenLyft</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav__links">
            {navLink('/', 'Home')}
            {navLink('/about', 'About')}
            {navLink('/what-we-build', 'What We Build')}
            {navLink('/products', 'Products')}
            {navLink('/careers', 'Careers')}
            {navLink('/contact', 'Contact')}
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="nav__actions">
            <Link to="/products" className="btn btn--primary" id="nav-cta">Explore Products</Link>
            <button className="nav__hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className="nav__drawer" id="mobile-drawer" aria-label="Mobile navigation">
        <nav className="nav__drawer-links">
          {drawerLink('/', 'Home')}
          {drawerLink('/about', 'About')}
          {drawerLink('/what-we-build', 'What We Build')}
          {drawerLink('/products', 'Products')}
          {drawerLink('/careers', 'Careers')}
          {drawerLink('/contact', 'Contact')}
        </nav>
        <div className="nav__drawer-actions">
          <Link to="/products" className="btn btn--primary btn--full">Explore Products</Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
