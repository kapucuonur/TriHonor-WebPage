// client/src/pages/ServicesPage.jsx
import React from 'react';
import ServiceDetailCard from '../ServiceDetailCard';
import ProcessStep from '../ProcessStep';
import './ServicesPage.css';

// --- Data Layer ---
const servicesData = [
  { icon: 'fas fa-code', title: 'Fullstack Web Development', shortDesc: 'From concept to launch, we craft end-to-end web solutions that blend stunning front-end design with robust, high-performance back-end engineering.', longDesc: 'Elevate your digital presence with a comprehensive web solution engineered for growth. We architect complete digital experiences from the captivating UI to the powerful and secure back-end that runs your operations, ensuring your platform performs flawlessly under pressure.' },
  { icon: 'fas fa-laptop-code', title: 'Software Development', shortDesc: 'Go beyond off-the-shelf products with bespoke software, precisely engineered to fit your unique workflows and solve your most complex business challenges.', longDesc: 'When standard software falls short, our bespoke services provide the perfect fit. We immerse ourselves in your workflows to design and deploy custom software that streamlines processes, empowers your team, and gives you a powerful asset built for your success.' },
  { icon: 'fas fa-brain', title: 'AI Integration', shortDesc: 'Unlock the transformative power of AI. We integrate intelligent automation and predictive analytics to uncover critical insights and give you a decisive competitive edge.', longDesc: 'Step into the future by unlocking the strategic advantage of AI. We integrate custom machine learning models and intelligent automation to solve real-world problems, turning your data from a byproduct into your most valuable asset.' }
];

const processStepsData = [
  { number: 1, title: 'Discovery', description: 'We analyze your requirements and goals' },
  { number: 2, title: 'Planning', description: 'We create a detailed project roadmap' },
  { number: 3, title: 'Development', description: 'We build your solution with regular updates' },
  { number: 4, title: 'Delivery', description: 'We deploy and provide training/support' }
];

function ServicesPage() {
  return (
    <section className="services-page">
      <div className="container">
        <h1 className="page-title animate__animated animate__fadeInDown">Our Services</h1>
        <p className="page-subtitle">Comprehensive digital solutions tailored to your business needs</p>
        
        <div className="services-detail">
          {servicesData.map(service => (
            <ServiceDetailCard key={service.title} {...service} />
          ))}
        </div>

        <div className="process-section">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            {processStepsData.map(step => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;