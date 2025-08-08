import { useState } from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaComments,
  FaMobile,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaPaperPlane,
  FaBolt,
  FaLock,
  FaLightbulb
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = "7550194133"; // Your phone number without + and spaces
    const message = "Hi UPSCALE! I'm interested in your e-commerce services and would like to discuss my business growth opportunities.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Handle form submission with Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create FormData object
      const formDataObj = new FormData();
      
      // Add your Web3Forms access key
      formDataObj.append("access_key", "bd3075f8-c7c9-4913-9070-f157b5007271"); // Replace with your actual access key
      
      // Add form fields
      formDataObj.append("name", formData.fullName);
      formDataObj.append("email", formData.email);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("service", formData.service);
      formDataObj.append("message", formData.message);
      
      // Optional: Add custom subject
      formDataObj.append("subject", `New Contact Form Submission from ${formData.fullName}`);
      
      // Optional: Add redirect URL (where user goes after successful submission)
      // formDataObj.append("redirect", "https://yourwebsite.com/thank-you");

      // Convert FormData to JSON
      const object = Object.fromEntries(formDataObj);
      const json = JSON.stringify(object);

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        console.log("Success", result);
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
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
                <div className="contact-icon phone-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+91 7550194133</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>upscalegrowyourbusiness@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon address-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>Haven City, Karungulam, Tirunelveli – 627356</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon time-icon">
                  <FaClock />
                </div>
                <div className="contact-details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              {/* WhatsApp Quick Response */}
              <div className="whatsapp-section">
                <div className="whatsapp-icon">
                  <FaComments />
                </div>
                <div className="whatsapp-content">
                  <h3>Quick Response on WhatsApp</h3>
                  <p>Get instant answers to your questions. Chat with our experts on WhatsApp for immediate assistance.</p>
                  <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                    <span className="whatsapp-logo">
                      <FaWhatsapp />
                    </span>
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="success-message">
                  <FaCheckCircle className="status-icon" />
                  Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  <FaExclamationCircle className="status-icon" />
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
              
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Service Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and how we can help you grow..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="send-message-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ========== ADDITIONAL INFO ========== */}
        <section className="additional-info">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <FaBolt />
              </div>
              <h3>Fast Response</h3>
              <p>We respond to all inquiries within 24 hours, often much sooner. Your time is valuable to us.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaLock />
              </div>
              <h3>Confidential</h3>
              <p>All information shared with us is kept strictly confidential. Your business data is secure.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaLightbulb />
              </div>
              <h3>Free Consultation</h3>
              <p>Get a free initial consultation to discuss your e-commerce goals and growth opportunities.</p>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
