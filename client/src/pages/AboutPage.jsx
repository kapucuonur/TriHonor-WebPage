// client/src/pages/AboutPage.jsx
import React from 'react';
import TeamMember from '../components/TeamMember'; // Import the new component
import ValueCard from '../components/ValueCard';   // Import the new component
import './AboutPage.css'; // We will create this CSS file next

// --- Data Layer ---
// It's a best practice to keep your data separate from your JSX.
// This makes it easy to add/remove team members or values later.
const teamData = [
  { imgSrc: 'https://github.com/kapucuonur.png', name: 'Onur Kapucu', title: 'Founder & Full Stack Developer' },
];

const valuesData = [
  { iconClass: 'fas fa-medal', title: 'Quality', description: 'We deliver solutions built to last with clean, maintainable code.' },
  { iconClass: 'fas fa-lightbulb', title: 'Innovation', description: 'We stay ahead of technology trends to provide cutting-edge solutions.' },
  { iconClass: 'fas fa-hands-helping', title: 'Partnership', description: 'We work collaboratively with our clients for mutual success.' },
];

function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-header">
          <h1 className="page-title animate__animated animate__fadeInDown">About TriHonor</h1>
          <p className="page-subtitle animate__animated animate__fadeInUp">Professional fullstack development and AI solutions</p>
        </div>

        <div className="about-content">
          <div className="about-story animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h2>Our Story</h2>
            <p>Founded in 2022, TriHonor began as an IT service with a vision to create exceptional digital experiences. What started as a solo endeavor by Onur Kapucu has grown into a comprehensive development agency delivering intuitive web, software, and AI solutions.</p>
            <p>With a background spanning both sports coaching and software engineering, Onur brings a unique perspective to problem-solving. He leverages his discipline and analytical mindset to build high-performance applications tailored to clients' needs, from fitness tech integrations to full-fledged business dashboards.</p>
            <p>Our name represents the three core values we honor in every project: Technical Excellence, Reliable Partnerships, and Innovative Solutions.</p>
          </div>

          <div className="team-section">
            <h2 className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>Our Team</h2>
            <div className="team-grid">
              {/* --- Using the reusable component --- */}
              {teamData.map((member, index) => (
                <div key={member.name} className="animate__animated animate__fadeInUp" style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}>
                  <TeamMember
                    imgSrc={member.imgSrc}
                    name={member.name}
                    title={member.title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2 className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>Our Values</h2>
            <div className="values-grid">
              {/* --- Using the reusable component --- */}
              {valuesData.map((value, index) => (
                <div key={value.title} className="animate__animated animate__fadeInUp" style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}>
                  <ValueCard
                    iconClass={value.iconClass}
                    title={value.title}
                    description={value.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;