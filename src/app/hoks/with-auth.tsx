import { ComponentType, FC } from 'react'

import { AuthProvider } from 'app/providers/auth-provider'

export const withAuth = <T extends object>(Component: ComponentType<T>): FC<T> => {
  const WithAuthWrapper: FC<T> = (props: T) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  }

  return WithAuthWrapper
}
