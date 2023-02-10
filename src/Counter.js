import { useState } from 'react'
import './Counter.css'
function Counter() {
  const [total, setTotal] = useState(0)
  //App第一個字一定大寫
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {!!total && <p>Message:{total}</p>}
      {total > 0 && <p>Message:{total}</p>}
      {total !== 0 && <p>Message:{total}</p>}
    </>
  )
}

export default Counter
