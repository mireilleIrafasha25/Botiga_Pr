import React from "react";
import "../styles/footer2.css"; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h2>Stay up to date</h2>
          <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
          <div className="newsletter-input" style={{borderBottom:"1px solid white",marginTop:"50px"}}>
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Happy to help</h2>
          <p>1279 Thorn Street, NY</p>
          <p>Phone: 307-549-2480</p>
          <p>Mail: demo@gmail.com</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTimes />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      
      <div className="footer-links">
        <div className="column">
          <h3>SHOP</h3>
          <ul>
            <li>Body Lotion</li>
            <li>Computer Gadget</li>
            <li>Electronics</li>
          </ul>
        </div>
        <div className="column">
          <h3>COMPANY</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="column">
          <h3>ABOUT</h3>
          <ul>
            <li>Who We Are</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column accept-for">
          <h3>ACCEPT FOR</h3>
          <div className="payment-icons">
            {/* <FaCcPaypal className="payment-icon" /> */}
            {/* <FaCcMastercard className="payment-icon" /> */}
            <FaCcVisa className="payment-icon" />
            <FaApplePay className="payment-icon" />
            <FaGooglePay className="payment-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
