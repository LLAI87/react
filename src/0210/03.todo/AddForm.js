import { useState } from 'react'
// import React from 'react'
// import {inputValue, }

export default function AddForm(props) {
  const [inputValue, setInputValue] = useState('')
  const { handleAddTodo } = props

  return (
    <>
      <input
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
            const newTodo = {
              id: Number(new Date()),
              text: inputValue,
              completed: false,
            }
            // setTodos(addTodo(todos, newTodo))
            handleAddTodo(newTodo)
            //清空輸入匡
            setInputValue('')
          } //按下enter件
        }}
      />
    </>
  )
}
