import React from 'react';
import './UIcss/Footer.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="global-footer">
      
      {/* The Clickable Title */}
      <div 
        className="footer-contact-link"
        onClick={() => onNavigate('contact')}
      >
        Contact Me
      </div>

      {/* The Copyright Text */}
      <div className="footer-copyright">
        <p>©2026 Shakira Bassl.</p>
        <p>All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;