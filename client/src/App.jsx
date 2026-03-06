// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Utility component
import ScrollToTop from './components/ScrollToTop';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollToTopButton from './components/ScrollToTopButton';

// Page Components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    // This BrowserRouter wrapper is essential and should be here
    // or in main.jsx as we discussed. Keeping it here is also fine.
    <>
      <ScrollToTop />

      {/* This replaces your static <nav class="navbar">...</nav> */}
      <Navbar />

      {/* This replaces your <main id="main-content">...</main> */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* This replaces your static <footer class="footer">...</footer> */}
      <Footer />
      <Chatbot />
      <ScrollToTopButton />
    </>
  );
}

export default App;