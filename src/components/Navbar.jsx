// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1><img src="./images/logo_image.PNG" alt="" /></h1>
        </div>
        <div className="navbar-links">
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-cta">
          <button className="cta-button">Book a Repair</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;