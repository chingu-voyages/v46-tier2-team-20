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
    <nav className="flex items-center justify-center mb-4">
      <ul className="inline-flex -space-x-px text-sm">
        <li className="page-item">
          <a
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-red-300 rounded-s-lg hover:bg-red-100 hover:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white"
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
              className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 hover:bg-red-100 hover:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white"
            >

              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-red-300 rounded-e-lg hover:bg-red-100 hover:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white"
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
