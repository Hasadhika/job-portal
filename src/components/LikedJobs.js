// src/components/LikedJobs.js

import React, { useContext } from 'react';
import { LikedJobsContext } from '../context/LikedJobsContext';
import { allJobsData } from './Jobs';
import JobCard from './JobCard';

function LikedJobs() {
  const { likedJobs } = useContext(LikedJobsContext);

  const jobsToShow = allJobsData.filter(job => likedJobs.includes(job.id));

  return (
    <div>
      <div className="section-title">Liked Jobs</div>
      <section className="jobs-container">
        <div className="box-container">
          {jobsToShow.length > 0 ? (
            jobsToShow.map(job => <JobCard key={job.id} {...job} />)
          ) : (
            <p style={{textAlign: 'center', fontSize: '1.8rem', color: '#777', width: '100%'}}>
              You haven't liked any jobs yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default LikedJobs;