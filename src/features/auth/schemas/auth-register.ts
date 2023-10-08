import { string } from 'yup'

import { LoginSchema } from 'features/auth/schemas/auth-login'

export const RegisterSchema = LoginSchema.shape({
  confirmPassword: string()
    .min(6)
    .max(20)
    .label('Confirm password')
    .required()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
})
