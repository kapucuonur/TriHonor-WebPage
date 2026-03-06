// client/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import BrowserRouter from the router library.
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

// 2. Import your global styles.
import './assets/styles/global.css';
import './assets/styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap your ENTIRE <App /> component with <BrowserRouter>.
        This provides all the routing functionality (like tracking the URL,
        handling link clicks, etc.) to your application. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);