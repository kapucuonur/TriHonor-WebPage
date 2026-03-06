// client/src/components/TestimonialSlider.jsx
import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    quote: "Project management and communication were excellent. We were informed at every step of the process. The final product exceeded our expectations.",
    author: "Mehmet Ozturk",
    role: "CEO, TechFlow",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "TriHonor transformed our outdated platform into a cutting-edge web application. Their attention to detail and design aesthetics is unmatched.",
    author: "Sarah Jenkins",
    role: "Product Manager, InnovateX",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "The AI integration effectively automated our customer support workflow. We saw a 40% reduction in response times within the first month.",
    author: "David Chen",
    role: "CTO, DataSphere",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    id: 4,
    quote: "Professional, timely, and incredibly skilled. They are not just developers; they are strategic partners who care about your business growth.",
    author: "Elena Rodriguez",
    role: "Founder, GreenSpace",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="testimonial-slider">
      <div className="slider-wrapper">
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Testimonial">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="testimonial-card">
          <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
          <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>

          <div className="testimonial-author-info">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="author-avatar"
            />
            <div>
              <h4 className="testimonial-author">- {testimonials[currentIndex].author}</h4>
              <span className="testimonial-role">{testimonials[currentIndex].role}</span>
            </div>
          </div>
        </div>

        <button className="slider-btn next" onClick={nextSlide} aria-label="Next Testimonial">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;