// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="dex-navbar">
      <div className="dex-navbar-container">
        <div className="dex-navbar-logo">
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

        <div className={`dex-navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contactUs" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
