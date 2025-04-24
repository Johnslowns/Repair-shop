// MicrowaveRepair.js
import React from 'react';
import { Link } from 'react-router-dom';


const MicrowaveRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Microwave & Oven Repair Services</h1>
        <p>Expert solutions to keep your cooking appliances working safely and efficiently</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          <img src="microwave-repair-tech.jpg" alt="Technician repairing a microwave" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Cooking Appliance Repairs</h2>
          <p>
            Microwaves and ovens are essential kitchen appliances that require specialized knowledge to repair. 
            Our certified technicians handle all types of cooking appliance issues, from basic microwave repairs 
            to complex oven control board diagnostics and replacements.
          </p>
          <ul className="service-features">
            <li>Same-day service for most microwave repairs</li>
            <li>Manufacturer-certified technicians</li>
            <li>90-day warranty on all repairs</li>
            <li>Safety inspections included</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Microwave & Oven Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Microwave Not Heating</h3>
            <p>We repair or replace faulty magnetrons, diodes, and capacitors that prevent heating.</p>
            <div className="problem-image">Image: Microwave running but not heating</div>
          </div>
          <div className="problem-card">
            <h3>Turntable Not Spinning</h3>
            <p>Repairs for broken turntable motors, rollers, and couplers.</p>
            <div className="problem-image">Image: Stuck microwave turntable</div>
          </div>
          <div className="problem-card">
            <h3>Oven Temperature Inaccurate</h3>
            <p>Calibration of thermostats and replacement of faulty temperature sensors.</p>
            <div className="problem-image">Image: Overcooked/undercooked food</div>
          </div>
          <div className="problem-card">
            <h3>Control Panel Malfunctions</h3>
            <p>Diagnosis and repair of unresponsive buttons and display issues.</p>
            <div className="problem-image">Image: Faulty control panel</div>
          </div>
          <div className="problem-card">
            <h3>Door Seal Problems</h3>
            <p>Replacement of damaged door seals and repair of faulty door switches.</p>
            <div className="problem-image">Image: Damaged microwave door seal</div>
          </div>
          <div className="problem-card">
            <h3>Strange Noises/Arcing</h3>
            <p>Repairs for sparking, arcing, and unusual operational noises.</p>
            <div className="problem-image">Image: Sparking inside microwave</div>
          </div>
        </div>
      </section>

      <section className="repair-process">
        <h2>Our Microwave & Oven Repair Process</h2>
        <div className="process-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Safety Check</h3>
            <p>We begin with a complete safety inspection to identify any potential hazards.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Diagnostic Test</h3>
            <p>Our technicians perform comprehensive tests to pinpoint the exact issue.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Repair Estimate</h3>
            <p>You'll receive a transparent quote with all costs before we proceed.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Quality Repair</h3>
            <p>We use manufacturer-approved parts and techniques for lasting repairs.</p>
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
        <h2>Need Microwave Repair?</h2>
        <p>Don't compromise your meal prep - contact us today for fast service</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default MicrowaveRepair;