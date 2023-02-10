import React, { useState, useEffect } from 'react'

function ChildB(props) {
  const { setDataFromChildB } = props
  const [cData, setCData] = useState('ChildB初始資料')

  //方式1，利用useEffect送出資料給父母
  //類似onchange事件
  useEffect(() => {
    setDataFromChildB(cData)
  }, [cData]) //當cData有變化，執行其中的第一個傳入參數，即箭頭函式中的程式碼，但此元件初次render一開始也會執行一次

  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          setCData('hello')
        }}
      >
        change to hello
      </button>
      {/* 方式二: 利用事件觸發送資料回父母 */}
      {/* <button
        onClick={() => {
          setDataFromChildB(cData)
        }}
      >
        送資料給Parent
      </button> */}
    </>
  )
}
export default ChildB
