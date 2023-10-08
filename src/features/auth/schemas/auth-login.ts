import { object, string } from 'yup'

export const LoginSchema = object({
  email: string().email().required(),
  password: string().min(6).max(20).required(),
})
