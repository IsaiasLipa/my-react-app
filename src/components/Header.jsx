
import './Header.css';
import Logo1_White from '../assets/Logo1_White.png';
import { useState } from 'react';

export default function Header({ texts }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo-background">
          <img src={Logo1_White} alt="Lipaid Logo" className="logo" />
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Nav links */}
        <div className={`nav-buttons ${isMenuOpen ? "open" : ""}`}>
          <a className="nav-button" href="#home" onClick={() => setIsMenuOpen(false)}>
            {texts.home}
          </a>
          <a className="nav-button" href="#about" onClick={() => setIsMenuOpen(false)}>
            {texts.about}
          </a>
          <a className="nav-button" href="#contact" onClick={() => setIsMenuOpen(false)}>
            {texts.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
