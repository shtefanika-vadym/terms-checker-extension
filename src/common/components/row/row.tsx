import type { FC, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './row.module.scss'

interface Props {
  onClick?: () => void
  children: ReactNode
}

export const Row: FC<Props> = ({ children, onClick }) => {
  if (onClick) {
    return (
      <button className={classNames(styles.parent, styles.parentButton)} onClick={onClick}>
        {children}
      </button>
    )
  }
  return <div className={styles.parent}>{children}</div>
}
