// client/src/pages/TermsOfServicePage.jsx
import React from 'react';
import './LegalPages.css';

const TermsOfServicePage = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: March 6, 2026</p>

                <div className="legal-content">
                    <p>Welcome to TriHonor. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>By using this website, you signify your acceptance of these Terms of Service. If you do not agree to these terms, please do not use our site.</p>

                    <h2>2. Services Provided</h2>
                    <p>TriHonor provides software development, AI integration, and consulting services. All services are subject to specific project agreements and contracts.</p>

                    <h2>3. Intellectual Property</h2>
                    <p>Unless otherwise stated, TriHonor and/or its licensors own the intellectual property rights for all material on TriHonor. All intellectual property rights are reserved.</p>

                    <h2>4. User Responsibilities</h2>
                    <p>As a user of our website, you agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information during interactions.</li>
                        <li>Use the website only for lawful purposes.</li>
                        <li>Refrain from any activity that could damage or disrupt the website's functionality.</li>
                    </ul>

                    <h2>5. Limitation of Liability</h2>
                    <p>In no event shall TriHonor be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or services.</p>

                    <h2>6. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which TriHonor operates.</p>

                    <h2>7. Changes to Terms</h2>
                    <p>TriHonor reserves the right to update or change these Terms of Service at any time. Your continued use of the website following any changes signifies your acceptance of the new terms.</p>

                    <h2>8. Contact Information</h2>
                    <p>If you have any questions about these Terms of Service, please contact us at info@trihonor.com.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
