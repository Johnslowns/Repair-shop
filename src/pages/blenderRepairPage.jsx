// BlenderRepair.js
import React from 'react';
import { Link } from 'react-router-dom';


const BlenderRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Blender & Food Processor Repair Services</h1>
        <p>Keep your kitchen blending smoothly with our expert repair solutions</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          {/* Image suggestion: technician working on a blender */}
          <img src="blender-repair-tech.jpg" alt="Technician repairing a blender" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Small Appliance Repairs</h2>
          <p>
            Blenders and food processors are essential kitchen tools that often need professional attention 
            when overworked. Our technicians specialize in repairing all types of countertop appliances, 
            from high-powered professional blenders to compact food processors.
          </p>
          <ul className="service-features">
            <li>Same-day repairs for most models</li>
            <li>Original manufacturer parts</li>
            <li>30-day warranty on all repairs</li>
            <li>Affordable flat-rate pricing</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Blender & Food Processor Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Motor Not Running</h3>
            <p>We fix burnt-out motors, faulty switches, and power cord issues.</p>
            <div className="problem-image">Image: Blender not turning on</div>
          </div>
          <div className="problem-card">
            <h3>Leaking From Base</h3>
            <p>Repairs for worn seals, cracked jars, and damaged gaskets causing leaks.</p>
            <div className="problem-image">Image: Leaking blender jar</div>
          </div>
          <div className="problem-card">
            <h3>Blade Assembly Issues</h3>
            <p>We replace dull or broken blades and fix wobbly assemblies.</p>
            <div className="problem-image">Image: Blender blades</div>
          </div>
          <div className="problem-card">
            <h3>Overheating Problems</h3>
            <p>Diagnosis and repair of thermal cutoffs and ventilation issues.</p>
            <div className="problem-image">Image: Overheated blender base</div>
          </div>
          <div className="problem-card">
            <h3>Speed Control Malfunctions</h3>
            <p>Repairs for faulty control boards and selector switches.</p>
            <div className="problem-image">Image: Blender controls</div>
          </div>
          <div className="problem-card">
            <h3>Food Processor Attachment Issues</h3>
            <p>We fix misaligned bowls, broken latches, and faulty feed tubes.</p>
            <div className="problem-image">Image: Food processor parts</div>
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
        <h2>Need Blender Repair?</h2>
        <p>Get your kitchen back in action - contact us today for quick service</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default BlenderRepair;