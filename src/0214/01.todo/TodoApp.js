import { useState } from 'react'
import AddForm from './AddForm'
import './TodoApp.css'
import TodoList from './TodoList/index'

function TodoApp() {
  //文字輸入匡用
  // const [inputValue, setInputValue] = useState('')

  //   const [checkValue,set]

  //列表用
  // e.g. todo = {id, text} -> todo是有id有text的物件
  const [todos, setTodos] = useState([
    { id: 1, text: '買鶴頂紅茶', completed: false, editing: false },
    { id: 2, text: '遛狗', completed: false, editing: false },
    { id: 3, text: 'React練習', completed: true, editing: false },
  ])
  //篩選用的->可見性過濾 type= '所有' | '進行中' ｜ '已完成'
  const filterOptions = ['所有', '進行中', '已完成']
  const [myFilter, setMyFilter] = useState('所有')
  //type = '所有' | '進行中' ｜ '已完成'
  const getFilterTodos = (todos, type) => {
    if (type === '所有') return todos
    if (type === '進行中')
      return todos.filter((v, i) => {
        return !v.completed //false
      })
    if (type === '已完成')
      return todos.filter((v, i) => {
        return v.completed //true
      })
  }

  const toggleCompleted = (todos, id) => {
    return todos.map((v, i) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }
  const toggleEditing = (todos, id) => {
    return todos.map((v, i) => {
      if (v.id === id) return { ...v, editing: !v.editing }
      else return { ...v, editing: false }
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
  const createTodo = (text) => {
    return {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
  }
  const updateTodo = (todos, id, newText) => {
    return todos.map((v, i) => {
      if (v.id === id)
        return {
          ...v,
          text: newText,
          editing: false,
        }
      else return { ...v }
    })
  }

  //專門給AddForm.js用的，並非上面的純粹化函式
  const handleAddTodo = (text) => {
    setTodos(addTodo(todos, createTodo(text)))
  }
  //專門給TodoList用的
  const handleToggleCompletes = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  const handleToggleEditing = (id) => {
    setTodos(toggleEditing(todos, id))
  }
  const handleDeleteTodo = (id) => {
    setTodos(deleteTodo(todos, id))
  }
  const handleUpdateTodo = (id, text) => {
    setTodos(updateTodo(todos, id, text))
  }
  return (
    <>
      <h1>待辦事項</h1>
      {/*AddForm專用*/}
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
        todos={getFilterTodos(todos, myFilter)}
        // toggleCompleted={toggleCompleted}
        // setTodos={setTodos}
        // deleteTodo={deleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompletes={handleToggleCompletes}
        handleToggleEditing={handleToggleEditing}
        handleUpdateTodo={handleUpdateTodo}
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
      <hr />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              v === myFilter ? 'filter-button-active' : 'filter-button-normal'
            }
            onClick={() => {
              setMyFilter(v)
            }}
          >
            {v}
          </button>
        )
      })}
      {/* <button
        className="filter-button-normal"
        onClick={() => {
          setMyFilter('所有')
        }}
      >
        所有
      </button>
      <button
        className="filter-button-normal"
        onClick={() => {
          setMyFilter('進行中')
        }}
      >
        進行中
      </button>
      <button className="filter-button-active">已完成</button> */}
    </>
  )
}

export default TodoApp
