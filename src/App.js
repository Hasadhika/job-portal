import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import JobDetails from './components/JobDetails';
import './styles.css';

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} /> {/* Add Toaster here */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;