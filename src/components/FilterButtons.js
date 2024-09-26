import React from 'react'

const FilterButtons = ({ todosPerPage, totalTodos, paginate, todoCurrentPage}) => {

    return (
        <nav className="todo-filter-nav">
            <button value="all" className="fitler-nav-btn">All</button>
            <button value="todo" className="fitler-nav-btn">Active</button>
            <button value="completed" className="fitler-nav-btn">Completed</button>
        </nav>
    )

}
export default FilterButtons
