import React from 'react'

export default function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="myInput" />
      <button
        onClick={() => {
          document.getElementById('myInput').focus()
        }}
      >
        聚焦Focus
      </button>
      <button
        onClick={() => {
          document.getElementById('myInput').blur()
        }}
      >
        失焦Blur
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('myInput').value)
        }}
      >
        印出值
      </button>
    </>
  )
}
