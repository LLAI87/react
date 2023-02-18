import React, { useState } from 'react'
import Calc from './Calc'

export default function Form() {
  const [myHeight, setMyHeight] = useState(0)
  const [myWeight, setMyWeight] = useState(0)
  const [myBMI, setMyBMI] = useState(0)
  return (
    <>
      <Calc />
      <h1>BMI計算</h1>
      <label>身高（公分）：</label>
      <input
        type="text"
        name="myHeight"
        value={myHeight === 0 ? '' : myHeight}
        onChange={(e) => {
          setMyHeight(Number(e.target.value))
        }}
      />
      <br />
      <label>體重（公斤）：</label>
      <input
        type="text"
        name="myWeight"
        value={myWeight === 0 ? '' : myWeight}
        onChange={(e) => {
          setMyWeight(Number(e.target.value))
        }}
      />
      <br />
      <button
        onClick={() => {
          //檢查有沒有輸入值
          if (myHeight === 0 || myWeight === 0) {
            alert('必填身高體重')
            return
          }
          const bmi = myWeight / Math.pow(myHeight / 100, 2)
          setMyBMI(bmi)
        }}
      >
        計算
      </button>
      <button>清除</button>
    </>
  )
}
