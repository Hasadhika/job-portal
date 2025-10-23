import React, { useState } from 'react';
import toast from 'react-hot-toast'; // Import toast for notifications

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    let { name, value, maxLength } = e.target;
    if (name === "number" && maxLength > 0 && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to a server here.
    console.log("Contact form submitted:", formData);

    // Show a success notification
    toast.success('Thank you for contacting us!');

    // Clear the form fields
    setFormData({ name: '', email: '', number: '', message: '' });
  };

  return (
    <div>
      <div className="section-title">Contact Us</div>
      <section className="contact-section">
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
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Send a Message</h3>
            <label htmlFor="name">Your Name</label>
            <input
              type="text" id="name" name="name" placeholder="Enter your name"
              className="input" required value={formData.name} onChange={handleChange}
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email" id="email" name="email" placeholder="Enter your email"
              className="input" required value={formData.email} onChange={handleChange}
            />
            <label htmlFor="number">Your Number</label>
            <input
              type="number" id="number" name="number" placeholder="Enter your number"
              className="input" maxLength="10" value={formData.number} onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" placeholder="Enter your message"
              className="input" required value={formData.message} onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;