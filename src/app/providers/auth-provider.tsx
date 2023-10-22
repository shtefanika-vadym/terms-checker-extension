import type { ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { useToggle } from 'react-use'

import { AuthContext, AuthContextProps } from 'common/context'

import { AuthLogin, AuthRegister } from 'features/auth'

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState('adym')
  const [isLoading, toggleIsLoading] = useToggle(false)

  const logout = (): void => {
    setUser(null)
  }

  const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s * 1000))

  const login = useCallback(async (data: AuthLogin): Promise<void> => {
    toggleIsLoading()
    await delay(8)
    toggleIsLoading()
    setUser('Vadym')
    console.log('login', data)
  }, [])

  const register = useCallback(async (data: AuthRegister): Promise<any> => {
    toggleIsLoading()
    await delay(8)
    toggleIsLoading()
    setUser('Vadym')
    console.log('register', data)
  }, [])

  const value: AuthContextProps = useMemo(
    () => ({
      user,
      login,
      logout,
      register,
      isLoading,
    }),
    [isLoading, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
