import Parent from './Parent'
import { useState } from 'react'

//部分導入Context
import { ThemeContext } from './ThemeContext'

export default function GrandParent() {
  const [color, setColor] = useState('lightblue')
  return (
    <ThemeContext.Provider value={{ color: color, setColor: setColor }}>
      <Parent />
    </ThemeContext.Provider>
  )
}
