import React from 'react';
import './ExpertiseSection.css';

const expertiseData = [
    { icon: 'fab fa-react', title: 'React ecosystem' },
    { icon: 'fab fa-node-js', title: 'Node.js & Express' },
    { icon: 'fas fa-database', title: 'SQL & NoSQL' },
    { icon: 'fab fa-python', title: 'Python & AI' },
    { icon: 'fab fa-aws', title: 'Cloud Infrastructure' },
    { icon: 'fas fa-mobile-alt', title: 'React Native' },
    { icon: 'fab fa-docker', title: 'Docker & DevOps' },
    { icon: 'fas fa-shield-alt', title: 'Cybersecurity' },
    { icon: 'fab fa-apple', title: 'iOS Development' },
    { icon: 'fas fa-desktop', title: 'macOS Development' },
    { icon: 'fab fa-android', title: 'Android Development' },
    { icon: 'fas fa-clock', title: 'Garmin CIQ' }
];

const ExpertiseSection = () => {
    return (
        <section className="section expertise-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technological Mastery.</h2>
                    <p className="section-subtitle">We build with the most robust and scalable technologies in the industry.</p>
                </div>
                <div className="expertise-grid">
                    {expertiseData.map((item, index) => (
                        <div key={index} className="expertise-card">
                            <i className={`expertise-icon ${item.icon}`}></i>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
