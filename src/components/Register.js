import React from 'react';
import { SignUp } from '@clerk/clerk-react';

function Register() {
  return (
    // Use the existing container class for consistent centering and styling
    <div className="login-container" style={{ minHeight: '80vh' }}>
      <SignUp path="/register" routing="path" signInUrl="/login" />
    </div>
  );
}

export default Register;