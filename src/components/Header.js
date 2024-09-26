import React from 'react'

function Header() {
  return (
    <header className='page-header'>
        <svg className='menu-icon'>
            <use href="#menu-icon"></use>
        </svg>
        <h1 className="app-title">Task List</h1>
        <nav className="filter-menu">
			<div className="filter-menu-label">View:</div>
			<div className="filter-menu_list">
				<button className="filter-menu-item">All</button>
				<button className="filter-menu-item">Active</button>
				<button className="filter-menu-item">Complete</button>
			</div>
		</nav>
    </header>
  )
}

export default Header