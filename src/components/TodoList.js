import React from 'react';

const Todos = ({ data, loading }) => {
  if (loading) {
    return <h2>...loading</h2>;
  }

  // const [filterCategory, setFilterCategory] = useState(data)

  return (
    <div className='todo-list'>
      { data.map((todo) => (
        <div key={ todo.id } id={todo.id} className={ todo.completed === true ? 'todo-item done' : 'todo-item' }>
          <input type="checkbox" defaultChecked={ todo.completed === true ? true : false } />
          <span className="todo-title">{ todo.title }</span>
        </div>
      )) }
    </div>
  );
};

export default Todos;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default class TodoList extends React.Component {
//   state = {
//     todos: []
//   }


  
//   componentDidMount() {
//     //axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
//     axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=40`)
//       .then(res => {
//           const todos = res.data;
//           this.setState({ todos });
//         })
//         .catch(() => {
//           console.log('There was an error retrieving the data')
//       })
//   }

//   render() {
//     return (
//       <div className='todo-list'>
//         {
//           this.state.todos
//             .map(todo =>
//               <div key={ todo.id } id={todo.id} className={ todo.completed === true ? 'todo-item done' : 'todo-item' }>
//                 <input type="checkbox" defaultChecked={ todo.completed === true ? true : false } />
//                 <span className="todo-title">{ todo.title }</span>
//               </div>
//             )
//         }
//       </div>
//     )
//   }
// }