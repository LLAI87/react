import { useState } from 'react'
import AddForm from './AddForm'
import './TodoApp.css'
import './TodoList'
import TodoList from './TodoList/'

function TodoApp() {
  //文字輸入匡用
  const [inputValue, setInputValue] = useState('')

  //   const [checkValue,set]

  //列表用
  // e.g. todo = {id, text} -> todo是有id有text的物件
  const [todos, setTodos] = useState([
    { id: 1, text: '買鶴頂紅茶', completed: false },
    { id: 2, text: '遛狗', completed: false },
    { id: 3, text: 'React練習', completed: true },
  ])
  const toggleCompleted = (arr, id) => {
    return arr.map((v, i) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }
  const deleteTodo = (todos, id) => {
    return todos.filter((v, i) => {
      return v.id !== id
    })
  }
  const addTodo = (todos, todo) => {
    return [todo, ...todos]
  }
  //專門給AddForm.js用的，並非上面的純粹化函式
  const handleAddTodo = (newTodo) => {
    setTodos(addTodo(todos, newTodo))
  }

  return (
    <>
      <h1>代辦事項</h1>
      <AddForm handleAddTodo={handleAddTodo} />
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // id產生的幾種方式:
            // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
            // 2. id是數字時，可求出最大值再遞增(類似資料庫中的auto increment)
            // 3. 隨機產生語法或函式庫 例如 uuid/nanoid 等函式庫
            const newTodo = { id: Number(new Date()), text: inputValue }
            setTodos(addTodo(todos, newTodo))

            //清空輸入匡
            setInputValue('')
          } //按下enter件
        }}
      /> */}
      <hr />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
      />
      {/* <ul>
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
      </ul> */}
    </>
  )
}

export default TodoApp
