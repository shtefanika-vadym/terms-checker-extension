import { createContext } from 'react'

import { Theme } from 'common/const'

export interface Props {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<Props>({})
