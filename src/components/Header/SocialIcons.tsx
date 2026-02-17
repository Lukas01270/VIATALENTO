import React from 'react';

// 👇 Importa las imágenes desde src/assets/
import facebookImg from '../../assets/facebook.png';
import instagramImg from '../../assets/instagram.png';
import whatsappImg from '../../assets/whatsapp.png';
import linkedinImg from '../../assets/linkedin.png';

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, ariaLabel, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="social-icon"
    >
      {children}
    </a>
  );
};

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <SocialIcon href="https://www.facebook.com/viatalentobolivia?locale=es_LA" ariaLabel="Facebook">
        <img src={facebookImg} alt="Facebook" />
      </SocialIcon>
      <SocialIcon href="https://instagram.com" ariaLabel="Instagram">
        <img src={instagramImg} alt="Instagram" />
      </SocialIcon>
      <SocialIcon href="https://wa.me/+59174800617" ariaLabel="WhatsApp">
        <img src={whatsappImg} alt="WhatsApp" />
      </SocialIcon>
      <SocialIcon href="https://linkedin.com" ariaLabel="LinkedIn">
        <img src={linkedinImg} alt="LinkedIn" />
      </SocialIcon>
      <span className="email">Email: viatalento2023@gmail.com</span>
    </div>
  );
};

export default SocialIcons;