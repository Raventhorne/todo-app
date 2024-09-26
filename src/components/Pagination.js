import React from "react";

const Pagination = ({ todosPerPage, totalTodos, paginate, todoCurrentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="todo-pagination">
      <ul className="todo-pagination-list">
        {pageNumbers.map((number) => (
          <li key={ number }>
            <button
              onClick={() => paginate(number)}
              aria-label={`Go to Page ${number}`}
              className={number === todoCurrentPage ? 'pagination-item current' : 'pagination-item'}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;