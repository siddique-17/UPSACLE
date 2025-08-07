import { useState, useEffect } from 'react';
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="UPSCALE" />
        {/* <span>UPSCALE</span> */}
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

      <Link to="/contact" className="cta">Get Started</Link>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Updated Mobile Menu Overlay with Logo */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {/* Mobile Menu Header with Logo */}
            <div className="mobile-menu-header">
              <div className="mobile-brand">
                <img src={logo} alt="UPSCALE" />
                {/* <span>UPSCALE</span> */}
              </div>
              {/* <button className="mobile-close-btn" onClick={closeMenu}>
                ✕
              </button> */}
            </div>
            
            {/* Navigation Links */}
            <div className="mobile-menu-links">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
              <Link to="/services" onClick={closeMenu}>Services</Link>
              <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
            
            {/* CTA Button */}
            <Link to="/contact" className="mobile-cta" onClick={closeMenu}>Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
