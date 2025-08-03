import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call or email service)
    alert(`Thanks for contacting us, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact DEX Repairs</h1>
        <p>Have questions or need appliance repairs? Reach out to us!</p>
      </header>

      <div className="contact-container">
        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section">
          <h2>Our Details</h2>
          <div className="contact-info">
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p><a href="tel:+254743905708">0743905708</a></p>
            </div>

            <div className="info-item">
              <h3>✉️ Email</h3>
              <p><a href="mailto:contact@dexrepairs.com">contact@dexrepairs.com</a></p>
            </div>

            <div className="info-item">
              <h3>📍 Address</h3>
              <p>123 Repair Street, Appliance City, AC 12345</p>
            </div>

            <div className="info-item">
              <h3>🕒 Hours</h3>
              <p>Monday - Friday: 8 AM - 6 PM</p>
              <p>Saturday: 9 AM - 4 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Map Placeholder */}
          
        </section>
      </div>

      {/* Call-to-Action */}
      <section className="cta-section">
        <h2>Need Immediate Assistance?</h2>
        <p>Call us now at <strong>+1 (234) 567-890</strong> for emergency repairs!</p>
        <Link to="/services" className="cta-button">View Our Services</Link>
      </section>
    </div>
  );
};

export default ContactUs;