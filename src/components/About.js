// src/components/About.js

import React from 'react';
import ReviewCard from './ReviewCard'; // Import the new component

// Import images for this page
import aboutImg from '../assets/about.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';

// Store review data in an array
const reviewsData = [
  {
    id: 1,
    title: "amazing results",
    text: "Job Hunt made my job search effortless. The platform is easy to navigate, and I found a position that perfectly matches my skills. Highly recommend!",
    userImage: user2,
    userName: "John Doe",
    userTitle: "Software Engineer"
  },
  {
    id: 2,
    title: "easy to use",
    text: "I've tried many job portals, but Job Hunt stands out. The recommendations were spot-on, and I found a position that matched my experience perfectly.",
    userImage: user4,
    userName: "Priya Sharma",
    userTitle: "Marketing Specialist"
  },
  {
    id: 3,
    title: "great for employers",
    text: "As an employer, posting jobs and managing applicants on Job Hunt was effortless. The platform helped us reach the right candidates quickly. Excellent experience!",
    userImage: user3,
    userName: "Param Singh",
    userTitle: "Data Analyst"
  }
];

function About() {
  return (
    <div>
      <div className="section-title">About Us</div>
      <section className="about">
        <img src={aboutImg} alt="About us" />
        <div className="box">
          <h3>Why choose us?</h3>
          <p>
            At Job Hunt, we believe that finding the right job should be simple, fast, and tailored to your unique skills and ambitions. We are a dedicated job-search platform designed to connect talented individuals with opportunities that match their career goals.
          </p>
          <p>
            Our mission is to empower job seekers by providing an intuitive, user-friendly platform where they can explore the latest openings, apply with ease, and stay ahead in today’s competitive job market. Whether you’re a fresh graduate, a professional seeking growth, or someone looking to switch careers, Job Hunt is here to guide you every step of the way.With advanced search tools, personalized recommendations, and up-to-date listings from top employers, we aim to make your job search journey smooth, efficient, and successful. At Job Hunt, your dream job is just a click away.
          </p>
          <a href="contact.html" className="btn">contact us</a>
        </div>
      </section>

      <section className="reviews">
        {/* Map over the reviewsData array to render a ReviewCard for each item */}
        {reviewsData.map(review => (
          <ReviewCard
            key={review.id}
            title={review.title}
            text={review.text}
            userImage={review.userImage}
            userName={review.userName}
            userTitle={review.userTitle}
          />
        ))}
      </section>
    </div>
  );
}

export default About;