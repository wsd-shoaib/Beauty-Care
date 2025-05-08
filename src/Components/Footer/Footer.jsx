import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <h3 className="logo">BeautyCare</h3>
          <p>Your trusted beauty & wellness partner.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#booknow">Book Appointment</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <FaPhoneAlt /> +880 1234 567890
          </p>
          <p>
            <FaEnvelope /> info@beautycare.com
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BeautyCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
