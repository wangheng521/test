import React, { useState } from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo, deleteTodo, updateTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      text: newTodo
    };
    addTodo(todo);
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleEditTodo = (id, text) => {
    setEditMode(id);
    setEditedText(text);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = {
      id: editMode,
      text: editedText
    };
    updateTodo(updatedTodo);
    setEditMode(null);
    setEditedText('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editMode === todo.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            ) : (
              todo.text
            )}
            {editMode !== todo.id && (
              <>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </>
            )}
            {editMode === todo.id && (
              <button onClick={handleUpdateTodo}>Update</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: 'ADD_TODO', payload: todo }),
    deleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id }),
    updateTodo: (todo) => dispatch({ type: 'UPDATE_TODO', payload: todo })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
