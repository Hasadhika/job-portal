// src/components/Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    alert('Login functionality is not yet connected to a backend.');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>Login Now</h3>
        
        {/* Email Field with Floating Label */}
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            id="email"
            required 
            placeholder=" " /* The single space is crucial for the CSS */
            maxLength="50" 
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email" className="form-label">Your Email</label>
        </div>
        
        {/* Password Field with Floating Label */}
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            id="password"
            required 
            placeholder=" " /* Crucial for the CSS to work */
            maxLength="20" 
            className="form-input"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="password" className="form-label">Your Password</label>
        </div>
        
        {/* Added margin-top to the button for better spacing */}
        <button type="submit" className="btn" style={{marginTop: '2.5rem'}}>Login</button>
        
        <p>
          Don't have an account? <Link to="/register">Register now</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;