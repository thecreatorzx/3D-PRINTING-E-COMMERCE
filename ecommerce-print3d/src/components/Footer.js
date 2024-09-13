import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are a leading provider of custom 3D printed parts. Our mission
              is to deliver high-quality products that meet the specific needs
              of our customers.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="footer-link">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="footer-link">
                  Cart
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              Email: support@example.com
              <br />
              Phone: +1-234-567-890
            </p>
          </div>
        </div>
        <div className="footer-bottom text-center mt-4">
          <p className="footer-text mb-0">
            &copy; 2024 My Shop. All Rights Reserved.
          </p>
          <div className="social-links mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
