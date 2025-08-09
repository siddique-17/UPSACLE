import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

// Constants
const WHATSAPP_CONFIG = {
  phoneNumber: "7550194133",
  message: "Hi UPSCALE! I'm interested in your e-commerce services and would like to discuss my business growth opportunities."
};

const NAVIGATION_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Memoized WhatsApp handler
  const handleWhatsAppClick = useCallback(() => {
    const { phoneNumber, message } = WHATSAPP_CONFIG;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }, []);

  // Menu handlers
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Check if current path is active
  const isActive = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  // Body scroll management
  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Render navigation links
  const renderNavLinks = useCallback((isMobile = false) => {
    return NAVIGATION_LINKS.map(({ path, label }) => (
      <Link 
        key={path}
        to={path} 
        className={isActive(path) ? 'active' : ''} 
        onClick={closeMenu}
      >
        {label}
      </Link>
    ));
  }, [isActive, closeMenu]);

  return (
    <header className="navbar">
      {/* Brand */}
      <div className={`brand ${isMenuOpen ? 'brand-hidden' : ''}`}>
        <img src={logo} alt="UPSCALE" />
      </div>

      {/* Desktop Navigation */}
      <nav className="links">
        {renderNavLinks()}
      </nav>

      {/* Desktop CTA */}
      <button className="cta" onClick={handleWhatsAppClick}>
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {/* Mobile Header */}
            <div className="mobile-menu-header">
              <div className="mobile-brand">
                <img src={logo} alt="UPSCALE" />
                <span>UPSCALE</span>
              </div>
            </div>
            
            {/* Mobile Links */}
            <div className="mobile-menu-links">
              {renderNavLinks(true)}
            </div>
            
            {/* Mobile CTA */}
            <button className="mobile-cta" onClick={handleWhatsAppClick}>
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
