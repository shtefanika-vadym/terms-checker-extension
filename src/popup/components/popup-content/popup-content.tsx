import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import classNames from 'classnames'
import { Moon, Sun } from 'tabler-icons-react'

import { withProviders } from 'app/hoks'

import { Show, Tabs } from 'common/components'
import { Theme } from 'common/const'
import { useAuth, useTheme } from 'common/hooks'

import { Analysis } from 'features/analysis'
import { Auth } from 'features/auth'
import { PageTerms } from 'features/page-terms'
import { Settings } from 'features/settings'

import styles from './popup-content.module.scss'

interface Props {
  onClose?: () => void
}

const PopupContent: FC<Props> = ({ onClose }) => {
  const { user } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  return (
    <div className={classNames(styles.parent, [theme])}>
      <button onClick={toggleTheme} className={styles.parentThemeSwitcher}>
        <Show when={theme === Theme.DARK} fallback={<Moon size={30} strokeWidth={1} />}>
          <Sun size={30} strokeWidth={1} />
        </Show>
      </button>
      <Show when={user} fallback={<Auth />}>
        <Tabs
          items={[
            { title: t('analysis'), component: <Analysis /> },
            { title: t('history'), component: <PageTerms /> },
            { title: t('settings'), component: <Settings /> },
          ]}
        />
      </Show>
    </div>
  )
}

export default withProviders(PopupContent)
