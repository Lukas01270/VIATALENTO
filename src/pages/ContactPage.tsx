import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessage('');

    // Tus credenciales de EmailJS
    const serviceID = 'service_m3fnw9r';
    const templateID = 'template_m5af217';
    const publicKey = 'MB9-2UOTHPuik0quU';

    emailjs.sendForm(serviceID, templateID, e.currentTarget, publicKey)
      .then(() => {
        setMessage('¡Mensaje enviado correctamente! Te responderemos pronto.');
        setIsSending(false);
        (e.target as HTMLFormElement).reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      {/* Sección 1: Formulario de contacto */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-content">
            <div className="form-header">
              <h2>Estamos Atentos A Tus Dudas Y Consultas</h2>
              <p>Envía un mensaje y te responderemos lo antes posible.</p>
            </div>
            
            {message && (
              <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
                {message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa y/o Institución</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Celular</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Escribe tu duda o consulta</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="send-button" disabled={isSending}>
                {isSending ? 'Enviando...' : 'Enviar ahora'}
              </button>
            </form>
          </div>
          
          <div className="form-image">
            <img src="/assets/VIATALENTOPNG2.png" alt="Via Talento Logo" />
          </div>
        </div>
      </section>

      {/* Sección 2: Información de contacto */}
      <section className="contact-info-section">
        <div className="contact-info">
          <div className="info-item">
            <div className="icon">
              <span>@</span>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>viatalento@viatalento.org</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <span>📞</span>
            </div>
            <div className="info-content">
              <h3>Llamadas</h3>
              <p>+591 74800617</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/assets/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/assets/instagram.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* Sección 3: Preguntas frecuentes */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Preguntas Frecuentes</h2>
          <p>«Encuentra la solución a tu inquietud.»</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Qué Tipo De Empresas Pueden Beneficiarse De Los Servicios De VIATALENTO?</h3>
            <p>VIATALENTO ofrece servicios adaptados tanto para organizaciones públicas como privadas, así como para emprendedores individuales que buscan mejorar su gestión empresarial.</p>
          </div>
          <div className="faq-item">
            <h3>¿Ofrecen Cursos Personalizados Para Empresas?</h3>
            <p>Sí, en VIATALENTO ofrecemos cursos personalizados que se adaptan a las necesidades específicas de tu empresa, diseñados para abordar los desafíos particulares que enfrenta tu equipo.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cómo Puedo Inscribirme En Los Cursos De VIATALENTO?</h3>
            <p>Para inscribirte en nuestros cursos, simplemente visita nuestra página web y selecciona el curso de tu interés. Luego, sigue los pasos indicados para completar el proceso de inscripción de manera rápida y sencilla.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;