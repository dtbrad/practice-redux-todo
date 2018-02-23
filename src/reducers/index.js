import { combineReducers } from 'redux';
import todos from './todosReducer';

const todoApp = combineReducers({
  todos,
});

export default todoApp;

