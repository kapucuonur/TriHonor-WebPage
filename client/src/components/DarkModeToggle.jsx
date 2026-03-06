import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMode();
    }
  };

  return (
    <div
      className="dark-mode-toggle"
      onClick={toggleMode}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
    </div>
  );
}

export default DarkModeToggle;