import type { ButtonHTMLAttributes, FC } from 'react'

import classNames from 'classnames'

import { Spinner } from 'common/components'
import { ButtonModifier, ButtonSize } from 'common/const'
import { Utils } from 'common/utils'

import 'app/styles/index.scss'

import styles from './button.module.scss'

const { capitalizeFirstLetter } = Utils

export interface Props extends ButtonHTMLAttributes<any> {
  size?: ButtonSize
  isLoading?: boolean
  modifier?: ButtonModifier
  children: JSX.Element | string
}

export const Button: FC<Props> = ({
  children,
  isLoading,
  size = ButtonSize.MEDIUM,
  modifier = ButtonModifier.PRIMARY,
  ...rest
}) => {
  return (
    <button
      disabled={isLoading || rest.disabled}
      className={classNames(
        styles.parent,
        styles[`parent${capitalizeFirstLetter(size)}`],
        styles[`parent${capitalizeFirstLetter(modifier)}`],
      )}
      {...rest}>
      {children}
      <Spinner isLoading={isLoading} />
    </button>
  )
}
