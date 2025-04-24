// SmallAppliancesRepair.js
import React from 'react';
import { Link } from 'react-router-dom';


const SmallAppliancesRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Electric Kettle & Toaster Repair Services</h1>
        <p>Expert repairs for your small kitchen appliances</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          <img src="kettle-repair-tech.jpg" alt="Technician repairing an electric kettle" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Small Appliance Repairs</h2>
          <p>
            Though small, these appliances are essential for daily routines. Our technicians specialize in 
            repairing electric kettles, toasters, and other countertop appliances with precision and care, 
            often completing repairs while you wait.
          </p>
          <ul className="service-features">
            <li>Quick 30-minute diagnostics</li>
            <li>While-you-wait repairs available</li>
            <li>30-day warranty on all repairs</li>
            <li>Affordable flat-rate pricing</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Small Appliance Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Not Heating</h3>
            <p>We replace faulty heating elements and thermostats in kettles and toasters.</p>
            <div className="problem-image">Image: Kettle not boiling</div>
          </div>
          <div className="problem-card">
            <h3>Automatic Shutoff Failure</h3>
            <p>Repairs for malfunctioning auto-off mechanisms and sensors.</p>
            <div className="problem-image">Image: Kettle not turning off</div>
          </div>
          <div className="problem-card">
            <h3>Toaster Uneven Browning</h3>
            <p>Adjustment of heating elements and repair of timing mechanisms.</p>
            <div className="problem-image">Image: Uneven toast</div>
          </div>
          <div className="problem-card">
            <h3>Power Base Issues</h3>
            <p>Repair of cordless kettle bases and electrical contacts.</p>
            <div className="problem-image">Image: Kettle base not working</div>
          </div>
          <div className="problem-card">
            <h3>Lid/Switch Problems</h3>
            <p>Replacement of broken lids and repair of safety switches.</p>
            <div className="problem-image">Image: Broken kettle lid</div>
          </div>
          <div className="problem-card">
            <h3>Water Leakage</h3>
            <p>Fixing of cracked housings and replacement of worn seals.</p>
            <div className="problem-image">Image: Leaking kettle</div>
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
        <h2>Need Small Appliance Repair?</h2>
        <p>Get your morning routine back on track - contact us today</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default SmallAppliancesRepair;