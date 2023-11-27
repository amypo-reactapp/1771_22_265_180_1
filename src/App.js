import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Todolist component
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

// TodoForm component
const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

// TodoItem component
const TodoItem = ({ todo, onDeleteTodo }) => {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li>
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
