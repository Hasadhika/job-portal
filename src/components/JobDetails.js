// src/components/JobDetails.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allJobsData } from './Jobs'; // Import the master data list

// This helper function will parse our formatted description string
const formatDescription = (text) => {
  return text.split('\n').map((line, index) => {
    if (line.startsWith('### ')) {
      return <h4 key={index}>{line.substring(4)}</h4>;
    }
    if (line.startsWith('- ')) {
      return <li key={index}>{line.substring(2)}</li>;
    }
    return <p key={index}>{line}</p>;
  });
};

function JobDetails() {
  const { jobId } = useParams(); // Gets the job ID from the URL
  const job = allJobsData.find(j => j.id === parseInt(jobId));

  if (!job) {
    return (
      <div className="job-details-container">
        <h1>Job Not Found</h1>
        <Link to="/jobs" className="btn">Back to All Jobs</Link>
      </div>
    );
  }

  return (
    <div className="job-details-container">
      <div className="details-header">
        <img src={job.logo} alt={`${job.companyName} logo`} />
        <div>
          <h1>{job.jobTitle}</h1>
          <h2>{job.companyName} | {job.location}</h2>
        </div>
      </div>
      
      <div className="details-content">
        <h3>Job Details</h3>
        <div className="detail-item description">
          {formatDescription(job.description)}
        </div>
        <div className="detail-item">
          <h4>Salary</h4>
          <p>{job.salary}</p>
        </div>
        <div className="detail-item">
          <h4>Job Type</h4>
          <p>{job.jobType} | {job.shift}</p>
        </div>
      </div>

      <Link to="/jobs" className="btn">Back to All Jobs</Link>
    </div>
  );
}

export default JobDetails;