// src/components/Hero.jsx
import React from "react";

import heroImage from "/images/hero-image-2.png"; // Replace with actual image path

const Hero= () => {
  return (
    <section className="hero-repair-section">
      <div className="hero-repair-text">
        <h1 className="hero-repair-title">Fridge & Appliance Repair Experts</h1>
        <p className="hero-repair-description">
          We fix it right the first time. Reliable, fast, and trusted repair services at your convenience.
        </p>
        <a
          href="https://wa.me/+254743905708" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="hero-whatsapp-button"
        >
          Book on WhatsApp
        </a>
      </div>

     
      <img
        src={heroImage}
        alt="Dex Technician Repairing a Fridge"
        className="hero-repair-image"
      />
      
    </section>
  );
};

export default Hero;
