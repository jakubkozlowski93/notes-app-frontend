import { createStore } from 'redux'

const initialState = 'light'

// export const add = () => {
//   return {
//     type: 'ADD',
//   }
// }

// export const subtract = () => {
//   return {
//     type: 'ADD',
//   }
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUBTRACT':
      return state - 1
    default:
      return state
  }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
