import type { ButtonHTMLAttributes, FC } from 'react'

import classNames from 'classnames'

import { ButtonModifier, ButtonSize } from 'common/const'
import { Utils } from 'common/utils'

import 'app/styles/index.scss'

import styles from './button.module.scss'

const { capitalizeFirstLetter } = Utils

export interface Props extends ButtonHTMLAttributes<any> {
  size?: ButtonSize
  modifier?: ButtonModifier
  children: JSX.Element | string
}

export const Button: FC<Props> = ({
  children,
  size = ButtonSize.MEDIUM,
  modifier = ButtonModifier.PRIMARY,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        styles.parent,
        styles[`parent${capitalizeFirstLetter(size)}`],
        styles[`parent${capitalizeFirstLetter(modifier)}`],
      )}
      {...rest}>
      {children}
    </button>
  )
}
