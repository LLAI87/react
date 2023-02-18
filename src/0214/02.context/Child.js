import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Child() {
  const { color, setColor } = useContext(ThemeContext)
  return (
    <>
      <h1 style={{ color: color }}>Child</h1>
      <button
        onClick={() => {
          setColor('red')
        }}
      >
        Turn Red
      </button>
    </>
  )
}
