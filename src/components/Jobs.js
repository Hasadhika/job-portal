// src/components/Jobs.js

// 1. ALL IMPORTS ARE GROUPED CORRECTLY AT THE TOP
import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JobCard from './JobCard';
import FilterDropdown from './FilterDropdown';
import { LikedJobsContext } from '../context/LikedJobsContext';

// Import all company logos
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon7 from '../assets/icon7.jpg';
import icon8 from '../assets/icon8.jpg';
import icon9 from '../assets/icon9.png';
import icon10 from '../assets/icon10.png';
import icon11 from '../assets/icon11.png';
import icon12 from '../assets/icon12.png';
import icon13 from '../assets/icon13.png';

// The 'export const' line comes AFTER all imports.
export const allJobsData = [
  { id: 1, logo: icon1, companyName: "Infosys", postedDate: "2 days ago", jobTitle: "Senior Web Developer", location: "Mumbai, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "10k - 25k", jobType: "Part-time", shift: "Day shift", description: "### Key Responsibilities:\n- Lead the design, development, and maintenance of complex web applications.\n- Collaborate with cross-functional teams to define and ship new features.\n- Mentor junior developers and conduct code reviews to ensure high-quality standards.\n\n### Qualifications:\n- 5+ years of experience in web development.\n- Proficiency in JavaScript, React, Node.js, and related technologies.\n- Strong understanding of database systems like MySQL and MongoDB." },
  { id: 2, logo: icon2, companyName: "Google", postedDate: "1 week ago", jobTitle: "Python Developer", location: "Hyderabad, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "50k-70k", jobType: "Full-time", shift: "Day shift", description: "### Core Duties:\n- Write effective, scalable Python code for server-side applications.\n- Integrate user-facing elements with server-side logic and functionality.\n- Implement data storage solutions and improve data processing performance.\n\n### Required Skills:\n- Proven experience as a Python Developer.\n- Expertise in at least one popular Python framework (like Django, Flask, or FastAPI).\n- Knowledge of object-relational mapping (ORM) techniques." },
  { id: 3, logo: icon3, companyName: "Amazon", postedDate: "5 days ago", jobTitle: "Customer Consultant", location: "Bangalore, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "10k - 25k", jobType: "Full-time", shift: "Night shift", description: "### Role Overview:\n- Provide outstanding customer support via phone, email, and chat.\n- Troubleshoot and resolve customer issues with a high degree of empathy and professionalism.\n- Document customer interactions and report on recurring issues to improve our services.\n\n### Who You Are:\n- An excellent communicator with strong problem-solving skills.\n- Patient, empathetic, and passionate about helping others.\n- Comfortable working in a fast-paced, high-volume environment." },
  { id: 4, logo: icon4, companyName: "Tata Consultancy Services", postedDate: "8 days ago", jobTitle: "Marketing Agent", location: "Hyderabad, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "20k - 50k", jobType: "Full-time", shift: "Day shift", description: "### Responsibilities:\n- Execute digital marketing campaigns across various channels (social media, email, SEM).\n- Analyze campaign performance and provide actionable insights for improvement.\n- Collaborate with the creative team to develop engaging marketing materials.\n\n### Qualifications:\n- Bachelor's degree in Marketing or a related field.\n- Hands-on experience with marketing automation tools and analytics platforms.\n- Strong writing and content creation skills." },
  { id: 5, logo: icon5, companyName: "Accenture", postedDate: "2 days ago", jobTitle: "UI/UX Designer", location: "Chennai, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "25k - 50k", jobType: "Full-time", shift: "Day shift", description: "### What You'll Do:\n- Conduct user research to understand user needs and behaviors.\n- Create wireframes, storyboards, user flows, and sitemaps.\n- Design and deliver high-fidelity mockups and prototypes for web and mobile apps.\n\n### What You'll Bring:\n- A strong portfolio showcasing your UI/UX design skills.\n- Proficiency in design tools such as Figma, Sketch, or Adobe XD.\n- A deep understanding of user-centered design principles." },
  { id: 6, logo: icon7, companyName: "Microsoft", postedDate: "2 days ago", jobTitle: "Senior Java Developer", location: "Noida, USA", currencyIcon: "fas fa-dollar-sign", salary: "75$-100$", jobType: "Full-time", shift: "Day shift", description: "### Key Responsibilities:\n- Design, build, and maintain efficient, reusable, and reliable Java code.\n- Ensure the best possible performance, quality, and responsiveness of the applications.\n- Identify bottlenecks and bugs, and devise solutions to these problems.\n\n### Required Experience:\n- 5+ years of professional experience in Java development.\n- In-depth knowledge of the Spring Framework (Spring Boot, Spring MVC).\n- Experience with cloud platforms like Azure or AWS." },
  { id: 7, logo: icon8, companyName: "Dell", postedDate: "1 week ago", jobTitle: "Chip Designer", location: "New Delhi, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "50k-90k", jobType: "Full-time", shift: "Night shift", description: "### Role Summary:\n- Perform RTL design, simulation, and verification for complex digital logic.\n- Work on logic synthesis, timing analysis, and power optimization.\n- Collaborate with physical design teams to ensure successful tape-outs.\n\n### Qualifications:\n- Bachelor's or Master's degree in Electrical or Computer Engineering.\n- Strong proficiency in Verilog, VHDL, and SystemVerilog.\n- Experience with industry-standard EDA tools." },
  { id: 8, logo: icon9, companyName: "Wipro", postedDate: "9 days ago", jobTitle: "Senior Web Developer", location: "Bangalore, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "15k - 25k", jobType: "Part-time", shift: "Day shift", description: "### Job Description:\n- Maintain and enhance existing web applications on a part-time basis.\n- Troubleshoot and resolve bugs and performance issues.\n- Implement new features and updates as required by the project manager.\n\n### Skills Needed:\n- Strong experience with HTML, CSS, JavaScript, and a modern framework.\n- Ability to work independently and manage your own time effectively.\n- Good communication skills for remote collaboration." },
  { id: 9, logo: icon10, companyName: "IBM", postedDate: "4 days ago", jobTitle: "ML Engineer", location: "Hyderabad, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "50k-75k", jobType: "Full-time", shift: "Day shift", description: "### What You Will Do:\n- Design, build, and productionize machine learning models.\n- Develop data pipelines and infrastructure to train and evaluate models.\n- Work with stakeholders to identify opportunities for leveraging company data.\n\n### Required Skills:\n- Proficiency in Python and ML libraries like TensorFlow, PyTorch, or Scikit-learn.\n- Experience with data processing tools like Apache Spark or Pandas.\n- Solid understanding of MLOps principles." },
  { id: 10, logo: icon11, companyName: "L&T", postedDate: "3 days ago", jobTitle: "Finance Analyst", location: "Chennai, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "55k-70k", jobType: "Full-time", shift: "Night shift", description: "### Key Duties:\n- Conduct financial forecasting, reporting, and operational metrics tracking.\n- Analyze financial data and create financial models for decision support.\n- Report on financial performance and prepare for regular leadership reviews.\n\n### Qualifications:\n- Bachelor's degree in Finance, Accounting, or Economics.\n- Advanced proficiency in Microsoft Excel and financial modeling.\n- Strong analytical and data-gathering skills." },
  { id: 11, logo: icon12, companyName: "Tech Mahindra", postedDate: "5 days ago", jobTitle: "Data Scientist", location: "Delhi, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "85k-110k", jobType: "Full-time", shift: "Day shift", description: "### Role Overview:\n- Use predictive modeling to increase and optimize customer experiences.\n- Develop custom data models and algorithms to apply to data sets.\n- Collaborate with engineering and product development teams.\n\n### Experience:\n- Strong background in statistics, machine learning, and predictive modeling.\n- Expertise in programming languages like Python or R.\n- Proficiency in using query languages such as SQL." },
  { id: 12, logo: icon13, companyName: "Oracle", postedDate: "5 days ago", jobTitle: "Data Engineer", location: "Delhi, India", currencyIcon: "fas fa-indian-rupee-sign", salary: "85k-110k", jobType: "Full-time", shift: "Day shift", description: "### Responsibilities:\n- Create and maintain optimal data pipeline architecture.\n- Assemble large, complex data sets that meet business requirements.\n- Build the infrastructure required for optimal extraction, transformation, and loading of data.\n\n### Skills:\n- Experience with big data tools: Hadoop, Spark, Kafka, etc.\n- Advanced working SQL knowledge and experience working with relational databases.\n- Experience with cloud data services (e.g., AWS, GCP, Azure)." }
];

const filterKeyMap = {
  'Date Posted': 'postedDate',
  'Estimated Salary': 'salary',
  'Job Type': 'jobType',
  'Work Shifts': 'shift'
};

function Jobs() {
  const { likedJobs } = useContext(LikedJobsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({});
  const [view, setView] = useState('all');

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [category]: value }));
  };

  const jobsToDisplay = useMemo(() => {
    const sourceData = view === 'all' ? allJobsData : allJobsData.filter(j => likedJobs.includes(j.id));
    let jobsToFilter = [...sourceData];

    Object.entries(filters).forEach(([category, value]) => {
      if (value) {
        const dataKey = filterKeyMap[category];
        jobsToFilter = jobsToFilter.filter(job => job[dataKey] === value);
      }
    });

    const searchTitle = location.state?.title?.toLowerCase();
    const searchLocation = location.state?.location?.toLowerCase();

    if (searchTitle) {
      jobsToFilter = jobsToFilter.filter(job =>
        job.jobTitle.toLowerCase().includes(searchTitle) ||
        job.companyName.toLowerCase().includes(searchTitle)
      );
    }
    if (searchLocation) {
      jobsToFilter = jobsToFilter.filter(job =>
        job.location.toLowerCase().includes(searchLocation)
      );
    }

    return jobsToFilter;
  }, [filters, view, likedJobs, location.state]);

  const resetFilters = () => {
    setFilters({});
    document.querySelectorAll('.filter-form .output').forEach(input => input.value = '');
    navigate('/jobs', { replace: true });
  };

  return (
    <div>
      <section className="job-filter">
        <h1 className="heading">Filter Jobs</h1>
        <form className="filter-form">
            <div className="filter-row">
                <FilterDropdown placeholder="Date Posted" items={['2 days ago', '3 days ago', '4 days ago', '5 days ago', '8 days ago', '9 days ago', '1 week ago']} onSelectFilter={handleFilterChange} />
                <FilterDropdown placeholder="Estimated Salary" items={['10k - 25k', '15k - 25k', '20k - 50k', '25k - 50k', '50k-70k', '50k-90k', '55k-70k', '50k-75k', '85k-110k']} onSelectFilter={handleFilterChange} />
                <FilterDropdown placeholder="Job Type" items={['Full-time', 'Part-time']} onSelectFilter={handleFilterChange} />
                <FilterDropdown placeholder="Work Shifts" items={['Day shift', 'Night shift']} onSelectFilter={handleFilterChange} />
            </div>
            <button type="button" className="btn" onClick={resetFilters} style={{marginTop: '1rem'}}>Reset All Filters</button>
        </form>
      </section>

      <section className="jobs-container">
        <div className="view-toggle">
          <button className={`btn ${view === 'all' ? '' : 'btn-secondary'}`} onClick={() => setView('all')}>All Jobs</button>
          <button className={`btn ${view === 'liked' ? '' : 'btn-secondary'}`} onClick={() => setView('liked')}>Liked Jobs ({likedJobs.length})</button>
        </div>
        <h1 className="heading">{view === 'all' ? 'All Jobs' : 'Your Liked Jobs'}</h1>
        <div className="box-container">
          {jobsToDisplay.length > 0 ? (
            jobsToDisplay.map(job => <JobCard key={job.id} {...job} />)
          ) : (
            <p className="no-jobs-message">
              {view === 'liked' ? "You haven't liked any jobs yet." : "No jobs match your search or filters."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Jobs;