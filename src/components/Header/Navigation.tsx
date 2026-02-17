import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <Link to={to} className="nav-item">
      {children}
    </Link>
  );
};

const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      {/* Logo a la izquierda */}
      <img src="/assets/viatalentoH.png" alt="Logo" className="logo" />
      
      {/* Contenedor para los enlaces de navegación (centrado) */}
      <div className="nav-center">
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="/about">Sobre nosotros</NavItem>
        <NavItem to="/services">Servicios</NavItem>
        <NavItem to="/courses">Cursos</NavItem>
        <NavItem to="/contact">Contacto</NavItem>
      </div>
      
      {/* Botón Campus Virtual a la derecha (fuera del menú) */}
      <a
        href="https://campus.viatalento.org"
        target="_blank"
        rel="noopener noreferrer"
        className="campus-button"
      >
        Campus Virtual
      </a>
    </div>
  );
};

export default Navigation;