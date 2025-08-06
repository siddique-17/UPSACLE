import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="UPSCALE" />
        <span>UPSCALE</span>
      </div>

      {/* Desktop Navigation */}
      <nav className={`links ${isMenuOpen ? 'links-mobile-open' : ''}`}>
        <Link 
          to="/" 
          className={isActive('/') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={isActive('/about') ? 'active' : ''} 
          onClick={closeMenu}
        >
          About Us
        </Link>
        <Link 
          to="/services" 
          className={isActive('/services') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link 
          to="/pricing" 
          className={isActive('/pricing') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Pricing
        </Link>
        <Link 
          to="/contact" 
          className={isActive('/contact') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>

      {/* FIXED: Use Link instead of button with nested Link */}
      <Link to="/contact" className="cta">Get Started</Link>

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
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            {/* FIXED: Use Link instead of button for mobile CTA too */}
            <Link to="/contact" className="mobile-cta" onClick={closeMenu}>Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
