import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import TodoList from './components/TodoList.js';
import Pagination from './components/Pagination.js';
import Header from './components/Header.js'

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10)

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=39');
      setAllTodos(response.data);
      setIsLoading(false);
    };

    fetchTodos();
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = allTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
	    <TodoList data={currentTodos} />
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={allTodos.length}
        paginate={paginate}
        todoCurrentPage={currentPage}
      />
    </div>
  );
}

export default App;
