import { useEffect, useState } from 'react'

export default function EditForm(props) {
  const { text, id, handleUpdateTodo } = props
  // https://stackoverflow.com/questions/54625831/how-to-sync-props-to-state-using-react-hooks-setstate
  //一般而言，props作為state初始值應避免，除非只需要在內部狀態初始化而已，而且之後props不會在被更動，或元件不需要再反應其它更動時
  const [inputValue, setInputValue] = useState(text)

  useEffect(() => {
    setInputValue(text)
  }, [text])
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />

      <button
        onClick={() => {
          handleUpdateTodo(id, inputValue)
        }}
      >
        儲存
      </button>
    </>
  )
}
