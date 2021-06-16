import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>increment</button>
    </div>
  )
}

export default App
