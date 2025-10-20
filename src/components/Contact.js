import React from 'react';
import '../styles.css';

function Contact() {
  return (
    <div>
      <div className="section-title">Contact Us</div>

      <section className="contact-section">
        {/* You can add a map or image here if you like */}

        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Job Hunt Lane, Hyderabad, India</p>
            </div>
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <p>contact@jobhunt.com</p>
            </div>
            <div className="info-box">
              <i className="fas fa-phone"></i>
              <p>+91 12345 67890</p>
            </div>
          </div>

          <form action="" method="post" className="contact-form">
            <h3>Send a Message</h3>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="input" required />
            
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className="input" required />
            
            <label htmlFor="number">Your Number</label>
            <input type="number" id="number" name="number" placeholder="Enter your number" className="input" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" className="input" required></textarea>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;