// src/components/ContentSection.jsx
import React from 'react';


const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="container">
        {/* First row - image on right */}
        <div className="content-row">
          <div className="content-text">
            <h2>Quality Repairs for All Major Appliances</h2>
            <p>
              We specialize in repairing all types of home appliances, ensuring they run like new again. 
              Our services include:
            </p>
            <ul>
              <li>Refrigerators and freezers</li>
              <li>Ovens, stoves, and microwaves</li>
              <li>Dishwashers and garbage disposals</li>
              <li>Washing machines and dryers</li>
              <li>Small appliances like kettles and toasters</li>
            </ul>
            <p>
              With our extensive knowledge and access to original parts, we can fix most issues on the spot.
            </p>
          </div>
          <div className="content-image">
            <img src='./images/AHAM-Standards-Appliances-removebg-preview.png' alt="Appliance repair services" />
          </div>
        </div>
        
        {/* Second row - image on left */}
        <div className="content-row reversed">
          <div className="content-image">
            <img src='./images/household-appliance-repair-removebg-preview.png' alt="Professional technicians" />
          </div>
          <div className="content-text">
            <h2>Why Choose Our Repair Service?</h2>
            <p>
              When your appliances break down, you need a service you can trust. Here's what sets us apart:
            </p>
            <ul>
              <li><strong>Local experts:</strong> We know your area and can respond quickly</li>
              <li><strong>Transparent pricing:</strong> No surprises - we explain costs upfront</li>
              <li><strong>Quality parts:</strong> We use manufacturer-approved components</li>
              <li><strong>Convenient scheduling:</strong> Evening and weekend appointments available</li>
              <li><strong>Eco-friendly:</strong> We repair rather than replace whenever possible</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;