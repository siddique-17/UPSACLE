import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';
// Import professional icons
import { 
  FaLinkedin, 
  FaInstagram, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

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
          
          {/* Social Media Links */}
          <div className="footer__social">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/upscale_grow_your_business/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/upscale_grow_your_business/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/7550194133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
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
            <FaEnvelope className="contact-icon" />
            <a href="mailto:upscalegrowyourbusiness@gmail.com">upscalegrowyourbusiness@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+917550194133">+91 7550194133</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="loc">Haven City, Karungulam, Tirunelveli – 627356</span>
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
