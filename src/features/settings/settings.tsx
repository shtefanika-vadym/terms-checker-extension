import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Book, History, Language, Logout } from 'tabler-icons-react'

import { SettingsWrapper } from 'features/settings/components/settings-wrapper/settings-wrapper'

import { useAuth } from 'common/hooks'

import { SettingsHistory } from 'features/settings/components/settings-history/settings-history'
import { SettingsLanguage } from 'features/settings/components/settings-language/settings-language'
import { SettingsRowList } from 'features/settings/components/settings-row-list/settings-row-list'
import { SettingsTerms } from 'features/settings/components/settings-terms/settings-terms'

import styles from './settings.module.scss'

export const Settings: FC = () => {
  const { logout } = useAuth()
  const { t } = useTranslation()
  const [settingTab, setSettingTab] = useState<string>(null)

  const handleChangeTab = (tab: string): void => {
    setSettingTab(tab)
  }

  const handleGoBack = (): void => {
    setSettingTab(null)
  }

  if (settingTab) {
    const tabs: Map<string, JSX.Element> = new Map([
      [t('myTerms'), <SettingsTerms />],
      [t('sHistory'), <SettingsHistory />],
      [t('language'), <SettingsLanguage />],
    ])

    return (
      <SettingsWrapper tab={settingTab} handleGoBack={handleGoBack}>
        {tabs.get(settingTab)}
      </SettingsWrapper>
    )
  }

  return (
    <div className={styles.parent}>
      <h1 className={styles.parentTitle}>{t('settings')}</h1>
      <SettingsRowList
        items={[
          {
            title: t('sHistory'),
            handleChange: handleChangeTab,
            icon: <History strokeWidth={1} />,
          },
          {
            title: t('myTerms'),
            handleChange: handleChangeTab,
            icon: <Book strokeWidth={1} />,
          },
          {
            title: t('language'),
            handleChange: handleChangeTab,
            icon: <Language strokeWidth={1} />,
          },
          { title: t('logout'), icon: <Logout strokeWidth={1} />, handleChange: logout },
        ]}
      />
    </div>
  )
}
