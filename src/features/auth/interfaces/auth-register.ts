import { AuthLogin } from 'features/auth/interfaces/auth-login'

export interface AuthRegister extends AuthLogin {
  confirmPassword: string
}
