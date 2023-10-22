import type { FC, ReactNode } from 'react'

import classNames from 'classnames'

import { RowJustify } from 'common/const'
import { Utils } from 'common/utils'

import styles from './row.module.scss'

const { capitalizeFirstLetter } = Utils

interface Props {
  justify?: RowJustify
  children: ReactNode
  uppercase?: boolean
  onClick?: () => void
}

export const Row: FC<Props> = ({ children, onClick, uppercase, justify = RowJustify.START }) => {
  if (onClick) {
    return (
      <button
        className={classNames(
          styles.parent,
          styles.parentButton,
          { [styles.parentUppercase]: uppercase },
          styles[`parent${capitalizeFirstLetter(justify)}`],
        )}
        onClick={onClick}>
        {children}
      </button>
    )
  }
  return (
    <div
      className={classNames(styles.parent, styles[`parent${capitalizeFirstLetter(justify)}`], {
        [styles.parentUppercase]: uppercase,
      })}>
      {children}
    </div>
  )
}
