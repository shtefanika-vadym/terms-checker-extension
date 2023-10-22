import type { FC } from 'react'
import { useState } from 'react'

import { Book, History, Language, Logout } from 'tabler-icons-react'

import { SettingsWrapper } from 'features/settings/components/settings-wrapper/settings-wrapper'

import { useAuth } from 'common/hooks'

import { SettingsHistory } from 'features/settings/components/settings-history/settings-history'
import { SettingsLanguage } from 'features/settings/components/settings-language/settings-language'
import { SettingsRowList } from 'features/settings/components/settings-row-list/settings-row-list'
import { SettingsTerms } from 'features/settings/components/settings-terms/settings-terms'
import { SettingsConst, SettingsTab } from 'features/settings/const/settings'

import styles from './settings.module.scss'

export const Settings: FC = () => {
  const { logout } = useAuth()
  const [settingTab, setSettingTab] = useState<SettingsTab>(null)

  const handleChangeTab = (tab: SettingsTab): void => {
    setSettingTab(tab)
  }

  const handleGoBack = (): void => {
    setSettingTab(null)
  }

  if (settingTab) {
    const tabs: Map<SettingsTab, JSX.Element> = new Map([
      [SettingsTab.MY_TERMS, <SettingsTerms />],
      [SettingsTab.HISTORY, <SettingsHistory />],
      [SettingsTab.LANGUAGE, <SettingsLanguage />],
    ])

    return (
      <SettingsWrapper tab={settingTab} handleGoBack={handleGoBack}>
        {tabs.get(settingTab)}
      </SettingsWrapper>
    )
  }

  return (
    <div className={styles.parent}>
      <h1 className={styles.parentTitle}>{SettingsConst.SETTINGS}</h1>
      <SettingsRowList
        items={[
          {
            title: SettingsTab.HISTORY,
            handleChange: handleChangeTab,
            icon: <History strokeWidth={1} />,
          },
          {
            title: SettingsTab.MY_TERMS,
            handleChange: handleChangeTab,
            icon: <Book strokeWidth={1} />,
          },
          {
            title: SettingsTab.LANGUAGE,
            handleChange: handleChangeTab,
            icon: <Language strokeWidth={1} />,
          },
          { title: SettingsTab.LOGOUT, icon: <Logout strokeWidth={1} />, handleChange: logout },
        ]}
      />
    </div>
  )
}
