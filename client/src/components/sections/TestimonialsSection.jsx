// client/src/components/sections/TestimonialsSection.jsx
import React from 'react';
import TestimonialSlider from '../TestimonialSlider'; // Our existing component!

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Client Success Stories</h2>
        <p className="section-subtitle">What our clients say about working with us</p>
        <TestimonialSlider />
      </div>
    </section>
  );
}
export default TestimonialsSection;