import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h3>¿Preguntas?</h3>
        <p>Le ayudamos con su dudas, consultorias y asesorias</p>
      </div>
      <Link to="/contact" className="contact-button">
        Contacta con nosotros
      </Link>
    </div>
  );
};

export default ContactSection;