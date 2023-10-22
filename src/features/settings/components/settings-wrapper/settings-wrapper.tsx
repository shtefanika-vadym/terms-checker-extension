import type { FC, ReactNode } from 'react'

import { ArrowBackUp } from 'tabler-icons-react'

import styles from './settings-wrapper.module.scss'

import { SettingsTab } from 'features/settings/const/settings'

interface Props {
  tab: SettingsTab
  children: ReactNode
  handleGoBack: () => void
}

export const SettingsWrapper: FC<Props> = ({ tab, children, handleGoBack }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.parentHeader}>
        <button className='reset-button' onClick={handleGoBack}>
          <ArrowBackUp size={30} strokeWidth={1} />
        </button>
        <h1 className={styles.parentTitle}>{tab}</h1>
      </div>
      {children}
    </div>
  )
}
