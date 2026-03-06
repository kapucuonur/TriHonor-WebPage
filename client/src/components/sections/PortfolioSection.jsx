import React from 'react';
import './PortfolioSection.css';

const projects = [
    {
        title: 'FinTech Dashboard',
        category: 'Web Application',
        description: 'Real-time financial analytics platform with AI-driven forecasting.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80'
    },
    {
        title: 'HealthAI Assistant',
        category: 'AI Solution',
        description: 'HIPAA-compliant chatbot for patient triage and scheduling.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80'
    },
    {
        title: 'E-Commerce Scale',
        category: 'Cloud Infrastructure',
        description: 'Serverless architecture handling 1M+ active users.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80'
    },
    {
        title: 'Neural Vision',
        category: 'Machine Learning',
        description: 'Computer vision system for automated quality control.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80'
    }
];

const PortfolioSection = () => {
    return (
        <section className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Selected Works.</h2>
                    <p className="section-subtitle">A glimpse into what we build.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-card">
                            <img src={project.image} alt={project.title} className="portfolio-image" />
                            <div className="portfolio-content">
                                <span className="portfolio-tag">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
