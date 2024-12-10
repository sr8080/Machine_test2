
import React from 'react';
import '../styles/Footer.css'; 
import image from '../image.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h3>CONNECT WITH US</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-section">
          <div className='logoo'>
        <img src={image} alt="Logo" className="footer-logo" />
        </div>
          <h3>DEEPNET SOFT</h3>
          <p>Innovating and delivering the best.</p>
          
        </div>
        <div className="footer-section">
          <h3>FIND US</h3>
          <p>123 Main Street<br />City, Country 10001</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 DEEP NET SOFT. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
