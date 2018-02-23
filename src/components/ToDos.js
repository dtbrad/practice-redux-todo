import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { daniel } from '../actions/actions';

const ToDos = ({ todos }) => {
  const list = todos.todos.map(item => <li key={item}>{item}</li>);

  return (
    <div>
      {list}
    </div>
  )
};

const mapStateToProps = state => {
  return ({
    todos: state,
  })
};


export default connect(mapStateToProps)(ToDos);
