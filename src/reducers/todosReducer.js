const initialState = ['item #1', 'item #2', 'item #3', 'item #4']
let newIndex = 5;
const todos = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_A_TODO':
    const newState = [...state, `item #${newIndex}`]
    newIndex ++;
    return newState
  default:
    return state;
  }
}

export default todos
