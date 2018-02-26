import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import ToDo from './ToDo';

const ToDos = ({ todos, visibility }) => {

  let list;

  if (visibility === 'all') {
    list = todos;
  } else if (visibility === 'completed') {
    list = todos.filter(item => item.completed);
  } else if (visibility === 'uncompleted') {
    list = todos.filter(item => !item.completed);
  };

  const formattedList = list.map(todo => <ToDo key={todo.val} todo={todo} />)

  return (
    <ListGroup>
      {formattedList}
    </ListGroup>
  )
};

const mapStateToProps = ({ todos }) => {
  return ({
    todos: todos.todos,
    visibility: todos.visibility,

  })
};


export default connect(mapStateToProps)(ToDos);
