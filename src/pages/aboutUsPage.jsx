import React from 'react';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Theuri',
      role: 'Lead Engineer',
      bio: 'With 7+ years in appliance repair, John ensures every repair meets our high standards.',
      image: '/images/john-profile.jpeg'
    },
    {
      id: 2,
      name: 'Martha Wanjiru',
      role: 'Customer Service Manager',
      bio: 'Yvonne makes sure every customer gets the best service experience possible.',
      image: 'team-member2.jpg'
    },
    {
      id: 3,
      name: 'Edwin Muchiri',
      role: 'Senior Technician',
      bio: ' Edwin specializes in complex refrigerator and washing machine repairs.',
      image: 'team-member3.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "DEX Repairs saved my refrigerator! Quick service and fair pricing. Highly recommend!",
      author: "Martha Wanjiru",
      rating: 5
    },
    {
      id: 2,
      quote: "Professional and knowledgeable technicians. Fixed my oven in under an hour!",
      author: "Caleb Muthama",
      rating: 5
    },
    {
      id: 3,
      quote: "Great customer service. They explained the issue clearly and didn't overcharge.",
      author: "Paul Irungu",
      rating: 4
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Trusted appliance repair services since 2010</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-container">
        {/* Company Intro */}
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            DEX Repairs was founded in 2019 with a simple mission: to provide reliable, 
            affordable appliance repair services with exceptional customer care. What started 
            as a small local business has grown into the most trusted appliance repair service 
            in the region.
          </p>
          <p>
            Our team of certified technicians has collectively repaired over 1,000 appliances, 
            from refrigerators to washing machines. We take pride in our work and stand behind 
            every repair with a satisfaction guarantee.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="about-section">
          <h2>Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🔧 Quality Repairs</h3>
              <p>We use premium parts and proven techniques to ensure long-lasting fixes.</p>
            </div>
            <div className="value-card">
              <h3>⏱️ Fast Service</h3>
              <p>Most repairs completed same-day with emergency slots available.</p>
            </div>
            <div className="value-card">
              <h3>💵 Fair Pricing</h3>
              <p>No hidden fees - we provide upfront pricing before any work begins.</p>
            </div>
            <div className="value-card">
              <h3>🛡️ Warranty Protected</h3>
              <p>All repairs come with a 90-day parts and labor warranty.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                {/* Replace with actual image */}
                <img src={`${member.image}`} className='team-image'/>
                
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="about-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <cite>- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Repair Your Appliances?</h2>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Contact Us</Link>
          <Link to="/services" className="cta-button secondary">Our Services</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;