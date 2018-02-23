import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import { addToDoAction } from '../actions/actions'

const initialState = { newTodo: "" };

class AddToDo extends Component {
  state = initialState;
  
  handleChange = (e) => {
    this.setState({newTodo: e.target.value})
  }

  addToList = () => {
    this.props.dispatch(addToDoAction(this.state.newTodo));
    this.setState(initialState);
  };

  render(){
    return (
      <div>
        <FormControl value={this.state.newTodo} onChange={this.handleChange}></FormControl>
        <Button onClick={this.addToList}> Click to add more items</Button>
      </div>
    )
  }
}


export default connect()(AddToDo);