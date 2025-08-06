import './Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* ========== CONTACT HERO ========== */}
        <section className="contact-hero">
          <div className="contact-hero__content">
            <h1>Get In <span className="accent">Touch</span></h1>
            <p>
              Ready to scale your e-commerce business? Contact us today for a free consultation
              and discover how we can help you achieve your growth goals.
            </p>
          </div>
        </section>

        {/* ========== CONTACT CONTENT ========== */}
        <section className="contact-content">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="contact-item">
                <div className="contact-icon phone-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+91 1234567890</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon email-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@upscale.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon address-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>Melapalayam, Tirunelveli - 627005</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon time-icon">🕐</div>
                <div className="contact-details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              {/* WhatsApp Quick Response */}
              <div className="whatsapp-section">
                <div className="whatsapp-icon">💬</div>
                <div className="whatsapp-content">
                  <h3>Quick Response on WhatsApp</h3>
                  <p>Get instant answers to your questions. Chat with our experts on WhatsApp for immediate assistance.</p>
                  <button className="whatsapp-btn">
                    <span className="whatsapp-logo">📱</span>
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              
              <form className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <br />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Service Interest</label>
                    <select>
                      <option value="">Select a service</option>
                      <option value="amazon">Amazon Account Management</option>
                      <option value="flipkart">Flipkart Account Management</option>
                      <option value="jiomart">JioMart Account Management</option>
                      <option value="meesho">Meesho Account Management</option>
                      <option value="optimization">Product Optimization</option>
                      <option value="advertising">Advertising Management</option>
                      <option value="mentoring">Expert Mentoring</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell us about your business and how we can help you grow..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="send-message-btn">
                  Send Message 📤
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ========== ADDITIONAL INFO ========== */}
        <section className="additional-info">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>We respond to all inquiries within 24 hours, often much sooner. Your time is valuable to us.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🔒</div>
              <h3>Confidential</h3>
              <p>All information shared with us is kept strictly confidential. Your business data is secure.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💡</div>
              <h3>Free Consultation</h3>
              <p>Get a free initial consultation to discuss your e-commerce goals and growth opportunities.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
