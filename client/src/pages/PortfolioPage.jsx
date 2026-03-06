// client/src/pages/PortfolioPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from '../components/PortfolioCard';
import portfolioAiImg from '../assets/portfolio-ai.png';
import wearableTechImg from '../assets/images/wearable-tech.png';
import garminCiqImg from '../assets/images/garmin-ciq.png';
import './PortfolioPage.css';

// --- Data Layer ---
// The single source of truth for all portfolio items.
const allPortfolioItems = [
  { category: 'web', imgSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800', title: 'E-commerce Platform', desc: 'Custom online store with AI recommendations', link: '/portfolio/ecommerce' },
  { category: 'software', imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800', title: 'SAAS Application', desc: 'Business analytics dashboard', link: '/portfolio/saas-app' },
  { category: 'ai', imgSrc: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800', title: 'AI Chat Assistant', desc: 'Customer support NLP solution', link: '/portfolio/ai-chat' },
  { category: 'web', imgSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800', title: 'Corporate Website', desc: 'Sleek, modern, and responsive corporate presence', link: '/portfolio/corporate-site' },
  { category: 'ai', imgSrc: portfolioAiImg, title: 'Image Recognition API', desc: 'AI-powered service for object detection', link: '/portfolio/image-api' },
  { category: 'wearable', imgSrc: wearableTechImg, title: 'Performance Tracker App', desc: 'Real-time biometric monitoring for elite athletes', link: '/portfolio/performance-tracker' },
  { category: 'wearable', imgSrc: garminCiqImg, title: 'Elite Pro Watch Face', desc: 'Advanced Garmin Connect IQ data-rich interface', link: '/portfolio/elite-watchface' },
];

const filterButtons = ['all', 'web', 'software', 'ai', 'wearable'];

function PortfolioPage() {
  // --- State ---
  // A single piece of state to track the active filter category.
  const [activeFilter, setActiveFilter] = useState('all');

  // --- Derived State ---
  // The list of items to display is calculated based on the active filter.
  // No need for a separate `useState` for the filtered items.
  const filteredItems = activeFilter === 'all'
    ? allPortfolioItems
    : allPortfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="page-title">Our Portfolio</h1>
        <p className="page-subtitle">Explore our recent projects and success stories</p>

        <div className="portfolio-filter">
          {filterButtons.map(filter => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {/* Capitalize the first letter for display */}
              {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <PortfolioCard
              key={item.title}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.desc}
              link={item.link}
            />
          ))}
        </div>

        <div className="portfolio-cta">
          <h2>Ready to start your project?</h2>
          <p>We'd love to hear about what you're working on</p>
          {/* Use React Router's Link component directly */}
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;