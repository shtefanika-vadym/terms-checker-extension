import type { FC, TextareaHTMLAttributes } from 'react'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'

import { Show } from 'common/components/show/show'

import styles from './textarea.module.scss'

export interface Props extends TextareaHTMLAttributes<any> {
  error?: string
  label?: string
  required?: boolean
}

export const Textarea: FC<Props> = ({ label, required = false, error, ...rest }) => {
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
      <textarea
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
