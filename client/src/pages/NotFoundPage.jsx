// client/src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './NotFoundPage.css'; // We'll create this CSS file

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist on TriHonor." 
        noindex={true} 
      />
      <div className="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="cta-button">
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;