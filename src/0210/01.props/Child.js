// import React from 'react'
// ...是其餘運算子，不是解構
function Child({ text = '解構語法定義預設值', price = 999, ...others }) {
  //   console.log(props)

  //解構物件值，先解構props再使用
  //   const { text = '解構語法定義預設值', price = 999 } = props

  console.log(others)
  return (
    <>
      {/* <h1>This is a Child wrapped in parent</h1> */}
      <h2>{text}</h2>
      <h3>價格：{price}</h3>
      <span>132</span>
    </>
  )
}

//預設屬性要設定在這裡，類別型與函式型元件通用
// Child.defaultProps = {
//   text: 'DefaultProps',
//   price: 0,
// }

export default Child
