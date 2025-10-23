// src/components/Login.js

import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

  // This function will run after a successful sign-in
  const handleAfterSignIn = () => {
    toast.success('Successfully logged in!');
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="auth-container">
      <SignIn 
        path="/login" 
        routing="path" 
        signUpUrl="/register"
        afterSignIn={handleAfterSignIn} // Add this prop
      />
    </div>
  );
}

export default Login;