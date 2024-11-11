// src/components/Pagination.jsx
import PropTypes from "prop-types";

const Pagination = ({
  totalJobs,
  jobsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  totalJobs: PropTypes.number.isRequired,
  jobsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
