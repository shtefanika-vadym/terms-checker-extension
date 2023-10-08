import { ComponentType, FC } from 'react'

import ThemeProvider from 'app/providers/theme-provider'

export const withTheme = <T extends object>(Component: ComponentType<T>): FC<T> => {
  const WithThemeWrapper: FC<T> = (props: T) => {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return WithThemeWrapper
}
