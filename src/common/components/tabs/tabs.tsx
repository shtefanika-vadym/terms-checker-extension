import type { FC } from 'react'
import { useCallback, useState } from 'react'

import classNames from 'classnames'

import { Tab } from 'common/interfaces/tab'

import styles from './tabs.module.scss'

interface IProps {
  items: Tab[]
}

export const Tabs: FC<IProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<Tab>(items[0])

  const handleChangeActivateTab = useCallback((tab: Tab) => {
    setActiveTab(tab)
  }, [])

  return (
    <div className={styles.parent}>
      <div className={styles.parentTabs}>
        {items.map(
          (tab: Tab, index: number): JSX.Element => (
            <div
              key={index}
              className={classNames(styles.parentTab, {
                [styles.parentActiveTab]: tab.title === activeTab.title,
              })}
              onClick={() => handleChangeActivateTab(tab)}>
              {tab.title}
              {activeTab.title === tab.title && <span className={styles.parentActiveTabLine} />}
            </div>
          ),
        )}
      </div>

      {activeTab.component}
    </div>
  )
}
