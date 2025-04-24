// VacuumCleanerRepair.js
import React from 'react';
import { Link } from 'react-router-dom';


const VacuumCleanerRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Vacuum Cleaner Repair Services</h1>
        <p>Expert repairs to restore your vacuum's cleaning power and suction</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          <img src="vacuum-repair-tech.jpg" alt="Technician repairing a vacuum cleaner" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Vacuum Repairs</h2>
          <p>
            From uprights to canisters, robot vacuums to commercial models, our technicians repair all types 
            of vacuum cleaners. We understand the mechanics behind different vacuum technologies and provide 
            targeted solutions to get your machine working like new.
          </p>
          <ul className="service-features">
            <li>Same-day repairs for most models</li>
            <li>Original manufacturer parts</li>
            <li>30-day warranty on all repairs</li>
            <li>Free performance check with every repair</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Vacuum Cleaner Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Loss of Suction</h3>
            <p>We fix clogs, seal leaks, and replace worn filters to restore suction power.</p>
            <div className="problem-image">Image: Vacuum with weak suction</div>
          </div>
          <div className="problem-card">
            <h3>Brush Roll Not Spinning</h3>
            <p>Repairs for broken belts, jammed rollers, and motor coupler issues.</p>
            <div className="problem-image">Image: Stuck brush roll</div>
          </div>
          <div className="problem-card">
            <h3>Motor Failure</h3>
            <p>Replacement of burnt-out motors and repair of electrical connections.</p>
            <div className="problem-image">Image: Vacuum motor</div>
          </div>
          <div className="problem-card">
            <h3>Power Cord Issues</h3>
            <p>Repairs for damaged cords, faulty retractors, and connection problems.</p>
            <div className="problem-image">Image: Frayed power cord</div>
          </div>
          <div className="problem-card">
            <h3>Robot Vacuum Navigation</h3>
            <p>Diagnosis and repair of sensors, wheels, and navigation modules.</p>
            <div className="problem-image">Image: Robot vacuum with error</div>
          </div>
          <div className="problem-card">
            <h3>Overheating/Shutoff</h3>
            <p>Cleaning of blockages and repair of thermal protection systems.</p>
            <div className="problem-image">Image: Vacuum shutting off</div>
          </div>
        </div>
      </section>

      <section className="repair-process">
        <h2>Our Vacuum Repair Process</h2>
        <div className="process-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Performance Evaluation</h3>
            <p>We test all functions to assess current performance issues.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Deep Inspection</h3>
            <p>Our technicians disassemble and inspect all critical components.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Cleaning & Repair</h3>
            <p>We clean all internal parts before making necessary repairs.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Final Testing</h3>
            <p>Your vacuum is tested to ensure full functionality before return.</p>
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
        <h2>Need Vacuum Repair?</h2>
        <p>Get your cleaning power back - contact us today</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default VacuumCleanerRepair;