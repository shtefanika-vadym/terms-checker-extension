import type { FC, InputHTMLAttributes } from 'react'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'

import { Show } from 'common/components/show/show'

import styles from './input.module.scss'

export interface Props extends InputHTMLAttributes<any> {
  error?: string
  label?: string
  required?: boolean
}

export const Input: FC<Props> = ({ label, required = false, error, ...rest }) => {
  const id = useId()
  const { t } = useTranslation()
  return (
    <div className={styles.parent}>
      <Show when={label}>
        <label htmlFor={id} className={styles.parentLabel}>
          {label}
          <Show when={required}>
            <span className={styles.parentRequired}> *</span>
          </Show>
        </label>
      </Show>
      <input
        id={id}
        className={styles.parentInput}
        placeholder={rest.placeholder || t('typeHere')}
        {...rest}
      />
      <Show when={error}>
        <p className={styles.parentError}>{error}</p>
      </Show>
    </div>
  )
}
