// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Expert Appliance Repairs You Can Trust</h1>
          <p className="hero-subtitle">
            Fast, reliable service for all your home appliances with a 12-month guarantee on all repairs.
          </p>
          <button className="hero-cta">Schedule a Repair Today</button>
        </div>
        <div className="hero-image">
          <img src='./images/hero_image.jpg' alt="Technician repairing appliance" />
        </div>
      </div>
    </section>
  );
};

export default Hero;