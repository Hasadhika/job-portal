// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Login from './components/Login';
import JobDetails from './components/JobDetails'; // 1. Import
import LikedJobs from './components/LikedJobs';   // 2. Import
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* 3. Add new routes */}
        <Route path="/job/:jobId" element={<JobDetails />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;