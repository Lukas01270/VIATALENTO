import React from 'react';
import ContactSection from './ContactSection';
import FooterColumn from './FooterColumn';
import './Footer.css';


const Footer: React.FC = () => {
  const aboutLinks = [
    { text: 'Sobre nosotros', href: '/about' },
    { text: 'Campus Virtual', href: 'https://campus.viatalento.org' },
  ];

  const servicesLinks = [
    { text: 'Consultorías', href: '/services' },
    { text: 'Cursos personales', href: '/courses' },
    { text: 'Cursos para empresas', href: '/courses' },
    { text: 'Mentorias', href: '/services' },
  ];

  const contactLinks = [
    { text: 'WhatsApp', href: 'https://wa.me/59174800617' },
    { text: 'Facebook', href: 'https://facebook.com/viatalentobolivia' },
    { text: 'LinkedIn', href: 'https://linkedin.com/company/viatalentobolivia' },
    { text: 'Correo Electrónico', href: 'mailto:viatalento@viatalento.org' },
  ];

  return (
    <footer className="footer">
      <ContactSection />
      
      {/* Contenedor para centrar todas las columnas */}
      <div className="footer-content">
        <div className="footer-columns">
          <FooterColumn title="Sobre nosotros" links={aboutLinks} />
          <FooterColumn title="Productos y Servicios" links={servicesLinks} />
          <FooterColumn title="Contactos" links={contactLinks} />
        </div>
        
        <div className="footer-logo">
          <img src="/assets/VIATALENTOPNG2.png" alt="QR de Pago" />
        </div>
        
        <div className="copyright">
          <p>© {new Date().getFullYear()} Via Talento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;