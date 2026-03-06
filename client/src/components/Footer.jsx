// client/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Software Development', path: '/services' },
    { name: 'AI Integration', path: '/services' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/about' },
  ],
  resources: [
    { name: 'Blog', path: '/blog' }, // Example for a future page
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Support', path: '/contact' },
  ]
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="TriHonor Logo" />
              <span>TriHonor</span>
            </Link>
            <p>Professional fullstack web, software and AI development services to transform your business.</p>
            <div className="social-links">
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Services</h3>
              <ul>{footerLinks.services.map(link => <li key={link.name}><Link to={link.path}>{link.name}</Link></li>)}</ul>
            </div>
            <div className="link-group">
              <h3>Company</h3>
              <ul>{footerLinks.company.map(link => <li key={link.name}><Link to={link.path}>{link.name}</Link></li>)}</ul>
            </div>
            <div className="link-group">
              <h3>Resources</h3>
              <ul>{footerLinks.resources.map(link => <li key={link.name}><Link to={link.path}>{link.name}</Link></li>)}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} TriHonor. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;