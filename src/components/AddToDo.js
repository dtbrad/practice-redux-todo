import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormControl } from 'react-bootstrap';
import { addAction } from '../actions/addAction'

const initialState = { newTodo: "" };

class AddToDo extends Component {
  state = initialState;
  
  handleChange = (e) => {
    this.setState({newTodo: e.target.value})
  }

  addToList = (event) => {
    event.preventDefault();
    this.props.dispatch(addAction(this.state.newTodo));
    this.setState(initialState);
  };

  render(){
    return (
      <div>
        <Form onSubmit={this.addToList}>
          <FormControl placeholder="Add To Do Item" value={this.state.newTodo} onChange={this.handleChange}></FormControl>
        </Form>
      </div>
    )
  }
}


export default connect()(AddToDo);