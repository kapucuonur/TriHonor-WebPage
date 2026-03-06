import React from 'react';
import { Link } from 'react-router-dom';
import './CompactSections.css';

const CompactAboutSection = () => {
    return (
        <section className="section compact-about-section">
            <div className="container">
                <h2 className="section-title">Who We Are.</h2>
                <p>We are a dedicated collective of engineers, designers, and strategists obsessed with perfection. We don't just write code; we architect the future of your business.</p>
                <Link to="/about" className="cta-button secondary" style={{ fontSize: '1.2rem' }}>Read our story ›</Link>
            </div>
        </section>
    );
};

export default CompactAboutSection;
