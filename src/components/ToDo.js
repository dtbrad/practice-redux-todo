import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, FormControl, Button, ListGroupItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { toggleAction } from '../actions/toggleAction'; 
import { removeAction } from '../actions/removeAction';
import { editAction } from '../actions/editAction'; 

// const initialState = { edit: false, inputValue: '' };

class ToDo extends Component {
  // state = initialState;

  constructor(props) {
    super(props)
    this.state ={
      edit: false,
      inputValue: this.props.todo.val
    }
  }

  toggleMe = () => { 
    const val = this.props.todo.val;
    this.props.dispatch(toggleAction(val));
  };

  removeMe = () => {
    const val = this.props.todo.val;
    this.props.dispatch(removeAction(val));
  };

  editMe = () => {
    const val = this.props.todo.val;
    this.props.dispatch(editAction(val)); 
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  submitEdit = (event) => {
    event.preventDefault();
    const val = this.state.inputValue;
    this.props.dispatch(editAction(this.props.todo.id, val))
  }
  
  render(){

    const tooltip = (
      <Tooltip id="tooltip">
        Double click to edit.
      </Tooltip>
    );

    const completed = this.props.todo.completed;
    const show = this.state.edit

    const item = show ? (
      <Form onSubmit={this.submitEdit}>
        <FormControl onChange= {this.handleChange} placeholder={this.props.todo.val} value={this.state.inputValue} autoFocus onBlur={this.toggleEdit}></FormControl>
      </Form>
    ) : (
        <OverlayTrigger placement="left" overlay={tooltip}>
          <ControlLabel onDoubleClick={this.toggleEdit} style={{ textDecoration: completed ? 'line-through' : 'none' }}  >{this.props.todo.val}</ControlLabel>
        </OverlayTrigger>
    );
    

    return (
      <ListGroupItem>
        <Form inline>
          <Button pullRight bsStyle="link" onClick={this.toggleMe}> ✔ </Button>
          <Button pullRight bsStyle="link" onClick={this.removeMe}> ✘ </Button>
          <FormGroup controlId="formInlineEmail">
            {item}
          </FormGroup>{' '}
        </Form>
      </ListGroupItem>
    );
  }
}


export default connect()(ToDo);