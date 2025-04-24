// RefrigeratorRepair.js
import React from 'react';
import { Link } from 'react-router-dom';

const RefrigeratorRepair = () => {
  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Professional Refrigerator Repair Services</h1>
        <p>Fast, reliable solutions to keep your food fresh and your refrigerator running efficiently</p>
      </header>

      <section className="service-overview">
        <div className="service-image">
          {/* Image suggestion: technician working on a refrigerator */}
          <img src="refrigerator-repair-tech.jpg" alt="Technician repairing a refrigerator" />
        </div>
        <div className="service-description">
          <h2>Comprehensive Refrigerator Repairs</h2>
          <p>
            Your refrigerator is one of the hardest working appliances in your home, running 24/7 to keep your food fresh. 
            When it malfunctions, you need prompt, professional service. Our certified technicians specialize in diagnosing 
            and repairing all refrigerator makes and models, from standard top-freezer units to sophisticated smart refrigerators.
          </p>
          <ul className="service-features">
            <li>Same-day service available for most repairs</li>
            <li>Genuine replacement parts</li>
            <li>90-day warranty on all repairs</li>
            <li>Eco-friendly disposal of old components</li>
          </ul>
        </div>
      </section>

      <section className="common-problems">
        <h2>Common Refrigerator Issues We Repair</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Not Cooling Properly</h3>
            <p>We fix compressor issues, refrigerant leaks, and airflow problems that affect cooling performance.</p>
            {/* Image suggestion: thermometer showing high temperature */}
            <div className="problem-image">Image: Warm refrigerator interior</div>
          </div>
          <div className="problem-card">
            <h3>Excessive Frost Build-up</h3>
            <p>Repairs for faulty defrost timers, heaters, and thermostats that cause frost accumulation.</p>
            {/* Image suggestion: frosted freezer compartment */}
            <div className="problem-image">Image: Frosty freezer</div>
          </div>
          <div className="problem-card">
            <h3>Water Leakage</h3>
            <p>We fix clogged defrost drains, damaged water lines, and improper leveling causing leaks.</p>
            {/* Image suggestion: water puddle under refrigerator */}
            <div className="problem-image">Image: Leaking refrigerator</div>
          </div>
          <div className="problem-card">
            <h3>Strange Noises</h3>
            <p>Diagnosis and repair of loud humming, buzzing, or knocking sounds from your unit.</p>
            {/* Image suggestion: technician listening to refrigerator */}
            <div className="problem-image">Image: Noisy refrigerator</div>
          </div>
          <div className="problem-card">
            <h3>Ice Maker Issues</h3>
            <p>Repairs for ice makers that won't make ice, produce small cubes, or leak water.</p>
            {/* Image suggestion: broken ice maker */}
            <div className="problem-image">Image: Faulty ice maker</div>
          </div>
          <div className="problem-card">
            <h3>Door Seal Problems</h3>
            <p>Replacement of worn or damaged door gaskets that let cold air escape.</p>
            {/* Image suggestion: damaged refrigerator door seal */}
            <div className="problem-image">Image: Worn door seal</div>
          </div>
        </div>
      </section>

      <section className="repair-process">
        <h2>Our Refrigerator Repair Process</h2>
        <div className="process-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Diagnosis</h3>
            <p>Our technician will perform a thorough inspection to identify the root cause of the problem.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Estimate</h3>
            <p>You'll receive a transparent estimate with all costs explained before any work begins.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Repair</h3>
            <p>We use quality parts and proven techniques to fix your refrigerator efficiently.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Testing</h3>
            <p>After repairs, we test all functions to ensure proper operation before leaving.</p>
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
        <h2>Need Refrigerator Repair?</h2>
        <p>Don't risk food spoilage - contact us today for fast, reliable service</p>
        <Link to="/contact" className="cta-button">Schedule a Repair</Link>
      </section>
    </div>
  );
};

export default RefrigeratorRepair;