import { createContext } from 'react'

import { AuthLogin, AuthRegister } from 'features/auth'

export interface AuthContextProps {
  user: any
  isLoading: boolean
  logout: () => void
  login: (values: AuthLogin) => Promise<void>
  register: (values: AuthRegister) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: false,
  login: () => undefined,
  logout: () => undefined,
  register: () => undefined,
})
