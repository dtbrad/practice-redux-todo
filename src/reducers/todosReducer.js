import uniqueId from 'lodash/uniqueId'; 
const initialState = {
  todos: [ 
    { id: uniqueId(), val: 'item #1', completed: false },
    { id: uniqueId(), val: 'item #2', completed: false },
    { id: uniqueId(), val: 'item #3', completed: false },
    { id: uniqueId(), val: 'item #4', completed: false }
  ],
  visibility: 'all',
}
const todos = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_A_TODO':
    const newState = {...state, todos: [...state.todos, { id: uniqueId(), val: action.text, completed: false }] }
    debugger;
    return newState
  case 'TOGGLE_TODO':
    const newState1 = { ...state, todos: state.todos.map(todo => todo.val === action.val ? {...todo, completed: !todo.completed} : todo) };
    return newState1
  case 'REMOVE_TODO':
    const index = state.todos.findIndex(todo => todo.val === action.val)
    const newState2 = { ...state, todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]};
    return newState2
  case 'EDIT_TODO':
    const newState3 = { ...state, todos: state.todos.map(todo => todo.id === action.id ? { ...todo, val: action.val } : todo) };
    return newState3
  case 'SHOW_ONLY_COMPLETED':
    return {...state, visibility: "completed" };
  case 'SHOW_ONLY_UNCOMPLETED':
    return { ...state, visibility: "uncompleted" };
  case 'SHOW_ALL':
    return { ...state, visibility: "all" };
  default:
    return state;
  }
}

export default todos
