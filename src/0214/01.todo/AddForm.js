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
        autoFocus
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo(inputValue)

            // const newTodo = {
            //   id: Number(new Date()),
            //   text: inputValue,
            //   completed: false,
            // }
            //清空輸入匡
            setInputValue('')
          } //按下enter件
        }}
      />
    </>
  )
}
