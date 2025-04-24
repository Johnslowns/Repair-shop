// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1><img src="./images/logo_image.PNG" alt="" /></h1>
        </div>
        <div className="navbar-links">
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutUs'>About us</Link>
          <Link to='/contactUs'>Contact us</Link>
          
        </div>
        <div className="navbar-cta">
          <button className="cta-button">Book a Repair</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;