import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      <Child text="hey" price={456} id={3} color="red" />
      <Child />
    </>
  )
}
export default Parent
