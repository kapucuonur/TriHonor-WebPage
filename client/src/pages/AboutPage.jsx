// client/src/pages/AboutPage.jsx
import React from 'react';
import TeamMember from '../components/TeamMember'; // Import the new component
import ValueCard from '../components/ValueCard';   // Import the new component
import './AboutPage.css'; // We will create this CSS file next

// --- Data Layer ---
// It's a best practice to keep your data separate from your JSX.
// This makes it easy to add/remove team members or values later.
const teamData = [
  { imgSrc: 'https://randomuser.me/api/portraits/men/42.jpg', name: 'John Smith', title: 'Lead Developer' },
  { imgSrc: 'https://randomuser.me/api/portraits/women/63.jpg', name: 'Sarah Johnson', title: 'AI Specialist' },
  { imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg', name: 'Michael Chen', title: 'UX Designer' },
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
          <h1 className="page-title">About TriHonor</h1>
          <p className="page-subtitle">Professional fullstack development and AI solutions</p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>Founded in 2015, TriHonor began as a small team of passionate developers with a vision to create exceptional digital experiences. Today, we've grown into a full-service development agency serving clients worldwide.</p>
            <p>Our name represents the three core values we honor in every project: Technical Excellence, Reliable Partnerships, and Innovative Solutions.</p>
          </div>

          <div className="team-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              {/* --- Using the reusable component --- */}
              {teamData.map(member => (
                <TeamMember
                  key={member.name} // React needs a unique key for list items
                  imgSrc={member.imgSrc}
                  name={member.name}
                  title={member.title}
                />
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              {/* --- Using the reusable component --- */}
              {valuesData.map(value => (
                <ValueCard
                  key={value.title}
                  iconClass={value.iconClass}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;