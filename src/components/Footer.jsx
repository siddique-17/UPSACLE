import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Company Info */}
        <div className="footer__section">
          <div className="footer__brand">
            <img src={logo} alt="UPSCALE" />
            <span>UPSCALE</span>
          </div>
          <p className="footer__description">
            Empowering businesses to scale their e-commerce presence
            across major platforms. We provide comprehensive account
            management, optimization, and growth strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>About Us</Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop}>Services</Link>
            </li>
            <li>
              <Link to="/pricing" onClick={scrollToTop}>Pricing</Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__section">
          <h4>Contact Info</h4>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:info@upscale.com">info@upscale.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+919876543210">+91 1234567890</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Melapalayam, Tirunelveli - 627005</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>© 2024 UPSCALE. All rights reserved. Scaling your business to new heights.</p>
      </div>
    </footer>
  );
}
