import React from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination = ({
  gotoNextPage,
  gotoPreviousPage,
  currentPage,
  noOfPages,
  handlePageChange
}) => {
  return (
    <div className="pagination-container">
      <div>
        <button
          disabled={currentPage === 0}
          id="previous"
          role="button"
          onClick={gotoPreviousPage}
        >
          <FiChevronsLeft />
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={`page-number ${currentPage === n && "active-page"}`}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          id="next"
          role="button"
          onClick={gotoNextPage}
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
