import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="UPSCALE" />
        {/* <span>UPSCALE</span> */}
      </div>

      {/* Desktop Navigation */}
      <nav className={`links ${isMenuOpen ? 'links-mobile-open' : ''}`}>
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/about" onClick={closeMenu}>About Us</a>
        <a href="/services" onClick={closeMenu}>Services</a>
        <a href="/pricing" onClick={closeMenu}>Pricing</a>
        <a href="/contact" onClick={closeMenu}>Contact</a>
      </nav>

      <button className="cta" onClick={handleGetStarted}>Get Started</button>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <nav className="mobile-menu">
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/about" onClick={closeMenu}>About Us</a>
            <a href="/services" onClick={closeMenu}>Services</a>
            <a href="/pricing" onClick={closeMenu}>Pricing</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
            <button className="mobile-cta" onClick={handleGetStarted}>Get Started</button>
          </nav>
        </div>
      )}
    </header>
  );
}
