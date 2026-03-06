// client/src/components/sections/ServicesSection.jsx
import React from 'react';
import './ServicesSection.css'; // Import the new Bento styles
import wearableTechImg from '../../assets/images/wearable-tech.png';
import webDevImg from '../../assets/images/web-dev.png';
import softwareSolutionsImg from '../../assets/images/software-solutions.png';
import aiIntegrationImg from '../../assets/images/ai-integration.png';

const servicesData = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    desc: 'End-to-end web solutions. From blazing fast marketing sites to complex web applications.',
    image: webDevImg
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Software Solutions',
    desc: 'Custom software tailored to your workflows. Cross-platform, secure, and scalable.',
    image: softwareSolutionsImg
  },
  {
    icon: 'fas fa-brain',
    title: 'AI Integration',
    desc: 'Smart automation and insights. We integrate LLMs and machine learning into your business.',
    image: aiIntegrationImg
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Apps & Wearable Tech',
    desc: 'Custom mobile applications and wearable solutions. From iOS/Android to specialized fitness tech integrations.',
    image: wearableTechImg
  }
];

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pro-Grade Capabilities.</h2>
          <p className="section-subtitle">Everything you need to build your digital empire.</p>
        </div>

        <div className="bento-grid">
          {servicesData.map((service, index) => (
            <div key={index} className={`bento-card ${service.image ? 'has-image' : ''}`}>
              {service.image && (
                <div className="card-image">
                  <img src={service.image} alt={service.title} />
                </div>
              )}
              <div className="card-content">
                <i className={`bento-icon ${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;