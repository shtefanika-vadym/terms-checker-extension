import { ComponentType, FC } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from 'app/config/i18n'

export const withI18 = <T extends object>(Component: ComponentType<T>): FC<T> => {
  const WithI18Wrapper: FC<T> = (props: T) => {
    return (
      <I18nextProvider i18n={i18n}>
        <Component {...props} />
      </I18nextProvider>
    )
  }

  return WithI18Wrapper
}
