import React from 'react';

interface FooterColumnProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${link.text} - ${title}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;