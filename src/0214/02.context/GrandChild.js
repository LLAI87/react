import { useContext } from 'react'
// 導入context
import { ThemeContext } from './ThemeContext'

function GrandChild() {
  // 透過context得到GrandParent中的狀態
  const { color, setColor } = useContext(ThemeContext)

  return (
    <>
      <h1 style={{ color: color }}>GrandChild</h1>
      <button
        onClick={() => {
          setColor('red')
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor('green')
        }}
      >
        Green
      </button>
    </>
  )
}

export default GrandChild
