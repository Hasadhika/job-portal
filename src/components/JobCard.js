// src/components/JobCard.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LikedJobsContext } from '../context/LikedJobsContext'; // Import the context

function JobCard(props) {
  // Use the context to get likedJobs and the toggleLike function
  const { likedJobs, toggleLike } = useContext(LikedJobsContext);

  // Check if the current job is in the likedJobs array
  const isLiked = likedJobs.includes(props.id);

  return (
    <div className="box">
      <div className="company">
        <img src={props.logo} alt={`${props.companyName} logo`} />
        <div>
          <h3>{props.companyName}</h3>
          <span>{props.postedDate}</span>
        </div>
      </div>
      <h3 className="job-title">{props.jobTitle}</h3>
      <p className="location">
        <i className="fas fa-map-marker-alt"></i>
        <span>{props.location}</span>
      </p>
      <div className="tags">
        <p><i className={props.currencyIcon}></i> <span>{props.salary}</span></p>
        <p><i className="fas fa-briefcase"></i> <span>{props.jobType}</span></p>
        <p><i className="fas fa-clock"></i> <span>{props.shift}</span></p>
      </div>
      <div className="flex-btn">
        {/* Update the link to point to the dynamic job details page */}
        <Link to={`/job/${props.id}`} className="btn">View details</Link>
        
        {/* Update the heart button */}
        <button 
          type="button" 
          // Change class (and style) based on whether the job is liked
          className={isLiked ? "fas fa-heart" : "far fa-heart"}
          onClick={() => toggleLike(props.id)} // Call the function from context
          aria-label="Save job"
        ></button>
      </div>
    </div>
  );
}

export default JobCard;