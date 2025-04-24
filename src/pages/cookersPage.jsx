// CookerRepair.js
import React from 'react';
import { Link } from 'react-router-dom';


const CookerRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Cooker & Stove Repair Services</h1>
        <p>Expert repairs for gas and electric ranges to keep your kitchen cooking safely</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          <img src="cooker-repair-tech.jpg" alt="Technician repairing a stove" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Range and Cooktop Repairs</h2>
          <p>
            Whether you have a gas, electric, or induction cooking system, our certified technicians 
            have the expertise to diagnose and repair all types of cooker and stove issues. We prioritize 
            safety in all our repairs, especially when working with gas appliances.
          </p>
          <ul className="service-features">
            <li>24/7 emergency service for gas leaks</li>
            <li>Certified gas safe technicians</li>
            <li>60-day warranty on all repairs</li>
            <li>Same-day service available</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Cooker & Stove Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Burner Not Heating</h3>
            <p>We repair faulty heating elements, gas igniters, and power connections.</p>
            <div className="problem-image">Image: Cold burner on stove</div>
          </div>
          <div className="problem-card">
            <h3>Uneven Flame/Heat</h3>
            <p>Adjustment of gas valves and replacement of damaged heating elements.</p>
            <div className="problem-image">Image: Uneven burner flame</div>
          </div>
          <div className="problem-card">
            <h3>Oven Temperature Issues</h3>
            <p>Calibration of thermostats and replacement of faulty sensors.</p>
            <div className="problem-image">Image: Inaccurate oven thermometer</div>
          </div>
          <div className="problem-card">
            <h3>Ignition Problems</h3>
            <p>Repairs for spark modules, igniters, and gas valve solenoids.</p>
            <div className="problem-image">Image: Gas burner not igniting</div>
          </div>
          <div className="problem-card">
            <h3>Control Panel Malfunctions</h3>
            <p>Diagnosis and repair of faulty knobs, switches, and electronic controls.</p>
            <div className="problem-image">Image: Faulty stove controls</div>
          </div>
          <div className="problem-card">
            <h3>Gas Smell/Leaks</h3>
            <p>Emergency service for gas line repairs and connection issues.</p>
            <div className="problem-image">Image: Technician checking gas connection</div>
          </div>
        </div>
      </section>

      <section className="repair-process">
        <h2>Our Cooker & Stove Repair Process</h2>
        <div className="process-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Safety Inspection</h3>
            <p>We begin with a thorough safety check, especially for gas appliances.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Component Testing</h3>
            <p>Our technicians test all relevant components to identify failures.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Detailed Estimate</h3>
            <p>You'll receive a complete breakdown of repair costs and options.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Precision Repair</h3>
            <p>We use specialized tools and manufacturer parts for reliable fixes.</p>
          </div>
        </div>
      </section>

      <section className="brands-we-service">
        <h2>Brands We Service</h2>
        <p>We repair all major small appliance brands including:</p>
        <div className="brand-grid">
          <div className="brand-logo"><img src="/images/Omega_Logo.jpg" alt="" /></div>
          <div className="brand-logo"><img src="/images/LG_logo.svg" alt="" /></div>
          <div className="brand-logo"><img src="/images/Samsung_wordmark.svg" alt="" /></div>
          <div className="brand-logo"><img src="/images/Bosch-logo.svg" alt="" /></div>
          <div className="brand-logo"><img src="/images/Hisense.svg" alt="" /></div>
          <div className="brand-logo"><img src="images/Whirlpool_Corporation_Logo.png" alt="" /></div>
          
        </div>
      </section>

      <section className="service-cta">
        <h2>Need Stove Repair?</h2>
        <p>Don't risk unsafe cooking conditions - contact us today</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default CookerRepair;