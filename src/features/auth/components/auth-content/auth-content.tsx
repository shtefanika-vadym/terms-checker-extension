import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useToggle } from 'react-use'

import classNames from 'classnames'
import { useFormik } from 'formik'

import { Button, Input, Show } from 'common/components'
import { ButtonSize } from 'common/const'
import { useAuth } from 'common/hooks'

import { INITIAL_AUTH_VALUES } from 'features/auth/const/auth'
import { LoginSchema } from 'features/auth/schemas/auth-login'
import { RegisterSchema } from 'features/auth/schemas/auth-register'

import styles from './auth-content.module.scss'

export const AuthContent = () => {
  const { t } = useTranslation()
  const { isLoading, login, register } = useAuth()
  const [isLoginForm, toggleIsLoginForm] = useToggle(true)

  const formik = useFormik({
    isInitialValid: true,
    validateOnChange: false,
    initialValues: INITIAL_AUTH_VALUES,
    onSubmit: isLoginForm ? login : register,
    validationSchema: isLoginForm ? LoginSchema : RegisterSchema,
  })

  useEffect(() => {
    formik.setErrors({})
    formik.setValues(INITIAL_AUTH_VALUES)
  }, [isLoginForm])

  return (
    <div className={styles.parent}>
      <h1 className={styles.parentTitle}>
        {t('addLayer')}
        <span> {t('security')} </span>
        {t('yourLife')}
      </h1>
      <h2 className={styles.parentSubtitle}>{t(isLoginForm ? 'login' : 'register')}</h2>
      <form onSubmit={formik.handleSubmit} className={styles.parentForm}>
        <Input
          required
          name='email'
          type='email'
          label={t('email')}
          error={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          required
          name='password'
          type='password'
          label={t('password')}
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Show when={!isLoginForm}>
          <Input
            required
            type='password'
            name='confirmPassword'
            onChange={formik.handleChange}
            label={t('confirmPassword')}
            error={formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
          />
        </Show>

        <div>
          <Button isLoading={isLoading} type='submit' size={ButtonSize.LARGE}>
            {t('getStarted')}
          </Button>
          <p
            className={classNames(styles.parentFormText, {
              [styles.parentFormTextDisabled]: isLoading,
            })}>
            {isLoginForm ? t('dontHaveAccount') : t('alreadyHaveAccount')}
            <button type='button' onClick={toggleIsLoginForm}>
              {t(isLoginForm ? 'register' : 'login')}
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}
