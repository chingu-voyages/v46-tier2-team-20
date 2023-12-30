import React from 'react';
import './Pagination.css';

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav aria-label="Page navigation" className="flex items-center justify-center mb-4 cursor-pointer">
      <ul className="inline-flex -space-x-px text-sm">
        <li className="page-item">
          <a
            className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-red-300 rounded-s-lg hover:bg-red-100 hover:text-red-700"
            onClick={goToPrevPage}
          >

            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="flex items-center justify-center px-3 h-8 leading-tight border text-white border-red-300 hover:bg-red-100 hover:text-red-700"
            >

              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-red-300 rounded-e-lg hover:bg-red-100 hover:text-red-700"
            onClick={goToNextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
