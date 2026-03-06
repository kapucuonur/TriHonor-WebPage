// client/src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

// --- Data Layer ---
const servicesData = [
  { icon: 'fas fa-code', title: 'Fullstack Web Development', desc: 'From concept to launch, we craft end-to-end web solutions that blend stunning front-end design with robust, high-performance back-end engineering.' },
  { icon: 'fas fa-laptop-code', title: 'Software Development', desc: 'Go beyond off-the-shelf products with bespoke software, precisely engineered to fit your unique workflows and solve your most complex business challenges.' },
  { icon: 'fas fa-brain', title: 'AI Integration', desc: 'Unlock the transformative power of AI. We integrate intelligent automation and predictive analytics to uncover critical insights and give you a decisive competitive edge.' },
  { icon: 'fas fa-mobile-alt', title: 'Mobile Solutions', desc: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices.' },
  { icon: 'fas fa-cloud', title: 'Cloud Infrastructure', desc: 'Scalable, secure, and cost-effective cloud architectures deployed on AWS, Azure, or Google Cloud Platform.' },
  { icon: 'fas fa-shield-alt', title: 'Cybersecurity', desc: 'Protect your digital assets with our comprehensive security audits, penetration testing, and secure coding practices.' },
  { icon: 'fas fa-cogs', title: 'Software Engineering', desc: 'Rigorous engineering practices for large-scale systems. We prioritize maintainability, performance, and architectural integrity.' },
  { icon: 'fas fa-watch-fitness', title: 'Apps & Wearable Tech', desc: 'Custom software for wearable devices, integrating biometric data for real-time performance tracking and health monitoring.' },
  { icon: 'fas fa-microchip', title: 'Garmin CIQ', desc: "Specialized development for Garmin's Connect IQ platform, including custom watch faces, data fields, and apps for endurance athletes." }
];

const processStepsData = [
  { number: '01', title: 'Discovery', description: 'We analyze your requirements and goals.' },
  { number: '02', title: 'Planning', description: 'We create a detailed project roadmap.' },
  { number: '03', title: 'Development', description: 'We build your solution with regular updates.' },
  { number: '04', title: 'Delivery', description: 'We deploy and provide training/support.' }
];

function ServicesPage() {
  return (
    <section className="services-page">
      <div className="services-container">
        <h1 className="page-title animate__animated animate__fadeInDown">Our Services</h1>
        <p className="page-subtitle animate__animated animate__fadeInUp">Comprehensive digital solutions tailored to your business needs.</p>

        {/* Bento Grid layout with inline cards */}
        <div className="services-detail-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card-icon">
                <i className={service.icon}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <Link to="/contact" className="service-learn-more">
                Start Project <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2>Our Development Process</h2>
          <div className="process-timeline">
            {processStepsData.map((step, index) => (
              <div key={index} className="process-step-item animate__animated animate__fadeIn" style={{ animationDelay: `${0.5 + (index * 0.2)}s` }}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;