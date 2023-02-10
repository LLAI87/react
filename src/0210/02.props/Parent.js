import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

export default function Parent() {
  //for Child A
  //   const [pData, setPData] = useState('p data')
  //for ChildB 準備接受來自子女元件的資料的狀態
  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      {/* <ChildA pData={pData}  /> */}
      {/* <p>來自子女B的資料：{dataFromChildB}</p> */}
      <ChildA dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}
