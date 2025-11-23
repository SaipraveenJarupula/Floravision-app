import React from "react";
import "../styles/Footer.css";

import logo from "../assets/logo.png";
import logoText from "../assets/FloraVision.png";

export default function Footer() {
  return (
    <footer className="footer">

     
      <div className="footer-left">

        <div className="footer-logo-wrapper">
          <div className="footer-logo-box">
            <img src={logo} alt="logo" className="footer-logo-img" />
          </div>

          <div className="footer-logotext-box">
            <img src={logoText} alt="FloraVision" className="footer-logotext-img" />
          </div>
        </div>

        <div className="footer-description-box">
          <p className="footer-description">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted
            to thrive and elevate your living environment."
          </p>
        </div>
      </div>

      
      <div className="footer-center">

        <div className="quicklinks-title-box">
          <h3 className="quicklinks-title">Quick Link’s</h3>
        </div>

        <div className="quicklinks-list">
          <div className="quicklink-item"><a href="/">Home</a></div>
          <div className="quicklink-item"><a href="/">Types Of plant’s</a></div>
          <div className="quicklink-item"><a href="/">Contact</a></div>
          <div className="quicklink-item"><a href="/">Privacy</a></div>
        </div>

      </div>

      
      <div className="footer-right">

        <div className="subscribe-title-box">
          <h3 className="subscribe-title">For Every Update.</h3>
        </div>

        <div className="subscribe-input-wrapper">
          <div className="email-input-box">
            <input type="email" placeholder="Enter Email" className="email-input" />
          </div>

          <div className="subscribe-btn-box">
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>

      </div>
      <div className="footer-section">
        <span>FB</span>
        <span>TW</span>
        <span>LI</span>
      </div>

      
      <div className="footer-bottom">
        FloraVision © all right reserve
      </div>

    </footer>
  );
}
