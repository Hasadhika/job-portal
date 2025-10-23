// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { LikedJobsProvider } from './context/LikedJobsContext';
import App from './App';
import './index.css';

// Get your Clerk Publishable Key from the .env file
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key in .env file");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* This is the correct setup with both Clerk and your context */}
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <LikedJobsProvider>
          <App />
        </LikedJobsProvider>
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);