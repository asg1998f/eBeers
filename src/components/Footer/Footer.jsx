import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            EBeers is your one-stop shop for the best craft beers from around the world. Enjoy a premium selection curated for true beer lovers.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@ebeers.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EBeers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
