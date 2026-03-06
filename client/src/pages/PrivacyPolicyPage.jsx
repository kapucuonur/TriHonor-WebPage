// client/src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import './LegalPages.css';

const PrivacyPolicyPage = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: March 6, 2026</p>

                <div className="legal-content">
                    <p>At TriHonor, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>

                    <h2>1. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li><strong>Personal Identification Information:</strong> Name, email address, and phone number when you contact us or submit a form.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                        <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul>
                        <li>To provide and maintain our services.</li>
                        <li>To communicate with you regarding your inquiries or projects.</li>
                        <li>To improve our website's functionality and user experience.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>

                    <h2>3. Data Protection</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by authorized personnel.</p>

                    <h2>4. Third-Party Sharing</h2>
                    <p>We do not sell, trade, or otherwise transfer your personal identification information to outside parties, except for trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>

                    <h2>5. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at support@trihonor.com.</p>

                    <h2>6. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us via our contact form or at support@trihonor.com.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
