import React from "react";

const Pagination = ({totalPages, currentPage, nextPage, previousPage }) => {
  return (
    <div>
      <button>Previous</button>
      <span>page {currentPage} of  {totalPages}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination
