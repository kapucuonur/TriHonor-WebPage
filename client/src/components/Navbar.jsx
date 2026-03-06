import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="TriHonor Logo" className="logo-img" />
          <span>TriHonor</span>
        </NavLink>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink></li>
          <li><NavLink to="/portfolio" onClick={closeMobileMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink></li>
          <li><NavLink to="/contact" className="contact-button" onClick={closeMobileMenu}>Contact</NavLink></li>
          <li className="nav-toggle-item"><DarkModeToggle /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;