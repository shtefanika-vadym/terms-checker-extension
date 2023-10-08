import { useContext } from 'react'

import { Theme } from 'common/const'
import { ThemeContext } from 'common/context'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK)
    } else {
      setTheme(Theme.LIGHT)
    }
  }

  return {
    toggleTheme,
    theme: theme || Theme.LIGHT,
  }
}
