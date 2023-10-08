import { ReactNode, useMemo, useState } from 'react'

import { Theme } from 'common/const'
import { ThemeContext } from 'common/context'

interface Props {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.DARK)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
