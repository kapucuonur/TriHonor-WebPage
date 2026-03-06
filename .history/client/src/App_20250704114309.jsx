// client/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Utility component
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; // We will create this next
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

// Page Components
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    // This BrowserRouter wrapper is essential and should be here
    // or in main.jsx as we discussed. Keeping it here is also fine.
    <BrowserRouter>
      <ScrollToTop />
      <DarkModeToggle />
      
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
    </BrowserRouter>
  );
}

export default App;