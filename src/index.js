// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LikedJobsProvider } from './context/LikedJobsContext'; // 1. Import the provider
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 2. Wrap the App so all components can access liked jobs */}
      <LikedJobsProvider>
        <App />
      </LikedJobsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
      