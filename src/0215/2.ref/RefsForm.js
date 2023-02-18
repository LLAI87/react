import { useRef } from 'react'

export default function RefsForm() {
  //宣告後，inputRef = {current:null}
  const inputRef = useRef(null)
  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦Focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦Blur
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        印出值
      </button>
    </>
  )
}
