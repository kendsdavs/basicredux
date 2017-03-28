import React from 'react';
import { connect } from 'react-redux'


const App = function (props) {
  const titleChange = e => props.titleChange(e.target.value)
  const buttonIncr = e => props.incr()
  const buttonDecr = e => props.decr()

  return (
    <div className="pa4">
      <h1>{props.title}</h1>
      <input value={props.title}
        onChange={titleChange} />
      <h1>Counter: {props.counter}</h1>
      <button onClick={buttonIncr}>Increment</button>
      <button onClick={buttonDecr}>Decrement</button>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    title: state.title,
    counter: state.counter
  }
}

const mapActionToProps = function (dispatch) {
  return {
    titleChange: (title) => dispatch({ type: 'SET_TITLE', payload: title}),
    incr: () => dispatch({ type: 'INCR'}),
    decr: () => dispatch({ type: 'DECR'})
  }
}



const connector = connect(mapStateToProps, mapActionToProps)

export default connector(App)
