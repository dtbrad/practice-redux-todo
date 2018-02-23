import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ToDos from './ToDos';
import AddToDo from './AddToDo';
import reducer from '../reducers';

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
          <div>
            <ToDos />
            <AddToDo />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
