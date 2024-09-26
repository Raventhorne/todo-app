import React, { useState } from 'react';

const DropdownFilter = () => {
  const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="">-- Filter by --</option>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="undone">Not Complete</option>
      </select>
    </div>
  )
};

export default DropdownFilter;
