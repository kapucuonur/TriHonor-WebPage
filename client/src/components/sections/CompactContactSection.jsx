import React from 'react';
import { Link } from 'react-router-dom';
import './CompactSections.css';

const CompactContactSection = () => {
    return (
        <section id="contact" className="section compact-contact-section">
            <div className="cta-container">
                <h2>Ready to Start?</h2>
                <p className="cta-text">Let's build something extraordinary together.</p>
                <Link to="/contact" className="btn-large">Get in Touch</Link>
            </div>
        </section>
    );
};

export default CompactContactSection;
