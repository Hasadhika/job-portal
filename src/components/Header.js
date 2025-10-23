// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'; // 1. Import useUser

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const { user } = useUser(); // 2. Get the user object from the hook

  useEffect(() => {
    const handleScroll = () => setIsNavActive(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          
          <SignedOut>
            <Link to="/login">login</Link>
          </SignedOut>
        </nav>
        
        <SignedIn>
          {/* 3. Create a container for the welcome message and user button */}
          <div className="user-info">
            {/* Display the user's first name if it exists */}
            <span className="user-name">
              Hello, {user ? user.firstName : 'User'}!
            </span>
            <UserButton afterSignOutUrl="/" /> 
          </div>
        </SignedIn>

        <SignedOut>
           <Link to="/login" className="btn" style={{ marginTop: 0 }}>post a job</Link>
        </SignedOut>

      </section>
    </header>
  );
}

export default Header;