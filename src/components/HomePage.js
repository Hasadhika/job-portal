// src/components/HomePage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from './JobCard';
import { allJobsData } from './Jobs'; // Import the master job data list

function HomePage() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // State variables to hold the values from the search form
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  
  // This function runs when the user submits the search form
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    // Navigate to the '/jobs' page, passing the search terms
    navigate('/jobs', {
      state: {
        title: searchTitle,
        location: searchLocation
      }
    });
  };

  // Get the first 6 jobs from the master list to display as "latest"
  const latestJobs = allJobsData.slice(0, 6);

  return (
    <div> 
      <main className="home-container">
        <section className="home">
          <form onSubmit={handleSearchSubmit}>
            <h3>Find Your Next Job</h3>
            
            <label htmlFor="title">Job Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Keyword, category or company" 
              maxLength="50" 
              className="input"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            
            <label htmlFor="location">Job Location</label>
            <input 
              type="text" 
              id="location" 
              name="location" 
              placeholder="City, state, or country" 
              maxLength="50" 
              className="input"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />

            <button type="submit" className="btn">Search Jobs</button>
          </form>
        </section>
      </main>

      <section className="category">
        <h1 className="heading">Job Categories</h1>
        <div className="box-container">
            <a href="#" className="box"><i className="fas fa-code"></i><div><h3>Development</h3><span>2200+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-person-digging"></i><div><h3>Construction</h3><span>4000+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-bullhorn"></i><div><h3>Marketing</h3><span>1200+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-headset"></i><div><h3>Service</h3><span>3100+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-wrench"></i><div><h3>Engineer</h3><span>2200+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-pen"></i><div><h3>Designer</h3><span>500+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-chalkboard-user"></i><div><h3>Teacher</h3><span>100+ Jobs</span></div></a>
            <a href="#" className="box"><i className="fas fa-wallet"></i><div><h3>Finance</h3><span>1000+ Jobs</span></div></a>
        </div>
      </section>

      <section className="jobs-container">
        <h1 className="heading">Latest Jobs</h1>
        <div className="box-container">
          
          {/* Map over the latest jobs array and render an interactive JobCard for each one */}
          {latestJobs.map(job => (
            <JobCard
              key={job.id}
              {...job} // Pass all job properties (id, logo, title, etc.) to the card
            />
          ))}

        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/jobs" className="btn">View All Jobs</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;