// WashingMachineRepair.js
import React from 'react';
import { Link } from 'react-router-dom';


const WashingMachineRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Washing Machine & Dryer Repair Services</h1>
        <p>Expert solutions to keep your laundry routine running smoothly</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          {/* Image suggestion: technician working on a washing machine */}
          <img src="washing-machine-repair-tech.jpg" alt="Technician repairing a washing machine" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Laundry Appliance Repairs</h2>
          <p>
            Washing machines and dryers endure heavy use and require professional care when problems arise. 
            Our certified technicians specialize in diagnosing and repairing all types of laundry appliances, 
            from traditional top-loaders to high-efficiency front-loading units and smart dryers.
          </p>
          <ul className="service-features">
            <li>Emergency service available for leaks and flooding</li>
            <li>Manufacturer-trained technicians</li>
            <li>60-day warranty on all repairs</li>
            <li>Eco-friendly water conservation solutions</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Washing Machine & Dryer Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Not Spinning/Draining</h3>
            <p>We fix broken belts, faulty drain pumps, and clogged filters preventing proper spinning.</p>
            <div className="problem-image">Image: Washing machine with water inside</div>
          </div>
          <div className="problem-card">
            <h3>Excessive Noise/Vibration</h3>
            <p>Repairs for worn bearings, unbalanced drums, and loose components causing noise.</p>
            <div className="problem-image">Image: Loud washing machine</div>
          </div>
          <div className="problem-card">
            <h3>Water Leakage</h3>
            <p>We replace damaged hoses, fix pump seals, and repair door gaskets causing leaks.</p>
            <div className="problem-image">Image: Water leaking from machine</div>
          </div>
          <div className="problem-card">
            <h3>Not Heating Water</h3>
            <p>Diagnosis and repair of heating elements, thermostats, and control boards.</p>
            <div className="problem-image">Image: Washing machine controls</div>
          </div>
          <div className="problem-card">
            <h3>Dryer Not Heating</h3>
            <p>Repairs for heating elements, thermal fuses, and gas ignition systems.</p>
            <div className="problem-image">Image: Dryer not drying clothes</div>
          </div>
          <div className="problem-card">
            <h3>Error Codes Displayed</h3>
            <p>We interpret and fix all manufacturer error codes for quick resolution.</p>
            <div className="problem-image">Image: Error code on display</div>
          </div>
        </div>
      </section>

      <section className="repair-process">
        <h2>Our Small Appliance Repair Process</h2>
        <div className="process-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Quick Assessment</h3>
            <p>We quickly identify the issue through visual inspection and testing.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Component Check</h3>
            <p>Our technicians test all electrical components for faults.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Efficient Repair</h3>
            <p>We make targeted repairs to get your appliance working quickly.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Safety Verification</h3>
            <p>All repairs include a complete safety check before return.</p>
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
        <h2>Need Washing Machine Repair?</h2>
        <p>Don't let laundry pile up - contact us today for fast, reliable service</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default WashingMachineRepair;