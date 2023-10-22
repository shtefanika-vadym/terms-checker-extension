import type { FC } from 'react'

import styles from './spinner.module.scss'

interface Props {
  isLoading: boolean
}

export const Spinner: FC<Props> = ({ isLoading }) => {
  if (!isLoading) {
    return null
  }
  return <div className={styles.parent} />
}
