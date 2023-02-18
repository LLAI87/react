import { useState, useContext, createContext } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('lightblue')

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext)
