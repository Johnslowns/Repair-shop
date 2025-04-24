// src/components/Map.jsx
import React from 'react';

const Map = () => {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="section-title">Our Service Area</h2>
        <div className="map-container">
          {/* In a real implementation, you would embed a Google Map or similar */}
          <div className="map-placeholder">
            <p>Interactive map would be displayed here</p>
          </div>
          <div className="map-overlay">
            <h3>Serving the Greater Nyeri Area</h3>
            <p>We provide appliance repair services to all neighborhoods within a 50-mile radius.</p>
            <button className="map-cta">Check Our Coverage</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;