// client/src/pages/ContactPage.jsx
import React from 'react';
import InfoCard from '../components/InfoCard';
import ContactForm from '../components/ContactForm'; // Reusing our existing component!
import './ContactPage.css';

// --- Data Layer ---
// Keep data separate from the presentation for easy updates.
const contactDetails = [
  { icon: 'fas fa-envelope', title: 'Email', text: 'trihonor@hotmail.com' },
  { icon: 'fas fa-phone', title: 'Phone', text: '+358 442359429' },
  { icon: 'fas fa-map-marker-alt', title: 'Location', text: 'FINLAND, Tampere 33580' },
  { icon: 'fas fa-clock', title: 'Hours', text: 'Monday-Friday: 9am-5pm EET' },
];

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch to discuss your project</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            {contactDetails.map(detail => (
              <InfoCard
                key={detail.title}
                iconClass={detail.icon}
                title={detail.title}
                text={detail.text}
              />
            ))}
          </div>

          {/* We simply drop our already-built ContactForm component right here! */}
          <ContactForm />
        </div>

        <div className="map-container">
          <h2>Our Location</h2>
          {/* Note the changes for React: `allowfullscreen` -> `allowFullScreen` and `style` is an object */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.332025134768!2d23.84918731599388!3d61.49816898226068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ed807afff6b4f%3A0x57884d087b2f7d0!2sTampere!5e0!3m2!1sen!2sfi!4v1620000000000!5m2!1sen!2sfi"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;