import { useTranslation } from 'react-i18next'
import { useToggle } from 'react-use'

import { Form, Formik } from 'formik'

import { Button, Input, Show } from 'common/components'
import { ButtonSize } from 'common/const'

import { INITIAL_AUTH_VALUES } from 'features/auth/const/auth'
import { LoginSchema } from 'features/auth/schemas/auth-login'
import { RegisterSchema } from 'features/auth/schemas/auth-register'

import styles from './auth-content.module.scss'

export const AuthContent = () => {
  const { t } = useTranslation()
  const [isLoginForm, toggleIsLoginForm] = useToggle(true)

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <div className={styles.parent}>
      <h1 className={styles.parentTitle}>
        {t('addLayer')}
        <span> {t('security')} </span>
        {t('yourLife')}
      </h1>
      <h2 className={styles.parentSubtitle}>{t(isLoginForm ? 'login' : 'register')}</h2>
      <Formik
        isInitialValid
        onSubmit={handleSubmit}
        validateOnChange={false}
        initialValues={INITIAL_AUTH_VALUES}
        validationSchema={isLoginForm ? LoginSchema : RegisterSchema}>
        {({ errors, values, handleChange }) => (
          <Form className={styles.parentForm}>
            <Input
              required
              name='email'
              type='email'
              error={errors.email}
              value={values.email}
              label={t('email')}
              onChange={handleChange}
            />
            <Input
              required
              name='password'
              type='password'
              error={errors.password}
              value={values.password}
              label={t('password')}
              onChange={handleChange}
            />
            <Show when={!isLoginForm}>
              <Input
                required
                type='password'
                name='confirmPassword'
                onChange={handleChange}
                error={errors.confirmPassword}
                value={values.confirmPassword}
                label={t('confirmPassword')}
              />
            </Show>

            <div>
              <Button type='submit' size={ButtonSize.LARGE}>
                {t('getStarted')}
              </Button>
              <p className={styles.parentFormText}>
                {isLoginForm ? t('dontHaveAccount') : t('alreadyHaveAccount')}
                <button onClick={toggleIsLoginForm}>{t(isLoginForm ? 'register' : 'login')}</button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
