import { createContext } from 'react'

interface Props {
  user: any
}

export const AuthContext = createContext<Props>({ user: null })
