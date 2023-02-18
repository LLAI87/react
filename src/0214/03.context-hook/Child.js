import { useTheme } from './useTheme'

export default function Child() {
  const { color, setColor } = useTheme()
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
      <button
        onClick={() => {
          setColor('green')
        }}
      >
        Turn Green
      </button>
    </>
  )
}
