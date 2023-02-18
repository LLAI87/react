import React from 'react'
import EditForm from './EditForm'

export default function TodoItem(props) {
  const {
    id,
    completed,
    text,
    editing,
    handleDeleteTodo,
    handleToggleCompletes,
    handleToggleEditing,
    handleUpdateTodo,
  } = props //解構

  return (
    <>
      <li className={completed ? 'completed' : 'active'}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleToggleCompletes(id)
          }}
        />
        {editing ? (
          <span>
            <EditForm text={text} handleUpdateTodo={handleUpdateTodo} id={id} />
          </span>
        ) : (
          <span>
            {text}
            <button
              onClick={() => {
                handleToggleEditing(id)
              }}
            >
              編輯
            </button>
          </span>
        )}

        <button
          onClick={() => {
            handleDeleteTodo(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}
