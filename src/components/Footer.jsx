// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Dex Appliance Repairs</h3>
            <p>Your trusted local appliance repair service with over 6 years of experience serving the community.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <Link to={'/refrigerators'}>Refrigerators</Link>
              <li><a href="#">Oven & Stove Repair</a></li>
              <li><a href="#">Dishwasher Repair</a></li>
              <li><a href="#">Washing Machine Repair</a></li>
              <li><a href="#">Small Appliance Repair</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Technicians</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <address>
              <p>123 Repair Street<br />Your City, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: dexrepairs@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dex Appliance Repairs. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;