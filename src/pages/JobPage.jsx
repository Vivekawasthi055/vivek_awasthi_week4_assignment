// src/pages/JobPage.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../data/jobsData";
import ApplyForm from "../components/ApplyForm";
import PropTypes from "prop-types";

const JobPage = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(id));
  const [applied, setApplied] = useState(false);

  return (
    <div className="job-page-container">
      <div className="job-page">
        <h1 className="heading">{job.title}</h1>
        <p className="discription">{job.company}</p>
        <p className="discription">{job.location}</p>
        <p className="discription">{job.description}</p>
        {applied ? (
          <h3 className="success-msg">Application submitted successfully!</h3>
        ) : (
          <ApplyForm setApplied={setApplied} />
        )}
      </div>
    </div>
  );
};

JobPage.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default JobPage;
