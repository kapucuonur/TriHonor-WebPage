import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Assuming the API is available at this endpoint based on server/src/app.js
      await axios.post('http://localhost:5000/api/contact', formData);
      
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: err.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <div className="contact-form">
      <h3>Send us a Message</h3>
      
      {status.success && (
        <div className="success-message">
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {status.error && (
        <div className="error-text" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Project Inquiry"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status.submitting}
          className="btn-primary" // Assuming global button class or similar
          style={{ 
            padding: '0.75rem', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: status.submitting ? 'not-allowed' : 'pointer',
            opacity: status.submitting ? 0.7 : 1
          }}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
