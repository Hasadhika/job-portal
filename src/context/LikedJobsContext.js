// src/context/LikedJobsContext.js

import React, { createContext, useState } from 'react';

export const LikedJobsContext = createContext();

export const LikedJobsProvider = ({ children }) => {
  const [likedJobs, setLikedJobs] = useState([]);

  const toggleLike = (jobId) => {
    setLikedJobs(prevLikedJobs => {
      if (prevLikedJobs.includes(jobId)) {
        return prevLikedJobs.filter(id => id !== jobId);
      } else {
        return [...prevLikedJobs, jobId];
      }
    });
  };

  return (
    <LikedJobsContext.Provider value={{ likedJobs, toggleLike }}>
      {children}
    </LikedJobsContext.Provider>
  );
};