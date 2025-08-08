import React, { useState, useEffect } from 'react';
import './WhatsAppFloat.css';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "7550194133"; // Replace with your number
    const message = "Hi! I'm interested in your e-commerce services. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {isVisible && (
        <div className={`whatsapp-container ${showChat ? 'chat-open' : ''}`}>
          {/* Chat Preview (Optional) */}
          {showChat && (
            <div className="whatsapp-chat-preview">
              <div className="chat-header">
                <div className="chat-info">
                  <div className="chat-avatar">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4>UPSCALE Support</h4>
                    <span className="online-status">● Online</span>
                  </div>
                </div>
                <button className="close-chat" onClick={toggleChat}>
                  <FaTimes />
                </button>
              </div>
              <div className="chat-body">
                <div className="chat-message">
                  <p>Hi there! 👋</p>
                  <p>How can we help you with your e-commerce business today?</p>
                </div>
                <button className="start-chat-btn" onClick={handleWhatsAppClick}>
                  Start Conversation
                </button>
              </div>
            </div>
          )}

          {/* WhatsApp Float Button */}
          <div className="whatsapp-float" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="whatsapp-icon" />
            {!showChat && (
              <div className="whatsapp-tooltip">
                <span>Chat with us on WhatsApp</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
