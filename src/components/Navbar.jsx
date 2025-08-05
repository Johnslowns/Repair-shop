// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="dex-navbar">
      <div className="dex-navbar-container">
        <div className="dex-navbar-logo">
          {/* Using a placeholder for the logo image. Ensure your actual image path is correct. */}
          <img src="./images/logo_image.PNG" alt="Dex Logo" />
        </div>

        <div
          className={`dex-navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Mobile Overlay: Appears when the menu is open to close it on outside click */}
        {menuOpen && (
          <div className="dex-overlay" onClick={closeMenu}></div>
        )}

        <div className={`dex-navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/aboutUs" onClick={closeMenu}>About Us</Link>
          <Link to="/contactUs" onClick={closeMenu}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
