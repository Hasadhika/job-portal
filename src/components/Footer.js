// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <section className="grid">
        <div className="box">
          <h3>quick links</h3>
          <a href="home.html"><i className="fas fa-angle-right"></i>home</a>
          <a href="about.html"><i className="fas fa-angle-right"></i>about</a>
          <a href="jobs.html"><i className="fas fa-angle-right"></i>jobs</a>
          <a href="contact.html"><i className="fas fa-angle-right"></i>contact</a>
          <a href="#"><i className="fas fa-angle-right"></i>Filter search</a>
        </div>
        <div className="box">
          <h3>extra links</h3>
          <a href="#"><i className="fas fa-angle-right"></i>account</a>
          <a href="login.html"><i className="fas fa-angle-right"></i>login</a>
          <a href="register.html"><i className="fas fa-angle-right"></i>register</a>
          <a href="#"><i className="fas fa-angle-right"></i>post job</a>
          <a href="#"><i className="fas fa-angle-right"></i>dashboard</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i>facebook</a>
          <a href="#"><i className="fab fa-twitter"></i>twitter</a>
          <a href="#"><i className="fab fa-linkedin"></i>linkedin</a>
          <a href="#"><i className="fab fa-youtube"></i>youtube</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;