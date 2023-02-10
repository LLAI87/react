import React from 'react'

//  function ChildA({ pData }) {
function ChildA(props) {
  const { dataFromChildB } = props
  return (
    <>
      <h1>ChildA</h1>
      <p>從子女B來的資料：{dataFromChildB}</p>
    </>
  )
}

export default ChildA
