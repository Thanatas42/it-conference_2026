import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>ИТ/РИТМ</h1>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>О конференции</a>
            <a href="#speakers" onClick={() => setIsMenuOpen(false)}>Спикеры</a>
            <a href="#schedule" onClick={() => setIsMenuOpen(false)}>Программа</a>
            <a href="#registration" onClick={() => setIsMenuOpen(false)}>Регистрация</a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
