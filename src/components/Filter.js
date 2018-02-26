import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showOnlyCompletedAction } from '../actions/showOnlyCompletedAction';
import { showOnlyUncompletedAction } from '../actions/showOnlyUncompletedAction';
import { showAllAction } from '../actions/showAllAction';

const Filter = (props) => {
  const showCompleted = () => { props.dispatch(showOnlyCompletedAction()) }
  const showUncompleted = () => { props.dispatch(showOnlyUncompletedAction()) }
  const showAll = () => { props.dispatch(showAllAction()) }
  return (
    <ButtonGroup>
      <Button onClick={showAll}>Show All</Button>
      <Button onClick={showCompleted}>Show only completed</Button>
      <Button onClick={showUncompleted}>Show only uncompleted</Button>

    </ButtonGroup>
  )

}

export default connect()(Filter);