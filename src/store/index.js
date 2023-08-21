import { createStore } from 'redux';

// 定义初始状态
const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          )
        };
      default:
        return state;
    }
  };

  // 创建 Redux store
const store = createStore(rootReducer);

export default store;
  