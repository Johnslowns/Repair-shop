// src/components/CTA.jsx
import React from 'react';


const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Repair Your Appliances?</h2>
          <p>Don't let a broken appliance disrupt your day. Contact us now for fast, reliable service.</p>
          <div className="cta-buttons">
            <button className="primary-cta">Call Now: (+254) 743-905-708</button>
            <button className="secondary-cta">Book Online</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;