// src/components/Header.js

import React, { useState, useEffect } from 'react'; // 1. Add useState here
import { Link } from 'react-router-dom';

function Header() {
  // 2. Add this line to create the state variable
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <section className="flex">
        <div id="menu-btn" className="fas fa-bars-staggered" onClick={() => setIsNavActive(!isNavActive)}></div>
        <Link to="/" className="logo"><i className="fas fa-briefcase"></i> JobHunt</Link>
        <nav className={isNavActive ? 'navbar active' : 'navbar'}>
          <Link to="/">home</Link>
          <Link to="/about">about us</Link>
          <Link to="/jobs">all jobs</Link>
          <Link to="/contact">contact us</Link>
          <Link to="/login">login</Link>
        </nav>
        <a href="#" className="btn" style={{ marginTop: 0 }}>post a job</a>
      </section>
    </header>
  );
}

export default Header;