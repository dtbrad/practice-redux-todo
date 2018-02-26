import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Grid } from 'react-bootstrap';
import ToDos from './ToDos';
import AddToDo from './AddToDo';
import reducer from '../reducers';
import Filter from './Filter';

const store = createStore(
  reducer, 
  {}, 
  composeWithDevTools(),
);

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Provider store={store}>
          <Grid>
            <AddToDo />
            <ToDos />
            <Filter />
          </Grid>
        </Provider>
      </div>
    );
  }
}

export default App;
