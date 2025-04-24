// src/components/Testimonials.jsx
import React from 'react';


const Testimonials = () => {
  const testimonials = [
    {
      quote: "My refrigerator was fixed in under an hour! The technician was knowledgeable and courteous. Highly recommend!",
      author: "Sarah J.",
      rating: "★★★★★"
    },
    {
      quote: "After being quoted 28000 for a new washing machine, these guys fixed it for 2500. Saved me so much money!",
      author: "Michael T.",
      rating: "★★★★★"
    },
    {
      quote: "Quick response, fair pricing, and excellent work. Will definitely call them first for any appliance issues.",
      author: "Outspan Bites Hotel.",
      rating: "★★★★☆"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">{testimonial.rating}</div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;