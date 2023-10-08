import type { ReactNode } from 'react'
import { useMemo } from 'react'

import { AuthContext } from 'common/context'

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const logout = (): void => {}

  const login = async (data: any): Promise<void> => {}

  const register = async (registerData: any): Promise<any> => {}

  const value = useMemo(
    () => ({
      login,
      logout,
      register,
      user: null,
    }),
    [],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
