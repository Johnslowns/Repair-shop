// src/components/FAQ.jsx
import React, { useState } from 'react';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can you repair my appliance?",
      answer: "We offer same-day service for most repairs. Once you contact us, we'll schedule an appointment at your earliest convenience, often within 24 hours."
    },
    {
      question: "What brands do you service?",
      answer: "We repair all major brands including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, and more. If you don't see your brand listed, just ask!"
    },
    {
      question: "Do you charge for diagnostic visits?",
      answer: "We charge a small diagnostic fee that covers the technician's time to assess the issue. This fee is waived if you proceed with the repair."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, cash, and checks. Payment is due upon completion of the repair."
    },
    {
      question: "Are your technicians certified?",
      answer: "Yes, all our technicians are certified and receive ongoing training to stay current with the latest appliance technologies and repair techniques."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;