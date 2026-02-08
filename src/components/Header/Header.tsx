import React from 'react';
import SocialIcons from './SocialIcons';
import Navigation from './Navigation';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <SocialIcons />
      </div>
      <div className="main-nav">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;