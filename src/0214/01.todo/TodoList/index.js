import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  const {
    todos,
    // toggleCompleted,
    // setTodos,
    //  deleteTodo
    handleDeleteTodo,
    handleToggleCompletes,
    handleToggleEditing,
    handleUpdateTodo,
  } = props
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, completed, text, editing } = v //解構
          return (
            <TodoItem
              key={id} //map要加key
              id={id}
              completed={completed}
              text={text}
              editing={editing}
              handleToggleCompletes={handleToggleCompletes}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleEditing={handleToggleEditing}
              handleUpdateTodo={handleUpdateTodo}
              // setTodos={setTodos}
              // toggleCompleted={toggleCompleted}
              // todos={todos}
              // deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}
