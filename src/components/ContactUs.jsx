import React from 'react';
import '../styles/ContactUs.css';



const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="company-details">
        <h2>Contact us</h2>
        <div className="detail-group">
          <h4>Company</h4>
          <p>D'Organics Diet</p>
        </div>
        <div className="detail-group">
          <h4>Company code</h4>
          <p>123456789</p>
        </div>
        <div className="detail-group">
          <h4>Address of registration</h4>
          <p>Plot No. 38/39, 1st Floor, APSFC Building,<br />Hyderabad-500 032,<br />TELANGANA, India. 
          </p>
        </div>
        <div className="detail-group">
          <h4>Need support?</h4>
          <p>Contact us: <a href="mailto:hello@dorganicschallenge.com">hello@dorganicschallenge.com</a></p>
        </div>
        <div className="detail-group">
          <h4>Address</h4>
          <p>APSFC Building,<br />Hyderabad,<br />India</p>
        </div>
        <div className="detail-group">
          <h4>Email address</h4>
          <p><a href="mailto:hello@dorganicschallenge.com">hello@dorganicschallenge.com</a></p>
        </div>
      </div>

      <div className="us-details">
        <div className="detail-group">
          <h4>Subscriptions and support provider for US customers</h4>
          <p>Karma Processing Incorporated</p>
        </div>
        <div className="detail-group">
          <h4>Company code</h4>
          <p>7138602</p>
        </div>
        <div className="detail-group">
          <h4>Address</h4>
          <p>16192 Coastal Highway,<br />India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
