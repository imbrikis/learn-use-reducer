import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
        todoCount: state.todoCount + 1,
      }
    case 'completed':
      return {
        todos: state.todos.map((t, i) =>
          action.payload === i ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      }
    default:
      return state
  }
}

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  })
  const [text, setText] = useState()

  return (
    <div>
      <div>Todo Count: {todoCount}</div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: 'add-todo', payload: text })
          setText('')
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>

      {todos.map((t, i) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: 'completed', payload: i })}
          style={{
            textDecoration: t.completed ? 'line-through' : '',
          }}
        >
          {t.text}
        </div>
      ))}
    </div>
  )
}

export default App
