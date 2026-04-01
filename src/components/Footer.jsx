import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* <div className="footer-left">
        <a href="#privacy">Dorganic's Privacy Policy</a>
        <a href="#refund">Dorganic's Refund & Return Policy</a>
        <a href="#terms">Dorganic's Terms & Conditions</a>
      </div> */}

      <div className="footer-center">
        <p>
          © 2024 D'Organics | Developed by{" "}
          <a href="https://tsoftware.in">T Software</a>
        </p>
      </div>

      <div className="footer-right">
        <a href="https://www.facebook.com/profile.php?id=100083855103269&mibextid=LQQJ4d">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/dorganics.health?igsh=ajJhOXVjaGcxaW80">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
