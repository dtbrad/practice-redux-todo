import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addToDoAction } from '../actions/actions'

const AddToDo = ({ addToDoAction }) => <Button onClick={addToDoAction}> Click to add more items</Button>

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToDoAction
}, dispatch);

const mapStateToProps = () => {
  return ({
    info: "needless information to make sure mapStateToProps is working"
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);