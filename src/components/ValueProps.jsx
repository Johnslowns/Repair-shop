// src/components/ValueProps.jsx
import React from 'react';


const ValueProps = () => {
  const props = [
    {
      icon: '⚡',
      title: 'Fast Service',
      description: 'Same-day repairs available for most appliances'
    },
    {
      icon: '🔧',
      title: 'Expert Technicians',
      description: 'Certified professionals with 10+ years experience'
    },
    {
      icon: '💰',
      title: 'Fair Pricing',
      description: 'No hidden fees - upfront pricing before work begins'
    },
    
  ];

  return (
    <section className="value-props">
      <div className="container">
        <div className="props-grid">
          {props.map((prop, index) => (
            <div key={index} className="prop-card">
              <div className="prop-icon">{prop.icon}</div>
              <h3>{prop.title}</h3>
              <p>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;