import { createStore, combineReducers } from 'redux'

const title = function (title="Hello", action) {
  switch (action.type) {
    case 'SET_TITLE':
      return action.payload
    default:
      return title
  }
}

const counter = function (counter=0, action) {
  switch (action.type) {
    case 'INCR':
      return counter + 1
    case 'DECR':
      return counter - 1
    default:
      return counter
  }
}


const store = createStore(
  combineReducers({
    title,
    counter
  })
)

export default store
