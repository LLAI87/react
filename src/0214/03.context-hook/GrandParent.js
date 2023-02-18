import Parent from './Parent'

import { ThemeProvider } from './useTheme'

function GrandParent() {
  return (
    <>
      <ThemeProvider>
        <Parent />
      </ThemeProvider>
    </>
  )
}

export default GrandParent
