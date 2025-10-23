import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast for notifications
import { allJobsData } from './Jobs';

// Helper function to format the job description (Markdown-like)
const formatDescription = (text) => {
  return text.split('\n').map((line, index) => {
    line = line.trim(); // Trim whitespace
    if (line.startsWith('### ')) {
      return <h4 key={index} style={{marginTop: '1.5rem', marginBottom:'0.5rem'}}>{line.substring(4)}</h4>;
    }
    if (line.startsWith('- ')) {
      // Collect list items
      return <li key={index} style={{marginLeft: '2rem', marginBottom: '0.5rem'}}>{line.substring(2)}</li>;
    }
    if(line === '') {
        return <br key={index} />; // Add breaks for empty lines
    }
    return <p key={index}>{line}</p>;
  });
};


function JobDetails() {
  const { jobId } = useParams();
  const job = allJobsData.find(j => j.id === parseInt(jobId));
  const [applied, setApplied] = useState(false); // State to track application

  const handleApply = () => {
    // In a real app, you might send application data to a server here
    console.log(`Applying for job: ${job.jobTitle}`);

    // Show a success notification
    toast.success(`You have successfully applied for "${job.jobTitle}"`);
    setApplied(true); // Update state to disable the button
  };

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
      <div className="flex-btn" style={{marginTop: '3rem', justifyContent: 'space-between'}}>
        <Link to="/jobs" className="btn btn-secondary">Back to All Jobs</Link>
        <button
          onClick={handleApply}
          className="btn"
          disabled={applied} // Disable button after applying
        >
          {applied ? 'Applied ✔' : 'Apply Now'}
        </button>
      </div>
    </div>
  );
}

export default JobDetails;