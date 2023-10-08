import { ComponentType, FC } from 'react'
import { Provider } from 'react-redux'

import { store } from 'app/store/store'

export const withRedux = <T extends object>(Component: ComponentType<T>): FC<T> => {
  const WithReduxWrapper: FC<T> = (props: T) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }

  return WithReduxWrapper
}
