import React from 'react'

export default function TodoList(props) {
  const { todos, toggleCompleted, setTodos, deleteTodo } = props
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id} className={v.completed ? 'completed' : 'active'}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  setTodos(toggleCompleted(todos, v.id))
                }}
              />
              {v.text}
              <button
                onClick={() => {
                  setTodos(deleteTodo(todos, v.id))
                }}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
