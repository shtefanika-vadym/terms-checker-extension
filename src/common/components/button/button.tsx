import type { ButtonHTMLAttributes, FC } from 'react'

import classNames from 'classnames'

import { ButtonModifier } from 'common/const'
import { Utils } from 'common/utils'

import 'app/styles/index.scss'

import styles from './button.module.scss'

const { capitalizeFirstLetter } = Utils

export interface Props extends ButtonHTMLAttributes<any> {
  modifier?: ButtonModifier
  children: JSX.Element | string
}

export const Button: FC<Props> = ({ children, modifier = ButtonModifier.PRIMARY, ...rest }) => {
  return (
    <button
      className={classNames(styles.parent, styles[`parent${capitalizeFirstLetter(modifier)}`])}
      {...rest}>
      {children}
    </button>
  )
}
